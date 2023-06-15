import Banner from "../components/Banner";
import ExtraSection from "../sections/ExtraSection";
import PopularClasses from "../sections/PopularClasses";
import PopularInstructors from "../sections/PopularInstructors";

const Home = () => {
  return (
    <div>
          <Banner></Banner>
          <PopularClasses></PopularClasses>
          <ExtraSection></ExtraSection>
          <PopularInstructors></PopularInstructors>
    </div>
  );
};

export default Home;
