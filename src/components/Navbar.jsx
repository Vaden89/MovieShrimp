import { useNavigate, Outlet } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full h-full items-center justify-center text-white">
      <nav className="flex w-full items-center justify-between p-2 pt-4">
        <h1 className="text-xl font-semibold border-b-4">Logo</h1>
        <ul className="flex items-center justify-center gap-4 text-lg font-semibold">
          <li onClick={() => navigate("/")}>Homepage</li>
          <li
            onClick={() => navigate("/findmovie")}
            className="bg-white text-[#141619] p-2 rounded-lg"
          >
            Find A Movie
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
