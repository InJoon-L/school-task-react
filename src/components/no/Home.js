import React, { useState } from 'react'
import Modal from './Modal'

const Home = () => {
  let [Favorite, setFavorite] = useState(0);
  let [Flag, setFlag] = useState(false);

  let good = () => {
    setFavorite(++Favorite);
  }

  let detail = () => {
    setFlag(!Flag);
  }

  return (
  <>
    <div className="list" onClick={ detail }>
      <h4>title <span onClick={ good }>👍</span> { Favorite } </h4>
      <p>2월 17일 발행</p>
    </div>
    {
      Flag ? <Modal /> : null
    }
  </>
  )
}

export default Home