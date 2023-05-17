import { postData } from '../Post/postData.js';
import React from 'react';
import styles from './Main.module.scss';
import Post from "../Post/Post";

const Main= () => {
    return (
        <div className={styles.main}>

            {postData.map((pos,id) => (
          <Post key={id} img={pos.image} name={pos.title} text={pos.text} />
        ))}
          
        </div>
    )
}

export default Main;
