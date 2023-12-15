import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MainDisplay from "./components/MainDisplay";
import Aside from "./components/Aside";

function App() {
  return (
    <Grid templateAreas={`"nav nav" "main main" "aside desc"`}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem area="main" width="100%">
        <MainDisplay />
      </GridItem>

      <GridItem area="aside" bg="gold" width="100%">
        <Aside />
      </GridItem>

      <GridItem area="desc" bg="coral" width="100%">
        desc
      </GridItem>
    </Grid>
  );
}

export default App;
