import ProductTile from '../ProductTile/ProductTile';
import Card from '../../Container/Card';

export const AddProductTile = (props) => {

  const gettingProductTiledata = (data) => {
    props.onAddNewItemData(data)
  }
  
  return (
    <>
      <Card>
        <h1>My Demo Shop</h1>
        <Card>
          <h4>Add Product</h4>
          <ProductTile onSaveProductTileData={gettingProductTiledata} />
        </Card>
      </Card>
    </>
  );
}