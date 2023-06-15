import { motion } from "framer-motion";

const ExtraSection = () => {
  return (
    <section className="extra-section">
      <h2>Discover the World of Languages</h2>
      <div className="extra-content">
        <div className="extra-image">
          <motion.img
            src="/images/language.png"
            alt="Language Illustration"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
        <div className="extra-description">
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
            className="btn btn-primary"
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
