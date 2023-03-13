import {configureStore  } from "@reduxjs/toolkit";
import  movieSlice  from "../features/slice/movieSlice";
import  movieActionSlice  from "../features/slice/actionSlice";
import  movieComedySlice  from "../features/slice/comedySlice";
import  MovieFAntacySlicer  from "../features/slice/fantacySlice";
 
export const store =configureStore({
    reducer:{
        movies:movieSlice,
        action:movieActionSlice,
        comedy:movieComedySlice,
        fantacy:MovieFAntacySlicer
    }
})