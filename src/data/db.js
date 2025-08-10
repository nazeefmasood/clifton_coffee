import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageSquareMore,
  Phone,
  Youtube,
  X,
} from "lucide-react";
import Shop_Header_1 from "../assets/images/header/shop_1.jpg";
import Shop_Header_2 from "../assets/images/header/shop_2.png";
import Acc_Header_1 from "../assets/images/header/accessories_1.jpg";
import Acc_Header_2 from "../assets/images/header/accessories_2.jpg";
import Coffee_Header_1 from "../assets/images/header/coffee_1.jpg";
import Coffee_Header_2 from "../assets/images/header/coffee_2.jpg";
import Edu_Header_1 from "../assets/images/header/education_1.jpg";
import Edu_Header_2 from "../assets/images/header/education_2.jpg";
import Sub_Header_1 from "../assets/images/header/subscription_1.jpg";

import Coffee_Product_Collage_1 from "../assets/images/newproducts/coffee_1.png";
import Coffee_Product_Collage_2 from "../assets/images/newproducts/coffee_2.jpg";
import Coffee_Product_Collage_3 from "../assets/images/newproducts/coffee_3.jpg";
import Coffee_Product_Collage_4 from "../assets/images/newproducts/coffee_4.jpg";
import Capsule_Product_Collage_1 from "../assets/images/newproducts/capsule_1.jpg";

import P_1 from "../assets/images/products/product_1.jpg";
import P_2 from "../assets/images/products/product_2.jpg";
import P_3 from "../assets/images/products/product_3.jpg";
import P_4 from "../assets/images/products/product_4.jpg";
import P_5 from "../assets/images/products/product_5.jpg";
import P_6 from "../assets/images/products/product_6.jpg";
import P_7 from "../assets/images/products/product_5.jpg";
import P_8 from "../assets/images/products/product_4.jpg";
import P_9 from "../assets/images/products/product_3.jpg";
import P_10 from "../assets/images/products/product_2.jpg";

import Social_1 from "../assets/images/social_media/social_1.jpg";
import Social_2 from "../assets/images/social_media/social_2.jpg";
import Social_3 from "../assets/images/social_media/social_5.jpg";
import Social_4 from "../assets/images/social_media/social_4.jpg";
import Social_5 from "../assets/images/social_media/social_1.jpg";
import Social_6 from "../assets/images/social_media/social_2.jpg";
import Social_7 from "../assets/images/social_media/social_4.jpg";
import Social_8 from "../assets/images/social_media/social_5.jpg";

import Img_1_1 from "../assets/images/collections/collection_1_1.jpg";
import Img_1_2 from "../assets/images/collections/collection_1_2.jpg";
import Img_2_1 from "../assets/images/collections/collection_2_1.jpg";
import Img_2_2 from "../assets/images/collections/collection_2_2.jpg";
import Img_3_1 from "../assets/images/collections/collection_3_1.jpg";
import Img_3_2 from "../assets/images/collections/collection_3_2.jpg";

