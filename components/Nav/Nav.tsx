import Link from 'next/link'

import { HeartHandshake } from 'lucide-react'

import styles from './Nav.module.scss'

export default function Nav() {

    return (
        <nav className={styles.nav}>
            <h1>
                <Link href="/">HNDS</Link>
                <HeartHandshake style={{ color: "turquoise"}} size={20} />
            </h1>
        </nav>
    )
}