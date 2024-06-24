import { useState } from "react";
import { fetchMoviesByGenre } from "../services/api";

export const Findmovie = () => {
  const [moods, setMoods] = useState([
    { moodName: "Happy", selected: false, genreID: [16, 35, 14, 10749, 12] },
    { moodName: "Angry", selected: false, genreID: [28, 80, 53] },
    { moodName: "Sad", selected: false, genreID: [18, 46, 35, 878] },
    { moodName: "Hungry", selected: false, genreID: [] },
    { moodName: "Anxious", selected: false, genreID: [9648, 53, 35] },
    { moodName: "Frisky", selected: false, genreID: [35, 18, 12] },
    { moodName: "Loving", selected: false, genreID: [35, 18, 10749, 14] },
  ]);
  const [genreIDs, setGenreIDs] = useState([]);
  const [movies, setMovies] = useState([]);
  /*
  Task 1 Completed ✅
  Task 2 Completed ✅
  Task 3 Completed ✅
  Task 4: Setup Fetching data from the api with the selected moods
  */
  const handleMoodSelect = (mood) => {
    if (genreIDs.includes(mood.genreID)) {
      genreIDs.splice(genreIDs.indexOf(mood.genreID), 1);
    } else {
      setGenreIDs([...genreIDs, mood.genreID]);
    }

    const updatedMoods = moods.map((item) => {
      return item === mood ? { ...item, selected: !mood.selected } : item;
    });
    setMoods(updatedMoods);
  };

  const fetchRandomMovies = async (genreID) => {
    try {
      const res = await fetchMoviesByGenre(genreID);
      return res;
    } catch (error) {
      throw new Error("there was an error", error);
    }
  };

  const handleFindMovie = async () => {
    const allMovies = [];

    for (const genreId of genreIDs) {
      const moviesTemp = await fetchRandomMovies(genreId);
      if (moviesTemp && moviesTemp.length > 0) {
        allMovies.push(...moviesTemp);
      } else {
        console.warn(`No movies found for genre ID: ${genreId}`);
      }
    }

    if (allMovies.length > 0) {
      const randomIndex = Math.floor(Math.random() * allMovies.length);
      const randomMovie = allMovies[randomIndex];
      console.log(randomMovie);
    } else {
      console.warn("No movies found for any genre.");
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <h1 className="text-xl font-semibold">Don't know what to watch?</h1>
      <div className="grid grid-cols-4 gap-4 items-center justify-center text-lg">
        {moods.map((item, index) => {
          return (
            <span
              onClick={() => handleMoodSelect(item)}
              className={`text-center ${
                item.selected ? "bg-slate-500" : "bg-[#050A44]"
              } p-2 rounded-xl w-20 shadow-md shadow-neutral-800`}
              key={index}
            >
              {item.moodName}
            </span>
          );
        })}
      </div>
      <button onClick={handleFindMovie}>Test</button>
    </div>
  );
};
