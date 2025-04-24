const { CosmosClient } = require('@azure/cosmos');
const { v4: uuidv4 } = require('uuid');

module.exports = async function (context, req) {
  try {
    // Initialize Cosmos DB client
    const cosmosClient = new CosmosClient(process.env.COSMOSDB_CONNECTION_STRING);
    const database = cosmosClient.database('LuxuryInTasteDB');
    const container = database.container('Products');

    // Validate request body
    if (!req.body) {
      context.res = {
        status: 400,
        body: "Please pass a request body"
      };
      return;
    }

    // Create product object
    const product = {
      id: uuidv4(),
      productId: uuidv4(),
      brandName: req.body.brandName,
      productName: req.body.productName,
      originalPrice: req.body.originalPrice,
      currentPrice: req.body.currentPrice,
      discountPercentage: req.body.discountPercentage,
      description: req.body.description,
      colors: req.body.colors || [],
      sizes: req.body.sizes || [],
      features: req.body.features || [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    // Save to Cosmos DB
    const { resource } = await container.items.create(product);

    context.res = {
      status: 201,
      body: resource
    };
  } catch (error) {
    context.res = {
      status: 500,
      body: error.message
    };
  }
};