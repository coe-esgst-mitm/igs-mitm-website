import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#f5efe6] text-[#30271f]"
    >

      {/* =====================================================
          INSTITUTIONAL HEADER
      ====================================================== */}

      <header className="border-t-4 border-[#8b3f1f] bg-[#fffdf9]">

        <div className="mx-auto max-w-[1600px] px-6">

          <div className="flex items-center justify-between gap-6 py-2">

            {/* =================================================
                MIT MYSORE LOGO - LEFT
            ================================================== */}

            <div className="relative h-[90px] w-[175px] shrink-0">
              <Image
                src="/images/mitm-logo.png"
                alt="Maharaja Institute of Technology Mysore"
                fill
                priority
                className="object-contain object-left"
              />
            </div>


            {/* =================================================
                INSTITUTION NAME - CENTER
            ================================================== */}

            <div className="flex flex-1 flex-col items-center justify-center text-center">

              <h2 className="text-[22px] font-extrabold uppercase tracking-[0.08em] text-[#263b59] sm:text-[25px] lg:text-[27px]">
                Maharaja Institute of Technology Mysore
              </h2>

              <p className="mt-1 text-[18px] font-bold uppercase tracking-[0.12em] text-[#713717] sm:text-[20px] lg:text-[21px]">
                Department of Civil Engineering
              </p>

            </div>


            {/* =================================================
                CIVIL ENGINEERING LOGO - RIGHT
            ================================================== */}

            <div className="relative h-[90px] w-[175px] shrink-0">
              <Image
                src="/images/civil-logo.png"
                alt="Department of Civil Engineering"
                fill
                priority
                className="object-contain object-right"
              />
            </div>

          </div>

        </div>

      </header>


      {/* =====================================================
          NAVIGATION
      ====================================================== */}

      <nav className="h-[50px] bg-[#713717] text-white shadow-md">

        <div className="mx-auto flex h-full max-w-[1600px] items-center justify-center">

          <div className="flex h-full items-center gap-9">

            <NavLink href="#home" active>
              Home
            </NavLink>

            <NavLink href="#about">
              About
            </NavLink>

            <NavLink href="#events">
              Events
            </NavLink>

            <NavLink href="#activities">
              Activities
            </NavLink>

            <NavLink href="#gallery">
              Gallery
            </NavLink>

            <NavLink href="#committee">
              Committee
            </NavLink>

            <NavLink href="#contact">
              Contact
            </NavLink>

          </div>

        </div>

      </nav>


      {/* =====================================================
          HERO AREA
      ====================================================== */}

      <main className="relative overflow-hidden">

        {/* Subtle topographic pattern */}

        <div className="pointer-events-none absolute inset-0 opacity-[0.045]">

          <svg
            className="h-full w-full"
            viewBox="0 0 1200 600"
            preserveAspectRatio="none"
          >

            <path
              d="M0 100 C180 20 300 210 500 110 S850 30 1200 150"
              fill="none"
              stroke="#71462f"
              strokeWidth="2"
            />

            <path
              d="M0 180 C180 100 300 290 500 190 S850 110 1200 230"
              fill="none"
              stroke="#71462f"
              strokeWidth="2"
            />

            <path
              d="M0 260 C180 180 300 370 500 270 S850 190 1200 310"
              fill="none"
              stroke="#71462f"
              strokeWidth="2"
            />

            <path
              d="M0 340 C180 260 300 450 500 350 S850 270 1200 390"
              fill="none"
              stroke="#71462f"
              strokeWidth="2"
            />

          </svg>

        </div>


        {/* =================================================
            MAIN HERO GRID
        ================================================== */}

        <div className="relative mx-auto grid max-w-[1600px] lg:grid-cols-[0.94fr_1.06fr]">


          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div className="flex flex-col justify-center px-8 py-7 sm:px-12 lg:px-14 lg:py-7">


            {/* =================================================
                IGS LOGO + CHAPTER NAME
            ================================================== */}

            <div className="flex items-center gap-6">

              {/* IGS LOGO */}

              <div className="relative h-[145px] w-[145px] shrink-0 sm:h-[155px] sm:w-[155px] lg:h-[165px] lg:w-[165px]">

                <Image
                  src="/images/igs-logo.png"
                  alt="Indian Geotechnical Society"
                  fill
                  priority
                  className="object-contain"
                />

              </div>


              {/* CHAPTER TITLE */}

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9b4a27] sm:text-sm">
                  Indian Geotechnical Society
                </p>

                <h1 className="mt-2 text-[44px] font-black uppercase leading-[0.92] tracking-tight text-[#38261d] sm:text-[52px] lg:text-[62px]">

                  IGS MITM

                  <span className="mt-1 block text-[#a84c23]">
                    Student Chapter
                  </span>

                </h1>

              </div>

            </div>


            {/* =================================================
                DIVIDER
            ================================================== */}

            <div className="mt-4 flex items-center">

              <div className="h-[3px] flex-1 bg-[#66371f]" />

              <div className="ml-2 h-2.5 w-2.5 rounded-full bg-[#66371f]" />

            </div>


            {/* =================================================
                TAGLINE
            ================================================== */}

            <p className="mt-4 text-base font-bold text-[#4d5528] sm:text-lg lg:text-[20px]">

              Connecting Students

              <span className="mx-2 text-[#a84c23]">
                •
              </span>

              Knowledge

              <span className="mx-2 text-[#a84c23]">
                •
              </span>

              Geotechnical Engineering

            </p>


            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <p className="mt-4 max-w-[620px] text-sm leading-6 text-[#4d443c] sm:text-base">

              A student chapter dedicated to advancing knowledge in soil
              and geotechnology through technical learning, professional
              interaction, expert lectures, workshops and academic
              activities.

            </p>


            {/* =================================================
                BUTTONS
            ================================================== */}

            <div className="mt-6 flex flex-wrap gap-3">

              {/* UPCOMING EVENTS */}

              <a
                href="#events"
                className="inline-flex items-center gap-2 rounded-md bg-[#ad4d20] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-[#8e3d19]"
              >

                <span className="text-base">
                  ▣
                </span>

                Upcoming Events

              </a>


              {/* ABOUT */}

              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-md border-2 border-[#59602f] bg-[#fffdf9] px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#4d5528] transition hover:bg-[#ebe6d9]"
              >

                <span className="text-base">
                  ♧
                </span>

                About the Chapter

              </a>

            </div>

          </div>


          {/* =================================================
              RIGHT IMAGE COLLAGE
          ================================================== */}

          <div className="relative h-[420px] lg:h-[450px]">


            {/* MAIN FOUNDATION IMAGE */}

            <div className="absolute inset-y-0 left-[4%] right-[28%] overflow-hidden">

              <Image
                src="/images/geotech-foundation.jpg"
                alt="Geotechnical foundation engineering"
                fill
                priority
                className="object-cover"
              />

            </div>


            {/* GEOTECHNICAL SITE */}

            <div className="absolute right-0 top-0 h-[52%] w-[31%] overflow-hidden border-l-[5px] border-[#f5efe6]">

              <Image
                src="/images/geotech-site.jpg"
                alt="Geotechnical site investigation"
                fill
                className="object-cover"
              />

            </div>


            {/* SOIL LAB */}

            <div className="absolute bottom-0 right-0 h-[47%] w-[31%] overflow-hidden border-l-[5px] border-t-[5px] border-[#f5efe6]">

              <Image
                src="/images/soil-lab.jpg"
                alt="Soil mechanics laboratory"
                fill
                className="object-cover"
              />

            </div>


            {/* DIAGONAL DIVIDER */}

            <div className="pointer-events-none absolute inset-y-0 left-[68%] z-10 w-[7px] -skew-x-[15deg] bg-[#f5efe6]" />

          </div>

        </div>

      </main>


      {/* =====================================================
          THREE GEOTECHNICAL FOCUS AREAS
      ====================================================== */}

      <section className="mx-auto max-w-[1500px] px-5 pb-4">

        <div className="grid overflow-hidden rounded-xl border border-[#e0d3c3] bg-[#fffaf3] shadow-sm md:grid-cols-3">


          {/* SOIL MECHANICS */}

          <div className="flex items-center gap-4 px-6 py-4 md:border-r md:border-[#d8c7b4]">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#a94e25] text-lg text-[#a94e25]">
              ◉
            </div>

            <div>

              <h3 className="text-base font-bold uppercase text-[#713717]">
                Soil Mechanics
              </h3>

              <p className="text-xs text-[#5e554d]">
                Understanding Soil Behaviour
              </p>

            </div>

          </div>


          {/* FOUNDATION ENGINEERING */}

          <div className="flex items-center gap-4 border-y border-[#d8c7b4] px-6 py-4 md:border-y-0 md:border-r">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#a94e25] text-lg text-[#a94e25]">
              ▥
            </div>

            <div>

              <h3 className="text-base font-bold uppercase text-[#713717]">
                Foundation Engineering
              </h3>

              <p className="text-xs text-[#5e554d]">
                Safe &amp; Sustainable Foundations
              </p>

            </div>

          </div>


          {/* GEOTECHNOLOGY */}

          <div className="flex items-center gap-4 px-6 py-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#a94e25] text-lg text-[#a94e25]">
              ◈
            </div>

            <div>

              <h3 className="text-base font-bold uppercase text-[#713717]">
                Geotechnology
              </h3>

              <p className="text-xs text-[#5e554d]">
                Innovation &amp; Modern Practice
              </p>

            </div>

          </div>

        </div>

      </section>

    </section>
  );
}


/* =========================================================
   NAVIGATION LINK COMPONENT
========================================================= */

function NavLink({
  href,
  children,
  active = false,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <a
      href={href}
      className={`relative flex h-full items-center px-2 text-sm font-bold uppercase tracking-wide transition ${
        active
          ? "text-white"
          : "text-white/90 hover:text-[#f3c66d]"
      }`}
    >
      {children}

      {active && (
        <span className="absolute bottom-0 left-0 right-0 mx-auto h-[4px] bg-[#e6ad43]" />
      )}
    </a>
  );
}