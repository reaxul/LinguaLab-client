import { motion } from "framer-motion";

const ExtraSection = () => {
  return (
      <section className="mt-20">
          
      <h2 className="text-4xl mb-9 text-center">---Discover the World of Languages---</h2>
      <div className="extra-content">
        <div className="extra-image">
          <motion.img
            src="https://i.ibb.co/9H6Mj7Y/blog-image.png"
            alt="Language Illustration"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
        <div className="extra-description text-center mt-8">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Embark on a journey to explore diverse languages and cultures from around the world.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Our interactive courses, experienced instructors, and engaging learning materials will
            help you master new languages with ease.
          </motion.p>
          <motion.button
            className="btn btn-primary mt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            Start Learning
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ExtraSection;
