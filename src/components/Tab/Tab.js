import styled from "styled-components";
import { H1, MEDIA_QUERY } from "../../constants/style";
import { theme } from "../../constants/theme";

export const Tabs = styled.div`
  overflow: hidden;
  background: #ffffff;
  height: 3em;
`;

// margin-right: 0.1em;
// height: ${(props) => (props.active ? "3em" : "2.6em; top:.4em")};
export const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 33%;
  position: relative;

  font-size: 1em;
  border: ${(props) => (props.active ? "" : "")};
  border-bottom: ${(props) =>
    props.active ? "2px solid #6e70ff" : "2px solid #e6e6eb"};
  background-color: ${(props) =>
    props.active ? theme.colors.mainPrimary : theme.colors.neutralLightGrey};
  height: ${(props) => (props.active ? "3em" : "3em;")};
  transition: background-color 0.5s ease-in-out;
`;

export const Content = styled.div`
  ${(props) => (props.active ? "" : "display: none")}
`;
