import { useState } from "react";

import { dummyServices, type services } from "../utils";
import { useNavigate } from "react-router";
import searchImg from "../assets/search.png";

export const Home = () => {
  const Navigation = useNavigate();

  const [search, setSearch] = useState("");
  const [servicesList, setServicesList] = useState(dummyServices);
  const handleChange = (value: string) => {
    setSearch(value);
    const searchesServices = dummyServices.filter((item) => {
      if (
        item?.name?.toLocaleLowerCase()?.includes(value?.toLocaleLowerCase()) ||
        item?.description
          ?.toLocaleLowerCase()
          ?.includes(value?.toLocaleLowerCase()) ||
        item?.price?.toLocaleLowerCase()?.includes(value?.toLocaleLowerCase())
      ) {
        return true;
      }
      return false;
    });
    setServicesList(searchesServices);
  };
  const ServiceItem = ({ item }) => {
    const handleServiceClcik = () => {
      Navigation(`/service/${item?.id}`);
    };
    return (
      <div
        onClick={handleServiceClcik}
        key={item.id}
        style={{
          cursor: "pointer",
          border: "1px solid white",
          padding: "5px",
          marginTop: "5px",
          borderRadius: "5px",
          minWidth: "500px",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <img
            src={item.img}
            style={{
              height: "50px",
              width: "50px",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "5px",
            }}
          >
            <span>{item?.name} </span>
            <span>
              {item?.description?.length > 20
                ? `${item?.description?.slice(0, 20)}...`
                : item?.description}{" "}
            </span>
          </div>
        </div>
      </div>
    );
  };
  const handleLogout = () => {
    localStorage.clear();
    Navigation("/");
  };
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <h1>Home</h1>
        <div
          style={{
            alignSelf: "center",
            marginLeft: "5px",
          }}
        >
          <button onClick={() => handleLogout()}>Logout</button>
        </div>
      </div>
      <div
        style={{
          position: "relative",
        }}
      >
        <input
          style={{
            width: "300px",
            borderRadius: "10px",
            height: "30px",
            border: "1px solid white",
            paddingLeft: "27px",
          }}
          placeholder="Search"
          value={search}
          onChange={(e) => handleChange(e.target.value)}
        />
        <div
          style={{
            position: "absolute",
            top: "7px",
            left: "5px",
            cursor: "pointer",
            borderRadius: "50%",
          }}
        >
          <img
            src={searchImg}
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
            }}
          />
        </div>
      </div>
      <div
        style={{
          marginTop: "5px",
        }}
      >
        {[...servicesList].map((item: services) => {
          return <ServiceItem item={item} />;
        })}
      </div>
    </div>
  );
};
