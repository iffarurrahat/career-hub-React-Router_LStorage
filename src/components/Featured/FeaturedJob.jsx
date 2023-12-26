import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";

const FeaturedJob = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job || {}
    return (
        <div className="card bg-base-100 border">
            <figure><img className="mr-auto mt-10 ml-10 h-10" src={logo} /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <h5 className="text-xl font-semibold text-[#757575]">{company_name}</h5>
                <div>
                    <button className="px-5 py-2 font-extrabold border border-[#7E90FE] text-[#7E90FE] rounded mr-4">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border border-[#7E90FE] text-[#7E90FE] rounded mr-4">{job_type}</button>
                </div>
                <div className="flex mt-4 text-xl text-[#757575]">
                    <h2 className="flex items-center mr-4"><MdLocationOn className="mr-2"></MdLocationOn> {location}</h2>
                    <h2 className="flex items-center"><AiOutlineDollar className="mr-2"></AiOutlineDollar>{salary}</h2>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}>
                        <button className="btn capitalize text-white  bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJob;