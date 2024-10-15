"use client";

import cancelBooking from "../actions/cancelBooking";
import { toast } from "react-toastify";

const CancelBookingButton = ({ bookingId }) => {
  const cancelBookingHandler = async () => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this booking"
    );
    console.log(bookingId);

    if (confirmation) {
      try {
        const response = await cancelBooking(bookingId);
        console.log(response, "response");

        toast.success("booking deleted sucessfully!");
      } catch (error) {
        console.log("Failed to delete booking", error);
        toast.error("Failed to delete booking");
      }
    }
  };
  return (
    <button
      onClick={cancelBookingHandler}
      className="bg-red-500 text-white px-4 py-2 rounded w-full sm:w-auto text-center hover:bg-red-700"
    >
      Cancel Booking
    </button>
  );
};

export default CancelBookingButton;