const data = {
  navigation_menus: {
    left_menus: [
      {
        title: "Shop Christmas",
        hasSubmenu: true,
        submenu: {
          categories: [
            {
              title: "Shop Christmas Coffees",
              items: [
                "Shop Christmas",
                "Single Origin Subscription",
                "Brewing Equipment",
                "Capsules",
                "Gift Card",
              ],
            },
          ],
          featuredProducts: [
            {
              title: "Clifton Merchandise",
              subtitle: "Clifton Coffee X Zara Mecdermott",
              image: Shop_Header_1,
            },
            {
              title: "Brewing Equipment",
              subtitle: "Mirr X Clifton Coffee",
              image: Shop_Header_2,
            },
          ],
        },
      },
      {
        title: "Coffee",
        hasSubmenu: true,
        submenu: {
          categories: [
            {
              title: "Current Coffees",
              items: [
                "All Coffee",
                "House Coffees",
                "Single Origin",
                "Clifton Capsules",
                "Unparalleled Series",
              ],
            },
            {
              title: "Coffee Type",
              items: ["Wholebean", "Filter Grind", "Cafetière Grind"],
            },
          ],
          featuredProducts: [
            {
              title: "Cadence Espresso",
              subtitle: "Autumn Edition",
              image: Coffee_Header_1,
            },
            {
              title: "El Project Espresso",
              subtitle: "Finca Buena Vista",
              image: Coffee_Header_2,
            },
          ],
        },
      },

      {
        title: "Subscriptions",
        hasSubmenu: true,
        submenu: {
          categories: [
            {
              title: "Coffee Subscriptions",
              items: [
                "Single Origin Subscription",
                "House Coffee Subscription",
                "Single Origin Subscription Videos",
                "Log in",
              ],
            },
            {
              title: "Coffees Type",
              items: ["Wholebean", "Filter grind", "Cafetière grind"],
            },
          ],
          featuredProducts: [
            {
              title: "Suspension Espresso",
              subtitle: "Brazil | Fazenda Pinhal",
              image: Sub_Header_1,
            },
            {
              title: "El Project Espresso",
              subtitle: "Finca Buena Vista",
              image: Coffee_Header_2,
            },
          ],
        },
      },
      {
        title: "Accessories",
        hasSubmenu: true,
        submenu: {
          categories: [
            {
              title: "All Equipment",
              items: ["Machines", "Brewers", "Grinders"],
            },
            {
              title: "Merchandise",
              items: ["Kettles", "Scales", "Tools"],
            },
            {
              title: "Brands Acaia",
              items: [
                "Acaia",
                "Aeropress",
                "Earl Of East",
                "Fellow",
                "Hario",
                "La Marzocco",
                "Miir",
                "Pesado",
                "Rural Kind",
                "Wilfa",
              ],
            },
          ],
          featuredProducts: [
            {
              title: "Suspension Espresso",
              subtitle: "Brazil | Fazenda Pinhal",
              image: Acc_Header_1,
            },
            {
              title: "Morning Machine",
              subtitle: "OPAL One Coffee Pod Machine",
              image: Acc_Header_2,
            },
          ],
        },
      },
    ],
    right_menus: [
      { title: "Wholesale", hasSubmenu: false },
      {
        title: "Education",
        hasSubmenu: true,
        submenu: {
          categories: [
            {
              title: "Training Guides",
              items: [
                "Book Training",
                "Training Videos",
                "Our Education",
                "Training Calendar",
              ],
            },
          ],
          featuredProducts: [
            {
              title: "Training Videos",
              subtitle: "Coffee Training Videos",
              image: Edu_Header_1,
            },
            {
              title: "Training & Support",
              subtitle: "Award winning training and support",
              image: Edu_Header_2,
            },
          ],
        },
      },
      { title: "Our Ethos", hasSubmenu: false },
    ],
  },

  footer: {
    sociallinks: [
      {
        icon: Facebook,
        href: "https://web.facebook.com/cliftoncoffeeroasters?_rdc=1&_rdr#",
      },
      { icon: Instagram, href: "https://www.instagram.com/cliftoncoffee/#" },
      { icon: Youtube, href: "https://www.youtube.com/@cliftoncoffee" },
    ],
    footerlinks: [
      {
        title: "Shop",
        links: [
          "Coffee Merchandise",
          "Brewing Equipment",
          "Clifton Hot Chocolate",
          "Clifton Tea",
          "Gift Card",
        ],
      },
      {
        title: "Coffee",
        links: [
          "All Coffee",
          "House Coffee",
          "Single Origin",
          "Clifton Capsules",
          "Unparalleled Series",
        ],
      },
      {
        title: "Our Ethos",
        links: [
          "About Us",
          "Resources",
          "Origin Films",
          "Careers",
          "HQ Virtual Tour",
          { text: "Enquiry" },
        ],
      },
    ],
    contactinfo: [
      {
        icon: Mail,
        content: "sales@cliftoncoffee.co.uk",
        href: "mailto:sales@cliftoncoffee.co.uk",
      },
      {
        icon: Phone,
        content: "+44 (0) 1179 820 252",
        href: "tel:+441179820252",
      },
      {
        icon: MapPin,
        content: "Write address here..",
      },
    ],
  },
  exploreSection: {
    items: [
      {
        title: "Clifton Capsules",
        description:
          "The wait is finally over, our capsules are back and better than ever. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      },
      {
        title: "Clifton Coffee",
        description:
          "Through the changing tides of history, this practice has maintained its place in both professional and creative worlds. Its influence has reached beyond its origins, shaping how we communicate ideas. What began as a practical solution has become a timeless standard, a foundation for countless innovations that followed.Why does it still matter today?",
      },
      {
        title: "Clifton Tea",
        description:
          "Centuries have passed, yet the structure remains steady, even as technology has shifted the way we share information. It was embraced in printing houses, carried into typewriters, and eventually embedded into modern publishing software. Its survival is a testament to its adaptability and enduring relevance.Why do people continue to trust it?",
      },
      {
        title: "Clifton Chocolate",
        description:
          " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?",
      },
    ],
  },
  newProducts: {
    data: {
      Coffee: {
        collageImages: [
          Coffee_Product_Collage_1,
          Coffee_Product_Collage_2,
          Coffee_Product_Collage_3,
          Coffee_Product_Collage_4,
        ],
        products: [
          {
            id: 1,
            title: "Panama Coffee",
            description:
              "Introducing El Vergel Estate, a vibrant new coffee from the Bayter family's innovative farm in Fresno, Tolima. This Red and Yellow Caturra variety.",
            price: "13.50",
            image: P_1,
          },
          {
            id: 2,
            title: "Peru Coffee",
            description:
              "Introducing El Vergel Estate, a vibrant new coffee from the Bayter family's innovative farm in Fresno, Tolima. This Red and Yellow Caturra variety.",
            price: "13.50",
            image: P_2,
          },
          {
            id: 3,
            title: "Colombian Coffee",
            description:
              "Rich and full-bodied coffee with chocolate undertones from the highlands of Colombia.",
            price: "15.50",
            image: P_4,
          },
        ],
      },
      Capsule: {
        collageImages: [Capsule_Product_Collage_1],
        products: [
          {
            id: 1,
            title: "Intense Capsule",
            description:
              "Bold and robust flavor profile perfect for espresso lovers who enjoy a strong kick.",
            price: "8.50",
            image: P_3,
          },
          {
            id: 2,
            title: "Smooth Capsule",
            description:
              "Balanced and mellow taste with subtle notes of caramel and nuts.",
            price: "8.50",
            image: P_5,
          },
          {
            id: 3,
            title: "Decaf Capsule",
            description:
              "All the flavor without the caffeine, perfect for evening enjoyment.",
            price: "9.50",
            image: P_2,
          },
        ],
      },
      All: {
        collageImages: [
          Capsule_Product_Collage_1,
          Coffee_Product_Collage_2,
          Coffee_Product_Collage_4,
        ],
        products: [
          {
            id: 1,
            title: "Starter Pack",
            description:
              "A curated selection of our most popular coffees and capsules for beginners.",
            price: "25.00",
            image: P_10,
          },
          {
            id: 2,
            title: "Premium Bundle",
            description:
              "Our finest selection including rare single origins and exclusive blends.",
            price: "45.00",
            image: P_6,
          },
          {
            id: 3,
            title: "Monthly Subscription",
            description:
              "Get fresh coffee delivered monthly with our flexible subscription service.",
            price: "30.00",
            image: P_7,
          },
        ],
      },
    },
  },
  favourite: {
    products: [
      {
        id: 1,
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
        id: 2,
        image: P_2,
        name: "Colombia",
        price: "£13.50",
        region: "Antioquia",
        producer: "Juan Pérez",
        process: "Washed",
        rating: 5,
        desc: "A bag of Clifton coffee with a green background, 'CLIFTON' logo, and 'Colombia' label",
      },
      {
        id: 3,
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
        id: 4,
        image: P_4,
        name: "Brazil",
        price: "£12.50",
        region: "Minas Gerais",
        producer: "Carlos Silva",
        process: "Pulped Natural",
        rating: 5,
        desc: "A bag of Clifton coffee with a green background, 'CLIFTON' logo, and 'Brazil' label",
      },
      {
        id: 5,
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
        id: 6,
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
        id: 7,
        image: P_1,
        name: "Costa Rica",
        price: "£13.00",
        region: "Tarrazú",
        producer: "Sofia Vargas",
        process: "Honey",
        rating: 5,
        desc: "A bag of Clifton coffee with a green background, 'CLIFTON' logo, and 'Costa Rica' label",
      },
      {
        id: 8,
        image: P_4,
        name: "Rwanda",
        price: "£14.25",
        region: "Gisenyi",
        producer: "Emmanuel Niyonsaba",
        process: "Washed",
        rating: 5,
        desc: "A bag of Clifton coffee with a green background, 'CLIFTON' logo, and 'Rwanda' label",
      },
      {
        id: 9,
        image: P_3,
        name: "Honduras",
        price: "£12.75",
        region: "Copán",
        producer: "Luis Morales",
        process: "Natural",
        rating: 5,
        desc: "A bag of Clifton coffee with a green background, 'CLIFTON' logo, and 'Honduras' label",
      },
      {
        id: 10,
        image: P_2,
        name: "Mexico",
        price: "£13.25",
        region: "Oaxaca",
        producer: "Ana Hernández",
        process: "Washed",
        rating: 5,
        desc: "A bag of Clifton coffee with a green background, 'CLIFTON' logo, and 'Mexico' label",
      },
    ],
  },
  socialmedia: {
    images: [
      { img: Social_1 },
      { img: Social_2 },
      { img: Social_3 },
      { img: Social_4 },
      { img: Social_5 },
      { img: Social_6 },
      { img: Social_7 },
      { img: Social_8 },
    ],
  },
  collections: [
    {
      title: "All Coffee",
      images: [Img_1_1, Img_1_2],
    },
    {
      title: "Clifton Tea",
      images: [Img_2_1, Img_2_2],
    },
    {
      title: "Clifton Merchandise",
      images: [Img_3_1, Img_3_2],
    },
    {
      title: "Clifton Hot Chocolate",
      images: [Img_2_2, Img_3_2],
    },
  ],
  reviews: [
    {
      rating: 5,
      title: "All I can say is wow",
      text: "The coffee Cometeer experience is incredible. It's having a high end cup of coffee from a boutique coffee shop at my fingertips.",
      author: "Michel F.",
    },
    {
      rating: 5,
      title: "Best coffee I've ever had",
      text: "Smooth, rich, and full of flavor. I can't believe I can make something this good at home.",
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
      title: "I'm hooked",
      text: "Once you try this, you can never go back to regular coffee. It's that good.",
      author: "Noah P.",
    },
    {
      rating: 5,
      title: "Flawless every time",
      text: "Consistency is key, and Cometeer nails it. Every cup tastes exactly perfect.",
      author: "Sophia H.",
    },
  ],
};

export default data;
