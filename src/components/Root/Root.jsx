import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Spinner from "../Spinner/Spinner";

const Root = () => {

    const navigation = useNavigation();

    return (
        <div>
            <Header></Header>
            {
                navigation.state === 'loading' ?
                    <Spinner /> :
                    <div className="min-h-screen">
                        <Outlet></Outlet>
                    </div>
            }
            <Footer></Footer>
        </div>
    );
};

export default Root;