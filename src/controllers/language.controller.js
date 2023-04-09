
import { getConnection } from "../../database/database"

const getLanguages = async(req, res) => {
    try {        
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM users");
        res.json(result);
    } catch (error) {
        res.send(error.message);
    }
}

const getLanguage = async(req, res) => {
    try {
        const {id} = req.params
        const connection = await getConnection();
        const result = await connection.query(`SELECT id, name, programmers FROM languages WHERE id=${id}`);
        res.json(result)
    } catch (error) {
        res.send(error.message);
    }
}

const saveLanguage = async(req, res) => {
    try {        
        const { name, programmers } = req.body;

        if(name===undefined || programmers===undefined){
            res.json({"message": "Campos vacios"});
        }

        const language = { name, programmers }
        const connection = await getConnection();
        await connection.query(`INSERT INTO languages SET ?`, language);
        res.json({"message":`Lenguaje ${name} agregado correctamente`})
    } catch (error) {
        res.send(error.message);
    }
}

const updateLanguage = async(req, res) => {
    try {
        const {id} = req.params
        const { name, programmers } = req.body;
        const language = { name, programmers }
        const connection = await getConnection();
        await connection.query(`UPDATE languages SET ? WHERE id = ?`, [language, id]);
        res.json({"message":`Lenguaje ${name} cambiado correctamente`})
    } catch (error) {
        res.send(error.message);
    }
}

const deleteLanguages = async(req, res) => {
    try {        
        const {id} = req.params
        const connection = await getConnection();
        await connection.query("DELETE FROM languages WHERE id = ?", id);
        res.json({"message":`Lenguaje borrado correctamente`})
    } catch (error) {
        res.send(error.message);
    }
}

export const methods = {
    getLanguages,
    getLanguage,
    saveLanguage,
    updateLanguage,
    deleteLanguages
}