import { useEffect, useState } from "react";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    // Fetch popular classes data from the backend API
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data)
      })
      .catch((error) => {
        console.error("Error fetching popular classes:", error);
      });
  }, []);

  return (
    <section className="popular-classes pt-20">
          <h2 className="text-4xl text-center font-bold">Classes</h2>
          <h3 className="text-lg text-center mb-8">Get ready with us for language courses</h3>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {classes.map((classItem) => (
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

export default Classes;
