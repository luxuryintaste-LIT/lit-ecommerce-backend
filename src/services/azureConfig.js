// Azure Configuration
export const azureConfig = {
    // Cosmos DB Configuration
    cosmosDb: {
        endpoint: process.env.REACT_APP_COSMOS_ENDPOINT,
        key: process.env.REACT_APP_COSMOS_KEY,
        databaseId: process.env.REACT_APP_COSMOS_DATABASE_ID,
        containerId: process.env.REACT_APP_COSMOS_CONTAINER_ID
    },
    // Blob Storage Configuration
    blobStorage: {
        connectionString: process.env.REACT_APP_STORAGE_CONNECTION_STRING,
        containerName: process.env.REACT_APP_BLOB_CONTAINER_NAME
    }
}; 