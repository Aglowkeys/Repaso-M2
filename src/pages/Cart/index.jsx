import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/actions';

export const Cart = () => {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(removeFromCart(id))
  }

  if (cart.length === 0) {
    return (
      <>
        <h2>Carrito</h2>
        <p>No tenés productos</p>
      </>
    )
  }

  return (
    <section>
      <h2>Carrito</h2>
      {
          cart.map((prod) => {
            return (
              <article key={prod.id}>
                <h3>{prod.title}</h3>
                <img src={prod.image} alt={prod.title} width="100" />
                <p>$ {prod.price}</p>
                <button onClick={() => handleClick(prod.id)}>Quitar del carrito</button>
              </article>
            )
          })
        }
    </section>
  )
}
