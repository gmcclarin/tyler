import Nav from "../components/Nav";
import Contact from "../components/Contact";
import Reveal from "../components/Reveal";
import Footer from "../components/Footer";
import ReviewCarousel from "../components/ReviewCarousel";
import pic1 from "../photos/mission3.webp";
import mainPhoto from "../photos/mainPhoto2.jpg";
import ServicesMarquee from "../components/ServicesMarquee";
// import BeforeAfter from "../components/BeforeAfter";
import MobileNav from "../components/MobileNav";

const Home = () => {
  return (
    <div className="bg-baseColor relative overflow-x-hidden">
      <Nav />
      <MobileNav />
      <div className="">
        <div className="rounded-lg w-screen h-screen flex justify-center items-center">
          {/* Fullscreen Image Section */}
          <div
            id="homeimage"
            className="relative w-screen h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${mainPhoto})` }} // Inline style for background image
          >
            <div className="animate-pulse text-3xl font-extrabold text-black p-1 border-4 border-black rounded-full cursor-pointer">
              <a href="#contactform">LET'S TALK TREES</a>
            </div>
          </div>
        </div>

        <div className="w-screen h-[80vh] sm:h-screen flex items-center justify-center">
          <div className="">
            <ServicesMarquee />
            <div className="flex justify-center">
              <a
                href="/services"
                className="px-5 p-3 hover:bg-dark bg-darker text-white font-bold rounded-full shadow-2xl shadow-black"
              >
                ALL SERVICES
              </a>
            </div>
          </div>
        </div>
      </div>
    {/* mission statement */}
      <div className="relative w-full h-screen bg-baseColor flex">
        {/* Background Text Container */}
        <div className="w-full flex items-center justify-start font-serif font-black">
          {/* Centered Mission Text */}
          
          <div className="absolute z-10 text-black sm:p-20 w-3/4">
            <Reveal>
            <strong className="text-2xl sm:text-3xl font-bold">
              MY MISSION
            </strong>
            </Reveal>
            <p className="mt-4 text-sm sm:text-lg">
              is to use my skills and knowledge to help decide which top-quality
              solutions are specific to YOU and YOUR trees! I am committed to
              continuing to grow in my usefulness to become an integral part of
              my customer's tree care solutions.
            </p>
          </div>
        
        </div>
    
        {/* Right Side Image */}
        <div className="w-1/2 h-[85vh] absolute right-0 bottom-0">
          <img
            src={pic1}
            alt="mission statement tree trunk"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* REVIEW CAROUSEL */}

      <ReviewCarousel />

      {/* <BeforeAfter /> */}

      {/* ############ CONTACT FORM #1 #############*/}
      <div id="contactform" className="sm:flex w-full">
        {/* LEFT SIDE */}
        <div className="mt-20 w-full sm:w-1/2">
          <div className="m-8 text-xl sm:text-3xl font-bold">CONTACT</div>
          <div className="m-8 text-lg">
            Ready to talk trees? If you have a question or want talk about a
            potential job, you're in the right place.
          </div>
        </div>

        {/* RIGHT SIDE & THE FORM */}
        <div className="w-full sm:w-1/2 mt-20 ">
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
