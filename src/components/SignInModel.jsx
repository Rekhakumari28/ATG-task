import React, { useEffect, useState } from "react";

const SignInComponent = () => {
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "1283174149999242",
        cookie: true,
        xfbml: true,
        version: "v18.0",
      });
    };
  }, []);


const handleFacebookLogin = () => {
    window.FB.login(
      function (response) {
        if (response.authResponse) {
          console.log("Welcome! Fetching your info...");
          window.FB.api("/me", { fields: "name, email" }, function (userInfo) {
            console.log("User info:", userInfo);
            alert(`Hello, ${userInfo.name}`);
          });
        } else {
          alert("Facebook login failed or was cancelled.");
        }
      },
      { scope: "email" }
    );
  };



  useEffect(() => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: "665592275562-kkj6ag5tffmunsc28lkkrn38crdm90u7.apps.googleusercontent.com",
        callback: (response) => {
          console.log("Google Login Token:", response.credential);
        
        },
      });
    }
  }, []);
  

  const handleGoogleSignIn = () => {
    if (window.google) {
      window.google.accounts.id.prompt(); // triggers One Tap prompt or login
    }
  };
  return (
    <div className="col">
      <div className="d-flex flex-column gap-2  ">
        <input
          type="email"
          className="form-control bg-body-tertiary"
          placeholder="Email"
          style={{ borderRadius: "2px 2px" }}
        />
        <div className="d-flex align-item-center justify-content-between position-relative">
          <input
           type={showPassword ? "text" : "password"}
            className="form-control bg-body-tertiary"
            placeholder="Password"
            style={{ borderRadius: "2px 2px" }}
          />
          <button className="btn position-absolute" style={{ right: "10px" }} onClick={() => setShowPassword(!showPassword)}>
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
          </button>
        </div>
        <input
          type="password"
          className="form-control mb-4 bg-body-tertiary"
          placeholder="Confirm Password"
          style={{ borderRadius: "2px 2px" }}
        />

        <button
          className="btn btn-primary rounded d-flex justify-content-center align-item-center mb-4"
          data-bs-dismiss="modal"
        >
          Sign In
        </button>
        <div className="d-flex flex-column gap-2 ">
          <button
            className="btn d-flex align-items-center justify-content-center gap-2 border"
            style={{
              borderRadius: "2px",
              borderWidth: "0.6px",
              borderStyle: "solid",
            }}
              onClick={()=>handleFacebookLogin} 
          >
            <img
              src="https://dont-copy.netlify.app/assets/facebook-ImnSLa_q.svg"
              alt="facebook"
            />{" "}
            Sign In with Facebook
          </button>
          <button
            className="btn d-flex align-items-center justify-content-center gap-2 border"
            style={{
              borderRadius: "2px",
              borderWidth: "0.6px",
              borderStyle: "solid",
            }}
              onClick={handleGoogleSignIn}
          >
            <img
              src="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1_2217)'%3e%3cpath%20d='M3.54594%209.66905L2.989%2011.7482L0.953406%2011.7912C0.345063%2010.6629%200%209.37192%200%208.00005C0%206.67345%200.322625%205.42245%200.8945%204.32092H0.894938L2.70719%204.65317L3.50106%206.45455C3.33491%206.93895%203.24434%207.45895%203.24434%208.00005C3.24441%208.5873%203.35078%209.14995%203.54594%209.66905Z'%20fill='%23FBBB00'/%3e%3cpath%20d='M15.8602%206.50562C15.9521%206.98955%2016%207.48933%2016%208.00012C16%208.57287%2015.9398%209.13155%2015.8251%209.67046C15.4357%2011.5043%2014.4181%2013.1056%2013.0084%2014.2388L13.008%2014.2384L10.7253%2014.1219L10.4023%2012.1052C11.3377%2011.5566%2012.0687%2010.6981%2012.4537%209.67046H8.1759V6.50562H12.5161H15.8602Z'%20fill='%23518EF8'/%3e%3cpath%20d='M13.0081%2014.2382L13.0085%2014.2386C11.6375%2015.3406%209.89596%2015.9999%208.00015%2015.9999C4.95355%2015.9999%202.30477%2014.2971%200.953552%2011.7911L3.54608%209.66895C4.22168%2011.472%205.96102%2012.7555%208.00015%2012.7555C8.87662%2012.7555%209.69774%2012.5186%2010.4023%2012.105L13.0081%2014.2382Z'%20fill='%2328B446'/%3e%3cpath%20d='M13.1064%201.84175L10.5148%203.9635C9.78553%203.50769%208.92353%203.24438%208.00003%203.24438C5.91475%203.24438%204.14288%204.58678%203.50113%206.4545L0.894969%204.32088H0.894531C2.22597%201.75384%204.90816%200%208.00003%200C9.94112%200%2011.7209%200.691438%2013.1064%201.84175Z'%20fill='%23F14336'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_2217'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
              alt="google"

            />{" "}
            Sign In with Google
          </button>
        </div>
        <button
          className="btn d-none d-lg-block fw-normal text-center"
          style={{
            fontSize: "12px",
            fontStyle: "normal",
            lineHeight: "16px",
          }}

        >
          <strong>Forgot PassWord?</strong>
        </button>
      </div>
    </div>
  );
};

