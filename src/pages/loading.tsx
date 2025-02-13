export default function Loading() {
  return (
    <div className="fixed z-20 bg-zinc-950 bg-opacity-95 bottom-0 top-0 left-0 right-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96">
        <div className="rounded-full w-full h-full shadow-load-1 animate-spin"></div>
        <div className="absolute top-0 left-0 rounded-full w-full h-full shadow-load-2"></div>
      </div>
    </div>
  );
}
