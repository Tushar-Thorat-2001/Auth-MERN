import express from "express"

import {authUser,registerUser,getUsers} from "../controllers/userController.js"
import {admin,protect} from "../middlwares/authMiddlerwars.js"


const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(authUser);
router.route("/get").get(protect,admin,getUsers);


export default router;