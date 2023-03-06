import styled from "styled-components";
import React from "react";
import styles from '../styles/Home.module.css'
import Link from "next/link";
import Image from "next/image";




export default function Intro(){

    return <>
    <div className={styles.introDiv}>
        <div className={styles.nameDiv}>{'Hi, I’m Megan, a UX/UI designer based out of Vancouver, BC, Canada'}</div>
        
        <a target="_blank" rel="noreferrer noopener" href='http://megansyukur.ca/about'>
            <div className={styles.learnMoreDiv}>
            <Image src='/../public/aarrow.png' width={15} height={15} className={styles.arrow} alt="arrow"></Image>
            <div className={styles.learnMore}>
            {'Learn more about me'}
            </div>
            </div>
        </a>

        <div className={styles.conCont}>
            <div className={styles.connectDiv}>{'Connect with me'}</div>

            <div style={{display:'flex'}}>
            <a target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/megan-syukur/">
                <Image src='/../public/linkedin.png' width={40} height={40} className={styles.icon}/>
            </a>

            <Link href="mailto: megansyukur@hotmail.com" legacyBehavior>
                <Image src='/../public/email-button.png' width={40} height={30} className={styles.icon}/>
            </Link>
            </div>
        </div>
    </div>
    </>;
}