import React from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { app } from '../firebase';
function OAuth() {

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);

      console.log(result, "result4");
    } catch (error) {

    }
  }

  return (
    <button
      onClick={handleGoogleClick}
      type='button'
      className='bg-red-700
         text-white 
         rounded-lg 
         p-3 
         uppercase
         hover:opacity-95
         '>Continue with Google</button>
  )
}

export default OAuth