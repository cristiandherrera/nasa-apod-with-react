import React, { useEffect, useState } from "react";

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=gpVPOVn1kEJpJa7nXPww8pUefUX6gdihLoCZVDbC`
      );

      const data = await res.json();

      setPhotoData(data);
    }
  }, []);

  if (!photoData) return <div />;

  return (
    <article>
      <h1>{photoData.title}</h1>
      <img src={photoData.url} alt={photoData} />
      <div>
        <h3>{photoData.copyright}</h3>
        <h4>{photoData.date}</h4>
        <p>{photoData.explanation}</p>
      </div>
    </article>
  );
}