const CreateAccountComponent = () => {
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "1283174149999242",
        cookie: true,
        xfbml: true,
        version: "v18.0",
      });
    };
  }, []);


const handleFacebookLogin = () => {
    window.FB.login(
      function (response) {
        if (response.authResponse) {
          console.log("Welcome! Fetching your info...");
          window.FB.api("/me", { fields: "name, email" }, function (userInfo) {
            console.log("User info:", userInfo);
            alert(`Hello, ${userInfo.name}`);
          });
        } else {
          alert("Facebook login failed or was cancelled.");
        }
      },
      { scope: "email" }
    );
  };



  useEffect(() => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: "665592275562-kkj6ag5tffmunsc28lkkrn38crdm90u7.apps.googleusercontent.com",
        callback: (response) => {
          console.log("Google Login Token:", response.credential);
          // TODO: send this token to your backend to verify & authenticate
        },
      });
    }
  }, []);

  const handleGoogleSignIn = () => {
    if (window.google) {
      window.google.accounts.id.prompt(); // triggers One Tap prompt or login
    }
  };
  return (
    <div className="col">
      <div className="d-flex flex-column gap-2  ">
        <div className="d-flex">
          <input
            type="text"
            className="form-control bg-body-tertiary"
            placeholder="First Name"
            style={{ borderRadius: "2px 2px" }}
          />
          <input
            type="text"
            className="form-control bg-body-tertiary"
            placeholder="Last Name"
            style={{ borderRadius: "2px 2px" }}
          />
        </div>
        <input
          type="email"
          className="form-control bg-body-tertiary"
          placeholder="Email"
          style={{ borderRadius: "2px 2px" }}
        />
        <div className="d-flex align-item-center justify-content-between position-relative">
          <input
            type={showPassword ? "text" : "password"}
            className="form-control bg-body-tertiary"
            placeholder="Password"
            style={{ borderRadius: "2px 2px" }}
          />
          <button className="btn position-absolute" style={{ right: "10px" }} onClick={()=>setShowPassword(!showPassword)}>
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
          </button>
        </div>
        <input
          type="password"
          className="form-control mb-4 bg-body-tertiary"
          placeholder="Confirm Password"
          style={{ borderRadius: "2px 2px" }}
        />

        <button
          className="btn btn-primary rounded d-flex justify-content-center align-item-center mb-4"
          data-bs-dismiss="modal"
        >
          Sign In
        </button>
        <div className="d-flex flex-column gap-2 ">
          <button
            className="btn d-flex align-items-center justify-content-center gap-2 border"
            style={{
              borderRadius: "2px",
              borderWidth: "0.6px",
              borderStyle: "solid",
            }}
            onClick={()=>handleFacebookLogin}
          >
            <img
              src="https://dont-copy.netlify.app/assets/facebook-ImnSLa_q.svg"
              alt="facebook"
            />{" "}
            Sign In with Facebook
          </button>
          <button
            className="btn d-flex align-items-center justify-content-center gap-2 border"
            style={{
              borderRadius: "2px",
              borderWidth: "0.6px",
              borderStyle: "solid",
            }}
              onClick={handleGoogleSignIn}
          >
            <img
              src="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1_2217)'%3e%3cpath%20d='M3.54594%209.66905L2.989%2011.7482L0.953406%2011.7912C0.345063%2010.6629%200%209.37192%200%208.00005C0%206.67345%200.322625%205.42245%200.8945%204.32092H0.894938L2.70719%204.65317L3.50106%206.45455C3.33491%206.93895%203.24434%207.45895%203.24434%208.00005C3.24441%208.5873%203.35078%209.14995%203.54594%209.66905Z'%20fill='%23FBBB00'/%3e%3cpath%20d='M15.8602%206.50562C15.9521%206.98955%2016%207.48933%2016%208.00012C16%208.57287%2015.9398%209.13155%2015.8251%209.67046C15.4357%2011.5043%2014.4181%2013.1056%2013.0084%2014.2388L13.008%2014.2384L10.7253%2014.1219L10.4023%2012.1052C11.3377%2011.5566%2012.0687%2010.6981%2012.4537%209.67046H8.1759V6.50562H12.5161H15.8602Z'%20fill='%23518EF8'/%3e%3cpath%20d='M13.0081%2014.2382L13.0085%2014.2386C11.6375%2015.3406%209.89596%2015.9999%208.00015%2015.9999C4.95355%2015.9999%202.30477%2014.2971%200.953552%2011.7911L3.54608%209.66895C4.22168%2011.472%205.96102%2012.7555%208.00015%2012.7555C8.87662%2012.7555%209.69774%2012.5186%2010.4023%2012.105L13.0081%2014.2382Z'%20fill='%2328B446'/%3e%3cpath%20d='M13.1064%201.84175L10.5148%203.9635C9.78553%203.50769%208.92353%203.24438%208.00003%203.24438C5.91475%203.24438%204.14288%204.58678%203.50113%206.4545L0.894969%204.32088H0.894531C2.22597%201.75384%204.90816%200%208.00003%200C9.94112%200%2011.7209%200.691438%2013.1064%201.84175Z'%20fill='%23F14336'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_2217'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
              alt="google"
            />{" "}
            Sign In with Google
          </button>
        </div>
      </div>
    </div>
  );
};

