import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="mt-9 flex flex-col gap-950">
      <section className="mt-9 flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">
          Trending Podcast
        </h1>
        <Button className="text-white-1 bg-orange-1">Button</Button>
        
      </section>
    </div>
  );
};

export default Home;