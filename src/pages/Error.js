import { Link } from "react-router-dom";
import NormalSection from "../components/common/NormalSection";
import Intro from "../components/common/Intro";
import NormalText from "../components/common/NormalText";

const Error = () => {
  return (
    <NormalSection title="Error! 404">
      <Intro icon="fas fa-times-circle">
        <NormalText>
          Page Not Found!
          <Link to="/" className="btn">
            Go Back Home
          </Link>
        </NormalText>
      </Intro>
    </NormalSection>
  );
};

export default Error;
