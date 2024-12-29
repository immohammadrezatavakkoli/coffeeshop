const ProductCardSkeleton = () => {
  return (
    <div className="w-3/12 p-[0.30rem]">
      <div className="w-full flex flex-col justify-center items-center gap-2 bg-white font-Urbanist uppercase text-black animate-pulse">
        <div className="h-[12rem] w-full p-4">
          <div className="w-full h-full bg-gray-300 rounded-md"></div>
        </div>
        <div className="w-10/12 h-20 flex flex-col justify-between items-start">
          <div className="w-8/12 h-6 bg-gray-300 rounded-md p-5"></div>
          <div className="w-4/12 h-6 bg-gray-300 rounded-md"></div>
        </div>
        <div className="w-full flex flex-row justify-center items-center p-3">
          <div className="w-11/12 h-6 bg-gray-300 rounded-md p-6"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
