import { useEffect, useState } from "react";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("https://linguo-lab-server.vercel.app/instructor")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
      })
      .catch((error) => {
        console.error("Error fetching popular classes:", error);
      });
  }, []);

  return (
    <section className="popular-classes mb-14 pt-20">
      <h2 className="text-4xl text-center font-bold">Instructors</h2>
      <h3 className="text-lg text-center mb-8">
        Meet our Expert Language Teaching Instructors
      </h3>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {instructors.map((instructor) => (
          <div
            key={instructor._id}
            className="rounded-lg shadow-xl border border-gray-300"
          >
            <img
              src={instructor.image}
              alt="Class"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{instructor.name}</h2>
              <p>Email: {instructor.email}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Instructors;
