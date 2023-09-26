import { useEffect, useState } from "react";
import { BsPeopleFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos"; // Import AOS library

const PopularClasses = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  const [popularClasses, setPopularClasses] = useState([]);

  useEffect(() => {
    // Fetch popular classes data from the backend API
    fetch("https://linguo-lab-server.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => {
        // Sort classes based on the number of students enrolled
        const sortedClasses = data.sort(
          (a, b) => b.totalStudents - a.totalStudents
        );
        // Select the top 6 classes
        const topClasses = sortedClasses.slice(0, 6);
        setPopularClasses(topClasses);
      })
      .catch((error) => {
        console.error("Error fetching popular classes:", error);
      });
  }, []);

  return (
    <section className="popular-classes mt-14 mx-4 md:mx-0" data-aos="fade-up">
      <h2 className="text-4xl text-center font-bold">Popular Classes</h2>
      <h3 className="text-lg text-center mb-8">Explore our most popular language courses</h3>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {popularClasses.map((classItem) => (
          <div
            key={classItem._id}
            className="rounded-lg shadow-xl hover:shadow-2xl border border-gray-300"
            data-aos="fade-up"
          >
            <img loading="lazy" src={classItem.image} alt="Class" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-xl font-bold">{classItem.className}</h2>
              <p className="flex items-center font-medium">
                <BsPeopleFill /> Students: {classItem.totalStudents}
              </p>
              <p className="flex items-center">
                <BiTimeFive /> Duration: {classItem.courseDuration}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularClasses;
