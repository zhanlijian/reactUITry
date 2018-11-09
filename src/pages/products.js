// import styles from './products.css';

// export default function() {
//   return (
//     <div className={styles.normal}>
//       <h1>Page products</h1>
//     </div>
//   );
// }


import { connect } from 'dva';
import ProductList from '../components/ProductList';

const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products} />
    </div>
  );
};

export default connect(({ products }) => ({
  products,
}))(Products);