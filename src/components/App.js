import React, { Fragment } from "react";
import MainNavBar from "./MainNavBar";
import Header from "./Header";
import ResumeSection from "./ResumeSection";
import Footer from "./Footer";
import ProjectSection from "./ProjectsSection";
import { useContact } from "../hooks/hooks";
import spinner from "../images/spinner.gif";

function App() {
  const user = useContact();
  return (
    <div className="App">
      {user.id ? (
        <Fragment>
          <MainNavBar />
          <Header user={user} />
          <ResumeSection />
          <ProjectSection />
          <Footer />
        </Fragment>
      ) : (
        <div className="loader">
         <img src={spinner} alt={"spinner"}/>
        </div>
      )}
    </div>
  );
}

export default App;
