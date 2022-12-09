import React, { useEffect, useState } from "react";
import StoriesCard from "./StoriesCard";

export const Stories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("https://doctor-service-server-mu.vercel.app/stories")
      .then((res) => res.json())
      .then((data) => setStories(data));
  }, []);
  return (
    <div className="mt-24">
      <h2 className="text-3xl text-center text-orange-400 font-bold mb-16">
        Successfull Stories
      </h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-12">
        {stories.map((story) => (
          <StoriesCard key={story._id} story={story}></StoriesCard>
        ))}
      </div>
    </div>
  );
};
