import React, { useState, useEffect } from 'react';
import Fade from "react-reveal/Fade"

const SkillSection = ({techtools}) => {
  const [technologies, setTechnologies] = useState([]);
  const [selectedTag, setSelectedTag] = useState('');

  useEffect(() => {
    setTechnologies(techtools)
  }, []);

  const handleTagSelect = (tag) => {
    setSelectedTag(tag);
  };

  if (!techtools) {
    return null; // or render a loading indicator, error message, etc.
  }

  const filteredTechnologies = selectedTag
    ? technologies.filter((tech) => tech.tags.includes(selectedTag))
    : technologies;


  return (
    <section className="max-w-7xl mx-auto px-6 mt-10 h-auto mb-10 bg-dark-100 py-10 text-white" id="skills">
        <Fade bottom>
            <div className="w-full flex flex-row justify-between align-middle bg-lightblack p-10 rounded-lg xxs:flex-col xs:flex-col sm:flex-row xxs:p-5 lg:p-12">

                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Technologies</h2>
                    <div className="flex flex-wrap justify-center mb-4">
                    <button
                        className={`m-2 py-2 px-4 rounded-lg border ${selectedTag === '' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                        onClick={() => handleTagSelect('')}
                    >
                        All
                    </button>
                    {Array.from(new Set(techtools.flatMap(tech => tech.tags))).map((tag, index) => (
                        <button
                        key={index}
                        className={`m-2 py-2 px-4 rounded-lg border ${selectedTag === tag ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                        onClick={() => handleTagSelect(tag)}
                        >
                        {tag}
                        </button>
                    ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredTechnologies.map((tech, index) => (
                        <div key={index} className="border p-4 rounded-lg">
                        <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                        <ul>
                            {tech.skills.map((skill, index) => (
                            <li key={index} className="list-disc ml-4">{skill}</li>
                            ))}
                        </ul>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </Fade>
    </section>
  );
};

export default SkillSection;






{/* <div className="max-w-7xl mx-auto ">
<Fade bottom cascade>
  <div className="w-full flex flex-row justify-between mt-10 xxs:flex-col xs:flex-col sm:flex-row">
    <div className="rounded-xl w-full h-52 flex flex-col content-center justify-center align-middle text-center m-5 bg-gradient-to-r from-lightblack to-lightblack hover:from-purple hover:to-pink transition duration-500 ease-in-out">
      <h1 className="text-white text-5xl">2.4M</h1>
      <h3 className="text-white">Days turn around</h3>
    </div>
    <div className="rounded-xl w-full h-52 flex flex-col content-center justify-center align-middle text-center m-5 bg-gradient-to-r from-lightblack to-lightblack hover:from-purple hover:to-pink transition duration-500 ease-in-out">
      <h1 className="text-white text-5xl">7M</h1>
      <h3 className="text-white">Days turn around</h3>
    </div>
    <div className="rounded-xl w-full h-52 flex flex-col content-center justify-center align-middle text-center m-5 bg-gradient-to-r from-lightblack to-lightblack hover:from-purple hover:to-pink transition duration-500 ease-in-out">
      <h1 className="text-white text-5xl">7.4%</h1>
      <h3 className="text-white">Days turn around</h3>
    </div>
    <div className="rounded-xl w-full h-52 flex flex-col content-center justify-center align-middle text-center m-5 bg-gradient-to-r from-lightblack to-lightblack hover:from-purple hover:to-pink transition duration-500 ease-in-out">
      <h1 className="text-white text-5xl">49K</h1>
      <h3 className="text-white">Days turn around</h3>
    </div>
  </div>
</Fade> */}