
import astronovaImage from "../assets/projects/AstroNova.png";
import biddiusImage from "../assets/projects/Biddius.png";
import fixservImage from "../assets/projects/Fixserv.png";
import medicpadiImage from "../assets/projects/MedicPadi.png";
import votingImage from "../assets/projects/Quorum.png";
import uhelpdeskImage from "../assets/projects/U-HelpDesk.png";

const projects = [
  {
    number: "01",
    name: "U-HelpDesk",
    category: "Multi-Tenant Enterprise Helpdesk Platform",
    description:
      "An enterprise helpdesk platform designed to help organisations manage support services, access knowledge resources and streamline support operations.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    status: "Featured Project",
    image: uhelpdeskImage,
    liveUrl: "",
    githubUrl: "https://github.com/Ifunanyadimma/Uni-HelpDesk",
  },
  {
    number: "02",
    name: "MedicPadi",
    category: "Online Healthcare Consultation Platform",
    description:
      "A healthcare platform connecting patients with doctors and pharmacies, with features for patient management, online consultations and appointment booking.",
    technologies: ["React", "Tailwind CSS", "REST APIs"],
    status: "Featured Project",
    image: medicpadiImage,
    liveUrl: "https://www.medicpadi.com",
    githubUrl: "https://github.com/Colauncha/MedicPadi",
  },
  {
    number: "03",
    name: "AstroNova",
    category: "Planet Explorer · TS Academy Capstone",
    description:
      "An interactive planet exploration platform that allows users to discover planets, explore their features and navigate between different sections using search functionality.",
    technologies: ["HTML", "CSS", "JavaScript"],
    status: "TS Academy Capstone Project",
    image: astronovaImage,
    liveUrl: "https://astronovagroup2-roan.vercel.app",
    githubUrl: "https://github.com/AimalohiTS/AstroNova_Group2",
  },
  {
    number: "04",
    name: "Online Voting System",
    category: "TechCrush Capstone Project",
    description:
      "A category-based voting platform where users can browse voting categories, cast votes and view rankings through a live leaderboard.",
    technologies: ["React", "Tailwind CSS"],
    status: "Completed",
    image: votingImage,
    liveUrl: "",
    githubUrl: "https://github.com/Ifunanyadimma/Quorum",
  },
  {
    number: "05",
    name: "Fixserv",
    category: "Artisan Booking Platform",
    description:
      "A digital marketplace connecting clients with artisans for gadget repairs, featuring artisan profiles, service availability and booking interfaces.",
    technologies: ["React", "Tailwind CSS", "Vite"],
    status: "Completed",
    image: fixservImage,
    liveUrl: "https://www.fixserv.co",
    githubUrl: "https://github.com/Colauncha/Fixserv-Frontend",
  },
  {
    number: "06",
    name: "Biddius",
    category: "Auction Web Application",
    description:
      "An online auction platform where users can list products, participate in bidding and follow auction activities through dynamic updates and countdowns.",
    technologies: ["React", "WebSockets"],
    status: "Completed",
    image: biddiusImage,
    liveUrl: "https://www.biddius.com",
    githubUrl: "https://github.com/Colauncha/Auctora-Frontend",
  }
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#F3F0FA] px-6 py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#51418F]">
            My recent work
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
            Selected <span className="text-[#51418F]">Projects.</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-neutral-600">
            A selection of projects I've worked on, showcasing
            my experience in building responsive, functional
            and user-focused web applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">

          {projects.map((project) => (
            <article
              key={project.number}
              className="group overflow-hidden rounded-2xl border border-[#E4DDF0] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#51418F]/10"
            >

              {/* Project Image */}
              <div className="relative h-56 overflow-hidden bg-[#EDE8F6]">

                <img
                  src={project.image}
                  alt={`${project.name} project screenshot`}
                  className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                />

                <span className="absolute right-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-medium text-[#51418F]">
                  {project.status}
                </span>

              </div>

              {/* Project Information */}
              <div className="p-7">

                <p className="text-xs font-semibold uppercase tracking-wider text-[#7565AD]">
                  {project.category}
                </p>

                <div className="mt-3 flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-semibold text-neutral-900">
                    {project.name}
                  </h3>

                  <span className="text-xl text-[#51418F] transition-transform group-hover:translate-x-1">
                    ↗
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-neutral-600">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-[#F3F0FA] px-3 py-2 text-xs font-medium text-[#51418F]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="mt-7 flex flex-wrap gap-5 border-t border-neutral-100 pt-5">

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-[#51418F] hover:underline"
                    >
                      Live Demo ↗
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-neutral-700 hover:text-[#51418F]"
                    >
                      GitHub ↗
                    </a>
                  )}

                  {!project.liveUrl && !project.githubUrl && (
                    <span className="text-xs text-neutral-400">
                      Project links coming soon
                    </span>
                  )}

                </div>
              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;
