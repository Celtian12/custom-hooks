

export const todoReducerApp = function(initialState, action) {
    switch (action.type) {
        case '[TODO] Add Todo':
            return [... initialState, action.payload];

        case '[TODO] remove todo':
            return initialState.filter(Elem => Elem.id !== action.payload);
            
        case '[TODO] Cross out':
            return initialState.map(Element => {
                if(Element.id === action.payload) {
                    return {
                        ...Element,
                        done: !Element.done
                    }
                }
                return Element;
                });   
    
        default:
            return  initialState;
    }
}