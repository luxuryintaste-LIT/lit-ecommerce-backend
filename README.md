# LuxuryInTaste E-commerce

A luxury e-commerce platform built with React.

## Admin Authentication

The admin section of the application is protected by authentication. To access the admin dashboard, you need to set up environment variables with your admin credentials.

### Local Development

1. Create a `.env` file in the root of the project with the following variables:
   ```
   VITE_ADMIN_EMAIL=your_admin_email@example.com
   VITE_ADMIN_PASSWORD=your_admin_password
   ```

2. Start the development server:
   ```
   npm run dev
   ```

### Netlify Deployment

To set up environment variables in Netlify:

1. Log in to your Netlify account
2. Go to your site's dashboard
3. Navigate to Site settings > Build & deploy > Environment
4. Add the following environment variables:
   - Key: `VITE_ADMIN_EMAIL`, Value: `your_admin_email@example.com`
   - Key: `VITE_ADMIN_PASSWORD`, Value: `your_admin_password`
5. Click "Save"

After setting up the environment variables, redeploy your site for the changes to take effect.

## Accessing the Admin Dashboard

1. Click on the logo in the footer of the website
2. Enter your admin email and password
3. You will be redirected to the admin dashboard

## Security Notes

- The admin credentials are stored in environment variables, not in the code
- The authentication state is stored in sessionStorage, which is cleared when the browser tab is closed
- For additional security, consider implementing a more robust authentication system in the future
