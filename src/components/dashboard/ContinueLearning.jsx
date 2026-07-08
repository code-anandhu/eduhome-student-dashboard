function ContinueLearning() {
    return (
        <div className="bg-white rounded-2xl shadow-sm border p-8">

            <div className="flex justify-between items-center">

                <div>

                    <h2 className="text-2xl font-bold">
                        Continue Learning
                    </h2>

                    <p className="text-gray-500 mt-2">
                        React Fundamentals - Lesson 8
                    </p>

                </div>

                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                    Continue
                </button>

            </div>

            <div className="mt-8">

                <div className="flex justify-between mb-2">
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