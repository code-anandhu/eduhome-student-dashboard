import { useParams } from "react-router-dom";
import subjects from "../../data/subjects";
import SubjectCard from "../../components/subject/SubjectCard";

function Subject() {

  const { courseId } = useParams();

  const filteredSubjects = subjects.filter(
    (subject) => subject.courseId === Number(courseId)
  );

  return (

    <div className="space-y-6">

      {/* Page Title */}

      <div>

        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">

          Subjects

        </h1>

        <p className="text-gray-500 mt-2 text-sm md:text-base">

          Select a subject to continue your learning.

        </p>

      </div>

      {/* Subject List */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">

        {filteredSubjects.map((subject) => (

          <SubjectCard
            key={subject.id}
            subject={subject}
          />

        ))}

      </div>

      {/* Empty State */}

      {filteredSubjects.length === 0 && (

        <div className="bg-white rounded-2xl border p-10 text-center">

          <h2 className="text-xl font-semibold">

            No Subjects Available

          </h2>

          <p className="text-gray-500 mt-2">

            Subjects will appear here once they are assigned.

          </p>

        </div>

      )}

    </div>

  );

}

export default Subject;