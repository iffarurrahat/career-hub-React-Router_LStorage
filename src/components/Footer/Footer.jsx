import Container from "../ui/Container";

const Footer = () => {
    return (
        <footer className="p-10 bg-[#1A1919] text-[#FFFFFFB3]">
            <Container>
                <div className="footer">
                    <nav>
                        <h1 className="text-3xl font-extrabold mb-4 text-white">CareerHub</h1>
                        <p>There are many variations of passages<br /> of Lorem Ipsum , but the majority have<br /> suffered alteration in some form.</p>
                    </nav>
                    <nav>
                        <header className="text-xl text-white font-semibold">Company</header>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Work</a>
                        <a className="link link-hover">Latest News</a>
                        <a className="link link-hover">Careers</a>
                    </nav>
                    <nav>
                        <header className="text-xl text-white font-semibold">Product</header>
                        <a className="link link-hover">Prototype</a>
                        <a className="link link-hover">Plans & Pricing</a>
                        <a className="link link-hover">Customers</a>
                        <a className="link link-hover">Integrations</a>
                    </nav>
                    <nav>
                        <header className="text-xl text-white font-semibold">Support</header>
                        <a className="link link-hover">Help Desk</a>
                        <a className="link link-hover">Sales</a>
                        <a className="link link-hover">Become a Partner</a>
                        <a className="link link-hover">Developer</a>
                    </nav>
                    <nav>
                        <header className="text-xl text-white font-semibold">Contact</header>
                        <a className="link link-hover">524 Broadway , NYC</a>
                        <a className="link link-hover">+1 777 - 978 - 5570</a>
                    </nav>
                </div>
                <hr className="my-6 md:my-8 lg:my-12" />
                <div className="md:flex justify-between text-center md:text-start">
                    <p>@2024 CareerHub. All Rights Reserved</p>
                    <p>Powered by CareerHub</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;