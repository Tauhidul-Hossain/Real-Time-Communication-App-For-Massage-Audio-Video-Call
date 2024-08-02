// routes/celebrities.ts
import express from "express";
import Celebrity from "../models/celebrity";

const router = express.Router();

// Create a new celebrity
router.post("/add", async (req, res) => {
  try {
    const newCelebrity = new Celebrity(req.body);
    await newCelebrity.save();
    res.status(201).json(newCelebrity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all celebrities
router.get("/", async (req, res) => {
  try {
    const celebrities = await Celebrity.find();
    res.json(celebrities);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a single celebrity by ID
router.get("/:id", async (req, res) => {
  try {
    const celebrity = await Celebrity.findById(req.params.id);
    if (!celebrity) {
      return res.status(404).json({ message: "Celebrity not found" });
    }
    res.json(celebrity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a celebrity
router.put("/:id", async (req, res) => {
  try {
    const updatedCelebrity = await Celebrity.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedCelebrity) {
      return res.status(404).json({ message: "Celebrity not found" });
    }
    res.json(updatedCelebrity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a celebrity
router.delete("/:id", async (req, res) => {
  try {
    const deletedCelebrity = await Celebrity.findByIdAndDelete(req.params.id);
    if (!deletedCelebrity) {
      return res.status(404).json({ message: "Celebrity not found" });
    }
    res.json({ message: "Celebrity deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
