import React from "react";
import Slider from "../reusable/Slider";
import P_1 from "../../assets/images/products/product_1.jpg";
import P_2 from "../../assets/images/products/product_2.jpg";
import P_3 from "../../assets/images/products/product_3.jpg";
import P_4 from "../../assets/images/products/product_4.jpg";
import P_5 from "../../assets/images/products/product_5.jpg";
import P_6 from "../../assets/images/products/product_6.jpg";
import P_7 from "../../assets/images/products/product_5.jpg";
import P_8 from "../../assets/images/products/product_4.jpg";
import P_9 from "../../assets/images/products/product_3.jpg";
import P_10 from "../../assets/images/products/product_2.jpg";
const OurFavouritesSection = () => {
  const products = [
    {
      image: P_1,
      name: "Peru",
      price: "£13.50",
      region: "Ahuachapán",
      producer: "Ricardo Lima",
      process: "Natural",
      rating: 5,
      desc: "A bag of Clifton coffee with a green background, 'CLIFTON' logo, and 'Peru' label",
    },
    {
      image: P_2,
      name: "Colombia",
      price: "£13.50",
      region: "Antioquia",
      producer: "Juan Pérez",
      process: "Washed",
      rating: "★★★★☆",
      desc: "A bag of Clifton coffee with a green background, 'CLIFTON' logo, and 'Colombia' label",
    },
    {
      image: P_3,
      name: "Ethiopia",
      price: "£14.00",
      region: "Yirgacheffe",
      producer: "Amina Ali",
      process: "Natural",
      rating: 5,
      desc: "A bag of Clifton coffee with a green background, 'CLIFTON' logo, and 'Ethiopia' label",
    },
    {
      image: P_4,
      name: "Brazil",
      price: "£12.50",
      region: "Minas Gerais",
      producer: "Carlos Silva",
      process: "Pulped Natural",
      rating: "★★★★☆",
      desc: "A bag of Clifton coffee with a green background, 'CLIFTON' logo, and 'Brazil' label",
    },
    {
      image: P_5,
      name: "Guatemala",
      price: "£13.75",
      region: "Huehuetenango",
      producer: "Maria Gonzalez",
      process: "Washed",
      rating: 5,
      desc: "A bag of Clifton coffee with a green background, 'CLIFTON' logo, and 'Guatemala' label",
    },
    {
      image: P_6,
      name: "Kenya",
      price: "£14.50",
      region: "Nyeri",
      producer: "James Kariuki",
      process: "Natural",
      rating: 5,
      desc: "A bag of Clifton coffee with a green background, 'CLIFTON' logo, and 'Kenya' label",
    },
    {
      image: P_7,
      name: "Costa Rica",
      price: "£13.00",
      region: "Tarrazú",
      producer: "Sofia Vargas",
      process: "Honey",
      rating: "★★★★☆",
      desc: "A bag of Clifton coffee with a green background, 'CLIFTON' logo, and 'Costa Rica' label",
    },
    {
      image: P_8,
      name: "Rwanda",
      price: "£14.25",
      region: "Gisenyi",
      producer: "Emmanuel Niyonsaba",
      process: "Washed",
      rating: 5,
      desc: "A bag of Clifton coffee with a green background, 'CLIFTON' logo, and 'Rwanda' label",
    },
    {
      image: P_9,
      name: "Honduras",
      price: "£12.75",
      region: "Copán",
      producer: "Luis Morales",
      process: "Natural",
      rating: "★★★★☆",
      desc: "A bag of Clifton coffee with a green background, 'CLIFTON' logo, and 'Honduras' label",
    },
    {
      image: P_10,
      name: "Mexico",
      price: "£13.25",
      region: "Oaxaca",
      producer: "Ana Hernández",
      process: "Washed",
      rating: 5,
      desc: "A bag of Clifton coffee with a green background, 'CLIFTON' logo, and 'Mexico' label",
    },
  ];
  return (
    <div className="flex flex-col mt-10 gap-10 overflow-hidden">
      <div>
        <h2 className="text-[70px] text-center">Our Favorites</h2>
      </div>

      <div className="w-full h-[400px]">
        <Slider
          items={products}
          showArrows={true}
          itemsToShow={4}
          translateIn="-x"
          showPartialNext={false}
          showPagination={false}
          renderItem={(item) => {
            return (
              <div className="flex h-[400px] flex-col">
                <div className="flex-1 relative overflow-hidden">
                  <div className="absolute top-0 bottom-0 left-0 right-0">
        
                    <img
                      src={item.image}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <p>{item.name}</p>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
};

export default OurFavouritesSection;
