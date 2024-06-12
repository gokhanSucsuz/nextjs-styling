import Link from 'next/link';
import React from 'react'
import styles from "./styles.module.sass"

const SassStyle = () => {
    const users = [
        "John",
        "Jennifer",
        "Eve",
        "Michael",
        "Brian",
        "Sue",
        "Sally",
        "Leo"
    ];
    return (
        <main className={styles.mainDiv} >
            <div>
                <div>Users List (css module)</div>
                <ul className={styles.listx} >
                    {
                        users.map((user, index) => <li className={styles.listElement} key={index}>{user}</li>)
                    }
                </ul>
            </div>
            <Link className={styles.buttonC} href="/">
                <span>Home Page (With Link Component)</span>
            </Link>
        </main >

    );
}

export default SassStyle