
const Contact = () => {
  const email = "ifunanyadimma20@gmail.com";

  return (
    <section
      id="contact"
      className="bg-[#F3F0FA] px-6 py-24"
    >
      <div className="mx-auto max-w-5xl text-center">

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#7565AD]">
          Get In Touch
        </p>

        <h2 className="mb-6 text-4xl font-bold text-[#51418F] md:text-5xl">
          Let's Work Together.
        </h2>

        <p className="mx-auto mb-10 max-w-2xl leading-8 text-gray-600">
          I'm always open to discussing new opportunities,
          interesting projects, and collaborations.
          If you have something in mind, feel free to reach out.
        </p>

        <a
        // href="mailto:ifunanyadimma20@gmail.com"
          href={`mailto:${email}`}
        // href={`mailto:${email}?subject=${encodeURIComponent("Portfolio Inquiry")}`}
        //   className="inline-block rounded-full bg-[#51418F] px-8 py-4 font-medium text-white transition hover:bg-[#7565AD]"
        >
          Send Me an Email →
        </a>

        <div className="mt-10 flex justify-center gap-8">
          <a
            href="https://github.com/ifunanyadimma/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-[#51418F] hover:text-[#7565AD]"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/ifunanya-chidimma-2702911b1"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-[#51418F] hover:text-[#7565AD]"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
