const DeleteActivity =()=> {
    const [activity, setActivity] = useState([]);
    const handleDelete =()=>{

    useEffect(() => {
        axios
            .delete("https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/sport-activities/delete/1", {
                headers: {
                    'apiKey': '24405e01-fbc1-45a5-9f5a-be13afcd757c', // Replace this with your actual API key
                }
            })
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <h1>Delete Activity</h1>
            <button onClick={() => window.location.reload()}>Delete</button>
            <p>Activity deleted successfully</p>
        </div>
    )
}
}