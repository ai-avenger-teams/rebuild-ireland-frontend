export const InfiniteSlider = ({ prompts }) => {
  return (
    <section>
      <p className="font-medium text-center mt-2">
        Buildie has given {prompts.length} pieces of advice to help users get on
        the property ladder!
      </p>

      <div className="relative m-auto w-[1200px] overflow-hidden  before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
        <div className="animate-infinite-slider flex w-[calc(250px*10)] my-1 text-sm">
          {prompts.map((prompt, index) => (
            <div
              className="slide flex  text-nowrap px-2 py-0.5 rounded-full mx-2 bg-customGreen text-white"
              key={index}
            >
              {prompt}
            </div>
          ))}
          {prompts.map((prompt, index) => (
            <div
              className="slide flex  text-nowrap px-2 py-0.5 mx-2 rounded-full bg-customGreen text-white"
              key={index}
            >
              {prompt}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
