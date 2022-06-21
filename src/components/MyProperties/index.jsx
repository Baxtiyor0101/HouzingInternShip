import React from "react";
// import Card from "../Card";
import { useHttp } from "../../hooks/useHttp";
import { useMutation, useQuery } from "react-query";
import { Container, Wrapper, Section, Table, Tr, Td, Th, Icons } from "./style";
import { message, Popconfirm } from "antd";
import { Button } from "../Generic";
import { useNavigate } from "react-router-dom";
import CardTable from "./CardTable";
const { REACT_APP_BASE_URL: url } = process.env;
const MyProperties = () => {
  const navigate = useNavigate();

  const { request } = useHttp();

  const { data, refetch } = useQuery("getMyProperties", (res) => {
    return request({ url: "/v1/houses/me", token: true });
  });

  const { mutate } = useMutation((id) => {
    return request({ url: `/v1/houses/${id}`, method: "DELETE" });
  });

  const confirm = (id) => {
    mutate(id, {
      onSuccess: (res) => {
        if (res?.success) {
          message.success("Deleted");
          refetch();
        }
      },
    });
  };
  // console.log(data);

  return (
    <Wrapper>
      <Section>
        <div className="title">Properties</div>
        <Button
          onClick={() => navigate("/profile/add")}
          type={"primary"}
          width={"131px"}
        >
          Add New
        </Button>
      </Section>
      <Table>
        <thead>
          <Tr>
            <Th>Listing Title</Th>
            <Th>Published</Th>
            <Th>Status</Th>
            <Th>View</Th>
            <Th>Action</Th>
          </Tr>
        </thead>
        <tbody>
          {data?.data.map((value) => {
            return (
              <Tr key={value.id}>
                <Td>
                  <CardTable info={value} />
                </Td>
                <Td>{new Date().getFullYear()}</Td>
                <Td>{value?.status ? "Sotilmagan" : "Sotilgan"}</Td>
                <Td>1234</Td>
                <Td>
                  <Container>
                    <Icons.Edit
                      onClick={() => navigate(`/profile/add/${value.id}`)}
                    />
                    <Popconfirm
                      title="Uyni ochirmoqchimisz"
                      onConfirm={() => confirm(value?.id)}
                      // onCancel={cancel}
                      // okText="Yes"
                      // cencelText="No"
                    >
                      <Icons.Trash />
                    </Popconfirm>
                  </Container>
                </Td>
              </Tr>
            );
          })}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default MyProperties;
