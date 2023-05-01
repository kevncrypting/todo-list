var express = require("express");
var router = express.Router();

const { TodoList, TodoListItems } = require("../models");

// Create a new to-do list
router.post("/", async (req, res) => {
  const { name, userId } = req.body;
  try {
    const todolist = await TodoList.create({ name, userId });
    res.status(201).json(todolist);
  } catch (error) {
    res.status(500).json({ message: "Error creating to-do list", error });
  }
});

// Get all to-do lists, including associated items
router.get("/", async (req, res) => {
  try {
    const todolists = await TodoList.findAll({
      include: [
        {
          model: TodoListItems,
        }
      ]
    });
    res.json(todolists);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving to-do lists", error });
  }
});

// Get a specific to-do list by id, including associated to-do list items
router.get("/:id", async (req, res) => {
  try {
    const todolist = await TodoList.findByPk(req.params.id); // how can we include the ITEMS associated with the baskets in this response?

    if (!todolist) {
      res.status(404).json({ message: "To-do list not found" });
    } else {
      res.json(todolist);
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving to-do list", error });
  }
});

// Update a to-do list by id
router.put("/:id", async (req, res) => {
  const { name, userId } = req.body;

  try {
    const newTodolist = {};
    if (name !== undefined) {
      newTodolist.name = name;
    }
    if (userId !== undefined) {
      newTodolist.userId = userId;
    }
    const [updated] = await TodoList.update(newTodolist, {
      where: { id: req.params.id },
    });

    if (updated) {
      const updatedTodolist = await TodoList.findByPk(req.params.id);
      res.json(updatedTodolist);
    } else {
      res.status(404).json({ message: "To-do list not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating to-do list", error });
  }
});

// Delete a to-do list by id
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await TodoList.destroy({
      where: { id: req.params.id },
    });

    if (deleted) {
      res.status(204).json({ message: "To-do list deleted" });
    } else {
      res.status(404).json({ message: "To-do list not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting to-do list", error });
  }
});

module.exports = router;
