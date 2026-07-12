function ContinueLearning() {
    return (

        <div className="bg-white rounded-2xl shadow-sm border p-4 sm:p-6 md:p-8">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                <div>

                    <h2 className="text-xl md:text-2xl font-bold">
                        Continue Learning
                    </h2>

                    <p className="text-gray-500 mt-2 text-sm md:text-base">
                        React Fundamentals - Lesson 8
                    </p>

                </div>

                <button
                    className="w-full md:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                    Continue
                </button>

            </div>

            <div className="mt-6 md:mt-8">

                <div className="flex justify-between mb-2 text-sm md:text-base">

                    <span>Progress</span>

                    <span>65%</span>

                </div>

                <div className="w-full bg-gray-200 rounded-full h-3">

                    <div
                        className="bg-blue-600 h-3 rounded-full"
                        style={{ width: "65%" }}
                    />

                </div>

            </div>

        </div>

    );
}

export default ContinueLearning;