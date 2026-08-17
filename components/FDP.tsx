import Image from "next/image";

export default function FDPPage() {
  return (
    <main className="min-h-screen bg-[#F6F2E7] text-[#0B1D3A]">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="sticky top-0 z-50 border-b border-[#DAD2B8] bg-[#F6F2E7]/95 backdrop-blur-md">

        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-4 py-3 sm:px-8">

          {/* Brand */}

          <a
            href="/"
            className="flex min-w-0 items-center gap-3"
          >

            <div className="relative h-11 w-11 shrink-0">
              <Image
                src="/images/mitm-logo.png"
                alt="Maharaja Institute of Technology Mysore"
                fill
                className="object-contain"
              />
            </div>

            <div className="hidden h-8 w-px bg-[#DAD2B8] sm:block" />

            <div className="min-w-0">

              <div className="font-bold leading-tight text-[#0B1D3A] sm:text-[15px]">
                Maharaja Institute of Technology Mysore
              </div>

              <div className="font-mono text-[9px] tracking-wide text-[#7C8494] sm:text-[10px]">
                DEPT. OF CIVIL ENGINEERING
              </div>

            </div>

          </a>


          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-6 lg:flex">

            <a href="#about" className="text-sm text-[#4C5768] hover:text-[#0B1D3A]">
              About
            </a>

            <a href="#institute" className="text-sm text-[#4C5768] hover:text-[#0B1D3A]">
              Institute
            </a>

            <a href="#committee" className="text-sm text-[#4C5768] hover:text-[#0B1D3A]">
              Committee
            </a>

            <a href="#schedule" className="text-sm text-[#4C5768] hover:text-[#0B1D3A]">
              Schedule
            </a>

            <a href="#register" className="text-sm text-[#4C5768] hover:text-[#0B1D3A]">
              Register
            </a>

          </nav>


          {/* Right */}

          <div className="flex items-center gap-3">

            <div className="relative hidden h-10 w-10 sm:block">
              <Image
                src="/images/civil-logo.png"
                alt="Department of Civil Engineering"
                fill
                className="object-contain"
              />
            </div>

            <a
              href="#register"
              className="bg-[#0B1D3A] px-4 py-2.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-white transition hover:bg-[#FF7A33]"
            >
              Register
            </a>

          </div>

        </div>

      </header>


      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#0B1D3A] text-white">

        {/* Blueprint grid */}

        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(rgba(95,225,238,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(95,225,238,0.09) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        {/* Decorative circles */}

        <div className="pointer-events-none absolute right-[5%] top-[12%] h-64 w-64 rounded-full border border-[#5FE1EE]/20" />

        <div className="pointer-events-none absolute right-[10%] top-[20%] h-40 w-40 rounded-full border border-[#5FE1EE]/10" />


        <div className="relative mx-auto max-w-[1180px] px-5 py-24 sm:px-8 sm:py-32">

          <div className="max-w-[950px]">

            <div className="mb-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#5FE1EE] sm:text-xs">

              <span className="h-px w-6 bg-[#5FE1EE]" />

              Faculty Development Programme · Dept. of Civil Engineering

            </div>


            <h1 className="text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl lg:text-[78px]">

              AI in Civil{" "}

              <span className="text-[#5FE1EE]">
                Engineering
              </span>

            </h1>


            <p className="mt-6 max-w-[650px] text-base leading-7 text-[#B9C6D9] sm:text-lg">

              Smart applications, sustainable infrastructure &amp;
              research excellence — a five-day, hands-on programme
              for Civil Engineering faculty, hosted at MIT Mysore.

            </p>


            {/* Facts */}

            <div className="mt-10 flex max-w-[760px] flex-wrap border-y border-white/15">

              <Fact
                label="Dates"
                value="24 – 29 Aug 2026"
              />

              <Fact
                label="Mode"
                value="Offline · Hands-on"
              />

              <Fact
                label="Registration Fee"
                value="₹250/-"
              />

              <Fact
                label="Deadline"
                value="20 Aug 2026"
              />

            </div>


            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-3">

              <a
                href="https://forms.gle/QD2R5aGGyFBziawT9"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF7A33] px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-[#0B1D3A] transition hover:bg-[#ff9b69]"
              >
                Register Now →
              </a>

              <a
                href="#schedule"
                className="border border-white/30 px-6 py-3.5 font-mono text-xs uppercase tracking-wider text-white transition hover:border-[#5FE1EE] hover:text-[#5FE1EE]"
              >
                View Schedule
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ORGANIZED BY
      ====================================================== */}

      <section className="border-b border-[#DAD2B8] bg-[#EFE9D8]">

        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-center gap-8 px-5 py-6 sm:gap-12">

          <OrgItem
            image="/images/civil-logo.png"
            title="Dept. of Civil Engineering"
            subtitle="MIT Mysore · Organizer"
          />

          <OrgItem
            image="/images/igs-logo.png"
            title="IGS MITM STUDENT CHAPTER"
            subtitle="Collaborator"
          />

          <OrgItem
            image="/images/getskilled-logo.png"
            title="Getskilled™"
            subtitle="Gyaankool Research Labs Pvt. Ltd."
          />

        </div>

      </section>


      {/* =====================================================
          ABOUT FDP
      ====================================================== */}

      <section
        id="about"
        className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 sm:py-28"
      >

        <SectionHeading
          eyebrow="About the programme"
          title="Where structural thinking meets machine intelligence"
        />


        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

          <div className="space-y-5 text-[15px] leading-7 text-[#4C5768]">

            <p>
              AI is becoming a core competency across engineering. In Civil
              Engineering it supports structural health monitoring, computer
              vision, geotechnical prediction, transportation systems,
              sustainable infrastructure, smart water management and
              AI-assisted research. This FDP is specifically designed for
              Civil Engineering faculty, emphasizing applied fluency through
              real engineering problems.
            </p>

            <p>
              The workshop introduces Civil Engineering faculty to the
              fundamentals and practical applications of Artificial
              Intelligence and Machine Learning in modern engineering —
              developing applied understanding through real-world problems
              across structural health monitoring, computer vision,
              geotechnical engineering, transportation systems, sustainable
              infrastructure, smart water management and construction.
            </p>

            <p>
              Participants get hands-on exposure to AI/ML tools for data
              analysis, prediction, classification, optimization and
              image-based applications, while building research capability —
              using AI to support teaching, innovation and interdisciplinary
              problem-solving.
            </p>

          </div>


          <div className="border-t border-[#DAD2B8]">

            <Objective
              number="01"
              text="Understand AI, ML and data analytics for Civil Engineering."
            />

            <Objective
              number="02"
              text="Apply AI to structural, geotechnical and transportation problems."
            />

            <Objective
              number="03"
              text="Explore AI for climate resilience, flood/disaster risk, green buildings, carbon estimation, smart water and digital twins."
            />

            <Objective
              number="04"
              text="Use AI for OBE teaching, literature review, technical writing and research/grant proposals — and complete a mini-capstone."
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          INSTITUTE
      ====================================================== */}

      <section
        id="institute"
        className="border-y border-[#DAD2B8] bg-white"
      >

        <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 sm:py-24">

          <SectionHeading
            eyebrow="About us"
            title="Maharaja Institute of Technology, Mysore"
          />


          <div className="mt-12 grid border border-[#DAD2B8] md:grid-cols-2">

            {/* Institute */}

            <div className="p-7 sm:p-10 md:border-r md:border-[#DAD2B8]">

              <div className="mb-7 overflow-hidden border border-[#DAD2B8]">

                <Image
                  src="/images/mitmysore.jpg"
                  alt="MIT Mysore campus"
                  width={800}
                  height={350}
                  className="h-[180px] w-full object-cover"
                />

              </div>


              <h3 className="text-2xl font-bold">
                The Institute
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#4C5768]">
                Established in 2007 by MET® on a sprawling, peaceful campus
                away from urban disruption, MITM began with 300 seats across
                five engineering disciplines and has grown to over 900
                students across UG, PG and research programs — known for its
                “Teaching Centric” approach and modern infrastructure, with
                50+ buses serving a 60 km radius.
              </p>


              <InfoBlock
                label="Vision"
                text="To be recognized as a premier technical and management institution promoting extensive education fostering research, innovation and entrepreneurial attitude."
              />

              <InfoList
                label="Mission"
                items={[
                  "Empower students with indispensable knowledge through dedicated teaching and collaborative learning.",
                  "Advance extensive research in science, engineering and management disciplines.",
                  "Facilitate entrepreneurial skills through institute-industry collaboration and alumni interaction.",
                  "Instill the need to uphold ethics in every aspect.",
                  "Mould holistic individuals capable of contributing to the advancement of society.",
                ]}
              />

            </div>


            {/* Department */}

            <div className="p-7 sm:p-10">

              <h3 className="text-2xl font-bold">
                Department of Civil Engineering
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#4C5768]">
                The Department offers excellent infrastructure — modern labs,
                classrooms and a library — supported by qualified faculty
                focused on cutting-edge technology and teamwork. It organizes
                seminars, workshops and industry visits, and offers add-on
                courses. Students win awards at national and international
                conferences and hold membership in professional societies
                including ICI, IGS and IEI.
              </p>


              <InfoBlock
                label="Vision"
                text="To be recognized as numero uno in the field of civil engineering education, research and an imparter of enterprising skills."
              />

              <InfoList
                label="Mission"
                items={[
                  "Facilitate technical ingenuity through proficient teaching-learning processes that inspire self-learning.",
                  "Enhance collaborative growth in research and consultancy, delivering solutions to societal needs.",
                  "Instill communication and professional skills to foster industry-academia interaction and entrepreneurial attitude.",
                ]}
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          COMMITTEE
      ====================================================== */}

      <section
        id="committee"
        className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 sm:py-28"
      >

        <SectionHeading
          eyebrow="Organizing structure"
          title="Patrons, advisory panel & coordinators"
        />


        <div className="mt-12 grid border border-[#DAD2B8] sm:grid-cols-2 lg:grid-cols-4">

          <CommitteeColumn
            role="Chief Patron"
            people={[
              ["Dr. Naresh Kumar B.G", "President, MET"],
            ]}
            extraRole="Patrons"
            extraPeople={[
              ["Dr. Murali S", "Principal, MIT Mysore"],
              ["Dr. Vasudev T", "Dean, Administration, MIT Mysore"],
            ]}
          />


          <CommitteeColumn
            role="Advisory Panel"
            people={[
              ["Dr. Hemantha Kumar G", "Vice President, MET"],
              ["Dr. Y. T. Krishne Gowda", "Secretary, MET"],
              ["Dr. D. S. Guru", "Treasurer, MET"],
              ["Dr. Chethan H.K", "Joint Secretary, MET"],
              ["Dr. Ananth R. Koppar", "Trustee, MET"],
            ]}
          />


          <CommitteeColumn
            role="Convener"
            people={[
              ["Dr. C. Ramakrishnegowda", "HOD, Dept. of Civil Engineering"],
            ]}
            extraRole="Host Committee"
            extraPeople={[
              ["", "Faculty members, Dept. of Civil Engineering"],
            ]}
          />


          <CommitteeColumn
            role="Program Coordinators"
            people={[
              ["Prof. D Ashwini", "Asst. Professor, Civil Engg.", "8496860946"],
              ["Prof. Shruthi D G", "Asst. Professor, Civil Engg.", "8553417473"],
              ["Prof. Bhavyashree B N", "Asst. Professor, Civil Engg.", "8880753661"],
              ["Prof. Varun S", "Asst. Professor, Civil Engg.", "8660704855"],
            ]}
          />

        </div>

      </section>


      {/* =====================================================
          SCHEDULE
      ====================================================== */}

      <section
        id="schedule"
        className="bg-[#0B1D3A] text-white"
      >

        <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 sm:py-28">

          <SectionHeading
            dark
            eyebrow="24 – 29 August 2026"
            title="Five days, five layers of applied AI"
            description="Each day builds on the last — from smart sensing through sustainable infrastructure to research-ready workflows."
          />


          <div className="mt-12">

            <ScheduleDay
              number="01"
              day="Day One"
              title="AI Applications in Smart Civil Engineering"
              description="Structural health monitoring; computer vision for site/pavement inspection; geotechnical & transportation AI."
            />

            <ScheduleDay
              number="02"
              day="Day Two"
              title="AI Use-Cases Across Civil Engineering"
              description="Prediction & classification; predictive maintenance; practical civil engineering case studies."
            />

            <ScheduleDay
              number="03"
              day="Day Three"
              title="AI for Sustainable Infrastructure"
              description="Climate resilience; disaster/flood risk; green building; carbon estimation; smart water; digital twins."
            />

            <ScheduleDay
              number="04"
              day="Day Four"
              title="AI-Enabled Teaching, Research & Publication"
              description="OBE course design; AI literature review; technical writing; research productivity; grant/proposal drafting."
            />

            <ScheduleDay
              number="05"
              day="Day Five"
              title="AI & Data Analytics for Civil Engineers"
              description="Python/data analytics; ML basics; predictive modelling; integrated workflow; mini-capstone."
              last
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          REGISTRATION
      ====================================================== */}

      <section
        id="register"
        className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 sm:py-28"
      >

        <SectionHeading
          eyebrow="Registration"
          title="Reserve your seat"
        />


        <div className="relative mt-12 grid border border-[#0B1D3A] bg-white lg:grid-cols-[1fr_1.35fr]">

          <div className="border-b border-[#DAD2B8] p-7 sm:p-10 lg:border-b-0 lg:border-r">

            <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#FF7A33]">
              Faculty Development Programme
            </div>

            <h3 className="mt-4 text-3xl font-bold">
              AI in Civil Engineering
            </h3>

            <p className="mt-4 max-w-[440px] text-sm leading-7 text-[#4C5768]">
              Complete the Google Form to register. Confirmation and further
              joining instructions will be shared by the program coordinators
              ahead of the FDP.
            </p>


            <div className="mt-8 flex flex-wrap gap-8">

              <RegFact label="Fee" value="₹250/-" />

              <RegFact label="Closes" value="20 Aug 2026" />

              <RegFact label="Duration" value="5 Days" />

            </div>


            <a
              href="https://forms.gle/QD2R5aGGyFBziawT9"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex border border-[#0B1D3A] px-5 py-3 font-mono text-[11px] uppercase tracking-wider transition hover:bg-[#0B1D3A] hover:text-white"
            >
              Open Registration Form →
            </a>

          </div>


          {/* QR */}

          <div className="flex flex-wrap justify-center gap-8 bg-[#EFE9D8] p-7 sm:p-10">

            <QRBox
              image="https://lh3.googleusercontent.com/d/10Na-vYjzhBm2yciBs-LB4c4duLCWD8aA"
              label="Scan to"
              title="Register for the FDP"
            />

            <QRBox
              image="https://lh3.googleusercontent.com/d/18QEmfz3RsJgcAft79kx1ljo5d2bv63jz"
              label="Scan for"
              title="Campus Location"
              link="https://www.google.com/maps/search/Maharaja+Institute+of+Technology+Mysore"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="bg-[#122A50] text-[#B9C6D9]">

        <div className="mx-auto max-w-[1180px] px-5 py-14 sm:px-8">

          <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-3">

            <div>

              <div className="flex items-center gap-3">

                <div className="relative h-11 w-11">
                  <Image
                    src="/images/mitm-logo.png"
                    alt="MIT Mysore"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="font-bold text-white">
                  Maharaja Institute of Technology
                  <br />
                  Mysore
                </div>

              </div>

              <p className="mt-5 max-w-[300px] text-sm leading-6">
                An Autonomous Institution, Affiliated to VTU, Belagavi.
                <br />
                Belawadi, Srirangapatna Taluk, Mandya – 571477,
                Karnataka, India
              </p>

            </div>


            <div>

              <FooterHeading>
                Convener
              </FooterHeading>

              <p className="text-sm leading-6">
                <strong className="text-white">
                  Dr. C. Ramakrishnegowda
                </strong>
                <br />
                HOD, Dept. of Civil Engineering
              </p>


              <FooterHeading>
                Organized By
              </FooterHeading>

              <p className="text-sm leading-6">
                Dept. of Civil Engineering, in collaboration with IGS MITM
                STUDENT CHAPTER and Getskilled™.
              </p>

            </div>


            <div>

              <FooterHeading>
                Program Coordinators
              </FooterHeading>

              <p className="text-sm leading-7">
                <strong className="text-white">Prof. D Ashwini</strong>
                <br />
                8496860946
                <br /><br />

                <strong className="text-white">Prof. Shruthi D G</strong>
                <br />
                8553417473
                <br /><br />

                <strong className="text-white">Prof. Bhavyashree B N</strong>
                <br />
                8880753661
                <br /><br />

                <strong className="text-white">Prof. Varun S</strong>
                <br />
                8660704855
              </p>

            </div>

          </div>


          <div className="flex flex-col gap-2 pt-5 text-xs text-[#7C8494] sm:flex-row sm:justify-between">

            <div>
              © 2026 Department of Civil Engineering, MIT Mysore.
              All rights reserved.
            </div>

            <div>
              Faculty Development Programme · 24–29 August 2026
            </div>

          </div>


          {/* Student credit */}

          <div className="pt-5 text-center font-mono text-[10px] tracking-wide text-[#B9C6D9]">

          FDP Webpage developed by{" "}
            <span className="font-semibold text-[#5FE1EE]">
              GL Pratham
            </span>{" "}
            | Civil Engineering, MIT Mysuru

          </div>

        </div>

      </footer>

    </main>
  );
}


