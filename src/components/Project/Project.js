import React from 'react';
// import Img from "gatsby-image"

const Project = ({ project }) => {
  const { title, category, description, image } = project;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <img src={image} alt={title} className="mb-4 rounded-md" />
      {/* <Img fluid={data.image2.childImageSharp.fluid} /> */}

      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-lg text-gray-600 mb-4">{description}</p>
      <p className="text-sm text-gray-500">Category: {category}</p>
      <div className="flex flex-wrap text-gray-500">
        Technologies: {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-dard-500 text-grey text-sm rounded-full px-2 py-1 mr-2 mb-2">{tech}</span>
          ))}
      </div>
    </div>
  );
};

export default Project;

