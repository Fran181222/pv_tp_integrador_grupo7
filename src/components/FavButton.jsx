import React, { useState } from "react"

const [Fav,setFav] = useState(false)

const handlefav = () => {
    setFav(!Fav);
}

const FavButton = () => {
  return (
    <div>
      <button onClick={handlefav}>
            {Fav ? '🌟' : '🟊'}
        </button>
    </div>
  )
}

export default FavButton
