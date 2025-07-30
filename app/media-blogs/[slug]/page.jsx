"use client";

import { notFound } from "next/navigation";

const checkStyle = {
  width: "28px",
  height: "28px",
  backgroundColor: "#000000",
  color: "white",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "16px",
  fontWeight: "bold",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
  marginRight: "12px",
  flexShrink: 0,
};

const blogPagesData = [
  {
    slug: "happy-holi",
    image: "/assets/img/media-blogs/happy-holi.jpeg",
    title: "Happy Holi: Celebrating the Vibrant Colors of Life",
    content: [
      "Holi, the festival of colors, is here! This joyous occasion is a time to celebrate the arrival of spring, the victory of good over evil, and the vibrant colors of life.",
      "As we gear up to splash colors and revel in the festive spirit, let's delve into the significance and traditions surrounding Holi.",
      "The Legend of Holi",
      "Holi is rooted in Hindu mythology, specifically the legend of Hiranyakashyap, a demon king who forbade his son, Prahlad, from worshiping Lord Vishnu. When Hiranyakashyap's sister, Holika, tried to burn Prahlad alive, Lord Vishnu intervened, saving Prahlad and burning Holika instead. This triumph of good over evil is celebrated as Holi.",
      "Traditions and Celebrations",
      "Holi is a two-day celebration, with the first day known as Holika Dahan, where bonfires are lit to symbolize the burning of evil. The second day is Rangwali Holi, where people gather to play with colors, dance, and feast.",
      "The Significance of Colors",
      "Colors play a vital role in Holi, each representing a different aspect of life:",
    ],
    list: [
      "Red symbolizes love and fertility",
      "Yellow represents sunshine and happiness",
      "Green signifies nature and harmony",
      "Blue represents tranquility and peace",
    ],
    moreContent: [
      "How to Celebrate Holi",
      "1. Gather with loved ones: Holi is a time for family and friends to come together.",
      "2. Play with colors: Use natural colors like gulal, abir, and haldi to add a touch of vibrancy to your celebrations.",
      "3. Enjoy traditional foods: Savor delicacies like gujiyas, thandai, and malpua.",
      "4. Dance and sing: Let the festive spirit take over with traditional Holi songs and dances.",
      "Wishing You a Happy Holi!",
      "As we celebrate the festival of colors, let's remember to spread love, joy, and harmony. May the vibrant colors of Holi bring brightness and happiness to your life.",
    ],
  },
  {
    slug: "film-festival-abu-dhabi",
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "2nd Film Festival in Abu Dhabi: A Celebration of Cinema",
    content: [
      "We are thrilled to announce that the 2nd Film Festival is coming to Abu Dhabi, UAE, on April 11-13! This highly anticipated event promises to be an unforgettable celebration of cinema, with a spectacular lineup of films, workshops, and special appearances.",
      "Festival Ambassador: Shri Anil Kapoor",
      "We are honored to have the renowned Bollywood actor, Shri Anil Kapoor, as our festival ambassador. With a career spanning over three decades, Anil Kapoor is a household name in India and a respected figure in the global film industry. His presence at the festival is sure to draw in crowds and add to the excitement.",
      "You're Invited!",
      "We invite you to attend the 2nd Film Festival in Abu Dhabi, and the best part? Entry is FREE! Join us for three days of film screenings, workshops, and interactive sessions with industry experts.",
      "Event Details:",
    ],
    list: [
      "Dates: April 11-13",
      "Location: Abu Dhabi, UAE",
      "Entry: FREE",
      "Festival Ambassador: Shri Anil Kapoor",
    ],
    moreContent: [
      "Various University and Institutions",
      "Mark your calendars and get ready to immerse yourself in the magic of cinema. We look forward to seeing you at the 2nd Film Festival in Abu Dhabi!",
      "U.A.E Cultural Ambassador",
      "Stay tuned for more updates on the festival schedule, film lineup, and special events. Follow us on social media to get the latest news and behind-the-scenes insights.",
      "We'll see you at the festival!",
      "International Media coverage",
    ],
  },
  {
    slug: "hilton-experiential-learning",
    image: "/assets/img/media-blogs/hilton.png",
    title: "Experiential Learning with Canopy by Hilton Dubai Al Seef",
    content: [
      "Experiential Learning with Canopy by Hilton Dubai Al Seef",
      "Our recent visit to Canopy by Hilton Dubai Al Seef truly brought our classroom lessons to life. The experience blended what we have been learning in theory with the real-world atmosphere of Canopy by Hilton, helping our students see how their studies connect to hospitality.",
      "Right from the start, the HR team, especially Ms. Aisha Moustafa, welcomed us warmly and made us feel part of the Hilton family. This genuine hospitality stayed with us throughout the day, as every member of the team from front desk to top, shared their expertise and showed us what professionalism and passion look like in action.",
      "Stepping into one of the world's most renowned names in hospitality, we experienced firsthand the professionalism, precision, and passion that drive the industry. From front desk operations to behind-the-scenes management, every detail reflected a commitment to excellence. We had the privilege to explore the elegance and efficiency of hotel operations, and more excitingly, to take part in interactive bakery and pastry sessions that showcased creativity, precision, and culinary excellence. The experience was further enriched with a hands-on mocktail-making session, where we learned the art of blending flavours with flair and professionalism. One of the highlights of the visit was exploring the housekeeping department, where we gained insights into the amazing standards, organization, and attention to detail that ensure guest satisfaction and uphold the Hilton brand.",
      "We extend our heartfelt gratitude to the HR department of Canopy by Hilton, especially to Ms. Aisha Moustafa, for her warm welcome, exceptional guidance, and generous support throughout the visit. Her dedication to nurturing young talent and sharing real-world knowledge made this visit truly impactful. We are grateful for the opportunity and look forward to applying what we've learned as we step confidently toward our future careers.",
      "Learning beyond the classroom - our visit to Hilton ignited passion, sharpened skills, and reminded us that greatness begins with curiosity and the courage to explore.",
      "24th July 2025",
      "Placement Department",
    ],
  },
  {
    slug: "uae-top-destinations",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
    title: "Top Must-Visit Destinations in the UAE",
    content: [
      "The United Arab Emirates (UAE) is known for its dazzling skyscrapers, opulent shopping malls, and vibrant culture. But beyond the glitz and glamour, there are plenty of unique and beautiful destinations that attract travelers from all over the world. Whether you're drawn to futuristic architecture, rich history, or breathtaking desert landscapes, here are some of the top must-visit destinations in the UAE.",
    ],
    list: [
      "1. Burj Khalifa, Dubai",
      "No visit to the UAE would be complete without seeing the iconic Burj Khalifa. As the tallest building in the world, standing at a staggering 828 meters, the Burj Khalifa offers breathtaking views of Dubai's skyline from its observation decks. It's also home to luxurious dining, shopping, and the nearby Dubai Fountain, which puts on a mesmerizing water and light show every evening.",
      "Must-Do: Visit the 148th-floor observation deck for the ultimate panoramic view of Dubai.",

      "2. The Palm Jumeirah, Dubai",
      "A man-made wonder, The Palm Jumeirah is a remarkable palm-shaped island that offers luxurious resorts, world-class dining, and stunning beaches. You can also visit the Atlantis The Palm resort, known for its water parks, aquariums, and celebrity chef restaurants. Whether you're looking to relax on the beach or explore the many attractions, this is a must-see destination.",
      "Must-Do: Take a monorail ride along the Palm Jumeirah for incredible views of the island and the coast.",

      "3. Sheikh Zayed Grand Mosque, Abu Dhabi",
      "Located in the capital city of Abu Dhabi, the Sheikh Zayed Grand Mosque is one of the largest mosques in the world. With its majestic white marble architecture, intricate designs, and stunning chandeliers, it is a masterpiece of modern Islamic architecture. The mosque is open to tourists and is a serene place to reflect and admire the beauty of Islamic craftsmanship.",
      "Must-Do: Take a guided tour to learn more about the mosque's history and significance.",

      "4. Dubai Desert Safari",
      "For those seeking adventure, a Dubai Desert Safari is a thrilling experience. Ride over the dunes in a 4x4, try sandboarding, and experience traditional Bedouin-style hospitality with a BBQ dinner, live entertainment, and stargazing. The vast golden desert landscape offers a serene and exciting contrast to the bustling city life.",
      "Must-Do: Enjoy a camel ride through the desert and witness the stunning sunset over the dunes.",

      "5. Al Fahidi Historical Neighborhood (Al Bastakiya), Dubai",
      "For a taste of Dubai's history and culture, visit the Al Fahidi Historical Neighborhood, also known as Al Bastakiya. This area offers a glimpse into old Dubai with its narrow lanes, wind towers, and traditional Arabian architecture. The neighborhood is home to several museums, art galleries, and cafés, where you can enjoy the slower pace of life in contrast to the modern city around you.",
      "Must-Do: Explore the Dubai Museum housed in the Al Fahidi Fort and wander through the Dubai Creek.",

      "6. Fujairah's Beaches and Mountains",
      "Fujairah, located on the east coast of the UAE, offers beautiful beaches, crystal-clear waters, and mountainous terrain. It's a great destination for those looking to escape the urban hustle and enjoy nature. The Hajar Mountains are perfect for hiking, while the beaches offer diving, snorkeling, and relaxing seaside views. The Fujairah Fort and Al Bidya Mosque (the oldest mosque in the UAE) are also worth a visit.",
      "Must-Do: Go snorkeling or diving in the Indian Ocean and explore the local seafood restaurants.",

      "7. Louvre Abu Dhabi, Abu Dhabi",
      "A cultural gem, Louvre Abu Dhabi is a branch of the famous French museum and offers a stunning collection of art from around the world. Its modern architecture and design are as captivating as the artworks inside. The museum's dome, with its intricate latticework, creates a 'rain of light' effect, making the museum a visual masterpiece.",
      "Must-Do: Explore the museum's art exhibitions and take a stroll around the waterfront promenade.",

      "8. Jebel Jais, Ras Al Khaimah",
      "For thrill-seekers, Jebel Jais in Ras Al Khaimah is home to the world's longest zipline. The Jebel Jais Flight stretches over 2.8 kilometers and allows visitors to soar across the stunning mountain landscape at speeds of up to 150 km/h. The area also offers hiking trails and breathtaking views of the Hajar Mountains.",
      "Must-Do: Try the Jebel Jais Zipline and enjoy the panoramic views of the rugged mountains.",

      "9. Global Village, Dubai",
      "Global Village is a cultural and entertainment destination that brings the world's best experiences together in one place. From international pavilions showcasing food, culture, and crafts to thrilling rides and live performances, Global Village is an exciting place for families and tourists of all ages. It opens annually during the cooler months and is a great place to explore international cultures in one location.",
      "Must-Do: Stroll through the pavilions, shop for unique souvenirs, and enjoy the multicultural shows and performances.",

      "10. Sharjah Arts Museum, Sharjah",
      "Sharjah, the cultural capital of the UAE, is home to the Sharjah Arts Museum, one of the largest museums in the region. It houses an impressive collection of contemporary and modern art from both Arab and international artists. The museum is a perfect stop for art enthusiasts who want to explore the rich cultural heritage of the UAE.",
      "Must-Do: Explore the various art exhibitions and attend cultural events hosted throughout the year.",
    ],
    moreContent: [
      "Whether you're a nature lover, history enthusiast, or thrill-seeker, the UAE has something for everyone. Make sure to add these spots to your travel bucket list and experience the richness the Emirates have to offer.",
      "From the tallest towers to the quietest deserts, these destinations showcase the diversity, ambition, and charm of the UAE.",
    ],
  },
  {
    slug: "uae-new-year-fireworks",
    image:
      "https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?q=80&w=2346&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "UAE Welcome 2025 with Record Breaking Firework and Drone Show",
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
    image:
      "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    title:
      "What are the Key Strategies for Success in Digital Age Online Learning?",
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
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Why Study in Dubai?",
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

export default function BlogDetailsPage({ params }) {
  const pageData = blogPagesData.find((page) => page.slug === params.slug);
  if (!pageData) return notFound();

  const renderContent = () => {
    return pageData.content?.map((text, idx) => {
      const isTitle = text.match(/^[0-9]+\./);
      const isMustDo = text.toLowerCase().includes("must-do:");

      if (isTitle) {
        return (
          <h2 key={idx} className="section-title">
            {text}
          </h2>
        );
      }

      if (isMustDo) {
        return (
          <p key={idx} className="must-do">
            ✅ <strong>{text}</strong>
          </p>
        );
      }

      return (
        <p className="content-text" key={idx}>
          {text}
        </p>
      );
    });
  };

  return (
    <section className="blog-detail-page">
      <div
        className="hero-image"
        style={{ backgroundImage: `url(${pageData.image})` }}
      >
        <div className="overlay" />
        <h1 className="hero-title">{pageData.title}</h1>
      </div>

      <div className="content-wrapper">
        {renderContent()}

        {pageData.list && (
          <ul className="custom-bullet-list">
            {pageData.list.map((item, idx) => (
              <li key={idx}>
                <span style={checkStyle}>✓</span>
                <strong>{item}</strong>
              </li>
            ))}
          </ul>
        )}

        {pageData.moreContent && (
          <div className="more-content">
            {pageData.moreContent.map((text, idx) => (
              <p className="content-text" key={`more-${idx}`}>
                {text}
              </p>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .blog-detail-page {
          font-family: "Segoe UI", sans-serif;
          background-color: #fafafa;
          padding-bottom: 80px;
        }

        .hero-image {
          height: 100vh;
          background-size: cover;
          background-position: center;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 40px;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
        }

        .hero-title {
          position: relative;
          z-index: 2;
          color: white;
          font-size: 44px;
          font-weight: 800;
          text-align: center;
          padding: 0 30px;
          margin-top: 220px;
        }

        .content-wrapper {
          max-width: 1000px;
          margin: 0 auto;
          padding: 40px 32px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }

        .more-content {
          margin-top: 40px;
        }

        .content-text,
        .more-content p,
        .must-do {
          font-size: 18px;
          line-height: 1.85;
          margin-bottom: 24px;
          color: #333;
        }

        .section-title {
          font-size: 24px;
          font-weight: bold;
          color: #4b2615;
          margin-top: 50px;
          margin-bottom: 20px;
          border-left: 5px solid #c19a6b;
          padding-left: 16px;
        }

        .must-do {
          background-color: #e6f4ea;
          border-left: 4px solid #28a745;
          padding: 14px 18px;
          font-weight: 500;
          border-radius: 6px;
        }

        .custom-bullet-list {
          list-style: none;
          padding-left: 0;
          margin-top: 50px;
        }

        .custom-bullet-list li {
          display: flex;
          align-items: center;
          font-size: 17px;
          line-height: 1.7;
          margin-bottom: 18px;
          background: #f9f9f9;
          padding: 12px 16px;
          border-radius: 8px;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 30px;
            margin-top: 150px;
          }
          .content-wrapper {
            padding: 24px 16px;
          }
        }
      `}</style>
    </section>
  );
}
