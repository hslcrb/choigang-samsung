import express from 'express'

const app = express()
const PORT = 3001

app.use(express.json())

const news = [
  { id: 1, date: 'Jun 28, 2026', title: 'Samsung Lions Clinch Playoff Berth', category: 'Game Recap', excerpt: 'A commanding 8-2 victory over the Kia Tigers secures Samsung\'s place in the postseason.' },
  { id: 2, date: 'Jun 25, 2026', title: 'Rising Star: Kim Young-woong Named Rookie of the Month', category: 'Player News', excerpt: 'The 22-year-old outfielder posted a .345 batting average with 6 home runs in June.' },
  { id: 3, date: 'Jun 22, 2026', title: 'Legendary Pitcher Park Chan-ho Joins Coaching Staff', category: 'Team News', excerpt: 'The Hall of Famer returns to the Lions as a special pitching advisor.' },
  { id: 4, date: 'Jun 18, 2026', title: 'Record Crowd of 28,000 Fans Pack Daegu Stadium', category: 'Fan Zone', excerpt: 'Saturday\'s game set a new season attendance record.' },
]

const games = [
  { id: 1, date: 'Jul 3', opponent: 'LG Twins', time: '18:30', venue: 'Daegu Samsung Lions Park', status: 'On Sale' },
  { id: 2, date: 'Jul 5', opponent: 'KT Wiz', time: '17:00', venue: 'Daegu Samsung Lions Park', status: 'On Sale' },
  { id: 3, date: 'Jul 7', opponent: 'NC Dinos', time: '18:30', venue: 'Changwon NC Park', status: 'Presale' },
  { id: 4, date: 'Jul 10', opponent: 'Doosan Bears', time: '14:00', venue: 'Jamsil Baseball Stadium', status: 'Coming Soon' },
]

const trophies = [
  { year: '1985', title: 'Korean Series Champions', desc: 'The first championship in franchise history.' },
  { year: '2002', title: 'Korean Series Champions', desc: 'A dominant season with 82 wins.' },
  { year: '2005', title: 'Korean Series Champions', desc: 'Back-to-back titles after beating the Doosan Bears.' },
  { year: '2006', title: 'Korean Series Champions', desc: 'Three-peat! Samsung Lions cement their dynasty.' },
  { year: '2011', title: 'Korean Series Champions', desc: 'A 4-1 series win against the SK Wyverns.' },
  { year: '2012', title: 'Korean Series Champions', desc: 'Five-game victory over the Lotte Giants.' },
  { year: '2013', title: 'Korean Series Champions', desc: 'Three-peat again! Defeated the Doosan Bears 4-3.' },
  { year: '2014', title: 'Korean Series Champions', desc: 'Four-peat! An unprecedented fourth consecutive championship.' },
]

app.get('/api/news', (_req, res) => res.json(news))
app.get('/api/games', (_req, res) => res.json(games))
app.get('/api/trophies', (_req, res) => res.json(trophies))

app.get('/api/health', (_req, res) => res.json({ status: 'ok', team: 'Samsung Lions' }))

app.listen(PORT, () => {
  console.log(`🦁 Choigang Samsung API running on http://localhost:${PORT}`)
})
