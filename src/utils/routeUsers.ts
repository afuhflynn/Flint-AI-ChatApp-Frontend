function routeUsers(url: string) {
  //TODO: Get the values from here and use as re-routing routes console.log(window.history, window.origin, window.location.pathname);
  // const origin = window.origin;
  window.location.pathname = `${url}`;
}

export default routeUsers;
