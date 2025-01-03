import React, { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <div className="flex lg:justify-start justify-center border-b border-gray-700">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-[16px] font-medium transition-colors ${
              activeTab === index
                ? "text-[#5067FF] border-b-2 border-[#5067FF]"
                : "text-gray-400 hover:text-[#5067FF]"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-5">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
