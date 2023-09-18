'use client';
import Image from 'next/image'
import { SyntheticEvent, useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [email, setEmail] = useState(''); 

const handleSubmit = async (e: any) => {
  e.preventDefault()  ;
  alert("email");
  try {
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      console.log('Email submitted successfully')
    } else {
      console.error('Email submission failed');
    }


  } catch (error) {
    console.log('Error', error)
  }

}

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get Merching&nbsp;
        </p>
        <div>
          <a
          >
          with
          </a>
        </div>
      </div>

      <div className={styles.center}>
      <Image
              src="/logo.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={104}
              priority
            />
      </div>

       <div className={styles.center}>
        <p>Be the first to know when we launch. Sign up now for updates.</p>
        <form  >
            <input 
            // value={email} // Bind the input value to the email state
            onChange={(e) => setEmail(e.target.value)}
            type="email" name="email" placeholder="Your Email" required style={{
              marginBottom: "10px",
              width: "100%", 
              height: "40px", 
              padding: "10px", 
              borderRadius: "5px",
            }}/>
            <input onClick={handleSubmit} value="Sign Up" className={styles.signupButton} />
        </form>
    </div>
    </main>
  )
}
