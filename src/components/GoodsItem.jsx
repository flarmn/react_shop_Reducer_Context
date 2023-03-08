 import { useContext } from "react";
 import {ShopContext} from "../context";



function GoodsItem(props) {
    const {
        mainId,
        displayName,
        displayDescription,
        displayAssets,
        id,
        name,
        price,
    } = props;


    const {addToBasket, } = useContext(ShopContext)

    return <div className="card" mainid={mainId}>
        <div className="card-image">
            <img src={displayAssets[0].full_background} alt = {displayName}/>
                
        </div>
        <div className="card-content">
        <span className="card-title">{displayName}</span>
            <button className = "btn" onClick = {()=>addToBasket({
                mainId,
                displayName,
                price,
            })  }>Buy</button>
            <span className="right" style={{fontSize: '1.8rem'}}>{price.regularPrice} Rub</span>
            <p>
                {displayDescription}
            </p>
        </div>
    </div>
}

export { GoodsItem }