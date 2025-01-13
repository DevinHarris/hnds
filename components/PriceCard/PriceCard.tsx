import { Card } from '@/components/ui/card'

import styles from './PriceCard.module.scss';

export default function PriceCard({ children }: { children: React.ReactNode }) {
    return (
            <Card className={styles.priceCard}>
                { children }
            </Card>
    )
}