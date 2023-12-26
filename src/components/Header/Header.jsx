import { NavLink } from "react-router-dom";
import Container from "../ui/Container";

const Header = () => {

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/applied">Applied Job</NavLink></li>
        <li><NavLink to="/statistics">Statistics</NavLink></li>
    </>

    return (
        <div className="bg-gradient-to-r from-[#7e90fe0d] to-[#9873ff0d]">
            <Container>
                <div className="navbar p-0">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="cursor-pointer lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {links}
                            </ul>
                        </div>
                        <a className="text-xl md:text-3xl font-extrabold ml-auto lg:ml-0">CareerHub</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn capitalize text-white  bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Star Applying</a>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Header;