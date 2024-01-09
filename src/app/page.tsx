'use client'

import S from './page.module.css'
import {StackClass} from "./components/Stack"
import React, {useState} from "react";


export default function Home<T extends string | number | undefined>() {
    const [storage, setStorage] = useState<StackClass<T | null>>(() => new StackClass())
    const [storageValue, setStorageValue] = useState<T | null | string>(null)
    const [inputValue, setInputValue] = useState<T | string>('');
    const [isPopup, setIsPopup] = useState<boolean>(false)

    const storagePreview = storage.previewStorage().toString();

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setStorage(prev => {
            const next = new StackClass<T | null>()
            next.storage = [...prev.storage]
            if (storageValue !== null) {
                next.push(storageValue)
            }
            return next
        })
        setInputValue('');
        setStorageValue(null)
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStorageValue(event.target.value)
        setInputValue(event.target.value);
    }

    const storageLength = storage.length()
    const isOpenPopup = () => {
        setIsPopup(!isPopup)
    }
    const handleWrapperClick = (event: React.MouseEvent<HTMLElement>) => {
        if (event.target === event.currentTarget) setIsPopup(!isPopup)
        console.log(event.currentTarget, event.target)
    }
    return (<>
            <main className={S.main}>
                <h1 className={S.mainText}>Ваше хранилище: {storagePreview}</h1>

                <div className={S.forms}>
                    <form className={S.form} onSubmit={onSubmit}>
                        <label className={S.label}>Добавить значение в хранилище</label>
                        <input className={S.input} id="value" onChange={onChange} value={inputValue}/>
                        <button className={S.submit} type="submit">Изменить</button>
                    </form>

                    <button type={"button"} onClick={isOpenPopup}>Узнать длину массива</button>
                </div>
            </main>
            {isPopup && <div className={S.popup}>
                <div className={S.popupContent}><p>Всего эллементов в массиве: {storageLength}</p>
                    <button className={S.button} onClick={() => setIsPopup(!isPopup)}>Закрыть</button>
                </div>
                <div className={S.popupBackground} onClick={handleWrapperClick}></div>
            </div>}
        </>
    )
}
