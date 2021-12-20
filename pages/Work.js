import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import Covidm from '../public/Covidm.png'
import Devgram from '../public/Devgram.png'
import Linuz from '../public/Linux.png'
export default function Techstacks(){
    return(
        <body className='bg-gray-900 text-white text-lg text-center '>
            <h1 className='pb-10 pt-5'>Projects I've Worked on</h1>

            <hr className={styles.hr}></hr>
        <div className={styles.div}>
  <p className={styles.p}> 
  <h2 className="text-mono text-xl font-bold ">Covidm</h2>
  <span className='pt-2 font-serif'>

  The One and only Web app You need to Fight the Virus< br/>
  Find beds,Vaccines Near you.
  </span>

  <span>
      <a href="https://github.com/Covidm">
  <img src="https://img.icons8.com/material-outlined/48/000000/github.png"/>
  </a>
  </span>
{/* Illutration */}

  <span>
      <a href='https://covidm-beta.herokuapp.com/'>
      <p className='text-white'>View</p>
      </a>
  </span>

<span className=''>
<Image 
  src={Covidm}
  height={1000}
  width={1500}
  />
</span>


   </p>

   {/* Second PRoject */}
<p  className={styles.p}>
    <h2 className='font-bold text-lg font-mono underline'>DevGram</h2>

    <span className='pt-5 font-mono'>
        A simple Blogs Space For People To Post Quick Blogs Anytime from anyWhere!

    </span>


    <span>
      <a href="https://github.com/blog-spot">
  <img src="https://img.icons8.com/material-outlined/48/000000/github.png"/>
  </a>
  </span>

  <span>
      <a href='https://devgramco.herokuapp.com/'>
      <p className='text-white'>View</p>
      </a>
  </span>

  <Image 
  src={Devgram}
  height={500}
  width={500}
  />


</p>

<p  className={styles.p}>
    <h2 className='text-white text-lg font-mono underline'>Linux Notes Terminal app</h2>

    <span className='pt-5'>Yet Another Simple Notes Taking Application With your Terminal, It's Avaliable With Windows too (Node js package)</span>

    <span>
      <a href="https://github.com/Cli-Appss/Linux-notes-app">
  <img src="https://img.icons8.com/material-outlined/48/000000/github.png"/>
  </a>
  </span>

  <Image
  src={Linuz}
  />



</p>

<p  className={styles.p}>
    <h2 className='text-lg font-bold underline font-monos'>Future Projects!</h2>
</p>
<p  className={styles.p}>Planning On Building A Social Media Platform For People To Chill and Hangout Coming Soon! Stay tuned!</p>

  
</div>

</body>
)
}