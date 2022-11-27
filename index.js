function scuberGreetingForFeet(d) {
 let result
  if (d <= 400) {
    result = 'This one is on me!'
    return result
  } else if (d <= 2000) {
    result = 'That will be twenty bucks.'
    return result 
  } else if (d <= 2500) {
    result = 'I will gladly take your thirty bucks.'
    return result
  } else result = 'No can do.'
    return result
}
scuberGreetingForFeet(199)

function ternaryCheckCity(city) {
  
  return (city === "NYC"? 'Ok, sounds good.' : 'No go.')

}





function switchOnCharmFromTip(action) {
    
  switch(action) {
    case 'generous':
      return 'Thank you so much.'
      break
    case 'not as generous':
      return 'Thank you.'
      break
    default:
      return 'Bye.'


  }
}

 