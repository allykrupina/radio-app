import React from 'react';
import { Link } from "react-router-dom";

function Page({tracksArray}) {
  return (
    <ul className="track-list">
      {tracksArray.map((track, index) => {
        const id = track.id.attributes['im:id'],
              artist = track['im:artist'].label,
              name = track['im:name'].label;
        return (
          <li className="track-list-item" key={id}>
            <Link to={`/${id}`} className="track-link">{`${index + 1}. ${artist} - ${name}`}</Link>
          </li>
        )
      })}
    </ul>
  );
}

export default Page;
