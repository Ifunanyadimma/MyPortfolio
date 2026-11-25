
function About() {
  return (
    <section
      id="about"
      className="bg-[#F3F0FA] px-6 py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#51418F]">
            Get to know me
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
            About <span className="text-[#51418F]">Me.</span>
          </h2>
        </div>

        {/* About Content */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left Column */}
          <div>
            <h3 className="max-w-lg text-3xl font-semibold leading-relaxed text-neutral-900 sm:text-4xl">
              Turning ideas into{" "}
              <span className="text-[#51418F]">
                meaningful digital experiences.
              </span>
            </h3>

            <p className="mt-8 text-base leading-8 text-neutral-600">
              I'm a Frontend Developer passionate about building
              responsive, intuitive and user-focused web applications.
              I enjoy transforming ideas and designs into functional
              digital experiences that solve real problems.
            </p>

            <p className="mt-5 text-base leading-8 text-neutral-600">
              My development journey has given me the opportunity
              to work on different projects, collaborate with teams
              and continuously improve my problem-solving skills.
              I enjoy learning new technologies and finding better
              ways to build and improve web applications.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#51418F] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#40336F]"
            >
              Let's Connect <span>→</span>
            </a>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">

            {/* Experience Card */}
            <div className="rounded-2xl border border-[#E4DDF0] bg-white p-7 shadow-sm">
              <p className="text-sm font-medium text-[#7565AD]">
                WHAT I DO
              </p>

              <h4 className="mt-4 text-xl font-semibold text-neutral-900">
                Building for the web
              </h4>

              <p className="mt-3 text-sm leading-7 text-neutral-600">
                I develop modern web interfaces, create reusable
                components, integrate APIs and focus on delivering
                smooth user experiences across different devices.
              </p>
            </div>

            {/* Technologies Card */}
            <div className="rounded-2xl border border-[#E4DDF0] bg-white p-7 shadow-sm">
              <p className="text-sm font-medium text-[#7565AD]">
                MY TECHNICAL FOCUS
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {[
                  "React.js",
                  "Next.js",
                  "JavaScript",
                  "TypeScript",
                  "Tailwind CSS",
                  "HTML5",
                  "CSS3",
                  "REST APIs",
                  "Git & GitHub",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#E4DDF0] bg-[#F3F0FA] px-4 py-2 text-sm font-medium text-[#51418F]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
