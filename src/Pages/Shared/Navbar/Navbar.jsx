import { Link, NavLink } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";
import toast from "react-hot-toast";

const Navbar = () => {
    const { user, logOutUser } = UseAuth();
    const handleLogout = () => {
        logOutUser()
            .then(() => {
                toast.success('User Logout Successful');
            })
            .catch((err) => {
                toast.error(err.message)
            })
    }
    const navOptions = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/menu">Our menu</NavLink></li>
        <li><NavLink to="/secret">secret</NavLink></li>
        <li><NavLink to="/order/salads">Order Food</NavLink></li>
        {
            user ?
                <li><Link onClick={handleLogout} className="btn btn-error btn-sm">Logout</Link></li>
                :
                <li><NavLink to="/login">Login</NavLink></li>
        }
    </>
    return (
        <div className="navbar fixed z-50 bg-opacity-30 bg-black max-w-screen-xl text-white top-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Bistro<br /> Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && <div className="dropdown dropdown-end mx-2">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Logged user profile" src={user?.photoURL} />
                            </div>
                        </div>
                    </div>
                }
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;