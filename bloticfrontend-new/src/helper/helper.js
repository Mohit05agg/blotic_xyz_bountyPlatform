import axios from "axios";
import jwtDecode from "jwt-decode";
import toast, { Toaster } from "react-hot-toast";
const Baseurl = "http://localhost:8080";
// const Baseurl = "https://bloticbounty-backend.onrender.com"
// const Baseurl = "http://localhost:8080"

// import dotenv from "dotenv"
// dotenv.config();
//   const finduser = async (data)=>{
//      await axios.post('http://192.168.0.107:8080/api/finduser', data)
//     .then(response => {
//       console.log('Response:', response.data);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
//   }

//   const getuser = async (data)=>{
//     await axios.post('http://192.168.0.107:8080/api/getuser', data)
//    .then(response => {
//      console.log('Response:', response.data);
//    })
//    .catch(error => {
//      console.error('Error:', error);
//    });
//  }
//   export  {finduser , getuser}

//sending data form signup to http://localhost:8080/api/signup
const senddata = async (username, email, password) => {
  const signuptoast = () =>
    toast.error("Try with different email and username");
  const signuploading = () => toast.success("Loading...");
  signuploading();
  const data = { username, email, password };
  if (!username || !email || !password) {
    signuptoast();
  }
  console.log(data);
  console.log(Baseurl);
  // const  url = `${process.env.REACT_APP_MONGOURL}\api\signup`
  const result = await axios
    .post(`${Baseurl}/api/signup`, data)
    .then((res) => {
      console.log("res ",res);
      if (res.data.user) {
        localStorage.setItem("username", res.data.user);
        window.location.reload();
      }
      console.log(
        "username form  local storage",
        localStorage.getItem("usernamesign")
      );
    })
    .catch((err) => {
      signuptoast();
    });
  // console.log(result);

  return result;
};

const sendlogin = async (email, password) => {
  const notify = () => toast.success("Loading...");
  notify();
  const data = { email, password };
  console.log(data);
  // const  url = `${process.env.REACT_APP_MONGOURL}\api\signup`
  const result = await axios.post(`${Baseurl}/api/login`, data);
  // console.log(result.data);
  const decoded = jwtDecode(result.data);
  console.log("decoded :  ", decoded);
  localStorage.setItem("token", result.data);
  localStorage.setItem("username", decoded.u);
  console.log(
    "useremail form  local storage form helper",
    localStorage.getItem("username")
  );
  console.log(
    "token form  local storage helper",
    localStorage.getItem("token")
  );
  return result.data;
};

const sendgoogle = async (token) => {
  const notify = () => toast.success("Loading...");
  notify();
  const data = token;
  console.log("data" ,data);
  // const  url = `${process.env.REACT_APP_MONGOURL}\api\signup`
  const result = await axios.post(`${Baseurl}/api/glogin`, {data});
  console.log(result.data);
  localStorage.setItem("username",result.data.existuser.email);
  // window.location.reload()
};

const getuser = async (username) => {
  const data = { username };
  console.log(data);
  // const  url = `${process.env.REACT_APP_MONGOURL}\api\signup`
  const result = await axios.post(`${Baseurl}/api/finduser`, data);
  // console.log("resul from api : ",result);
  // console.log("username form  local storage getuser helper", localStorage.getItem("username"));
  return result;
};

const sendformdata = async (data) => {
  delete data.username;
  data = { ...data, username: localStorage.getItem("username") };
  console.log("data from sendfrom daata", data);
  const result = await axios.post(`${Baseurl}/api/getuser`, data);
  return result;
};

const getUser = () => {
  fetch("http://localhost:8080/auth/login/success", {
    method: "GET",
    credentials: "include",

    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
    },
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      throw new Error("authentication has been failed!");
    })
    .then((resObject) => {
      // setUser(resObject.user);
      console.log(resObject.user);
      sendgoogle(resObject.user.emails[0].value, resObject.user.displayName);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { senddata, sendlogin, getuser, sendformdata, sendgoogle, getUser };
