import { notFound } from "next/navigation";
import Image from "next/image";
import { lifeWithCSEICards } from "@/data/life-with-csei/life-with-csei";
import PageLinks from "@/components/common/PageLinks";

export async function generateStaticParams() {
  return lifeWithCSEICards.map((card) => ({
    slug: card.id,
  }));
}

export default function LifeWithCSEIDetailPage({ params }) {
  const card = lifeWithCSEICards.find((item) => item.id === params.category);
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
                {card.stats?.length > 0 && (
                  <ul className="text-16 text-[#160643] leading-relaxed list-disc pl-5">
                    {card.stats.map((stat, idx) => (
                      <li key={idx}>{stat}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="col-lg-6" data-aos="fade-right">
                <Image
                  src={card.image.url}
                  alt={card.image.alt}
                  width={520}
                  height={480}
                  className="rounded-16 w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
