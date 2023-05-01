var express = require("express");
var router = express.Router();

const { TodoItem } = require("../models");

// Create a new to-do list item
router.post("/", async (req, res) => {
  const { name, description, isCompleted } = req.body;
  try {
    const todoitem = await TodoItem.create({ name, description, isCompleted });
    res.status(201).json(todoitem);
  } catch (error) {
    res.status(500).json({ message: "Error creating to-do list item", error });
  }
});

// Get all to-do list items
router.get("/", async (req, res) => {
  try {
    const todolistitems = await TodoItem.findAll();
    res.json(todolistitems);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving to-do list items", error });
  }
});

// Get a specific to-do list item by id
router.get("/:id", async (req, res) => {
  try {
    const todolistitem = await TodoItem.findByPk(req.params.id); // how can we include the ITEMS associated with the baskets in this response?

    if (!todolistitem) {
      res.status(404).json({ message: "To-do list item not found" });
    } else {
      res.json(todolistitem);
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving to-do list item", error });
  }
});

// Update a to-do list item by id
router.put("/:id", async (req, res) => {
  const { name, description, isCompleted } = req.body;

  try {
    const newTodolistitem = {};
    if (name !== undefined) {
      newTodolistitem.name = name;
    }
    if (description !== undefined) {
      newTodolistitem.description = description;
    }
    if (isCompleted !== undefined) {
      newTodolistitem.isCompleted = isCompleted;
    }
    const [updated] = await TodoItem.update(newTodolistitem, {
      where: { id: req.params.id },
    });

    if (updated) {
      const updatedTodolistitem = await TodoItem.findByPk(req.params.id);
      res.json(updatedTodolistitem);
    } else {
      res.status(404).json({ message: "To-do list item not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating to-do list item", error });
  }
});

// Delete a to-do list item by id
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await TodoItem.destroy({
      where: { id: req.params.id },
    });

    if (deleted) {
      res.status(204).json({ message: "To-do list item deleted" });
    } else {
      res.status(404).json({ message: "To-do list item not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting to-do list item", error });
  }
});

module.exports = router;
