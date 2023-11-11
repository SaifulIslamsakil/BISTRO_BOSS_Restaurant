import { NavLink } from "react-router-dom";


const NavBar = () => {
    const NavOpction = <>
       <li>
        <NavLink>
            HOME
        </NavLink>
       </li>
       <li>
        <NavLink>
        CONTACT us
        </NavLink>
       </li>
       <li>
        <NavLink>
        DASHBOARD
        </NavLink>
       </li>
       <li>
        <NavLink to="/manu">
        Our Menu
        </NavLink>
       </li>
       <li>
        <NavLink>
        Our Shop
        </NavLink>
       </li>
       <li>
        <NavLink>
        SIGN OUT
        </NavLink>
       </li>
    
    </>
    return (
        <div className="navbar text-white fixed px-4 z-10 max-w-7xl mx-auto bg-black bg-opacity-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 mt-3 z-[1] p-2 shadow rounded-box w-52 space-y-2 ">
                        {NavOpction}
                    </ul>
                </div>
              <div>
                 <h3 className="  text-2xl font-bold">BISTRO BOSS</h3>
                <h4>Restaurant</h4>
              </div>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-1">
                    {NavOpction}
                </ul>
            </div>
            
        </div>
    );
};

export default NavBar;