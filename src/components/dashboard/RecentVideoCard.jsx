function RecentVideoCard({ title, duration }) {
  return (
    <div className="bg-white border rounded-xl shadow-sm p-4">

      <div className="h-40 bg-gray-200 rounded-lg flex items-center justify-center">
        Thumbnail
      </div>

      <h3 className="mt-4 text-lg font-semibold">
        {title}
      </h3>

      <p className="text-gray-500 text-sm mt-1">
        Duration : {duration}
      </p>

      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        Watch Now
      </button>

    </div>
  );
}

export default RecentVideoCard;