"use client";

import React, { useState } from "react";

const sources = [
  {
    title: "Leads from List(s)",
    description: "Connect multiple lists as source for this sequence.",
    icon: "📧",
  },
  {
    title: "Segment by Events",
    description:
      "Create a segment of leads who have engaged with emails previously.",
    icon: "📱",
  },
  {
    title: "Segment of List",
    description: "Create a segment of leads which match SalesBlink variables.",
    icon: "🌐",
  },
  {
    title: "Lead from CRM Integrastion",
    description: "Pulls leads from CRM Integrations.",
    icon: "📝",
  },
];

const AddSourcesBlock = ({ onClose }) => {
  const [addSource, setAddSource] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleInsertNode = () => {
    localStorage.setItem("node", selectedValue);
    setAddSource(false);
    onClose(false);
  };

  const handleAddSource = () => {
    setAddSource(true);
  };

  return (
    <>
      {addSource ? (
        <div className="absolute bg-gray-200 min-h-full top-8 z-50 shadow-md">
          <div className="py-4 px-4 shadow-sm">
            <h1 className="font-bold">Leads From List(s)</h1>
            <p>Connect multiple lists as source for this sequence</p>
          </div>
          <div className="flex justify-between items-center mt-8 py-3 px-3">
            <h3>Select your List(s)</h3>
            <button className="border-sky-400 border-2 rounded-md font-bold px-2 py-1 text-sky-400 cursor-pointer">
              New List +
            </button>
          </div>
          <div className="mx-3">
            <select
              value={selectedValue}
              onChange={handleChange}
              className="border rounded-sm w-full"
            >
              <option>Search for Lists</option>
              <option value="SalesBlink LTD Dec 2024">
                SalesBlink LTD Dec 2024
              </option>
              <option value="SalesBlink LTD">SalesBlink LTD</option>
              <option value="GWA Email Verification">
                [GWA] Email Verification
              </option>
              <option value="Demo List">Demo List</option>
              <option value="[Shopify] Trust Badges">
                [Shopify] Trust Badges
              </option>
              <option value="[Shopify] Announcement Bar">
                [Shopify] Announcement Bar
              </option>
              <option value="SalesBlink All">SalesBlink All</option>
            </select>
          </div>
          <button
            onClick={handleInsertNode}
            className="px-2 py-1 my-2 mx-3 absolute text-white cursor-pointer right-0 bg-blue-500 rounded-md"
          >
            Insert
          </button>
        </div>
      ) : (
        <div className="absolute top-10 bg-gray-200 z-50 rounded-md">
          <button
            className="absolute top-0 border rounded-md border-red-400 m-1 right-0 cursor-pointer"
            onClick={onClose}
          >
            ❌
          </button>
          <div className="mt-8 px-3 shadow-black inset-shadow-xs">
            <h2 className="text-2xl font-bold my-2">Add Sources Block</h2>
            <p>
              Pick a block & configure, any new leads that match rules will be
              added to sequence automatically
            </p>
          </div>

          <h1 className="text-2xl font-bold my-4 p-3">Source</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 p-3 gap-6">
            {sources.map((source, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md rounded-2xl p-5 border hover:bg-gray-200 transition duration-300 cursor-pointer"
                onClick={handleAddSource}
              >
                <div className="text-4xl mb-4">{source.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{source.title}</h3>
                <p className="text-sm text-gray-600">{source.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AddSourcesBlock;
