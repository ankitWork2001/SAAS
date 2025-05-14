// src/components/HeroSection.jsx
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative">
      {/* Background graphics */}
      <div className="absolute top-0 flex justify-center w-full overflow-x-hidden">
        <div className="size-[1500px] shrink-0">
          <img
            alt=""
            loading="lazy"
            width="1500"
            height="1500"
            decoding="async"
            className="w-full h-full"
            style={{ color: "transparent" }}
            src="https://www.luxalgo.com/images/graphics/top_cobalt_cyan_stroke.svg"
          />
        </div>
      </div>
      <div className="absolute top-[200px] flex justify-end w-full overflow-x-hidden">
        <div className="size-[1000px] shrink-0">
          <img
            alt=""
            loading="lazy"
            width="1000"
            height="1000"
            decoding="async"
            className="w-full h-full"
            style={{ color: "transparent" }}
            src="https://www.luxalgo.com/images/graphics/right_cobalt_cyan_stroke.svg"
          />
        </div>
      </div>

      {/* Hero content */}
      <section className="pt-48 pb-24">
        <div className="relative container mx-auto px-6 text-center space-y-12">
          <div className="space-y-6">
            <h1 className="text-white text-5xl sm:text-7xl font-bold text-center break-words sm:break-normal">
              Supercharge your
              <br />
              <span className="text-black mix-blend-overlay opacity-90">
                trading strategy
              </span>
            </h1>
          </div>
          <h2 className="text-xl sm:text-2xl text-balance">
            Unlock the best trading indicators and&nbsp;
            <br className="hidden sm:block" />
            AI agent for backtesting used by 15,000+ traders.
          </h2>
          <div className="group inline-block relative rounded-full">
            <div className="rounded-full absolute inset-0 group-hover:scale-105 duration-200 ease-in opacity-0 group-hover:opacity-100 transition-all bg-linear-to-r blur-sm from-sky-500 via-cyan-500 to-cobalt-500"></div>
            <Link
              to="/pricing"
              className="inline-block px-5 py-1.5 rounded-full border relative transition-all text-balance text-center disabled:bg-slate-700  disabled:light:bg-slate-300 disabled:text-slate-600  disabled:light:text-slate-400 disabled:bg-none disabled:border-slate-600
                        text-slate-900 light:text-slate-100 hover:text-slate-900 light:hover:text-slate-100 bg-slate-200 light:bg-slate-800 hover:bg-slate-100 light:hover:bg-slate-900 active:bg-slate-300 light:active:bg-slate-700
                          group-hover:scale-105 duration-200 ease-in"
            >
              <div className="flex justify-center items-center gap-2">
                Get 30 Days Risk Free
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;