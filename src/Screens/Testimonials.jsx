import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section id="technologies" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          TECHNOLGIES
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">
          Here's The technologie that Im working with It .
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-blue max-w-[400px]  h-[350px] flex flex-col justify-end p-16 mt-48"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img class="rounded-t-lg" src="https://i.ytimg.com/vi/XUHVXmCLqLw/maxresdefault.jpg" alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2 text-center" >Mern stack</h5>
      <p class="text-gray-700 text-base mb-4">
      MERN is an acronym for MongoDB, Express.js, React.js, and Node.js. Using these languages together lets you build web and mobile applications. Entirely using one language, JavaScript.
      </p>
      
    </div>
  </div>
</div>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-red max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img class="rounded-t-lg" src="https://th.bing.com/th/id/R.5fbb57cbaa59e2f5f6e7dfc36ef8a3ca?rik=5ls7GQM8s%2bDsmA&riu=http%3a%2f%2fdash.ps%2fwp-content%2fuploads%2f2020%2f08%2f1PCKC8Ufml-wvb9Vjj3aaWw-e1597262915257-998x660.jpeg&ehk=WJv9NuBcP4XkY414lHrlVqgIZGRrDOUS3wYpkbGjz9Q%3d&risl=&pid=ImgRaw&r=0" alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2 text-center">Flutter</h5>
      <p class="text-gray-700 text-base mb-4">
      Flutter is making a lot of buzz in the mobile app development space as many startups have adopted it for creating native apps in both iOS and Android with record-breaking development time
      </p>
      
    </div>
  </div>
</div>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-yellow max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img class="rounded-t-lg" src="https://1.bp.blogspot.com/-HHqnOjhzneY/YHzApSjHKKI/AAAAAAAAtPw/xMBsxZFANiU0Ruf0bdfBU-lcstclYeCZgCLcBGAsYHQ/w1200-h630-p-k-no-nu/springboot.jpg" alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Spring Boot</h5>
      <p class="text-gray-700 text-base mb-4">
      Spring is widely used for creating scalable applications. For web applications Spring providesSpring MVC which is a widely used module of spring which is used to create scalable web applications.
      </p>
      
    </div>
  </div>
</div>
        </motion.div>
      </div>
    </section>
  );
};
export default Testimonials;
