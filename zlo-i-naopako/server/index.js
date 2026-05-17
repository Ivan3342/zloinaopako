const express = require('express')
const Database = require('better-sqlite3')
const cors = require('cors')

const app = express()
const path = require('path')
const db = new Database('/app/data/cafe.db')

app.use(cors())
app.use(express.json())

// Create table if it doesn't exist — just like SQL you already know
db.exec(`
  CREATE TABLE IF NOT EXISTS menu_items (
    id        INTEGER PRIMARY KEY AUTOINCREMENT,
    name      TEXT NOT NULL,
    description TEXT,
    price     REAL NOT NULL,
    category  TEXT,
    image_url TEXT
  )
`)

// GET all items
app.get('/api/menu', (req, res) => {
  const items = db.prepare('SELECT * FROM menu_items').all()
  res.json(items)
})

// GET items by category
app.get('/api/menu/:category', (req, res) => {
  const items = db.prepare('SELECT * FROM menu_items WHERE category = ?').all(req.params.category)
  res.json(items)
})

// POST new item
app.post('/api/menu', (req, res) => {
  const { name, description, price, category, image_url } = req.body
  const result = db.prepare(
    'INSERT INTO menu_items (name, description, price, category, image_url) VALUES (?, ?, ?, ?, ?)'
  ).run(name, description, price, category, image_url)
  res.json({ id: result.lastInsertRowid })
})

// DELETE item
app.delete('/api/menu/:id', (req, res) => {
  db.prepare('DELETE FROM menu_items WHERE id = ?').run(req.params.id)
  res.json({ success: true })
})

app.listen(3001, () => console.log('API running on http://localhost:3001'))