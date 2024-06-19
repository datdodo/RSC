import Header from "../components/Header";
import Footer from "../components/Footer";
import RSC from "../IMG/RSC/RSC.png";

export default function ContactUs() {
  const cts = [
    {
      type: "tel",
      icon: "fa-sharp fa-regular fa-circle-phone",
      text: "+98265610080",
    },
    {
      type: "email",
      icon: "fa-sharp fa-regular fa-envelope",
      text: "ryansports@gmail.com",
    },
    {
      type: "address",
      icon: "fa-sharp fa-regular fa-location-dot",
      text: "10th Floor - Burj Khalifa, Dubai, UAE",
    },
    {
      type: "facebook",
      icon: "fa-brands fa-facebook",
      text: "Ryan Sport Club",
    },
    {
      type: "instagram",
      icon: "fa-brands fa-instagram",
      text: "Ryan Sport Club",
    },
    {
      type: "x-twitter",
      icon: "fa-brands fa-x-twitter",
      text: "Ryan Sport Club",
    },
  ];
  return (
    <>
      <Header />
      <main className="pt-[5rem] max-w-[70%] flex-[0_0_70%] m-auto">
        <img src={RSC} alt="RTK" className="h-32 m-auto"></img>
        <p>
          Ryan Sports Club is a beacon of inspiration, a place where the love
          for sports and the drive for fitness coalesce into a powerful force
          for personal and community development. It’s a sanctuary that nurtures
          the body, mind, and spirit, offering a holistic approach to sports and
          wellness.
          <br/>
          <br/>
          <b>*Empowerment Through Sports:</b> The club empowers individuals to
          push their limits and achieve greatness. It provides a supportive
          environment where members can set ambitious goals and work tirelessly
          towards them. With expert coaching and motivational guidance, every
          member is encouraged to surpass their previous achievements and
          discover new strengths.
          <br/>
          <br/>
          <b>*Cultural Hub:</b> Ryan Sports Club is not just about physical
          activity; it’s a cultural hub that celebrates the rich tapestry of
          sports traditions from around the world. It hosts international sports
          festivals, cultural exchange programs, and showcases diverse athletic
          talents. This global perspective enriches the club’s atmosphere and
          broadens members’ horizons.
          <br/>
          <br/>
          <b>*Advanced Training Facilities:</b> The club boasts advanced
          training facilities that cater to a wide range of sports disciplines.
          From Olympic-sized swimming pools to high-tech gymnasiums, every
          corner is designed to optimize performance and provide an unparalleled
          training experience. Members have access to professional-grade
          equipment and facilities that rival those found in elite sports
          institutions.
          <br/>
          <br/>
          <b>*Community Outreach:</b> Ryan Sports Club extends its reach beyond
          its walls through community outreach programs. It partners with local
          organizations to promote sports as a tool for social cohesion and
          youth development. By organizing community events and offering free
          clinics, the club plays a pivotal role in fostering a love for sports
          among all age groups.
          <br/>
          <br/>
          <b>*Sustainable Development:</b> With a commitment to sustainability,
          Ryan Sports Club integrates eco-friendly practices into its
          operations. It utilizes renewable energy sources, promotes recycling,
          and encourages members to adopt sustainable lifestyles. The club’s
          green initiatives reflect its dedication to preserving the environment
          for future generations of athletes.
          <br/>
          <br/>
          <b>*Legacy Building:</b> The club is dedicated to building a legacy
          that will endure for years to come. It invests in research and
          development to stay at the forefront of sports science, ensuring that
          its members have access to the latest knowledge and techniques. By
          nurturing talent and fostering innovation, Ryan Sports Club aims to
          leave an indelible mark on the world of sports.
          <br/>
          <br/> In summary, Ryan Sports Club is more than just a place to play
          sports; it’s a comprehensive ecosystem that supports every aspect of
          athletic life. It’s where dreams are nurtured, talents are honed, and
          legacies are built.
        </p>
        <form action="/" method="post" className="border-t-2 border-solid border-slate-900 py-4">
          <legend>We would love to hear your thoughts, suggestions or concerns with anything so we can improve!</legend>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name"/><br/>
          <label htmlFor="email">Your Email: </label>
          <input type="email" id="email" name="email"/><br/>
          <label htmlFor="feedback">Your Feedback:</label><br/>
          <textarea id="feedback" name="feedback" rows={4} cols={50}></textarea><br/>
          <input type="submit" value="Submit" className="border-2 border-solid border-slate-900 p-1 hover:cursor-pointer"/>
        </form>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115525.73856510432!2d55.19197486709517!3d25.197174173836935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2s!4v1718071501634!5m2!1sen!2s"
            loading="lazy"
            className="h-[545px] w-full border-2 border-solid border-slate-900"
            title="map"
        ></iframe>
        {cts.map((ct) => (
            <span key={ct.type} className={`cts__${ct.type}`}>
            <i className={`${ct.icon} px-2`}></i>
            <span>{ct.text}</span>
          </span>
        ))}
      </main>
      <Footer/>
    </>
  );
}
