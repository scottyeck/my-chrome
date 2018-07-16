(() => {
  // Constants for each service
  const services = {
    pocket: "pocket"
  };

  // URL tokens corresponding to each service
  const urlPrefixes = {
    [services.pocket]: "https://getpocket.com"
  };

  // Translate each of the prefixes above into a regex matcher
  // starting at the beginning of the string.
  const urlRegexes = Object.keys(urlPrefixes).map(
    serviceId => new RegExp(`^${services[serviceId]}`)
  );

  /**
   * Gets whether the provided URL is part of the specified service.
   *
   * @param {String} service
   * @param {String} url
   * @returns {Boolean}
   */
  const getIsServiceUrl = (service, url) => urlRegexes[service].test(url);

  /**
   * Gets the current service based on the url
   *
   * @param {String}
   * @returns {String}
   */
  const getCurrentService = url =>
    Object.values(services).find(service => getIsServiceUrl(service, url));

  const handlePocket = () => {
    window.alert("THIS IS POCKET");
  };

  const serviceHandlers = {
    [services.pocket]: handlePocket
  };

  const handleService = service => {
    if (serviceHandlers[service]) {
      console.success(`Handling service "${service}"`);
      serviceHandlers[service]();
    } else {
      console.info(`No handled service detected.`);
    }
  };

  /**
   * Gets the current service and executes a handler accordingly.
   */
  const apply = () => {
    handleService(getCurrentService(window.location.href));
  };

  apply();
})();
