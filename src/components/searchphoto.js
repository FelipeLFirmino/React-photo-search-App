import React, { useState, Fragment, useEffect } from "react";
import { createApi } from "unsplash-js";
import "./search.css";

const unsplash = createApi({
  accessKey: "2iwN4EaA4kMf7T4tInS6ucgrw31jf_-Dx_frjfImC-w",
});

export default function Search() {
  const [n, setQuery] = useState("");
  const [pics, setPics] = useState(null);

  const searchP = async (e) => {
    e.preventDefault();
    console.log(n);
    unsplash.search
      .getPhotos({ query: n, orientation: "portrait" })
      .then((response) => {
        setPics(response.response.results);
        console.log(response);
        
      });
  };

  return (
    <div>
      <form className="form" onSubmit={searchP}>
        <label htmlFor="query" className="label"></label>
        <input
          type="text"
          name="name"
          className="input"
          placeholder="search here!"
          value={n}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search{" "}
        </button>
      </form>
      <div className="cards">
        {pics?.map((photo) => (
          <div className="card" key={photo.id}>
            <img src={photo.urls.small}
            alt= {photo.alt_description}
            className='card-image'
            width='350px'
            height='500px'
            ></img>
            <h1 id="card-h1">{ 'taken by: '+ photo.user.first_name+ ' ' + photo.user.last_name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
 }
