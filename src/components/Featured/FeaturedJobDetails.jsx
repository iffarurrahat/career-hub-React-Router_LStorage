import { useLoaderData, useParams } from "react-router-dom";
import Container from "../ui/Container";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../utility/localStorage";

const FeaturedJobDetails = () => {

    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)

    const job = jobs?.find(job => job.id === idInt);

    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information } = job || {}

    // toast__handler
    const handleApplyJob = () => {
        saveJobApplication(idInt);
        toast('You Have Apply Successfully')
    }

    return (
        <>
            <h2 className="text-3xl text-center bg-gradient-to-r from-[#7e90fe0d] to-[#9873ff0d] py-7 md:py-14">Job Details</h2>
            <Container>
                <div className="grid gap-4 md:grid-cols-5 lg:grid-cols-4 py-10 lg:py-20">
                    <div className="md:col-span-3 lg:col-span-3 space-y-6 text-[#757575] font-semibold">
                        <p className="leading-8"><span className="text-black font-extrabold">Job Description: </span> {job_description}</p>
                        <p className="leading-8"><span className="text-black font-extrabold">Job Responsibility</span> {job_responsibility}</p>
                        <p className="leading-8">
                            <span className="text-black font-extrabold">Educational Requirements:</span> <br />
                            <span>{educational_requirements}</span>
                        </p>
                        <p className="leading-8">
                            <span className="text-black font-extrabold">Experiences:</span><br />
                            <span>{experiences}</span>
                        </p>
                    </div>
                    <div className="md:col-span-2 lg:col-span-1">
                        <div className="shadow p-7 rounded-lg bg-gradient-to-b from-[#7E90FE19] via-[#9873FF19]">
                            <h5 className="text-xl font-bold mb-3">Job Details</h5>
                            <hr className="mb-5" />
                            <p className="text-lg flex items-center mb-2">Salary: {salary}</p>
                            <p className="text-lg flex items-center mb-3">Job Title: {job_title}</p>
                            <h5 className="text-xl font-bold mb-3">Contact Information</h5>
                            <hr className="mb-5" />
                            <div className="mt-2 flex flex-col text-lg">
                                <p className="flex items-center mb-2">Phone: {contact_information.phone}</p>
                                <p className="flex items-center mb-2">Email: {contact_information.email}</p>
                                <p className="flex items-center mb-2">Address: {contact_information.address}</p>
                            </div>
                        </div>
                        <button onClick={handleApplyJob} className="btn w-full bg-[#7E90FE] text-white mt-6">Apply Now</button>
                    </div>
                    <ToastContainer />
                </div>
            </Container>
        </>
    );
};

export default FeaturedJobDetails;