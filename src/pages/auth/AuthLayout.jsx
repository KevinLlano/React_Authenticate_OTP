import { Outlet } from 'react-router';


const AuthLayout = () => {
  return (
    // Container for the layout with flexbox centering and full viewport height
    <div className="flex justify-center h-[100vh]">
      {/* Inner container for the authentication forms with responsive width and padding */}
      <div className="sm:w-[448px] w-[100%] px-10 pt-20">
        
        <Outlet />
      </div>
    </div>
  );
};


export default AuthLayout;
