import { Link } from "react-router-dom";
import { useContext } from "react";

import Button from "./Button";

import { ThemeContext } from "../utils/context";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  function handleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <div className="navbar sticky top-0 z-50 border-gray-200 bg-white dark:bg-black justify-between">
      <div className="flex">
        <Link
          to="/"
          className=" btn btn-ghost normal-case text-xl text-black dark:text-white"
        >
          Cinephile
        </Link>
      </div>
      <div className="flex-none gap-3 justify-end">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input w-full bg-zinc-900 text-black shadow-sm placeholder:italic focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://pbs.twimg.com/media/D0Hu_ezWwAANmM6.jpg" />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <Button
              label="Change Theme"
              onClick={() => handleTheme()}
              className="btn bg-zinc-500 p-2 font-bold text-white hover: bg-zinc-400/90 dark:bg-zinc-800 dark:hover:bg-zinc-700/90"
            />
          </li>
          <li>
            <Link
              to="/favorite"
              className=" btn bg-zinc-500 p-2 font-bold text-white hover: bg-zinc-400/90 dark:bg-zinc-800 dark:hover:bg-zinc-700/90"
            >
              Your Favorite
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
