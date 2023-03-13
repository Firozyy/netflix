const API_KEY = "7adeb3237bd01effdee40142c13c22d8";

const resources = {
    fetchTrending : `/trending/all/day?api_key=${API_KEY}`,
    Action_url:`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate`,
    
    Comedy_url:`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate`,
    Fntacy_url:`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=14&with_watch_monetization_types=flatrate`,
    imageURl_base:`https://image.tmdb.org/t/p/original`
}

export default resources