import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";

const AppliedJobCart = ({ job }) => {
    const { logo, job_title, company_name, location, salary, job_type, remote_or_onsite } = job || {}
    return (
        <div>
            <div className=" md:flex justify-between items-center w-full border rounded mb-10 p-8">
                <div className="md:flex items-center gap-10">
                    <figure><img className="mb-3 md:mb-0 h-10 md:w-60" src={logo} /></figure>
                    <div className="space-y-3">
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
                    </div>
                </div>
                <div className="card-actions mt-3 md:mt-0">
                    <button className="btn capitalize text-white  bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobCart;

/*



*/ 