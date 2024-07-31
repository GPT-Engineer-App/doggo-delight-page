import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { navItems } from "@/nav-items";

const Navbar = () => {
  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold">
            DogWorld
          </Link>
          <div className="flex space-x-4">
            {navItems.map((item) => (
              <Button key={item.to} variant="ghost" asChild>
                <Link to={item.to} className="flex items-center">
                  {item.icon}
                  <span className="ml-2">{item.title}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
