window.HARX_CONFIG = Object.freeze({
  apiBaseUrl: window.location.protocol === "file:"
    ? "http://127.0.0.1:5000/api"
    : window.location.hostname === "127.0.0.1" && window.location.port === "8765"
      ? "http://127.0.0.1:5000/api"
      : ""
});
