import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SubjectCard from "../../components/subject/SubjectCard";
import { getSubjects } from "../../services/subjectService";

function Subject() {

  const { courseId } = useParams();

  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSubjects = async () => {
    try {
      const response = await getSubjects(courseId);

      console.log("Subjects Response:", response);

      setSubjects(response.result || []);
    } catch (error) {
      console.error("Subjects API Error:", error);
      setSubjects([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubjects();
  }, [courseId]);

  if (loading) {
    return (
      <div className="text-center py-10">
        Loading Subjects...
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* Header */}

      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
          Subjects
        </h1>

        <p className="text-gray-500 mt-2">
          Select a subject to continue your learning.
        </p>
      </div>

      {/* Subject List */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">

        {subjects.map((subject) => (
          <SubjectCard
            key={subject.id}
            subject={subject}
          />
        ))}

      </div>

      {subjects.length === 0 && (
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