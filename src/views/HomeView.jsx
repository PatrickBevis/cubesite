import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/card";
import { cubeData } from "../data/cubeData";

const HomeView = () => {
  return (
    <div className="flex justify-center items-center h-screen gap-3">
      {/* ecran smartphone */}
      <div className="block lg:hidden flex flex-col gap-1">
        {cubeData.map((i) => (
          <Link key={i.id} to={i.url}>
            <Card
              key={i.id}
              title={i.title}
              text={i.text}
              color={i.color}
              hover={i.hover}
              hasLockIcon={i.hasLockIcon}
              hasLogo={i.hasLogo}
              cursor={i.cursor}
              animate={i.animate}
              rounded={i.rounded}
              nouv={i.nouv}
              display={i.display}
            />
          </Link>
        ))}
      </div>
      {/* ecran lg*/}
      <div className="hidden lg:flex lg:flex-col gap-3">
        {[...Array(3)].map((_, groupIndex) => (
          <div key={groupIndex} className="lg:flex lg:flex-row lg:gap-3">
            {cubeData.slice(groupIndex * 3, groupIndex * 3 + 3).map((i) => (
              <Link key={i.id} to={i.url}>
                <Card
                  key={i.id}
                  title={i.title}
                  text={i.text}
                  color={i.color}
                  hover={i.hover}
                  hasLockIcon={i.hasLockIcon}
                  hasLogo={i.hasLogo}
                  cursor={i.cursor}
                  animate={i.animate}
                  rounded={i.rounded}
                  nouv={i.nouv}
                  display={i.display}
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
