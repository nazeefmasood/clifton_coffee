import React from "react";
import Slider from "./Slider";

// dummy data
const data = [
  {
    id: 1,
    title: "Capsule 1",
    description: "Rich, bold flavor.",
    image:
      "https://images.pexels.com/photos/3174435/pexels-photo-3174435.jpeg?_gl=1*1bpewvt*_ga*MTk2MzE5Mzg1OC4xNzU0NjgyMTAz*_ga_8JE65Q40S6*czE3NTQ2ODIxMDIkbzEkZzEkdDE3NTQ2ODIxMTIkajUwJGwwJGgw",
  },
  {
    id: 2,
    title: "Capsule 2",
    description: "Fruity notes.",
    image:
      "https://images.pexels.com/photos/19551941/pexels-photo-19551941.jpeg?_gl=1*1tunpo7*_ga*MTk2MzE5Mzg1OC4xNzU0NjgyMTAz*_ga_8JE65Q40S6*czE3NTQ2ODIxMDIkbzEkZzEkdDE3NTQ2ODI2NTQkajMxJGwwJGgw",
  },
  {
    id: 3,
    title: "Capsule 3",
    description: "Fruity notes.",
    image:
      "https://images.pexels.com/photos/19551941/pexels-photo-19551941.jpeg?_gl=1*1tunpo7*_ga*MTk2MzE5Mzg1OC4xNzU0NjgyMTAz*_ga_8JE65Q40S6*czE3NTQ2ODIxMDIkbzEkZzEkdDE3NTQ2ODI2NTQkajMxJGwwJGgw",
  },
  {
    id: 4,
    title: "Capsule 4",
    description: "Chocolatey finish.",
    image:
      "https://images.pexels.com/photos/18238050/pexels-photo-18238050.jpeg?_gl=1*504wgr*_ga*MTk2MzE5Mzg1OC4xNzU0NjgyMTAz*_ga_8JE65Q40S6*czE3NTQ2ODIxMDIkbzEkZzEkdDE3NTQ2ODI2NzYkajkkbDAkaDA.",
  },
  {
    id: 5,
    title: "Capsule 5",
    description: "Limited edition.",
    image:
      "https://images.pexels.com/photos/3174435/pexels-photo-3174435.jpeg?_gl=1*1bpewvt*_ga*MTk2MzE5Mzg1OC4xNzU0NjgyMTAz*_ga_8JE65Q40S6*czE3NTQ2ODIxMDIkbzEkZzEkdDE3NTQ2ODIxMTIkajUwJGwwJGgw",
  },
];

export default function SliderDemo() {
  return (
    <div className="w-screen min-h-screen p-6 overflow-hidden mb-[100vh]">
      <section className="w-full">
        <div className="w-full h-[800px] overflow-hidden">
          <Slider
            items={data}
            itemsToShow={1}
            showArrows={false}
            translateIn="-y"
            showPagination={true}
            paginationLocation="right"
            showPartialNext={true}
            partialNextPercent={0.4} // Show 15% of next item
            renderItem={(item) => (
              <div className="flex rounded-lg p-6 h-full text-center text-black">
                <div className="flex-1 flex justify-center items-center flex-col bg-gray-50">
                  <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            )}
          />
        </div>
      </section>
    </div>
  );
}
