import React from "react";
import Card from "../components/card";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const BlogView = () => {
  const currentDate = new Date();
  const creationDate = currentDate.toISOString();
  const cardData = [
    {
      id: 1,
      image:"https://www.istockphoto.com/fr/photo/mignon-chien-brun-qui-sourit-arri%C3%A8re-plan-isol%C3%A9-gm1589824836-529341794",
      title: "La plage",
      text: "Mon petit séjour sympa en France",
      rounded: "md:rounded-3xl",
      date: { creationDate },
    },
    {
      id: 2,
      title: "Première carte",
      rounded: "md:rounded-3xl",
      date: { creationDate },
    },
    {
      id: 3,
      title: "Première carte",
      rounded: "md:rounded-3xl",
      date: { creationDate },
    },
    {
      id: 4,
      title: "Première carte",
      rounded: "md:rounded-3xl",
      date: { creationDate },
    },
    {
      id: 5,
      title: "Première carte",
      rounded: "md:rounded-3xl",
      hover: "md:hover:scale-105",
      date: { creationDate },
    },
    {
      id: 6,
      title: "Première carte",
      rounded: "md:rounded-3xl",
      date: { creationDate },
    },
  ];

  return (
    <>
      <Navbar />

      <div className="md:flex md:justify-center md:items-center h-screen">
        <div className="grid grid-cols-1 md:grid md:gap-9 md:grid-cols-3 lg:grid-cols-4">
          {cardData.map((i) => (
            <Card
              key={i.id}
              image={i.image}
              title={i.title}
              text={i.text}
              rounded={i.rounded}
              date={creationDate}
            />
          ))}
        </div>
      </div>
      <div className="hidden md:block">
        <Footer />
      </div>
    </>
  );
};

export default BlogView;
