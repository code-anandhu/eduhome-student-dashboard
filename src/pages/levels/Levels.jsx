import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../../components/common/BackButton";
import LevelCard from "../../components/level/LevelCard";
import { getLevels } from "../../services/levelService";

function Levels() {
  const { chapterId } = useParams();

  const [levels, setLevels] = useState([]);

  useEffect(() => {
    fetchLevels();
  }, [chapterId]);

const fetchLevels = async () => {
  try {
    const data = await getLevels(chapterId);

    console.log("Levels Response:", data);

    setLevels(data.result.levels || []);
  } catch (error) {
    console.error("Failed to fetch levels:", error);
  }
};

  return (
    <div>
      <BackButton />

      <h1 className="text-3xl font-bold mb-6">
        Levels
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {levels.map((level) => (
          <LevelCard
            key={level.id}
            level={level}
            chapterId={chapterId}
          />
        ))}
      </div>
    </div>
  );
}

export default Levels;