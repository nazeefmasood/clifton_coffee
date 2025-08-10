# ☕ Clifton Coffee Website

A modern, responsive coffee shop website built with React 18, featuring custom components, smooth animations, and mobile-first design. This project demonstrates advanced frontend development techniques with a focus on performance, accessibility, and user experience.

## 🌟 Features

- **Fully Responsive Design** - Mobile-first approach across 5 breakpoints
- **Custom Slider Component** - Built from scratch with multi-directional sliding
- **Advanced Image Effects** - Hover animations and image swapping
- **Interactive Modals** - Smooth animations and user-friendly interfaces
- **Mega Navigation Menus** - Complex dropdown navigation systems
- **Forms** - Newsletter subscription and enquiry forms
- **Performance Optimized** - Fast loading and smooth animations
- **Accessibility Focused** - Semantic HTML

## 🚀 Live Demo

**[View Live Website](https://clifton-coffee-two.vercel.app/)**

## 🛠️ Tech Stack

### Core Technologies

- **React 18** - Latest React version with concurrent features
- **JavaScript ES6+** - Modern JavaScript with destructuring, arrow functions, and modules
- **HTML5** - Semantic markup with accessibility considerations
- **CSS3** - Advanced styling with custom properties and animations
- **Vite** - Modern build tool for fast development and optimized production builds

### Styling & UI

- **Tailwind CSS** - Utility-first CSS framework for rapid development
- **Custom CSS Variables** - Comprehensive design system with consistent theming
- **Responsive Typography** - Fluid type scaling with clamp() functions

### Libraries & Dependencies

- **Lucide React** - for consistent icon design
- \*\*Lenis - Smooth scrolling library for enhanced user experience

## 📁 Project Structure

```
src/
├── App.jsx                     # Main application component
├── main.jsx                    # React 18 root rendering
├── layout/
│   └── Layout.jsx             # Application layout wrapper
├── pages/
│   └── Homepage.jsx           # Main homepage component
├── components/
│   ├── reusable/              # Reusable component library
│   │   ├── Slider.jsx         # Custom carousel component
│   │   ├── Button.jsx         # Configurable button component
│   │   └── ImageWithHoverEffect.jsx # Image hover component
│   └── sections/              # Page section components
│       ├── HeaderSection.jsx   # Navigation with mega menus
│       ├── HeroSection.jsx     # Video background hero
│       ├── ExploreSection.jsx  # Product exploration section
│       ├── OurCollectionSection.jsx # Collection showcase
│       ├── OurFavouritesSection.jsx # Featured products
│       ├── NewProductsSection.jsx # Tabbed product display
│       ├── TestimonialsSection.jsx # Customer reviews
│       ├── SocialMediaSection.jsx # Instagram integration
│       ├── SubscriptionAndToursSection.jsx # Service sections
│       ├── NewsletterSection.jsx # Email subscription
│       └── FooterSection.jsx   # Footer with contact form
├── data/
│   └── db.js                  # Centralized data management
├── assets/
│   ├── images/                # Image assets
│   └── fonts/                 # Custom font files
└── styles/
    └── globals.css            # Global styles and design system
```

## 🎯 Key Components

### 1. Custom Slider Component

A fully-featured carousel component built from scratch with extensive customization options.

#### Features:

- **Multi-directional sliding** (horizontal/vertical)
- **Responsive breakpoint handling**
- **Partial item preview capability**
- **Flexible pagination positioning**
- **Touch and mouse navigation**
- **Smooth CSS animations**

#### Usage:

```jsx
<Slider
  items={products}
  itemsToShow={4}
  itemsToShowMobile={1}
  itemsToShowTablet={2}
  showPagination={true}
  showArrows={true}
  translateIn="-x"
  renderItem={(item) => <ProductCard product={item} />}
/>
```

### 2. Button Component

Highly configurable button component with extensive styling options.

```jsx
<Button
  text="Shop Now"
  bg="bg-transparent"
  hoverBg="hover:bg-black"
  border="border-white"
  textColor="text-white"
  onClick={handleClick}
/>
```

### 3. ImageWithHoverEffect Component

Advanced image display with swap animations and overlay content.

```jsx
<ImageWithHoverEffect
  topImage="image1.jpg"
  bottomImage="image2.jpg"
  renderTopContent={function}
  swapOnHover={true}
/>
```

## 🎨 Design System

### Color Palette

The project uses a comprehensive color system with CSS custom properties:

```css
:root {
  /* Light Greys */
  --color-light-grey-1: #f5f5f5;
  --color-light-grey-2: #f6f8f2;
  --color-light-grey-3: #f0efe9;

  /* Green Variations */
  --color-light-green-1: #f6f8f2;
  --color-medium-green-3: #c5c9ad;
  --color-medium-green-4: #e0e1da;

  /* Specialized Colors */
  --color-black-shade: #0a0a09;
  --color-dark-gray: #4a4a4a;
}
```

### Typography Scale

Responsive typography using clamp() for perfect scaling:

```css
:root {
  --text-91: clamp(5.6875rem, 8vw + 3rem, 5.6875rem); /* Hero headings */
  --text-70: clamp(3rem, 6vw + 1rem, 4.375rem); /* Section titles */
  --text-48: clamp(3rem, 4vw + 1rem, 3rem); /* Subheadings */
  --text-18: clamp(1rem, 0.5vw + 0.875rem, 1.125rem); /* Body text */
  --font-barlow: "Barlow", sans-serif;
}
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/nazeefmasood/clifton_coffee.git
cd clifton_coffee
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Start the development server**

```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website.

### Build for Production

```bash
npm run build
# or
yarn build
```

## 👤 Author

**Nazeef Masood**

- GitHub: [@nazeefmasood](https://github.com/nazeefmasood)
- Email: [nazeefmasood](nazeefmasood@gmail.com)
