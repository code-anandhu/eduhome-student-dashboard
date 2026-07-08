function CourseCard({
    title,
    mentor,
    progress,
}) {
    return (
        <div className="bg-white rounded-2xl border shadow-sm p-6">

            <h2 className="text-2xl font-bold">
                {title}
            </h2>

            <p className="text-gray-500 mt-2">
                {mentor}
            </p>

            <div className="mt-6">

                <div className="flex justify-between mb-2">
                    <span>Progress</span>
                    <span>{progress}%</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3">

                    <div
                        className="bg-blue-600 h-3 rounded-full"
                        style={{ width: `${progress}%` }}
                    />

                </div>

            </div>

            <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg">
                Continue
            </button>

        </div>
    );
}

export default CourseCard;