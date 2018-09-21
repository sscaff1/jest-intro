// Import React
import React from "react";

// Import Spectacle Core tags
import { Deck, Heading, ListItem, List, Slide, Text, CodePane, Image } from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quaternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    const headingProps = {
      size: 1,
      fit: true,
      caps: true
    };
    return (
      <Deck transition={["slide"]} transitionDuration={500} theme={theme}>
        <Slide bgColor="primary">
          <Heading {...headingProps} textColor="secondary">
						Jest
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
						Delightful JavaScript Testing
          </Text>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading {...headingProps} textColor="primary">
						What is Jest?
          </Heading>
          <Text size={6} textColor="secondary" textAlign="left">
            <List>
              <ListItem>JavaScript Testing framework built by Facebook</ListItem>
              <ListItem>Can be used for both unit tests and front-end integration testing</ListItem>
              <ListItem>Easily mock functions to produce fast, reListItemable tests</ListItem>
              <ListItem>Easily integrates with Webpack</ListItem>
              <ListItem>Setup and tear down features before each test or blocks of test</ListItem>
              <ListItem>
								For the future, allows you take snapshots of React components to ensure UI remains consistent
              </ListItem>
            </List>
          </Text>
        </Slide>
        <Slide bgColor="secondary">
          <Heading {...headingProps}>Example of Test</Heading>
          <CodePane lang="javascript" source={require("raw-loader!../assets/mathFunctions.example")} textSize={20} />
        </Slide>
        <Slide bgColor="secondary">
          <Heading {...headingProps}>Example Output</Heading>
          <Image src="https://i.imgur.com/PvS1Dpa.png" height="450px" />
        </Slide>
        <Slide bgColor="tertiary">
          <Heading {...headingProps} textColor="primary">
						Implementation at LP
          </Heading>
          <Text size={6} textColor="secondary" textAlign="left">
            <List>
              <ListItem>JS located in the _client/ folder is modularized. Tests located in _client/__tests__</ListItem>
              <ListItem>Folder structure in __tests__ match the folder structure in _client</ListItem>
              <ListItem>For CI, we can use `npm run test` to run our tests</ListItem>
              <ListItem>
								During dev process, we can watch tests and they will automatically rerun for code change using `npm run
								test-watch`
              </ListItem>
            </List>
          </Text>
        </Slide>
        <Slide bgColor="secondary">
          <Heading {...headingProps}>Demo</Heading>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading {...headingProps} textColor="primary">
						Current State and Todo/Discuss
          </Heading>
          <Text size={6} textColor="secondary" textAlign="left">
            <List>
              <ListItem>Currently working on CI-53 branch. This branch will be eventually merged into KitSkus</ListItem>
              <ListItem>Training around writing front-end tests?</ListItem>
              <ListItem>All _client modules should include at least 1 unit test?</ListItem>
              <ListItem>Integrate into our CI process? Take action on failure?</ListItem>
              <ListItem>Establish githook to run tests before push?</ListItem>
            </List>
          </Text>
        </Slide>
      </Deck>
    );
  }
}
