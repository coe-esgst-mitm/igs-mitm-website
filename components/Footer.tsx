export default function Footer() {
  return (
    <footer className="bg-[#3b2115] text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-[1250px] px-5 py-12 sm:px-8">

        <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_0.8fr]">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-4">

              <img
                src="/images/igs-logo.png"
                alt="Indian Geotechnical Society"
                className="h-16 w-16 object-contain"
              />

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e6b45d]">
                  Indian Geotechnical Society
                </p>

                <h2 className="mt-1 text-xl font-black">
                  IGS MITM Student Chapter
                </h2>
              </div>

            </div>

            <p className="mt-5 max-w-md text-sm leading-6 text-[#e5d7cc]">
              A student chapter of the Indian Geotechnical Society under the
              Department of Civil Engineering, Maharaja Institute of
              Technology Mysore.
            </p>

          </div>


          {/* Quick Links */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[#e6b45d]">
              Quick Links
            </h3>

            <div className="mt-5 space-y-3">

              <a
                href="#home"
                className="block text-sm text-[#e5d7cc] hover:text-white"
              >
                Home
              </a>

              <a
                href="#about"
                className="block text-sm text-[#e5d7cc] hover:text-white"
              >
                About
              </a>

              <a
                href="#events"
                className="block text-sm text-[#e5d7cc] hover:text-white"
              >
                Events
              </a>

              <a
                href="#activities"
                className="block text-sm text-[#e5d7cc] hover:text-white"
              >
                Activities
              </a>

              <a
                href="#gallery"
                className="block text-sm text-[#e5d7cc] hover:text-white"
              >
                Gallery
              </a>

              <a
                href="#committee"
                className="block text-sm text-[#e5d7cc] hover:text-white"
              >
                Committee
              </a>

              <a
                href="#contact"
                className="block text-sm text-[#e5d7cc] hover:text-white"
              >
                Contact
              </a>

            </div>

          </div>


          {/* Department */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[#e6b45d]">
              Department
            </h3>

            <p className="mt-5 text-sm leading-6 text-[#e5d7cc]">
              Department of Civil Engineering
              <br />
              Maharaja Institute of Technology Mysore
              <br />
              Belagola, Mysore – 570 028
              <br />
              Karnataka, India
            </p>

            <a
              href="#contact"
              className="mt-5 inline-block text-sm font-bold text-[#e6b45d] hover:text-white"
            >
              Contact the Chapter →
            </a>

          </div>

        </div>

      </div>


      {/* Copyright */}
      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-[1250px] flex-col gap-2 px-5 py-5 text-center text-xs text-[#cdbdb0] sm:px-8 md:flex-row md:items-center md:justify-between md:text-left">

          <p>
            © 2026 IGS MITM Student Chapter. All rights reserved.
          </p>

          <p>
            Department of Civil Engineering • MIT Mysore
          </p>

        </div>


        {/* Credit */}
        <div className="pb-4 text-center">

          <p className="text-[10px] tracking-wide text-white/40">
            Website prepared by CoE-ESGST
          </p>

        </div>

      </div>

    </footer>
  );
}