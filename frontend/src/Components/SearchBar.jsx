import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';
import {useLocation} from 'react-router-dom'

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const[visible,setVisible]=useState(false)
  const location=useLocation();

  useEffect(()=>{
    if(location.pathname.includes('collection')){
        setVisible(true);
    }
    else{
        setVisible(false);
    }
  },[location])

  return showSearch && visible ? (
    <div className="border-t border-b bg-white py-4 flex justify-center items-center">
      <div className="relative flex items-center w-full max-w-md bg-gray-100 rounded-full shadow-md px-4 py-2">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for products..."
          className="flex-1 bg-transparent outline-none text-sm px-2"
        />
        <img
          src={assets.search_icon}
          alt="search"
          className="w-5 h-5 cursor-pointer"
        />
        <img
          onClick={() => setShowSearch(false)}
          src={assets.cross_icon}
          alt="close"
          className="w-4 h-4 ml-3 cursor-pointer opacity-60 hover:opacity-100 transition"
        />
      </div>
    </div>
  ) : null;
};

export default SearchBar;
