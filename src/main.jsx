import { StrictMode } from 'react'; // React's StrictMode for highlighting potential problems in an application
import { createRoot } from 'react-dom/client'; // Create root for rendering the React app
import './index.css'; 
import App from './App.jsx'; 
import Layout from './Layout'; 
import { BrowserRouter, Route, Routes } from 'react-router'; // Import routing components from React Router

// Import authentication-related pages, from the 'auth' directory
import {
  AuthLayout, // Layout for authentication pages
  ForgetPasswordPage, // Page for forgetting password
  LoginPage, // Login page component
  RegisterPage, // Registration page component
  ResetPasswordPage, // Reset password page component
  VerifyOTPPage, // OTP verification page component
} from './pages/auth'; 

import PageNotFound from './pages/PageNotFound'; // Import the 404 Page Not Found component

// Create the root of the React application and render it
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Main application layout route */}
        <Route element={<Layout />}>
          {/* Default route to render the main App component */}
          <Route index element={<App />} />
        </Route>

        {/* Authentication-related routes */}
        <Route element={<AuthLayout />}>
          
          <Route path="login" element={<LoginPage />} />
          
          <Route path="register" element={<RegisterPage />} />
          
          <Route path="forget-password" element={<ForgetPasswordPage />} />
          
          <Route path="reset-password" element={<ResetPasswordPage />} />
          
          <Route path="verify-otp" element={<VerifyOTPPage />} />
        </Route>

        {/* Catch-all route for 404 Page Not Found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
