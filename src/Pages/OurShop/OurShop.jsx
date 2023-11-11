import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cover from '../../Components/Title/Cover/Cover';
import img from "../../assets/shop/banner2.jpg"
import FoodCard from '../../Components/FoodCard/FoodCard';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
const OurShop = () => {
    const manu = ["salad","pizza","soup","dessert","drinks"]
    const {category} = useParams()
    const index = manu.indexOf(category)
    const [tabsIndex, setTabsIndex] = useState(index)

    return (
        <div className='space-y-5'>
            <Helmet>
                <title>BISTRO BOSS || Shop </title>
            </Helmet>
            <Cover
            bgImg={img}
            Title={"OUR SHOP"}
            des={"Would you like to try a dish?"}
            ></Cover>
            <div >
            <Tabs defaultIndex={tabsIndex} onSelect={(index) => setTabsIndex(index)}>
                <div className=' md:w-[500px] mx-auto font-bold text-xl text-yellow-600'>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>pizza</Tab>
                    <Tab>soups</Tab>
                    <Tab>desserts</Tab>
                    <Tab>drinks</Tab>
                    
                </TabList>
                </div>
                <TabPanel>
                    <FoodCard
                        manuCategory={"salad"}
                    ></FoodCard>
                </TabPanel>
                <TabPanel>
                <FoodCard
                        manuCategory={"pizza"}
                    ></FoodCard>
                </TabPanel>
                <TabPanel>
                <FoodCard
                        manuCategory={"soup"}
                    ></FoodCard>
                </TabPanel>
                <TabPanel>
                <FoodCard
                        manuCategory={"dessert"}
                    ></FoodCard>
                </TabPanel>
                <TabPanel>
                <FoodCard
                        manuCategory={"drinks"}
                    ></FoodCard>
                </TabPanel>
            </Tabs>
            </div>
        </div>
    );
};

export default OurShop;