import Title from "../../../Components/Title/Title";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const TestiMonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch("Reviews.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="my-10">
            <Title
                subHadding={"What Our Clients Say"}
                Hadding={"TESTIMONIALS"}
            ></Title>

            <div >
                <Swiper>


                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className="lg:w-[600px] mx-auto text-center space-y-4">
                               <div className="flex justify-center mt-3">
                               <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                               </div>

                                <p >{review.details}</p>
                                <h3 className="text-2xl text-yellow-600 ">{review.name}</h3>
                            </div>

                        </SwiperSlide>)
                    }

                </Swiper>
            </div>
        </div >
    );
};

export default TestiMonials;