// src/pages/Home.jsx
import { Link } from "react-router-dom";
import HeroSection from "../../components/HeroSection";
import Graphics1 from "../../assets/graphics/graphic1.webp";
import Graphics2 from "../../assets/graphics/graphic2.webp";
import Screeners from "../../assets/screeners/screeners_1.webp";
import Backtesters from "../../assets/backtesters/backtesters_1.webp";
import ShowCase1 from "../../assets/showcase/showcase_1.webp";
import ShowCase2 from "../../assets/showcase/showcase_2.webp";
import ShowCase3 from "../../assets/showcase/showcase_3.webp";
import ShowCase4 from "../../assets/showcase/showcase_4.webp";
import ShowCase5 from "../../assets/showcase/showcase_5.webp";
import ShowCase6 from "../../assets/showcase/showcase_5.webp";
import { useEffect, useState } from "react";


const showcases = [
  ShowCase1,
  ShowCase2,
  ShowCase3,
  ShowCase4,
  ShowCase5,
  ShowCase6
];
const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % showcases.length);
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, []);


  return (
    <div>
      <HeroSection />

      {/* Product Showcase Section */}
      <section className="pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="container  mx-auto sm:p-12 sm:border border-midnight-500/50 sm:-7bg-midnight00/30 sm:backdrop-blur rounded-2xl relative">
            <div className="relative aspect-[1054/537]" style={{ perspective: "1000px" }}>
              {showcases.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`LuxAlgo Showcase ${index + 1}`}
                  className={`absolute top-0  rounded-3xl border transition-all duration-1000  ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                  style={{ color: "transparent", transform: "rotateX(0deg)" }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Toolkits Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="container mx-auto border rounded-2xl bg-blue-400 relative overflow-hidden">
            {/* Background graphics */}
            <div className="absolute top-0 left-0 size-[500px] sm:size-[1000px]">
              <img
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute h-full w-full"
                style={{ color: "transparent" }}
                src={Graphics1}
              />
            </div>
            <div className="absolute bottom-0 right-0 size-[500px] sm:size-[1000px]">
              <img
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute h-full w-full"
                style={{ color: "transparent" }}
                src={Graphics2}
              />
            </div>

            {/* Content */}
            <div className="relative">
              <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-12">
                <div className="w-full px-12 pb-12 md:px-0 md:py-12 xl:py-24">
                  <div className="md:-ml-20">
                    <div className="border rounded-2xl overflow-hidden bg-black relative">
                      {/* Toolkit Image 1 (hidden by default) */}
                      {showcases.map((image, index) => (
                        <img
                          title="Signals & Overlays, Price Action Concepts, Oscillator Matrix LuxAlgo toolkits for technical analysis."
                          alt="Charts showing LuxAlgo toolkits"
                          loading="lazy"
                          width="1854"
                          height="958"
                          decoding="async"
                          className={`object-cover transition-opacity duration-1000 absolute opacity-0 w-full h-full ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                            }`}
                          style={{ color: "transparent" }}
                          sizes="(max-width: 640px) 500px, (max-width: 768px) 540px, (max-width: 1024px) 424px, (max-width: 1280px) 553px, 603px"
                          src={image}
                          key={index}
                        />
                      ))}

                      {/* Toolkit Image 2 (visible) */}
                      <img
                        title="Signals & Overlays, Price Action Concepts, Oscillator Matrix LuxAlgo toolkits for technical analysis."
                        alt="Charts showing LuxAlgo toolkits"
                        loading="lazy"
                        width="1854"
                        height="958"
                        decoding="async"
                        className="object-cover transition-opacity duration-1000 absolute opacity-100 w-full h-full"
                        style={{ color: "transparent" }}
                        sizes="(max-width: 640px) 500px, (max-width: 768px) 540px, (max-width: 1024px) 424px, (max-width: 1280px) 553px, 603px"
                        src="/assets/images/product/toolkits/toolkits_2.png"
                      />

                      {/* Toolkit Image 3 (hidden by default) */}
                      <img
                        title="Signals & Overlays, Price Action Concepts, Oscillator Matrix LuxAlgo toolkits for technical analysis."
                        alt="Charts showing LuxAlgo toolkits"
                        loading="lazy"
                        width="1854"
                        height="958"
                        decoding="async"
                        className="object-cover transition-opacity duration-1000 relative opacity-0 w-full h-full"
                        style={{ color: "transparent" }}
                        sizes="(max-width: 640px) 500px, (max-width: 768px) 540px, (max-width: 1024px) 424px, (max-width: 1280px) 553px, 603px"
                        src="/assets/images/product/toolkits/toolkits_3.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full px-12 pt-12 md:pl-0 md:pr-12 md:py-12 xl:pr-24 xl:py-24 space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-lg sm:text-2xl">
                      <span className="bg-linear-to-r text-transparent bg-clip-text from-beige-100 via-cyan-500 to-sky-500">
                        Pro Toolkits
                      </span>
                    </h2>
                    <h3 className="text-4xl sm:text-6xl text-pretty font-bold">
                      State of the art trading tools
                    </h3>
                  </div>
                  <p className="text-lg sm:text-2xl max-w-prose text-pretty">
                    Automate complicated price action, get easy signals, and detect reversals by smart money. Our world class toolkits are the best way to level up your TradingView charts.
                  </p>
                  <div className="group inline-block relative rounded-full">
                    <div className="rounded-full absolute inset-0 group-hover:scale-105 duration-200 ease-in opacity-0 group-hover:opacity-100 transition-all bg-linear-to-r blur-sm from-cyan-500 to-cobalt-700"></div>
                    <Link
                      to="/pricing"
                      className="inline-block px-5 py-1.5 rounded-full border relative transition-all text-balance text-center text-slate-100 hover:text-slate-100 bg-slate-800 border-slate-600 hover:bg-slate-700 active:bg-slate-900 group-hover:scale-105 duration-200 ease-in"
                    >
                      <div className="flex justify-center items-center gap-2">
                        Level Up Your Charts
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screeners & Alerts Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="container mx-auto border rounded-2xl bg-midnight-700 relative overflow-hidden">
            <div className="absolute top-0 left-0 size-[1000px]">
              <img
                alt=""
                loading="lazy"
                decoding="async"
                style={{ color: "transparent" }}
                src="https://www.luxalgo.com/images/graphics/top_left_orange_pink_stroke.svg"
              />
            </div>
            <div className="absolute bottom-0 right-0 size-[1000px]">
              <img
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute h-full w-full"
                style={{ color: "transparent" }}
                src="https://www.luxalgo.com/images/graphics/bottom_left_purple_orange_fade.svg"
              />
            </div>
            <div className="relative">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
                <div className="w-full px-12 pt-12 md:pr-0 md:pl-12 md:py-12 xl:pl-24 xl:py-24 space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-lg sm:text-3xl">
                      <span className="bg-linear-to-r text-transparent bg-clip-text from-orange-500 via-pink-500 to-purple-500">
                        Screeners & Alerts
                      </span>
                    </h2>
                    <h2 className="text-4xl sm:text-6xl text-pretty font-bold">
                      Easily find high probability setups
                    </h2>
                  </div>
                  <p className="text-lg sm:text-2xl max-w-prose text-pretty">
                    Use professional-grade screeners & alerts with our most exclusive trading algorithms. Filter out market chaos and find trade setups on stocks, crypto, & forex markets.
                  </p>
                  <div className="group inline-block relative rounded-full">
                    <div className="rounded-full absolute inset-0 group-hover:scale-105 duration-200 ease-in opacity-0 group-hover:opacity-100 transition-all bg-linear-to-r blur-sm from-orange-500 via-pink-500 to-purple-700"></div>
                    <Link
                      to="/pricing"
                      className="inline-block px-5 py-1.5 rounded-full border relative transition-all text-balance text-center disabled:bg-slate-700  disabled:light:bg-slate-300 disabled:text-slate-600  disabled:light:text-slate-400 disabled:bg-none disabled:border-slate-600
    text-slate-100 hover:text-slate-100 bg-slate-800 border-slate-600  light:text-slate-900 light:hover:text-slate-900 light:bg-slate-200 hover:bg-slate-700  light:hover:bg-slate-300 active:bg-slate-900  light:active:bg-slate-100
    group-hover:scale-105 duration-200 ease-in"
                    >
                      <div className="flex justify-center items-center gap-2">
                        Unlock Access
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
                <div className="w-full px-12 pb-12 md:px-0 md:py-12 xl:py-24">
                  <div className="md:-mr-20">
                    <img
                      alt="Screeners"
                      loading="lazy"
                      width="2020"
                      height="1347"
                      decoding="async"
                      style={{ color: "transparent" }}
                      sizes="(max-width: 640px) 485px, (max-width: 768px) 542px, (max-width: 1024px) 426px, (max-width: 1280px) 555px, 605px"
                      src={Screeners}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Backtesting Section */}
      <section className="pt-12 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="container mx-auto border rounded-2xl bg-midnight-900 relative overflow-hidden">
            <div className="absolute top-0 right-0 size-[1000px]">
              <img
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute h-full w-full"
                style={{ color: "transparent" }}
                src="https://www.luxalgo.com/images/graphics/top_right_cobalt_white_stroke.svg"
              />
            </div>
            <div className="absolute bottom-0 right-0 size-[1000px]">
              <img
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute h-full w-full"
                style={{ color: "transparent" }}
                src="https://www.luxalgo.com/images/graphics/bottom_right_sky_fade_and_curve.svg"
              />
            </div>
            <div className="relative">
              <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-12">
                <div className="w-full px-12 pb-12 md:px-0 md:py-12 xl:py-24">
                  <div className="md:-ml-20">
                    <img
                      alt="Backtesting"
                      loading="lazy"
                      width="906"
                      height="742"
                      decoding="async"
                      style={{ color: "transparent" }}
                      sizes="(max-width: 640px) 485px, (max-width: 768px) 542px, (max-width: 1024px) 426px, (max-width: 1280px) 555px, 605px"
                      src={Backtesters}
                    />
                  </div>
                </div>
                <div className="w-full px-12 pt-12 md:pl-0 md:pr-12 md:py-12 xl:pr-24 xl:py-24 space-y-8">
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-2xl">
                      <span className="bg-linear-to-r text-transparent bg-clip-text from-cobalt-500 via-white to-cyan-500">
                        Next-Gen Backtesting
                      </span>
                    </h3>
                    <h2 className="text-4xl sm:text-6xl text-pretty font-bold">
                      An AI agent to build winning strategies
                    </h2>
                  </div>
                  <p className="text-lg sm:text-2xl max-w-prose text-pretty">
                    Ask our AI agent to find the best trading strategies and do the work for you. Plug our backtesting software into any platform to automate your trades like a pro.
                  </p>
                  <div className="group inline-block relative rounded-full">
                    <div className="rounded-full absolute inset-0 group-hover:scale-105 duration-200 ease-in opacity-0 group-hover:opacity-100 transition-all bg-linear-to-r blur-sm from-cobalt-500 via-white to-cyan-500"></div>
                    <Link
                      to="/pricing"
                      className="inline-block px-5 py-1.5 rounded-full border relative transition-all text-balance text-center disabled:bg-slate-700  disabled:light:bg-slate-300 disabled:text-slate-600  disabled:light:text-slate-400 disabled:bg-none disabled:border-slate-600
    text-slate-100 hover:text-slate-100 bg-slate-800 border-slate-600  light:text-slate-900 light:hover:text-slate-900 light:bg-slate-200 hover:bg-slate-700  light:hover:bg-slate-300 active:bg-slate-900  light:active:bg-slate-100
    group-hover:scale-105 duration-200 ease-in"
                    >
                      <div className="flex justify-center items-center gap-2">
                        Get Access Now
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="pb-24">
        <div className="relative space-y-12">
          <div className="absolute inset-0 flex justify-center items-end overflow-hidden">
            <div className="w-[1000px] h-[500px] sm:w-[2000px] sm:h-[1000px] shrink-0">
              <img
                alt=""
                loading="lazy"
                width="2000"
                height="1000"
                decoding="async"
                style={{ color: "transparent" }}
                src="https://www.luxalgo.com/images/graphics/bottom_midnight_circle_fade.svg"
              />
            </div>
          </div>
          <div className="flex justify-between items-center max-w-6xl mx-auto px-6 gap-4">
            <div className="group inline-block relative rounded-full">
              <button
                type="button"
                className="inline-block px-5 py-1.5 rounded-full border relative transition-all text-center text-slate-100 bg-slate-800 border-slate-600 hover:bg-slate-700 active:bg-slate-900"
              >
                <div className="flex justify-center items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
            <h2 className="text-4xl sm:text-6xl text-balance font-bold text-center">
              Real traders, real stories
            </h2>
            <button
              type="button"
              className="inline-block px-5 py-1.5 rounded-full border relative transition-all text-center text-slate-100 bg-slate-800 border-slate-600 hover:bg-slate-700 active:bg-slate-900"
            >
              <div className="flex justify-center items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: "translateX(0)" }}
            >
              {/* Testimonial 1 */}
              <div className="w-[425px] ml-[20px] shrink-0">
                <div className="border rounded-2xl p-8 sm:p-10 bg-slate-500/10 backdrop-blur-sm space-y-6">
                  <h5 className="text-3xl sm:text-4xl font-bold">Very helpful indicators</h5>
                  <p className="text-xl sm:text-2xl line-clamp-8">
                    Using the Lux Algo indicators doing a top down analysis from the daily and weekly chart, it has not only helped me understand which way price is going but also helps me get into the trend at the right times catching the pullbacks/retest to very accurate S/R zones (shown by the indicator) on the smaller timeframes.
                    On my small live account my usdjpy trades right now are floating at over $200+ from a balance of $32 as of writing this. Great indicators
                  </p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <img
                        key={i}
                        alt="Trustpilot star"
                        loading="lazy"
                        width="64"
                        height="64"
                        decoding="async"
                        className="w-8 h-8"
                        style={{ color: "transparent" }}
                        src="https://www.luxalgo.com/images/off-brand/trustpilot_star.svg"
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      alt="Review user image"
                      loading="lazy"
                      width="73"
                      height="73"
                      decoding="async"
                      className="w-10 h-10 rounded-full"
                      src="https://user-images.trustpilot.com/62542792d187cb001251ff7c/73x73.png"
                      style={{ color: "transparent" }}
                    />
                    <div className="text-xl font-bold">Damion Powell</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="w-[425px] ml-[20px] shrink-0">
                <div className="border rounded-2xl p-8 sm:p-10 bg-slate-500/10 backdrop-blur-sm space-y-6">
                  <h5 className="text-3xl sm:text-4xl font-bold">After little longer than 1 year.</h5>
                  <p className="text-xl sm:text-2xl line-clamp-8">
                    I have had the most clear and enlightening experience with lux. I have come from another provider that happened to be more expensive but also more inclined to high level TA which made had a hard time to actually use it properly. With lux at a more affordable price I get the experience that I want, a TA that adapta to my own level of analysis. I get to select the tools that applies to my trading style and level with ease. Also the leaders are always providing with tutorials and main suggested trading strategies. I have even made a good friend in the channel with who I discuss strategies and ideas. Finally found the tools that I need and place where I can possibly get to the next level. Thank you gecko, smack and the rest of the team. Please keep it up. God bless.
                  </p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <img
                        key={i}
                        alt="Trustpilot star"
                        loading="lazy"
                        width="64"
                        height="64"
                        decoding="async"
                        className="w-8 h-8"
                        style={{ color: "transparent" }}
                        src="https://www.luxalgo.com/images/off-brand/trustpilot_star.svg"
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      alt="Review user image"
                      loading="lazy"
                      width="73"
                      height="73"
                      decoding="async"
                      className="w-10 h-10 rounded-full"
                      src="https://user-images.trustpilot.com/63482c7b6a99630012b2f7d9/73x73.png"
                      style={{ color: "transparent" }}
                    />
                    <div className="text-xl font-bold">Raul</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="w-[425px] ml-[20px] shrink-0">
                <div className="border rounded-2xl p-8 sm:p-10 bg-slate-500/10 backdrop-blur-sm space-y-6">
                  <h5 className="text-3xl sm:text-4xl font-bold">Lux Algo - Worth It</h5>
                  <p className="text-xl sm:text-2xl line-clamp-8">
                    Hello everyone! I've been in the trading business for the last 5 years. I tried many things from pure price action to repainting indicators. I lost money but I never lost hope and that's how I found LUX. I just never gave up. I was excited when I first found it. I did some back testing to see if it fits with my money and trade management. I had to make few adjustments and now I can say I'm more than happy to use it every day and be profitable. I know most of you are skeptical but if you just give it a shot you'll see how incredible it is. Leaving the algo aside, there's a great Discord group (you can check my results there) with amazing and helpful members in it. All you have to do is risk ~70 bucks which I guarantee you will earn back in one trade.
                  </p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <img
                        key={i}
                        alt="Trustpilot star"
                        loading="lazy"
                        width="64"
                        height="64"
                        decoding="async"
                        className="w-8 h-8"
                        style={{ color: "transparent" }}
                        src="https://www.luxalgo.com/images/off-brand/trustpilot_star.svg"
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      alt="Review user image"
                      loading="lazy"
                      width="73"
                      height="73"
                      decoding="async"
                      className="w-10 h-10 rounded-full"
                      src="https://user-images.trustpilot.com/5da70b29e7907d5e1e8f14de/73x73.png"
                      style={{ color: "transparent" }}
                    />
                    <div className="text-xl font-bold">Ayhan Asenov</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 4 */}
              <div className="w-[425px] ml-[20px] shrink-0">
                <div className="border rounded-2xl p-8 sm:p-10 bg-slate-500/10 backdrop-blur-sm space-y-6">
                  <h5 className="text-3xl sm:text-4xl font-bold">Lux Algo - Worth It</h5>
                  <p className="text-xl sm:text-2xl line-clamp-8">
                    Hello everyone! I've been in the trading business for the last 5 years. I tried many things from pure price action to repainting indicators. I lost money but I never lost hope and that's how I found LUX. I just never gave up. I was excited when I first found it. I did some back testing to see if it fits with my money and trade management. I had to make few adjustments and now I can say I'm more than happy to use it every day and be profitable. I know most of you are skeptical but if you just give it a shot you'll see how incredible it is. Leaving the algo aside, there's a great Discord group (you can check my results there) with amazing and helpful members in it. All you have to do is risk ~70 bucks which I guarantee you will earn back in one trade.
                  </p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <img
                        key={i}
                        alt="Trustpilot star"
                        loading="lazy"
                        width="64"
                        height="64"
                        decoding="async"
                        className="w-8 h-8"
                        style={{ color: "transparent" }}
                        src="https://www.luxalgo.com/images/off-brand/trustpilot_star.svg"
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      alt="Review user image"
                      loading="lazy"
                      width="73"
                      height="73"
                      decoding="async"
                      className="w-10 h-10 rounded-full"
                      src="https://user-images.trustpilot.com/5da70b29e7907d5e1e8f14de/73x73.png"
                      style={{ color: "transparent" }}
                    />
                    <div className="text-xl font-bold">Ayhan Asenov</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 5 */}
              <div className="w-[425px] ml-[20px] shrink-0">
                <div className="border rounded-2xl p-8 sm:p-10 bg-slate-500/10 backdrop-blur-sm space-y-6">
                  <h5 className="text-3xl sm:text-4xl font-bold">Lux Algo - Worth It</h5>
                  <p className="text-xl sm:text-2xl line-clamp-8">
                    Hello everyone! I've been in the trading business for the last 5 years. I tried many things from pure price action to repainting indicators. I lost money but I never lost hope and that's how I found LUX. I just never gave up. I was excited when I first found it. I did some back testing to see if it fits with my money and trade management. I had to make few adjustments and now I can say I'm more than happy to use it every day and be profitable. I know most of you are skeptical but if you just give it a shot you'll see how incredible it is. Leaving the algo aside, there's a great Discord group (you can check my results there) with amazing and helpful members in it. All you have to do is risk ~70 bucks which I guarantee you will earn back in one trade.
                  </p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <img
                        key={i}
                        alt="Trustpilot star"
                        loading="lazy"
                        width="64"
                        height="64"
                        decoding="async"
                        className="w-8 h-8"
                        style={{ color: "transparent" }}
                        src="https://www.luxalgo.com/images/off-brand/trustpilot_star.svg"
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      alt="Review user image"
                      loading="lazy"
                      width="73"
                      height="73"
                      decoding="async"
                      className="w-10 h-10 rounded-full"
                      src="https://user-images.trustpilot.com/5da70b29e7907d5e1e8f14de/73x73.png"
                      style={{ color: "transparent" }}
                    />
                    <div className="text-xl font-bold">Ayhan Asenov</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 6 */}
              <div className="w-[425px] ml-[20px] shrink-0">
                <div className="border rounded-2xl p-8 sm:p-10 bg-slate-500/10 backdrop-blur-sm space-y-6">
                  <h5 className="text-3xl sm:text-4xl font-bold">Lux Algo - Worth It</h5>
                  <p className="text-xl sm:text-2xl line-clamp-8">
                    Hello everyone! I've been in the trading business for the last 5 years. I tried many things from pure price action to repainting indicators. I lost money but I never lost hope and that's how I found LUX. I just never gave up. I was excited when I first found it. I did some back testing to see if it fits with my money and trade management. I had to make few adjustments and now I can say I'm more than happy to use it every day and be profitable. I know most of you are skeptical but if you just give it a shot you'll see how incredible it is. Leaving the algo aside, there's a great Discord group (you can check my results there) with amazing and helpful members in it. All you have to do is risk ~70 bucks which I guarantee you will earn back in one trade.
                  </p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <img
                        key={i}
                        alt="Trustpilot star"
                        loading="lazy"
                        width="64"
                        height="64"
                        decoding="async"
                        className="w-8 h-8"
                        style={{ color: "transparent" }}
                        src="https://www.luxalgo.com/images/off-brand/trustpilot_star.svg"
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      alt="Review user image"
                      loading="lazy"
                      width="73"
                      height="73"
                      decoding="async"
                      className="w-10 h-10 rounded-full"
                      src="https://user-images.trustpilot.com/5da70b29e7907d5e1e8f14de/73x73.png"
                      style={{ color: "transparent" }}
                    />
                    <div className="text-xl font-bold">Ayhan Asenov</div>
                  </div>
                </div>
              </div>


              {/* Trustpilot CTA */}
              <div className="w-[425px] ml-[20px] shrink-0">
                <div className="border rounded-2xl p-8 sm:p-10 bg-slate-500/10 backdrop-blur-sm space-y-6">
                  <h5 className="text-3xl sm:text-4xl font-bold">
                    <img
                      alt="Trustpilot logo"
                      loading="lazy"
                      width="257"
                      height="64"
                      decoding="async"
                      src="https://www.luxalgo.com/images/off-brand/trustpilot_logo.svg"
                      style={{ color: "transparent" }}
                    />
                  </h5>
                  <p className="text-xl sm:text-2xl">Check out our other Reviews!</p>
                  <div className="group inline-block relative rounded-full">
                    <a
                      className="inline-block px-5 py-1.5 rounded-full border relative transition-all text-balance text-center disabled:bg-slate-700  disabled:light:bg-slate-300 disabled:text-slate-600  disabled:light:text-slate-400 disabled:bg-none disabled:border-slate-600 
    text-slate-100 light:text-slate-900 hover:text-slate-100 light:hover:text-slate-900 bg-slate-600 light:bg-slate-400 hover:bg-slate-500 light:hover:bg-slate-500 active:bg-slate-700 light:active:bg-slate-300 border-slate-400 light:border-slate-600"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.trustpilot.com/review/luxalgo.com"
                    >
                      <div className="flex justify-center items-center gap-2">See More Reviews</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;