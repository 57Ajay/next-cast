import { Button } from "@/components/ui/button";
import { podcastData } from "@/constants";
import PodcastCard from "@/components/PodcastCard";

const Home = () => {
  return (
    <div className="mt-9 flex flex-col gap-950">
      <section className="mt-9 flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">
          Trending Podcast
        </h1>
        <Button className="text-white-1 bg-orange-1">Button</Button>
        {podcastData.map(({imgURL, title, id, description})=>(
          <PodcastCard key={id} imgUrl={imgURL} title={title} description={description} podcastId={id}/>
        ))}
      </section>
    </div>
  );
};

export default Home;