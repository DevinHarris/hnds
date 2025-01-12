
import Link from 'next/link';
import styles from './Home.module.scss';

// Dynamically change background image based on user selection
// add "I'm "creator | business owner | hobbist" -> Get started

export default function Home() {
    return (
        <div className={styles.home}>
            <header className={styles.homeHeader} style={{ background: `url("/images/bg-4.jpg") center center no-repeat`, backgroundSize: "cover" }}>
                <h1 className={styles.headerHeading}>Sell Anything. Launch Everything.</h1>
                <p className={styles.headerPrimaryTagLine}>For Creators, Sellers, Merchants, Hobbists, Dreamers and everything in between.</p>
                <p className={styles.headerSecondaryTagLine}>Start selling in <strong>seconds</strong>.</p>
                <p>Zero fees, <Link className={styles.headerPlansLink} href="/plans">one flat monthly rate with options.</Link> </p>
                <div className={styles.actionButtons}>
                  
                </div>
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
                    <div className={styles.contentSection} style={{ background: `url("/images/bg-11.jpg") center center no-repeat`, backgroundSize: 'cover', }}>
                            
                             <div className={styles.contentSectionContent}>
                                <h1>Effortless and Seamless.</h1>
                                <p>HNDS takes care of the hard parts so you can focus on what matters most—your business. Built for creators, entrepreneurs, and everyone in between.</p>
                            </div>
                    </div>
                </div>
            </main>
        </div>
    )
}