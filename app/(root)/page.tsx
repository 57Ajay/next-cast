"use client";
import { podcastData } from "@/constants";
import PodcastCard from "@/components/PodcastCard";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";




const Home = () => {
  // const tasks = useQuery(api.tasks.get);
  return (
    <div className="mt-9 flex flex-col gap-950">
      <section className="mt-9 flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">
          Trending Podcast
        </h1>

        <div className="flex min-h-screen flex-col items-center justify-between p-24 text-white-1">
        {/* {tasks?.map(({ _id, text }) => text ? <div key={_id}>{text}</div> : null)} */}
      </div>
  
        <div className="podcast_grid">
          {podcastData.map(({imgURL, title, id, description})=>(
            <PodcastCard key={id} imgUrl={imgURL} title={title} description={description} id={id}/>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;