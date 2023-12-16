import { Grid, GridItem, Show } from "@chakra-ui/react";

import NavBar from "./components/NavBar";
import MainDisplay from "./components/MainDisplay";
import Aside from "./components/Aside";
import Personas from "./components/Personas";
import First from "./components/firstIter";
import Second from "./components/secondIter";
import Feedback from "./components/Feedback";

function App() {
  return (
    <Grid
      templateAreas={`"nav nav" "main main" "aside aside" "personas personas" "first first" "feedback feedback" "second second"`}
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

      <GridItem area="personas">
        <Personas />
      </GridItem>

      <GridItem area="first" bg="#d8d8d8">
        <First />
      </GridItem>

      <GridItem area="feedback">
        <Feedback />
      </GridItem>

      <GridItem area="second" bg="#d8d8d8">
        <Second />
      </GridItem>
    </Grid>
  );
}

export default App;
