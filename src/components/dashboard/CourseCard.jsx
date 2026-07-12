function CourseCard({
    title,
    instructor,
    progress,
}) {

    return (

        <div className="bg-white rounded-2xl border shadow-sm p-4 sm:p-5 md:p-6 hover:shadow-lg transition-all duration-300">

            <h2 className="text-lg md:text-2xl font-bold text-slate-800">

                {title}

            </h2>

            <p className="text-gray-500 mt-2 text-sm md:text-base">

                {instructor}

            </p>

            <div className="mt-5 md:mt-6">

                <div className="flex justify-between mb-2 text-sm md:text-base">

                    <span>Progress</span>

                    <span>{progress}%</span>

                </div>

                <div className="w-full bg-gray-200 rounded-full h-3">

                    <div
                        className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                    />

                </div>

            </div>

            <button
                className="w-full mt-5 md:mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2.5 md:py-3 rounded-lg transition"
            >

                Continue

            </button>

        </div>

    );

}

export default CourseCard;