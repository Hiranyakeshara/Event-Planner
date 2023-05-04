import React from "react";

import Wrapper from "./voteStyles";

const Vote = () => {
  return (
    <Wrapper>
      <h1>Generate Voting Codes </h1>
      &nbsp;
      <div className="content">
        <div className="details">Event</div>

        <div className="details">Title of vote</div>
        <button>Click to vote</button>
      </div>
    </Wrapper>
  );
};

export default Vote;