/* =========================================================
   SMALL COMPONENTS
========================================================= */

function Fact({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border-r border-white/15 px-5 py-4 first:pl-0 last:border-r-0">
      <div className="mb-1 font-mono text-[9px] uppercase tracking-[0.14em] text-[#5FE1EE]">
        {label}
      </div>

      <div className="font-semibold text-white">
        {value}
      </div>
    </div>
  );
}


function OrgItem({
  image,
  title,
  subtitle,
}: {
  image: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-center gap-3">

      <div className="relative h-11 w-16 shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
        />
      </div>

      <div>
        <div className="text-xs font-semibold text-[#0B1D3A]">
          {title}
        </div>

        <div className="font-mono text-[9px] text-[#7C8494]">
          {subtitle}
        </div>
      </div>

    </div>
  );
}


function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-[650px]">

      <div
        className={`mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] ${
          dark ? "text-[#5FE1EE]" : "text-[#FF7A33]"
        }`}
      >

        <span className="h-px w-5 bg-current" />

        {eyebrow}

      </div>


      <h2
        className={`text-3xl font-bold leading-tight sm:text-4xl ${
          dark ? "text-white" : "text-[#0B1D3A]"
        }`}
      >
        {title}
      </h2>


      {description && (
        <p
          className={`mt-4 text-sm leading-7 ${
            dark ? "text-[#AEBAC9]" : "text-[#4C5768]"
          }`}
        >
          {description}
        </p>
      )}

    </div>
  );
}


