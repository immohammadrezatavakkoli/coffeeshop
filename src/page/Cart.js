import { useRecoilState } from 'recoil';
import CartAtom from '../atoms/cartAtom';
import CartList from '../components/templates/CartList.jsx';
import { FaCartShopping } from "react-icons/fa6";

const Cart = () => {

  const cartAtomRecoil = useRecoilState(CartAtom)
  const cart = cartAtomRecoil[0];

  const totalNumber = cart.reduce((total, item) => total + item.number , 0);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.number , 0);

  return (
    <div className='w-full min-h-screen flex flex-col justify-start items-center gap-5 bg-slate-100 pt-28 font-Urbanist uppercase'>
      <CartList cart={cart}/>
      <div>
      {
      (() => {
        if (cart.length > 0) {
          return
        } else {
          return(
            <div className='flex flex-col justify-center items-center gap-5'>
              <FaCartShopping className='text-8xl text-orange-400' />
              <p className='text-base'>
                Your shopping cart is empty .
              </p>
            </div>
          );
        }
      })()
      }
      </div>
      <div className='w-7/12 flex flex-row justify-between items-center p-4'>
        <div>
            {
              (() => {
                if(cart.length !== 0) {
                  return (
                  <div className='flex flex-row justify-center items-center gap-4'>
                    <p className='font-bold text-xl text-black/80'>
                    Total orders
                    </p>
                    <p id='number' className='text-xl text-black/80'>
                      {totalNumber}
                    </p>
                  </div>
                  );
                }
              })()
            }
        </div>
        <div>
            {
              (() => {
                if(cart.length !== 0) {
                  return (
                    <div className='flex flex-row justify-center items-center gap-4'>
                      <p className='font-bold text-xl text-black/80'>
                      total price
                      </p>
                      <p id='price' className='text-xl text-black/80'>
                      {totalPrice}
                      </p>
                    </div>
                  );
                }
              })()
            }
        </div>
      </div>
    </div>
  );
}

export default Cart;