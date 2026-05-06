"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="largeSmallSizeLargeTitles"
        background="fluid"
        cardStyle="inset"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Menu",
          id: "features",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="BB Restaurant & Cafe"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "plain",
      }}
      title="Experience Culinary Excellence at BB"
      description="Where fresh ingredients meet warm hospitality. Join us for a delightful breakfast, lunch, or evening dinner in a setting designed for you."
      buttons={[
        {
          text: "Reserve a Table",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/side-view-iron-teapot-with-glass-tea-potted-plant-table_141793-13004.jpg?_wi=1"
      imageAlt="BB Restaurant & Cafe inviting atmosphere"
      mediaAnimation="blur-reveal"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/cocktail-wooden-table-restaurant_23-2147936121.jpg",
          alt: "Cocktail on wooden table in the restaurant",
        },
        {
          src: "http://img.b2bpic.net/free-photo/tanned-lady-is-sitting-cafe-with-wooden-furniture-watching-video-phone_197531-17107.jpg",
          alt: "Tanned lady is sitting in cafe",
        },
        {
          src: "http://img.b2bpic.net/free-photo/side-view-woman-sits-table-with-cocktail-lit-candle_140725-9075.jpg",
          alt: "Side view a woman sits at a table",
        },
        {
          src: "http://img.b2bpic.net/free-photo/vertical-shot-empty-cafeteria_181624-29282.jpg",
          alt: "Vertical shot of an empty cafeteria",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-couple-talking-while-choosing-order-form-menu-cafe_637285-8950.jpg",
          alt: "Happy couple talking",
        },
      ]}
      avatarText="Join 5,000+ happy guests"
      marqueeItems={[
        {
          type: "text",
          text: "Fresh Organic Ingredients",
        },
        {
          type: "text",
          text: "Artisan Coffee Roasts",
        },
        {
          type: "text",
          text: "Daily Handmade Pastries",
        },
        {
          type: "text",
          text: "Private Event Catering",
        },
        {
          type: "text",
          text: "Seasonal Brunch Specials",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="A Tradition of Taste"
      description={[
        "Founded on the principles of freshness and authenticity, our kitchen prepares every dish from scratch using locally sourced, seasonal ingredients.",
        "We believe that food is more than just sustenance; it is a shared experience that brings people together.",
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          id: "f1",
          title: "Farm-to-Table Organic",
          tags: [
            "Fresh",
            "Organic",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/korean-bibimbap-rice-bowl-with-fried-egg-vegetables_84443-85747.jpg?_wi=1",
        },
        {
          id: "f2",
          title: "Artisan Coffee Roasts",
          tags: [
            "Roast",
            "Aromatic",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-hands-preparing-drink-with-milk_23-2148865605.jpg?_wi=1",
        },
        {
          id: "f3",
          title: "Fresh Daily Bakery",
          tags: [
            "Baked",
            "Sourdough",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/croissants-with-cup-tea-pan-with-towel-wooden-table_176474-8246.jpg?_wi=1",
        },
      ]}
      title="Our Signature Specialties"
      description="Discover a selection of handcrafted items prepared daily by our expert culinary team."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Gourmet Brunch Plate",
          price: "$18",
          imageSrc: "http://img.b2bpic.net/free-photo/breakfast-set-table_140725-1308.jpg",
        },
        {
          id: "p2",
          name: "Specialty Organic Tea",
          price: "$6",
          imageSrc: "http://img.b2bpic.net/free-photo/home-composition-with-cup-tea-teapot-blurred-background_169016-35408.jpg",
        },
        {
          id: "p3",
          name: "Handmade Fruit Tart",
          price: "$9",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-yummy-chocolate-cake-getting-decorated-with-fresh-fruits-by-female-dark-wall_179666-30719.jpg",
        },
        {
          id: "p4",
          name: "Berry Smoothie",
          price: "$8",
          imageSrc: "http://img.b2bpic.net/free-photo/view-delicious-cookies-cup-black-tea-with-cinnamon-old-newspaper-spiral-notebook-dark-background_140725-94332.jpg",
        },
        {
          id: "p5",
          name: "Artisan Panini",
          price: "$14",
          imageSrc: "http://img.b2bpic.net/free-photo/chicken-breast-topped-with-fried-vegetables_140725-2712.jpg",
        },
        {
          id: "p6",
          name: "Fresh Berry Pastry",
          price: "$7",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-bowl-with-berries-fresh-ripe-fruits-with-pastry-grey-berry-fruit-fresh-mellow-forest_140725-33814.jpg",
        },
      ]}
      title="From Our Menu"
      description="Classic flavors and bold new inspirations from our seasonal menu selections."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardFive
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      plans={[
        {
          id: "basic",
          tag: "Essential",
          price: "$45",
          period: "/person",
          description: "Perfect for intimate gatherings.",
          button: {
            text: "Inquire",
          },
          featuresTitle: "Included Services",
          features: [
            "3-course meal",
            "Custom menu card",
            "Dedicated service",
          ],
        },
        {
          id: "pro",
          tag: "Deluxe",
          price: "$85",
          period: "/person",
          description: "An unforgettable gourmet experience.",
          button: {
            text: "Inquire",
          },
          featuresTitle: "Included Services",
          features: [
            "5-course meal",
            "Wine pairing",
            "Private room",
            "Custom decor",
          ],
        },
      ]}
      title="Event Dining Packages"
      description="Host your private gatherings with our curated dining packages designed for elegance."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Jane D.",
          date: "Oct 2024",
          title: "Regular Guest",
          quote: "The absolute best brunch in the city!",
          tag: "Brunch",
          avatarSrc: "http://img.b2bpic.net/free-photo/happy-couple-talking-each-other-lunch-time-restaurant-focus-is-woman-eating-sandwich_637285-1962.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-iron-teapot-with-glass-tea-potted-plant-table_141793-13004.jpg?_wi=2",
          imageAlt: "happy customer dining restaurant",
        },
        {
          id: "t2",
          name: "Mark S.",
          date: "Sept 2024",
          title: "Foodie",
          quote: "Incredible ingredients and even better service.",
          tag: "Dinner",
          avatarSrc: "http://img.b2bpic.net/free-photo/young-caucasian-woman-working-office-holding-coffee-cups-smiling-with-happy-cool-smile-face-showing-teeth_839833-17423.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/elevated-view-fresh-vegetables-chili-flakes-wooden-background_23-2147956521.jpg",
          imageAlt: "happy customer dining restaurant",
        },
        {
          id: "t3",
          name: "Chloe R.",
          date: "Aug 2024",
          title: "Local",
          quote: "Perfect atmosphere for my morning coffee.",
          tag: "Cafe",
          avatarSrc: "http://img.b2bpic.net/free-photo/friends-eating-pizza-side-view_23-2149872410.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/korean-bibimbap-rice-bowl-with-fried-egg-vegetables_84443-85747.jpg?_wi=2",
          imageAlt: "happy customer dining restaurant",
        },
        {
          id: "t4",
          name: "David W.",
          date: "July 2024",
          title: "Coffee Lover",
          quote: "The artisan roasts are consistently perfect.",
          tag: "Coffee",
          avatarSrc: "http://img.b2bpic.net/free-photo/adults-enjoying-mexican-food_23-2149663852.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-hands-preparing-drink-with-milk_23-2148865605.jpg?_wi=2",
          imageAlt: "happy customer dining restaurant",
        },
        {
          id: "t5",
          name: "Sarah K.",
          date: "June 2024",
          title: "Frequent Guest",
          quote: "I always leave with a smile and a full belly.",
          tag: "Bakery",
          avatarSrc: "http://img.b2bpic.net/free-photo/cheerful-fashionable-woman-wears-sunglasses-white-sweater-red-headband-listens-audio-her-own-playlist-enjoys-leisure-time-coffee-shop-pretty-woman-entertain-herself-with-electonic-device_273609-2298.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/croissants-with-cup-tea-pan-with-towel-wooden-table_176474-8246.jpg?_wi=2",
          imageAlt: "happy customer dining restaurant",
        },
      ]}
      title="What Our Guests Say"
      description="Join our community of happy food lovers."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "Do you accept reservations?",
          content: "Yes, we highly recommend booking in advance.",
        },
        {
          id: "q2",
          title: "Do you have vegetarian options?",
          content: "Absolutely! We offer a wide variety of fresh vegetarian and vegan dishes.",
        },
        {
          id: "q3",
          title: "Are you pet friendly?",
          content: "Our patio area is fully pet-friendly.",
        },
      ]}
      title="Common Questions"
      description="Here is everything you need to know about your next visit to BB."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Visit Us"
      title="Stay Updated"
      description="Sign up to receive our seasonal menus and exclusive event invitations."
      imageSrc="http://img.b2bpic.net/free-photo/closeup-shot-happy-young-lady-room-with-many-bright-chandeliers_181624-44491.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="BB Restaurant & Cafe"
      columns={[
        {
          title: "Explore",
          items: [
            {
              label: "Menu",
              href: "#features",
            },
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Book",
              href: "#contact",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
