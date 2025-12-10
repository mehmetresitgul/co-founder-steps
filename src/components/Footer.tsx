import { Link } from "react-router-dom";
import { Footprints, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Footprints className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl">Co-Walk</span>
            </div>
            <p className="text-background/70 text-sm">
              Yürürken kurucu ortağını bul. Doğanın içinde network kur.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><Link to="/events" className="text-background/70 hover:text-background transition-colors text-sm">Etkinlikler</Link></li>
              <li><Link to="/create" className="text-background/70 hover:text-background transition-colors text-sm">Etkinlik Oluştur</Link></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors text-sm">Nasıl Çalışır?</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold mb-4">Şirket</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors text-sm">Hakkımızda</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors text-sm">İletişim</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold mb-4">Bizi Takip Edin</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/50 text-sm">
          © 2025 Co-Walk. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
