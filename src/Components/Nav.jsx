import { Link, NavLink } from "react-router-dom";


const Nav = () => {

    const link = 
<>
<NavLink to={'/'}>Home</NavLink>
<NavLink to={'/listed-book'}>Listed Book</NavLink>
<NavLink to={'/page-to-read'}>Page to Read</NavLink>
<NavLink to={'/blogs'}>Blogs</NavLink>
<NavLink to={'/about'}>About</NavLink>

</>
    return (
        <div className="navbar p-0 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {link}
            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost text-[28px] p-0 font-bold text-[#131313]">Book Vibe</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-10 text-[#131313]">
           {link}
            
          </ul>
        </div>
        <div className="navbar-end gap-2 lg:flex hidden">
          <a className=" bg-[#23BE0A] px-7 py-4 text-white rounded-lg font-bold">Sign In</a>
          <a className="bg-[#59C6D2] px-7 py-4 text-white rounded-lg font-bold">Sign Up</a>
        </div>
      </div>
    );
};

export default Nav;