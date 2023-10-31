import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useGetProductsQuery } from "../../../Redux/product/productApi";
import ProductCard from "../../ProductCard/ProductCard";

const PopularProducts = () => {
  let limit = 20;
  let page = 1;
  const { data, isLoading, isError, error } = useGetProductsQuery({
    limit,
    page,
  });

  console.log(data);

  let content = null;
  if (isLoading) {
    content = <p>Loading...</p>;
  }
  if (!isLoading && isError) {
    content = <p>{error}</p>;
  }
  if (!isLoading && !isError && data?.data?.length > 0) {
    content = data?.data?.map((product) => (
      <ProductCard key={product._id} product={product} />
    ));
  }

  return (
    <div className="mt-6">
      <div className="container bg-base-100 p-4 rounded-lg shadow-lg">
        <div className="flex justify-between sm:items-center border-b pb-2 border-primary">
          <h1 className="md:text-xl font-medium md:font-semibold text-neutral">
            Popular Products
          </h1>

          <div>
            <Link
              to="/shops/flash-sale"
              className="w-max flex items-center text-primary font-semibold hover-go"
            >
              <h1 className="text-sm md:text-[15px] font-normal">Shop More</h1>
              <MdKeyboardArrowRight className="text-[22px] pt-px duration-200" />
            </Link>
          </div>
        </div>

        {/* Product Card */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mt-2">
          {content}
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
