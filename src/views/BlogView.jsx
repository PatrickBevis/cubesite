import React from "react";
import Card from "../components/card";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
const cardData = [
  {
    id: 1,
    title: "Première carte",
    rounded: "rounded-lg",
    display: "block",
  },
  {
    id: 2,
    title: "Deuxième carte",
    rounded: "rounded-lg",
    display: "block",
  },
  {
    id: 1,
    title: "Première carte",
    rounded: "rounded-lg",
    display: "block",
  },
  {
    id: 2,
    title: "Deuxième carte",
    rounded: "rounded-lg",
    display: "block",
  },
  {
    id: 1,
    title: "Première carte",
    rounded: "rounded-lg",
    display: "block",
  },
  {
    id: 2,
    title: "Deuxième carte",
    rounded: "rounded-lg",
    display: "block",
  },
];
const BlogView = () => {
  return (
    <>
    <Navbar/>
      <div className="flex justify-center items-center h-screen gap-3">
        {/* ecran smartphone */}
        <div className="grid grid-cols-4 gap-6">
          {cardData.map((i) => (
            <Card
              key={i.id}
              title={i.title}
              animate={i.animate}
              rounded="rounded-3xl"
              display={i.display}
            />
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default BlogView;
