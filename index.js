// Code your solution here:


function driversWithRevenueOver(drivers,rev){

  return drivers.filter(function(driver){
    return driver.revenue > rev
  })

}

function driverNamesWithRevenueOver(drivers, rev){
  let newArr = []
  drivers.filter(function(driver){
    if (driver.revenue > rev){
    newArr.push(driver.name)}
  })
  return newArr
}

function exactMatch(drivers, rev){
  let newArr = []
  drivers.filter(function(driver){
    if (driver.name === rev|| driver.revenue === rev){
      newArr.push(driver)
    }
  })
  return newArr
}
