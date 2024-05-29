import Content from "@/components/Ui/FlatDetails/Content/Content";
import { PhotoGallery } from "@/components/Ui/FlatDetails/PhotoGallery/PhotoGallery";
import RelatedFlats from "@/components/Ui/FlatDetails/RelatedFlats/RelatedFlats";

import { Container } from "@mui/material";

const SingleFlat = async ({ params }: { params: any }) => {
  const flatId = params.singleFlat;
  //   const res = await fetch(`http://localhost:5000/api/v1/flatDetails/${flatId}`);
  //   const { data: flatDetails } = await res.json();
  const flatDetails = {};
  return (
    <Container
      sx={{
        my: 10,
      }}
    >
      <h1>{flatId}</h1>
      <PhotoGallery flatDetails={flatDetails}></PhotoGallery>
      <RelatedFlats></RelatedFlats>
      <Content flatDetails={flatDetails}></Content>
    </Container>
  );
};

export default SingleFlat;
