import { useEffect, useState } from "react";
import FeaturedJob from "./FeaturedJob";
import Container from "../ui/Container";

const Featured = () => {

    const [jobs, setJobs] = useState([]);
    // This is not the best way to load data show all data
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <Container>
            <div className="my-10 md:my-32">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-5xl font-bold">Featured Jobs</h2>
                    <p className="mt-4">Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {
                        jobs.slice(0, dataLength).map(job => <FeaturedJob
                            key={job.id}
                            job={job}></FeaturedJob>)
                    }
                </div>
                <div className={ dataLength === jobs.length ? 'hidden' : 'text-center'}>
                    <button
                        onClick={() => setDataLength(jobs.length)}
                        className="btn capitalize text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] mt-10">Show All Job</button>
                </div>
            </div>
        </Container>
    );
};

export default Featured;