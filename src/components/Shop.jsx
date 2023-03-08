import {useEffect, useContext } from 'react';
import {API_KEY, API_URL} from '../config';
import {Preloader} from './Preloader'
import {GoodsList} from "./GoodsList"
import {Cart} from "./Cart"
import {BasketList} from "./BasketList"
import {Alert} from "./Alert"

import {ShopContext} from "../context"


function Shop(){

const {setGoods, loading, order, isBasketShow, alertName} = useContext(ShopContext);


useEffect(function getGoods(){
    fetch(API_URL, {
        headers: {'Authorization': '9ca9e036-046818e5-a7d502b2-1440ed35'}
    }).then(response=>response.json()).then(data => {
        data.shop && setGoods(data.shop);
        setLoading(false);
    })
    //eslin-disable-next-line
}, []);


    return <main className="container content">
        <Cart quantity = {order.length} />

        { loading ? <Preloader /> : <GoodsList /> }

        { isBasketShow && <BasketList /> }

        { alertName && <Alert /> }

    </main>
}

export {Shop}