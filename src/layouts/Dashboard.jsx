import React from "react";
import Filters from "./Filters";
import Section from "./Section";

import { Container, Grid } from "semantic-ui-react";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Filters></Filters>
          </Grid.Column>
          <Grid.Column width={12}>
            <Section></Section>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
