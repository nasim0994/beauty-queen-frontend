import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

export default function AdminHeader({ setSidebar }) {
  const { pathname } = useLocation();
  const { loggedUser } = useSelector((state) => state.user);

  return (
    <header className="py-3 px-6 bg-base-100 text-neutral shadow">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSidebar(true)}
            className="admin_sidebar_btn lg:hidden"
          >
            <HiOutlineMenuAlt2 className="text-xl" />
          </button>
          <div className="flex items-center text-[15px]">
            <Link to="/admin/dashboard">Dashboard</Link>
            {pathname !== "/admin/dashboard" && (
              <p className="hidden sm:block">{pathname}</p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <img
            src={
              loggedUser?.data?.image === ""
                ? "/images/demo_user.jpg"
                : `${import.meta.env.VITE_BACKEND_URL}/user/${
                    loggedUser?.data?.image
                  }`
            }
            alt=""
            className="w-8 h-8 rounded-full"
          />
          <p className="hidden sm:block">
            {loggedUser?.data?.firstName} {loggedUser?.data?.lastName}
          </p>
        </div>
      </div>
    </header>
  );
}
