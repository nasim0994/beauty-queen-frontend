import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "../../Redux/category/categoryApi";
import { useGetContactQuery } from "../../Redux/contact/contactApi";
import { useGetMainLogoQuery } from "../../Redux/logo/logoApi";

export default function Footer() {
  const { data, isLoading } = useGetCategoriesQuery();
  const { data: contact, isLoading: contactLoading } = useGetContactQuery();

  const fiveCategories = data?.data.slice(0, 5);

  if (isLoading || contactLoading) {
    return null;
  }

  return (
    <footer className="pt-8 pb-4 bg-gray-50">
      <div className="container">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="w-max">
              <Link to="/">
                <img src="/images/logo/logo.png" className="w-52" alt="Logo" />
              </Link>
            </div>
            <p className="text-neutral-content mt-1 font-medium">
              Your trusted online shop
            </p>

            <div className="mt-1 text-sm text-neutral-content">
              <p>
                Elevate your style reign with Beauty Queen Online. Where
                elegance meets convenience. Shop the finest trends, and reign
                supreme in every outfit. Unleash your inner beauty, one click
                away.
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold uppercase text-neutral/90">
              Categories
            </h2>
            <ul className="text-neutral-content text-[15px]">
              {fiveCategories?.map((category, i) => (
                <li key={i} className="mb-2">
                  <Link
                    to={`/shops/${category?.slug}`}
                    className="hover:underline"
                  >
                    {category?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold uppercase text-neutral/90">
              Information
            </h2>
            <ul className="text-neutral-content text-[15px]">
              <li className="mb-2">
                <Link to="/shops" className="hover:underline">
                  Shop
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about-us" className="hover:underline">
                  About Us
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold uppercase text-neutral/90">
              Get in Touch
            </h2>
            <ul className="text-neutral-content text-[15px]">
              <li className="mb-1">
                <p className="italic">{contact?.data[0]?.address}</p>
              </li>
              <li className="mb-1">
                <p>{contact?.data[0]?.phone}</p>
              </li>
              <li>
                <p>{contact?.data[0]?.email}</p>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700" />

        <div>
          <img
            src="/images/sslcommerz-banner.png"
            alt=""
            className="md:w-full md:h-[130px]"
          />
        </div>

        <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700" />

        {/* bottom */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-[15px] text-neutral-content">
            © 2024 BeautyQueen. All Rights Reserved. Develop by{" "}
            <Link
              to="https://www.facebook.com/codertech.xyz"
              target="_blank"
              className="font-semibold"
            >
              CoderTech
            </Link>
            .
          </span>
          <ul className="flex items-center gap-2 text-neutral-content mt-3 sm:mt-0">
            <li>
              <Link to={contact?.data[0]?.facebookLink} target="_blank">
                <BsFacebook className="text-lg hover:-mt-2 duration-300" />
              </Link>
            </li>
            <li>
              <Link
                to={`https://wa.me/${contact?.data[0]?.whatsapp}`}
                target="_blank"
              >
                <IoLogoWhatsapp className="text-xl hover:-mt-2 duration-300" />
              </Link>
            </li>
            <li>
              <Link to={contact?.data[0]?.linkedinLink} target="_blank">
                <FaLinkedin className="text-xl hover:-mt-2 duration-300" />
              </Link>
            </li>
            <li>
              <Link to={contact?.data[0]?.instagramLink} target="_blank">
                <AiFillInstagram className="text-xl hover:-mt-2 duration-300" />
              </Link>
            </li>
            <li>
              <Link to={contact?.data[0]?.youtubeLink} target="_blank">
                <BsYoutube className="text-xl hover:-mt-2 duration-300" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
