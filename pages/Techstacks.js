import Head from 'next/head'
import Image from 'next/image'
import mongodb from '../public/mongodb.svg'
import graphql from '../public/graphql.svg'
import nextjs from '../public/nextjs.svg'
import nodejs from '../public/nodejs.svg'
import sacss from '../public/sass.svg'
import typescript from '../public/ts2.svg'
import react from '../public/react.svg'
import javascript from '../public/javascript.svg'
import git from '../public/git.svg'
import bootstrap from '../public/bootstrap.svg'
import sql from '../public/postgresql.svg'
import bash from '../public/bash.svg'
export default function Techstacks(){
    return(
        <body className='bg-gray-800'>

            <h1 className='text-white text-xl text-center pt-5 font-serif'>My TechStacks</h1>
          
            <div className='grid grid-cols-4 gap-1 pt-[200px] pb-2'>
                <Image
                src={mongodb}
                 />

                <Image
                src={graphql}
                 />    

                  <Image
                src={nextjs}
                 />    

                    <Image
                src={nodejs}
                 />     

                    <Image
                src={sacss}
                 />     

                    <Image
                src={typescript}
                 />     

                      <Image
                src={react}
                 />   
                 
                 <Image
                src={javascript}
                 />       
                 
                     
                 <Image
                src={git}
                 />       

                     
                 <Image
                src={bootstrap}
                 />   
                     
                     <Image
                src={bash}
                 />   

                     
                 <Image
                src={sql}
                 />     

            </div>

            <div>
                <h1 className='text-white text-center text-xl pt-[100px]'>Other</h1>

                <p className='text-white text-center pt-5'>Recently Got into CyberSecurity and Bitcoin Mining Check out my <span className='underline'>Personal Intrests </span></p>
            </div>

        </body>
    )
}