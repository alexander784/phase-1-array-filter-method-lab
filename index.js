function findMatching(drivers, name) {
    const lowercaseName = name.toLowerCase();
    const matchingDrivers = drivers.filter(driver => driver.toLowerCase() === lowercaseName);
    return matchingDrivers;
  }
  const drivers = ['Bobby', 'Samantha', 'bobby', 'Tom'];
  
  const result = findMatching(drivers, 'Bobby');
  console.log(result);

  function fuzzyMatch(drivers, query) {
    const matchingDrivers = drivers.filter(driver => driver.startsWith(query));
  
    return matchingDrivers;
  }
  
  const driver = ['Sammy', 'Samantha', 'Sarah', 'Sally'];
  
  const results = fuzzyMatch(drivers, 'Sa');
  console.log(result);

  function matchName(drivers, nameToMatch) {
    const matchingDrivers = drivers.filter(driver => {
      return driver.name === nameToMatch;
    });
  
    return matchingDrivers;
  }
  
  
    
  
  