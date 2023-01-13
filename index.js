const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, driver) {
  return array.filter(item => item.toLowerCase() === driver.toLowerCase())
}

// console.log((findMatching(drivers, 'Bobby')))

function fuzzyMatch (array, driver) {
  return array.filter(item => item.slice(0,1) === driver.slice (0,1))
}



function matchName (array, driver) {
  return array.filter(item => item.name === driver)

}
console.log((matchName(drivers, 'Bobby')))
