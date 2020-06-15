import data from '../../assets/top5MoviesAssessement.json'
const initialState ={
    orderSelection: data.components[0].items,
    posterDetails: data.components[1].items
}
const rootReducer =(state =initialState,action)=>{
    switch(action.type){
        case 'Rank':
            const rankState = Object.assign({}, state);
            rankState.posterDetails= state.posterDetails.slice().sort((a, b) => {
                return a.rank - b.rank;
            });
            return rankState;
        case 'Release Date':
            const releaseState = Object.assign({}, state);
            releaseState.posterDetails= state.posterDetails.slice().sort((a, b) => {
                return a.releaseDate - b.releaseDate;
            });
            return releaseState;
    default:
        return state;
    }
}
export default rootReducer;