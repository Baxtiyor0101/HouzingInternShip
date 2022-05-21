import React from "react";
import { Advanced, Container, Icon, Section } from "./style";
import { Popover } from "antd";
import { Button, Input } from "../Generic";

const Filter = () => {
  const advancedSearch = (
    <Advanced>
      <Advanced.Title>Address</Advanced.Title>
      <Section>
        <Input pl={10} placeholder="Country" />
        <Input pl={10} placeholder="Region" />
        <Input pl={10} placeholder="City" />
        <Input pl={10} placeholder="Zip Code" />
      </Section>
      <Advanced.Title>Apartment Info</Advanced.Title>
      <Section>
        <Input pl={10} placeholder="Address" />
        <Input pl={10} placeholder="House Name" />
        <Input pl={10} placeholder="Rooms" />
      </Section>
      <Advanced.Title>Price</Advanced.Title>
      <Section>
        <Input pl={10} placeholder="Min Price" />
        <Input pl={10} placeholder="Max Price" />
      </Section>
      <Section>
        {/* <Button width={"131px"} ml={20} type={"secondary"}>
          Search
        </Button> */}
        <Button width={"131px"} ml={20} type={"primary"}>
          Search
        </Button>
      </Section>
    </Advanced>
  );
  return (
    <Container>
      <Input
        pl={50}
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
      >
        <Icon.Home />
      </Input>
      <Popover placement="bottomRight" content={advancedSearch} trigger="click">
        <Button width={"131px"} type={"secondary"}>
          <Icon.Setting /> Advanced
        </Button>
      </Popover>
      <Button width={"131px"} type={"primary"}>
        <Icon.Search /> Search
      </Button>
    </Container>
  );
};

export default Filter;
