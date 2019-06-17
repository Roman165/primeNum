
(function () {
	'use strict';
	var number1, number2
		do {
		number1 = +prompt('Введите первое число больше \'1\'', '20')
		number2 = +prompt('Введите второе число больше \'2\'', '40')
		}
	while (number1 < 2 || number2 < 3) 

for (var i=number1;  i<=number2; i++) {

  var count = 0;

  for (var j=1; j<=i; j++) {
    if (i%j) {continue;}

    count += 1;
  }
  if (count == 2) document.write(i+', ');

}



})();
