import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  width: 100%;
  padding: 0px 20px 0px 20px;
  margin-top: 10px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  margin: 0px auto 0px auto;
  padding: 38px 0px 38px 0px;
  max-width: 1012px;
`;

const List = styled.ul`
  display: flex;
  margin-bottom: 15px;
`;

const ListItem = styled.li`
  margin-right: 18px;
`;

const Link = styled.a`
  color: ${(props) => props.theme.darkBlueColor};
  font-size: 12px;
  font-weight: 600;
`;

const Copyright = styled.span`
  color: ${(props) => props.theme.lightGreyColor};
`;

export default () => (
  <Footer>
    <Div>
      <List>
        <ListItem>
          <Link href="#">About</Link>
        </ListItem>
        <ListItem>
          <Link href="#">Help</Link>
        </ListItem>
        <ListItem>
          <Link href="#">Press</Link>
        </ListItem>
        <ListItem>
          <Link href="#">API</Link>
        </ListItem>
        <ListItem>
          <Link href="#">Jobs</Link>
        </ListItem>
        <ListItem>
          <Link href="#">Privacy</Link>
        </ListItem>
        <ListItem>
          <Link href="#">Impressum/Terms/NetzDg</Link>
        </ListItem>
        <ListItem>
          <Link href="#">Location</Link>
        </ListItem>
        <ListItem>
          <Link href="#">Top Accounts</Link>
        </ListItem>
        <ListItem>
          <Link href="#">Hashtag</Link>
        </ListItem>
        <ListItem>
          <Link href="#">LANGUAGE</Link>
        </ListItem>
      </List>
      <Copyright>&copy; {new Date().getFullYear()} Onekilogram</Copyright>
    </Div>
  </Footer>
);
