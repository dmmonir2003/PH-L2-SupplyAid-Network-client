import MainLayout from "./layout/mainLayOut/MainLayout"
import { useAppSelector } from "./redux/hooks";

function App() {


  const { darkMode } = useAppSelector((store) => store.theme);
  return (
    <>
      <div className={` min-h-screen w-full max-w-7xl ${darkMode ? "bg-black text-white" : ""}`}




      ><MainLayout></MainLayout></div>
    </>
  )
}

export default App
