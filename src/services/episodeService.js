import {urls} from "../constants";
import {apiService} from "./apiService";

const episodeService = {
    getAll:(page) => apiService.get(urls.episodes, {params: {page}})
}

export {
    episodeService
}