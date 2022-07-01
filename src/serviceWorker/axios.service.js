import Axios from "axios";
import { store } from "../index";
import { DOMAIN, TOKEN_ADMIN, TOKEN_CYBERSOFT } from "../configURL/constant";
// import {
//   set_spinner_end,
//   set_spinner_start,
// } from "../redux/action/spinnerAction";
import localStorageServ from "./locaStorage.service";
import {
  set_loading_end,
  set_loading_start,
} from "../redux/action/loadingAction";

class AxiosService {
  axios;
  axiosConfig;
  authService;
  constructor(params) {
    this.axios = Axios.create({
      baseURL: this.getBaseUrl(),
    });
    this.getAxiosConfig();
  }
  getBaseUrl() {
    return DOMAIN;
  }

  // domain production  => user
  // domain test => tester
  //  domain dev
  getAxiosConfig = (_token) => {
    // const token = _token ? _token : localStorageServ.accessToken.get();
    this.axiosConfig = {
      headers: {
        tokenByClass: TOKEN_CYBERSOFT,
        Authorization:
          "bearer " + localStorageServ.userInfor.get()?.accessToken,
        // token:
        token: TOKEN_ADMIN,
      },
    };
  };

  removeAxiosConfig = () => {
    this.axiosConfig = {
      headers: {
        iKeapy: ``,
        "Content-Type": "application/json",
      },
    };
  };

  getMethod(uri, loading = true) {
    return this.handleFlow(this.axios.get(uri, this.axiosConfig), loading);
  }

  postMethod(uri, data, loading = true) {
    return this.handleFlow(
      this.axios.post(uri, data, this.axiosConfig),
      loading
    );
  }

  putMethod(uri, data, loading = true) {
    return this.handleFlow(
      this.axios.put(uri, data, this.axiosConfig),
      loading
    );
  }

  patchMethod(uri, data, loading = true) {
    return this.handleFlow(
      this.axios.patch(uri, data, this.axiosConfig),
      loading
    );
  }

  deleteMothod(uri, loading = true) {
    return this.handleFlow(this.axios.delete(uri, this.axiosConfig), loading);
  }

  handleFlow(method, loading = true) {
    store.dispatch(set_loading_start());
    return new Promise((resolve, reject) => {
      method
        .then((res) => {
          store.dispatch(set_loading_end());
          resolve({
            data: res.data,
            status: res.status,
            isSuccess: true,
          });
        })
        .catch((err) => {
          store.dispatch(set_loading_end());
          this.handleError(err);
          reject({
            err: err,
          });
        });
    });
  }

  handleError = (err) => {
    const status = err.response?.status;
    switch (status) {
      // case 400:
      case 401:
      case 403:
        window.location.assign("/login");
      //   break;
      // default:
      //   break;
    }
  };
  //
  axiosInstance = (req) => {
    this.axios(req, this.axiosConfig);
  };
}

const AxiosServ = new AxiosService();
export default AxiosServ;
