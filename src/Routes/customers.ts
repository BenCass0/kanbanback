const xpress=require('express');
const router=xpress.Router();
const customerController=require('../Controllers/customerController')
router.get('/', customerController.list)

router.post("/add",customerController.save);
//:id es un parámetro de ruta
router.get("/delete/:id",customerController.delete);
router.get("/update/:id",customerController.edit);
router.post("/update/:id",customerController.update);
module.exports=router;