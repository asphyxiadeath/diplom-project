import ts from "typescript";

import styles from './Home.module.scss';

interface Props {

}

export const Home = (props: Props) => {
    return  <div className={styles.Home}>Home</div>;
};