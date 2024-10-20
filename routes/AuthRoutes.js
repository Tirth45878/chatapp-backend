import { Router } from "express";
import { getUserInfo, login, signup,updateProfile,addProfileImage,removeProfileImage, logout } from "../controllers/AuthController.js";
import { verifyToken } from "../middlewares/AuthMiddleware.js";
import multer from "multer"




const authRoutes =Router()
const upload = multer({dest:"uploads/profiles/"})



authRoutes.post("/signup",signup)

authRoutes.post("/login",login)





// Login Controller: The login function (in AuthController.js) handles the request:
// It checks if the provided email and password match any user in the database.
// If valid, it generates a JWT token and may set session cookies.



authRoutes.get('/user-info', verifyToken, getUserInfo)

authRoutes.post('/update-profile',verifyToken,updateProfile)
authRoutes.post("/add-profile-image",verifyToken,upload.single("profile-image"),addProfileImage)

authRoutes.delete("/remove-profile-image",verifyToken,removeProfileImage)
authRoutes.post('/logout',logout)

export default authRoutes

