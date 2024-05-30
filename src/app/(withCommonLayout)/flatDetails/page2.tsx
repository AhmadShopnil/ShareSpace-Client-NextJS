import Content from "@/components/Ui/FlatDetails/Content/Content";
import { PhotoGallery } from "@/components/Ui/FlatDetails/PhotoGallery/PhotoGallery";
import RelatedFlats from "@/components/Ui/FlatDetails/RelatedFlats/RelatedFlats";

import { Container } from "@mui/material";

const FlatDetails = () => {
  return (
    <Container
      sx={{
        my: 10,
      }}
    >
      <PhotoGallery></PhotoGallery>
      <RelatedFlats></RelatedFlats>
      {/* <Content></Content> */}
    </Container>
  );
};

export default FlatDetails;
