// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

     const toggleMobileMenu = () => {
          setIsMobileMenuOpen(!isMobileMenuOpen);
     };

     return (
          <div className="sticky top-0 z-40">
               <div className="h-0">
                    <div
                         className="pl-10 lg:pl-12 pr-6 pt-6 pb-3 flex items-center justify-between backdrop-blur-lg bg-slate-950/10 transition-all"
                         style={{ textShadow: "0 0 5px #00000030" }}
                    >
                         {/* Logo */}
                         <Link to="/" className="text-white hover:text-white">
                              <div className="h-[30px] w-[135px] lg:h-[40px] lg:w-[180px]">
                                   <svg
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 180 40"
                                        xmlns="http://www.w3.org/2000/svg"
                                   >
                                        <g clipPath="url(#clip0_308_946)" fill="currentColor">
                                             <path d="M46.234 5.729h5.854V26.02h11.459v5.007H46.234zm36.214 25.298H77.23v-2.539h-.352c-1.34 2.046-3.068 3.068-5.254 3.068-4.09 0-6.805-3.173-6.805-7.51V12.974h5.219v10.331c0 2.222 1.27 3.774 3.384 3.774 2.08 0 3.808-1.657 3.808-3.95V12.974h5.22zm41.904 0h6.081L115.941 5.729l-14.48 25.298h6.055l8.425-14.693z"></path>
                                             <path d="M101.461 12.974H96.52l-3.996 7.012-3.997-7.012h-4.941l5.144 9.027-5.144 9.026h4.879l4.06-7.122 4.057 7.122h4.879l-5.144-9.026zm30.049-8.11h5.219v26.163h-5.219zm7.083 28.491 5.043-.988c.669 1.975 2.328 3.174 4.584 3.174 2.892 0 4.761-1.904 4.761-4.867v-2.01h-.353c-1.445 1.657-3.279 2.61-5.712 2.61-5.006 0-8.533-3.702-8.533-9.273 0-5.817 3.492-9.555 8.498-9.555 2.61 0 4.478 1.059 5.889 2.821h.353v-2.291h5.077v17.84c0 5.57-3.808 8.885-9.838 8.885-5.255 0-8.887-2.291-9.769-6.346M153.156 22c0-2.962-1.975-5.112-4.761-5.112S143.6 19.039 143.6 22c0 2.892 2.009 5.007 4.795 5.007s4.761-2.117 4.761-5.007m6.815.001c0-5.817 3.984-9.59 10.014-9.59C175.98 12.41 180 16.183 180 22c0 5.854-4.019 9.591-10.015 9.591-6.03-.001-10.014-3.773-10.014-9.59m14.774 0c0-2.997-1.975-5.112-4.761-5.112-2.821 0-4.795 2.115-4.795 5.112s1.974 5.148 4.795 5.148c2.786 0 4.761-2.15 4.761-5.148M36.217 34.646l4.139-7.231L25.868 2.108 11.381 27.415h8.279l6.209-10.845z"></path>
                                             <path d="M31.042 29.224 8.267 29.22 24.833.3h-8.277L0 29.216l4.137 7.237h31.045z"></path>
                                        </g>
                                   </svg>
                              </div>
                         </Link>

                         {/* Mobile Menu Button */}
                         <div className="block lg:hidden">
                              <button
                                   onClick={toggleMobileMenu}
                                   className="p-2 text-white hover:text-slate-400 active:text-slate-600 transition-colors border rounded-lg bg-slate-950/20"
                              >
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
                                             d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                                             clipRule="evenodd"
                                        ></path>
                                   </svg>
                              </button>
                         </div>

                         {/* Desktop Navigation */}
                         <div className="hidden lg:block">
                              <div className="flex items-center gap-6">
                                   {/* Features Dropdown */}
                                   <div className="group/dropdown relative max-h-20">
                                        <div className="flex items-center">
                                             <div className="block cursor-default whitespace-nowrap">
                                                  <div className="p-2 leading-4">Features</div>
                                             </div>
                                             <div className="pr-2">
                                                  <svg
                                                       xmlns="http://www.w3.org/2000/svg"
                                                       viewBox="0 0 16 16"
                                                       fill="currentColor"
                                                       aria-hidden="true"
                                                       data-slot="icon"
                                                       className="size-4"
                                                  >
                                                       <path
                                                            fillRule="evenodd"
                                                            d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                                                            clipRule="evenodd"
                                                       ></path>
                                                  </svg>
                                             </div>
                                        </div>
                                        <div className="absolute top-full left-0 origin-top-left invisible group-hover/dropdown:visible opacity-0 group-hover/dropdown:opacity-100 scale-95 group-hover/dropdown:scale-100 transition-all ease-in duration-100 pt-1">
                                             <div className="border border-slate-600 p-2 space-y-2 rounded-xl bg-slate-900/90 min-w-40">
                                                  <div className="min-w-96">
                                                       <Link
                                                            to="/features/toolkits"
                                                            className="group/item block rounded-lg relative bg-slate-950 border min-h-24 text-slate-400 hover:text-white"
                                                       >
                                                            <div className="absolute top-0 left-0 w-full h-full hue-rotate-180 group-hover/item:hue-rotate-0">
                                                                 {/* Image would go here */}
                                                            </div>
                                                            <div className="relative max-w-56">
                                                                 <div className="p-3 leading-4 space-y-1">
                                                                      <div>Toolkits</div>
                                                                      <div className="text-xs">
                                                                           Keep it simple & use our pro workflows
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </Link>
                                                  </div>
                                                  <div className="min-w-96">
                                                       <Link
                                                            to="/features/screeners"
                                                            className="group/item block rounded-lg relative bg-slate-950 border min-h-24 text-slate-400 hover:text-white"
                                                       >
                                                            <div className="absolute top-0 left-0 w-full h-full hue-rotate-180 group-hover/item:hue-rotate-0">
                                                                 {/* Image would go here */}
                                                            </div>
                                                            <div className="relative max-w-56">
                                                                 <div className="p-3 leading-4 space-y-1">
                                                                      <div>Screeners</div>
                                                                      <div className="text-xs">
                                                                           Scan assets using any feature
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </Link>
                                                  </div>
                                                  <div className="min-w-96">
                                                       <Link
                                                            to="/features/backtesters"
                                                            className="group/item block rounded-lg relative bg-slate-950 border min-h-24 text-slate-400 hover:text-white"
                                                       >
                                                            <div className="absolute top-0 left-0 w-full h-full hue-rotate-180 group-hover/item:hue-rotate-0">
                                                                 {/* Image would go here */}
                                                            </div>
                                                            <div className="relative max-w-56">
                                                                 <div className="p-3 leading-4 space-y-1">
                                                                      <div>Backtesters</div>
                                                                      <div className="text-xs">
                                                                           Backtest your strategy like a pro
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </Link>
                                                  </div>
                                                  <div className="min-w-96">
                                                       <Link
                                                            to="/backtesting"
                                                            className="group/item block rounded-lg relative bg-slate-950 border min-h-24 text-slate-400 hover:text-white"
                                                       >
                                                            <div className="absolute top-0 left-0 w-full h-full hue-rotate-180 group-hover/item:hue-rotate-0">
                                                                 {/* Image would go here */}
                                                            </div>
                                                            <div className="relative max-w-56">
                                                                 <div className="p-3 leading-4 space-y-1">
                                                                      <div>AI Backtesting Assistant</div>
                                                                      <div className="text-xs">
                                                                           Build strategies with our AI platform
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </Link>
                                                  </div>
                                                  <div className="min-w-96">
                                                       <div>
                                                            <Link
                                                                 to="/features"
                                                                 className="group/item flex items-center rounded-lg bg-slate-950 border border-slate-600 whitespace-nowrap my-auto text-slate-400 hover:text-slate-100"
                                                            >
                                                                 <div className="p-3 leading-4">
                                                                      <div>Explore all features</div>
                                                                 </div>
                                                            </Link>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>

                                   {/* Resources Dropdown */}
                                   <div className="group/dropdown relative max-h-20">
                                        <div className="flex items-center">
                                             <div className="block cursor-default whitespace-nowrap">
                                                  <div className="p-2 leading-4">Resources</div>
                                             </div>
                                             <div className="pr-2">
                                                  <svg
                                                       xmlns="http://www.w3.org/2000/svg"
                                                       viewBox="0 0 16 16"
                                                       fill="currentColor"
                                                       aria-hidden="true"
                                                       data-slot="icon"
                                                       className="size-4"
                                                  >
                                                       <path
                                                            fillRule="evenodd"
                                                            d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                                                            clipRule="evenodd"
                                                       ></path>
                                                  </svg>
                                             </div>
                                        </div>
                                        <div className="absolute top-full left-0 origin-top-left invisible group-hover/dropdown:visible opacity-0 group-hover/dropdown:opacity-100 scale-95 group-hover/dropdown:scale-100 transition-all ease-in duration-100 pt-1">
                                             <div className="border border-slate-600 p-2 space-y-2 rounded-xl bg-slate-900/90 min-w-40">
                                                  <div>
                                                       <a
                                                            href="https://docs.luxalgo.com"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="group/item flex items-center rounded-lg bg-slate-950 border border-slate-600 whitespace-nowrap my-auto text-slate-400 hover:text-slate-100"
                                                       >
                                                            <div className="p-3 leading-4 space-y-1">
                                                                 <div>Docs</div>
                                                                 <div className="text-xs">
                                                                      Learn our products with AI search
                                                                 </div>
                                                            </div>
                                                       </a>
                                                  </div>
                                                  <div>
                                                       <a
                                                            href="https://www.luxalgo.com/blog"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="group/item flex items-center rounded-lg bg-slate-950 border border-slate-600 whitespace-nowrap my-auto text-slate-400 hover:text-slate-100"
                                                       >
                                                            <div className="p-3 leading-4 space-y-1">
                                                                 <div>Blog</div>
                                                                 <div className="text-xs">
                                                                      Learn trading, markets, and our tools
                                                                 </div>
                                                            </div>
                                                       </a>
                                                  </div>
                                                  <div>
                                                       <Link
                                                            to="/about"
                                                            className="group/item flex items-center rounded-lg bg-slate-950 border border-slate-600 whitespace-nowrap my-auto text-slate-400 hover:text-slate-100"
                                                       >
                                                            <div className="p-3 leading-4 space-y-1">
                                                                 <div>About</div>
                                                                 <div className="text-xs">What is LuxAlgo?</div>
                                                            </div>
                                                       </Link>
                                                  </div>
                                                  <div>
                                                       <a
                                                            href="https://discord.gg/lux"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="group/item flex items-center rounded-lg bg-slate-950 border border-slate-600 whitespace-nowrap my-auto text-slate-400 hover:text-slate-100"
                                                       >
                                                            <div className="p-3 leading-4 space-y-1">
                                                                 <div>Community</div>
                                                                 <div className="text-xs">
                                                                      Home of the smartest traders globally
                                                                 </div>
                                                            </div>
                                                       </a>
                                                  </div>
                                                  <div>
                                                       <Link
                                                            to="/affiliates"
                                                            className="group/item flex items-center rounded-lg bg-slate-950 border border-slate-600 whitespace-nowrap my-auto text-slate-400 hover:text-slate-100"
                                                       >
                                                            <div className="p-3 leading-4 space-y-1">
                                                                 <div>Affiliates</div>
                                                                 <div className="text-xs">
                                                                      Build an income sharing our tools
                                                                 </div>
                                                            </div>
                                                       </Link>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>

                                   {/* Library Link */}
                                   <div className="flex items-center">
                                        <Link
                                             to="/library"
                                             className="block whitespace-nowrap text-white hover:text-slate-400"
                                        >
                                             <div className="p-2 leading-4">Library</div>
                                        </Link>
                                   </div>

                                   {/* Pricing Link */}
                                   <div className="flex items-center">
                                        <Link
                                             to="/pricing"
                                             className="block whitespace-nowrap text-white hover:text-slate-400"
                                        >
                                             <div className="p-2 leading-4">Pricing</div>
                                        </Link>
                                   </div>

                                   {/* Auth Buttons */}
                                   <div className="flex items-baseline gap-2">
                                        <div className="group inline-block relative rounded-full">
                                             <Link
                                                  to="/login"
                                                  className="inline-block px-5 py-1.5 rounded-full border relative transition-all text-balance text-center text-slate-100 hover:text-slate-100 bg-slate-800 border-slate-600 hover:bg-slate-700 active:bg-slate-900"
                                             >
                                                  <div className="flex justify-center items-center gap-2">
                                                       Log In
                                                  </div>
                                             </Link>
                                        </div>
                                        <div className="group inline-block relative rounded-full">
                                             <Link
                                                  to="/signup"
                                                  className="inline-block px-5 py-1.5 rounded-full border relative transition-all text-balance text-center text-slate-900 hover:text-slate-900 bg-slate-200 hover:bg-slate-100 active:bg-slate-300"
                                             >
                                                  <div className="flex justify-center items-center gap-2">
                                                       Sign Up
                                                  </div>
                                             </Link>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>

                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                         <div className="bg-transparent text-white w-full h-full space-y-8 pl-10 pr-6 pt-6 pb-6 lg:hidden">
                              <div className="flex items-center justify-between">
                                   <div className="h-[30px] w-[135px] lg:h-[40px] lg:w-[180px]">
                                        <svg
                                             width="100%"
                                             height="100%"
                                             viewBox="0 0 180 40"
                                             xmlns="http://www.w3.org/2000/svg"
                                        >
                                             <g clipPath="url(#clip0_308_946)" fill="currentColor">
                                                  <path d="M46.234 5.729h5.854V26.02h11.459v5.007H46.234zm36.214 25.298H77.23v-2.539h-.352c-1.34 2.046-3.068 3.068-5.254 3.068-4.09 0-6.805-3.173-6.805-7.51V12.974h5.219v10.331c0 2.222 1.27 3.774 3.384 3.774 2.08 0 3.808-1.657 3.808-3.95V12.974h5.22zm41.904 0h6.081L115.941 5.729l-14.48 25.298h6.055l8.425-14.693z"></path>
                                                  <path d="M101.461 12.974H96.52l-3.996 7.012-3.997-7.012h-4.941l5.144 9.027-5.144 9.026h4.879l4.06-7.122 4.057 7.122h4.879l-5.144-9.026zm30.049-8.11h5.219v26.163h-5.219zm7.083 28.491 5.043-.988c.669 1.975 2.328 3.174 4.584 3.174 2.892 0 4.761-1.904 4.761-4.867v-2.01h-.353c-1.445 1.657-3.279 2.61-5.712 2.61-5.006 0-8.533-3.702-8.533-9.273 0-5.817 3.492-9.555 8.498-9.555 2.61 0 4.478 1.059 5.889 2.821h.353v-2.291h5.077v17.84c0 5.57-3.808 8.885-9.838 8.885-5.255 0-8.887-2.291-9.769-6.346M153.156 22c0-2.962-1.975-5.112-4.761-5.112S143.6 19.039 143.6 22c0 2.892 2.009 5.007 4.795 5.007s4.761-2.117 4.761-5.007m6.815.001c0-5.817 3.984-9.59 10.014-9.59C175.98 12.41 180 16.183 180 22c0 5.854-4.019 9.591-10.015 9.591-6.03-.001-10.014-3.773-10.014-9.59m14.774 0c0-2.997-1.975-5.112-4.761-5.112-2.821 0-4.795 2.115-4.795 5.112s1.974 5.148 4.795 5.148c2.786 0 4.761-2.15 4.761-5.148M36.217 34.646l4.139-7.231L25.868 2.108 11.381 27.415h8.279l6.209-10.845z"></path>
                                                  <path d="M31.042 29.224 8.267 29.22 24.833.3h-8.277L0 29.216l4.137 7.237h31.045z"></path>
                                             </g>
                                        </svg>
                                   </div>
                                   <button
                                        onClick={toggleMobileMenu}
                                        className="p-2 text-white hover:text-slate-400 active:text-slate-600 transition-colors border rounded-lg bg-slate-950/20"
                                   >
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
                                                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                                                  clipRule="evenodd"
                                             ></path>
                                        </svg>
                                   </button>
                              </div>
                              <div className="space-y-2">
                                   <div>
                                        <button className="group/item flex items-center rounded-lg bg-slate-950 border whitespace-nowrap my-auto text-slate-400 hover:text-white w-full">
                                             <div className="p-3 leading-4 w-full flex justify-between gap-1">
                                                  Features
                                                  <svg
                                                       xmlns="http://www.w3.org/2000/svg"
                                                       viewBox="0 0 16 16"
                                                       fill="currentColor"
                                                       aria-hidden="true"
                                                       data-slot="icon"
                                                       className="size-4"
                                                  >
                                                       <path
                                                            fillRule="evenodd"
                                                            d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z"
                                                            clipRule="evenodd"
                                                       ></path>
                                                  </svg>
                                             </div>
                                        </button>
                                   </div>
                                   <div>
                                        <button className="group/item flex items-center rounded-lg bg-slate-950 border whitespace-nowrap my-auto text-slate-400 hover:text-white w-full">
                                             <div className="p-3 leading-4 w-full flex justify-between gap-1">
                                                  Resources
                                                  <svg
                                                       xmlns="http://www.w3.org/2000/svg"
                                                       viewBox="0 0 16 16"
                                                       fill="currentColor"
                                                       aria-hidden="true"
                                                       data-slot="icon"
                                                       className="size-4"
                                                  >
                                                       <path
                                                            fillRule="evenodd"
                                                            d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z"
                                                            clipRule="evenodd"
                                                       ></path>
                                                  </svg>
                                             </div>
                                        </button>
                                   </div>
                                   <div>
                                        <Link
                                             to="/library"
                                             className="group/item flex items-center rounded-lg bg-slate-950 border border-slate-600 whitespace-nowrap my-auto text-slate-400 hover:text-slate-100"
                                        >
                                             <div className="p-3 leading-4">Library</div>
                                        </Link>
                                   </div>
                                   <div>
                                        <Link
                                             to="/pricing"
                                             className="group/item flex items-center rounded-lg bg-slate-950 border border-slate-600 whitespace-nowrap my-auto text-slate-400 hover:text-slate-100"
                                        >
                                             <div className="p-3 leading-4">Pricing</div>
                                        </Link>
                                   </div>
                                   <hr />
                                   <div className="flex items-baseline gap-2">
                                        <div className="group inline-block relative rounded-full">
                                             <Link
                                                  to="/login"
                                                  className="inline-block px-5 py-1.5 rounded-full border relative transition-all text-balance text-center text-slate-100 hover:text-slate-100 bg-slate-800 border-slate-600 hover:bg-slate-700 active:bg-slate-900"
                                             >
                                                  <div className="flex justify-center items-center gap-2">
                                                       Log In
                                                  </div>
                                             </Link>
                                        </div>
                                        <div className="group inline-block relative rounded-full">
                                             <Link
                                                  to="/signup"
                                                  className="inline-block px-5 py-1.5 rounded-full border relative transition-all text-balance text-center text-slate-900 hover:text-slate-900 bg-slate-200 hover:bg-slate-100 active:bg-slate-300"
                                             >
                                                  <div className="flex justify-center items-center gap-2">
                                                       Sign Up
                                                  </div>
                                             </Link>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    )}
               </div>
          </div>
     );
};

export default Navbar;