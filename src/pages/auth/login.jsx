import { Button, Checkbox, Label } from 'flowbite-react';
import React from 'react';
import { SiFusionauth } from 'react-icons/si';
import { CustomInput } from '../../components';
import { Link } from 'react-router-dom';
import '../../index.css';

function LoginPage() {
  return (
    <div className="flex flex-col items-center px-4 ">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-4">
        <SiFusionauth className="text-5xl" />
        <h1 className="text-2xl font-bold mb-6">Login</h1>
      </div>

      {/* Form Container */}
      <form className="flex flex-col gap-4 max-w-md w-full">
        <CustomInput label="Your Email" type="email" name="email" placeholder="example@gmail.com" />
        <CustomInput label="Your Password" type="password" name="password" placeholder="password" />

        {/* Remember Me & Forgot Password */}
        <div className="flex justify-between text-sm">
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Link to="/forget-password" className="text-cyan-700">
            Forgot Password?
          </Link>
        </div>

        {/* Submit Button */}
        <Button type="submit">Submit</Button>
      </form>

      {/* Sign Up Link */}
      <div className="text-center pt-5">
        <span>
          Don't have an account? <Link to="/register" className="text-cyan-700">Sign up</Link>
        </span>
      </div>

      {/* Home Button Adjusted */}
      <div className="flex justify-center mt-10">  
        <Link to="/" className="text-sm px-4"> {/* Wrap button in Link */}
          <Button type="button">Home</Button>
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
