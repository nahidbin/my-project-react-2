import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { path: "/", name: "Home", id: "home" },
    { path: "/about", name: "About", id: "about" },
    { path: "/contact", name: "Contact", id: "contact" },
    { path: "/products/:id", name: "Product Detail", id: "product-detail" },
    { path: "*", name: "Not Found", id: "not-found" },
  ];

  return (
    <nav className="text-black bg-yellow-200 p-6">
      <div className="md:hidden text-2xl " onClick={() => setOpen(!open)}>
        {
           open === true ? 
           <AiOutlineClose></AiOutlineClose> 
           :<AiOutlineMenu className=""></AiOutlineMenu>
        }
        
      </div>

      <ul className={`md:flex duration-1000 absolute md:static
      ${open ? 'top-20' :'-top-60'}
      px-6 bg-yellow-200 `}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
