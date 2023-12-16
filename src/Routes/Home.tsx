import { Grid, GridItem, Show } from "@chakra-ui/react";
import Route from "react-router-dom";
import NavBar from "../components/NavBar";
import MainDisplay from "../components/MainDisplay";
import Aside from "../components/Aside";
import Personas from "../components/Personas";
import First from "../components/firstIter";
import Second from "../components/secondIter";
import Feedback from "../components/Feedback";

function Home() {
  return (
    <Grid
      templateAreas={`"nav nav" "main main" "aside aside" "personas personas" "first first" "feedback feedback" "second second"`}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem area="main">
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

export default Home;
