function UpcomingClassCard({ subject, date, time }) {
  return (
    <div className="bg-white border rounded-xl shadow-sm p-5">

      <h3 className="text-lg font-semibold">
        {subject}
      </h3>

      <p className="text-gray-500 mt-2">
        📅 {date}
      </p>

      <p className="text-gray-500">
        🕒 {time}
      </p>

      <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
        Join Class
      </button>

    </div>
  );
}

export default UpcomingClassCard;