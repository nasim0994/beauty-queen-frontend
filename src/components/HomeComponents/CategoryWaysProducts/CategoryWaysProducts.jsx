import { useGetCategoriesQuery } from "../../../Redux/category/categoryApi";
import CWP from "../../Skeleton/CWP/CWP";
import ProductsSection from "../productsSection/productsSection";

export default function CategoryWaysProducts() {
  const {
    data: categories,
    isLoading,
    isError,
    error,
  } = useGetCategoriesQuery();

  let content = null;

  if (isLoading) {
    content = <CWP />;
  }
  if (!isLoading && isError) {
    content = <p>{error.error || "something went wrong"}</p>;
  }
  if (!isLoading && !isError && categories?.data?.length > 0) {
    content = categories?.data?.map((category) => (
      <ProductsSection key={category?._id} category={category} />
    ));
  }

  return <>{content}</>;
}
