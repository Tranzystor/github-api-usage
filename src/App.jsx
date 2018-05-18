import React, { Component } from "react";
import styled from "styled-components";
import GithubUsersView from "./searchGithubUsers/GithubUsersView";
import FavouriteUsersMain from "./favouriteUsers/FavouriteUsersMain";

const AppContainer = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0;
  right: 0;
  display: flex;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const AppColumn = styled.div`
  flex: 0 0 50%;
  padding: 30px;
  height: 100%;
`;

const LeftColumn = styled(AppColumn)`
  background: #cfcfc4;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <LeftColumn>
          <GithubUsersView />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </LeftColumn>
        <AppColumn>
          <FavouriteUsersMain />
        </AppColumn>
      </AppContainer>
    );
  }
}

export default App;
