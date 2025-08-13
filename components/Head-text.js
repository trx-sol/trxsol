import React from "react";

const HeadText = ({ title, title2, description, align = "center" }) => {
  return (
    <div className={align === "left" ? "text-left" : "text-center"}>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        {title}{" "}
        <span className="bg-gradient-to-r from-trx-purple to-trx-cyan bg-clip-text text-transparent">
          {title2}
        </span>
      </h2>
      <p
        className={`text-xl text-gray-400 max-w-3xl leading-relaxed ${
          align === "left" ? "" : "mx-auto"
        }`}
      >
        {description}
      </p>
    </div>
  );
};

export default HeadText;
