import styled from "styled-components";

export const Divv = styled.div`
  margin: ${(props) => (props.margin ? props.margin : "25px")};
  font-family: ${(props) => (props.font ? props.font : "Franklin Gothic")};
  font-size: ${(props) => (props.size ? props.size : "27.5px")};
  color: ${(props) => (props.color ? props.color : "black")};
`;
