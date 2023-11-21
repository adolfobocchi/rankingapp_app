import './App.css';
import React, {useState, useEffect} from 'react';
import api from './api';

function App() {
  const [rankingData, setRankingData] = useState([]);

  useEffect(()=> {
    const fetchData = async () => {
      try {
        const response = await api.get('/ranking');
        setRankingData(response.data);
      } catch (error) {
        console.error('erro ao buscar dados na api: ', error);
      }
    };

    fetchData();
  }, [])

  return (
    <>
    <h1>2ª TURMA DE JOGOS - THE BEST</h1>
    <div className="ranking-area">
      <div className="ranking-header">
        <h2>RANKING</h2>
      </div>
      <div className="ranking-list">
        {/* {JSON.stringify(rankingData)} */}
        <ul>
          {rankingData.map((item, index) => (
            <li className='ranking-item'  key={index}>
              <div className="nick">
                {item.nick}
              </div>
              <div className="score">
                {item.score}
              </div>
            
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
}

export default App;
