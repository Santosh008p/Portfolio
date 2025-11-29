import React from "react";

const skills = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "HTML & CSS", level: 95 },
  { name: "Tailwind CSS", level: 80 },
];

function Skills() {
  return (
    <section id="skills" className="py-12 px-6 md:px-16 bg-[#0a0a0a] text-white">
      <h2 className="text-4xl font-bold text-center mb-8 text-cyan-400">Skills</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-white font-semibold">{skill.name}</span>
              <span className="text-white/70">{skill.level}%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-4">
              <div
                className="bg-cyan-400 h-4 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
