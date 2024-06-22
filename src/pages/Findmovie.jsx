import { useState } from "react";

export const Findmovie = () => {
  const [moods, setMoods] = useState([
    { moodName: "Happy", selected: false },
    { moodName: "Angry", selected: false },
    { moodName: "Sad", selected: false },
    { moodName: "Hungry", selected: false },
  ]);

  /*
  Task 1 Completed ✅
  Task 2: For Every Mood We Add A discovery query into the fetch function basically a genre 
  GenreIds [action: 28, adventure: 12, animation: 16, comdey: 35, crime: 80, documentry: 99, drama: 18, fantasy: 14, history 46, mystrey: 9648, romance: 10749, Sci-fi: 878, Thriller: 53 ]
  */
  const handleMoodSelect = (mood) => {
    const updatedMoods = moods.map((item) => {
      return item === mood ? { ...item, selected: !mood.selected } : item;
    });
    setMoods(updatedMoods);
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <h1 className="text-xl font-semibold">Don't know what to watch?</h1>
      <div className="flex gap-4 items-center justify-center text-lg">
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
    </div>
  );
};
