import { ArrowRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import BlurCircle from "./BlurCircle";
import { dummyShowsData } from "../assets/assets";
import MovieCard from "./MovieCard";

const FeaturedSection = () => {
  const navigate = useNavigate();
  return (
    <div className="overflow-hidden px-6 md:px-16 lg:px-24 xl:px-44">
      <div className="relative pt-20 pb-10 flex items-center justify-between">
        <BlurCircle top="0" right="-80px" />
        <p className="text-gray-300 font-medium text-lg">Now Showing</p>
        <button
          onClick={() => navigate("/movies")}
          className="group text-gray-300 flex items-center gap-2 text-sm cursor-pointer"
        >
          View All{" "}
          <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-0.5 transition" />
        </button>
      </div>
      <div className="flex flex-wrap max-sm:justify-center gap-8 mt-8">
        {dummyShowsData.slice(0, 4).map((show) => (
          <MovieCard key={show._id} movie={show} />
        ))}
      </div>
      <div className="flex mt-20 justify-center">
        <button
          onClick={() => {
            navigate("/movies");
            scrollTo(0, 0);
          }}
          className="px-10 py-3 rounded-md cursor-pointer bg-primary hover:bg-primary-dull font-sm font-medium transition"
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default FeaturedSection;
