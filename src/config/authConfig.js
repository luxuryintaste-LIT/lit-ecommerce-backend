export const msalConfig = {
  auth: {
    clientId: "8ff0729a-f97c-4c76-ac29-9845cf98ffda", // Your Azure AD app registration client ID
    authority: "https://login.microsoftonline.com/2c355bd8-c53c-4181-81de-5d370bbc8405", // Your tenant ID
    redirectUri: process.env.NODE_ENV === 'production' 
      ? "https://lit-ecommerce.netlify.app/admin/auth-redirect" 
      : window.location.origin + "/admin/auth-redirect", // Make sure this matches what's registered in Azure AD
    postLogoutRedirectUri: process.env.NODE_ENV === 'production'
      ? "https://lit-ecommerce.netlify.app"
      : window.location.origin,
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
  system: {
    allowNativeBroker: false, // Disable WAM Broker
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case 0:
            console.error(message);
            return;
          case 1:
            console.warn(message);
            return;
          case 2:
            console.info(message);
            return;
          case 3:
            console.debug(message);
            return;
          default:
            return;
        }
      },
      piiLoggingEnabled: false,
      logLevel: 3, // Info
    },
  },
};

export const loginRequest = {
  scopes: ["User.Read"], // Add more scopes as needed
}; 