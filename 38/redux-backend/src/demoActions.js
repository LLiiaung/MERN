import axios from 'axios'
const getdatafromapi = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
        console.log(res.data)
        dispatch({
            type:'GET_DATA',
            payload: res.data
        })
    }).catch(err => {
        console.log(err)
    })
}
export default getdatafromapi