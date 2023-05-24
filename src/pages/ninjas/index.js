import React from 'react'
import Head from 'next/head'
import style from '../../styles/Ninjas.module.css'
import Link from 'next/link';
 
export const getStaticProps = async ()=>{
   const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
     return{
      props: {ninjas: data}
     }
}

function Ninjas({ninjas}) {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
        <meta name='keywords' content='ninjas'/>
      </Head>

      <div>
       <h1>All Ninjas</h1>
       {ninjas.map(ninjas=>(
        <Link href={`/ninjas/ ${ninjas.id}`} key={ninjas.id}  className={style.single}>
          <h3>{ninjas.name}</h3>
        </Link>

       ))}
      </div>
    </>
    
  )
}

export default Ninjas