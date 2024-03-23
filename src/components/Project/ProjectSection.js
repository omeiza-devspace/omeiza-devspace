import React, { useState, useEffect, useRef } from 'react';
import Project from './Project';
import Fade from "react-reveal/Fade"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const ProjectSection = ({ projectList }) => {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }


  useEffect(() => {
    setProjects((prevProjects) => [...prevProjects, ...projectList]);
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };
 
  const filteredProjects = selectedCategory
    ? projects.filter(project => project.categories.includes(selectedCategory))
    : projects;


    if (!projects) {
      return null; 
    }

  return (
    <section className="max-w-7xl mx-auto px-6 mt-5 h-auto mb-5 bg-dark-100 py-10 text-white" id="projects">
      <Fade>
        <div className="w-full flex flex-row justify-between align-middle bg-lightblack p-0 rounded-lg xxs:flex-col xs:flex-col sm:flex-row xxs:p-5 lg:p-12">

            <div className="container mx-auto">

              <h2 className="text-3xl font-bold mb-4">Projects</h2>
            
              <div className="flex justify-center mb-4">
                <button
                        className={`m-2 py-2 px-4 rounded-lg border ${selectedCategory === '' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                        onClick={() => handleCategorySelect('')}
                    >
                        All
                </button>
                
                {Array.from(new Set(projects.flatMap(tech => tech.categories))).map((tag, index) => (
                        <button
                        key={index}
                        className={`m-2 py-2 px-4 rounded-lg border ${selectedCategory === tag ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                        onClick={() => handleCategorySelect(tag)}
                        >
                        {tag}
                        </button>
                    ))}

              </div>

              <div className="gap-8">
              
                <Slider {...settings} className="">
                  {filteredProjects.map((project, index) => (
                    <div className="project-card p-2" key={index}>
                      <Project project={project} />
                    </div>
                  ))}
                </Slider>
              </div>

            </div>

        </div>
      </Fade> 
    </section>


  );
};

export default ProjectSection;


