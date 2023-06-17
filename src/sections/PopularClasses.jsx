import { useEffect, useState } from "react";

const PopularClasses = () => {
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
    <section className="popular-classes mt-14">
          <h2 className="text-4xl text-center font-bold">Popular Classes</h2>
          <h3 className="text-lg text-center mb-8">Explore our most popular language courses</h3>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {popularClasses.map((classItem) => (
        <div key={classItem._id} className="rounded-lg shadow-xl border border-gray-300">
          <img src={classItem.image} alt="Class" className="w-full h-48 object-cover rounded-t-lg" />
          <div className="p-4">
            <h2 className="text-xl font-bold">{classItem.className}</h2>
            <p>Duration: {classItem.courseDuration}</p>
            <p>Students: {classItem.totalStudents}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
  
  );
};

export default PopularClasses;
