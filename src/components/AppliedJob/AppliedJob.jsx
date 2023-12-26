import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/localStorage";
import AppliedJobCart from "./AppliedJobCart";
import { IoIosArrowDown } from "react-icons/io";
import Container from "../ui/Container";

const AppliedJob = () => {

    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    // sorting__handling 
    const handleJobsFilter = filter => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onsiteJobs);
        }
    }

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {

            // option-1
            // const jobsApplied = jobs?.filter(job => storedJobIds.includes(job.id));
            // option-2
            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs?.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job);
                }
            }
            //data stored in_useState
            setAppliedJobs(jobsApplied);
            // sorting for__useState
            setDisplayJobs(jobsApplied);
        }
    }, [jobs])


    return (
        <>
            <h2 className="text-3xl text-center bg-gradient-to-r from-[#7e90fe0d] to-[#9873ff0d] py-7 md:py-14">Job Details</h2>
            <div className="my-10 lg:my-16">
                <Container>
                    {/* sort__dropdown */}
                    <div className="flex justify-end">
                        <details className="dropdown mb-5 md:mb-10">
                            <summary className="m-1 btn">Filter By <IoIosArrowDown /></summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                <li onClick={() => handleJobsFilter('all')} ><a>All</a></li>
                                <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                                <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                            </ul>
                        </details>
                    </div>
                    {/* main__cart */}
                    <div>
                        {
                            displayJobs.map(job => <AppliedJobCart
                                key={job.id}
                                job={job}></AppliedJobCart>)
                        }
                    </div>
                </Container>
            </div>
        </>
    );
};

export default AppliedJob;