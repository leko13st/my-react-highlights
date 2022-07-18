import { useEffect } from "react";
import styles from "./Block.module.scss";

type PropsType = {
    text?: string;
};

const Block: React.FC<PropsType> = ({ text }) => {
    useEffect(() => {
        console.log(text);
    }, []);

    if (!text) {
        return null;
    }

    return <div className={styles.block}>{text}</div>;
};

export default Block;
