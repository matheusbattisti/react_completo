// 7 - carregamento de dados
import { useFetch } from "../hooks/useFetch";

const url = "http://localhost:3000/products";

// 8 - carregamento individual - rota dinâmica
import { Link } from "react-router-dom";

const Home = () => {
  const { data: items, loading, error } = useFetch(url);

  return (
    <div>
      <h1>Home</h1>
      {/* 7 - Carregamento de dados */}
      <ul className="products">
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$: {item.price}</p>
              {/* 8 - rota dinamica */}
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
