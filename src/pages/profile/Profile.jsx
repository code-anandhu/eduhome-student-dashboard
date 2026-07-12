function Profile() {

  return (

    <div className="space-y-6">

      {/* Header */}

      <div>

        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">

          My Profile

        </h1>

        <p className="text-gray-500 mt-2 text-sm md:text-base">

          View and manage your profile information.

        </p>

      </div>

      {/* Profile Card */}

      <div className="bg-white rounded-2xl shadow-sm border p-4 sm:p-6 md:p-8 max-w-5xl">

        <div className="flex flex-col lg:flex-row gap-8">

          {/* Profile Image */}

          <div className="flex justify-center">

            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-blue-600 flex items-center justify-center text-white text-4xl md:text-5xl font-bold shadow-lg">

              A

            </div>

          </div>

          {/* Details */}

          <div className="flex-1">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div>

                <p className="text-gray-500 text-sm">

                  Full Name

                </p>

                <h3 className="font-semibold text-base md:text-lg">

                  Anandhu

                </h3>

              </div>

              <div>

                <p className="text-gray-500 text-sm">

                  Mobile

                </p>

                <h3 className="font-semibold text-base md:text-lg">

                  9876543210

                </h3>

              </div>

              <div>

                <p className="text-gray-500 text-sm">

                  Email

                </p>

                <h3 className="font-semibold text-base md:text-lg">

                  anandhu@gmail.com

                </h3>

              </div>

              <div>

                <p className="text-gray-500 text-sm">

                  Student ID

                </p>

                <h3 className="font-semibold text-base md:text-lg">

                  EDU1001

                </h3>

              </div>

              <div>

                <p className="text-gray-500 text-sm">

                  Course

                </p>

                <h3 className="font-semibold text-base md:text-lg">

                  MERN Stack

                </h3>

              </div>

              <div>

                <p className="text-gray-500 text-sm">

                  Batch

                </p>

                <h3 className="font-semibold text-base md:text-lg">

                  2026

                </h3>

              </div>

              <div>

                <p className="text-gray-500 text-sm">

                  Joined Date

                </p>

                <h3 className="font-semibold text-base md:text-lg">

                  05 Jan 2026

                </h3>

              </div>

            </div>

            <button
              className="w-full sm:w-auto mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
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