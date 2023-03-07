import QualityItem from "./QualityItem";
import qualityData from "./qualityData";
import { Link } from "react-router-dom";
import NormalSection from "../common/NormalSection";
import EmText from "../common/EmText";

const Quality = () => {
  return (
    <NormalSection title="Quality Assurance">
      <div className="gridAuto280">
        {qualityData.map((item) => {
          const { id, icon, title, desc } = item;
          return <QualityItem key={id} icon={icon} title={title} desc={desc} />;
        })}
      </div>
      <EmText>
        For your queries, please <Link to="/contact">Contact Us</Link>. Our team
        is available 24/7 to respond as fast as possible!
      </EmText>
    </NormalSection>
  );
};

export default Quality;
