'use client'

import styles from './page.module.css'
import {StackClass} from "./components/Stack"
import {useState} from "react";


export default function Home() {
    const [storage, setStorage] = useState([])

    const store = new StackClass(storage)
    const storagePreview = store.previewStorage()!.toString();

    return (
        <main className={styles.main}>
            <h1>Ваше хранилище: {storagePreview}</h1>
        </main>
    )
}
