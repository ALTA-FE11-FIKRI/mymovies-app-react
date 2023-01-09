import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar sticky top-0 z-50 border-gray-200 bg-zinc-900">
        <div className="flex-1">
          <Link to="/" className=' btn btn-ghost normal-case text-xl'>
          <a className="flex-1 text-2xl text-white">Cinephile</a>
          </Link>
        </div>
        <div className="flex-none gap-3">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input w-full bg-white text-black shadow-sm placeholder:italic focus:border-black focus:outline-none focus:ring-1 focus:ring-black" />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://pbs.twimg.com/media/D0Hu_ezWwAANmM6.jpg" />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>

  );
};

export default Navbar;