import React from "react";

const LocalLanguage = ({ language }) => {
  const { bengali, english, marma } = language;
  return <div>
    <h1 className="text-md font-semibold my-3">
      <span>{bengali}</span> | <span>{english}</span>
    </h1>
        <iframe className="h-16" width="100%" src={marma} ></iframe>
  </div>;
};

export default LocalLanguage;
