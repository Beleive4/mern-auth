import React, { useRef } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import { app } from '../firebase'


export default function About() {
  const fileRef = useRef(null);
  const [image, setImage] = useState(undefined);
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(null);


  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image])

  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred /
          snapshot.totalBytes
        ) * 100;
        setImagePercent(Math.round(progress));
        console.log(Math.round(progress), "progress");
      },

      (error) => {
        setImageError(true)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then
          ((downloadUrl) => {
            console.log(downloadUrl, "downloadUrl");
          })

      });
  }

  return (
    <div>
      <p>About</p>

      <form className='flex flex-col gap-4'>

        <input type="file" ref={fileRef} accept='image/*'
          onChange={(e) => {
            setImageError(null);
            setImage(e.target.files[0]);
            console.log(e.target.files[0], "kkkk4");
          }}
        />

        <img
          src='https://picsum.photos/200/300'
          alt='profile'
          className='h-24 w-24 self-center cursor-pointer
          rounded-full object-cover mt-2'
          onClick={() => fileRef.current.click()}
        />
        <p>
          {imageError ? (
            <>
              <span className='text-red-700'>Error uploading image</span>
            </>
          ) : (
            <>
              {imagePercent > 0 && imagePercent < 100 ? (
                <span className='text-slate-700'>{`Uploading... ${imagePercent}%`}</span>
              ) : imagePercent === 100 ? (
                <span className='text-green-700'>Image uploaded successfully</span>
              ) : null}
            </>
          )}
        </p>

      </form>

    </div>
  )
}
