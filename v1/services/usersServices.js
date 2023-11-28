import {db} from '../../database/mysql.js'

export const userService = {
    getAllProducts : async () => {
        const sql = "SELECT * FROM user";
        try {
            const [data] = await db.query(sql, []);
            return data;
        } catch (error) {
            return null;
        }
    },
      
    getOneProduct : async (id) => {
        const sql = "SELECT * FROM user WHERE id=?";
        const params = [id];
        try {
            const [result] = await db.query(sql, params);
            return result[0];
        } catch (error) {
            console.log("E")
            return null;
        }
    },
      
    createNewProduct : async (product) => {
        const sql = "INSERT INTO user (name, gmail, password) VALUES (?, ?, ?)";
        const params = [product.name, product.gmail, product.password];
        try {
            const [result] = await db.query(sql, params);
            return {id: result.insertId, name: product.name, gmail: product.gmail, password: product.password}
        } catch (error) {
            return null;
        }
    },
      
    updateOneProduct : () => {
        return;
    },
      
    deleteOneProduct : async (id) => {
        const sql = 'DELETE FROM data WHERE id = ?';
        const params = [id];
        try {
            const result = await db.query(sql, params);
            return result;
        } catch (error) {
            return null;
        }
    }
}