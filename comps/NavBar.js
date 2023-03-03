
import React from "react"
import styles from '../styles/Home.module.css'
import Link from "next/link"


export default function NavBar(){

    return(
        <>
        <div style={{height:86, width:'100%', display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
            <div style={{display:'flex', marginRight:30}}>
                <a target="_blank" rel="noreferrer noopener" href="https://www.megansyukur.ca/about">
                <div style={{fontSize:16, marginRight:20}}>{"About"}</div>
                </a>

                <a target="_blank" rel="noreferrer noopener" href="https://www.megansyukur.ca/project">
                <div style={{fontSize:16, marginRight:20}}>{"Portfolio"}</div>
                </a>

                <a target="_blank" rel="noreferrer noopener" href="https://www.megansyukur.ca/resume">
                <div style={{fontSize:16}}>{"Resume"}</div>
                </a>

            </div>
        </div>
        </>
    )
}