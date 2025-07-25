import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Posts from "./Posts";

const GroupCard = () => {
 
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
const categories = [
  { name: "All Posts", path: "/", count: 32 },
  { name: "Article", path: "/article" },
  { name: "Event", path: "/event" },
  { name: "Education", path: "/education" },
  { name: "Job", path: "/job" },
];


  return (
    <>
      <div
        className="container-fluid p-0 position-relative custom-bg-container"
        style={{
          background: `url('https://snu.edu.in/site/assets/files/18083/cyber-security-concept-digital-data-protection.1600x0.webp') center center / cover no-repeat`,
          height: "440px",
        }}
      >
        <div className="container d-flex flex-column h-100 background-text-home">
          <div className="d-flex d-lg-none justify-content-between mt-3">
            <button className="btn">image</button>
            <button className="btn join-group">Leave Group</button>
          </div>
          <div className="position-absolute bottom-0 start-0 px-4 pb-4">
            <h1 className="text-white mb-1">Computer Engineering</h1>
            <p className="text-white mb-0">
              142,765 Computer Engineers follow this
            </p>
          </div>
        </div>
      </div>
      <div
        className="d-none d-lg-flex justify-content-between mx-auto align-items-center container sticky-top border-bottom"
        style={{
          maxWidth: "1040px",
          height: "68px",
          background: "rgb(255, 255, 255)",
          borderTop: "1px solid rgba(0, 0, 0, 0.2)",
        }}
      >
      <ul className="nav my-2 nav-underline">
   {categories.map((cat) => (
        <li className="nav-item" key={cat.path}>
          <Link
            className={`nav-link ${isActive(cat.path) ? "text-primary" : "text-secondary"}`}
            to={cat.path}
          >
            {cat.name}
            {cat.count ? ` (${cat.count})` : ""}
          </Link>
        </li>
      ))}
</ul>
        <div className="d-flex my-2 align-items-center">
  {/* Write Post Button */}
  <button
    className="btn d-flex align-items-center gap-1 px-3 py-2"
    style={{ backgroundColor: "#f2f2f2" }}
    aria-label="write-post"
  >
    Write Post
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-caret-down-fill"
      viewBox="0 0 16 16"
    >
      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
    </svg>
  </button>

  {/* Join Group Button */}
  <button
    className="btn btn-primary ms-2 d-flex align-items-center gap-2 px-3 py-2"
    aria-label="Join group"
    style={{ border: "0.8px solid #989899" }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-person-fill-add"
      viewBox="0 0 16 16"
    >
      <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
      <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" />
    </svg>
    Join Group
  </button>
</div>

      </div>

    <Posts />
    

    </>
  );
};

export default GroupCard;
