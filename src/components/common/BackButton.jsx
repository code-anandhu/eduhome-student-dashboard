import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 text-slate-600 hover:text-blue-600 font-medium transition mb-5"
    >
      <FaArrowLeft className="text-sm" />
      <span>Back</span>
    </button>
  );
}

export default BackButton;