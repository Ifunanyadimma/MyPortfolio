
const skillCategories = [
  {
    number: "01",
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
  },
  {
    number: "02",
    title: "Frameworks & Libraries",
    description: "Creating modern applications with reusable components.",
    skills: ["React.js", "Next.js", "Tailwind CSS", "React Router"],
  },
  {
    number: "03",
    title: "API Integration",
    description: "Connecting frontend applications with backend services.",
    skills: ["REST APIs", "API Integration", "JSON"],
  },
  {
    number: "04",
    title: "Tools & Platforms",
    description: "Development, collaboration and deployment tools.",
    skills: ["Git", "GitHub", "Vite", "Netlify", "npm"],
  },
  {
    number: "05",
    title: "Professional Skills",
    description: "Working effectively with teams and solving problems.",
    skills: [
      "Problem Solving",
      "Team Collaboration",
      "Agile / Scrum",
      "Communication",
      "Adaptability",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-white px-6 py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#51418F]">
            What I work with
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
            My Skills & <span className="text-[#51418F]">Expertise.</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-neutral-600">
            My technical skills and tools enable me to build
            responsive, functional and user-focused web applications.
            I'm also continuously learning and improving my abilities.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {skillCategories.map((category) => (
            <div
              key={category.number}
              className="group rounded-2xl border border-neutral-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#C9BFE2] hover:shadow-lg hover:shadow-[#51418F]/5"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#7565AD]">
                  {category.number}
                </span>

                <span className="h-2 w-2 rounded-full bg-[#7565AD]"></span>
              </div>

              <h3 className="mt-7 text-xl font-semibold text-neutral-900">
                {category.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-neutral-500">
                {category.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-[#F3F0FA] px-3 py-2 text-xs font-medium text-[#51418F]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>

        {/* Closing Text */}
        <div className="mt-12 rounded-2xl bg-[#F3F0FA] p-8 text-center sm:p-10">
          <h3 className="text-xl font-semibold text-neutral-900">
            Always learning. Always building.
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-neutral-600">
            I believe in continuous improvement, exploring new
            technologies and building solutions that make a difference.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Skills;
