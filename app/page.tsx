import Image from 'next/image'
import { SyntheticEvent } from 'react'
import styles from './page.module.css'

export default function Home() {

const handleSubmit = async (e: SyntheticEvent) => {
  e.preventDefault();
  const formData = new FormData(e.target as HTMLFormElement);
  const email = formData.get('email') as string;

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
        <form action="/api/signup" method="post" >
            <input type="email" name="email" placeholder="Your Email" required style={{
              marginBottom: "10px",
              width: "100%", // Adjust the width as needed
              height: "40px", // Adjust the height as needed
              padding: "10px", // Add padding for better aesthetics
              borderRadius: "5px",
            }}/>
            <input type="submit" value="Sign Up" className={styles.signupButton}/>
        </form>
    </div>
    </main>
  )
}
