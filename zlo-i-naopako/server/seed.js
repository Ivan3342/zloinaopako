const Database = require('better-sqlite3')
const path = require('path')
const db = new Database(path.join(__dirname, 'cafe.db'))

const items = [
  {
    name: 'Espresso',
    description: '100% Arabica, čist i intenzivan ukus',
    price: 190,
    category: 'kafa',
    image_url: '/images/menuitems/espresso.png'
  },
  {
    name: 'Domaća kafa',
    description: 'Tradicionalna kafa kuvana u džezvi',
    price: 170,
    category: 'kafa',
    image_url: '/images/menuitems/domaca.png'
  },
  {
    name: 'Cappuccino',
    description: 'Espresso sa bogatom mlečnom penom',
    price: 220,
    category: 'kafa',
    image_url: '/images/menuitems/capuccino.png'
  },
  {
    name: 'Espresso sa ukusom',
    description: 'Vanila, Čokolada, Malina...',
    price: 270,
    category: 'kafa',
    image_url: '/images/menuitems/maciato.png'
  },
  {
    name: 'Negroni',
    description: 'Gin, Campari, slatki vermut',
    price: 450,
    category: 'kokteli',
    image_url: '/images/menuitems/negroni.png'
  },
  {
    name: 'Vodka Martini',
    description: 'Votka, suvi vermut, maslina',
    price: 510,
    category: 'kokteli',
    image_url: '/images/menuitems/vodkamartini.png'
  },
  {
    name: 'Blue Lagoon',
    description: 'Votka, Blue Curacao, limunada',
    price: 370,
    category: 'kokteli',
    image_url: '/images/menuitems/bluelagoon.png'
  },
  {
    name: 'Old Fashioned',
    description: 'Burbon, biter, šećer, kora pomorandže',
    price: 420,
    category: 'kokteli',
    image_url: '/images/menuitems/oldfashioned.png'
  }
];

// Wrap in a transaction — inserts all at once or not at all
// Same concept as transactions in Oracle/MySQL you already know
const insertMany = db.transaction((items) => {
  const insert = db.prepare(`
    INSERT INTO menu_items (name, description, price, category, image_url)
    VALUES (@name, @description, @price, @category, @image_url)
  `)
  for (const item of items) {
    insert.run(item)
  }
})

insertMany(items)
console.log(`✓ Inserted ${items.length} menu items`)
db.close()