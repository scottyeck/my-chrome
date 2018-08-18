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
  const createUrlRegexes = prefixes =>
    Object.keys(prefixes).reduce((acc, key) => {
      acc[key] = new RegExp(`^${prefixes[key]}`);
      return acc;
    }, {});

  const urlRegexes = createUrlRegexes(urlPrefixes);

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

  /**
   * Pocket service handler. Hides ads in the queue bc it
   * makes the queue hard to read.
   */
  const handlePocket = () => {
    const queue = document.getElementById("queue");
    // TODO: Actually write the handler.
  };

  // Maps services to their handlers.
  const serviceHandlers = {
    [services.pocket]: handlePocket
  };

  /**
   * Given a service, invokes its corresponding handler
   * if it exists.
   *
   * @param {String} service
   */
  const handleService = service => {
    if (serviceHandlers[service]) {
      console.success(`Handling service "${service}"`);
      serviceHandlers[service]();
    } else {
      console.info(`No handled service detected.`);
    }
  };

  /**
   * Gets the current service and hands off to handler.
   */
  const apply = () => {
    handleService(getCurrentService(window.location.href));
  };

  // Let's do this.
  apply();
})();
