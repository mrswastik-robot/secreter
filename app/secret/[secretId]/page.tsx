"use client";
import { doc , getDoc } from 'firebase/firestore'
import { db } from '@/utils/firebase'

import React, { useEffect, useState } from 'react'


type Props = {
    params: {
        secretId: string
    }
}

const SecretPage = ({params: {secretId}}: Props) => {

    const [secretString, setSecretString] = useState<string | null>(null);

    //now after getting the secretId, we can use it to fetch the secret from the server
    useEffect(() => {
        //fetch the secret
        const fetchSecret = async () => {
            try {
                const docRef = doc(db, 'secrets', secretId);
                const docSnap = await getDoc(docRef);

                if(docSnap.exists()) {
                    setSecretString(docSnap.data().secret);
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
    <div>
        <h1 className="text-3xl font-bold text-center my-8">Your secret is
            <span className="text-cyan-500"> {secretString}</span>
        </h1>
    </div>
  )
}

export default SecretPage