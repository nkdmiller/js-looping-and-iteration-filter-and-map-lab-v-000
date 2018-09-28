function driversWithRevenueOver(drivers, revenue){
  const results = drivers.filter(driver => driver.revenue > revenue);
  return results;
}

function driverNamesWithRevenueOver(drivers, revenue){
  const result = [];
  drivers.filter(x =>{
    if (x.revenue > revenue){
      result.push(x.name);
    }
  });
  return result;
}

function exactMatch(drivers, obj){
  theKey = Object.keys(obj)[0];
  theValu = obj.theKey;
  const result = [];
  drivers.filter(x =>{
    if (x.theKey === theValu){
      result.push(x);
    }
  });
  return result;
}
