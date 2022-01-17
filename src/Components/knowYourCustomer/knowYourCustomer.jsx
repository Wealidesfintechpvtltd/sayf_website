import React from "react";
import DashNav from "../Dashboard/DashNav";
import "./kyc.css";
const KYC = () => {
  return (
    <div className="kyc">
      <DashNav />
      <h3 className="heading">Kindly fill up this form so that we can serve you better. </h3>
      <div className="form">
        <form action="">
          <fieldset>
            <legend>
              <h2>KYC</h2>
            </legend>
            <p>Customer Name : </p>
            <div className="name">
              <input required type="text" placeholder="First Name" />
              <input required type="text" placeholder="Middle Name" />
              <input required type="text" placeholder="Last Name" />
            </div>

            <p>Birth Date : </p>
            <input required type="date" name="" id="" />

            <p>Gender : </p>
            <select name="" id="gender">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
            <p>
              Enter Identity Proof (Driver License/ Adhaar Card/ Pan Card) :
            </p>
            <input required type="file" name="" id="" />

            <p>Address : </p>
            <input required
              type="text"
              name="street address"
              placeholder="Street Address"
              id="long"
            />
            <input required
              type="text"
              name="street address"
              placeholder="Street Address Line 2"
              id="long"
            />
            <input required type="text" name="street address" placeholder="City" id="" />
            <input required
              type="text"
              name="street address"
              placeholder="State/ Province"
              id=""
            />
            <input required
              type="text"
              name="street address"
              placeholder="Country"
              id=""
            />
            <p>Upload Profile Picture : </p>
            <input required type="file" name="" id="" /> <br />
            <div className="submit">
                <button>Submit</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default KYC;
