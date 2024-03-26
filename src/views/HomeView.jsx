import React from "react";
import Card from "../components/card";
import { cubeData } from "../data/cubeData";

const HomeView = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-between gap-3">
        {[...Array(3)].map((_, groupIndex) => (
          <div key={groupIndex} className="flex justify-center gap-3">
            {cubeData.slice(groupIndex * 3, groupIndex * 3 + 3).map((item) => (
              <Card key={item.id} title={item.title} color={item.color} hover= {item.hover} hasLockIcon={item.hasLockIcon} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeView;
