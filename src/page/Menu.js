import { useEffect, useState } from "react";
import ProductsList from "../components/templates/ProductsList";
import DefaultBtn from "../components/module/DefaultBtn";
// import Spinner from "../components/module/Spinner";
import ProductCardSkeleton from "../components/module/ProductCardSkeleton";

const Menu = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    let url = "http://localhost:3001/menu";
    // const url = process.env.BASE_API_URL;

    const callApi = async () => {
      try {
        const res = await fetch(url);
        const apiData = await res.json();
        console.log(apiData);

        setData(apiData);
      } catch (err) {
        setErr(err.message);
      } finally {
        // setLoading(false);
      }
    };

    callApi();
  }, [setData]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center font-Urbanist uppercase bg-slate-100">
      <div className="w-10/12 h-full flex flex-col justify-center items-center pt-20">
        {loading ? (
          <div className='h-full w-full flex flex-row justify-start items-start flex-wrap gap-2 border-2 border-black pt-10'>
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
          </div>
        ) : err ? (
          <div className="w-full h-screen bg-black/80 flex flex-col justify-center items-center gap-5 font-Urbanist uppercase">
            <p className="text-orange-400 font-black text-6xl">error message</p>
            <p className="text-C3C3C3 text-xl">{err}</p>
          </div>
        ) : (
          <>
            <ProductsList title={"Beverages"} data={data.hotDrinks} />
            <ProductsList title={"Teas"} data={data.teas} />
          </>
        )}

        <div className="w-4/12 flex flex-row justify-center items-center p-10">
          <DefaultBtn name={"Go to cart"} path={"/Cart"} />
        </div>
      </div>
    </div>
  );
};

export default Menu;

// const dataStateReciol = useRecoilState(DataAtom);
// const data = dataStateReciol[0];

// const ordersListAtomRecoil = useRecoilState(OrdersListAtom);
// const ordersList = ordersListAtomRecoil[0];

// const cartAtomRecoil = useRecoilState(CartAtom);
// const setCart = cartAtomRecoil[1];

// useEffect(() => {
//   updateCart(ordersList, setCart);
// }, [ordersList, setCart]);
