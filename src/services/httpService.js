import axios from "axios";

const HttpService = (function() {
  return {
    get: function(route) {
      return axios.get(this.buildURL(route));
    },
    post: function(route, body, config) {
      return axios.post(this.buildURL(route), body, config);
    },
    put: function(route, body, config) {
      return axios.put(this.buildURL(route), body, config);
    },
    buildURL: function(route) {
      return `${this.baseUrl()}/${route}`;
    },
    baseUrl: function() {
      return "https://cloudconfigserver.herokuapp.com";
    }
  };
})();

export default HttpService;
