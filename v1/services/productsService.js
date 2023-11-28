import {db} from '../../database/mysql.js'

export const productsService = {
    getAllProducts : async () => {
        const sql = "SELECT * FROM sensor";
        try {
            const [data] = await db.query(sql, []);
            return data;
        } catch (error) {
            return null;
        }
    },
      
    getOneProduct : async (id) => {
        const sql = "SELECT * FROM sensor WHERE id=?";
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
        const sql = "INSERT INTO sensor (temperature, humidity, co2, luxometer, container_id) VALUES (?, ?, ?, ?, ?)";
        const params = [product.temperature, product.humidity, product.co2, product.luxometer, product.container_id];
        try {
            const [result] = await db.query(sql, params);
            return {id: result.insertId, temperature: product.temperature, humidity: product.humidity, co2: product.co2, luxometer: product.luxometer, container_id: product.container_id}
        } catch (error) {
            return null;
        }
    },
      
    updateOneProduct : () => {
        return;
    },
      
    deleteOneProduct : async (id) => {
        const sql = 'DELETE FROM sensor WHERE id = ?';
        const params = [id];
        try {
            const result = await db.query(sql, params);
            return result;
        } catch (error) {
            return null;
        }
    }
}