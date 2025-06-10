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

router.get("/map", (req, res) => {
    res.render("map.njk", { title: "Map", menu });
})

export default router;