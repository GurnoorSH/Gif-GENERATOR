import axios from "axios";
import  { useState, useEffect } from "react";


const api_keyy = "qm7nkG37zmXXIocpXzfileiEyiDxYIl4";

const useGif = (tag) => {
  const [gif, setgif] = useState("");
  const [loading, setloading] = useState(false);

  const url = `https://api.giphy.com/v1/gifs/random?api_key=${api_keyy}`;

  async function fetchData(tag) {
    setloading(true);
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    console.log(data);
    const imagesrc = data.data.images.downsized_large.url;
    // console.log(imagesrc)
    setgif(imagesrc);
    setloading(false);
  }

  useEffect(() => {
    fetchData('car');
  }, []);

  return { gif, loading, fetchData };
};

export default useGif;
