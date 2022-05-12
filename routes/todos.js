const {Router} = require ('express')
const router = new Router()
const db = require('../db')

router.get('/', async (req, res) => {

    const my_users = await db.query('SELECT * FROM student')
    const my_professors = await db.query('SELECT * FROM professor')
    const my_faculty = await db.query("Select * from faculty");
    const my_direction = await db.query("Select * from direction");

    var students = my_users.rows
    var professors = my_professors.rows
    var faculties = my_faculty.rows;
    var directions = my_direction.rows;

    res.render('index', {
        title: 'Students', 
        isIndex: true,
        students, 
        professors,
        faculties,
        directions
    })
})

router.post('/', async (req, res) => {
    const {name} = req.body
    console.log(name);
    let list_of_student = handle_list(name);
    
    res.render('find', {
        title: 'Students', 
        isIndex: true
    })
})

function handle_list(list){
    console.log(list);
    
}


router.get('/create', async (req, res) => {
    res.render('create', {
        title: 'Create todo', 
        isCreate: true
    })
})

router.post('/create', async (req, res) => {
    const {name} = req.body
    //console.log(req.body)
    // const newPerson = await db.query('INSERT INTO student (name) values ($1) RETURNING *', [name])
    res.redirect('/')
})


module.exports = router