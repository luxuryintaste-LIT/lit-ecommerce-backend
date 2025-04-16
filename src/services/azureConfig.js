// Azure Configuration
export const azureConfig = {
    // Cosmos DB Configuration
    cosmosDb: {
        endpoint: process.env.VITE_COSMOS_ENDPOINT,
        key: process.env.VITE_COSMOS_KEY,
        databaseId: process.env.VITE_COSMOS_DATABASE_ID,
        containerId: process.env.VITE_COSMOS_CONTAINER_ID
    },
    // Blob Storage Configuration
    blobStorage: {
        connectionString: process.env.VITE_STORAGE_CONNECTION_STRING,
        containerName: process.env.VITE_BLOB_CONTAINER_NAME
    }
}; 