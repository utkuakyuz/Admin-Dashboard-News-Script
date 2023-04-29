import config from "@/service/urls";
import api from "@/service/api";
import local from "@/lib/local";
import { hasKey } from "@/lib/setting";
import router from "@/router";
import { logout } from "../lib/setting";
const getFormUrlencoded = (details) => {
  let formBody = [];
  for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  return formBody;
};
const getFormData = (details) => {
  let formBody = new FormData();
  for (const key in details) {
    if (hasKey(details, key)) {
      formBody.append(key, details[key]);
    }
  }
  return formBody;
};
const getJsonData = (details) => {
  let formBody = {};
  for (const key in details) {
    if (hasKey(details, key)) {
      formBody[key] = details[key];
    }
  }
  return formBody;
};

const getHeaderType = (header, headers) => {
  if (header.multipart == 1) {
    headers["Content-Type"] = "application/json";
  } else if (header.multipart == 2) {
    headers["Content-Type"] = "multipart/form-data";
  } else if (header.multipart == 3) {
    headers["Content-Type"] = "application/x-www-form-urlencoded";
  } else {
    headers["Content-Type"] = "application/json";
  }
  return headers;
};
const getData = (api, method, thisUrl, form, headers, header) => {
  return new Promise((resolve, reject) => {
    let response = null
    if (method === 'GET') {
      response = api(headers, header.responsetype).get(thisUrl)
    } else if (method === 'POST') {
      response = api(headers).post(thisUrl, form)
    } else if (method === 'DELETE') {
      response = api(headers).delete(thisUrl, form)
    } else if (method === 'PUT') {
      response = api(headers).put(thisUrl, form)
    } else {
      response = api(headers).post(thisUrl, form)
    }
    if (response !== null) {
      response.then(res => {
        console.log(res)
        resolve(res)
      }).catch(err => {
        if(err.response.status === 401){
          localStorage.removeItem("user_token");
          setTimeout(() => router.go("/"), 2000);
        }
        reject(err)
      });

    } else {
      reject(new Error('Method belirtiniz'))
    }
  });
}

const baseFunc = (base, data, uri, method = "GET", header = {}) => {
  let form = null;
  let thisUrl = "";
  let headers = getHeaderType(header, {});
  data = data || {};
  const objs = [{}, base, data];
  const out = Object.assign(...objs);
  if (hasKey(config, uri)) {
    thisUrl = config[uri];
  }
  if (hasKey(header, "addToken") && header.addToken) {
    headers["Authorization"] = `Bearer ${local.getItem("user_token")}`;
  }
  if (thisUrl !== "") {
    if (hasKey(header, "addurl") && header.addurl) {
      Object.keys(out).forEach((elem) => {
        if (thisUrl.indexOf("{{" + elem + "}}") !== -1) {
          console.log('elem :', elem);
          thisUrl = thisUrl.replace("{{" + elem + "}}", out[elem]);
          delete out[elem];
        }
      });
    }
    if (method === "GET") {
      var queryString = Object.keys(out)
        .map((key) => key + "=" + out[key])
        .join("&");
      if (queryString.length > 0) thisUrl = thisUrl + "?" + queryString;
      return getData(api, method, thisUrl, {}, headers, header)
    } else {
      if (header.multipart) {
        if (header.multipart == 1) {
          form = getJsonData(out)
        } else {
          form = getFormUrlencoded(out)
        }
      } else {
        form = getJsonData(out)
      }
      return getData(api, method, thisUrl, form, headers, null)
    } }else {
      return new Promise(reject => {
        reject(null)
      })
    }
  }

export default baseFunc;


