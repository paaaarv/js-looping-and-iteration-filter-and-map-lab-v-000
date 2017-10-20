// Code your solution here:


function driversWithRevenueOver(drivers,rev){

  return drivers.filter(function(driver){
    return driver.revenue > rev
  })

}

function driverNamesWithRevenueOver(drivers, rev){
  let newArr = []
  return drivers.filter(function(driver){
    newArr.push(driver.name if(driver.revenue > rev))
  })
}
