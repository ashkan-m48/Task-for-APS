import { Container, Grid2 } from "@mui/material";
import Dropzone from "@/component/Dropzone";

export default function Home() {
  return (
    <Container fluid sx={{ padding: "20px" }}>
      <Dropzone />
    </Container>
  );
}
