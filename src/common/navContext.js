import React, { createContext, useState } from 'react';

export const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [namaLink, setNamaLink] = useState('Home'); // default value
  const [xNama,setXnama]=useState('');
  const value = {
    namaLink,
    setNamaLink,
    xNama,
    setXnama
  };
  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};