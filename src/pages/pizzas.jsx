import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPizza = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);

        if (!res.ok) {
          throw new Error("Error al cargar la pizza");
        }

        const data = await res.json();
        setPizza(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getPizza();
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;
  if (!pizza) return <p>No se encontró la pizza.</p>;

  return (
    <div>
      <h1>{pizza.name}</h1>
      <img src={pizza.img} alt={pizza.name} />
      <p>{pizza.desc}</p>
      <p>${pizza.price}</p>
    </div>
  );
};

export default Pizza;
