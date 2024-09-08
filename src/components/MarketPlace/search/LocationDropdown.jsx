import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../../reducer/store";
import { FILTERPROP } from "../../../slices/filter";

const LocationDropdown = () => {
  const [location, setlocation] = useState("");
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(
  //     FILTERPROP(location),
  //   );
  // },)

  return (
    <StyledForm>
      <select
        // className="bg-transparent"
        className="tagcloud"
        style={{
          // borderRadius: "12px",
          color: "#371178",
          fontStyle: "normal",
          fontWeight: "500",
        }}
        // onChange={(e) => setlocation(e.target.value)}
      >
        <option value="">All Properties</option>
        <option value="Single Fmaily">Single Fmaily</option>
        <option value="Multiple Fmaily">Multiple Fmaily</option>
        <option value="Mix Fmaily">Mix Fmaily</option>
      </select>
    </StyledForm>
  );
};

export default LocationDropdown;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 200px;

  select,
  input {
    padding: 7px;
    min-height: 30px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(182, 182, 182);
    margin: 0.3rem 0;

    &:focus {
      border: 2px solid rgb(0, 208, 255);
    }
  }

  select {
    color: rgb(95, 95, 95);
  }
`;
