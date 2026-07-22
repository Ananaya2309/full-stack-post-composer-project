const express = require("express");
const router = express.Router();

const Post = require("../models/Post");
router.post("/create", async (req, res) => {

    try {

        const {
            title,
            description,
            media,
            platforms,
            status,
            scheduleDate,
            scheduleTime
        } = req.body;

        const newPost = new Post({
            title,
            description,
            media,
            platforms,
            status,
            scheduleDate,
            scheduleTime
        });

        await newPost.save();

        res.status(201).json({
            success: true,
            message: "Post Created Successfully",
            newPost
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });

    }

});
router.get("/all", async (req, res) => {

    try {

        const posts = await Post.find();

        res.json(posts);

    } catch (error) {

        console.log(error);

    }

});
router.delete("/delete/:id", async (req, res) => {

    try {

        await Post.findByIdAndDelete(req.params.id);

        res.json({

            success: true,

            message: "Post Deleted"

        });

    } catch (error) {

        console.log(error);

    }

});
router.put("/update/:id", async (req, res) => {

    try {

        await Post.findByIdAndUpdate(req.params.id, req.body);

        res.json({

            success: true,

            message: "Post Updated"

        });

    } catch (error) {

        console.log(error);

    }

});
module.exports = router;