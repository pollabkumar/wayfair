"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const HorizontalScroll = () => {
  return <HorizontalScrollCarousel />;
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh] mx-auto max-w-[1440px]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden hidden md:flex">
        <motion.div style={{ x }} className="flex gap-4 mx-auto">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[500px] w-full sm:w-[350px] md:w-[400px] lg:w-[1440px] max-w-[1440px] overflow-hidden flex shadow-lg rounded-lg"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
    </div>
  );
};

export default HorizontalScroll;

const cards = [
  {
    url: "https://res.cloudinary.com/ddjvqd8o4/image/upload/v1721890515/uploads/uulm5w8gu90txu0gwcfu.png",
    title: "Title 1",
    id: 1,
  },
  {
    url: "https://res.cloudinary.com/ddjvqd8o4/image/upload/v1721890614/uploads/p1ym45ffii3wxkvvijpq.png",
    title: "Title 2",
    id: 2,
  },
  {
    url: "https://res.cloudinary.com/ddjvqd8o4/image/upload/v1721890652/uploads/o0084uxrfxakbp1fnlf6.png",
    title: "Title 3",
    id: 3,
  },
];
