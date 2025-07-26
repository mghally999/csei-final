import { notFound } from "next/navigation";
import Image from "next/image";
import { placementCards } from "@/data/placements/placements";

export async function generateStaticParams() {
  return placementCards.map((card) => ({
    category: card.link.split("/").pop(), // extracts 'objectives', 'overview', etc.
  }));
}

export default function PlacementDetailPage({ params }) {
  const card = placementCards.find(
    (item) => item.link === `/placements/${params.category}`
  );
  if (!card) return notFound();

  return (
    <div className="main-content">
      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <section className="layout-pt-lg layout-pb-md bg-[#F5F9FF] custom-padding">
          <div className="container">
            <div className="row y-gap-40 items-center md:flex-col-reverse md:text-center">
              {/* Text Block */}
              <div className="col-lg-6 md:w-full" data-aos="fade-left">
                <h2 className="text-30 md:text-24 fw-700 text-[#160643] mb-30">
                  {card.title}
                </h2>
                <p className="text-16 md:text-14 text-[#160643] mb-20 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Image Block */}
              <div className="col-lg-6 md:w-full" data-aos="fade-right">
                <div className="w-full max-w-[520px] mx-auto">
                  <Image
                    src={card.image.url}
                    alt={card.image.alt}
                    width={520}
                    height={480}
                    className="rounded-16 w-full h-auto object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
