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

  const nextSlide = () => {};
  const previousSlide = () => {};
  return <div></div>;
};

export default Slider;
