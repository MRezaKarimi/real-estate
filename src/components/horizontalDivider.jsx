const HorizontalDivider = ({ children }) => {
  return (
    <div className="flex items-center">
      <div className="grow h-[2px] bg-gray-300 rounded-xl mx-auto"></div>
      <div className="font-semibold mx-3 text-center text-sky-900">
        {children}
      </div>
      <div className="grow h-[2px] bg-gray-300 rounded-xl mx-auto"></div>
    </div>
  );
};

export default HorizontalDivider;
