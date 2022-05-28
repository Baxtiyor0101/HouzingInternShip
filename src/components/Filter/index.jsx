import React from "react";
import { Advanced, Container, Icon, Section } from "./style";
import { Popover } from "antd";
import { Button, Input } from "../Generic";
import UseReplace from "../../hooks/useReplace";
import { useNavigate } from "react-router-dom";

const Filter = () => {
  const navigate = useNavigate();
  const onChange = ({ target }) => {
    const { value, name } = target;
    navigate(`${UseReplace(name, value)}`);
  };
  const advancedSearch = (
    <Advanced>
      <Advanced.Title>Address</Advanced.Title>
      <Section>
        <Input
          onChange={onChange}
          pl={10}
          name="country"
          placeholder="Country"
        />
        <Input onChange={onChange} pl={10} name="region" placeholder="Region" />
        <Input onChange={onChange} pl={10} name="city" placeholder="City" />
        <Input
          onChange={onChange}
          pl={10}
          name="zip_code"
          placeholder="Zip Code"
        />
      </Section>
      <Advanced.Title>Apartment Info</Advanced.Title>
      <Section>
        <Input
          onChange={onChange}
          pl={10}
          name="address"
          placeholder="Address"
        />
        <Input
          onChange={onChange}
          pl={10}
          name="house_name"
          placeholder="House Name"
        />
        <Input onChange={onChange} pl={10} name="rooms" placeholder="Rooms" />
      </Section>
      <Advanced.Title>Price</Advanced.Title>
      <Section>
        <Input
          onChange={onChange}
          pl={10}
          name="min_price"
          placeholder="Min Price"
        />
        <Input
          onChange={onChange}
          pl={10}
          name="max_price"
          placeholder="Max Price"
        />
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
    <div className="center">
      <Container>
        <Input
          pl={50}
          placeholder={"Enter an address, neighborhood, city, or ZIP code"}
        >
          <Icon.Home />
        </Input>
        <Popover
          placement="bottomRight"
          content={advancedSearch}
          trigger="click"
        >
          <Button width={"131px"} type={"secondary"}>
            <Icon.Setting /> Advanced
          </Button>
        </Popover>
        <Button width={"131px"} type={"primary"}>
          <Icon.Search /> Search
        </Button>
      </Container>
    </div>
  );
};

export default Filter;
