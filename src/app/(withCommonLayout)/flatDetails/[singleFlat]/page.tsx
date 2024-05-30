import Content from "@/components/Ui/FlatDetails/Content/Content";
import { PhotoGallery } from "@/components/Ui/FlatDetails/PhotoGallery/PhotoGallery";
import RelatedFlats from "@/components/Ui/FlatDetails/RelatedFlats/RelatedFlats";

import { Container } from "@mui/material";

const SingleFlat = async ({ params }: { params: any }) => {
  const flatId = params.singleFlat;
  const res = await fetch(`http://localhost:3000/api/flats/${flatId}`);
  const data = await res.json();
  console.log("data-", data);
  return (
    <Container
      sx={{
        my: 10,
      }}
    >
      <h1>{flatId}</h1>
      <PhotoGallery></PhotoGallery>
      <RelatedFlats></RelatedFlats>
      {/* <Content flatDetails={data?.result}></Content> */}
    </Container>
  );
};

export default SingleFlat;
