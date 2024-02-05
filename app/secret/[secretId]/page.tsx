"use client";
import { deleteDoc, doc , getDoc } from 'firebase/firestore'
import { db } from '@/utils/firebase'

import React, { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'


type Props = {
    params: {
        secretId: string
    }
}

const SecretPage = ({params: {secretId}}: Props) => {

    const [secretString, setSecretString] = useState<string | null>(null);
    const [reveal , setReveal] = useState<boolean>(false);

    //now after getting the secretId, we can use it to fetch the secret from the server
    useEffect(() => {
        //fetch the secret
        const fetchSecret = async () => {
            try {
                const docRef = doc(db, 'secrets', secretId);
                const docSnap = await getDoc(docRef);

                if(docSnap.exists()) {
                    setSecretString(docSnap.data().secret);

                    //now delete the secret from the server
                    await deleteDoc(docRef);

                } else {
                    console.log('no such document');
                }
                
            } catch (error) {
                console.log('error fetching the secret', error);   
            }
        }

        fetchSecret();
        
    }, [secretId]);
    
  return (
    <div className=' text-center my-8'>
        {secretString ? reveal ? <p className=' text-3xl font-bold'>Secret Reveal boom <span className=' text-red-500'>:</span> <br/>
        <span className=' text-cyan-500'> {secretString}</span>
        </p> : <Button className=' bg-cyan-500' onClick={() => setReveal(true)}>Reveal the secret</Button>
         : 
         <p>Your secret has been <span className=' text-red-600 uppercase text-3xl font-bold'> destroyed !</span></p>}
    </div>
  )
}

export default SecretPage