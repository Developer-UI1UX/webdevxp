(() => {
  const configuredBase = window.HARX_CONFIG?.apiBaseUrl || "";
  const apiBase = configuredBase.replace(/\/+$/, "");
  const apiOrigin = apiBase ? new URL(apiBase, window.location.origin).origin : "";
  const tokenKey = "harxpay-session-token";

  async function request(path, options = {}) {
    if (!apiBase) {
      throw new Error("The Harx Pay backend is not connected yet. Configure the public API URL before using accounts or payments.");
    }

    const headers = new Headers(options.headers || {});
    if (options.body && !(options.body instanceof FormData)) {
      headers.set("Content-Type", "application/json");
    }

    const token = sessionStorage.getItem(tokenKey);
    if (token) headers.set("Authorization", `Bearer ${token}`);

    let response;
    try {
      response = await fetch(`${apiBase}${path}`, {
        ...options,
        headers,
        body: options.body && !(options.body instanceof FormData)
          ? JSON.stringify(options.body)
          : options.body
      });
    } catch (error) {
      throw new Error("Cannot reach the Harx Pay API. Check the API URL and server status.");
    }

    let result;
    try {
      result = await response.json();
    } catch {
      throw new Error(`The API returned an invalid response (HTTP ${response.status}).`);
    }

    if (!response.ok || result.success === false) {
      if (response.status === 401) sessionStorage.removeItem(tokenKey);
      throw new Error(result.message || `Request failed (HTTP ${response.status}).`);
    }
    return result;
  }

  window.HarxApi = Object.freeze({
    baseUrl: apiBase,
    callbackUrl: apiOrigin ? new URL("/api/pesajet/callback", apiOrigin).href : "",
    request,
    setToken(token) {
      sessionStorage.setItem(tokenKey, token);
    },
    clearToken() {
      sessionStorage.removeItem(tokenKey);
    },
    hasToken() {
      return Boolean(sessionStorage.getItem(tokenKey));
    }
  });
})();
