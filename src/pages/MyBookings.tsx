import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const MyBookings = () => {
  type serviceDetailsType = {
    img: string;
    price: string;
    name: string;
    id: number;
    description: string;
    date?: string;
  };
  const [myBookingList, setMyBookingList] = useState([]);
  const Navigation = useNavigate();

  const getMyBooking = async () => {
    const bookings = localStorage.getItem("myBookings")
      ? JSON.parse(localStorage.getItem("myBookings"))
      : null;
    if (bookings) {
      setMyBookingList(bookings);
      localStorage.setItem("myBookings", JSON.stringify(prevBooking));
    }
  };
  useEffect(() => {
    getMyBooking();
  }, []);

  const handleCancel = (id) => {
    let bookingList = [...myBookingList].filter((item) => item?.id !== id);
    setMyBookingList(bookingList);
    localStorage.setItem("myBookings", JSON.stringify(bookingList));
  };
  const MyBooking = ({ item }) => {
    return (
      <div
        style={{
          border: "1px solid white",
          width: "300px",
          padding: "20px",
        }}
      >
        <h3>Name: {item.name} </h3>
        <p>Time: {item.date} </p>
        <button
          onClick={() => handleCancel(item?.id)}
          style={{
            width: "100px",
            alignSelf: "end",
          }}
        >
          cancel
        </button>
      </div>
    );
  };
  const handleback = () => {
    Navigation("/home");
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
        <h1>MyBookings</h1>

        <div
          style={{
            alignSelf: "center",
            marginLeft: "5px",
          }}
        >
          <button onClick={() => handleback()}>home</button>
        </div>
      </div>
      {myBookingList?.length > 0 ? (
        myBookingList.map((item: serviceDetailsType) => {
          return <MyBooking item={item} />;
        })
      ) : (
        <div>NO Booking available</div>
      )}
    </div>
  );
};

export default MyBookings;
