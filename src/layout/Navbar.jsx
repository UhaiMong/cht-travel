import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { logout } from "../features/auth/authSlice";
import { useMediaQuery } from "react-responsive";
import { AiFillCar, AiOutlineShoppingCart } from "react-icons/ai";
import { CiMap } from "react-icons/ci";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BiHotel } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { emptyCart } from "../features/cartSlice";
import { useLocation } from "react-router-dom";
import { useCheckAdminQuery } from "../api/userSlice";

const manualRegUserImg = "https://i.ibb.co/vv70hPd/manual-Reg-User-Img.png";
const chtTravelLogoTwo = "https://i.ibb.co/ypH6jJt/cht-travel-logo-two.png";

const Navbar = () => {
  const { email, photoURL } = useSelector((state) => state?.auth);
  const { cart } = useSelector((state) => state.cart);
  const { data } = useCheckAdminQuery(email);

  const dispatch = useDispatch();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(logout());
      dispatch(emptyCart());
    });
  };

  const location = useLocation();
  const currentUrl = location?.pathname;

  return (
    <div
      className={`${
        currentUrl === "/" && "navbar-fixed"
      } navbar bg-white shadow lg:px-40`}
    >
      {/* for mobile */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn-ghost btn lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-white rounded-box space-y-2 menu-compact text-black font-bold mt-3 w-52  p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Services
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="bg-white p-2 space-y-1">
                <li>
                  <Link to="/hotels">Hotels</Link>
                </li>
                <li>
                  <a>Transportation</a>
                </li>
                <li>
                  <a>Tourist Sight</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="http://www.fbta.gov.bd/"
                target="_blank"
                rel="noreferrer"
              >
                Foreigners Registration
              </a>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contacts</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link> Eng | বাংলা</Link>
            </li>

            {data?.admin && email && (
              <Link
                to="/dashboard"
                className="btn bg-black hover:bg-[#333333] text-white border-0"
              >
                Dashboard
              </Link>
            )}

            {!email && (
              <Link to="/login" className="btn btn-sm btn-primary">
                Login
              </Link>
            )}
          </ul>
        </div>
        <Link to="/">
          {isTabletOrMobile ? (
            <span className="font-bold text-xl normal-case">CHT-Travel</span>
          ) : (
            <div>
              <img className="w-20 h-20" src={chtTravelLogoTwo} alt="" />
            </div>
          )}
        </Link>
      </div>

      {/* for web */}
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2 text-black font-bold ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li tabIndex={0}>
            <a>
              Services
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="z-10 bg-white p-2 space-y-2">
              <li>
                <Link to="/hotels">
                  <BiHotel size={23} />
                  Hotels
                </Link>
              </li>
              <li className="text-gray-400 cursor-not-allowed">
                <a>
                  <AiFillCar size={23} />
                  Transportation
                </a>
              </li>
              <li className="text-gray-400 cursor-not-allowed">
                <a>
                  <CiMap size={23} />
                  Tourist Sight
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="http://www.fbta.gov.bd/" target="_blank" rel="noreferrer">
              <IoPersonCircleOutline size={23} />
              Foreigners Registration
            </a>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contacts</Link>
          </li>

          <li>
            <Link to="/cart">
              {cart?.length > 0 && (
                <div className="indicator">
                  <AiOutlineShoppingCart size={23} />
                  <span className="badge badge-xs badge-info indicator-item">
                    {cart?.length}
                  </span>
                </div>
              )}
              Cart
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex items-center space-x-8">
        {!email && (
          <Link to="/login" className="btn btn-sm btn-primary">
            Login
          </Link>
        )}

        {/* {data?.admin && email && !isTabletOrMobile && (
            <Link to="/dashboard" className="btn btn-sm btn-primary">
              Dashboard
            </Link>
          )} */}
        {!isTabletOrMobile && (
          <div className="w-fit flex items-center">
            <button className="btn btn-sm btn-primary gap-1">
              Eng <span className="font-bold">| বাংলা</span>
            </button>
          </div>
        )}

        <div className="dropdown dropdown-end">
          <>
            {photoURL && (
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={photoURL} />
                </div>
              </label>
            )}

            {photoURL === null && (
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={manualRegUserImg} />
                </div>
              </label>
            )}
          </>

          {email && (
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-white rounded-box w-52"
            >
              <Link to="/profile">
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
              </Link>
              <li>
                {data?.admin && email && !isTabletOrMobile && (
                  <Link to="/dashboard">Dashboard</Link>
                )}
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={handleSignOut}>Logout</a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
