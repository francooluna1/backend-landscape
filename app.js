const express = require("express")
const app = express()
const port = 3000

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
});

app.get("/getActivities", (req, res) => {
  const activities = [
    {
      activityId: 1,
      title: 'Subida al cerro catedral',
      type: 'ACTIVITY',
      startDate: '2023-10-12 01:30:00',
      endDate: '2023-10-12 23:30:00',
      status: 'IN_PROGRESS',
    },
    {
      activityId: 2,
      title: 'Fiesta de espuma',
      type: 'PARTY',
      startDate: '2023-10-13 01:30:00',
      endDate: '2023-10-13 23:30:00',
      status: 'DONE',
    },
    {
      activityId: 3,
      title: 'Desayuno',
      type: 'FOOD',
      startDate: null,
      endDate: null,
      status: null,
    },
    {
      activityId: 4,
      title: 'Cena',
      type: 'FOOD',
      startDate: '2023-10-14 22:00:00',
      endDate: '2023-10-14 23:00:00',
      status: null,
    },
    {
      activityId: 5,
      title: 'Futbol',
      type: 'ACTIVITY',
      startDate: '2023-10-12 14:00:00',
      endDate: '2023-10-12 15:00:00',
      status: 'IN_PROGRESS',
    },
    {
      activityId: 6,
      title: 'Salida al parque',
      type: 'ACTIVITY',
      startDate: '2023-10-13 08:23:00',
      endDate: '2023-10-13 10:17:00',
      status: null,
    },
  ]

  res.json(activities)
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})