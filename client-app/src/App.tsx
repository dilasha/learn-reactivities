import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      fetch('http://localhost:5000/api/activities')
        .then((res) => res.json())
        .then((data) => setActivities(data));
    };

    fetchActivities();
  }, []);

  return (
    <div>
      <h1>Reactivities</h1>
      <ol>
        {activities.map((activity) => (
          <li>{activity.title}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
