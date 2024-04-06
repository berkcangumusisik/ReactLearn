import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML + CSS",
    level: "Advanced",
    color: "orange",
  },
  {
    skill: "JavaScript",
    level: "Intermediate",
    color: "yellow",
  },
  {
    skill: "React",
    level: "Beginner",
    color: "skyblue",
  },
  {
    skill: "C#",
    level: "Beginner",
    color: "purple",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return (
    <img
      src="https://avatars.githubusercontent.com/u/75336900?v=4"
      alt="avatar"
      height={500}
      className="avatar"
    />
  );
}

function Intro() {
  return (
    <div>
      <h1>Berkcan Gümüşışık</h1>
      <p>
        Gazi Üniversitesi Bilgisayar ve Öğretim Teknolojileri Eğitimi bölümünü
        bitirdikten sonra YetGen'de Full Time çalışmaya başladım. Full stack
        developer olma yolunda ilerliyorum. Şu an React ve C# öğreniyorum
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "Beginner" && "⭐"}
        {level === "Intermediate" && "⭐⭐"}
        {level === "Advanced" && "⭐⭐⭐"}
      </span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
