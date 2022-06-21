import React from "react";
import {
  MainContainer,
  Container,
  Icons,
  Wrap,
  Title,
  Flex,
  Link,
  Iconlink,
  Input,
  Telegram,
  Text,
  Logos,
  Wrapper,
} from "./style";
import contact, {
  discover,
  Lists,
  quickLInks,
  subscribe,
} from "../../utils/data/footerData";

export const FooterComponent = () => {
  return (
    <MainContainer>
      <Logos />
      <Container>
        <Wrap>
          <Title>Contact Us</Title>
          {contact.map((value) => (
            <Flex key={value.id}>
              <Icons src={value.icon} alt="" />
              <Link href={value.link}>{value.text}</Link>
            </Flex>
          ))}

          <Flex>
            <Iconlink href="https://www.facebook.com/">
              <Icons.Facebook />
            </Iconlink>
            <Iconlink href="https://www.twitter.com/">
              <Icons.Twitter />
            </Iconlink>
            <Iconlink href="https://www.instagram.com">
              <Icons.Instagram />
            </Iconlink>
            <Iconlink href="https://www.linkedin.com/">
              <Icons.Linkedin />
            </Iconlink>
          </Flex>
        </Wrap>
        <Wrap>
          <Title>Discover</Title>
          {discover.map((value) => (
            <Flex key={value.id}>
              <Link href={value.link}>{value.text}</Link>
            </Flex>
          ))}
        </Wrap>
        <Wrap>
          <Title>Quick Links</Title>
          {quickLInks.map((value) => (
            <Flex key={value.id}>
              <Link href={value.link}>{value.text}</Link>
            </Flex>
          ))}
        </Wrap>
        <Wrap>
          <Title>Lists by Catagory</Title>
          {Lists.map((value) => (
            <Flex key={value.id}>
              <Link href={value.link}>{value.text}</Link>
            </Flex>
          ))}
        </Wrap>
        <Wrap>
          <Title>Quick Links</Title>
          {quickLInks.map((value) => (
            <Flex key={value.id}>
              <Link href={value.link}>{value.text}</Link>
            </Flex>
          ))}
        </Wrap>
      </Container>
      <Wrapper>
        <Flex>
          <Logos.SmallLogo />
          <Title margin>Houzing</Title>
        </Flex>

        <Text>Copyright © 2021 CreativeLayers. All Right Reserved.</Text>
        <Logos.Arrow />
      </Wrapper>
    </MainContainer>
  );
};

export default FooterComponent;
