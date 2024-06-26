import { Link, Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-64px)] p-6 bg-gray-100">
      <h1 className="text-[48px] font-bold mb-6 text-center">
        Generation Thailand React - Assessment
      </h1>
      <div className="flex justify-around w-full max-w-lg mb-6">
        <Link
          to="/User"
          className="text-xl text-[##987070] border-2 border-[##987070] p-2"
        >
          User Home Sector
        </Link>
        <Link
          to="/Admin"
          className="text-xl text-[##987070] border-2 border-[##987070] p-2"
        >
          Admin Home Sector
        </Link>
      </div>
      <div className="w-full max-w-4xl">
        <Outlet />
      </div>
    </div>
  );
};
export default Home;