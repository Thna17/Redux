import { configureStore} from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesslice";
import { reset } from "./action";



const store = configureStore({
    reducer: {
        songs: songsReducer,
        movies: moviesReducer,
    }
});


// console.log(songsSlice.actions.addSong())
// const startingState = store.getState();
// console.log(JSON.stringify(startingState));

// store.dispatch(songsSlice.actions.addSong('Some Song'));
// // store.dispatch({
// //     type: 'song/removeSong',
// //     payload: 'New Song'
// // })

// const finalState = store.getState();
// console.log(JSON.stringify(finalState));


export {store, reset, addSong, removeSong, addMovie, removeMovie};
