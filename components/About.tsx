export default function About() {
  return (
    <section
      id="about"
      className="bg-[#f5efe6] px-5 py-14 sm:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-[1250px]">

        {/* Section Heading */}
        <div className="mb-10 text-center">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#a64d26]">
            About Us
          </p>

          <h2 className="mt-2 text-3xl font-black uppercase text-[#38261d] sm:text-4xl">
            IGS MITM Student Chapter
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 bg-[#a84c23]" />

        </div>


        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">

          {/* =================================================
              ABOUT IGS
          ================================================== */}

          <div className="rounded-2xl border border-[#dfd1c1] bg-[#fffdf9] p-7 shadow-sm sm:p-9">

            <div className="flex items-start gap-5">

              {/* Icon */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#a94e25] text-2xl text-[#a94e25]">
                ◉
              </div>

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a64d26]">
                  Indian Geotechnical Society
                </p>

                <h3 className="mt-2 text-2xl font-black text-[#38261d]">
                  About the Chapter
                </h3>

              </div>

            </div>


            <div className="mt-6 space-y-4 text-[15px] leading-7 text-[#5b5047]">

              <p>
                The <strong className="text-[#713717]">
                  Indian Geotechnical Society (IGS)
                </strong> is a professional body dedicated to the advancement
                of knowledge and practice in geotechnical engineering,
                including soil mechanics, foundation engineering and related
                areas of geotechnology.
              </p>

              <p>
                The <strong className="text-[#713717]">
                  IGS MITM Student Chapter
                </strong>, under the Department of Civil Engineering,
                Maharaja Institute of Technology Mysore, provides students
                with opportunities to develop technical knowledge and engage
                with contemporary developments in geotechnical engineering.
              </p>

              <p>
                Through technical programmes, expert interactions, workshops,
                faculty and student activities, the chapter encourages
                learning beyond the classroom and promotes professional
                development among aspiring civil engineers.
              </p>

            </div>

          </div>


          {/* =================================================
              OUR VISION
          ================================================== */}

          <div className="rounded-2xl bg-[#713717] p-7 text-white shadow-sm sm:p-9">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e6b45d]">
              Our Vision
            </p>

            <h3 className="mt-3 text-2xl font-black">
              Learning Beyond the Classroom
            </h3>

            <p className="mt-5 text-[15px] leading-7 text-[#f0e3d6]">
              To create a vibrant student community that connects academic
              learning with professional practice and emerging developments
              in soil and geotechnology.
            </p>


            {/* Objectives */}
            <div className="mt-7 border-t border-white/20 pt-6">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e6b45d]">
                What We Aim To Do
              </p>

              <div className="mt-4 space-y-3">

                <Objective text="Promote interest in geotechnical engineering." />

                <Objective text="Encourage technical learning and knowledge sharing." />

                <Objective text="Facilitate interaction with experts and professionals." />

                <Objective text="Provide exposure to modern geotechnical practices." />

                <Objective text="Develop professional and collaborative skills." />

              </div>

            </div>

          </div>

        </div>


        {/* =================================================
            THREE AREAS
        ================================================== */}

        <div className="mt-8 grid gap-5 md:grid-cols-3">

          <FocusCard
            title="Soil Mechanics"
            description="Understanding soil properties, behaviour and engineering applications."
          />

          <FocusCard
            title="Foundation Engineering"
            description="Exploring principles of safe, economical and sustainable foundations."
          />

          <FocusCard
            title="Geotechnology"
            description="Learning about emerging technologies and modern geotechnical practices."
          />

        </div>

      </div>
    </section>
  );
}


/* =========================================================
   OBJECTIVE
========================================================= */

function Objective({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">

      <span className="mt-1 text-[#e6b45d]">
        ✓
      </span>

      <p className="text-sm leading-6 text-[#f0e3d6]">
        {text}
      </p>

    </div>
  );
}


/* =========================================================
   FOCUS CARD
========================================================= */

function FocusCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-[#dfd1c1] bg-[#fffdf9] p-6">

      <div className="mb-4 h-1 w-12 bg-[#a84c23]" />

      <h3 className="text-lg font-black uppercase text-[#713717]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[#655a51]">
        {description}
      </p>

    </div>
  );
}