import WelcomeCard from "../../components/dashboard/WelcomeCard";
import ContinueLearning from "../../components/dashboard/ContinueLearning";
import StatsCard from "../../components/dashboard/StatsCard";
import CourseCard from "../../components/dashboard/CourseCard";
import RecentVideoCard from "../../components/dashboard/RecentVideoCard";
import UpcomingClassCard from "../../components/dashboard/UpcomingClassCard";
import AnnouncementCard from "../../components/dashboard/AnnouncementCard";
import { useEffect, useState } from "react";
import { getDashboard } from "../../services/dashboardService";
import { getCourses } from "../../services/catalogService";
import { getRecentVideos } from "../../services/dashboardService";
import PageLoader from "../../components/common/PageLoader";




function Dashboard() {

  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [recentVideos, setRecentVideos] = useState([]);

  const fetchDashboard = async () => {
    try {
      const response = await getDashboard();

      console.log("Dashboard Response:", response);

      console.log("Recent Videos:", response.result.recentVideos);

      console.log("Dashboard Data:", response.result);

      setDashboardData(response.result);
    } catch (error) {
      console.error("Dashboard Error:", error);
    } finally {
      setLoading(false);
    }
  };


  const fetchCourses = async () => {
    try {
      const response = await getCourses();

      console.log("Courses Response:", response);

      setCourses(response.result || []);
    } catch (error) {
      console.error("Courses Error:", error);
    }
  };


  const fetchRecentVideos = async () => {
    try {
      const response = await getRecentVideos();

      console.log("Recent Videos API:", response);

      setRecentVideos(response.result || []);

    } catch (error) {
      console.error("Recent Videos Error:", error);
    }
  };




  useEffect(() => {
    fetchDashboard();
    fetchCourses();
    fetchRecentVideos();
  }, []);

 if (loading) {
  return (
    <PageLoader text="Loading Dashboard..."/>
  );
}

  if (!dashboardData) {
    return (
      <div className="p-6 text-center">
        No dashboard data available.
      </div>
    );
  }


  return (
    <div className="space-y-4 md:space-y-6">

      <WelcomeCard />

      <ContinueLearning video={recentVideos[0]}/>

      <StatsCard summary={dashboardData.summary} />

      {/* <CourseCard /> */}

      <section>

        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-5">
          My Courses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          

          {courses.map((item) => (
            

            <CourseCard
              key={item.course.id}
              title={item.course.title}
                courseId={item.course.id}
              description={item.course.description}
              duration={item.course.duration}
              status={item.status}
              admissionDate={item.admissionDate}
            />

          ))}

        </div>

      </section>


      {/* <RecentVideoCard /> */}

      <section>

        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-5">
          Recent Videos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">


          {recentVideos.length > 0 ? (
            recentVideos.map((video) => (
              <RecentVideoCard
                key={video.id}
                id={video.id}
                title={video.title}
                duration={video.duration}
                thumbnail={video.thumbnail}
                progress={video.progress}
                course={video.course}
                chapter={video.chapter}

              />
            ))
          ) : (
            <p>No recent videos.</p>
          )}

          {/* {recentVideos.map((video) => (

            <RecentVideoCard
              key={video.id}
              title={video.title}
              duration={video.duration}
              thumbnail={video.thumbnail}
              progress={video.progress}
              course={video.course}
              chapter={video.chapter}
            />

          ))} */}

        </div>

      </section>



    </div>
  );
}

export default Dashboard;