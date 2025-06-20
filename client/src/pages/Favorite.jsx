import React from "react";
import { dummyShowsData } from "../assets/assets";
import MovieCard from "../components/MovieCard";
import BlurCircle from "../components/BlurCircle";

const Favorite = () => {
  return dummyShowsData.length > 0 ? (
    <div className="overflow-hidden min-h-[80vh] px-6 md:px-16 lg:px-40 xl:px-44 relative my-40 mb-40">
      <BlurCircle top="150px" left="0" />
      <BlurCircle bottom="50px" right="50px" />
      <h1 className="my-4 text-lg font-medium">Your Favorite Movies</h1>
      <div className="flex flex-wrap gap-8 max-sm:justify-center">
        {dummyShowsData.map((movie) => (
          <MovieCard movie={movie} key={movie._id} />
        ))}
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-center">No movies available</h1>
    </div>
  );
};

export default Favorite;
