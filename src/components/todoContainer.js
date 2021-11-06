const TodoContainer = ({ children }) => {
  return (
    <div className="border border-gray-300 rounded-sm shadow-2xl my-6 w-11/12 max-w-lg p-6 flex flex-col gap-6 bg-gray-200">
      {children}
    </div>
  );
};

export default TodoContainer;
