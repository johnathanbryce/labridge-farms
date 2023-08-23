import styles from './page.module.css'
// Internal Component
import HeroMain from './(landing-page)/HeroMain/HeroMain'

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroMain />


    </main>
  )
}
