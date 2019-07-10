import React, {useState} from 'react';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

function Track({item, id, getData, count}) {
  const [status] = useState(count);
  const link = item.id.label,
        artist = item['im:artist'].label,
        name = item['im:name'].label,
        price = item['im:price'].label,
        image = item['im:image'][2].label;

  const changeStatus = () => getData(id, !status);

  return (
    <div className="track-item">
      <a href={link} className="track-image" target="_black">
        <img src={image} alt={artist}/>
      </a>
      <div className="track-item-in">
        <p className="track-artist">{artist}</p>
        <p className="track-name">{name}</p>
        <p className="track-price">{price}</p>
        <img className="track-status" onClick={() => changeStatus()} src={status ? like : dislike} alt="logo"/>
      </div>
    </div>
  );
}

export default Track;
