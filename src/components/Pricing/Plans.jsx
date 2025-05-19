import React, { useState } from "react";
import { FaCrown, FaGem, FaRocket } from "react-icons/fa";

const Plans = () => {
  const [billing, setBilling] = useState("Monthly");

  const plans = [
    {
      name: "Essential",
      price: "₹99",
      icon: <FaRocket />,
      theme: "from-[#00A3FF] to-white",
      features: [
        "Basic support",
        "500MB Storage",
        "Limited analytics",
        "1 User only",
      ],
    },
    {
      name: "Ultimate",
      price: "₹299",
      icon: <FaCrown />,
      theme: "from-[#C69B3C] to-white",
      features: [
        "Priority support",
        "10GB Storage",
        "Advanced analytics",
        "5 Users included",
      ],
    },
    {
      name: "Premium",
      price: "₹199",
      icon: <FaGem />,
      theme: "from-[#8000FF] to-white",
      features: [
        "Standard support",
        "2GB Storage",
        "Basic analytics",
        "3 Users included",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#00040F] to-[#000211] text-white px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
        Choose Your Plan
      </h1>

      <div className="flex justify-center items-center mb-12">
        <div className="flex items-center gap-2 p-1 bg-[#1a1a1a] rounded-full border border-gray-700">
          {["Monthly", "Yearly"].map((type) => (
            <button
              key={type}
              onClick={() => setBilling(type)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                billing === type
                  ? "bg-white text-black shadow"
                  : "text-white hover:bg-gray-800"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative w-[320px] md:w-[360px] p-[2px] rounded-[24px] bg-gradient-to-br ${plan.theme} shadow-xl ${
              index === 1 ? "-mt-10" : "mt-0"
            }`}
          >
            <div className="bg-gradient-to-br from-[#12182A] to-[#1A223A] rounded-[22px] p-8 h-full flex flex-col justify-between">
              <div>
                <div className="text-4xl mb-4 bg-white text-black w-14 h-14 rounded-full flex items-center justify-center">
                  {plan.icon}
                </div>
                <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
                <p className="text-3xl font-bold mb-6">{plan.price} /mo</p>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-green-400">✔</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="mt-auto bg-white text-black py-3 px-6 rounded-full font-semibold hover:bg-gray-200 transition w-full">
                Subscribe →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
