import styled from "styled-components";
import { principalColor } from "../../styles/Globals";

export const SidebarStyle = styled.div`
  width: 15%;
  border-right: solid 1px grey;
  padding: 10px;
  .profile {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      text-decoration: none;
      color: grey;
      font-size: 2em;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .menu {
    display: flex;
    flex-direction: column;
    a {
      text-decoration: none;
      color: black;
      padding: 1em;
      &:hover {
        background-color: ${principalColor};
        color: white;
      }
    }
  }
  .logout {
    display: flex;
    flex-direction: column;
    a {
      text-decoration: none;
      color: black;
      padding: 1em;
      text-align: center;
      &:hover {
        background-color: ${principalColor};
        color: white;
      }
    }
  }
`;
