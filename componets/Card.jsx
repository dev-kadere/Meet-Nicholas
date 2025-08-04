import React from "react";

const ProjectCard = ({ image, title, description }) => {
  return (
    <div className="min-w-[340px] max-h-[460px] bg-white rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full h-80 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold capitalize">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
