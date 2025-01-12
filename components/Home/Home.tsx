
import Link from 'next/link';
import styles from './Home.module.scss';

export default function Home() {
    return (
        <div className={styles.home}>
            <header className={styles.homeHeader}>
                <h1 className={styles.headerHeading}>Sell Anything. Launch Everything.</h1>
                <p className={styles.headerPrimaryTagLine}>For Creators, Sellers, Merchants, Hobbists, Dreamers and everything in between.</p>
                <p className={styles.headerSecondaryTagLine}>Start selling in <strong>seconds</strong>.</p>
                <p>Zero fees, <Link className={styles.headerPlansLink} href="/plans">one flat monthly rate with options.</Link> </p>
                <div className={styles.actionButtons}>
                    <a href="/login">Login</a>
                    <a href="/create/store">Create your Store</a>
                </div>
            </header>
            <main className={styles.homeMainContent}>
                <div className={styles.intro}>
                    <p>HNDS is the ultimate platform for creators, entrepreneurs, and individuals to sell digital content, physical products, and subscriptions with ease. Customize your storefront, connect directly with your audience, and take control of your sales—all in your own HNDS.</p>
                </div>
            </main>
        </div>
    )
}