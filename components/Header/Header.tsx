import styles from './Header.module.scss';

export default function Header({ children, bgImageSrc, ...delegated }: { children: React.ReactNode, bgImageSrc?: string }) {

    return (
        <header className={styles.header} style={{ background: `url(${bgImageSrc}) center center no-repeat` }} {...delegated}>
            <div className={styles.headerContent}>
                {children}
            </div>
        </header>
    )
}