import axios from "axios";
import { useEffect, useState } from "react";

const Activity = () => {
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    axios
      .get("https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/sport-activities", {
        headers: {
          'apiKey': '24405e01-fbc1-45a5-9f5a-be13afcd757c', // Replace this with your actual API key
        }
      })
      .then((res) => {
        setActivity(res.data.data); // Set the activity data
      })
      .catch((err) => {
        console.log(err); // Handle errors
      });
  }, []);

  return (
    <div>
      <h1>Activity List</h1>
      {activity.length > 0 ? (
        activity.map((act) => (
          <div key={act.id} className="activity-card">
            <h2>{act.title}</h2>
            <p>Price: {act.price} IDR</p>
            <p>Discounted Price: {act.price_discount} IDR</p>
            <p>Slots: {act.slot}</p>
            <p>Address: {act.address}</p>
            <p>Activity Date: {new Date(act.activity_date).toLocaleDateString()}</p>
            <p>Time: {act.start_time} - {act.end_time}</p>
            <p>Organizer: {act.organizer.name}</p>
            <p>City: {act.city.city_name_full}</p>
          </div>
        ))
      ) : (
        <p>Loading activities...</p>
      )}
    </div>
  );
};

export default Activity;
