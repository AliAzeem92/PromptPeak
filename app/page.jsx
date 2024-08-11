import Feed from "@components/feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col ">
      <h1 className="head_text text-center ">
        Discover & Share
        <br className="max-md:hidden" />
        <p className="orange_gradient text-center ">AI-Powered Prompts</p>
      </h1>
      <p className="desc text-center ">
        PromptPeak is an open-soure AI prompting tool for modern world
        experience to discover, create, and and share creative prompts
      </p>

      {/* Feed */}
      <Feed />
    </section>
  );
};

export default Home;
