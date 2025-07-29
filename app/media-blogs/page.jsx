"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const blogPosts = [
  {
    slug: "hilton-experiential-learning",
    title: "Experiential Learning with Canopy by Hilton Dubai Al Seef",
    image: "/assets/img/media-blogs/2.png",
    description:
      "Our recent visit to Canopy by Hilton Dubai Al Seef brought classroom theory to life through hands-on hospitality experience...",
    writer: "Placement Department",
    views: 0,
    date: "Jul 24",
    readTime: "3 min read",
    likes: 0,
  },
  {
    slug: "happy-holi",
    title: "Happy Holi: Celebrating the Vibrant Colors of Life",
    image: "/assets/img/media-blogs/happy-holi.jpeg",
    description:
      "Holi, the festival of colors, is here! This joyous occasion is a time to celebrate the arrival of spring, the victory of good over evil...",
    writer: "CSEI Academy",
    views: 10,
    date: "Mar 13",
    readTime: "2 min read",
    likes: 0,
  },
  {
    slug: "film-festival-abu-dhabi",
    title: "2nd Film Festival in Abu Dhabi: A Celebration of Cinema",
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    description:
      "We are thrilled to announce that the 2nd Film Festival is coming to Abu Dhabi, UAE, on April 11-13! This highly anticipated event...",
    writer: "CSEI Academy",
    views: 43,
    date: "Feb 22",
    readTime: "1 min read",
    likes: 0,
  },
  {
    slug: "uae-top-destinations",
    title: "Top Must-Visit Destinations in the UAE",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
    description:
      "The United Arab Emirates (UAE) is known for its dazzling skyscrapers, opulent shopping malls, and rich culture...",
    writer: "CSEI Academy",
    views: 14,
    date: "Feb 9",
    readTime: "4 min read",
    likes: 0,
  },
  {
    slug: "uae-new-year-fireworks",
    title: "UAE Welcome 2025 with Record Breaking Firework and Drone Show",
    image:
      "https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?q=80&w=2346&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "Jan 7",
    readTime: "1 min read",
    views: 8,
    likes: 0,
    content: [
      "The first few minutes of New Year 2025 in the United Arab Emirates are being illuminated by fireworks from more than 60 locations throughout the seven Emirates, more than 10,000 drones, and several world records. The UAE is soaring into 2025 in style, whether it is through Dubai's 45 aerial pyrotechnics, Abu Dhabi's nonstop 53-minute fireworks show, or Ras Al Khaimah's longest yet laser drone show.",
      "Ras Al Khaimah's drones and fireworks show created two new Guinness World Records. The first was for the largest drone-formed aerial display of a tree, and the second was for the largest drone-formed aerial image of a seashell.",
      "The country attempted two Guinness World Records titles with this show for the sixth consecutive year. Our goal is to establish Ras Al Khaimah as a place that consistently pushes the limits of innovation and creativity.",
      "The 53-minute continuous fireworks show at the Sheikh Zayed Festival in Al Wathba, Abu Dhabi, attracted sizable crowds. Last year, when the venue broke four world records in terms of duration, quantity, and design, the display lasted 13 minutes longer.",
      "The world record for the largest coordinated drone display was broken later in the evening when over 6,000 drones performed a 20-minute show. The fireworks show broke the records for the most firework image formations in a minute and the most fireworks displayed in a 24-hour period.",
    ],
  },
  {
    slug: "online-learning-strategies",
    title:
      "What are the Key Strategies for Success in Digital Age Online Learning?",
    image:
      "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    description:
      "In today's fast-paced educational world, online learning has become a game-changer. It opens up a wealth of opportunities, allowing students to learn whenever and wherever they choose...",
    writer: "CSEI Academy",
    views: 7,
    date: "Dec 13, 2024",
    readTime: "4 min read",
    likes: 0,
    content: [
      "In today's fast-paced educational world, online learning has become a game-changer. It opens up a wealth of opportunities, allowing students to learn whenever and wherever they choose. With millions of courses available, anyone can access resources that were once out of reach. However, succeeding in this new format requires thoughtful strategies to fully leverage these tools.",

      "Understanding the Online Learning Environment",
      "Transitioning to online education often demands a different mindset compared to traditional classrooms. The digital landscape can be full of distractions, making it crucial to create a focused learning environment.",
      "Establishing a dedicated study area is key. For instance, a well-organized desk with minimal distractions can increase your focus by up to 30%, according to studies on learning environments. Whether you opt for a quiet corner in your home or a lively local café, it's essential your space is comfortable and inviting.",

      "Setting Clear Goals and Objectives",
      "Defining clear and attainable goals is vital in online learning. Before diving into your courses, jot down your objectives. Identifying what you want to achieve, such as completing a certification in digital marketing within three months, sets a clear direction and makes it easier to monitor your progress.",
      "Breaking larger goals into smaller milestones can lead to quick wins. For example, completing one module weekly can help maintain motivation. Celebrating these small successes boosts your morale and strengthens your commitment to your overall goals.",

      "Time Management and Creating a Structured Schedule",
      "The freedom of online learning can be a double-edged sword, often leading to procrastination. Creating a structured schedule that includes dedicated study times is essential. Research shows that students who manage their time effectively can improve their academic performance by up to 50%.",
      "Utilize digital tools, such as Google Calendar or Todoist, to outline study periods, assignment deadlines, and revision sessions, while also allowing for regular breaks. Setting aside specific times each day for focused learning can create the necessary routine to succeed.",

      "Engaging with Course Material",
      "Online learning platforms often offer diverse content formats, including videos, readings, and discussions. Engaging with these resources actively can enhance comprehension and retention. Instead of merely watching videos, try taking notes or exchanging summaries with classmates.",
      "Also, don't miss out on opportunities to involve yourself in discussions. Engaging in forums or group projects allows for diverse perspectives, which can deepen understanding. For example, joining a discussion on a platform like Slack can lead to valuable insights from peers who may approach topics differently.",

      "Utilizing Technology and Resources",
      "Take advantage of the various tools at your disposal in the digital age. Familiarize yourself with the resources provided through your courses, as well as external tools that can aid your studies. For example, using task management software like Notion can streamline your study processes.",
      "Incorporate multimedia resources into your learning. Podcasts and webinars can present complex information in engaging formats, making them easier to digest. For instance, educational podcasts related to your course topic can reinforce what you've learned in a more casual way.",

      "Building a Support Network",
      "Creating a support network is invaluable in online education. Engaging with peers, instructors, and mentors can enrich your learning experience. Forming study groups or participating in online forums can provide different perspectives that enhance understanding.",
      "Keep communication lines open with your instructors. For example, a simple email to inquire about assignment expectations can clarify doubts and show your commitment. Regular interaction with instructors can create a connection that makes online learning feel more personal.",

      "Self-Motivation and Discipline",
      "Self-motivation is key in online learning, where you often must hold yourself accountable. Establishing a discipline in your study routine is essential.",
      "Consider techniques like the Pomodoro Technique, where you study for 25 minutes and take a 5-minute break. This method has been shown to increase productivity by up to 25%. Regular self-reflection on your progress can also help you recognize what works and what doesn't, guiding your future study methods.",

      "Adapting to Different Learning Styles",
      "Recognizing your unique learning style is crucial for maximizing online learning effectiveness. Online platforms often provide diverse materials, allowing you to tailor your learning experience.",
      "For example, visual learners may find infographics and diagrams effective for grasping complex topics. Conversely, auditory learners might benefit from lectures or audiobooks. Experiment with various formats to find what resonates best with you, enhancing both comprehension and enjoyment.",

      "Leveraging Feedback and Assessments",
      "Engaging with assessments in your online courses is vital. Quizzes, projects, and peer reviews not only test your knowledge but also provide feedback for improvement. Make the most of these assessments to identify your strengths and areas needing development.",
      "Regularly reflecting on your feedback helps solidify your learning and tracks your growth. For instance, if you score lower in a specific area, consider adjusting your study strategy to focus on that topic. This proactive approach can lead to significant improvement over time.",

      "Final Thoughts",
      "The digital age has reshaped education, providing numerous opportunities for those willing to learn. By implementing effective strategies such as goal-setting, time management, and proactive engagement, you can thrive in the online learning environment.",
      "Building a supportive framework and adapting to your personal learning needs can lead to a fulfilling and productive educational experience. Embrace the journey of online learning, and unlock the potential for growth and success in your educational endeavors.",
    ],
  },
  {
    slug: "study-in-dubai",
    title: "Why Study in Dubai?",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    description:
      "Dubai, a vibrant metropolis known for its futuristic skyline, luxurious lifestyle, and thriving economy, is quickly becoming one of the most popular destinations for international students...",
    writer: "CSEI Academy",
    views: 12,
    date: "Dec 12, 2024",
    readTime: "4 min read",
    likes: 1,
    content: [
      "Dubai, a vibrant metropolis known for its futuristic skyline, luxurious lifestyle, and thriving economy, is quickly becoming one of the most popular destinations for international students. The city combines world-class education with cultural diversity, modern infrastructure, and endless opportunities for personal and professional growth. Here's why studying in Dubai could be the best decision you ever make.",

      "1. World-Class Education",
      "Dubai is home to several globally recognized universities, offering top-tier education in a variety of disciplines. Many of these institutions are international branch campuses of prestigious universities from the US, UK, Australia, and Europe, which means students can get a degree from world-renowned universities without leaving the region.",
      "Whether you're interested in business, engineering, medicine, or the arts, Dubai's universities offer cutting-edge programs designed to meet international standards. The city's educational institutions also offer flexible study options, ranging from undergraduate to postgraduate programs, with opportunities for research and internships.",

      "2. Cultural Diversity",
      "Dubai is one of the most cosmopolitan cities in the world. With more than 200 nationalities living and working in the city, studying here means you'll be exposed to a diverse and vibrant cultural mix. This diversity fosters a global learning environment, where students can collaborate, exchange ideas, and gain a broader perspective of the world.",
      "The multicultural atmosphere of Dubai not only enriches the learning experience but also prepares students to work in an increasingly interconnected global job market. Networking with people from different cultural backgrounds will provide valuable experiences that are beneficial for future career opportunities.",

      "3. Strategic Location",
      "Dubai is a key global business hub and a gateway between the East and the West. Its location makes it an ideal base for students who want to explore the Middle East, Asia, Europe, and Africa. The city's exceptional connectivity, with its world-class international airports and transport systems, makes travel easy and affordable.",
      "Additionally, Dubai's thriving business environment means students can tap into various industries such as finance, technology, healthcare, and tourism, which are not only central to the city's economy but are also growing rapidly in the region.",

      "4. Modern Infrastructure and Safe Environment",
      "Dubai is famous for its state-of-the-art infrastructure, which includes world-class transportation systems, modern housing, and cutting-edge technology. Whether you're commuting to campus or enjoying a night out, you'll experience unparalleled convenience and comfort. The city is also renowned for its cleanliness and safety, with low crime rates and a strong emphasis on security, making it an ideal destination for international students.",
      "Additionally, Dubai offers world-class healthcare, shopping malls, entertainment venues, and recreational activities, ensuring students enjoy both a high quality of life and a balanced lifestyle.",

      "5. Career Opportunities",
      "Dubai's booming economy is one of the key reasons students choose to study here. The city attracts businesses and entrepreneurs from around the globe, offering excellent career prospects in various sectors. With its status as a financial, technological, and tourism hub, Dubai provides numerous job opportunities for students, both during and after their studies.",
      "Many universities in Dubai have strong links with leading companies, offering internships and work placements to students. After graduation, students can take advantage of Dubai's thriving job market, which is home to a wealth of multinational corporations and local startups. Furthermore, the UAE's government policies are supportive of entrepreneurship, which is an attractive prospect for students looking to start their own businesses.",

      "6. Tax-Free Income",
      "One of the major attractions of working in Dubai is the tax-free income. Unlike many other countries, the UAE does not impose income tax on its residents, which means students can save more money while working part-time or post-graduation. This makes Dubai a very appealing place for students who are looking to maximize their earnings.",

      "7. Supportive Student Community",
      "Dubai's universities offer a welcoming and supportive environment for international students. From student clubs and societies to academic support and career guidance, there are plenty of resources available to help students thrive. The city is also home to a large expatriate community, which can provide a sense of comfort and connection for international students who are adjusting to life in a new country.",
      "Additionally, Dubai's cosmopolitan nature means that students from all over the world can find a familiar community, whether through cultural events, festivals, or international student groups. This creates a sense of belonging, making it easier for students to settle into their new environment.",

      "8. A High Standard of Living",
      "Dubai offers a high standard of living, with access to luxury shopping, dining, entertainment, and leisure activities. Students can enjoy world-class shopping malls, top-tier restaurants, and endless entertainment options, from beach resorts to desert safaris. The city's numerous public spaces and green areas also provide a perfect place for students to unwind after a busy day of study.",
      "While Dubai is known for its luxury, there are affordable living options for students, including shared accommodation and budget-friendly food options, making it accessible for different financial needs.",

      "9. Innovative and Future-Focused",
      "Dubai is known for its forward-thinking approach, constantly pushing the boundaries of innovation. The city has embraced technology in every aspect of life, from smart cities and autonomous transportation to cutting-edge artificial intelligence and sustainability initiatives. By studying in Dubai, students are immersed in an environment that encourages creativity and innovative thinking.",
      "The focus on innovation and entrepreneurship also makes Dubai an excellent place for students looking to pursue careers in emerging fields such as tech, engineering, and digital media.",

      "Conclusion",
      "Studying in Dubai offers students a unique opportunity to live in a dynamic, global city that blends tradition with modernity. With world-class education, career opportunities, and a multicultural environment, Dubai is an ideal destination for students looking to gain a global perspective and embark on a successful career.",
      "Whether you're looking for a top-tier education, a chance to experience a diverse culture, or a strategic location to launch your career, Dubai offers all of this and more. Take the leap and choose Dubai - a city that's shaping the future of education, business, and innovation.",
    ],
  },
];

