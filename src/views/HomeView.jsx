import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/homeCard";
import { cubeData } from "../data/cubeData";
import { mobAffData } from "../data/mobAffData";

const HomeView = () => {
  return (
    <>
   
    <div className="md:flex md:justify-center md:items-center h-screen">

      {/* ecran smartphone */}
      <div className="md:hidden grid grid-cols-1">
        {mobAffData.map((i) => (
          <Link key={i.id} to={i.url}>
            <Card
              key={i.id}
              title={i.title}
              text={i.text}
              color={i.color}
              hover={i.hover}
              border={i.border}       
              cursor={i.cursor}
              animate={i.animate}
             
            />
          </Link>
        ))}
      </div>

      {/* ecran lg*/}
      <div className="hidden md:flex md:flex-col gap-3">
        {[...Array(3)].map((_, groupIndex) => (
          <div key={groupIndex} className="md:flex md:flex-row md:gap-3">
            {cubeData.slice(groupIndex * 3, groupIndex * 3 + 3).map((i) => (
              <Link key={i.id} to={i.url}>
                <Card
                  key={i.id}
                  title={i.title}
                  text={i.text}
                  color={i.color}
                  border={i.border}
                  hasLockIcon={i.hasLockIcon}
                  hasLogo={i.hasLogo}
                  cursor={i.cursor}
                  rounded={i.rounded}
                  nouv={i.nouv}
                />
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>

    </>
  );
};

export default HomeView;
