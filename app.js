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
      startDate: '2022-01-22 01:30:00',
      endDate: '2022-01-22 23:30:00',
      status: 'IN_PROGRESS',
    },
    {
      activityId: 2,
      title: 'Fiesta de espuma',
      type: 'PARTY',
      startDate: '2022-01-22 01:30:00',
      endDate: '2022-01-22 23:30:00',
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
  ];

  res.json(activities)
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})