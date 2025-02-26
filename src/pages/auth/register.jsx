import { Button } from 'flowbite-react';
import React from 'react';
import { CustomInput } from '../../components';
import { PiCashRegisterThin } from 'react-icons/pi';
import { Link } from 'react-router-dom';


// RegisterPage functional component
function RegisterPage() {
    return (
      <>
        {/* Header section for the registration form */}
        <div className="flex flex-col items-center gap-4">
          {/* Icon representing registration (PiCashRegisterThin) */}
          <PiCashRegisterThin className="text-5xl" />
          {/* Title of the registration page */}
          <h1 className="text-2xl font-bold mb-10">Register</h1>
        </div>

        {/* Form container for user input */}
        <form className="flex max-w-md flex-col gap-4">
          {/* Input for username */}
          <div>
            <CustomInput
              label={'Username'}
              type="text"
              name="username"
              placeholder="jhon st."
            />
          </div>
          {/* Input for email address */}
          <div>
            <CustomInput
              label={'Email'}
              type="email"
              name="email"
              placeholder="example@gmil.com"
            />
          </div>
          {/* Input for password */}
          <div>
            <CustomInput
              label={'Password'}
              type="password"
              name="password"
              placeholder="password"
            />
          </div>
          {/* Input for confirming password */}
          <div>
            <CustomInput
              label={'Repeat Password'}
              type="password" 
              name="confirmPassword"
              placeholder="password"
            />
          </div>
  
          {/* Submit button for the form */}
          <Button type="submit">Submit</Button>
        </form>
        {/* Link to the login page for users who already have an account */}
        <div className="text-center pt-5">
          <span>
            You already have account ? <Link to="/login">Sign in</Link>
          </span>
        </div>
      </>
    );
  }
  

  export default RegisterPage;
  