import "./App.css";
import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {
  return (
   <div className="w-full h-screen flex flex-col background relative overflow-hidden items-center bg-black ">
    <h1 className="bg-slate-600 w-11/12 text-center mt-11 px-10 py-2 text-4xl text-slate-100 font-bold rounded-xl">Random Gifs</h1>
    <div className="flex flex-col">
      <Random />
        <Tag/>
    </div>
   </div>
  );
}

export default App;
