import React from "react";
import about from './images/Highlights-Myanmar.jpg';
export default function About() {
  return (
    <>
        <h2 className="text-center mb-5">About Section</h2>
      <div className="d-flex justify-content-around">
        <div>
          <img
            src={about}
            alt="Image"
            className="img-fluid"
          />
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="mt-3">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </>
  );
}
