import { useEffect, useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos"; // Import AOS library

const PopularInstructors = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    // Fetch popular instructors data from the backend API
    fetch("https://linguo-lab-server.vercel.app/instructor")
      .then((res) => res.json())
      .then((data) => {
        // Select the top 6 instructors
        const popularInstructor = data.slice(0, 6);
        setInstructors(popularInstructor);
      })
      .catch((error) => {
        console.error("Error fetching popular instructors:", error);
      });
  }, []);

  return (
    <section className="popular-instructors my-14 mx-4 md:mx-0" data-aos="fade-up">
      <h2 className="text-4xl text-center font-bold">Top Instructors</h2>
      <h3 className="text-lg text-center mb-8">Learn from the Best - Our Highly Skilled Instructors</h3>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {instructors.map((instructor) => (
          <div
            key={instructor._id}
            className="rounded-lg shadow-xl border border-gray-300 hover:shadow-2xl transition duration-300"
            data-aos="fade-up"
          >
            <img loading="lazy" src={instructor.image} alt="Instructor" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-xl font-bold">{instructor.name}</h2>
              <p className="flex items-center gap-1">
                <FaEnvelope />Mail: {instructor.email}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularInstructors;
