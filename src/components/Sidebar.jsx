import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTachometerAlt, FaUsers, FaCogs, FaClipboardCheck, FaDollarSign } from 'react-icons/fa';
import logo from '../assets/logo1.png';
import boy1 from "../assets/boy2.png";

const Sidebar = () => {
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, path: "/admin/dashboard" },
    { name: "Users", icon: <FaUsers />, path: "/admin/users" },
    { name: "Subscription", icon: <FaDollarSign />, path: "/admin/subscription" },
    { name: "Review", icon: <FaClipboardCheck />, path: "/admin/review" },
    { name: "Settings", icon: <FaCogs />, path: "/admin/settings" },
  ];

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <div className="w-[280px] h-screen bg-[#0D1B2A] text-white flex flex-col fixed left-0 top-0 shadow-md">
      
      {/* Logo (Positioning logo as per the given dimensions) */}
      <div className="absolute" style={{ width: '177px', height: '90px', top: '39px', left: '77px' }}>
        <img
          src={logo} // Replace with your logo URL
          alt="TradeSpark Logo"
          className="w-full h-full object-contain" // Adjust the size as needed
        />
      </div>

      {/* Profile (Positioning boy image as per the given dimensions) */}
      <div className="absolute" style={{ width: '60px', height: '60px', top: '166px', left: '130px' }}>
        <img
          src={boy1}
          alt="Profile"
          className="w-full h-full object-cover rounded-full"
          onClick={toggleProfileMenu} // Trigger Profile Menu on click
        />
      </div>

      {/* Profile Name */}
      <div 
        className="absolute"
        style={{ width: '120px', height: '18px', top: '242px', left: '100px' }}
        onClick={toggleProfileMenu} // Trigger Profile Menu on click
      >
        <span className="text-sm">Sean Mackey</span>
      </div>

      {/* Profile Menu Overlay */}
      {isProfileMenuOpen && (
        <div 
          className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-50"
          onClick={toggleProfileMenu} // Close the menu on click outside
        >
          <div 
            className="absolute top-0 left-0 w-[200px] bg-[#0077B6] p-4 text-white rounded-md shadow-lg transition-all"
            style={{
              top: '39px',
              left: '100px',
              animation: 'moveInFromTop 300ms ease-out', // Animation to move in from the top
            }}
          >
            <ul className="flex flex-col">
              <li className="px-4 py-2 hover:bg-[#0096c7] cursor-pointer">My Profile</li>
              <li className="px-4 py-2 hover:bg-[#0096c7] cursor-pointer">Inbox</li>
              <li className="px-4 py-2 hover:bg-[#0096c7] cursor-pointer">Account Settings</li>
              <li className="px-4 py-2 hover:bg-[#0096c7] cursor-pointer">Logout</li>
            </ul>
          </div>
        </div>
      )}

      {/* Menu Items */}
      <div className="flex flex-col gap-4 mt-[340px] px-6">
        <button
          onClick={() => navigate("/admin/dashboard")}
          className="flex items-center gap-4 text-[16px] px-4 py-3 rounded-md hover:bg-[#1B263B] transition-all duration-200"
          style={{
            width: '114.82px',
            height: '29px',
            animation: 'smartAnimate 300ms ease-out',
          }}
        >
          <span className="text-lg">{<FaTachometerAlt />}</span>
          <span>Dashboard</span>
        </button>

        <button
          onClick={() => navigate("/admin/users")}
          className="flex items-center gap-4 text-[16px] px-4 py-3 rounded-md hover:bg-[#1B263B] transition-all duration-200"
          style={{
            width: '114.82px',
            height: '29px',
            animation: 'smartAnimate 300ms ease-out',
          }}
        >
          <span className="text-lg">{<FaUsers />}</span>
          <span>Users</span>
        </button>

        <button
          onClick={() => navigate("/admin/subscription")}
          className="flex items-center gap-4 text-[16px] px-4 py-3 rounded-md hover:bg-[#1B263B] transition-all duration-200"
          style={{
            width: '114.82px',
            height: '29px',
            animation: 'smartAnimate 300ms ease-out',
          }}
        >
          <span className="text-lg">{<FaDollarSign />}</span>
          <span>Subscription</span>
        </button>

        <button
          onClick={() => navigate("/admin/review")}
          className="flex items-center gap-4 text-[16px] px-4 py-3 rounded-md hover:bg-[#1B263B] transition-all duration-200"
          style={{
            width: '114.82px',
            height: '29px',
            animation: 'smartAnimate 300ms ease-out',
          }}
        >
          <span className="text-lg">{<FaClipboardCheck />}</span>
          <span>Review</span>
        </button>

        <button
          onClick={() => navigate("/admin/settings")}
          className="flex items-center gap-4 text-[16px] px-4 py-3 rounded-md hover:bg-[#1B263B] transition-all duration-200"
          style={{
            width: '114.82px',
            height: '29px',
            animation: 'smartAnimate 300ms ease-out',
          }}
        >
          <span className="text-lg">{<FaCogs />}</span>
          <span>Settings</span>
        </button>
      </div>

      {/* Separator */}
      <div 
        style={{
          width: '320px',
          height: '1px',
          top: '318px',
          left: '0',
          opacity: '0.33',
          backgroundColor: '#fff',
        }}
        className="absolute"
      ></div>
    </div>
  );
};

export default Sidebar;
