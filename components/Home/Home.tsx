
import styles from './Home.module.scss';

export default function Home() {
    return (
        <div className={styles.home}>
            <header className={styles.homeHeader}>
                <h1 className={styles.headerHeading}>Sell Anything. Launch Everything.</h1>
                <p className={styles.headerPrimaryTagLine}>Creators, Sellers, Merchants, Hobbists, Dreamers and everything in between.</p>
                <p className={styles.headerSecondaryTagLine}>Start selling in <strong>seconds</strong>.</p>
                <div className={styles.actionButtons}>
                    <a href="/login">Login</a>
                    <a href="/create/store">Create your Store</a>
                </div>
            </header>
        </div>
    )
}