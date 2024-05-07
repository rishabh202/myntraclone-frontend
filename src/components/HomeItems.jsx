import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import 'bootstrap/dist/css/bootstrap.css';
import { IoIosAddCircle } from "react-icons/io";
import { IoMdRemoveCircle } from "react-icons/io";

const HomeItems = ({item}) => {
     

    const dispatch = useDispatch();
    const bagItems = useSelector((store) => store.bag);
    const elementFound = bagItems.indexOf(item.id) >=0 ;

    const handleAddToBag = () => {
        dispatch(bagActions.addToBag(item.id));
    };
    const handleRemoveFromBag = () => {
        dispatch(bagActions.removeFromBag(item.id));
    };

   return <>

    <div className="item-container">
    <img className="item-image" src={item.image} alt="item image" />
    <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
    </div>
    <div className="company-name">{item.company}</div>
    <div className="item-name">{item.item_name}</div>
    <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
    </div>

    {elementFound ? <button type="button" onClick={handleRemoveFromBag} className="btn-add-bag btn btn-danger"> <IoMdRemoveCircle /> Remove from Bag</button> :   <button type="button" onClick={handleAddToBag} className="btn-add-bag btn btn-success"> <IoIosAddCircle /> Add to Bag</button>}
  

</div>

   
   </>
}

export default HomeItems;
