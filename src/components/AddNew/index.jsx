import React from "react";
import { Button, Input } from "../Generic";
import { Container, Section, Wrapper } from "./style";
import { useMutation, useQuery } from "react-query";
import { useHttp } from "../../hooks/useHttp";
// const { REACT_APP_BASE_URL: url } = process.env;
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { message } from "antd";

const AddNew = () => {
  const navigate = useNavigate();
  const { request } = useHttp();
  const [data, setData] = useState({});

  const { id } = useParams();

  useQuery(
    "getSingle Item",
    () => {
      return id && request({ url: `/v1/houses/${id}`, token: true });
    },
    {
      onSuccess: (res) => {
        console.log(res, "res");
        setData(res?.data);
      },
    }
  );
  // const submit = () => {
  //   mutate("", {
  //     onSuccess: (res) => {
  //       if (res?.success) {
  //         navigate("/profile/properties");
  //       }
  //       console.log(res);
  //     },
  //   });
  // };

  const [center, setCenter] = useState({
    lat: 41.2995,
    lng: 69.2401,
  });
  const containerStyle = {
    width: "100%",
    height: "600px",
  };
  const libraries = ["places"];

  const { REACT_APP_GoogleApiKey: key } = process.env;
  const { isLoaded } = useJsApiLoader({
    id: "edit-house",
    // libraries,
    googleMapsApiKey: key,
  });
  const [map, setMap] = React.useState(null);
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const onMapClick = (e) => {
    console.log(e?.LatLng?.lat(), "lat");
    console.log(e?.LatLng?.lng(), "lat");
    setCenter({
      lat: e?.LatLng.lat(),
      lat: e?.LatLng.lng(),
    });
  };

  const { mutate } = useMutation(() =>
    request({
      url: "/v1/houses",
      token: true,
      method: "POST",
      body: {
        address: "webbrain academy eng yaxshi ",
        attachments: [
          {
            imgPath:
              "https://nypost.com/wp-content/uploads/sites/2/2022/05/alexa-real-estate-4.jpg",
          },
        ],
        categoryId: 0,
        city: "Earth",
        componentsDto: {
          additional: "the best one",
          airCondition: true,
          courtyard: true,
          furniture: true,
          gasStove: true,
          internet: true,
          tv: true,
        },
        country: "Uzbekistan",
        description: "the best country",
        favorite: true,
        homeAmenitiesDto: {
          additional: "baxt",
          busStop: true,
          garden: true,
          market: true,
          park: true,
          parking: true,
          school: true,
          stadium: true,
          subway: true,
          superMarket: true,
        },
        houseDetails: {
          area: 1,
          bath: 2,
          beds: 3,
          garage: 4,
          room: 5,
          yearBuilt: 2020,
        },
        locations: {
          latitude: 0,
          longitude: 0,
        },
        name: "oila eng muhim",
        price: 7965420,
        region: "Iymon",
        salePrice: 234e320,
        status: true,
        zipCode: "456789",
      },
    })
  );

  const { mutate: update } = useMutation((id) => {
    return (
      id &&
      request({
        url: `/v1/houses/${id}`,
        method: "PUT",
        token: true,
        body: data,
      })
    );
  });

  const onSubmit = () => {
    if (id) {
      update(id, {
        onSuccess: (res) => {
          if (res?.success) {
            message.info("updated");
            navigate("/profile/properties");
          }
        },
      });
    } else {
      mutate("", {
        onSuccess: (res) => {
          console.log(res);
          if (res?.success) {
            navigate("/profile/properties");
          }
        },
      });
    }
  };

  const onChange = ({ target: { name, value } }) => {
    setData({ ...data, [name]: value });
  };

  return (
    <Container>
      <Section>
        <div className="subtitle">Contact information</div>
        <Wrapper>
          <Input
            name="address"
            onChange={onChange}
            value={data?.address}
            placeholder={"Property Title"}
          />
          <Input name="category" placeholder={"Category"} />
        </Wrapper>
        <Wrapper>
          <Input
            name="propertyDescription"
            placeholder={"Property Description"}
          />
        </Wrapper>
      </Section>
      <Section>
        <div className="subtitle">Additional</div>
        <Wrapper>
          <Input
            name="bath"
            value={data?.houseDetails?.bath}
            placeholder={"bath"}
          />
          <Input
            name="bed"
            value={data?.houseDetails?.bed}
            placeholder={"bed"}
          />
          <Input
            name="garage"
            value={data?.houseDetails?.garage}
            placeholder={"garage"}
          />
        </Wrapper>
        <Wrapper>
          <Input name="yearBuild" placeholder={"year build"} />
          <Input name="homeArea" placeholder={"Home area"} />
          <Input name="rooms" placeholder={"Rooms"} />
        </Wrapper>
      </Section>
      <Section>
        <div className="subtitle">Price</div>
        <Wrapper>
          <Input name="price" placeholder={"Price"} />
          <Input name="salePrice" placeholder={"Sale Price"} />
        </Wrapper>
      </Section>
      <Section>
        <div className="subtitle">Location</div>
        <Wrapper>
          <Input name="region" placeholder={"Region"} />
          <Input name="address" placeholder={"Address"} />
        </Wrapper>
        <Wrapper>
          {isLoaded && (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
              onLoad={onLoad}
              onClick={onMapClick}
            >
              <Marker position={center} />
              <Marker position={center} />
              <></>
            </GoogleMap>
          )}
        </Wrapper>
      </Section>

      <Button mt={10} type="primary" onClick={onSubmit} width={`150px`}>
        Submit
      </Button>
    </Container>
  );
};

