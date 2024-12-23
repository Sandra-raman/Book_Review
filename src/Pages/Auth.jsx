import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginAPI, registerAPI } from "../Services/allAPI";


function Auth({ register }) {
  const navigate = useNavigate();
  const [userDetails, setuserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleRegister = async () => {
    console.log(userDetails);
    const { username, email, password } = userDetails;
    if (!username || !email || !password) {
      toast.warn("Please fill the form", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      try {
        const response = await registerAPI(userDetails);
        console.log(response);
        if (response.status == 200) {
          toast.success(response.data, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setTimeout(() => {
            navigate("/login");
          }, 6000);
        } else {
          alert(response.response.data.message);
        }
      } catch (err) {
        toast.error("API Error", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };
  const handleLogin = async () => {
    console.log(userDetails);
    const { email, password } = userDetails;
    if (!email || !password) {
      toast.warn("Please fill the form", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      try {
        const response = await loginAPI(userDetails);
        console.log(response);
        if (response.status == 200) {
          toast.success("Login Successful", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setTimeout(() => {
            navigate("/");
          }, 6000);
          sessionStorage.setItem(
            "username",
            response.data.currentUser.username
          );
          sessionStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.response.data, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      } catch (err) {
        toast.error("API Error", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };
  return (
    <div>
      <div>
        <div className="row">
          <div className="col-6 p-5">
            <img
              className="rounded shadow"
              height={"400px"}
              src="https://images-cdn.reedsy.com/discovery/post/109/featured_image/medium_aa7b8fcc4ee3a86626aca3157bbd8d697c38429a.jpg"
              alt=""
            />
          </div>
          <div className="col-6 p-5">
            <h3 className="my-4 text-center">Welcome to PlotPoint</h3>
            <h4 className="mb-3 ms-2">Sign{register ? "Up" : "In"}</h4>
            {register && (
              <input
                onChange={(e) =>
                  setuserDetails({ ...userDetails, username: e.target.value })
                }
                type="text"
                placeholder="Username"
                className="form-control mb-3"
              />
            )}
            <input
              type="email"
              onChange={(e) =>
                setuserDetails({ ...userDetails, email: e.target.value })
              }
              placeholder="Email"
              className="form-control mb-3"
            />
            <input
              type="password"
              onChange={(e) =>
                setuserDetails({ ...userDetails, password: e.target.value })
              }
              placeholder="Password"
              className="form-control mb-3"
            />
            {register ? (
              <div className="text-center">
                <button onClick={handleRegister} className="btn btn-info mb-3">
                  SignUp
                </button>
                <p>
                  Already Register? <Link to={"/login"}>Login Now</Link>
                </p>
              </div>
            ) : (
              <div className="text-center">
                <button onClick={handleLogin} className="btn btn-info mb-3">
                  SignIn
                </button>
                <p>
                  New here? <Link to={"/register"}>Register Now</Link>
                </p>
              </div>
            )}
              <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
