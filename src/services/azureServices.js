import { CosmosClient } from '@azure/cosmos';
import { BlobServiceClient } from '@azure/storage-blob';
import { azureConfig } from './azureConfig';

// Initialize Cosmos Client
const cosmosClient = new CosmosClient({
    endpoint: azureConfig.cosmosDb.endpoint,
    key: azureConfig.cosmosDb.key
});

// Initialize Blob Service Client
const blobServiceClient = BlobServiceClient.fromConnectionString(
    azureConfig.blobStorage.connectionString
);

// Get container client for blob storage
const containerClient = blobServiceClient.getContainerClient(
    azureConfig.blobStorage.containerName
);

// Get database and container for Cosmos DB
const database = cosmosClient.database(azureConfig.cosmosDb.databaseId);
const container = database.container(azureConfig.cosmosDb.containerId);

/**
 * Upload an image to Azure Blob Storage
 * @param {File} file - The file to upload
 * @param {string} color - The color category for the image
 * @param {string} productId - The product ID
 * @returns {Promise<string>} - The URL of the uploaded image
 */
export const uploadImageToBlob = async (file, color, productId) => {
    try {
        // Create a unique name for the blob
        const blobName = `${productId}/${color}/${Date.now()}-${file.name}`;
        const blockBlobClient = containerClient.getBlockBlobClient(blobName);

        // Upload the file
        await blockBlobClient.uploadData(file);

        // Get the URL of the uploaded blob
        return blockBlobClient.url;
    } catch (error) {
        console.error('Error uploading image to blob storage:', error);
        throw error;
    }
};

/**
 * Save product data to Cosmos DB
 * @param {Object} productData - The product data to save
 * @returns {Promise<Object>} - The saved product data
 */
export const saveProductToCosmosDB = async (productData) => {
    try {
        // Add timestamp and id
        const item = {
            ...productData,
            id: `product_${Date.now()}`,
            type: 'product',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        // Save to Cosmos DB
        const { resource } = await container.items.create(item);
        return resource;
    } catch (error) {
        console.error('Error saving product to Cosmos DB:', error);
        throw error;
    }
};

/**
 * Save a complete product with images
 * @param {Object} formData - The complete form data including files
 * @returns {Promise<Object>} - The saved product data
 */
export const saveProduct = async (formData) => {
    try {
        // First, upload all images and get their URLs
        const imageUrls = {};
        for (const [color, files] of Object.entries(formData.colorImages)) {
            const urls = await Promise.all(
                files.map(file => uploadImageToBlob(file, color, `product_${Date.now()}`))
            );
            imageUrls[color] = urls;
        }

        // Prepare product data for Cosmos DB
        const productData = {
            brandName: formData.brandName,
            productName: formData.productName,
            originalPrice: parseFloat(formData.originalPrice),
            currentPrice: parseFloat(formData.currentPrice),
            discountPercentage: parseFloat(formData.discountPercentage),
            description: formData.description,
            colors: formData.colors,
            sizes: formData.sizes,
            features: formData.features,
            images: imageUrls
        };

        // Save to Cosmos DB
        const savedProduct = await saveProductToCosmosDB(productData);
        return savedProduct;
    } catch (error) {
        console.error('Error saving product:', error);
        throw error;
    }
}; 