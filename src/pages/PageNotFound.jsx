import React from 'react'; // Importing React to enable the use of JSX

// Defining the PageNotFound functional component
const PageNotFound = () => { 
 
  return ( 
    // Container with a specific height and flexbox for centering content
    <div className="h-[500px] flex justify-center items-center"> 
      // Main heading indicating the page is not found, styled for visibility
      <h1 className="text-6xl font-bold">Page Not Found</h1> 
    </div>
  );
};


export default PageNotFound; 
