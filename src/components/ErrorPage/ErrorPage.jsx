import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-[50vh] flex justify-center items-center">
            <div className="text-center">
                <h2 className="text-red-500 text-3xl font-bold">This page not exits </h2>
                <NavLink to="/" className="bg-red-500 text-white btn mt-3 ">Go to Home</NavLink>
            </div>
        </div>
    );
};

export default ErrorPage;