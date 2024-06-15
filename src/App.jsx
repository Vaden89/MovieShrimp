import "./App.css";
import { useEffect, useState } from "react";
import { fetchMovies } from "./services/api";

export default function App() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const movieData = await fetchMovies("/movie/popular");
      console.log(movieData);
      setData(movieData);
    } catch (error) {
      throw new Error("hey!", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col w-full h-full items-center p-2 pt-4 gap-4 bg-[#141619] text-white">
      <div className="flex justify-between w-full px-2">
        <span className="text-3xl font-bold">LOGO</span>
        <h1 className="text-2xl font-semibold">Trending Movies</h1>
      </div>
      {data.map((item, index) => {
        return (
          <div className="flex items-start w-full bg-[#2c2e3a] p-2 rounded-xl gap-2">
            <img
              className="w-48 rounded-xl"
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title}
            />
            <div className="flex flex-col w-full">
              <span className="text-xl font-semibold">{item.title}</span>
              <span className="text-lg font-light">
                Rating: {item.vote_average}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
