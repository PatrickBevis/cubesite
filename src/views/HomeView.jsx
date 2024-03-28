import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/card";
import { cubeData } from "../data/cubeData";

const HomeView = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-between gap-3">
        {[...Array(3)].map((_, groupIndex) => (
          <div key={groupIndex} className="flex justify-center gap-3">
            {cubeData.slice(groupIndex * 3, groupIndex * 3 + 3).map((i) => (
              <Link key={i.id} to={i.url}>
              <Card
                key={i.id}
                url={i.url}
                title={i.title}
                text={i.text}
                color={i.color}
                hover={i.hover}
                hasLockIcon={i.hasLockIcon}
                hasLogo={i.hasLogo}
                cursor={i.cursor}
                animate={i.animate}
                rounded={i.rounded}
              />
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeView;
