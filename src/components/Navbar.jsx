import React, { useState } from "react";
import { Link } from "react-router-dom";


const navItems = [
  { label: "Shop", icon: "/Shopp.png", path: "/" },
  { label: "OurProduct", icon: "/Product.png", path: "/products" },
  { label: "Help", icon: "/Help.png", path: "/help" },
  { label: "QuickQuote", icon: "/QuickQuote.png", path: "/quote" },
  { label: "AboutUs", icon: "/AboutUs.png", path: "/about" },
  { label: "Blog", icon: "/Blog.png", path: "/blog" },
  { label: "ContactUs", icon: "/ContactUs.png", path: "/contact" },
];


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 left-0 z-50">
    
      <div className="bg-gray-900 text-lime-400 text-sm flex justify-between items-center px-6 py-2">
        <div>
          Get your proofs in 24 hours for FREE with fast delivery guaranteed!
        </div>
        <div className="flex items-center gap-4 text-white text-sm">
          <span className="text-lime-400">+1-800-866-0212</span>
          <a href="#" className="flex items-center gap-1 hover:text-lime-400">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 10a4 4 0 100-8 4 4 0 000 8zm1 2H9a4 4 0 00-4 4v1h10v-1a4 4 0 00-4-4z" />
            </svg>
            LOG IN
          </a>
        </div>
      </div>


      <nav className="bg-white px-6 py-3 shadow-md">
        <div className="flex items-center justify-between">
        
        <Link to="/">
  <img src="/logoo.png" alt="Logo" className="w-36 h-auto" />
</Link>

          <div className="hidden md:flex items-center gap-5">
            <button className="bg-lime-400 text-black px-4 py-2 text-sm font-bold rounded hover:bg-lime-500 transition">
              GET INSTANT QUOTE
            </button>
            <div className="relative">
              <img src="/cart.png" alt="Cart" className="h-6" />
              <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs px-1 rounded-full">
                0
              </span>
            </div>
          </div>

          
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        
        <ul
  className={`${
    isMenuOpen ? "flex" : "hidden"
  } md:flex flex-col md:flex-row gap-6 mt-4 md:mt-4 items-center font-semibold`}
>
{navItems.map((item, index) => (
  <li
    key={index}
    className="flex flex-col items-center text-gray-700 hover:text-lime-500 transition cursor-pointer"
  >
    <Link to={item.path} className="flex flex-col items-center">
      <img src={item.icon} alt={item.label} className="h-6 mb-1" />
      <span className="text-sm">{item.label}</span>
    </Link>
  </li>
))}

</ul>
      </nav>
    </div>
  );
};

export default NavBar;
