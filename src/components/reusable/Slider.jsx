import React, { useState } from "react";

const Slider = ({
  show_arrow = true,
  show_pagination = true,
  pagination_location = "bottom",
  item_to_show = 4,
  gap = 5,
  slider_data,
}) => {
  const [sliderData, setSliderData] = useState(slider_data);
  const [index, setIndex] = useState(0);
  const card_width = sliderData.length / 100 - gap;
  const maxIndex = sliderData.length + 1;

  const nextSlide = () => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index) => {
    const targetIndex = Math.min(index * itemsToShow, maxIndex);
    setIndex(targetIndex);
  };
  return <div></div>;
};

export default Slider;
