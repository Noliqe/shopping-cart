import Items from "./Items";
import cap1 from "./caps/cap1-unsplash.jpg"
import cap2 from "./caps/cap2-unsplash.jpg"
import cap3 from "./caps/cap3-unsplash.jpg"
import cap4 from "./caps/cap4-unsplash.jpg"
import cap5 from "./caps/cap5-unsplash.jpg"
import cap6 from "./caps/cap6-unsplash.jpg"
import cap7 from "./caps/cap7-unsplash.jpg"
import cap8 from "./caps/cap8-unsplash.jpg"
import cap9 from "./caps/cap9-unsplash.jpg"
import cap10 from "./caps/cap10-unsplash.jpg"

const Products = () => {
    return (
      <div className="products">
        <div className="img-header"></div>
        <div className="product-container">
        <Items src={cap1} title={'Cotton twill cap'} discription={'Cotton Twill Baseball Cap True Black'}/>
        <Items src={cap2} title={'White cap'} discription={'White Cap "be your soul"'}/>
        <Items src={cap3} title={'Triangle cap'} discription={'Triangle Baseball Cap True Black'}/>
        <Items src={cap4} title={'Blue cap'} discription={'Classic Baseball Cap Light Blue'}/>
        <Items src={cap5} title={'PATAGONIA cap'} discription={'PATAGONIA Cap Since 1973'}/>
        <Items src={cap6} title={'Yankee cap'} discription={'Yankee Baseball Cap Green'}/>
        <Items src={cap7} title={'Nike cap'} discription={'Nike Baseball Cap White'}/>
        <Items src={cap8} title={'Triangle cap'} discription={'"UNDERGROUND SNAX" Cap Black'}/>
        <Items src={cap9} title={'Nike cap'} discription={'Nike Baseball Cap Yellow'}/>
        <Items src={cap10} title={'Just Culture cap'} discription={'"Just Culture" Cap Yellow/Gold'}/>
        </div>
      </div>
    );
  };
  
  export default Products;