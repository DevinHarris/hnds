import { X } from 'lucide-react'
import styles from './ToastBanner.module.scss'

export default function ToastBanner({ children, className, ...delegated }: { children: React.ReactNode, className?: string }) {

    return (
        <div className={styles.toastBanner}  {...delegated}>
            {children}
            <X className={styles.closeBtn} size={15} />
        </div>
    )
}