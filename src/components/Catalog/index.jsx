import { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions';

class Catalog extends Component {
  constructor(props) {
    super(props)
  }

  addToCart = (prod) => {
    this.props.addToCart(prod)
  }

  render() {
    return (
      <section>
        <h2>Catálogo</h2>
        {
          this.props.products.map((prod) => {
            return (
              <article key={prod.id}>
                <h3>{prod.title}</h3>
                <img src={prod.image} alt={prod.title} width="100" />
                <p>$ {prod.price}</p>
                <button onClick={() => this.addToCart(prod)}>Agregar al carrito</button>
              </article>
            )
          })
        }
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  }
}

export default connect(mapStateToProps, { addToCart })(Catalog);
