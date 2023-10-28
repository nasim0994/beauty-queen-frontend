import { Link } from "react-router-dom";
import { useState } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { FiHeart, FiLogIn } from "react-icons/fi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import MobileMenuSidebar from "./MobileMenuSidebar";
import SearchBox from "./SearchBox";
import { UseContext } from "../../ContextApi/ContextApi";

const MainHeader = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { loggedUser } = UseContext();

  return (
    <div className="py-2 text-neutral border-b sticky top-0 z-40 bg-[#ffffffcc] backdrop-blur-[10px]">
      <div className="container">
        <div className="flex items-center justify-between gap-2">
          <div>
            <Link to="/">
              <img
                src="/images/logo/logo.png"
                alt=""
                className="w-20 sm:w-28"
              />
            </Link>
          </div>

          <div className="hidden md:block w-1/2 lg:w-3/5">
            <SearchBox />
          </div>

          <div className="flex gap-4 lg:gap-6 items-center">
            <Link
              to="/account/wishlist"
              className="flex gap-1 items-center text-neutral hover:text-primary duration-300"
            >
              <FiHeart className="text-lg sm:text-[17px]" />
              <h1 className="font-medium hidden sm:block">wishlist</h1>
            </Link>

            <Link
              to="/cart"
              className="flex gap-3 items-center hover:text-primary duration-300"
            >
              <div className="relative">
                <RiShoppingCartLine className="text-xl" />
                <div className="absolute flex items-center justify-center w-4 h-4 text-xs font-bold bg-primary text-base-100 rounded-full -top-2 -right-2">
                  <span className="mt-px">0</span>
                </div>
              </div>
              <h1 className="font-medium hidden sm:block">৳00</h1>
            </Link>

            {loggedUser?.success ? (
              <>
                <button>
                  <img src="" alt="" className="w-8 h-8 rounded-full border" />
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="flex gap-1.5 items-center text-neutral hover:text-primary duration-300"
              >
                <FiLogIn className="text-xl sm:text-[17px]" />
                <h1 className="font-medium hidden sm:block">Login</h1>
              </Link>
            )}

            <div className="md:hidden">
              <button
                onClick={() => setMobileMenu(true)}
                className="text-[22px] text-neutral mt-1.5"
              >
                <HiOutlineMenuAlt3 />
              </button>
            </div>
          </div>
        </div>
      </div>

      <MobileMenuSidebar
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
      />
    </div>
  );
};

export default MainHeader;
