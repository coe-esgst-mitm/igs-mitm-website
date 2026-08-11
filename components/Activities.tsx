export default function Activities() {
  const activities = [
    {
      number: "01",
      title: "Technical Talks",
      description:
        "Expert lectures and technical sessions covering current developments, practices and challenges in geotechnical engineering.",
    },
    {
      number: "02",
      title: "Workshops & FDPs",
      description:
        "Hands-on workshops, faculty development programmes and practical learning sessions on emerging engineering technologies.",
    },
    {
      number: "03",
      title: "Expert Interaction",
      description:
        "Opportunities to interact with industry professionals, researchers and experienced geotechnical engineering practitioners.",
    },
    {
      number: "04",
      title: "Site Visits",
      description:
        "Exposure to real-world construction, foundation, soil investigation and geotechnical engineering projects.",
    },
    {
      number: "05",
      title: "Competitions",
      description:
        "Technical competitions, quizzes, presentations and innovative activities that encourage students to apply their knowledge.",
    },
    {
      number: "06",
      title: "Student Development",
      description:
        "Activities that strengthen technical knowledge, communication, teamwork, leadership and professional skills.",
    },
  ];

  return (
    <section
      id="activities"
      className="bg-[#f5efe6] px-5 py-14 sm:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-[1250px]">

        {/* ================= SECTION HEADING ================= */}

        <div className="mb-10 text-center">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#a64d26]">
            What We Do
          </p>

          <h2 className="mt-2 text-3xl font-black uppercase text-[#38261d] sm:text-4xl">
            Chapter Activities
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 bg-[#a84c23]" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#655a51] sm:text-base">
            The IGS MITM Student Chapter provides opportunities for students
            to learn, interact, experiment and develop professional skills
            beyond the classroom.
          </p>

        </div>


        {/* ================= ACTIVITIES GRID ================= */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {activities.map((activity) => (

            <div
              key={activity.number}
              className="group relative overflow-hidden rounded-xl border border-[#dfd1c1] bg-[#fffdf9] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              {/* Number */}

              <div className="flex items-center justify-between">

                <span className="text-3xl font-black text-[#d8c7b5]">
                  {activity.number}
                </span>

                <span className="h-1 w-10 bg-[#a84c23] transition-all duration-300 group-hover:w-16" />

              </div>


              {/* Title */}

              <h3 className="mt-5 text-xl font-black uppercase text-[#713717]">
                {activity.title}
              </h3>


              {/* Description */}

              <p className="mt-3 text-sm leading-6 text-[#655a51]">
                {activity.description}
              </p>


              {/* Bottom accent */}

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#a84c23] transition-all duration-300 group-hover:w-full" />

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}