import Image from "next/image";

export default function UpcomingEvent() {
  return (
    <section
      id="events"
      className="bg-[#fffdf9] px-5 py-14 sm:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-[1250px]">

        {/* =====================================================
            SECTION HEADING
        ====================================================== */}

        <div className="mb-9 text-center">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#a64d26]">
            Upcoming Event
          </p>

          <h2 className="mt-2 text-3xl font-black uppercase text-[#38261d] sm:text-4xl lg:text-5xl">
            Faculty Development Programme
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 bg-[#a84c23]" />

        </div>


        {/* =====================================================
            EVENT CARD
        ====================================================== */}

        <div className="grid overflow-hidden rounded-2xl border border-[#dfd1c1] bg-[#f5efe6] shadow-xl lg:grid-cols-[0.82fr_1.18fr]">


          {/* =================================================
              BROCHURE
          ================================================== */}

          <div className="relative flex min-h-[480px] items-center justify-center bg-[#e8ded1] p-5">

            <div className="relative h-full min-h-[440px] w-full">

              <Image
                src="/images/fdp-poster.jpg"
                alt="National Level Faculty Development Programme on AI in Civil Engineering"
                fill
                className="object-contain"
              />

            </div>

          </div>


          {/* =================================================
              EVENT DETAILS
          ================================================== */}

          <div className="flex flex-col justify-center px-7 py-9 sm:px-10 lg:px-12">

            {/* Event badge */}

            <div className="inline-flex w-fit rounded-full bg-[#713717] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-white">
              National-Level FDP
            </div>


            {/* Main title */}

            <h3 className="mt-5 text-3xl font-black leading-tight text-[#38261d] sm:text-4xl">

              AI in Civil Engineering:

              <span className="block text-[#a84c23]">
                Smart Applications, Sustainable Infrastructure &amp;
                Research Excellence
              </span>

            </h3>


            {/* Organizer */}

            <p className="mt-4 text-sm font-semibold leading-6 text-[#66584d]">

              Organized by the{" "}
              <span className="font-bold text-[#713717]">
                Department of Civil Engineering
              </span>
              , Maharaja Institute of Technology Mysore

            </p>


            {/* =================================================
                EVENT INFORMATION
            ================================================== */}

            <div className="mt-7 grid gap-4 sm:grid-cols-2">


              {/* DATE */}

              <div className="flex items-start gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#ad4d20] text-white">
                  📅
                </div>

                <div>

                  <p className="text-xs font-bold uppercase tracking-wider text-[#8a7563]">
                    Date
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#38261d]">
                    24 – 29 August 2026
                  </p>

                </div>

              </div>


              {/* VENUE */}

              <div className="flex items-start gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#ad4d20] text-white">
                  📍
                </div>

                <div>

                  <p className="text-xs font-bold uppercase tracking-wider text-[#8a7563]">
                    Venue
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#38261d]">
                    MIT Mysore
                  </p>

                  <p className="text-xs text-[#6c5d50]">
                    Offline Programme
                  </p>

                </div>

              </div>

            </div>


            {/* =================================================
                REGISTRATION FEE
            ================================================== */}

            <div className="mt-6 rounded-xl border border-[#d7c5b3] bg-[#fffaf3] p-5">

              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#8a7563]">
                Registration Fee
              </p>

              <div className="mt-3 grid grid-cols-2 gap-4">

                <div>

                  <p className="text-xs text-[#76685d]">
                    MIT Mysore Faculty
                  </p>

                  <p className="mt-1 text-xl font-black text-[#713717]">
                    ₹100
                  </p>

                </div>

                <div>

                  <p className="text-xs text-[#76685d]">
                    Outside Participants
                  </p>

                  <p className="mt-1 text-xl font-black text-[#713717]">
                    ₹250
                  </p>

                </div>

              </div>

            </div>


            {/* =================================================
                BENEFITS
            ================================================== */}

            <div className="mt-5 grid grid-cols-1 gap-2 text-sm text-[#51463d] sm:grid-cols-3">

              <div className="flex items-center gap-2">
                <span className="font-bold text-[#a84c23]">✓</span>
                Lunch &amp; Tea
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold text-[#a84c23]">✓</span>
                Programme Kit
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold text-[#a84c23]">✓</span>
                Certificate
              </div>

            </div>


            {/* =================================================
                PARTICIPATION LIMIT
            ================================================== */}

            <div className="mt-5 flex items-center gap-3 rounded-lg border border-[#e1b59c] bg-[#fff3eb] px-4 py-3">

              <span className="text-lg text-[#ad4d20]">
                ⚠
              </span>

              <p className="text-sm font-bold text-[#713717]">
                Participation is limited to only 50 members.
              </p>

            </div>


            {/* =================================================
                BUTTONS
            ================================================== */}

            <div className="mt-7 flex flex-wrap gap-3">

              <a
                href="https://forms.gle/QD2R5aGGyFBziawT9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-[#ad4d20] px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-[#8e3d19]"
              >
                Register Now
                <span className="ml-2">→</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border-2 border-[#59602f] bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-[#4d5528] transition hover:bg-[#ebe6d9]"
              >
                Contact Us
              </a>

            </div>


            {/* Registration note */}

            <p className="mt-4 text-xs text-[#817368]">
              Registration is subject to availability. Only 50 participants
              will be accommodated.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}