import WelcomeCard from "../../components/dashboard/WelcomeCard";
import ContinueLearning from "../../components/dashboard/ContinueLearning";
import StatsCard from "../../components/dashboard/StatsCard";
import CourseCard from "../../components/dashboard/CourseCard";
import RecentVideoCard from "../../components/dashboard/RecentVideoCard";
import UpcomingClassCard from "../../components/dashboard/UpcomingClassCard";
import AnnouncementCard from "../../components/dashboard/AnnouncementCard";

function Dashboard() {
  const courses = [
    {
      id: 1,
      title: "React Fundamentals",
      instructor: "John Smith",
      progress: 65,
    },
    {
      id: 2,
      title: "JavaScript Advanced",
      instructor: "David",
      progress: 40,
    },
    {
      id: 3,
      title: "Node.js Masterclass",
      instructor: "Alex",
      progress: 82,
    },
  ];

  const recentVideos = [
    {
      id: 1,
      title: "React useState Hook",
      duration: "18 min",
    },
    {
      id: 2,
      title: "React useEffect",
      duration: "22 min",
    },
    {
      id: 3,
      title: "React Router DOM",
      duration: "15 min",
    },
  ];

  const upcomingClasses = [
    {
      id: 1,
      subject: "React Live Session",
      date: "08 July 2026",
      time: "10:00 AM",
    },
    {
      id: 2,
      subject: "Node.js Workshop",
      date: "09 July 2026",
      time: "02:00 PM",
    },
  ];

  const announcements = [
    {
      id: 1,
      title: "Holiday Notice",
      description: "Classes will remain closed on Friday due to maintenance.",
      date: "07 Jul",
    },
    {
      id: 2,
      title: "New React Course",
      description: "Advanced React course has been added to your dashboard.",
      date: "06 Jul",
    },
  ];


  return (
    <div className="space-y-6">

      <WelcomeCard />

      <ContinueLearning />

      <StatsCard />

      {/* <CourseCard /> */}

      <section>

        <h2 className="text-2xl font-bold mb-5">
          My Courses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {courses.map((course) => (

            <CourseCard
              key={course.id}
              title={course.title}
              instructor={course.instructor}
              progress={course.progress}
            />

          ))}

        </div>

      </section>


      {/* <RecentVideoCard /> */}

      <section>

        <h2 className="text-2xl font-bold mb-5">
          Recent Videos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {recentVideos.map((video) => (

            <RecentVideoCard
              key={video.id}
              title={video.title}
              duration={video.duration}
            />

          ))}

        </div>

      </section>

      {/* <UpcomingClassCard /> */}

      {/* <section>

        <h2 className="text-2xl font-bold mb-5">
          Upcoming Classes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {upcomingClasses.map((item) => (

            <UpcomingClassCard
              key={item.id}
              subject={item.subject}
              date={item.date}
              time={item.time}
            />

          ))}

        </div>

      </section> */}

      {/* <AnnouncementCard /> */}

      {/* <section>

        <h2 className="text-2xl font-bold mb-5">
          Announcements
        </h2>

        <div className="space-y-4">

          {announcements.map((item) => (

            <AnnouncementCard
              key={item.id}
              title={item.title}
              description={item.description}
              date={item.date}
            />

          ))}

        </div>

      </section> */}

    </div>
  );
}

export default Dashboard;