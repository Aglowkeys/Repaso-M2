import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../redux/actions'
import Catalog from '../../components/Catalog';

const Home = ({ getProducts }) => {
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Catalog />
    </div>
  )
}

export default connect(null, { getProducts })(Home)