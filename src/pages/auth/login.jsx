import { Button, Checkbox, Label } from 'flowbite-react';
import React from 'react';
import { SiFusionauth } from 'react-icons/si';
import { CustomInput } from '../../components';
import { Link } from 'react-router-dom';

// Define the LoginPage functional component
function LoginPage() {
    return (
      <>
        {/* Container for the login header section */}
        <div className="flex flex-col items-center gap-4">
          {/* Icon representing the login system (e.g., FusionAuth) */}
          <SiFusionauth className="text-5xl" />
          {/* Main title of the login page */}
          <h1 className="text-2xl font-bold mb-10">Login</h1>
        </div>
  
        {/* Form container for login inputs */}
        <form className="flex max-w-md flex-col gap-4">
          <div>
            {/* Custom input field for email */}
            <CustomInput
              label={'Your Email'} 
              type="email" 
              name="email" 
              placeholder="example@gmil.com" 
            />
          </div>
          <div>
            {/* Custom input field for password */}
            <CustomInput
              label={'Your Password'} 
              type="password" 
              name="password" 
              placeholder="password" 
            />
          </div>
          <div>
            {/* Container for "Remember me" checkbox and "Forget Password" link */}
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                {/* Checkbox for remembering user */}
                <Checkbox id="remember" />
                {/* Label for the checkbox */}
                <Label htmlFor="remember">Remember me</Label>
              </div>
              {/* Link to the "Forget Password" page */}
              <Link to="/forget-password" className="text-cyan-700 text-sm">
                Forget Password
              </Link>
            </div>
          </div>
          {/* Submit button for the form */}
          <Button type="submit">Submit</Button>
        </form>
  
        {/* Container for sign-up prompt */}
        <div className="text-center pt-5">
          <span>
            {/* Link to the registration page */}
            You don't have an account? <Link to="/register">Sign up</Link>
          </span>
        </div>
      </>
    );
  }
  

  export default LoginPage;
  