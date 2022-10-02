import { Link } from "react-router-dom";

export function Dashboard() {
  return(
    <div>
      <p>Dashboard</p>
        <Link to={"/entrar"}>Entrar</Link>
    </div>
  )
}