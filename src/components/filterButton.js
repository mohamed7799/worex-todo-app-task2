import Button from "./button";

const FilterButton = ({ children, className, onClick }) => {
  return (
    <Button
      onClick={onClick}
      className={`${className} border border-yellow-600 border-opacity-30 p-2  font-medium capitalize `}
    >
      {children}
    </Button>
  );
};

export default FilterButton;
