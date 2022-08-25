import { Outlet } from 'react-router-dom';
import { NavBar } from "../Components/NavBar";


export function Layout() {
  return (
    <div>
     <NavBar /> 

      <section>
        <Outlet />
      </section>
    
    </div>
  );
}