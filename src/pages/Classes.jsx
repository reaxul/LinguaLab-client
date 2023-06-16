import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Classes = () => {
  const { user } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);
const navigate=useNavigate()
  useEffect(() => {
    fetch("http://localhost:5000/all-classes")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      })
      .catch((error) => {
        console.error("Error fetching popular classes:", error);
      });
  }, []);

  const handleSelectClass = (classId) => {
    if (!user) {
    //   alert("Please log in before selecting a course.");
        navigate('/login');
      return;
    }

    // Handle class selection logic here...
    console.log(`Selected class with ID: ${classId}`);
  };

  return (
    <section className="popular-classes pt-20">
      <h2 className="text-4xl text-center font-bold">Classes</h2>
      <h3 className="text-lg text-center mb-8">
        Get ready with us for language courses
      </h3>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {classes.map((classItem) => (
          <div
            key={classItem._id}
            className={`class-card rounded-lg shadow-xl border border-gray-300 ${
              classItem.availableSeats === 0 ? "bg-red-500" : ""
            }`}
          >
            <img
              src={classItem.image}
              alt="Class"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{classItem.name}</h2>
              <p>Instructor: {classItem.instructor}</p>
              <p>Available Seats: {classItem.availableSeats}</p>
              <p>Price: ${classItem.price}</p>
              <button
                disabled={
                  classItem.availableSeats === 0 ||
                  user?.isAdmin ||
                  user?.isInstructor
                }
                onClick={() => handleSelectClass(classItem._id)}
                className="btn btn-block bg-[#1d424f]"
              >
                {user && !user.isAdmin && !user.isInstructor
                  ? "Select"
                  : "Unavailable"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Classes;
