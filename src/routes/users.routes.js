import { Router } from "express";
import { methods as UsersController } from "../controllers/language.controller";

const router = Router();

router.get('/', UsersController.getLanguages);
router.get('/:id', UsersController.getLanguage);
router.post('/', UsersController.saveLanguage);
router.put('/:id', UsersController.updateLanguage);
router.delete('/:id', UsersController.deleteLanguages);

export default router;