function CardSkeleton() {
  return (
    <div className="bg-white rounded-2xl border shadow-sm p-5 animate-pulse">
      <div className="h-6 w-40 bg-gray-200 rounded"></div>

      <div className="mt-4 h-4 w-28 bg-gray-200 rounded"></div>

      <div className="mt-2 h-4 w-24 bg-gray-200 rounded"></div>

      <div className="mt-6 h-11 w-full bg-gray-200 rounded-xl"></div>
    </div>
  );
}

export default CardSkeleton;