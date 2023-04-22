import { UpdateType } from "../TodoItem/TodoItem";
import s from './Update.module.scss';
import { useAppSelector } from "../../hooks/hooks";

interface Props {
    updateTodo: () => void;
    title: UpdateType;
    loading?: string | null
}

const Update: React.FC<Props> = ({ updateTodo, title, loading }) => {


    return (
        <button
            className={`${s.update} ${s[title]} ${loading}`}
            onClick={updateTodo}
        >
            {title}
        </button>
    );
};

export default Update;