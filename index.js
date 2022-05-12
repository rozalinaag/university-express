
const express = require('express')
const userRouter = require('./routes/user.routes')
const exphbs = require('express-handlebars')
const todoRoutes = require('./routes/todos')


const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})


var path = require('path');


//app.use('/assets', express.static(path.join(__dirname, "../assets")));

//движок
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({extended: true}))

app.use(express.static(__dirname + '/public'));

app.use(todoRoutes)

async function start(){
    try{
        //подключение базы 
        
        app.use(express.json())
        app.use('/api', userRouter)


        //подключение сервера
        app.listen(PORT, () => {
            console.log('Server has been started...')
        })
    }catch(e){
        console.log(e)
    }
}

start()