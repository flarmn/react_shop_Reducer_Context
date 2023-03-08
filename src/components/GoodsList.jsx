import { useContext } from 'react';
import { ShopContext } from '../context'
import { GoodsItem } from './GoodsItem'

function GoodsList(props){
    const {goods = [] } = useContext(ShopContext);

    if(!goods.length ){
        <h3>Nothing here</h3>;
    }

    return (
    <div className="goods">
        {goods.map( (item, index) =>(
            <GoodsItem key={item.mainId} {...item} />
        ))}
    </div>
    );
}

export {GoodsList}