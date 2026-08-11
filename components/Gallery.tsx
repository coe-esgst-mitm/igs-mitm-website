import Image from "next/image";

const galleryItems = [
  {
    image: "/images/geotech-foundation.jpg",
    title: "Geotechnical Engineering",
    category: "Field & Foundation",
  },
  {
    image: "/images/geotech-site.jpg",
    title: "Site Investigation",
    category: "Field Activity",
  },
  {
    image: "/images/soil-lab.jpg",
    title: "Soil Mechanics Laboratory",
    category: "Laboratory",
  },
  {
    image: "/images/fdp-poster.jpg",
    title: "Faculty Development Programme",
    category: "Upcoming Event",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-[#fffdf9] px-5 py-14 sm:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-[1250px]">

        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#a64d26]">
            Our Moments
          </p>

          <h2 className="mt-2 text-3xl font-black uppercase text-[#38261d] sm:text-4xl">
            Gallery
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 bg-[#a84c23]" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#655a51] sm:text-base">
            A glimpse into the learning, technical activities and
            geotechnical experiences of the IGS MITM Student Chapter.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid auto-rows-[220px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {galleryItems.map((item, index) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-xl border border-[#dfd1c1] bg-[#e8ded1] shadow-sm ${
                index === 0
                  ? "sm:col-span-2 sm:row-span-2"
                  : ""
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent px-5 pb-5 pt-14">

                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#e9b65d]">
                  {item.category}
                </p>

                <h3 className="mt-1 text-lg font-bold text-white">
                  {item.title}
                </h3>

              </div>
            </div>
          ))}

        </div>

        {/* Future gallery note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-[#75695f]">
            More moments from IGS MITM activities will be added here.
          </p>
        </div>

      </div>
    </section>
  );
}