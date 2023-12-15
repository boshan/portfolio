import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid templateAreas={`"nav nav" "main main" "aside desc"`}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem area="main" bg="dodgerblue" width="100%" height="500px">
        Main
      </GridItem>

      <GridItem area="aside" bg="gold" width="100%">
        Aside
      </GridItem>

      <GridItem area="desc" bg="coral" width="100%">
        desc
      </GridItem>
    </Grid>
  );
}

export default App;