export default function NewsCards() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: "power3.out",
      });
    });

    gsap.to(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      backgroundPosition: "50% 30%",
      ease: "none",
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "250px 20px",
        background:
          "linear-gradient(135deg, rgba(0,0,0,0.95), rgba(20,20,20,0.9))",
        color: "#fff",
      }}
    >
      <div
        style={{ margin: "0 auto", paddingRight: "5vw", paddingLeft: "5vw" }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            marginBottom: "60px",
            textTransform: "uppercase",
            letterSpacing: "1px",
            background: "linear-gradient(to right, #fff, #aaa)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            position: "relative",
          }}
        >
          CSEI News & Highlights
          <span
            style={{
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "4px",
              background: "linear-gradient(to right, #fff, #666)",
              borderRadius: "2px",
            }}
          />
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "30px",
          }}
        >
          {blogPosts.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              style={{
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
                transition: "transform 0.3s ease",
              }}
              className="hover:scale-[1.02]"
            >
              <Link href={`/media-blogs/${item.slug}`} passHref>
                <div style={{ cursor: "pointer" }}>
                  <div style={{ position: "relative", height: "220px" }}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div style={{ padding: "24px" }}>
                    <h3
                      style={{
                        fontSize: "1.4rem",
                        fontWeight: 700,
                        marginBottom: "12px",
                        color: "#fff",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.95rem",
                        color: "rgba(255,255,255,0.85)",
                        lineHeight: "1.6",
                        marginBottom: "16px",
                      }}
                    >
                      {item.description}
                    </p>
                    <div style={{ marginBottom: "16px" }}>
                      <p style={{ fontSize: "0.9rem", color: "#aaa" }}>
                        Writer: {item.writer}
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "0.85rem",
                        color: "#ccc",
                      }}
                    >
                      <span>
                        {item.date} • {item.readTime}
                      </span>
                      <span>{item.views} views</span>
                    </div>
                    <div style={{ marginTop: "12px" }}>
                      <span style={{ fontSize: "0.85rem", color: "#ccc" }}>
                        {item.likes > 0
                          ? `${item.likes} like`
                          : "Post not marked as liked"}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
