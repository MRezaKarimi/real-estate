const HorizontalDivider = ({ children }) => {
  return (
    <div className="relative">
      <div className="h-[0.1rem] bg-gray-300 rounded-xl mx-auto w-full"></div>
      <div className="bg-white absolute -top-3 mx-auto left-0 right-0 w-fit text-center text-sky-900 font-semibold px-3">
        {children}
      </div>
    </div>
  );
};

export default HorizontalDivider;
