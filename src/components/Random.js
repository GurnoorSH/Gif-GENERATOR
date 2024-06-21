import axios from "axios";
import React, { useState ,useEffect } from "react";

const api_keyy = process.env.api_key;
const Random = () => {


  const [gif, setgif] = useState("");
  
  
  async function fetchData() {
    console.log(api_keyy)
    const url =`https://api.giphy.com/v1/gifs/random?api_key=${api_keyy}`
    const {data} = await axios.get(url);
    console.log(data)
    const imagesrc = data.data.images.downsized_large.url;
    console.log(imagesrc)
    setgif(imagesrc)
  
 }
 
 useEffect(() => {
   fetchData();
 

 }, [])
 

  function clickHandler() {
    fetchData();
  }
  return (
    <div className="w-fullh-[450px] bg-slate-600 rounded-xl border border-black flex flex-col items-center gap-y-5 mt-6">
      <h1 className="text-2xl underline uppercase font-bold text-slate-100">
        {" "}
        Random Gif
      </h1>
      <img src={gif} alt="abc" width={450} />
      <button
        onClick={clickHandler}
        className="w-10/12 bg-slate-900 text-lg text-slate-100 py-2 rounded-xl"
      >
        {" "} 
        Generate
      </button>
    </div>
  );
};

export default Random;
