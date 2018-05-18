import React from "react";
import GithubUserItem from "./GithubUserItem";
import Autocomplete from "./Autocomplete";
import { searchUsers } from "../api/githubApi";

class GithubUsersView extends React.Component {
  render() {
    return (
      <Autocomplete
        search={searchUsers}
        renderItem={(data, index) => (
          <GithubUserItem user={data} key={index} index={index} />
        )}
      />
    );
  }
}

export default GithubUsersView;
