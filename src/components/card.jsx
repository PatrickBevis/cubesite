import React from 'react';
import { AiOutlineLock } from 'react-icons/ai';

const Card = ({ title, color, hover, hasLockIcon }) => {
  return (
    <div className={`relative block w-52 h-52 pl-3.5 pt-9 border-4 border-black ${color} rounded-3xl shadow ${hover}`}>
      <h3 className="mb-2 font-bold text-24 font-lTera text-gray-900">
        {title}
      </h3>
      {hasLockIcon && (
        <div className="absolute inset-0 flex justify-center items-center">
          <AiOutlineLock className='text-gray-900 w-20 h-20 '  />
        </div>
      )}
    </div>
  );
}

export default Card;
