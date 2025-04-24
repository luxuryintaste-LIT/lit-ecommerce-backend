const { BlobServiceClient } = require('@azure/storage-blob');
const { v4: uuidv4 } = require('uuid');

module.exports = async function (context, req) {
  try {
    // Initialize Blob Storage client
    const blobServiceClient = BlobServiceClient.fromConnectionString(process.env.STORAGE_CONNECTION_STRING);
    const containerClient = blobServiceClient.getContainerClient(process.env.STORAGE_CONTAINER_NAME);

    // Get productId from route parameters
    const productId = context.bindingData.productId;
    const color = req.body.color;

    if (!productId || !color) {
      context.res = {
        status: 400,
        body: "Product ID and color are required"
      };
      return;
    }

    // Process each image
    const imageUrls = [];
    for (const image of req.body.images) {
      // Create a unique blob name
      const blobName = `${productId}/${color}/${uuidv4()}.jpg`;
      const blockBlobClient = containerClient.getBlockBlobClient(blobName);

      // Convert base64 to buffer
      const buffer = Buffer.from(image.data, 'base64');

      // Upload the image
      await blockBlobClient.upload(buffer, buffer.length);

      // Get the URL of the uploaded image
      const imageUrl = blockBlobClient.url;
      imageUrls.push(imageUrl);
    }

    context.res = {
      status: 201,
      body: {
        message: "Images uploaded successfully",
        imageUrls: imageUrls
      }
    };
  } catch (error) {
    context.res = {
      status: 500,
      body: error.message
    };
  }
};