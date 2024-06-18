import express from "express";
import {
  changePassword,
  expertDetails,
  getAllExperts,
  login,
  register,
  updateExpertDetails,
} from "../controllers/expert-controller.js";
import { upload } from "../middleware/multer.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();
router.post(
  "/register",
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
  ]),
  register
);
router.post("/login", login);
router.post("/resetpassword", changePassword);
router.get("/:id", expertDetails);
router.get("/", getAllExperts);
router.post("/update", isAuthenticated, updateExpertDetails);
router.post("/getGoogleInfo", async (req, res) => {
  console.log(req.body);
  return res.status(201).json({ message: "Done" });
});

export default router;
