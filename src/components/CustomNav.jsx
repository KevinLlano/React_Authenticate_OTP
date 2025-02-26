import React from 'react';
import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react'; // UI components from Flowbite
import { SiFusionauth } from 'react-icons/si'; // FusionAuth icon
import { useNavigate } from 'react-router-dom'; // Navigation hook
import { IoMdLogIn } from 'react-icons/io'; // Login icon

// Define the CustomNav component
const CustomNav = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  let isAuthenticated = false; 


  return (
    // Navbar component with fluid layout and rounded corners
    <Navbar fluid rounded>
      {/* Navbar Brand Section */}
      <Navbar.Brand href="https://github.com/KevinLlano" target="_blank" rel="noopener noreferrer">
        {/* Optional Logo (commented out) */}
        {/* <img
         src="/favicon.svg"
         className="mr-3 h-6 sm:h-9"
         alt="Flowbite React Logo"
       /> */}
        <SiFusionauth className="text-2xl mr-2" /> {/* FusionAuth icon */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Authentication System
        </span>
      </Navbar.Brand>

      {/* Right-side navigation controls */}
      <div className="flex md:order-2">
        {/* Conditional Rendering: If authenticated, show user dropdown, else show login button */}
        {isAuthenticated ? (
          <>
            {/* User profile dropdown */}
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </Dropdown.Header>
            </Dropdown>
            <Navbar.Toggle />
          </>
        ) : (
          // Login button for unauthenticated users
          <Button
            onClick={() => navigate('/login')} // Redirect to login page on click
            gradientDuoTone="tealToLime"
          >
            Login
            <IoMdLogIn className="ml-2 h-5 w-5" /> {/* Login icon */}
          </Button>
        )}
      </div>
    </Navbar>
  );
};

export default CustomNav; // Export the component
