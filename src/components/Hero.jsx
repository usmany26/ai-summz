import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="AiArSumz" className="w-28 object-contain" />
        <button
          onClick={() => window.open("https://github.com/usmany26")}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles With <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Improve your reading with AiSummz, an open-source article summarizer
        that change extensive articles into clear and compact outlines
      </h2>
    </header>
  );
};

export default Hero;