export default AddNew;

// import React from "react";
// import { Button, Input } from "../Generic";
// import { Container, Section, Wrapper } from "./style";
// import { useMutation, useQuery } from "react-query";
// import { useHttp } from "../../hooks/useHttp";
// // const { REACT_APP_BASE_URL: url } = process.env;
// import { useNavigate, useParams } from "react-router-dom";
// import { useState } from "react";
// import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
// import { message } from "antd";
// import { useFormik } from "formik";

// const AddNew = () => {
//   const navigate = useNavigate();
//   const { request } = useHttp();
//   const [data, setData] = useState({});

//   const { id } = useParams();

//   useQuery(
//     "getSingle Item",
//     () => {
//       return id && request({ url: `/v1/houses/${id}`, token: true });
//     },
//     {
//       onSuccess: (res) => {
//         console.log(res, "res");
//         setData(res?.data);
//       },
//     }
//   );
//   // const submit = () => {
//   //   mutate("", {
//   //     onSuccess: (res) => {
//   //       if (res?.success) {
//   //         navigate("/profile/properties");
//   //       }
//   //       console.log(res);
//   //     },
//   //   });
//   // };

//   const [center, setCenter] = useState({
//     lat: 41.2995,
//     lng: 69.2401,
//   });
//   const containerStyle = {
//     width: "100%",
//     height: "600px",
//   };
//   const libraries = ["places"];

//   const { REACT_APP_GoogleApiKey: key } = process.env;
//   const { isLoaded } = useJsApiLoader({
//     id: "edit-house",
//     // libraries,
//     googleMapsApiKey: key,
//   });
//   const [map, setMap] = React.useState(null);
//   const onLoad = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);
//     setMap(map);
//   }, []);

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null);
//   }, []);

//   const onMapClick = (e) => {
//     console.log(e?.LatLng?.lat(), "lat");
//     console.log(e?.LatLng?.lng(), "lat");
//     setCenter({
//       lat: e?.LatLng.lat(),
//       lat: e?.LatLng.lng(),
//     });
//   };

//   const { mutate } = useMutation(() =>
//     request({
//       url: "/v1/houses",
//       token: true,
//       method: "POST",
//       body: {
//         address: "webbrain academy",
//         attachments: [
//           {
//             imgPath:
//               "https://nypost.com/wp-content/uploads/sites/2/2022/05/alexa-real-estate-4.jpg",
//           },
//         ],
//         categoryId: 0,
//         city: "Earth",
//         componentsDto: {
//           additional: "the best one",
//           airCondition: true,
//           courtyard: true,
//           furniture: true,
//           gasStove: true,
//           internet: true,
//           tv: true,
//         },
//         country: "Uzbekistan",
//         description: "the best country",
//         favorite: true,
//         homeAmenitiesDto: {
//           additional: "baxt",
//           busStop: true,
//           garden: true,
//           market: true,
//           park: true,
//           parking: true,
//           school: true,
//           stadium: true,
//           subway: true,
//           superMarket: true,
//         },
//         houseDetails: {
//           area: 1,
//           bath: 2,
//           beds: 3,
//           garage: 4,
//           room: 5,
//           yearBuilt: 2020,
//         },
//         locations: {
//           latitude: 0,
//           longitude: 0,
//         },
//         name: "oila eng muhim",
//         price: 7965420,
//         region: "Iymon",
//         salePrice: 234e320,
//         status: true,
//         zipCode: "456789",
//       },
//     })
//   );

//   const { mutate: update } = useMutation((id) => {
//     return (
//       id &&
//       request({
//         url: `/v1/houses/${id}`,
//         method: "PUT",
//         token: true,
//         body: data,
//       })
//     );
//   });

