import { TIMEOUT } from "dns/promises";
import express from "express";
import menu from "../data/menu.js";
const router = express.Router();

router.get("/", (req, res) => {
    res.render("home.njk", { title: "Home", menu});  
})

router.get("/aboutus", (req, res) => {
    res.render("aboutUs.njk", { title: "About us", menu });
})

router.get("/findus", (req, res) => {
    res.render("findUs.njk", { title: "Find us", menu });
})

export default router;