export default function Contact() {
  const facultyContacts = [
    {
      name: "Dr. C. Ramakrishnegowda",
      designation: "Head of the Department",
      phone: "9448501565",
      email: "hodcivil_mitmyaore.in",
    },
    {
      name: "Prof. D. Ashwini",
      designation: "Assistant Professor",
      phone: "8496860946",
      email: "ashusujadhan@gmail.com",
    },
    {
      name: "Prof. Varun S",
      designation: "Assistant Professor",
      phone: "8660704855",
      email: "varuns2772@gmail.com",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-[#fffdf9] px-5 py-14 sm:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-[1250px]">

        {/* ================= HEADING ================= */}

        <div className="mb-10 text-center">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#a64d26]">
            Get In Touch
          </p>

          <h2 className="mt-2 text-3xl font-black uppercase text-[#38261d] sm:text-4xl">
            Contact Us
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 bg-[#a84c23]" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#655a51] sm:text-base">
            For information about IGS MITM Student Chapter activities,
            events, programmes and collaborations, please contact the
            Department of Civil Engineering.
          </p>

        </div>


        {/* =====================================================
            FACULTY CONTACT INFORMATION
        ====================================================== */}

        <div className="grid gap-5 md:grid-cols-3">

          {facultyContacts.map((faculty) => (

            <div
              key={faculty.name}
              className="rounded-2xl border border-[#dfd1c1] bg-[#f5efe6] p-7 shadow-sm"
            >

              {/* Name */}

              <h3 className="text-xl font-black text-[#38261d]">
                {faculty.name}
              </h3>


              {/* Designation */}

              <p className="mt-2 text-xs font-bold uppercase tracking-[0.15em] text-[#a64d26]">
                {faculty.designation}
              </p>


              <div className="mt-5 h-px bg-[#dccdbc]" />


              {/* Phone */}

              <div className="mt-5">

                <p className="text-xs font-bold uppercase tracking-wider text-[#8a7563]">
                  Phone
                </p>

                <p className="mt-1 text-sm font-semibold text-[#713717]">
                  +91 {faculty.phone}
                </p>

              </div>


              {/* Email */}

              <div className="mt-4">

                <p className="text-xs font-bold uppercase tracking-wider text-[#8a7563]">
                  Email
                </p>

                <p className="mt-1 break-all text-sm font-semibold text-[#713717]">
                  {faculty.email}
                </p>

              </div>

            </div>

          ))}

        </div>


        {/* =====================================================
            LOCATION + MAP
        ====================================================== */}

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">


          {/* ================= INSTITUTION INFO ================= */}

          <div className="rounded-2xl bg-[#713717] p-8 text-white">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e6b45d]">
              IGS MITM Student Chapter
            </p>

            <h3 className="mt-3 text-2xl font-black">
              Department of Civil Engineering
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#f0e3d6]">
              Maharaja Institute of Technology Mysore
            </p>


            <div className="mt-8 border-t border-white/20 pt-6">

              <p className="text-xs font-bold uppercase tracking-wider text-[#e6b45d]">
                Address
              </p>

              <p className="mt-2 text-sm leading-7 text-[#f0e3d6]">
                Maharaja Institute of Technology Mysore
                <br />
                Belagola, Mysore – 570 028
                <br />
                Karnataka, India
              </p>

            </div>


            <div className="mt-7 border-t border-white/20 pt-6">

              <p className="text-xs font-bold uppercase tracking-wider text-[#e6b45d]">
                Department
              </p>

              <p className="mt-2 text-sm text-[#f0e3d6]">
                Department of Civil Engineering
              </p>

            </div>


            <div className="mt-7 border-t border-white/20 pt-6">

              <p className="text-xs font-bold uppercase tracking-wider text-[#e6b45d]">
                Professional Society
              </p>

              <p className="mt-2 text-sm text-[#f0e3d6]">
                Indian Geotechnical Society
              </p>

            </div>

          </div>


          {/* ================= ACTUAL GOOGLE MAP ================= */}

          <div className="overflow-hidden rounded-2xl border border-[#dfd1c1] bg-[#f5efe6] shadow-sm">

            <div className="border-b border-[#dfd1c1] px-6 py-4">

              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#a64d26]">
                Find Us
              </p>

              <h3 className="mt-1 text-xl font-black text-[#38261d]">
                Maharaja Institute of Technology Mysore
              </h3>

            </div>


            <div className="h-[360px] w-full">

              <iframe
                src="https://www.google.com/maps?q=Maharaja+Institute+of+Technology+Mysore,+Belagola,+Mysore,+Karnataka&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Maharaja Institute of Technology Mysore Location"
              />

            </div>

          </div>

        </div>


        {/* ================= FDP REGISTRATION ================= */}

        <div className="mt-8 rounded-2xl border border-[#dfd1c1] bg-[#f5efe6] p-7 text-center">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a64d26]">
            Upcoming Event
          </p>

          <h3 className="mt-2 text-2xl font-black text-[#38261d]">
            One Week National-Level FDP on AI in Civil Engineering
          </h3>

          <p className="mt-2 text-sm text-[#655a51]">
            24 – 29 August 2026 &nbsp; • &nbsp; MIT Mysore
          </p>

          <a
            href="https://forms.gle/QD2R5aGGyFBziawT9"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block rounded-md bg-[#ad4d20] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#8e3d19]"
          >
            Register for FDP
          </a>

        </div>

      </div>
    </section>
  );
}