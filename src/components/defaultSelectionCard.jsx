'use client'
import React, { use, useEffect, useState } from 'react';
import users from '/public/users.json';
import styles from './defaultSelectionCard.module.css';

export default function defaultSelectionCard() {
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        if (users.length > 0) {
            setSelectedUser(users[0].id);
        }
    }, [])

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.heading}>User Cards</h2>
            <div className={styles.cardGrid}>
                {users.map((user) => (
                    <div key={user.id}
                        className={`${styles.card} ${selectedUser === user.id ? styles.selected : ''}`}
                        onClick={() => setSelectedUser(user.id)}>
                        <img src={user.image} alt={user.name} className={styles.image} />
                        <h3>{user.name}</h3>
                        <p className={styles.email}>{user.email}</p>
                        <p className={styles.job}>{user.jobTitle}</p>
                        <p className={styles.about}>{user.about}</p>
                        <p className={styles.location}>
                            {user.city}, {user.state}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}