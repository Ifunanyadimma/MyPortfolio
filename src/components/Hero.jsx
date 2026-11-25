import profileImage from "../assets/profile.jpeg"
// import proImage from "../assets/Ifuu.jpeg"

function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-white px-6 pt-28 lg:px-12"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Introduction */}
        <div>
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-neutral-400"></span>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              Frontend Developer
            </p>
          </div>

          <h1 className="text-5xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl">
            Hello, I'm
            <span className="block">Ifunanya</span>
            <span className="block text-neutral-400">Ugwoke.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-600">
            I build responsive, user-focused web applications
            with React, Next.js and Tailwind CSS. I enjoy
            transforming ideas and designs into functional,
            engaging digital experiences.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-[#51418F] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#40336F]"
            >
              Explore My Work →
            </a>

            <a
              href="#contact"
              className="rounded-full border border-[#51418F] px-8 py-4 text-sm font-medium text-[#51418F] transition hover:bg-[#F3F0FA]"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex items-center gap-6 text-sm font-medium text-neutral-500">
            <a
              href="https://github.com/Ifunanyadimma"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-black"
            >
              GitHub ↗
            </a>

            <a
              href="https://linkedin.com/in/ifunanya-chidimma-2702911b1"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-black"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Profile Image */}
<div className="relative mx-auto w-full max-w-md">

  <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-3xl bg-[#F3F0FA]"></div>

  <div className="relative overflow-hidden rounded-3xl border border-[#E8E1F3] bg-[#F3F0FA]">
    <img
      src={profileImage}
      alt="Ifunanya Ugwoke - Frontend Developer"
      className="h-105 w-full object-cover object-center"
    />
  </div>

  <div className="absolute -bottom-5 -left-5 rounded-xl border border-neutral-200 bg-white px-5 py-4 shadow-sm">
    <p className="text-sm font-semibold text-[#51418F]">
      Frontend Developer
    </p>
    <p className="mt-1 text-xs text-neutral-500">
      React.js · Next.js · Tailwind CSS
    </p>
  </div>

</div>

      </div>
    </section>
  );
}

export default Hero;