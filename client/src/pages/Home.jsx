import React, { useState, useEffect } from 'react';

export default function Home() {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5173/api/user/Dashboard',{
      headers: {
        bearer: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjAyYmE4NGI1N2JmMDBmNzlmMmE0ZiIsImlhdCI6MTcxMDI0NzIzNH0.0Y7j0IZW2lnjex8IWC5uFmS3rkWYPLhdiC-l4eKptFo`,
      },
    })
      .then(response => response.json())
      .then(data => setTitles(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="h-full m-20">
      <div className="mt-10 px-4">
        {titles.map(titleItem => (
          <p key={titleItem._id} className="text-gray-600 font-bold text-1xl text-justify">{titleItem.title}</p>
        ))}
      </div>
    </div>
  );
}
