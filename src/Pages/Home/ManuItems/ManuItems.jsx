import Title from "../../../Components/Title/Title";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css'; 
import { Pagination } from 'swiper/modules';
import silder1 from "../../../assets/home/slide1.jpg"
import silder2 from "../../../assets/home/slide2.jpg"
import silder3 from "../../../assets/home/slide3.jpg"
import silder4 from "../../../assets/home/slide4.jpg"
import silder5 from "../../../assets/home/slide5.jpg"
// import silder6 from "../../../assets/home/slide6.jpg"
const ManuItems = () => {
    return (
        <div className="my-20">
            <Title
                subHadding={"From 11:00am to 10:00pm"}
                Hadding={"ORDER ONLINE"}
            ></Title>

            <div className="max-w-5xl p-5 mx-auto ">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={silder1} alt=""  />
                    <p className=" text-2xl font-bold -mt-10 text-white text-center">Salads</p>
                    </SwiperSlide>
                    <SwiperSlide><img src={silder2} alt="" />
                    <p className=" text-2xl font-bold -mt-10 text-white text-center">Soups</p>
                    </SwiperSlide>
                    <SwiperSlide><img src={silder3} alt="" />
                    <p className=" text-2xl font-bold -mt-10 text-white text-center">pizzas</p>
                    </SwiperSlide>
                    <SwiperSlide><img src={silder4} alt="" />
                    <p className=" text-2xl font-bold -mt-10 text-white text-center">desserts</p>
                    </SwiperSlide>
                    <SwiperSlide><img src={silder5} alt="" />
                    <p className=" text-2xl font-bold -mt-10 text-white text-center">Salads</p>
                    </SwiperSlide>
                    {/* <SwiperSlide><img src={silder6} alt="" /></SwiperSlide> */}

                </Swiper>
            </div>
        </div>
    );
};

export default ManuItems;