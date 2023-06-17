import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const StudentDashboard = () => {
    const { user } = useContext(AuthContext);
  const [myClasses, setMyClasses] = useState([]);
  const URL = `https://linguo-lab-server.vercel.app/my-classes?email=${user?.email}`;
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setMyClasses(data));
  }, [URL]);
console.log(myClasses);
  return (
    <div>
      <p className="text-4xl">{myClasses.length}</p>
    </div>
  );
};

export default StudentDashboard;
