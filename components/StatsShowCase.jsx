"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  {
    id: 1,
    number: "Top 50",
    title: "Under 50 University",
    subtext: "Ranked within the world’s top 50 universities under 50 years",
    image:
      "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    number: "90+",
    title: "Nationalities Represented",
    subtext: "Students from over 90 countries shape our vibrant community",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    number: "100+",
    title: "Clubs and Organizations",
    subtext: "Diverse student-led activities, from tech to theater",
    image:
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    number: "17",
    title: "Types of Scholarships",
    subtext: "Financial aid opportunities for academic excellence",
    image:
      "https://images.unsplash.com/photo-1584697964403-7b2e1dcdb0fc?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    number: "33",
    title: "Internship & Placement Partners",
    subtext: "Strong links to global industry leaders",
    image:
      "https://images.unsplash.com/photo-1531496651418-9f4d5c9a3a47?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    number: "85+",
    title: "Student Projects Annually",
    subtext: "Innovation and research across disciplines",
    image:
      "https://images.unsplash.com/photo-1555529669-e69c0d51b6d5?auto=format&fit=crop&w=800&q=80",
  },
];

export default function StatsShowcase() {
  return (
    <section className="w-full px-4 md:px-10 py-16 bg-white flex justify-center">
      <div
        className="grid gap-4 w-full max-w-[1400px]"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.5fr 1fr",
          gridAutoRows: "260px",
        }}
      >
        {stats.map((item) => (
          <StatCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

function StatCard({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0.9, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative rounded-md overflow-hidden cursor-pointer shadow-xl"
    >
      {/* Image */}
      <div className="absolute inset-0 z-[1]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
      </div>

      {/* Color Overlay */}
      <div className="absolute inset-0 bg-black/60 z-[2]" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-[2]" />

      {/* Text Content */}
      <div className="absolute inset-0 z-[3] text-white flex flex-col justify-center items-center text-center px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold drop-shadow-xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {item.number}
        </motion.h2>
        <motion.p
          className="text-xl font-semibold mt-2 drop-shadow-md"
          whileHover={{ scale: 1.02 }}
        >
          {item.title}
        </motion.p>
        <motion.p
          className="text-sm mt-3 max-w-[85%] leading-snug text-white/90 drop-shadow-sm"
          whileHover={{ scale: 1.01 }}
        >
          {item.subtext}
        </motion.p>
      </div>
    </motion.div>
  );
}
