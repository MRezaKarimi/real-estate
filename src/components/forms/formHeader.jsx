const FormHeader = ({ title }) => {
  return (
    <div className="text-sky-800 font-bold text-lg sm:text-2xl flex my-5 items-baseline relative">
      <span className="text-center mb-2">{title}</span>
    </div>
  );
};

export default FormHeader;
