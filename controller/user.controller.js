const db = require('../db')


class UserController{
    async createUser(req, res){
        const {name, surname} =req.body
        const newPerson = await db.query('INSERT INTO student (name, surname) values ($1, $2) RETURNING *', [name, surname])

        res.json(newPerson.rows[0])
    }
    async getUsers(req, res){
        const users = await db.query('SELECT * FROM student')
        res.json(users.rows)
    }
    async getOneUser(req, res){
        const id = req.params.id
        const users = await db.query('SELECT * FROM student where id = $1', [id])
        res.json(users.rows[0])
    }
    async updateUser(req, res){
        const {id, name, surname} = req.body
        const user = await db.query('UPDATE student set name = $1, surname = $2 where id = $3 RETURNING *',
         [name, surname, id])
         res.jso
    }
    async deleteUser(req, res){
        const id = req.params.id
        const users = await db.query('DELETE FROM student where id = $1', [id])
        res.json(users.rows[0])
    }
}

module.exports = new UserController()