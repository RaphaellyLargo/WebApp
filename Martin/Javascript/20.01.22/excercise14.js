function takeUmbrella(weather, chance){


if(weather == "rainy"){
  return true;
}else if(weather == "cloudy" && chance > 0.2){
  return true;
}else if(weather == "sunny" && chance > 0.5) {
  return true;
} else {
  return false;
}
}
console.log("Regenschirm mitnehmen? " + takeUmbrella("sunny",0.1));


//wenn regnet, dann schirm --> true
//wenn cloudy UND chance  > 20 % --> true
//wenn sunny UND chance > 50 % -- true

// alles andere falsch else false