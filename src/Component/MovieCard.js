import React from 'react'

const MovieCard = ({element}) => {
    return (
        <div>
            <section>
<div style={{ width: '300px',height:'600px' }}>
  <img variant="top" src={element.posterurl} style={{ height:'50%' }}/>
  <body>
    <title>{element.name}</title>
    <text>
      {element.description}
    </text>
    <button variant="primary">Voir Plus</button>
  </body>
</div>  
</section>
      </div>
    )
}

export default MovieCard
