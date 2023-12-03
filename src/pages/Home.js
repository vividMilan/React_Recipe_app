import React from 'react'
import ChefSection from "../components/ChefSection";
import HeroSection from "../components/HeroSection";
import NewSkillsSection from "../components/NewSkillsSection";
import QuoteSection from "../components/QuoteSection";

const Home = () => {
  return (
    <>
        <HeroSection />
        <NewSkillsSection />
        <QuoteSection />
        <ChefSection />
    </>
  )
}

export default Home