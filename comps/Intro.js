import styled from "styled-components";
import React from "react";
import styles from '../styles/Home.module.css'
import Link from "next/link";
import Image from "next/image";




export default function Intro(){

    return(
        <>
        <div style={{display:'flex', flexDirection:'column', width:'50%', marginTop:'15vw'}}>
            <div style={{fontSize:30, fontWeight:400, fontFamily:'Inter', marginLeft:'2vw'}}>{'Hi, I’m Megan, a UX/UI designer based out of Vancouver, BC, Canada'}</div>
            
            <a target="_blank" rel="noreferrer noopener" href='http://megansyukur.ca/about'>
                <div style={{display:'flex', marginLeft:'2vw', marginTop:'2vw'}}>
                <Image src='/../public/aarrow.png' width={15} height={15} style={{marginTop:2}}></Image>
                <div className={styles.learnMore}>
                {'Learn more about me'}
                </div>
                </div>
            </a>

            <div style={{marginTop:'15vw', marginLeft:'2vw'}}>
                <div style={{color:'#000000', opacity:'0.4', fontFamily:'Source Code Pro', marginBottom:'1vw'}}>{'Connect with me'}</div>
                <a target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/megan-syukur/">
                    <Image src='/../public/linkedin.png' width={40} height={40} className={styles.icon}/>
                </a>

                <Link href="mailto: megansyukur@hotmail.com">
                    <Image src='/../public/email-button.png' width={40} height={40} className={styles.icon}/>
                </Link>

            </div>
        </div>
        </>
    )
}