const BASE_URL = process.env.REACT_APP_API_BASE_URL;

function getImage(path){
    return `${BASE_URL}/${path}`;
}

export default getImage;