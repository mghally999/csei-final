import { notFound } from "next/navigation";
import Image from "next/image";
import { placementCards } from "@/data/placements/placements";
import PageLinks from "@/components/common/PageLinks";

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
        <PageLinks />

        <section className="layout-pt-lg layout-pb-md bg-[#F5F9FF]">
          <div className="container">
            <div className="row y-gap-40 items-center">
              <div className="col-lg-6" data-aos="fade-left">
                <h2 className="text-30 fw-700 text-[#160643] mb-30">
                  {card.title}
                </h2>
                <p className="text-16 text-[#160643] mb-20 leading-relaxed">
                  {card.description}
                </p>
                {card.keywords?.length > 0 && (
                  <div className="mt-30">
                    <h4 className="text-18 fw-600 mb-15">Key Features:</h4>
                    <div className="d-flex flex-wrap gap-2">
                      {card.keywords.map((keyword, idx) => (
                        <span
                          key={idx}
                          className="px-15 py-5 bg-blue-1 rounded-100 text-12 fw-500 text-blue-8"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="col-lg-6" data-aos="fade-right">
                <Image
                  src={card.image.url}
                  alt={card.image.alt}
                  width={520}
                  height={480}
                  className="rounded-16 w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
