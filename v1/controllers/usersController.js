import { userService } from "../services/usersServices.js";

export const userController = {
    getAllProducts : async (req, res) => {
        const allProducts = await userService.getAllProducts();
        res.status(200).send({ status: "OK", data: allProducts });
    },
    getOneProduct : async (req, res) => {
        let id = req.params.id;
        const product = await userService.getOneProduct(id);
        res.status(200).send({ status: "OK", data: product });
    },
    createNewProduct : async (req, res) => {
        const data = req.body;
        const createProduct = await userService.createNewProduct(data);
        res.status(200).send({ status: "OK", data: createProduct });
    },
    updateOneProduct : (req, res) => {
        const updateProduct = userService.updateOneProduct();
        res.send("Update an existing workout");
    },
    deleteOneProduct : async (req, res) => {
        let id = req.params.id;
        const deleteProduct = userService.deleteOneProduct(id);
        res.send("Delete an existing workout");
    }
}
