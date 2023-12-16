import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MainDisplay from "./components/MainDisplay";
import Aside from "./components/Aside";
import First from "./components/firstIter";
import Second from "./components/secondIter";

function App() {
  return (
    <Grid
      templateAreas={`"nav nav" "main main" "aside aside" "first first" "second second"`}
    >
      <GridItem area="nav" bg="#2F3134">
        <NavBar />
      </GridItem>

      <GridItem area="main" width="100%">
        <MainDisplay />
      </GridItem>

      <GridItem area="aside" paddingTop="5%" paddingBottom="5%" bg="#d8d8d8">
        <Aside />
      </GridItem>

      <GridItem area="first">
        <First />
      </GridItem>

      <GridItem area="second">
        <Second />
      </GridItem>
    </Grid>
  );
}

export default App;
