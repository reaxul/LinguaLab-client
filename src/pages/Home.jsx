import Banner from "../components/Banner";
import PopularClasses from "../sections/PopularClasses";
import PopularInstructors from "../sections/PopularInstructors";

const Home = () => {
  return (
    <div>
          <Banner></Banner>
          <PopularClasses></PopularClasses>
          <PopularInstructors></PopularInstructors>
    </div>
  );
};

export default Home;
