import React from "react";
import SignInModal from "./SignInModel";


const Header = () => {
  return (
    <>
      <div className="container d-none d-lg-flex align-items-center justify-content-between py-3">
        {/* Logo */}
        <a href="/">
          <img
            src="https://dont-copy.netlify.app/assets/logo-S2lIhR8K.svg"
            width="162.57"
            height="24"
            alt="Logo"
          />
        </a>

        {/* Search Bar */}
        <form className="flex-grow-1 mx-3" style={{ maxWidth: "400px" }}>
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
            </span>
            <input
              type="search"
              className="form-control border-start-0"
              placeholder="Search for your favorite groups in ATG"
            />
          </div>
        </form>

        {/* Account Button */}
        <div className="d-flex align-items-center">
          <button
            className="btn p-1"
            data-bs-toggle="modal"
            data-bs-target="#signInModal"
          >
            <strong>Create Account.</strong> <span className="text-primary fw-bold">It's Free!</span>
          </button>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
        </div>
      </div>

      {/* Include Modal */}
      <SignInModal />
     
    </>
  );
};

export default Header;
