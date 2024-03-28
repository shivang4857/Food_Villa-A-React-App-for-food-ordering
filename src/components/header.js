import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
const Title = () => (
  <a href="/">
    <img  className= "w-[150] " 
  alt="logo"
   src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj " ></img>

</a>
);



const Header= () => {
  const [isLoggedin, setIsLoggedin] = useState(true);
  const navigate = useNavigate();
  const cartItems = useSelector(store => store.cart.items)












































  
 

    return (
      <div className = "flex   space-x-44 row-auto bg-pink-200 ">
        <Title />
        <div >
          <ul className="flex justify-center shadow-lg ">
          <li className="px-10 m-5">
            <Link to="/">Home</Link>
          </li>
          <li className="px-10 m-5">
            <Link to="/about">About</Link>
          </li>

          <li className="px-10 m-5">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-10 m-5">
            {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button
                className=""
                onClick={() => setIsLoggedin(false)}
              >
                Logout
              </button>
            ) : (
              <button className="" onClick={() => navigate("/login")}>
                Login
              </button>
            )}
          </li> 
          <Link to="/cart">
            <li className="px-10 m-5 bg-purple-600 text-white rounded-md">
            
              Cart ( {cartItems.length} ) items 
              </li>
              </Link>
          </ul>
        </div>
      </div>
    );
  };


export default Header;  