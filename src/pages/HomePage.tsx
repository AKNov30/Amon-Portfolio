import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

function HomePage() {
  return (
    <>
      <Stack
        spacing={{ sm: 12 }}
        direction="row"
        useFlexGap
        sx={{ flexWrap: "wrap" }}
      >
        <Box>
          <img src="../../public/profile.jpg" alt="Profile of Amon" />
        </Box>
        <Box >
          <h6>Hello!</h6>
          <h1>i'm Amon <br/> Kuwana</h1>
          <h3>i'm front-end developer</h3>
        </Box>
        
      </Stack>
    </>
  );
}

export default HomePage;
