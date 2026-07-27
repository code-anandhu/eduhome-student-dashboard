// import { useParams } from "react-router-dom";
// import levels from "../../data/levels";
// import LevelCard from "../../components/level/LevelCard";
// import BackButton from "../../components/common/BackButton";

// function Levels() {

//   const { chapterId } = useParams();

//   const filteredLevels = levels.filter(
//     (level) => level.chapterId === Number(chapterId)
//   );

//   return (
//     <div>
//     <BackButton/>
//       <h1 className="text-3xl font-bold mb-6">
//         Levels
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

//         {filteredLevels.map((level) => (

//           <LevelCard
//             key={level.id}
//             level={level}
//           />

//         ))}

//       </div>

//     </div>
//   );
// }

// export default Levels;