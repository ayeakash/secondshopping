import { Card } from 'antd';
import phone from '../../images/mobile-img.png'
 
const Product2 = () => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={phone}/>}
  >
    <button className='btn btn-secondary'>Add to Cart</button>
    <button className='btn btn-secondary'>Buy Now</button>
  </Card>
);
export default Product2;