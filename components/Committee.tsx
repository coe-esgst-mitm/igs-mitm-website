export default function Committee() {
  const facultyMembers = [
    {
      name: "Dr. C. Ramakrishnegowda",
      designation: "Head of the Department",
      department: "Department of Civil Engineering",
    },
    {
      name: "Prof. D. Ashwini",
      designation: "Assistant Professor",
      department: "Department of Civil Engineering",
    },
    {
      name: "Prof. Varun S",
      designation: "Assistant Professor",
      department: "Department of Civil Engineering",
    },
  ];

  return (
    <section
      id="committee"
      className="bg-[#f5efe6] px-5 py-14 sm:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-[1250px]">

        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#a64d26]">
            Our Team
          </p>

          <h2 className="mt-2 text-3xl font-black uppercase text-[#38261d] sm:text-4xl">
            Chapter Committee
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 bg-[#a84c23]" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#655a51] sm:text-base">
            Faculty members and students working together to coordinate
            the activities of the IGS MITM Student Chapter.
          </p>
        </div>

        {/* Faculty Members */}
        <div className="grid gap-5 md:grid-cols-3">

          {facultyMembers.map((member) => (
            <div
              key={member.name}
              className="rounded-xl border border-[#dfd1c1] bg-[#fffdf9] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.15em] text-[#a64d26]">
                {member.designation}
              </p>

              <h3 className="mt-2 text-xl font-black text-[#38261d]">
                {member.name}
              </h3>

              <p className="mt-2 text-sm text-[#6a5e55]">
                {member.department}
              </p>

              <div className="mt-5 h-1 w-10 bg-[#a84c23]" />
            </div>
          ))}

        </div>

        {/* Student Committee */}
        <div className="mt-8 rounded-2xl bg-[#713717] p-7 text-white sm:p-9">

          <div className="text-center">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e6b45d]">
              Student Team
            </p>

            <h3 className="mt-2 text-2xl font-black">
              IGS MITM Student Committee
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#f0e3d6]">
              Student office bearers and committee members will be updated
              here after the official committee is finalized.
            </p>

          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">

            {[
              "President",
              "Vice President",
              "Secretary",
              "Joint Secretary",
              "Treasurer",
            ].map((role) => (
              <div
                key={role}
                className="rounded-lg border border-white/15 bg-white/10 p-4 text-center"
              >
                <p className="text-xs font-bold uppercase tracking-wide text-[#e6b45d]">
                  {role}
                </p>

                <p className="mt-2 text-sm text-[#f0e3d6]">
                  To be updated
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}