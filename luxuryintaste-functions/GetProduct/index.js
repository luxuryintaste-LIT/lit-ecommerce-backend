const { CosmosClient } = require('@azure/cosmos');
const { BlobServiceClient } = require('@azure/storage-blob');

module.exports = async function (context, req) {
  try {
    // Initialize clients
    const cosmosClient = new CosmosClient(process.env.COSMOSDB_CONNECTION_STRING);
    const blobServiceClient = BlobServiceClient.fromConnectionString(process.env.STORAGE_CONNECTION_STRING);
    const containerClient = blobServiceClient.getContainerClient(process.env.STORAGE_CONTAINER_NAME);

    // Get productId from route parameters
    const productId = context.bindingData.productId;

    if (!productId) {
      context.res = {
        status: 400,
        body: "Product ID is required"
      };
      return;
    }

    // Get product from Cosmos DB
    const database = cosmosClient.database('LuxuryInTasteDB');
    const container = database.container('Products');
    const { resource: product } = await container.item(productId, productId).read();

    if (!product) {
      context.res = {
        status: 404,
        body: "Product not found"
      };
      return;
    }

    // Get image URLs for each color
    const imageUrls = {};
    for (const color of product.colors) {
      const prefix = `${productId}/${color}/`;
      const blobs = containerClient.listBlobsFlat({ prefix });
      const urls = [];
      
      for await (const blob of blobs) {
        const blockBlobClient = containerClient.getBlockBlobClient(blob.name);
        urls.push(blockBlobClient.url);
      }
      
      imageUrls[color] = urls;
    }

    // Combine product data with image URLs
    const response = {
      ...product,
      imageUrls
    };

    context.res = {
      status: 200,
      body: response
    };
  } catch (error) {
    context.res = {
      status: 500,
      body: error.message
    };
  }
};