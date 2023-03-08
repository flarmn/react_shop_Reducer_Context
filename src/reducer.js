export function reducer(state, {type, payload}){
    switch(type){
        case 'SET_GOODS':
            return{
                ...state,
                goods: payload || [],
                loading: false,
            }
        case 'ADD_TO_BASKET':
            return {
                itemIndex = state.order.findIndex(
                    (orderItem) => orderItem.id === payload.id
                );

                let newItem = null;

                if(itemIndex < 0){
                    const newItem  = {
                        ...payload,
                        quantity: 1, 
                    };
                    newOrder = [...state.order, newItem];
                }else{
                    newOrder = state.order.map((orderItem, inde)=>{
                        if(index === itemIndex){
                            return {
                                ...orderItem,
                                quantity: orderItem.quantity + 1,
                            };
                        }else{
                            return orderItem;
                        }

                    });
                }
                return {
                    ...state,
                    order: newOrder,
                    alertName: payload.name, 
                }
            }
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                order: state.order.filter((el) => el.mainId !== payload.id)
            }
        case 'INCREMENT_QUANTITY':
            return {
                ...state,
                order: state.order.map((el) => {
                    if(el.id === payload.id){
                        const newQuantity = el.quantity + 1;
                        return {
                            ...el,
                            quantity: newQuantity,
                        };
                    }else{
                        return el;
                    }
                }), 
            }
        case 'DECREMENT_QUANTITY':
            return {
                ...state,
                order: state.order.map((el) => {
                    if(el.id === payload.id){
                        const newQuantity = el.quantity - 1;
                        return {
                            ...el,
                            quantity: newQuantity,
                        };
                    }else{
                        return el;
                    }
                }), 
            }
        case 'TOGLE_BASKET':
            return {
                ...state,
                isBaskeShow: !state.isBaskeShow,
            }
        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: ''
            }
        default: 
                return state;
    }
}