const SignInModal = () => {
  const [haveAccount, setHaveAccount] = useState(false);



  return (
    <div
      className="modal fade"
      id="signInModal"
      tabIndex="-1"
      aria-labelledby="signInModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered position-relative">
        {/* Close Button */}
        <button
          type="button"
          className="btn position-absolute  "
          data-bs-dismiss="modal"
          aria-label="Close"
          style={{ top: "0px", right: "-38px" }}
        >
          <img
            src="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14%202.33331C7.54838%202.33331%202.33337%207.54831%202.33337%2014C2.33337%2020.4516%207.54838%2025.6666%2014%2025.6666C20.4517%2025.6666%2025.6667%2020.4516%2025.6667%2014C25.6667%207.54831%2020.4517%202.33331%2014%202.33331ZM19.8334%2018.1883L18.1884%2019.8333L14%2015.645L9.81171%2019.8333L8.16671%2018.1883L12.355%2014L8.16671%209.81164L9.81171%208.16665L14%2012.355L18.1884%208.16665L19.8334%209.81164L15.645%2014L19.8334%2018.1883Z'%20fill='white'/%3e%3c/svg%3e"
            alt="Close"
          />
        </button>

        <div className="modal-content ">
          {/* Modal Header */}
          <div className="modal-header  d-flex justify-content-center mb-4">
            <p
              className="modal-title fw-semibold text-success "
              style={{
                fontSize: "14px",
                fontStyle: "normal",
                lineHeight: "16px",
              }}
            >
              Let's learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </p>
          </div>

          {/* Modal Body */}
          <div className="modal-body px-4">
            <div className="row">
              <div className="d-flex justify-content-between  align-items-center mb-4">
                <h4 className="d-flex fw-bold">Sign In</h4>
                <button
                  className="btn"
                  onClick={() => setHaveAccount(!haveAccount)}
                >
                  Already have an account?{" "}
                  <span className="text-primary">Sign In</span>
                </button>
              </div>

              <div className="container text-center">
                <div className="row">
                  {!haveAccount ? (
                    <CreateAccountComponent  />
                  ) : (
                    <SignInComponent />
                  )}

                  <div className="col">
                    {/* Right: Illustration and Info */}
                    <div className=" d-flex flex-column ">
                      <img
                        src="https://dont-copy.netlify.app/assets/signup-OCG-APNN.svg"
                        alt="Signup illustration"
                      />
                      <p
                        className="text-center text-muted small"
                        style={{
                          fontSize: "11px",
                          fontStyle: "normal",
                          lineHeight: "16px",
                          fontFamily: "IBM Plex Sans",
                          fontWeight: "400",
                        }}
                      >
                        By signing up, you agree to our Terms & conditions,
                        Privacy policy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
