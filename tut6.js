function report(firstname, lastname, ...colors){
	let phrase = colors.length === 0 ? 'no colors' :
	colors.length === 1 ? 'the color ' + colors[0] :
	'the colors ' + colors.join(' and ');

	console.log(firstname, lastname, 'likes', phrase + '.');
}

report('Jerald', 'de Florencia', 'green');
report('Dianne Rose', 'de Florencia', 'violet', 'pink', 'yellow');
report('Rosalia', 'de Florencia', 'blue');
report('Mai', 'Mai');