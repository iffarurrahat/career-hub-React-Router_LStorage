import Container from "../ui/Container";

const Banner = () => {

    return (
        <div className="bg-gradient-to-r from-[#7e90fe0d] to-[#9873ff0d] py-10 md:py-0 md:pt-20">
            <Container>
                <div className="flex flex-col-reverse md:flex-row items-center justify-between px-3 md:px-5 lg:px-0">
                    <div className="">
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold">One Step <br /> Closer To Your <br /> <span className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent"> Dream Job</span></h1>
                        <p className="mt-3 md:mt-6 mb-4 md::mb-8">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className="btn capitalize text-white  bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Get Started</button>
                    </div>
                    <div>
                        <img className="h-full" src="https://i.ibb.co/Sxx3nH0/user.png" alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;