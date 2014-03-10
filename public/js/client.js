var gui = require('nw.gui'),
	win = gui.Window.get(),
	fs = require("fs");

var bestLanguage = navigator.language.slice(0,2);
if( fs.existsSync('./lang/' + bestLanguage + '.json') ) {
	Language = require('./lang/' + bestLanguage + '.json');
} else {
	Language = require('./lang/' + preferred + '.json');
}
$('[data-translate]').each(function(){
	var $el = $(this);
	var key = $el.data('translate');

	if( $el.is('input') ) {
		$el.attr('placeholder', Language[key]);
	} else {
		$el.text(Language[key]);
	}
});


$(function () {
	$('.btn-os.close').click(function (e) {
		e.preventDefault();
		win.close();
	});
	$('.btn-os.minimize').click(function (e) {
		e.preventDefault();
		win.minimize();
	});

});




// When Want close
// win.on('close', function() {
//     if (confirm("coucou ")) {
//         this.close(true);
//     }
// });

win.title = 'SenKoneKta';