'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getGithubUser } from "./api/auth/github_auth_pak";
import { useState } from "react";
import styles from "./page.module.css";


export default function Home() {
  const [token, setToken] = useState<string>('');
  const router = useRouter();

  async function handleLogin(event:React.MouseEvent<HTMLButtonElement>){  
    const user = await getGithubUser()
    console.log(user)
    if(user){
      console.log(user)
      const params = new URLSearchParams();
      params.set('user_data', JSON.stringify(user));
      router.push(`/dashboard?${params.toString()}`);
    }
    else{
      window.alert('Error')
    }

  }
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>GitTodo</h1>
        <input 
          className={styles.pat_input}
          type="password" 
          placeholder="Personal access token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          ></input>
        <p>
            Track <code>todos</code> in a board not in code
        </p>

        <div className={styles.ctas}>
          <button
            className={styles.primary}
            onClick={handleLogin}
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Login
          </button>
        </div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
