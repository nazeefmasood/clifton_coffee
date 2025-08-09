import React from "react";
import Slider from "../reusable/Slider";
import { Star } from "lucide-react";

const TestimoninalsSection = () => {
  const reviews = [
    {
      rating: 5,
      title: "All I can say is wow",
      text: "The coffee Cometeer experience is incredible. It’s having a high end cup of coffee from a boutique coffee shop at my fingertips.",
      author: "Michel F.",
    },
    {
      rating: 5,
      title: "Best coffee I’ve ever had",
      text: "Smooth, rich, and full of flavor. I can’t believe I can make something this good at home.",
      author: "Sarah L.",
    },
    {
      rating: 5,
      title: "Absolutely worth it",
      text: "Every sip feels like it was brewed by a professional barista. Truly exceptional.",
      author: "David R.",
    },
    {
      rating: 5,
      title: "A game changer",
      text: "I never knew coffee at home could taste like this. Fresh and aromatic every single time.",
      author: "Emma W.",
    },
    {
      rating: 5,
      title: "Perfect for busy mornings",
      text: "Takes seconds to prepare and tastes better than any coffee shop near me.",
      author: "James K.",
    },
    {
      rating: 5,
      title: "Luxury in a cup",
      text: "This is not just coffee, this is an experience. Every morning feels special now.",
      author: "Olivia M.",
    },
    {
      rating: 5,
      title: "I’m hooked",
      text: "Once you try this, you can never go back to regular coffee. It’s that good.",
      author: "Noah P.",
    },
    {
      rating: 5,
      title: "Flawless every time",
      text: "Consistency is key, and Cometeer nails it. Every cup tastes exactly perfect.",
      author: "Sophia H.",
    },
  ];

  return (
    <div className="flex flex-col py-14 gap-14">
      <h2 className="text-[70px] text-center">Thousands of 5 Star Reviews</h2>
      <div className="w-full h-[280px] overflow-hidden">
        <Slider
          items={reviews}
          itemsToShow={3}
          showArrows={false}
          translateIn="-x"
          showPagination={true}
          paginationLocation="bottom"
          showPartialNext={true}
          partialNextPercent={0}
          renderItem={(item) => (
            <div className="w-full h-[230px] bg-[#C4C4C2] flex flex-col justify-between  overflow-hidden p-8">
              <div className="flex">
                {Array(item.rating)
                  .fill()
                  .map((_, id) => (
                    <Star key={id} color="#000" />
                  ))}
              </div>

              <div className="flex flex-col gap-3">
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
              <p>{item.author}</p>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default TestimoninalsSection;
