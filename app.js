//Include libraries
const express = require ('express')
const app = express()

//load static files
app.use('/resources',express.static(__dirname + '/static'))

//set the engine to pug and the view folder to the one in this location
app.set('view engine', 'pug')
app.set('views', __dirname + '/views')



//Debug route pingpong
app.get('/ping', (req,res)=> {
	res.send('pong')
})

//create a main page
app.get('/', (req,res)=>{
	res.render('home')
})


//start webserver on port 8000
app.listen(8000, ()=>{
	console.log('Running through the 8000 with my woes')
})