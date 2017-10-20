// Code your solution here:


function driversWithRevenueOver(drivers,rev){

  return drivers.filter(function(driver){
    return driver.revenue > rev
  })

}