//   const onSubmit = () => {
//     if (id) {
//       update(id, {
//         onSuccess: (res) => {
//           if (res?.success) {
//             message.info("updated");
//             navigate("/profile/properties");
//           }
//         },
//       });
//     } else {
//       mutate("", {
//         onSuccess: (res) => {
//           console.log(res);
//           if (res?.success) {
//             navigate("/profile/properties");
//           }
//         },
//       });
//     }
//   };

//   // const onChange = ({ target: { name, value } }) => {
//   //   setData({ ...data, [name]: value });
//   // };

//   const [formic, setFormic] = useState({});
//   const formik = useFormik({
//     initialValues: {
//       address: "",
//       category: "",
//       propertyDescription: "",
//       bath: "",
//       bed: "",
//       garage: "",
//       yearBuild: "",
//       homeArea: "",
//       rooms: "",
//       price: "",
//       salePrice: "",
//       region: "",
//       address: "",
//     },
//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2));
//       // console.log(JSON.stringify(values, null, 2), "this is formic ser");
//       setFormic(JSON.stringify(values, null, 2));
//     },
//   });
//   console.log(formic);

//   return (
//     <Container>
//       <form onSubmit={formik.handleSubmit}>
//         <Section>
//           <div className="subtitle">Contact information</div>
//           <Wrapper>
//             <Input
//               name="address"
//               onChange={formik.handleChange}
//               value={formik.values.address}
//               placeholder={"Property Title"}
//             />
//             <Input
//               onChange={formik.handleChange}
//               value={formik.values.category}
//               name="category"
//               placeholder={"Category"}
//             />
//           </Wrapper>
//           <Wrapper>
//             <Input
//               onChange={formik.handleChange}
//               value={formik.values.propertyDescription}
//               name="propertyDescription"
//               placeholder={"Property Description"}
//             />
//           </Wrapper>
//         </Section>
//         <Section>
//           <div className="subtitle">Additional</div>
//           <Wrapper>
//             <Input
//               onChange={formik.handleChange}
//               value={formik.values.bath}
//               name="bath"
//               placeholder={"bath"}
//             />
//             <Input
//               onChange={formik.handleChange}
//               value={formik.values.bed}
//               name="bed"
//               placeholder={"bed"}
//             />
//             <Input
//               onChange={formik.handleChange}
//               value={formik.values.garage}
//               name="garage"
//               placeholder={"garage"}
//             />
//           </Wrapper>
//           <Wrapper>
//             <Input
//               onChange={formik.handleChange}
//               value={formik.values.yearBuild}
//               name="yearBuild"
//               placeholder={"year build"}
//             />
//             <Input
//               onChange={formik.handleChange}
//               value={formik.values.homeArea}
//               name="homeArea"
//               placeholder={"Home area"}
//             />
//             <Input
//               onChange={formik.handleChange}
//               value={formik.values.rooms}
//               name="rooms"
//               placeholder={"Rooms"}
//             />
//           </Wrapper>
//         </Section>
//         <Section>
//           <div className="subtitle">Price</div>
//           <Wrapper>
//             <Input
//               onChange={formik.handleChange}
//               value={formik.values.price}
//               name="price"
//               placeholder={"Price"}
//             />
//             <Input
//               onChange={formik.handleChange}
//               value={formik.values.salePrice}
//               name="salePrice"
//               placeholder={"Sale Price"}
//             />
//           </Wrapper>
//         </Section>
//         <Section>
//           <div className="subtitle">Location</div>
//           <Wrapper>
//             <Input
//               onChange={formik.handleChange}
//               value={formik.values.region}
//               name="region"
//               placeholder={"Region"}
//             />
//             <Input
//               onChange={formik.handleChange}
//               value={formik.values.address}
//               name="address"
//               placeholder={"Address"}
//             />
//           </Wrapper>
//           <Wrapper>
//             {isLoaded && (
//               <GoogleMap
//                 mapContainerStyle={containerStyle}
//                 center={center}
//                 zoom={10}
//                 onLoad={onLoad}
//                 onClick={onMapClick}
//               >
//                 <Marker position={center} />
//                 <Marker position={center} />
//                 <></>
//               </GoogleMap>
//             )}
//           </Wrapper>
//         </Section>

//         <button
//           type="submit"
//           // type="primary"
//           onClick={onSubmit}
//           // width={`150px`}
//           style={{
//             background: "#0061df",
//             width: "150px",
//             padding: "10px",
//             border: "none",
//             marginTop: "10px",
//           }}
//         >
//           Submit
//         </button>
//       </form>
//     </Container>
//   );
// };

// export default AddNew;
