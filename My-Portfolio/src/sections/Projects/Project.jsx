import React from 'react';
import './Project.css';
import shophub from '../../assets/shophub-icon.svg';
import viberr from '../../assets/real-estate-icon.svg';
import movieRecommendation from '../../assets/movie-recommendation.png';
import geminiChatbot from '../../assets/gemini-chatbot.png';
import freshBurger from '../../assets/fresh-burger.png';
import fitlift from '../../assets/fitlift.png';
import hipsster from '../../assets/hipsster.svg';
import ProjectCard from '../../common/projectCard';

const Project = () => {
  return (
    <section id="projects" className="container">
      <h1 className="sectionTitle">Projects</h1>
      <div className="projectsContainer">
        {/* ShopHub E-Commerce Website */}
        <ProjectCard
          src={shophub}
          githubLink="https://github.com/Anshul123B/ShopHub-E-Commerce-Website"
          liveLink="https://shop-hub-e-commerce-website.vercel.app"
          h3="ShopHub"
          p="Full-featured e-commerce platform"
        />

        {/* Real Estate Website */}
        <ProjectCard
          src={viberr}
          githubLink="https://github.com/Anshul123B/Real-Estate-Website"
          liveLink="https://real-estate-website-rouge-seven.vercel.app"
          h3="EstatePro"
          p="Real estate listing platform"
        />

        {/* Movie Recommendation */}
        <ProjectCard
          src={movieRecommendation}
          githubLink="https://github.com/Anshul123B/Movie-Recommendation"
          liveLink="https://movie-recommendation-swart.vercel.app"
          h3="CineMatch"
          p="AI-powered movie recommendations"
        />

        {/* Gemini Chatbot */}
        <ProjectCard
          src={geminiChatbot}
          githubLink="https://github.com/Anshul123B/Gemini-Chatbot"
          liveLink="https://gemini-chatbot-self-six.vercel.app"
          h3="Gemini AI Chat"
          p="Intelligent chatbot assistant"
        />

        {/* Shopping Cart */}
        <ProjectCard
          src={freshBurger}
          githubLink="https://github.com/Anshul123B/Shopping-Cart"
          liveLink=""
          h3="FreshCart"
          p="E-commerce cart application"
        />

        {/* 2048 Game */}
        <ProjectCard
          src={fitlift}
          githubLink="https://github.com/Anshul123B/2048-Game"
          liveLink=""
          h3="TileTwister 2048"
          p="Classic 2048 puzzle game"
        />

        {/* Text-to-Speech */}
        <ProjectCard
          src={hipsster}
          githubLink="https://github.com/Anshul123B/Text-To-Speech-Converter/tree/main/Text%20To%20Speech%20Converter"
          liveLink=""
          h3="SpeakEasy"
          p="Text-to-speech converter tool"
        />
      </div>
    </section>
  )
}

export default Project
