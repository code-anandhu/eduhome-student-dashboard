import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChapterCard from "../../components/chapter/ChapterCard";
import { getChapters } from "../../services/chapterService";
import PageLoader from "../../components/common/PageLoader";
import BackButton from "../../components/common/BackButton";



function Chapters() {

  const { subjectId } = useParams();

  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchChapters = async () => {
  try {
    const response = await getChapters(subjectId);

    console.log("Chapters Response:", response);

    setChapters(response.result || []);
  } catch (error) {
    console.error("Chapters API Error:", error);
    setChapters([]);
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  fetchChapters();
}, [subjectId]);

const Chapters = chapters.filter(
  (chapter) =>
    chapter.subjectId === Number(subjectId) &&
    chapter.title.toLowerCase().includes(search.toLowerCase())
);

if (loading) {
  return (
<PageLoader text="Loading Chapters..."/>
  );
}

  return (

    <div className="space-y-6">

      {/* Page Header */}

      <div>
      <BackButton/>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">

          Chapters

        </h1>

        <p className="text-gray-500 mt-2 text-sm md:text-base">

          Select a chapter to view the available videos.

        </p>

      </div>

      {/* ṣearch chapters  */}

      <div className="bg-white rounded-2xl border p-4">

        <input type="text"
        placeholder="Search chapters..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        className="w-full max-w-sm  border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />

      </div>

      {/* Chapters Grid */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">

        {Chapters.map((chapter) => (

          <ChapterCard
            key={chapter.id}
            chapter={chapter}
          />

        ))}

      </div>

      {/* Empty State */}

      {Chapters.length === 0 && (

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