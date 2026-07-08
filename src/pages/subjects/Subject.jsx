import { useParams } from "react-router-dom";
import subjects from "../../data/subjects";
import SubjectCard from "../../components/subject/SubjectCard";

function Subject() {

  const { courseId } = useParams();

  const filteredSubjects = subjects.filter(
    (subject) => subject.courseId === Number(courseId)
  );

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Subjects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {filteredSubjects.map((subject) => (

          <SubjectCard
            key={subject.id}
            subject={subject}
          />

        ))}

      </div>

    </div>
  );
}

export default Subject;