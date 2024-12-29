import { useEffect, useState } from "react";
import ProductsList from "../components/templates/ProductsList";
// import Spinner from "../components/module/Spinner";
import ProductCardSkeleton from "../components/module/ProductCardSkeleton";

const Menu = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let url = "http://localhost:3001/menu";
    // const url = process.env.BASE_API_URL;

    const callApi = async () => {
      try {
        const res = await fetch(url);
        const apiData = await res.json();

        setData(apiData);
      } catch (err) {
        console.log(err);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 5000);
      }
    };

    callApi();
  }, [setData]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center font-Urbanist uppercase bg-slate-100">
      <div className="w-10/12 h-full flex flex-col justify-center items-center pt-20 pb-10">
        {loading ? (
          <div className="h-full w-full flex flex-row justify-start items-start flex-wrap pt-10">
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
          </div>
        ) : (
          <>
            <ProductsList title={"Beverages"} data={data.hotDrinks} />
            <ProductsList title={"Teas"} data={data.teas} />
          </>
        )}
      </div>
    </div>
  );
};

export default Menu;
