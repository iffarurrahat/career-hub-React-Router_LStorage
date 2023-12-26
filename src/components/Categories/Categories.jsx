import { useEffect, useState } from "react";
import CategoryCart from "./CategoryCart";
import Container from "../ui/Container";

const Categories = () => {

    const [catagories, setCatagories] = useState([])

    useEffect(() => {
        fetch("./categories.json")
            .then(res => res.json())
            .then(data => setCatagories(data))
    }, [])


    return (
        <Container>
            <div className="mt-10 md:mt-32">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-5xl font-bold">Job Category List</h2>
                    <p className="mt-4">Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {
                        catagories.map(category => <CategoryCart key={category.id} category={category}></CategoryCart>)
                    }
                </div>
            </div>
        </Container>
    );
};

export default Categories;