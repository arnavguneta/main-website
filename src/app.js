const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000

// paths for express config
const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// handlebars setup
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// setup static dir to serve
app.use(express.static(publicPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Main Website',
        name: 'Arnav Guneta'
    });
})

app.get('/projects', (req, res) => {
    res.render('projects', {
        title: 'Projects',
        name: 'Arnav Guneta'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Arnav Guneta'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'poop',
        title: 'Help',
        name: 'Arnav Guneta'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'Help article not found',
        name: 'Arnav Guneta',
        message: 'The help page you were looking for was not found. Try again by going back to the help page.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: 'Page not found',
        name: 'Arnav Guneta',
        message: 'The page you were looking for was not found.'
    })
})

app.listen(port, () => {
    console.log('server is up on port ' + port)
})