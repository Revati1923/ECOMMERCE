import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {setShowSearch,getCartCount}=useContext(ShopContext);

  return (
    <div className="flex flex-col w-full px-4 relative shadow-sm">
      {/* Top Nav Bar */}
      <div className="flex items-center justify-between py-4 font-medium">
        {/* Logo */}
        <img src={assets.logo} className="w-36" alt="Logo" />

        {/* Nav Links */}
        <ul className="hidden sm:flex gap-6">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>HOME</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
          </NavLink>
          <NavLink to="/collection" className="flex flex-col items-center gap-1">
            <p>COLLECTION</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
          </NavLink>
          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>ABOUT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
          </NavLink>
          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>CONTACT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
          </NavLink>
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-6">
          {/* Search Icon (no functionality now) */}
          <img onClick={()=>setShowSearch(true)}
            src={assets.search_icon}
            className="w-5 cursor-pointer"
            alt="Search"
          />

          {/* Profile Dropdown */}
          <div className="relative group">
            <Link to='/login'><img src={assets.profile_icon} className="w-5 cursor-pointer" alt="Profile" /></Link>
            <div className="hidden group-hover:block absolute right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-md">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          </div>

          {/* Cart Icon */}
          <Link to="/cart" className="relative">
            <img src={assets.cart_icon} className="w-5 h-5" alt="Cart" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              {getCartCount()}
            </p>
          </Link>

          {/* Mobile Menu Icon */}
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className="w-5 cursor-pointer sm:hidden"
            alt="Menu"
          />
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`absolute top-0 right-0 bottom-0 z-50 bg-white transition-all duration-300 ease-in-out ${
          visible ? 'w-full' : 'w-0'
        } overflow-hidden sm:hidden`}
      >
        <div className="p-6 relative">
          <button onClick={() => setVisible(false)} className="text-xl absolute top-4 right-4">
            ✕
          </button>
          <div className="flex flex-col gap-4 mt-12 text-gray-700">
            <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
              <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="Back" />
              <p>Back</p>
            </div>
            <NavLink className="py-2 pl-6 border" to="/" onClick={() => setVisible(false)}>
              HOME
            </NavLink>
            <NavLink className="py-2 pl-6 border" to="/collection" onClick={() => setVisible(false)}>
              COLLECTION
            </NavLink>
            <NavLink className="py-2 pl-6 border" to="/about" onClick={() => setVisible(false)}>
              ABOUT
            </NavLink>
            <NavLink className="py-2 pl-6 border" to="/contact" onClick={() => setVisible(false)}>
              CONTACT
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
