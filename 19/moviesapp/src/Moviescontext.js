import React, { createContext } from "react";
import AddMovie from "./AddMovie";
export const Moviesprovider = React.createContext();
class Moviescontext extends React.Component {
    constructor() {
        super();
        this.state = {
            movies:[],
            addmovie:this.addmovie
        }
    }
    addmovie = (movie)=>{
        this.setState({movies:[...this.state.movies,movie]})
    }
    render() {
        return <Moviesprovider.Provider value = {{...this.state}}>
            {this.props.children}
        </Moviesprovider.Provider>
    }
}
export default Moviescontext