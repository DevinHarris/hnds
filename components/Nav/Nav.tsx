import Link from 'next/link'

import { HeartHandshake  } from 'lucide-react'

import styles from './Nav.module.scss'

export default function Nav() {

    return (
        <nav className={styles.nav}>
           <ul>
                <li className={styles.navLink}>
                    <Link href="/features">Features</Link>
                </li>
                <li>
                    <Link href="/pricing">Pricing</Link>
                </li>
           </ul>
           <h1>
                <Link href="/">HNDS.</Link>
                <HeartHandshake style={{ color: "deeppink"}} size={20} />
            </h1>
            <ul>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/login">Login</Link>
                </li>
            </ul>
        </nav>
    )
}