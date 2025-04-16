// Azure Configuration
export const azureConfig = {
    // Cosmos DB Configuration
    cosmosDb: {
        endpoint: import.meta.env.VITE_COSMOS_ENDPOINT,
        key: import.meta.env.VITE_COSMOS_KEY,
        databaseId: import.meta.env.VITE_COSMOS_DATABASE_ID,
        containerId: import.meta.env.VITE_COSMOS_CONTAINER_ID
    },
    // Blob Storage Configuration
    blobStorage: {
        connectionString: import.meta.env.VITE_STORAGE_CONNECTION_STRING,
        containerName: import.meta.env.VITE_BLOB_CONTAINER_NAME
    }
}; 