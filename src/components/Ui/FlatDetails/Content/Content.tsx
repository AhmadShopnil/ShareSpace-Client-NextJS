import FlatDetails from "@/app/(withCommonLayout)/flatDetails/page2";
import { TFlat } from "@/types/common";

const Content = ({ flatDetails }: { flatDetails: TFlat }) => {
  console.log(flatDetails);

  const { squareFeet, totalBedrooms, utilitiesDescription, description } =
    flatDetails;

  return (
    <div>
      <h1>{squareFeet}</h1>
      <h1>{totalBedrooms}</h1>
    </div>
  );
};

export default Content;
