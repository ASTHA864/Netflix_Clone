import React from 'react'

const Poster = ({ posters }) => {
  return <div>
    <div className="posters">
      {posters.map((data) => (
        <img key={data.id}  src={data.poster_path}/>
      ))}
    </div>
  
  </div>;
};

export default Poster
