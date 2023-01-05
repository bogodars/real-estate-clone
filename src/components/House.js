import React from 'react';

import { BiBed, BiBath, BiArea } from 'react-icons/bi';
const House = ({ house }) => {
  const { image, type, address, bedrooms, bathrooms, surface, price } = house;
  return (
    <div>
      <img src={image} alt='' />
    </div>
  );
};

export default House;
