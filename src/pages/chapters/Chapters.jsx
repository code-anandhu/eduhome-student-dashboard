import { useParams } from "react-router-dom";
import chapters from "../../data/chapters";
import ChapterCard from "../../components/chapter/ChapterCard";

function Chapters() {

  const { subjectId } = useParams();

  const filteredChapters = chapters.filter(
    (chapter) => chapter.subjectId === Number(subjectId)
  );

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Chapters
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {filteredChapters.map((chapter) => (
          <ChapterCard
            key={chapter.id}
            chapter={chapter}
          />
        ))}

      </div>

    </div>
  );
}

export default Chapters;