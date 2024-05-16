import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/sectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import 'swiper/css';
import 'swiper/css/navigation';
import '@smastrom/react-rating/style.css'
import quote from '../../../assets/home/quote-left.png'
const Testimonials = () => {
    const [reviews, setReviews] = useState()
    useEffect(() => {
        fetch('/reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="my-20">
            <SectionTitle subHeading="What Our Clients Say" heading="Testimonials"></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews?.map(review => <SwiperSlide key={review?._id}>
                        <div className="flex flex-col items-center my-16 mx-24">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review?.rating}
                                readOnly
                            />
                            <img src={quote} className="w-12 pt-5" alt="" />
                            <p className="py-8">{review?.details}</p>
                            <h3 className="text-2xl  text-orange-400">{review?.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;