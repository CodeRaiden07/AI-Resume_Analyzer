import type { Route } from "./+types/home";
// import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumeAnalyzer" },
    { name: "description", content: "Welcome to ResumeAnalyzer!" },
  ];
}

export default function Home() {
  return <main>
    <section className="main-section">
      <div className="page-heading">
        <h1>Track Your Application & Resume Ratings</h1>
        <p>Your one-stop solution for resume analysis and improvement.</p>
      </div>
      
    </section>
  </main>;
}
