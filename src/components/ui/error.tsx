import { Bug } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();
  function goBack() {
    navigate("/");
  }
  return (
    <>
      <div className="flex flex-col text-[30px] h-[100vh] justify-center items-center">
        <Bug className="w-30 h-30 mt-10px" />
        Произошла ошибка
        <button
          onClick={goBack}
          className="px-4 py-2 mt-10 bg-gray-200 text-gray-900 hover:bg-gray-300 inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all disabled:opacity-50 disabled:pointer-events-none outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        >
          {" "}
          На главную
        </button>
      </div>
    </>
  );
}
