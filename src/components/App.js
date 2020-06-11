import React from "react";
import MainNavBar from "./MainNavBar";
import Header from "./Header";
import ResumeSection from "./ResumeSection";
import Footer from "./Footer";
import ProjectSection from "./ProjectsSection";

function App() {
  return (
    <div className="App">
      <MainNavBar />
      <Header />
      <ResumeSection />
      <ProjectSection />
      <Footer />
    </div>
  );
}

export default App;
