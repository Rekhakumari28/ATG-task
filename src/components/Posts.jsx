import React from "react";
import { Link } from "react-router-dom";

function Posts() {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Check this out!",
          text: "Here’s something you might find interesting:",
          url: window.location.href,
        })
        .then(() => console.log("Shared successfully"))
        .catch((err) => console.error("Share failed:", err));
    } else {
      alert("Sharing not supported in your browser.");
    }
  };

  return (
    <div
      className="mx-auto d-flex gap-5 justify-content-center mt-3  "
      style={{ maxWidth: "1040px" }}
    >
      <div className="position-relative post-center">
        <div
          className="d-flex flex-column border border-1 rounded-2 mt-3"
          style={{
            maxWidth: "692px",
            borderColor: " rgb(224, 224, 224)",
            fill: "rgb(255, 255, 255)",
          }}
        >
          <img
            src="https://pixy.org/src/481/thumbs350/4813891.jpg"
            alt="Nature"
           className="post-image"
          />
          <div className="p-4">
            <h3 className="d-flex">✍️ Article</h3>
            <div className="d-flex gap-6 justify-content-between">
              <h4>
                What if famous brands had regular fonts? Meet RegulaBrands!
              </h4>
              <div className="btn align-self-start">
                <div className="dropdown">
                  <div
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-three-dots"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                    </svg>
                  </div>
                  <ul className="dropdown-menu">
                    <li>
                      <button className="dropdown-item" type="button">
                        Edit
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        Report
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        option 3
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <ul className="d-flex align-items-center gap-5 list-unstyled "></ul>
            <p>
              I’ve worked in UX for the better part of a decade. From now on, I
              plan to rei…
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-2">
                <img
                  className="rounded-circle"
                  alt="Profile"
                  src="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcLzBiN2Y0ZTliLWY1OWMtNDAyNC05ZjA2LWIzZGMxMjg1MGFiNy0xOTIwLTEwODAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0="
                  width="48"
                  height="48"
                />
                <div className="d-flex flex-column">
                  <div className="text-wrapper">Jane Smith</div>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-none d-lg-block pe-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                  <span> 2.4k views</span>
                </div>
                <button
                  onClick={handleShare}
                  className="btn d-flex align-items-center gap-2"
                  style={{ background: "rgb(237, 238, 240)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-share"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
                  </svg>
                  <span className="d-lg-none">Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="d-flex flex-column border border-1 rounded-2 mt-3"
          style={{
            maxWidth: "692px",
            borderColor: " rgb(224, 224, 224)",
            fill: "rgb(255, 255, 255)",
          }}
        >
          <img
            src="https://pixy.org/src/10/thumbs350/107076.jpg"
            alt="Nature"
            className="post-image"
          />
          <div className="p-4">
            <h3 className="d-flex">🔬️ Education</h3>
            <div className="d-flex gap-6 justify-content-between">
              <h4>
                Tax Benefits for Investment under National Pension Scheme
                launched by Government
              </h4>
              <div className="btn align-self-start">
                <div className="dropdown">
                  <div
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-three-dots"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                    </svg>
                  </div>
                  <ul className="dropdown-menu">
                    <li>
                      <button className="dropdown-item" type="button">
                        Edit
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        Report
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        option 3
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <ul className="d-flex align-items-center gap-5 list-unstyled "></ul>
            <p>
              I’ve worked in UX for the better part of a decade. From now on, I
              plan to rei…
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-2">
                <img
                  className="rounded-circle"
                  alt="Profile"
                  src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=7lrLYx-B"
                  width="48"
                  height="48"
                />
                <div className="d-flex flex-column">
                  <div className="text-wrapper">Rekha Bheel</div>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-none d-lg-block pe-4">
                  <div className="d-none d-lg-block pe-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-eye"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                    </svg>
                    <span> 1.4k views</span>
                  </div>
                </div>
                <button
                  onClick={handleShare}
                  className="btn d-flex align-items-center gap-2"
                  style={{ background: "rgb(237, 238, 240)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-share"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
                  </svg>
                  <span className="d-lg-none">Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="d-flex flex-column border border-1 rounded-2 mt-3"
          style={{
            maxWidth: "692px",
            borderColor: " rgb(224, 224, 224)",
            fill: "rgb(255, 255, 255)",
          }}
        >
          <img
            src="https://pixy.org/src/9/91911.jpg"
            alt="Nature"
            className="post-image"
          />
          <div className="p-4">
            <h3 className="d-flex">🗓️ Meetup</h3>
            <div className="d-flex gap-6 justify-content-between">
              <h4>Finance &amp; Investment Elite Social Mixer @Lujiazui</h4>
              <div className="btn align-self-start">
                <div className="dropdown">
                  <div
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-three-dots"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                    </svg>
                  </div>
                  <ul className="dropdown-menu">
                    <li>
                      <button className="dropdown-item" type="button">
                        Edit
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        Report
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        option 3
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <ul className="d-flex align-items-center gap-5 list-unstyled ">
              <li className="d-flex align-items-center gap-1">
                <img
                  src="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-today-24px'%20clip-path='url(%23clip0_1_895)'%3e%3cpath%20id='Vector'%20d='M15.8333%202.49992H15V0.833252H13.3333V2.49992H6.66667V0.833252H5V2.49992H4.16667C3.24167%202.49992%202.50833%203.24992%202.50833%204.16659L2.5%2015.8333C2.5%2016.7499%203.24167%2017.4999%204.16667%2017.4999H15.8333C16.75%2017.4999%2017.5%2016.7499%2017.5%2015.8333V4.16659C17.5%203.24992%2016.75%202.49992%2015.8333%202.49992ZM15.8333%2015.8333H4.16667V6.66658H15.8333V15.8333ZM5.83333%208.33325H10V12.4999H5.83333V8.33325Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_895'%3e%3crect%20width='20'%20height='20'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                  alt="date"
                  width="20px"
                  height="20px"
                />
                Fri, 12 Oct, 2018
              </li>
              <li className="d-flex align-items-center gap-1">
                <img
                  src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='outline-location_on-24px%202'%20clip-path='url(%23clip0_1_1233)'%3e%3cpath%20id='Vector'%20d='M9%201.5C6.0975%201.5%203.75%203.8475%203.75%206.75C3.75%2010.6875%209%2016.5%209%2016.5C9%2016.5%2014.25%2010.6875%2014.25%206.75C14.25%203.8475%2011.9025%201.5%209%201.5ZM5.25%206.75C5.25%204.68%206.93%203%209%203C11.07%203%2012.75%204.68%2012.75%206.75C12.75%208.91%2010.59%2012.1425%209%2014.16C7.44%2012.1575%205.25%208.8875%205.25%206.75Z'%20fill='black'/%3e%3cpath%20id='Vector_2'%20d='M9%208.625C10.0355%208.625%2010.875%207.78553%2010.875%206.75C10.875%205.71447%2010.0355%204.875%209%204.875C7.96447%204.875%207.125%205.71447%207.125%206.75C7.125%207.78553%207.96447%208.625%209%208.625Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1233'%3e%3crect%20width='18'%20height='18'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                  alt="location"
                  width="20px"
                  height="20px"
                />
                Ahmedabad, India
              </li>
            </ul>
            <button
              className="border-style btn mb-4 fw-semibold"
              style={{ color: "rgb(229, 97, 53)" }}
            >
              Visit WebSite
            </button>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-2">
                <img
                  className="rounded-circle"
                  alt="Profile"
                  src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww"
                  width="48"
                  height="48"
                />
                <div className="d-flex flex-column">
                  <div className="text-wrapper">Alice Wonder</div>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-none d-lg-block pe-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                  <span> 1.9k views</span>
                </div>
                <button
                  onClick={handleShare}
                  className="btn d-flex align-items-center gap-2"
                  style={{ background: "rgb(237, 238, 240)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-share"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
                  </svg>
                  <span className="d-lg-none">Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="d-flex flex-column border border-1 rounded-2 mt-3"
          style={{
            maxWidth: "692px",
            borderColor: " rgb(224, 224, 224)",
            fill: "rgb(255, 255, 255)",
          }}
        >
          <div className="p-4">
            <h3 className="d-flex">💼️ Job</h3>
            <div className="d-flex gap-6 justify-content-between">
              <h4>Software Developer</h4>
              <div className="btn align-self-start">
                <div className="dropdown">
                  <div
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-three-dots"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                    </svg>
                  </div>
                  <ul className="dropdown-menu">
                    <li>
                      <button className="dropdown-item" type="button">
                        Edit
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        Report
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        option 3
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <ul className="d-flex align-items-center gap-5 list-unstyled ">
              <li className="d-flex align-items-center gap-1">
                <img
                  src="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='outline-work_outline-24px'%20clip-path='url(%23clip0_1_941)'%3e%3cpath%20id='Vector'%20d='M11.6667%205.00008V3.33341H8.33342V5.00008H11.6667ZM3.33341%206.66675V15.8334H16.6667V6.66675H3.33341ZM16.6667%205.00008C17.5917%205.00008%2018.3334%205.74175%2018.3334%206.66675V15.8334C18.3334%2016.7584%2017.5917%2017.5001%2016.6667%2017.5001H3.33341C2.40841%2017.5001%201.66675%2016.7584%201.66675%2015.8334L1.67508%206.66675C1.67508%205.74175%202.40841%205.00008%203.33341%205.00008H6.66675V3.33341C6.66675%202.40841%207.40841%201.66675%208.33342%201.66675H11.6667C12.5917%201.66675%2013.3334%202.40841%2013.3334%203.33341V5.00008H16.6667Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_941'%3e%3crect%20width='20'%20height='20'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                  alt="date"
                  width="20px"
                  height="20px"
                />
                Innovaccer Analytics Private Ltd.
              </li>
              <li className="d-flex align-items-center gap-1">
                <img
                  src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='outline-location_on-24px%202'%20clip-path='url(%23clip0_1_1233)'%3e%3cpath%20id='Vector'%20d='M9%201.5C6.0975%201.5%203.75%203.8475%203.75%206.75C3.75%2010.6875%209%2016.5%209%2016.5C9%2016.5%2014.25%2010.6875%2014.25%206.75C14.25%203.8475%2011.9025%201.5%209%201.5ZM5.25%206.75C5.25%204.68%206.93%203%209%203C11.07%203%2012.75%204.68%2012.75%206.75C12.75%208.91%2010.59%2012.1425%209%2014.16C7.44%2012.1575%205.25%208.8875%205.25%206.75Z'%20fill='black'/%3e%3cpath%20id='Vector_2'%20d='M9%208.625C10.0355%208.625%2010.875%207.78553%2010.875%206.75C10.875%205.71447%2010.0355%204.875%209%204.875C7.96447%204.875%207.125%205.71447%207.125%206.75C7.125%207.78553%207.96447%208.625%209%208.625Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1233'%3e%3crect%20width='18'%20height='18'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                  alt="location"
                  width="20px"
                  height="20px"
                />
                Noida, India
              </li>
            </ul>
            <button
              className="border-style btn mb-4 fw-semibold"
              style={{ color: "rgb(2, 184, 117)" }}
            >
              Apply on Timejobs
            </button>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-2">
                <img
                  className="rounded-circle"
                  alt="Profile"
                  src="https://static.vecteezy.com/system/resources/previews/026/408/485/non_2x/man-lifestyle-portrait-hipster-serious-t-shirt-isolated-person-white-background-american-smile-confident-fashion-photo.jpg"
                  width="48"
                  height="48"
                />
                <div className="d-flex flex-column">
                  <div className="text-wrapper">John Doe</div>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-none d-lg-block pe-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                  <span> 2.3k views</span>
                </div>
                <button
                  onClick={handleShare}
                  className="btn d-flex align-items-center gap-2"
                  style={{ background: "rgb(237, 238, 240)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-share"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
                  </svg>
                  <span className="d-lg-none">Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-relative post-center">

        {/* <div className="container d-flex flex-column ">
           <div className="d-flex align-item-center  ">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>
              <input type="text" placeholder="Enter Your Location" className="input-text"/>
             
              <button className="btn"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
</svg></button>
               </div>  
               <div className="d-flex align-item-center  ">        
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
</svg>  <p className="location-info">Your location will help us serve better and extend a personalised experience.</p>
             </div>  
                <div className="d-flex align-items-center gap-2 text-capitalize mb-3">
             <h4>thumbs up
REcommended Groups</h4>

              <div className="d-flex align-item-center">
                <img src="" alt="" /> <span></span> 
                <Link className="btn follow rounded-5" to="/">Follow</Link>
              </div>
              </div>
             </div> */}
         
       </div>
    </div>
  );
}

export default Posts;
