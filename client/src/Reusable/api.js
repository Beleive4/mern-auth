import axios from "axios";
import moment from "moment";

let apiURL = "/api/user/";

let axios_instance = axios.create({
  baseURL: apiURL,
  timeout: 65000,
});

axios_instance.interceptors.response.use(
  (config) => {
    let token = localStorage.getItem("token");

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

class IntellRecutAPI {
  invoke = (path, method, callback, data, params) => {
    let config = {
      method: method,
      url: path,
    };
    if (data !== undefined) {
      config["data"] = data;
    }
    if (params !== undefined) {
      config["params"] = params;
    }
    if (path !== "login") {
      let contentType = "application/json";

      const token = localStorage.getItem("token");

      if (
        path === "profile/profile_update" ||
        (path === "settings" && method === "post") ||
        (path === "candidates/uploads" && method === "post") ||
        (data && path === "candidates/" + data.id && method === "post") ||
        (path === "candidates" && method === "post") ||
        (data && path === "client/" + data.id && method === "post") ||
        (path === "client" && method === "post") ||
        (data && path === "employees/" + data.id && method === "post") ||
        (path === "employees" && method === "post") ||
        (path === "employee_documents" && method === "post") ||
        (path === "job_filter" && method === "post") ||
        (path === "jobs" && method === "post") ||
        (data && path === "jobs/" + data.id && method === "post") ||
        (path === "import/candidate" && method === "post") ||
        (data && path === "recruitment/" + data.id && method === "post") ||
        (path === "import/job" && method === "post") ||
        (path === "import/company" && method === "post") ||
        (path === "/public_jobs/apply" && method === "post")
      ) {
        contentType = "multipart/form-data";
      }
      config["headers"] = {
        Authorization: "Bearer " + token,
        "Content-Type": contentType,
        TimeZone: new Date().toString().match(/\(([A-Za-z\s].*)\)/)[1],
        IpAddress: "",
        "Access-Control-Allow-Origin": "*",
      };
    } else {
      config["headers"] = { "Access-Control-Allow-Origin": "*" };
    }

    axios_instance
      .request(config)
      .then((res) => {
        callback(res.data, true, res.status);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          localStorage.clear();
          window.location.href = "/";
          window.location.reload();
        } else if (
          err.response &&
          err.response.status === 403 &&
          path !== "login"
        ) {
          window.location.href = "/";
          window.location.reload();
        } else if (err.response && err.response.status === 500) {
          callback(err.response.data, true, err.response.status);
        } else {
          callback(err.response.data, true, err.response.status);
        }
      });
  };
}

export default IntellRecutAPI;
