import {Router} from "express"
import carRouter from "./carRouter";
import brandRouter from "./brandRouter";
const router = Router();

router.use('/car',carRouter)
router.use('/brand',brandRouter)

export default router;