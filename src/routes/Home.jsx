import { motion } from "framer-motion";
import Landing from "../sections/Landing/Landing";
import Tracks from "../../components/Tracks";
import About from "../sections/About/About";
import Faq from "../sections/FAQ/Faq";
import Timeline from "../sections/Timelines/Timeline";

function Home() {

  return (
    <>
      <section className="bg-[#200837] text-white">
        <section className="min-h-screen font-[vcr-osd]">
          <Landing />
        </section>
        <About/>
        <section className="overflow-hidden font-[vcr-osd] flex flex-col px-12 text-center py-20 bg-[#E2319A]">
        <motion.div
        className="flex text-6xl whitespace-nowrap uppercase mb-10 font-bold"
        initial={{ x: -100 }}
        animate={{ x: 100 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      >
        {/* / Exciting Challenges / Register Now / Unforgettable Experience / */}
       / Ideate PPT  Submission on Devfolio /  Ideate PPT  Submission on Devfolio /
      </motion.div>
          <div className="flex flex-col justify-center items-center text-lg">
            <p className="mb-5">
              Idea Submission Deadline - 7th March 2024 
            </p>
          </div>
        </section>
      </section>
      <Tracks />
      <Timeline/>
      <section className="bg-[#200837] text-white">
        <Faq className="min-h-screen" />
      </section>
      <footer />
    </>
  );
}

export default Home;