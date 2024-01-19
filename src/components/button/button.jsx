export default function CustomButton({ className, onClick, children }) {
  return (
    <button
      className={`bg-red-600 opensans rounded-xl mt-5 p-2 font-bold max-w-60 hover:shadow-red-center min-w-52 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
