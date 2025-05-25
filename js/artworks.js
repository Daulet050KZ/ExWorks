// alert('good')
// console.log()

for (let i = 1; i <= 6; i++) {
	document.getElementById(`skewUp-${i}`).addEventListener('mouseover', function() {
		for(let j = 1; j <= 6; j++){
			document.getElementById(`backImageUp-${j}`).style.minWidth = '0%';

			document.getElementById(`skewUp-${j}`).style.minWidth = '0%';
		}

		document.getElementById(`backImageUp-${i}`).style.minWidth = '100%';
		document.getElementById(`skewUp-${i}`).style.minWidth = '100%';
	});

	document.getElementById(`skewUp-${i}`).addEventListener('mouseleave', function() {
		for(let j = 1; j <= 6; j++){
			document.getElementById(`backImageUp-${j}`).style.minWidth = `${document.getElementById(`skewUp-${j}`).getAttribute('data-Width')}`;

			document.getElementById(`skewUp-${j}`).style.minWidth = `${document.getElementById(`skewUp-${j}`).getAttribute('data-Width')}`;
		}

		document.getElementById(`backImageUp-${i}`).style.minWidth = `${document.getElementById(`skewUp-${i}`).getAttribute('data-Width')}`;
	});
}

for (let i = 1; i <= 6; i++) {
	document.getElementById(`skewDown-${i}`).addEventListener('mouseover', function() {
		for(let j = 1; j <= 6; j++){
			document.getElementById(`backImageDown-${j}`).style.minWidth = '0%';

			document.getElementById(`skewDown-${j}`).style.minWidth = '0%';
		}

		document.getElementById(`backImageDown-${i}`).style.minWidth = '100%';
		document.getElementById(`skewDown-${i}`).style.minWidth = '100%';
	});

	document.getElementById(`skewDown-${i}`).addEventListener('mouseleave', function() {
		for(let j = 1; j <= 6; j++){
			document.getElementById(`backImageDown-${j}`).style.minWidth = `${document.getElementById(`skewDown-${j}`).getAttribute('data-Width')}`;

			document.getElementById(`skewDown-${j}`).style.minWidth = `${document.getElementById(`skewDown-${j}`).getAttribute('data-Width')}`;
		}

		document.getElementById(`backImageDown-${i}`).style.minWidth = `${document.getElementById(`skewDown-${i}`).getAttribute('data-Width')}`;
	});
}