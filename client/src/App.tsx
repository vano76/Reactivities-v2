import { Fragment, useEffect, useState } from 'react'
import type { Activity } from './Types/Reactivity'
import { List, ListItem, ListItemText, Typography } from '@mui/material'
import axios from 'axios'


function App() {
  const [activities, setActivities] = useState<Activity[]>([])
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        // Replace with your actual API endpoint if needed
        const response = await axios.get<Activity[]>('https://localhost:3000/api/activities')
        setActivities(response.data)
      } catch (error) {
        console.error('Error fetching activities:', error)
      }
    }
    fetchActivities()
  }, [])


  return (
    <>
      <Typography variant='h4'>Reactivities</Typography>

      <List>
        <ul>
          {activities.map((activity) => (
            <ListItem key={activity.id}>
              <ListItemText><h4>{activity.title}</h4>
                <p>{activity.description}</p>
                <p>{activity.venue}</p>
              </ListItemText>
            </ListItem>
          ))}
        </ul>
      </List>
    </>


  )
}

export default App
