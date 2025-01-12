"use client"

import { useState, useEffect } from "react";
import Link from 'next/link';
import TextTransition, { presets } from "react-text-transition";
import styles from './Home.module.scss';
import ToastBanner from "@/components/ToastBanner";

// Dynamically change background image based on user selection
// add "I'm "creator | business owner | hobbist" -> Get started

export default function Home() {
    
    const [index, setIndex] = useState(0);
    
    const TEXTS = ["a Creator", "a Small Business Owner", "a Streamer", "a Fashion Designer", "a Dropshipper", "a Preserver", "a Beekeeper", "an Exclusive Content Creator", "a YouTuber", "a Fitness Creator",  "a Hobbist",  "a Food Enthiustist", "a Director", "a Collector", "a Producer", "an Animator", "a Logo Designer", "a Course Creator", "a Freelancers", "a Crafter", "an Entreprenuer", "a Lawncare Specialist", "a Painter", "a Programmer", "a Solopreneur", "a Dabbler", "a Weekend Projecter"];
    
    useEffect(() => {
        const intervalId = setInterval(() => setIndex((index) => index + 1),
        4000,);

        return () => clearTimeout(intervalId)
    }, [index])

    return (
        <div className={styles.home}>
            <ToastBanner>
                <span>Absolutely <strong>free</strong> for your first 3 sales. <Link href="/signup"><strong>Learn more.</strong></Link></span>
            </ToastBanner>
            
            <header className={styles.homeHeader} style={{ background: `url("/images/bg-5.jpg") center center no-repeat`, backgroundSize: "cover" }}>
                <div className={styles.creatorText}>
                  <h2>I'm <Link href="/signup"><TextTransition className={styles.createTextAnimation} springConfig={presets.gentle}>{TEXTS[index % TEXTS.length]}.</TextTransition></Link></h2>
                </div>
                <h1 className={styles.headerHeading}>Sell Anything. Launch Everything. Keep all your earnings.</h1>
                <p className={styles.headerPrimaryTagLine}>For Creators, Sellers, Merchants, Hobbists, Dreamers and everything in between.</p>
                <p className={styles.headerSecondaryTagLine}>Start selling in <strong>seconds</strong>. <Link className={styles.headerPlansLink} href="/plans">Zero fees, one flat monthly price.</Link></p>
       
               
              
            </header>
            <main className={styles.homeMainContent}>
                <div className={styles.intro}>
                    <p><strong>HNDS</strong> is the ultimate platform for creators, entrepreneurs, and individuals to sell digital content, physical products, and subscriptions with ease. Customize your storefront, connect directly with your audience, and take control of your sales—all in your own HNDS.</p>
                </div>
                <div className={styles.contentSectionContainer}>
                    <div className={styles.contentSection}>
                            <div className={styles.contentSectionVideo}>
                                <video loop muted autoPlay>
                                    <source src="/images/vid-bg-3.mp4" type='video/mp4'></source>
                                </video>
                                <div className={styles.contentSectionContent}>
                                <h1>Own Your Hustle</h1>
                                <p>Build. Sell. Scale. HNDS is your all-in-one platform for selling content, products, and experiences. No fees, no hassle—just pure growth, your way.</p>
                            </div>
                            </div>
                           
                    </div>
                </div>
                <div className={styles.contentSectionContainer}>
                    <div className={styles.contentSection} style={{ paddingInline: "3rem", background: `url("/images/bg-11.jpg") center center no-repeat`, backgroundSize: 'cover', }}>
                            
                             <div className={styles.contentSectionContent}>
                                <h1>Effortless and Seamless.</h1>
                                <p><strong>HNDS</strong> takes care of the hard parts so you can focus on what matters most—your business. Built for creators, entrepreneurs, and everyone in between.</p>
                            </div>
                    </div>
                </div>
            </main>
        </div>
    )
}