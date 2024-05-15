import styled from "styled-components";

export const ThemeContainer = styled.div`
  color: ${(props) => (props.theme === "light" ? "#1e272e" : "#f5f5f5")};
  background-color: ${(props) =>
    props.theme === "light" ? "#f5f5f5" : "#1e272e"};
`;
