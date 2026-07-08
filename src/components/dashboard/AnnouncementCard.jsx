function AnnouncementCard({ title, description, date }) {
  return (
    <div className="bg-white border rounded-xl shadow-sm p-5">

      <div className="flex justify-between items-center">

        <h3 className="text-lg font-semibold">
          {title}
        </h3>

        <span className="text-sm text-gray-500">
          {date}
        </span>

      </div>

      <p className="text-gray-600 mt-3">
        {description}
      </p>

    </div>
  );
}

export default AnnouncementCard;