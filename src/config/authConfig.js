export const msalConfig = {
  auth: {
    clientId: "8ff0729a-f97c-4c76-ac29-9845cf98ffda", // Replace with your Azure AD app registration client ID
    authority: "https://login.microsoftonline.com/2c355bd8-c53c-4181-81de-5d370bbc8405", // Replace with your tenant ID
    redirectUri: window.location.origin + "/admin/login", // The redirect URI registered in Azure AD
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
};

export const loginRequest = {
  scopes: ["User.Read"], // Add more scopes as needed
}; 