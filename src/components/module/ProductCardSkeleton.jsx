const ProductCardSkeleton = () => {
  return (
    <div className="w-[17rem] flex flex-col justify-center items-center gap-2 bg-gray-200 font-Urbanist uppercase text-black animate-pulse">
      <div className="h-[14rem] w-full p-4">
        <div className="w-full h-full bg-gray-300 rounded-md"></div>
      </div>
      <div className="w-10/12 h-20 flex flex-col justify-between items-start">
        <div className="w-8/12 h-auto bg-gray-300 rounded-md p-5"></div>
        <div className="w-4/12 h-6 bg-gray-300 rounded-md"></div>
      </div>
      <div className="w-full flex flex-row justify-start items-center p-3">
        <div className="w-full h-4 bg-gray-300 rounded-md p-6"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
