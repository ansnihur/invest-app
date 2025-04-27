import React from 'react'
import HeroSection from '../../components/homeparts/HeroSection'
import Contacts from '../../components/contacts/Contacts'
// import ProjectsSection from '../../components/ProjectsSection/ProjectsSection'
// import BenefitsSection from '../../components/BenefitsSection/BenefitsSection'

const Home = () => {
  return (
    <>
      <HeroSection />
      {/* <BenefitsSection /> */}
      {/* <ProjectsSection /> */}
      {/* Контактна форма замість помилкового <Contacts /> */}
      <section id="contacts">
        <Contacts />
      </section>
    </>
  )
}

export default Home;
