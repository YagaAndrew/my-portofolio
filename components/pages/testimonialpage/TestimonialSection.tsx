"use client";

import React from "react";
import SectionHeading from "@/components/Helper/SectionHeading";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { userReviewData } from "@/data";
import ReviewCard from "../Home/clientreview/ReviewCard";

const TestimonialSection = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="py-50 bg-gray-100 dark:bg-gray-900">
      <div className="w-[80%] mx-auto">
        <SectionHeading
          title1="Our Client"
          title2="Review"
          description="Check out what our clients have to say about us."
        />
        <div className="mt-14">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            arrows={true}
          >
            {userReviewData.map((user) => {
              return (
                <div key={user.id}>
                  <ReviewCard user={user} />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
