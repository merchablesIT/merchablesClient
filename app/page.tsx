'use client';
import Image from 'next/image'
import React, { useReducer, FormEvent, useState } from 'react';
import { reducer, initialState } from './reducers';
import styles from './page.module.css'

export default function Home() {
const [state, dispatch] = useReducer(reducer, initialState);
const [loading, setLoading] = useState(false);
const isEmailValid = (email: string) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}


const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  if (!isEmailValid(state.email)) {
    // Email is not valid, do not proceed
    console.error('Invalid email');
    return;
  }
  try {
    setLoading(true);
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state.email),
    });

    if (response.ok) {
      console.log('Email submitted successfully')
      dispatch({ type: 'SUBMIT_SUCCESS' })
    } else {
      console.error('Email submission failed');
    }


  } catch (error) {
    console.log('Error', error)
  }finally {
    setLoading(false);
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
          with <span className='visibleOnMobile'>Merchables</span>
          </a>
        </div>
      </div>

      <div className={styles.center}>
      <Image
              src="/logo.svg"
              alt="Vercel Logo"
              width={100}
              className={styles.vercelLogo}
              height={104}
              priority
            />
      </div>

       <div className={styles.center}>
        <p>Be the first to know when we launch. Sign up to become a Mercher.</p>
        <form  >
            <input 
            onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
            type="email" 
            name="email" 
            placeholder="Your Email" 
            required 
            value={state.email}
            style={{
              marginBottom: "10px",
              width: "100%", 
              height: "40px", 
              padding: "10px", 
              borderRadius: "5px",
              display: state.submitted ? "none" : "block"
            }}/>
            <button onClick={handleSubmit} value="Sign Up" className={styles.signupButton}
              style={{
                // display: state.submitted ? 'none' : 'block', 
                display: state.submitted || loading || !isEmailValid(state.email) ? 'none' : 'block',
              }}
            > Sign up</button>
             {loading && <div>Loading...</div>}
        </form>
        {state.submitted && !loading && (
          <div className={styles.alert}>
            Email submitted successfully! Thank you for signing up.
          </div>
        )}
    </div>
    </main>
  )
}
