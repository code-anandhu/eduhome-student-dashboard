import { useParams } from "react-router-dom";
import chapters from "../../data/chapters";
import ChapterCard from "../../components/chapter/ChapterCard";

function Chapters() {

  const { subjectId } = useParams();

  const filteredChapters = chapters.filter(
    (chapter) => chapter.subjectId === Number(subjectId)
  );

  return (

    <div className="space-y-6">

      {/* Page Header */}

      <div>

        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">

          Chapters

        </h1>

        <p className="text-gray-500 mt-2 text-sm md:text-base">

          Select a chapter to view the available videos.

        </p>

      </div>

      {/* Chapters Grid */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">

        {filteredChapters.map((chapter) => (

          <ChapterCard
            key={chapter.id}
            chapter={chapter}
          />

        ))}

      </div>

      {/* Empty State */}

      {filteredChapters.length === 0 && (

        <div className="bg-white rounded-2xl border p-10 text-center">

          <h2 className="text-xl font-semibold">

            No Chapters Available

          </h2>

          <p className="text-gray-500 mt-2">

            Chapters will appear here once they are assigned.

          </p>

        </div>

      )}

    </div>

  );

}

export default Chapters;