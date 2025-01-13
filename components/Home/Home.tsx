"use client"

import { useState, useEffect } from "react";
import Link from 'next/link';
import TextTransition, { presets } from "react-text-transition";
import PriceCard from "@/components/PriceCard";
import styles from './Home.module.scss';
import ToastBanner from "@/components/ToastBanner";

// Dynamically change background image based on user selection
// add "I'm "creator | business owner | hobbist" -> Get started

export default function Home() {
    
    const [index, setIndex] = useState(0);
    
    const TEXTS = ["a Creator", "a Small Business Owner", "a Streamer", "a Fashion Designer", "a Dropshipper", "a Preserver", "a Beekeeper", "an Exclusive Content Creator", "a YouTuber", "a Fitness Creator",  "a Hobbist",  "a Food Enthiustist", "a Director", "a Collector", "a Producer", "an Animator", "a Logo Designer", "a Course Creator", "a Freelancer", "a Crafter", "an Entreprenuer", "a Lawncare Specialist", "a Painter", "a Programmer", "a Solopreneur", "a Dabbler", "a Weekend Projecter"];
    
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

                <div className={styles.contentSectionContainer}>
                    <div className={`${styles.contentSection} ${styles.pricingSection}`}>
                            <div className={styles.pricingCards}>
                                <PriceCard>
                                        <h3 className={styles.priceCardTitle}>HNDS Basic: For Beginners and Hobbyists</h3>
                                        <span className={styles.priceCardPrice}>$19 / month</span>
                                        <div className={styles.priceFeatureList}>
                                            <h4 className={styles.listHeading}>Who it's for:</h4>
                                            <ul>
                                                <li>Individuals just starting their selling journey.</li>
                                                <li>Hobbyists looking to monetize a passion project with minimal investment.</li>
                                                <li>Sellers with small inventories and straightforward needs.</li>
                                            </ul>
                                        </div>
                                        <div className={styles.priceFeatureList}>
                                            <h4 className={styles.listHeading}>Why it’s perfect:</h4>
                                            <ul>
                                                <li>Low cost makes it easy to test the waters.</li>
                                                <li>Create up to 10 products</li>
                                                <li>Simple tools help you set up and manage a small storefront without complexity.</li>
                                                <li>Ideal for creators, crafters, or anyone testing the e-commerce space.</li>
                                            </ul>
                                        </div>
                                </PriceCard>
                                <PriceCard>
                                        <h3 className={styles.priceCardTitle}></h3>
                                        <span className={styles.priceCardPrice}>$49/month</span>
                                        <div className={styles.priceFeatureList}>
                                            <h4 className={styles.listHeading}>Who it's for:</h4>
                                            <ul>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                            </ul>
                                        </div>
                                        <div className={styles.priceFeatureList}>
                                            <h4 className={styles.listHeading}>Why it’s perfect:</h4>
                                            <ul>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                            </ul>
                                        </div>
                                </PriceCard>
                                <PriceCard>
                                        <h3 className={styles.priceCardTitle}></h3>
                                        <span className={styles.priceCardPrice}>$99/month or $990/year (2 months free)</span>
                                        <div className={styles.priceFeatureList}>
                                            <h4 className={styles.listHeading}>Who it's for:</h4>
                                            <ul>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                            </ul>
                                        </div>
                                        <div className={styles.priceFeatureList}>
                                            <h4 className={styles.listHeading}>Why it’s perfect:</h4>
                                            <ul>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                            </ul>
                                        </div>
                                </PriceCard>
                                <PriceCard>
                                        <h3 className={styles.priceCardTitle}>HNDS Essentials: For Growing Entrepreneurs</h3>
                                        <span className={styles.priceCardPrice}>$199/month or $1,990/year (2 months free)</span>
                                        <div className={styles.priceFeatureList}>
                                            <h4 className={styles.listHeading}>Who it's for:</h4>
                                            <ul>
                                                <li>Small business owners scaling up their operations.</li>
                                                <li>Sellers with mid-sized inventories who need more advanced analytics and tools.</li>
                                                <li>Entrepreneurs who want to improve customer engagement and launch products strategically.</li>
                                            </ul>
                                        </div>
                                        <div className={styles.priceFeatureList}>
                                            <h4 className={styles.listHeading}>Why it’s perfect:</h4>
                                            <ul>
                                                <li>Scheduled product launches help create buzz and urgency.</li>
                                                <li>Advanced analytics enable smarter decision-making.</li>
                                                <li>Priority support ensures your business runs smoothly during growth phases.</li>
                                            </ul>
                                        </div>
                                </PriceCard>
                            </div>
                            
                             <div className={`${styles.contentSectionContent} ${styles.pricingSectionContent}`}>

                                <h1>Simple Pricing. Scale when you need to.</h1>
                                <p>Whether you're just starting out or running a thriving business, HNDS has a plan that fits your needs. No transaction fees, no hidden costs—just straightforward pricing.</p>
                                
                            </div>
                    </div>
                </div>
                <div className={styles.contentSectionContainer}>
                <div className={styles.contentSectionContainer}>
                    <div className={styles.contentSection}>
                            <div className={styles.contentSectionVideo}>
                                <video loop muted autoPlay>
                                    <source src="/images/vid-bg-6.mp4" type='video/mp4'></source>
                                </video>
                                <div className={styles.contentSectionContent}>
                                <h1>Discover and Support Creators Effortlessly</h1>
                                <p>HNDS connects you to creators offering unique, high-quality digital content. Support your favorite creators directly and easily, while enjoying exclusive perks like early access, special deals, and personalized content.</p>
                            </div>
                            </div>
                           
                    </div>
                </div>


                </div>
                <div className={styles.userBenefitsSection}>
                    {/* add tool tips for each */}
                    <h2>Multiple Payment Options, Maximum Flexibility</h2>
                    <p>We understand that everyone has different preferences when it comes to payments. That’s why HNDS offers a variety of secure payment options:</p>
                    <ul>
                        <li><strong>Stripe-powered payments:</strong> for fast, secure transactions.</li>
                        <li><strong>Standard methods:</strong> We support all major credit cards.</li>
                        <li><strong>Digital wallets:</strong> PayPal, Apple Pay, Google Pay.</li>
                        <li><strong>Buy Now, Pay Later:</strong> Pay over time with options like AfterPay, Klarna, and Zip.</li>
                        <li><strong>Privacy.com payments:</strong> Maintain full privacy by generating virtual cards for your purchases.</li>
                    </ul>
                </div>
            </main>
        </div>
    )
}