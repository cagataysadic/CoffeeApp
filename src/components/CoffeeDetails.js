import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "./CoffeeDetails.css"

const CoffeeDetails = () => {
    const [data, setData] = useState("");
    const { id } = useParams();
    const navigate = useNavigate()

    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.sampleapis.com/coffee/hot/${id}`);
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleClick = () => {
        navigate("/")
    }

    return (
        <div className="card">
            <button className="home-button" onClick={handleClick}>Home</button>
            <h1 className="card-title">{data.title}</h1>
            <img style={{ width: 500, height: 500 }} src={data.image} />
            <h2 className="card-ingredients">{data.ingredients}</h2>
            <h2 className="card-description">{data.description}</h2>
        </div>
)
}

export default CoffeeDetails