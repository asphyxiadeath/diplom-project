import ts from "typescript";
import style from './Home.module.scss';

interface Props {

}

export const Home = (props: Props) => {
    return  <div className={style.Home}>Home</div>;
};