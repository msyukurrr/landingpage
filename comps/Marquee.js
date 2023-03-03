import react from "react";
import styles from '../styles/Home.module.css';
import Link from "next/link";

export default function Marquee(){
    return(
        <div className={styles.marquee}>
		
		<div style={{display:'flex', justifyContent:'flex-end', marginRight:'1vw', marginBottom:'1vw', fontSize:20, color:'#000000', opacity:'0.4', fontFamily:'Source Code Pro'}}>{"My recent work"}</div>

        <div className={styles.marquee__MEnU} aria-hidden="true">
            <a target="_blank" rel="noreferrer noopener" href="https://www.megansyukur.ca/menu">
		        <span>MEnU</span>
		        <span>MEnU</span>
		        <span>MEnU</span>
		        <span>MEnU</span>
            </a>
	    </div>

        <div className={styles.marquee__LocalScoop} aria-hidden="true">
            <a target="_blank" rel="noreferrer noopener" href="https://www.megansyukur.ca/localscoop">
		        <span>LocalScoop</span>
		        <span>LocalScoop</span>
		        <span>LocalScoop</span>
		        <span>LocalScoop</span>
            </a>
	    </div>

        <div className={styles.marquee__Frurange} aria-hidden="true">
            <a target="_blank" rel="noreferrer noopener" href="https://www.megansyukur.ca/frurange">
		        <span>Frurange</span>
		        <span>Frurange</span>
		        <span>Frurange</span>
		        <span>Frurange</span>
            </a>
	    </div>
</div>
    )
}