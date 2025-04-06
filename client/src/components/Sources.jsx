import React from "react";

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

const AddSourcesBlock = () => {
  return (
    <div className="absolute top-10 bg-gray-200 z-50 rounded-md">
      <span className="absolute top-0 border rounded-md border-red-400 m-1 right-0">
        ❌
      </span>
      <div className="mt-8 px-3 shadow-black inset-shadow-xs">
        <h2 className="text-2xl font-bold my-2">Add Sources Block</h2>
        <p>
          Pick a block & configure, any new leads that match rules will be added
          to sequence automatically
        </p>
      </div>

      <h1 className="text-2xl font-bold my-4 p-3">Source</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 p-3 gap-6">
        {sources.map((source, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-2xl p-5 border hover:shadow-lg transition duration-300"
          >
            <div className="text-4xl mb-4">{source.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{source.title}</h3>
            <p className="text-sm text-gray-600">{source.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddSourcesBlock;
