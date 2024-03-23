import * as React from "react"
import Layout from "../components/Layout/layout"
import ContactSection from "../components/Contact/ContactSection"
import ProjectSection from "../components/Project/ProjectSection"
import IntroSection from "../components/Home/IntroSection"
import SkillSection from "../components/Skill/SkillSection"

import bioData from '../data/bioData.json'; 
import projectData from '../data/projectData.json'; 
import contactData from '../data/contactData.json'; 
import skillData from '../data/skillData.json'; 


const IndexPage = () => (
  <div className="h-auto w-screen">
    <Layout>
      <IntroSection  bioData={bioData} />
      <SkillSection techtools={skillData} />
      <ProjectSection projectList={projectData} /> 
      <ContactSection contacts={contactData}/>
    </Layout>
  </div>
)

export default IndexPage
