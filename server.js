// Paquete Requerido
const express = require('express');
const app = express();
const hbs = require('hbs');
const helpers = require('./hbs/helpers')
const public = app.use( express.static( __dirname + '/public' ));
const port = process.env.PORT || 3000;
// Express HBS engine
hbs.registerPartials( __dirname + '/views/parciales');
app.set('view engine', 'hbs');
app.get('/home', (req, res) => {
	res.render('home',{
		nombre: 'carlos'
	});
})
app.get('/about', (req, res) => {
	res.render('about',{
		imgwha: '/assets/img'
	});
})
app.listen(port, () => {
	console.log(`Escuchando peticiones en el puerto ${port}`);
});