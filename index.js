var express = require('express')
var app = express()

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.static('img'));

app.get('/computer', function (req, res) {
    res.render('computer', { computer: [{ name: "Windows", scr: "1.jpg" }, { name: "OSX", scr: "2.jpg" }, { name: "Android", scr: "3.jpg" }, { name: "IOS", scr: "4.jpg" }], foo: 'bar' })
})
app.listen(8000)