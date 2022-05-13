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
    const {student, professor, faculty, direction} = req.body;
    let list_of_student = await getStudentJson(student);
    let list_of_professor = await getProfessorJson(professor);
    
    const {active} = list_of_student;
    

    if (active){
        const {name, faculty, direction} = list_of_student;
        res.render('find', {
            title: 'Student', 
            name: name, 
            faculty: faculty, 
            direction: direction
        })
    }
    else{
        const {active} = list_of_professor;
        if (active){
            const {name, faculty} = list_of_professor;
            res.render('find_professor', {
                title: 'Professor', 
                name: name, 
                faculty: faculty, 
            })
        }
        else{
            res.render('not_find');
        }     
    }
    

    
})

async function getStudentJson(student, professor, faculty, direction){
    let student_json;
    if (student != ''){
        let name_and_surname = student.split(" ");

        let name_faculty = await getFaculty("student", name_and_surname[0], name_and_surname[1] );
        let name_direction = await getDirection(name_and_surname[0], name_and_surname[1]);

        student_json = {
            active: true, 
            name: student, 
            faculty: name_faculty,
            direction: name_direction
        }
        return student_json;
    }
    else return student_json = {active: false};   
}

async function getProfessorJson(professor){
    let professor_json;
    if (professor != ''){
        let name_and_surname = professor.split(" ");

        let name_faculty = await getFaculty("professor", name_and_surname[0], name_and_surname[1] );

        professor_json = {
            active: true, 
            name: professor, 
            faculty: name_faculty,
        }
        return professor_json;
    }
    else return professor_json = {active: false};   
}

async function getFaculty(student_or_professor, name_person, surname ){
    const number_person_faculty = await db.query(`select faculty from ${student_or_professor} where name = '${ name_person }' and surname = '${ surname}';`)
    const {faculty} = number_person_faculty.rows[0]
        
    const name_faculty = await db.query(`select name from faculty where id = ${faculty};`)
    const { name } = name_faculty.rows[0];
    return name;
}

async function getDirection(name_person, surname ){

    const number_person_direction = await db.query(`select direction from student where name = '${ name_person }' and surname = '${ surname}';`)
    const {direction} = number_person_direction.rows[0];
        
    const name_direction = await db.query(`select name from direction where id = ${direction};`)
    const { name } = name_direction.rows[0];
    return name;
}


router.get('/create_delete_change', async (req, res) => {
    res.render('create_delete_change', {
        title: 'Create todo', 
        isCreate: true
    })
})

router.get('/create', async (req, res) => {
    res.render('create')
})

router.post('/create', async (req, res) => {
    const {name} = req.body
    //console.log(req.body)
    // const newPerson = await db.query('INSERT INTO student (name) values ($1) RETURNING *', [name])
    res.redirect('/')
})

router.post('/create_student', async (req, res) => {
    const {name} = req.body
    console.log(req.body)
    // const newPerson = await db.query('INSERT INTO student (name) values ($1) RETURNING *', [name])
    res.redirect('/')
})

router.post('/create_professor', async (req, res) => {
    const {name} = req.body
    console.log(req.body)
    // const newPerson = await db.query('INSERT INTO student (name) values ($1) RETURNING *', [name])
    res.redirect('/')
})


module.exports = router