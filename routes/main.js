import { TIMEOUT } from "dns/promises";
import express from "express";
import menu from "../data/menu.js";
const router = express.Router();

router.get("/", (req, res) => {
    res.render("home.njk", { title: "Home", menu});  
})

export default router;