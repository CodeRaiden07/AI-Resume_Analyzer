import Navbar from "~/Components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "Constants";
import ResumeCard from "~/Components/ResumeCard";
import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";
import { useEffect } from "react";
// import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumeAnalyzer" },
    { name: "description", content: "Welcome to ResumeAnalyzer!" },
  ];
}

export default function Home() {

   const { auth } = usePuterStore();
    
    const navigate = useNavigate();

    useEffect(() => {
        if (!auth.isAuthenticated) {
            // Redirect to dashboard or perform any other action
            navigate('/auth?next=/');
        }
    }, [auth.isAuthenticated]);

  return <main className="bg-[url('./image/bg-main.svg')] bg-cover">
    <Navbar />

    
    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track Your Application & Resume Ratings</h1>
        <h2>Review your submissions and get feedback</h2>
      </div>
        

      
    {resumes.length > 0 && (  

      <div className="resumes-section">
        {
          resumes.map((resume) => (
            <ResumeCard key={resume.id} resume={resume} />
          ))
        }
      </div>
    )}

      </section>




   


  </main>;
}
