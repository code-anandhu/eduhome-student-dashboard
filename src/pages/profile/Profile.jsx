function Profile() {
  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        My Profile
      </h1>

      <div className="bg-white rounded-2xl shadow-sm border p-8 max-w-4xl">

        <div className="flex flex-col md:flex-row gap-8">

          {/* Profile Image */}

          <div className="flex justify-center">

            <div className="w-40 h-40 rounded-full bg-blue-600 flex items-center justify-center text-white text-5xl font-bold">

              A

            </div>

          </div>

          {/* Details */}

          <div className="flex-1">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>
                <p className="text-gray-500">Full Name</p>
                <h3 className="font-semibold text-lg">
                  Anandhu
                </h3>
              </div>

              <div>
                <p className="text-gray-500">Mobile</p>
                <h3 className="font-semibold text-lg">
                  9876543210
                </h3>
              </div>

              <div>
                <p className="text-gray-500">Email</p>
                <h3 className="font-semibold text-lg">
                  anandhu@gmail.com
                </h3>
              </div>

              <div>
                <p className="text-gray-500">Student ID</p>
                <h3 className="font-semibold text-lg">
                  EDU1001
                </h3>
              </div>

              <div>
                <p className="text-gray-500">Course</p>
                <h3 className="font-semibold text-lg">
                  MERN Stack
                </h3>
              </div>

              <div>
                <p className="text-gray-500">Batch</p>
                <h3 className="font-semibold text-lg">
                  2026
                </h3>
              </div>

              <div>
                <p className="text-gray-500">Joined Date</p>
                <h3 className="font-semibold text-lg">
                  05 Jan 2026
                </h3>
              </div>

            </div>

            <button
              className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
            >
              Edit Profile
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;