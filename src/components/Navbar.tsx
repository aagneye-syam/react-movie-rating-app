import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled(Menu)`
  &&& { /* Target nested elements for proper styling */
    fixed: top;
    width: 100%;  /* Ensure full-width navbar */
    display: flex;
    justify-content: space-between; /* Distribute items evenly */
    padding: 0.5rem 1rem;  /* Add some padding */
    background-color: #24292e;  /* Set a base background color */
    color: #fff;  /* Set text color */
  }

  &&& a { /* Target anchor tags within the navbar */
    color: inherit; /* Inherit text color from navbar */
    text-decoration: none; /* Remove default underline */
    font-size: 1.3rem; /* Maintain consistent font size */
    padding: 0.5rem 1rem;  /* Add some padding to links */

    &:hover { /* Style on hover */
      color: #f1faee;  /* Lighter color on hover */
      background-color: #1a1f24;  /* Slight background change */
    }
  }

  &&& .ui.right.menu { /* Target right-aligned menu items */
    display: flex; /* Ensure horizontal layout */
    margin-left: auto; /* Push right-aligned items to the end */
  }
`;

export const Navbar = () => {
  return (
    <StyledNavbar size="huge">
      <Menu.Item as={Link} to="/">Home</Menu.Item>
      <Menu.Item as={Link} to="/rated">Rated</Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item as={Link} to="/auth">Sign In</Menu.Item>
      </Menu.Menu>
    </StyledNavbar>
  );
};

