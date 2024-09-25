import { useState } from 'react';
import axios from 'axios';

const CreateActivity = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [discountedPrice, setDiscountedPrice] = useState('');
    const [slot, setSlot] = useState('');
    const [address, setAddress] = useState('');
    const [activityDate, setActivityDate] = useState('');
    const [description, setDescription] = useState('');
    const [submit, setSubmit] = useState(false);
    const [error, setError] = useState(''); // Optional: For handling errors

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(false);
        setError(''); // Reset error before submission

        axios.post(
            'https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/sport-activities',
            {
                "sport_category_id": 1,
                "city_id": 3172,
                "title": title,
                "description": description,
                "slot": slot,
                "price": price,
                "price_discount": discountedPrice,
                "address": address,
                "activity_date": activityDate,
                "start_time": "06:00",
                "end_time": "07:00"
            },
            {
                headers: {
                    'apiKey': '24405e01-fbc1-45a5-9f5a-be13afcd757c' // Add your API key here
                }
            }
        )
        .then((res) => {
            console.log('Activity created successfully', res);
            setSubmit(true); // Mark as submitted successfully
        })
        .catch((err) => {
            console.error(err);
            setError('Failed to create activity'); // Optional: Display error message
        });
    };

    return (
        <div>
            <h1>Create Activity</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Activity Title"
                    />
                </div>
                <div>
                    <label>Price</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Activity Price"
                    />
                </div>
                <div>
                    <label>Discounted Price</label>
                    <input
                        type="number"
                        value={discountedPrice}
                        onChange={(e) => setDiscountedPrice(e.target.value)}
                        placeholder="Discounted Price"
                    />
                </div>
                <div>
                    <label>Slot</label>
                    <input
                        type="number"
                        value={slot}
                        onChange={(e) => setSlot(e.target.value)}
                        placeholder="Available Slots"
                    />
                </div>
                <div>
                    <label>Address</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Activity Address"
                    />
                </div>
                <div>
                    <label>Activity Date</label>
                    <input
                        type="date"
                        value={activityDate}
                        onChange={(e) => setActivityDate(e.target.value)}
                    />
                </div>
                <div>
                    <label>Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Activity Description"
                    />
                </div>

                <button type="submit">Submit</button>
            </form>

            {/* Display success or error message */}
            {submit && <p>Activity created successfully!</p>}
            {error && <p style={{color: 'red'}}>{error}</p>}
        </div>
    );
};

export default CreateActivity;
