import { useEffect, useState } from "react";
import { getProfile } from "../../services/profileService";
import EditProfileModal from "../../components/profile/EditProfileModal";


function Profile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openEdit, setOpenEdit] = useState(false);

  const fetchProfile = async () => {
    try {
      const response = await getProfile();

      console.log("Profile Response:", response);

      setProfile(response.result);

      console.log(response.result.photo);

    } catch (error) {
      console.error("Profile Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="p-6 text-center">
        Loading Profile...
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="p-6 text-center">
        No Profile Found
      </div>
    );
  }

  const photoUrl = profile.photo
    ? JSON.parse(profile.photo)[0]
    : null;

  console.log("Photo URL:", photoUrl);

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

          {/* Profile Image */}

          <div className="flex justify-center">

            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-gray-200 shadow-lg">

              {photoUrl ? (
                <img
                  src={photoUrl}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-blue-600 flex items-center justify-center text-white text-4xl md:text-5xl font-bold">
                  {profile.firstName?.charAt(0).toUpperCase()}
                </div>
              )}

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
                  {profile.firstName} {profile.lastName}
                </h3>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Mobile
                </p>

                <h3 className="font-semibold text-base md:text-lg">
                  {profile.mobileNumber}
                </h3>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Email
                </p>

                <h3 className="font-semibold text-base md:text-lg">
                  {profile.email || "N/A"}
                </h3>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Gender
                </p>

                <h3 className="font-semibold text-base md:text-lg">
                  {profile.gender || "N/A"}
                </h3>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Qualification
                </p>

                <h3 className="font-semibold text-base md:text-lg">
                  {profile.qualification || "N/A"}
                </h3>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  College
                </p>

                <h3 className="font-semibold text-base md:text-lg">
                  {profile.collegeName || "N/A"}
                </h3>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  City
                </p>

                <h3 className="font-semibold text-base md:text-lg">
                  {profile.city || "N/A"}
                </h3>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  State
                </p>

                <h3 className="font-semibold text-base md:text-lg">
                  {profile.state || "N/A"}
                </h3>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Pincode
                </p>

                <h3 className="font-semibold text-base md:text-lg">
                  {profile.pincode || "N/A"}
                </h3>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Guardian Name
                </p>

                <h3 className="font-semibold text-base md:text-lg">
                  {profile.guardianName || "N/A"}
                </h3>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Guardian Phone
                </p>

                <h3 className="font-semibold text-base md:text-lg">
                  {profile.guardianPhone || "N/A"}
                </h3>
              </div>

              <div className="sm:col-span-2">
                <p className="text-gray-500 text-sm">
                  Address
                </p>

                <h3 className="font-semibold text-base md:text-lg">
                  {profile.address || "N/A"}
                </h3>
              </div>

            </div>

            <button
              onClick={() => setOpenEdit(true)}
              className="w-full sm:w-auto mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
            >
              Edit Profile
            </button>

          </div>

        </div>

      </div>
     {openEdit && (
  <EditProfileModal
    profile={profile}
    onClose={() => setOpenEdit(false)}
    onSuccess={() => {
      fetchProfile();
      setOpenEdit(false);
    }}
  />
)}

    </div>
  );
}

export default Profile;