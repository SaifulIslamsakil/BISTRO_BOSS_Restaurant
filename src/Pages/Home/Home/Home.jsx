import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import Feature from "../Feature/Feature";
import Manu from "../Manu/Manu";
import ManuItems from "../ManuItems/ManuItems";
import ShouldTry from "../ShouldTry/ShouldTry";
import TestiMonials from "../TestiMonials/TestiMonials";


const Home = () => {
    return (
        <div>
            <Helmet>
            <title>BISTRO BOSS || Home</title>
            </Helmet>
            <Banner></Banner>
            <ManuItems></ManuItems>
            <Blog></Blog>
            <Manu></Manu>
            <div className=" bg-black lg:w-2/3 mx-auto  p-6 lg:p-20 mt-20">
             <h2 className=" text-center text-white font-bold text-2xl">Call Us: +88 0192345678910</h2>
           </div>
            <ShouldTry></ShouldTry>
            <Feature></Feature>
            <TestiMonials></TestiMonials>
        </div>
    );
};

export default Home;