import React, { useState } from "react";
import DashNav from "../Dashboard/DashNav";
import { Modal, Button, Box } from "@material-ui/core";
import "./kyc.css";
const KYC = () => {

  //For Pan
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //For Adhaar
  const [openA, setOpenA] = useState(false);
  const handleOpenA = () => setOpenA(true);
  const handleCloseA = () => setOpenA(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
  };

  return (
    <div className="kyc">
      <DashNav />
      <h3 className="heading">
        Kindly fill up this form so that we can serve you better.{" "}
      </h3>
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
              Enter Identity Proof (Adhaar Card/ Pan Card) :
            </p>
            <button type="button" onClick={handleOpen}>
             PAN Card
            </button>
            <button type="button" onClick={handleOpenA}>
             Adhaar Card
            </button>

            {/* Pan Card Modal */}
            <Modal
              className="identityModal"
              open={open}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <form onSubmit={handleClose}>
                <div className="heading">
                  <h2>Enter your PAN details</h2>
                  <h2 className="close" onClick={handleClose}>X</h2>                 
                </div>
                <p>We need your PAN details to proceed with your eKYC</p>
                <p style={{ fontSize: "12px", marginBottom: "20px" }}>
                  As per goverment regulations KYC is mandatory to store gold
                  above 30gms
                </p>
                <p>PAN Number</p>
                <input required placeholder="ABCDE*****A" type="text" name="" id="" />
                <p>Full Name (as per PAN card)</p>
                <input required
                  placeholder="Enter your full name"
                  type="text"
                  name=""
                  id=""
                />
                <p>Date of birth</p>
                <input required type="date" name="" id="" />
                <br />
                <div className="buttonDiv">
                  <button type="submit">Submit</button>
                </div>
                </form>
              </Box>
            </Modal>

            {/* Adhaar Card Modal */}
            <Modal
              className="identityModal"
              open={openA}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <form onSubmit={handleCloseA}>
                <div className="heading">
                  <h2>Enter your Adhaar details</h2>
                  <h2 className="close" onClick={handleCloseA}>X</h2>                 
                </div>
                <p>We need your Adhaar details to proceed with your eKYC</p>
                <p style={{ fontSize: "12px", marginBottom: "20px" }}>
                  As per goverment regulations KYC is mandatory to store gold
                  above 30gms
                </p>
                <p>Adhaar Card Number</p>
                <input required placeholder="ABCDE*****A" type="text" name="" id="" />
                <p>Full Name (as per Adhaar card)</p>
                <input required
                  placeholder="Enter your full name"
                  type="text"
                  name=""
                  id=""
                />
                <p>Date of birth</p>
                <input required type="date" name="" id="" />
                <br />
                <div className="buttonDiv">
                  <button type="submit">Submit</button>
                </div>
                </form>
              </Box>
            </Modal>
            <p>Address : </p>
            <input
              required
              type="text"
              name="street address"
              placeholder="Street Address"
              id="long"
            />
            <input
              required
              type="text"
              name="street address"
              placeholder="Street Address Line 2"
              id="long"
            />
            <input
              required
              type="text"
              name="street address"
              placeholder="City"
              id=""
            />
            <input
              required
              type="text"
              name="street address"
              placeholder="State/ Province"
              id=""
            />
            <input
              required
              type="text"
              name="street address"
              placeholder="Country"
              id=""
            />
               <div className="conditions">
                  <input required type="checkbox" name="" id="" />
                  <p>
                    I consent to allow JAR to proceed for eKYC on my behalf
                  </p>
                </div>
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
