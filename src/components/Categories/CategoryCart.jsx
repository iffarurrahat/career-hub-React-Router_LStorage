
const CategoryCart = ({ category }) => {
    const { logo, category_name, availability } = category
    return (
        <div className="bg-gradient-to-b from-blue-50 via-purple-50 to-transparent p-10 rounded hover:shadow-md transition ease-in-out delay-100 hover:cursor-pointer">
            <img className="bg-slate-100 p-4 mb-8" src={logo} alt="" />
            <h5 className="text-xl font-extrabold mb-2">{category_name}</h5>
            <p className="font-medium text-[#A3A3A3]">{availability}</p>
        </div>
    );
};

export default CategoryCart;