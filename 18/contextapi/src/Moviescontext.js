import React,{component} from 'react'

export const Moviesprovider=React.createContext()
class Moviescontext extends React.Component{
    constructor(){
        super()
        this.state={
            director:'Nolan',
            movie:'Interstellar',
            changemovie:this.changemovie,
            changedirector:this.changedirector
        }
    }
    changemovie=(movie)=>{
        this.setState({movie:movie})
    }
    changedirector=(director)=>{
        this.setState({director:director})
    }
    render() {
        return <Moviesprovider.Provider value={{...this.state}}> {/* pass state to provider */}
            {/* give access to all children */}
            {this.props.children}
        </Moviesprovider.Provider>
    }
}
export default Moviescontext