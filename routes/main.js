import { TIMEOUT } from "dns/promises";
import express from "express";
import menu from "../data/menu.js";
const router = express.Router();

router.get("/", (req, res) => {
    res.render("home.njk", { title: "Home", menu});  
})

router.get("/about-us", (req, res) => {
    res.render("aboutUs.njk", { title: "about us", menu });
})
export default router;