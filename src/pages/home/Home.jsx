import React from 'react'
import HeroSection from '../../components/homeparts/HeroSection'
// import Contacts from '../../pages/contacts/Contacts'
import DescriptionText from '../../components/homeparts/DescriptionSection'
import BackgroundGradient from '../../components/background/BackgroundGradient'
import PeopleSection from '../../components/homeparts/PeopleSection'
import ProjectsSection from '../../components/homeparts/ProjectsSection'
import TrustSection from '../../components/homeparts/TrustSection'

const Home = () => {
  return (
    <>
      <BackgroundGradient />
      <HeroSection />
      <DescriptionText />
      <PeopleSection />
      <ProjectsSection />
      {/* <ContactsSection /> */}
      <TrustSection />
    </>
  )
}

export default Home;
