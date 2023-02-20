import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import './CoffeeData.css'

const CoffeeData = () => {
  const navigate = useNavigate()
  const [data, setData] = useState("");
  const [search, setSearch] = useState("");

  const getData = async () => {
    try {
      const resp = await fetch('https://api.sampleapis.com/coffee/hot');
      const json = await resp.json();
      setData(json);
    } catch (error) {
      console.log(error)
    }
  } 

  useEffect(() => {
    getData();
  }, []);

  const handleButton = () => {
    const randomList = []
    const randomElement = data.map((element) => randomList.push(element.id))
    const randomId = randomElement[Math.floor(Math.random() * randomElement.length)]
    navigate(`/${randomId}`)
  }

  const handleClick = useCallback((id) => navigate(`/${id}`), [navigate]);

  return (
    <>
      <div className='app-container'>
        <div className='search-container'>
          <input type="text" placeholder='Search for coffees...' onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div className='random-container'>
          <button className='random-button' onClick={handleButton}>Wise Choice</button>
        </div>
        <div className='card-container'>
          {data && data.filter((coffee) => coffee.title.toLowerCase().includes(search.toLowerCase())).map((c) => (
              <div className='image'>
                <h2 className='title'>{c.title}</h2>
                <img style={{ width:300, height: 300 }} src={c.image} alt="" />
                <button className='btn' onClick={() => handleClick(c.id)}>Details</button>
              </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default CoffeeData