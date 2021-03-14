import {
    ACCESS_TOKEN,
    REFRESH_TOKEN
} from './constants';

const LocalStorageService = (function(){
    var service;
    function getService() {
        if(!service) {
          service = this;
          return service
      }
      return service
    }
    function setToken(tokenObj) {
      localStorage.setItem(ACCESS_TOKEN, tokenObj.access_token);
      localStorage.setItem(REFRESH_TOKEN, tokenObj.refresh_token);
    }
    function getAccessToken() {
      return localStorage.getItem(ACCESS_TOKEN);
    }
    function getRefreshToken() {
      return localStorage.getItem(REFRESH_TOKEN);
    }
    function clearToken() {
      localStorage.removeItem(ACCESS_TOKEN);
      localStorage.removeItem(REFRESH_TOKEN);
    }
    function updateField(Obj,key,value){
      const data = JSON.parse(localStorage.getItem(Obj));
    if (data[key] !== "" && data[key] !== undefined && data[key] !== null){
      data[key] = value
      localStorage.setItem(Obj,JSON.stringify(data))
    }
    else {
      data[key] = value
      localStorage.setItem(Obj,JSON.stringify(data))
    }
    }
   return {
      getService : getService,
      setToken : setToken,
      getAccessToken : getAccessToken,
      getRefreshToken : getRefreshToken,
      clearToken : clearToken,
      updateField : updateField
    }
   })();
   export default LocalStorageService;