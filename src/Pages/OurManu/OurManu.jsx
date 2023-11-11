import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Title/Cover/Cover";
import ManuItem from "../../Components/ManuItem/ManuItem";
import Title from "../../Components/Title/Title";


const OurManu = () => {
    return (
        <div>
            <Helmet>
                <title>BISTRO BOSS || Manu</title>
            </Helmet>
            <div>
                <div>
                    <Cover
                        bgImg={"https://i.ibb.co/QfSfBGR/banner3.jpg"}
                        Title={"OUR MENU"}
                        des={"Would you like to try a dish?"}
                    ></Cover>
                    <Title
                        subHadding={"Don't miss"}
                        Hadding={"TODAY'S OFFER"}
                    ></Title>
                    <ManuItem
                        manuCategory={"offered"}
                       
                    ></ManuItem>

                </div>
                <div>
                    <Cover
                        bgImg={"https://i.ibb.co/0tQCcc2/images-5.jpg"}
                        Title={"drinks"}
                        des={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                    ></Cover>
                    
                    <ManuItem
                        manuCategory={"drinks"}
                    ></ManuItem>

                </div>
                <div>
                    <Cover
                        bgImg={"https://i.ibb.co/xYmpRGB/Forticreme-Chocolate-Chocolate-Layered-Dessert-1-1024x683.webp"}
                        Title={"dessert"}
                        des={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                    ></Cover>
                    
                    <ManuItem
                        manuCategory={"dessert"}
                    ></ManuItem>

                </div>
                <div>
                    <Cover
                        bgImg={"https://i.ibb.co/LkWfBqv/1664468260-pizza-5179939-960-720.jpg"}
                        Title={"pizza"}
                        des={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                    ></Cover>
                    
                    <ManuItem
                        manuCategory={"pizza"}
                    ></ManuItem>

                </div>
                <div>
                    <Cover
                        bgImg={"https://i.ibb.co/YQVP1gS/Interesting-Salad-Social-Share-LR.jpg"}
                        Title={"salad"}
                        des={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                    ></Cover>
                    
                    <ManuItem
                        manuCategory={"salad"}
                    ></ManuItem>

                </div>
                <div>
                    <Cover
                        bgImg={"https://i.ibb.co/hsTyLMZ/easy-chicken-noodle-soup-23912-1.webp"}
                        Title={"soup"}
                        des={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                    ></Cover>
                    
                    <ManuItem
                        manuCategory={"soup"}
                    ></ManuItem>

                </div>
            </div>
        </div>
    );
};

export default OurManu;