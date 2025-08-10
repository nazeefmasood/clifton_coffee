import Shop_Header_1 from "../assets/images/header/shop_1.jpg";
import Shop_Header_2 from "../assets/images/header/shop_2.png";
import Acc_Header_1 from "../assets/images/header/accessories_1.jpg";
import Acc_Header_2 from "../assets/images/header/accessories_2.jpg";
import Coffee_Header_1 from "../assets/images/header/coffee_1.jpg";
import Coffee_Header_2 from "../assets/images/header/coffee_2.jpg";
import Edu_Header_1 from "../assets/images/header/education_1.jpg";
import Edu_Header_2 from "../assets/images/header/education_2.jpg";
import Sub_Header_1 from "../assets/images/header/subscription_1.jpg";

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
};

export default data;
