import React, { useState, useEffect, createContext } from 'react';

import { housesData } from '../data';

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property type (any) ');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any) ');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });

    const uniqueCountries = ['Location (any)', ...new Set(allCountries)];

    setCountries(uniqueCountries);
  }, []);

  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });

    const uniqueProperties = ['Location (any)', ...new Set(allProperties)];

    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    const isDefault = (str) => {
      return str.split(' ').includes('(any)');
    };

    const minPrice = parseInt(price.split(' ')[0]);
    const maxPrice = parseInt(price.split(' ')[2]);

    const newHouses = housesData.filter((house) => {
      console.log(parseInt(house.price));
      return newHouses;
    });
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        countries,
        setProperty,
        setCountry,
        setCountries,
        setPrice,
        price,
        loading,
        houses,
        properties,
        property,
        properties,
        handleClick,
      }}>
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
