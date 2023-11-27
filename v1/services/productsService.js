import {db} from '../../database/mysql.js'

export const productsService = {
    getAllProducts : async () => {
        const sql = "SELECT * FROM data";
        try {
            const [data] = await db.query(sql, []);
            return data;
        } catch (error) {
            return null;
        }
    },
      
    getOneProduct : async (id) => {
        const sql = "SELECT * FROM data WHERE id=?";
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
        const sql = "INSERT INTO data (temperatura, humedad, luz, aire) VALUES (?, ?, ?, ?)";
        const params = [product.temperatura, product.humedad, product.luz, product.aire];
        try {
            const [result] = await db.query(sql, params);
            return {id: result.insertId, temperatura: product.temperatura, humedad: product.humedad, luz: product.luz, aire: product.aire}
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