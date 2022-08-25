import Image from "next/image"
import styles from "../styles/Home.module.css"

export default function Home() {
    //How do we show the recently listed nfts?
    //we will index the events off chain and read them from our database
    //set up a server to listen for those events to be fired, and we will add them to a database query

    return <div className={styles.container}>hi!</div>
}
