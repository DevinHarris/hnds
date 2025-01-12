import { X } from 'lucide-react'
import styles from './ToastBanner.module.scss'

export default function ToastBanner({ children, ...delegated }: { children: React.ReactNode }) {

    return (
        <div className={styles.toastBanner}  {...delegated}>
            {children}
            <X className={styles.closeBtn} size={15} />
        </div>
    )
}