import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Footprints } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center transition-transform group-hover:scale-105">
            <Footprints className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-xl text-foreground">Co-Walk</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/events" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Etkinlikler
          </Link>
          <Link to="/create" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Etkinlik Oluştur
          </Link>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Nasıl Çalışır?
          </a>
        </div>
        
        <div className="flex items-center gap-3">
          <Link to="/auth">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              Giriş Yap
            </Button>
          </Link>
          <Link to="/auth">
            <Button variant="hero" size="sm">
              Kayıt Ol
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
