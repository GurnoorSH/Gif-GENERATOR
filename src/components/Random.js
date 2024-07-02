import React from "react";
import Spinner from "./Spinner";
import useGif from "./useGif";

const api_keyy='qm7nkG37zmXXIocpXzfileiEyiDxYIl4'
// const api_keyy = process.env.api_key;
const Random = () => {
  
 const {gif, loading , fetchData} = useGif();

 function clickHandler() {
  fetchData()
 }
 

  return (
    <div className="w-full bg-slate-600 rounded-xl border border-black flex flex-col items-center gap-y-5 mt-6 overflow-auto">
      <h1 className="text-2xl mt-3 underline uppercase font-bold text-slate-100">
        {" "}
        Random Gif
      </h1>
      {loading ? (<Spinner/>) : (  <img src={gif} alt="abc" width={450} />)}
    
      <button
        onClick={clickHandler}
        className="w-10/12 bg-slate-900 text-lg text-slate-100 py-2 rounded-xl mb-5"
      >
        {" "} 
        Generate
      </button>
    </div>
  );
};

export default Random;
