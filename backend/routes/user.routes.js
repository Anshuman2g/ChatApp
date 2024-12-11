import express from "express"; 
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";

const router=express.Router();

router.get("/",protectRoute,getUsersForSidebar)

// import controllers

export default router;