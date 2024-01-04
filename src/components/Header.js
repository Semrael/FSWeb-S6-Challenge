import React from "react";
import styled from "styled-components";

export default function Header(props) {
  const StyHeader = styled.header`
    display: flex;
    justify-content: space-between;
  `;

  const { ChangeHandler, search } = props;
  return (
    <StyHeader>
      <h1>Start Wars</h1>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={ChangeHandler}
        name=""
        Search
      />
    </StyHeader>
  );
}
