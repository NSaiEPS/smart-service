import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { dummyServices, type services } from "../utils";
import moment from "moment";

const Service = () => {
  const { id } = useParams();
  const Navigation = useNavigate();
  type serviceDetailsType = {
    img: string;
    price: string;
    name: string;
    id: number;
    description: string;
    date?: string;
  };
  const [serviceDetails, setServiceDetails] = useState<services>({});
  const [myBookingList, setMyBookingList] = useState([]);

  useEffect(() => {
    if (id) {
      const requiredDetails: services[] = dummyServices.filter(
        (item: services) => item.id == Number(id)
      );

      setServiceDetails(requiredDetails?.[0] ?? {});
    }
  }, [id]);

  const getMyBooking = async () => {
    const bookings = localStorage.getItem("myBookings")
      ? JSON.parse(localStorage.getItem("myBookings"))
      : null;
    if (bookings) {
      setMyBookingList(bookings);
    }
  };
  useEffect(() => {
    getMyBooking();
  }, []);

  const handleConfirmBooking = () => {
    const prevBooking: services[] = [...myBookingList];
    const bookedDetails: serviceDetailsType = { ...serviceDetails };
    bookedDetails.date = moment().format("DD MMM YYYY, HH:mm:SS");
    prevBooking.push(bookedDetails);
    console.log(bookedDetails, "bookedDetails");

    localStorage.setItem("myBookings", JSON.stringify(prevBooking));
    Navigation("/my-bookings");
  };
  const handleback = () => {
    Navigation("/home");
  };

  const checkBookingStatus = () => {
    const isBooked = myBookingList?.filter(
      (item: services) => item?.id == Number(id)
    );

    if (isBooked.length) {
      return true;
    }
    return false;
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
        <h1>Service Details</h1>
        <div
          style={{
            alignSelf: "center",
            marginLeft: "15px",
          }}
        >
          <button onClick={() => handleback()}>home</button>
        </div>
      </div>
      <img
        src={serviceDetails.img}
        style={{
          height: "250px",
          width: "250px",
        }}
      />

      <div>
        <h2>Name: {serviceDetails?.name}</h2>
        <p>Details: {serviceDetails?.description}</p>
        <span>Price: ₹ {serviceDetails?.price}</span>
      </div>
      <button
        onClick={handleConfirmBooking}
        style={{
          marginTop: "5px",
        }}
        disabled={checkBookingStatus()}
      >
        {checkBookingStatus()
          ? "This Service is already booked!"
          : "Confirm Booking"}
      </button>
    </div>
  );
};

export default Service;
