function click1(num,def){
	var element = document.getElementsByClassName("grid");
	element[num].classList.toggle("flip");
switch (num) {
  case 0:
    for (var i = 0; i < element.length; i++) {
    	if (element[i].classList.contains('flip') == 1 && i != num) {
			element[i].classList.remove('flip')
		document.body.style.backgroundColor = "rgb(173,191,215)";
	}else{
			document.body.style.backgroundColor = "rgb(173,191,215)";
	}}
    break;
  case 1:
    // document.body.style.backgroundColor = "rgb(70,79,145)";
    for (var i = 0; i < element.length; i++) {
    	if (element[i].classList.contains('flip') == 1 && i != num) {
			element[i].classList.remove('flip')
		document.body.style.backgroundColor = "rgb(70,79,145)";
	}else{
			document.body.style.backgroundColor = "rgb(70,79,145)";
	}
    }
    break;
  case 2:
    for (var i = 0; i < element.length; i++) {
    	if (element[i].classList.contains('flip') == 1 && i != num) {
			element[i].classList.remove('flip')
   		 	document.body.style.backgroundColor = "rgb(208,178,188)"
	}else{
	}}
    break;
  case 3:
    document.body.style.backgroundColor = "rgb(238,121,12)";
    for (var i = 0; i < element.length; i++) {
    	if (element[i].classList.contains('flip') == 1 && i != num) {
			element[i].classList.remove('flip')
			document.body.style.backgroundColor = "rgb(238,121,12)";
	}else{
		document.body.style.backgroundColor = "rgb(238,121,12)";
	}}
    break;
  case 4:
    for (var i = 0; i < element.length; i++) {
    	if (element[i].classList.contains('flip') == 1 && i != num) {
			element[i].classList.remove('flip')
			document.body.style.backgroundColor = "rgb(70,70,72)"
	}else{
	     document.body.style.backgroundColor = "rgb(70,70,72)"
	}}
    break;
  case 5:
    for (var i = 0; i < element.length; i++) {
    	if (element[i].classList.contains('flip') == 1 && i != num) {
			element[i].classList.remove('flip')
			document.body.style.backgroundColor = "rgb(246,201,142)"
	}else{
		document.body.style.backgroundColor = "rgb(246,201,142)"
	}}
    break;
  case 6:
    document.body.style.backgroundColor = "rgb(64, 66, 125)"
    for (var i = 0; i < element.length; i++) {
    	if (element[i].classList.contains('flip') == 1 && i != num) {
			element[i].classList.remove('flip')
    		document.body.style.backgroundColor = "rgb(64, 66, 125)"
	}else{
    	document.body.style.backgroundColor = "rgb(64, 66, 125)"
	}}
    break;
  case 7:
    document.body.style.backgroundColor = "rgb(160,71,58)"
    for (var i = 0; i < element.length; i++) {
    	if (element[i].classList.contains('flip') == 1 && i != num) {
			element[i].classList.remove('flip')
    		document.body.style.backgroundColor = "rgb(160,71,58)"
	}else{
    	document.body.style.backgroundColor = "rgb(160,71,58)"
	}}
    break;
  case 8:
    for (var i = 0; i < element.length; i++) {
    	if (element[i].classList.contains('flip') == 1 && i != num) {
			element[i].classList.remove('flip')
    		document.body.style.backgroundColor = "rgb(255,255,255)"
	}else{
    document.body.style.backgroundColor = "rgb(255,255,255)"
	}}
    break; 
  default:
    alert( "провал" );

}
	if (element[num].classList.contains('flip') == false) {
    		document.body.style.backgroundColor = "rgb(230, 126, 34)";
    		console.log('hi');
	}
}