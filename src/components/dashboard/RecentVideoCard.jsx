function RecentVideoCard({ title, duration }) {
  return (

    <div className="bg-white border rounded-2xl shadow-sm p-4 sm:p-5 hover:shadow-lg transition-all duration-300">

      {/* Thumbnail */}

      <div className="h-40 md:h-44 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 font-medium">

        Thumbnail

      </div>

      {/* Video Details */}

      <h3 className="mt-4 text-lg md:text-xl font-semibold text-slate-800 line-clamp-2">

        {title}

      </h3>

      <p className="text-gray-500 text-sm md:text-base mt-2">

        Duration : {duration}

      </p>

      {/* Button */}

      <button
        className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 md:py-3 rounded-lg transition"
      >

        Watch Now

      </button>

    </div>

  );
}

export default RecentVideoCard;