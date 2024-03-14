import React, { useRef } from 'react'
import { useState } from 'react';

export default function About() {
  const fileRef = useRef(null);
  const [image, setImage] = useState(undefined);


  return (
    <div>
      <p>About</p>

      <form className='flex flex-col gap-4'>

        <input type="file" ref={fileRef} accept='image/*'
          onChange={(e) => {
            setImage(e.target.files[0]);
            console.log(e.target.files[0],"kkkk4");
          }}
        />

        <img
          src='https://picsum.photos/200/300'
          alt='profile'
          className='h-24 w-24 self-center cursor-pointer
          rounded-full object-cover mt-2'
          onClick={() => fileRef.current.click()}
        />

      </form>

    </div>
  )
}
