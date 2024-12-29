import { useRecoilState } from "recoil";
import CartList from "../components/templates/CartList.jsx";
import ordersListAtom from "../atoms/ordersListAtom.jsx";

const Cart = () => {
  const ordersListAtomRecoil = useRecoilState(ordersListAtom);
  const ordersList = ordersListAtomRecoil[0];

  const combinedCart = ordersList.reduce((acc, item) => {
    const existingItem = acc.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      existingItem.number += item.number;
      existingItem.price += item.price;
    } else {
      acc.push({ ...item });
    }
    return acc;
  }, []);

  console.log(combinedCart);

  const calculateTotals = (cart) => {
    const total = cart.reduce(
      (totals, item) => {
        totals.totalPrice += item.price;
        totals.totalItems += item.number;
        return totals;
      },
      { totalPrice: 0, totalItems: 0 }
    );

    return total;
  };

  const { totalPrice, totalItems } = calculateTotals(combinedCart);

  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center gap-5 bg-slate-100 pt-28 font-Urbanist uppercase">
      <CartList cart={combinedCart} />
      <div className="w-9/12 px-10">
        <div className="w-full h-auto flex flex-row justify-around items-center bg-white shadow p-4 font-bold">
          <p>Total Items: {totalItems}</p>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
