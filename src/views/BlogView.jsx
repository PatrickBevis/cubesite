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
    title: "La plage",
    text: "Mon petit séjour sympa en France",
    rounded: "md:rounded-3xl",
    hover: "md:hover:scale-105",
    border: "border border-b-2 md:border-4 border-gray-900",
    date:{creationDate},
  },
  {
    id: 2,
    title: "Première carte",
    rounded: "md:rounded-3xl",
   hover: "md:hover:scale-105",
    border: "border border-b-2 md:border-4 border-gray-900",
    date:{creationDate},
  },{
    id: 3,
    title: "Première carte",
    rounded: "md:rounded-3xl",
    hover: "md:hover:scale-105",
    border: "border border-b-2 md:border-4 border-gray-900",
    date:{creationDate},
  },{
    id: 4,
    title: "Première carte",
    rounded: "md:rounded-3xl",
    hover: "md:hover:scale-105",
    border: "border border-b-2 md:border-4 border-gray-900",
    date:{creationDate},
  },{
    id: 5,
    title: "Première carte",
    rounded: "md:rounded-3xl",
    hover: "md:hover:scale-105",
    border: "border border-b-2 md:border-4 border-gray-900",
    date:{creationDate},
  },{
    id: 6,
    title: "Première carte",
    rounded: "md:rounded-3xl",
    hover: "md:hover:scale-105",
    border: "border border-b-2 md:border-4 border-gray-900",
    date:{creationDate},
    
  },
  
];

  return (
    <>
    <Navbar/>
      <div className="md:flex md:justify-center md:items-center h-screen">
       
       
        <div className="grid grid-cols-1 md:grid md:gap-24 md:grid-cols-3 lg:grid-cols-3">
          {cardData.map((i) => (
            <Card
              key={i.id}
              title={i.title}
              text={i.text}
              animate={i.animate}
              rounded={i.rounded}
              hover={i.hover}
              border={i.border}
              date={creationDate}
            />
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default BlogView;
