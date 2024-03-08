import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import {Episode} from "./Episode";
import {episodesActions} from "../../store";

const Episodes = () => {
    const {episodes} = useSelector(state => state.episodes);
    const [query, setQuery] = useSearchParams({page:'1'});
    const dispatch = useDispatch();

    const page = query.get('page');

    useEffect(() => {
        dispatch(episodesActions.getAll({page}))
    }, [page]);

    return (
        <div>
            {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
        </div>
    );
};

export {Episodes};