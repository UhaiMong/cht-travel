import React from "react";

const RoomDetails = ({ descpt }) => {
  return (
    <div className="bg-slate-100 p-4 space-y-2 ">
      <h3>Room Type: King Bed</h3>
      <div>
        <h4 className="text-base font-semibold">Room Details</h4>
        <p>
          <small>{descpt}</small>
        </p>
      </div>
      <div>
        <h4 className="text-base font-semibold">Cancellation Policy</h4>
        <p>
          <small>
          policy
          </small>
        </p>
      </div>
      <div>
        <h4 className="text-base font-semibold">Room Facilities</h4>
        <p>
          <small>
            facilities
          </small>
        </p>
      </div>
      <div className="space-y-1">
        <h4 className="text-base text-red-800 font-semibold mt-4">Important Information</h4>
        <div>
          <h5 className="text-sm font-semibold">Refund Policy</h5>
          <p>
            <small>
              Our refund policy is here
            </small>
          </p>
        </div>
        <div>
          <h5 className="text-sm font-semibold">Photo Policy</h5>
          <p>
            <small>
             Photo policy
            </small>
          </p>
        </div>
        <div>
          <h5 className="text-sm font-semibold">Hotel Occupancy Policy</h5>
          <p>
            <small>
             hotel Occupancy policy.
            </small>
          </p>
        </div>
        <hr className="border-slate-400 my-2" />
      </div>
    </div>
  );
};

export default RoomDetails;