function Objective({
  number,
  text,
}: {
  number: string;
  text: string;
}) {
  return (
    <div className="grid grid-cols-[40px_1fr] gap-4 border-b border-[#DAD2B8] py-5">

      <div className="font-mono text-sm font-semibold text-[#FF7A33]">
        {number}
      </div>

      <div className="text-sm leading-6 text-[#0B1D3A]">
        {text}
      </div>

    </div>
  );
}


function InfoBlock({
  label,
  text,
}: {
  label: string;
  text: string;
}) {
  return (
    <div className="mt-7">

      <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[#FF7A33]">
        {label}
      </div>

      <p className="text-sm italic leading-6 text-[#0B1D3A]">
        “{text}”
      </p>

    </div>
  );
}


function InfoList({
  label,
  items,
}: {
  label: string;
  items: string[];
}) {
  return (
    <div className="mt-7">

      <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.12em] text-[#FF7A33]">
        {label}
      </div>

      <ul className="space-y-2">

        {items.map((item) => (
          <li
            key={item}
            className="relative pl-5 text-sm leading-6 text-[#4C5768]"
          >
            <span className="absolute left-0">
              —
            </span>

            {item}
          </li>
        ))}

      </ul>

    </div>
  );
}


function CommitteeColumn({
  role,
  people,
  extraRole,
  extraPeople,
}: {
  role: string;
  people: string[][];
  extraRole?: string;
  extraPeople?: string[][];
}) {
  return (
    <div className="border-b border-[#DAD2B8] bg-[#F6F2E7] p-6 last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0">

      <div className="mb-5 font-mono text-[10px] uppercase tracking-[0.12em] text-[#FF7A33]">
        {role}
      </div>


      {people.map((person) => (
        <Person
          key={person[0]}
          name={person[0]}
          title={person[1]}
          phone={person[2]}
        />
      ))}


      {extraRole && (
        <div className="mb-4 mt-7 font-mono text-[10px] uppercase tracking-[0.12em] text-[#FF7A33]">
          {extraRole}
        </div>
      )}


      {extraPeople?.map((person) => (
        <Person
          key={person[1]}
          name={person[0]}
          title={person[1]}
        />
      ))}

    </div>
  );
}


function Person({
  name,
  title,
  phone,
}: {
  name: string;
  title?: string;
  phone?: string;
}) {
  return (
    <div className="mb-5">

      {name && (
        <div className="text-sm font-semibold leading-5 text-[#0B1D3A]">
          {name}
        </div>
      )}

      {title && (
        <div className="mt-1 text-xs leading-5 text-[#7C8494]">
          {title}
        </div>
      )}

      {phone && (
        <div className="mt-2 inline-block bg-[#0B1D3A] px-2 py-1 font-mono text-[9px] text-[#5FE1EE]">
          {phone}
        </div>
      )}

    </div>
  );
}


function ScheduleDay({
  number,
  day,
  title,
  description,
  last = false,
}: {
  number: string;
  day: string;
  title: string;
  description: string;
  last?: boolean;
}) {
  return (
    <div
      className={`grid gap-5 border-t border-white/15 py-7 md:grid-cols-[120px_1fr] ${
        last ? "border-b" : ""
      }`}
    >

      <div className="font-mono text-sm text-[#5FE1EE]">

        <div className="mb-1 text-3xl font-bold text-white">
          {number}
        </div>

        {day}

      </div>


      <div className="md:border-l md:border-white/15 md:pl-8">

        <h4 className="text-lg font-semibold text-white">
          {title}
        </h4>

        <p className="mt-2 max-w-[700px] text-sm leading-6 text-[#B9C6D9]">
          {description}
        </p>

      </div>

    </div>
  );
}


function RegFact({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>

      <div className="font-mono text-[9px] uppercase tracking-[0.1em] text-[#7C8494]">
        {label}
      </div>

      <div className="mt-1 text-xl font-bold text-[#0B1D3A]">
        {value}
      </div>

    </div>
  );
}


function QRBox({
  image,
  label,
  title,
  link,
}: {
  image: string;
  label: string;
  title: string;
  link?: string;
}) {
  return (
    <div className="flex w-full max-w-[240px] flex-col items-center text-center">

      <div className="mb-3 overflow-hidden border border-[#DAD2B8] bg-white p-3 shadow-sm">

        <img
          src={image}
          alt={title}
          className="h-[190px] w-[190px] object-contain"
        />

      </div>


      <div className="font-mono text-[9px] uppercase tracking-[0.08em] text-[#7C8494]">
        {label}
      </div>

      <div className="mt-1 text-sm font-semibold text-[#0B1D3A]">
        {title}
      </div>


      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-full justify-center border border-[#0B1D3A] px-4 py-2.5 font-mono text-[10px] uppercase tracking-wider text-[#0B1D3A] transition hover:bg-[#0B1D3A] hover:text-white"
        >
          Open Location Map →
        </a>
      )}

    </div>
  );
}


function FooterHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h5 className="mb-4 mt-2 font-mono text-[10px] uppercase tracking-[0.1em] text-[#5FE1EE]">
      {children}
    </h5>
  );
}