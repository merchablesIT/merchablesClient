'use client';
import Image from 'next/image'
import React, { useReducer, FormEvent } from 'react';
import { reducer, initialState } from './reducers';
import styles from './page.module.css'

export default function Home() {
const [state, dispatch] = useReducer(reducer, initialState);


const handleSubmit = async (e: FormEvent) => {
  e.preventDefault()  ;
  try {
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
              className={styles.vercelLogo}
              width={100}
              height={104}
              priority
            />
      </div>

       <div className={styles.center}>
        <p>Be the first to know when we launch. Sign up to become a MERCHER.</p>
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
                display: state.submitted ? 'none' : 'block', 
              }}
            > Sign up</button>
        </form>
         {state.submitted && (
          <div className={styles.alert}>
            Email submitted successfully! Thank you for signing up.
          </div>
        )}
    </div>
    </main>
  )
}
