import { useUser } from "../context/UserContext";

const Profile = () => {
  const { email, logout } = useUser();

  return (
    <div>
      <h2>Perfil</h2>
      <p>Email: {email}</p>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
};

export default Profile;

