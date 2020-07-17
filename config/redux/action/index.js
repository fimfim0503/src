export const actionusername=()=>(dispatch)=>{
    setTimeout(()=>{
        return dispatch({type:'CHANGE_USER', value : 'munardi'})
    },2000)
}