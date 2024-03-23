import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import ContactLink from "../Contact/ContactLink";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StaticImage } from "gatsby-plugin-image";

const IntroSection = ({bioData}) => {

  return (
    <section className="max-w-7xl mx-auto px-6 mt-5 h-auto mb-5 py-10" id="about">
      <Fade bottom>

        {bioData && (
          <div className="w-full flex flex-row justify-between align-middle bg-lightblack p-10 rounded-lg xxs:flex-col xs:flex-col sm:flex-row xxs:p-5 lg:p-12">

            <div className="w-1/4 overflow-hidden flex align-middle justify-center xxs:hidden sm:block mr-5">
              <StaticImage
                className="rounded-none w-auto h-auto"
                src= "https://media.licdn.com/dms/image/D4E35AQFE7m3fZrfpkQ/profile-framedphoto-shrink_400_400/0/1711025592530?e=1711796400&v=beta&t=cTipPQHz6HbDHg5Gpzz4yWRJ5n349Z8lLufcNA485-E"

                // src=`${bioData.imageSrc}`
                alt={bioData.imageAlt}
                quality={75}
                placeholder="blurred"
              />
            </div>
            <div className="w-3/4 xxs:w-full xs:w-full sm:w-3/4">
              <h2 className="text-white text-3xl font-bold font-poppins">Profile:</h2>

              <div className="font-poppins text-white font-semibold text-2xl leading-10 xxs:text-xs xxs:font-normal sm:text-2xl">
                {bioData.profile}
              </div>
              <div className="mt-10">
                <h1 className="text-white text-3xl font-bold font-poppins">
                  {bioData.name}
                </h1>
                <h1 className="text-white text-sm font-semibold font-poppins opacity-50">
                  {bioData.position}
                </h1>
              </div>
              <div className="">
                {/* Render contact links */}
                {bioData.contactLinks.map((link, index) => (
                  <ContactLink
                    key={index}
                    icon={<FontAwesomeIcon icon={link.icon} />}
                    url={link.url}
                    text={link.text}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </Fade>
    </section>
  );
};

export default IntroSection;
