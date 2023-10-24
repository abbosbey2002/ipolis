import "./Osago.css";
import AutoVhaile from "../../components/OsagoVhile/AutoVhaile.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import Ovner from "../../components/OsagoVhile/Ovner.jsx";
import Client from "../../components/OsagoVhile/Client.jsx";

const Osago = () => {
  // Vehicle Local Storage
  const localStorageVehicleData = localStorage.getItem("car");
  const dataArray = localStorageVehicleData ? JSON.parse(localStorageVehicleData) : [];

  // Owner Local Storage
  const localStorageOwnerData = localStorage.getItem("owner");
  const dataOwnerArray = localStorageOwnerData ? JSON.parse(localStorageOwnerData) : [];

  const localStorageClientData = localStorage.getItem("client");
  const dataClientArray = localStorageClientData ? JSON.parse(localStorageClientData) : [];

  const [vehilePinfl, SetvehilePinfl] = useState();

  const [client, setClient] = useState();
  const [owner, setOwner] = useState();
  const [iSCalculate, setiSCalculate] = useState(false);
  const [isClient, setIsClient] = useState(true);

  const [vehicle, setVehicle] = useState();
  const [car, setCar] = useState();

  const OvnerOpen = () => {
    document.getElementById("auto").style.display = "none";
    // Div none
    document.getElementById("ovner").style.display = "flex";
    document.getElementById("client").style.display = "none";
  };
  const OvnerClose = () => {
    document.getElementById("auto").style.display = "flex";
    // Div none
    document.getElementById("ovner").style.display = "none";
    document.getElementById("client").style.display = "none";

    // Box None
    document.getElementById("vehicleBox").style.display = "none";
    document.getElementById("ownerBox").style.display = "none";
    document.getElementById("clientBox").style.display = "none";
  };
  const ClientOpen = () => {
    document.getElementById("auto").style.display = "none";
    // Div none
    document.getElementById("ovner").style.display = "none";
    document.getElementById("client").style.display = "flex";
  };
  const ClientClose = () => {
    document.getElementById("auto").style.display = "none";
    // Div none
    document.getElementById("ovner").style.display = "flex";
    document.getElementById("client").style.display = "none";

    // Box None
    document.getElementById("vehicleBox").style.display = "block";
    document.getElementById("ownerBox").style.display = "none";
    document.getElementById("clientBox").style.display = "none";
  };

  return (
    <>
      <div
        className="breadcrumb-area bg-gray bg-cover"
        style={{ backgroundImage: "url(assets/img/shape/banner-3.jpg)" }}
      >
        <div className="container">
          <div className="breadcrumb-item">
            <div className="breadcrum-shape">
              <img src="assets/img/shape/16.png" alt="Image Not Found" />
            </div>
            <div className="row">
              <div className="col-lg-8">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li>
                      <Link to={"/"}>
                        <i className="fa-solid fa-house" /> Home
                      </Link>
                    </li>
                    <li className="active">OSAGO</li>
                  </ol>
                </nav>
                <h1>Onlayn polis rasmiylashtirish</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="contact-area contact-page overflow-hidden default-padding"
        style={{ backgroundColor: "#fff" }}
      >
        {/* Rasmni o'chirsa ishlamay qolayabdi */}
        <div className="shape-right-bottom d-none">
          <img src="assets/img/shape/18.png" alt="Shape" />
        </div>
        <div className="container">
          <div className="row align-center">
            <div className="col-tact-stye-one col-lg-6">
              <div id="auto">
                <AutoVhaile
                  data={dataArray}
                  OvnerOpen={OvnerOpen}
                  vehilePinfl={vehilePinfl}
                  SetvehilePinfl={SetvehilePinfl}
                //   vehilePinfl={vehilePinfl}
                //   SetvehilePinfl={SetvehilePinfl}
                />
              </div>
              <div style={{ display: "none" }} id="ovner">
                <Ovner
                  OvnerClose={OvnerClose}
                  ClientOpen={ClientOpen}
                  vehilePinfl={vehilePinfl}
                  SetvehilePinfl={SetvehilePinfl}
                  setClient={setClient}
                  setOwner={setOwner}
                  setiSCalculate={setiSCalculate}
                  setIsClient={setIsClient}
                />
              </div>

              {/* Checkbox qo'shish kerak */}
              <div style={{ display: "none" }} id="client">
                <Client
                  ClientClose={ClientClose}
                  setClient={setClient}
                  data={dataArray}
                />
              </div>
            </div>
            <div className="col-tact-stye-one col-lg-5 offset-lg-1 mt--80 mt-md-50 mt-xs-50">
              <div id="aboutOrderData" className="contact-style-one-info border rounded p-4" style={{display: "none"}}>

                {/* Avtomobil malumotlari ========================== */}
                <div id="vehicleBox" className="mb-4">
                  <div className="mb-20">
                    <h3>Avtomobil malumotlari:</h3>
                  </div>
                  <ul className="contact-address">
                    <li
                      className="wow fadeInUp"
                      style={{
                        visibility: "visible",
                        animationName: "fadeInUp",
                      }}
                    >
                      <div className="content">
                        <p>Mashina raqami:</p>
                        <h5 className="fw-bold step-title">
                          {dataArray.govNumber || "0000000"}
                        </h5>
                      </div>
                    </li>
                    <li
                      className="wow fadeInUp"
                      data-wow-delay="300ms"
                      style={{
                        visibility: "visible",
                        animationDelay: "300ms",
                        animationName: "fadeInUp",
                      }}
                    >
                      <div className="info">
                        <p>Tex passport seriasi va raqami:</p>
                        <h5 className="fw-bold step-title">
                          {dataArray.techpassportseria || "AAA"}{" "}
                          {dataArray.techPassportNumber || "000000"}
                        </h5>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* Avtomobil malumotlari ========================== */}

                {/* Transport vositasining egasi haqida ma'lumot ========================== */}
                <div id="ownerBox" className="mb-4" style={{display: "none"}}>
                  <div className="mb-20">
                    <h3>Avtomobil egasi ma'lumotlari:</h3>
                  </div>
                  <ul className="contact-address">
                  <li
                      className="wow fadeInUp"
                      style={{
                        visibility: "visible",
                        animationName: "fadeInUp",
                      }}
                    >
                      <div className="content">
                        <p>Passport seriasi:</p>
                        <h5 className="fw-bold step-title text-uppercase">
                          {dataOwnerArray.passportSeries || "0000000"}
                        </h5>
                      </div>
                    </li>

                    <li
                      className="wow fadeInUp"
                      data-wow-delay="300ms"
                      style={{
                        visibility: "visible",
                        animationDelay: "300ms",
                        animationName: "fadeInUp",
                      }}
                    >
                      <div className="info">
                        <p>Passport raqami:</p>
                        <h5 className="fw-bold step-title">
                          {dataOwnerArray.passportNumber || "000000"}
                        </h5>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* Transport vositasining egasi haqida ma'lumot ========================== */}

                  {/* Ariza beruvchi ma'lumotlari ========================== */}
                  <div id="clientBox" className="mb-4" style={{display: "none"}}>
                  <div className="mb-20">
                    <h3>Ariza beruvchi ma'lumotlari:</h3>
                  </div>
                  <ul className="contact-address">
                  <li
                      className="wow fadeInUp"
                      style={{
                        visibility: "visible",
                        animationName: "fadeInUp",
                      }}
                    >
                      <div className="content">
                        <p>Passport seria va raqami:</p>
                        <h5 className="fw-bold step-title text-uppercase">
                          {dataOwnerArray.passportSeries || "0000000"}
                        </h5>
                      </div>
                    </li>

                    <li
                      className="wow fadeInUp"
                      data-wow-delay="300ms"
                      style={{
                        visibility: "visible",
                        animationDelay: "300ms",
                        animationName: "fadeInUp",
                      }}
                    >
                      <div className="info">
                        <p>Tug‘ulgan kuni:</p>
                        <h5 className="fw-bold step-title">
                          {/* {dataClientArray.passportNumber || "000000"}  */}
                        </h5>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* Ariza beruvchi ma'lumotlari ========================== */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Osago;
