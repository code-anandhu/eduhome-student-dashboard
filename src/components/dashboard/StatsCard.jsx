import {
  FaBookOpen,
  FaLayerGroup,
  FaVideo,
  FaClock,
} from "react-icons/fa";

function StatsCard() {

  const stats = [
    {
      title: "Total Courses",
      value: "8",
      icon: FaBookOpen,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      title: "Subjects",
      value: "42",
      icon: FaLayerGroup,
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      title: "Videos Completed",
      value: "96",
      icon: FaVideo,
      color: "text-purple-600",
      bg: "bg-purple-100",
    },
    {
      title: "Learning Hours",
      value: "74 hrs",
      icon: FaClock,
      color: "text-orange-600",
      bg: "bg-orange-100",
    },
  ];

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {stats.map((item, index) => {

        const Icon = item.icon;

        return (

          <div
            key={index}
            className="bg-white rounded-2xl border shadow-sm p-6 hover:shadow-lg transition duration-300"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-500 text-sm">
                  {item.title}
                </p>

                <h2 className="text-3xl font-bold mt-2">
                  {item.value}
                </h2>

              </div>

              <div className={`${item.bg} p-4 rounded-xl`}>

                <Icon
                  className={`${item.color} text-2xl`}
                />

              </div>

            </div>

          </div>

        );

      })}

    </div>

  );

}

export default StatsCard;