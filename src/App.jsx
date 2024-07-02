import "./App.css";
import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {
  return (
   <div className="w-full h-screen flex flex-col background relative overflow-auto items-center bg-black ">
    <h1 className="bg-slate-500 w-11/12 text-center mt-11 px-10 py-2 text-4xl text-slate-100 font-bold rounded-xl">Random Gifs Generator</h1>
    <div className="flex flex-col mb-11">
      <Random />
        <Tag/>
    </div>
   </div>
  );
}

export default App;
