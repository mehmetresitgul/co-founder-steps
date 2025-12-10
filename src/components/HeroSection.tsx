import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-walking.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>
      
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-accent rounded-full px-4 py-2 text-sm font-medium text-accent-foreground">
              <Sparkles className="w-4 h-4 text-secondary" />
              Girişimciler için yeni networking deneyimi
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">Yürürken</span>
              <br />
              <span className="text-gradient">Kurucu Ortağını</span>
              <br />
              <span className="text-foreground">Bul</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Co-Walk, girişimcileri yürüyüş etkinlikleri üzerinden bir araya getiren benzersiz bir platformdur. 
              Doğanın içinde, hareket halinde, en iyi fikirler doğar.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/events">
                <Button variant="hero" size="xl">
                  Etkinlikleri Keşfet
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Button>
              </Link>
              <Link to="/create">
                <Button variant="outline" size="xl">
                  Etkinlik Oluştur
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-3xl font-display font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Aktif Girişimci</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-3xl font-display font-bold text-foreground">120+</p>
                <p className="text-sm text-muted-foreground">Yürüyüş Etkinliği</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-3xl font-display font-bold text-foreground">45+</p>
                <p className="text-sm text-muted-foreground">Eşleşme</p>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-lg">
              <img 
                src={heroImage} 
                alt="Girişimciler yürüyüş yaparken" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            
            {/* Floating cards */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-lg animate-float" style={{ animationDelay: '-2s' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                  <span className="text-xl">🚶</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">Yeni Eşleşme!</p>
                  <p className="text-xs text-muted-foreground">AI & Fintech alanında</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-card p-3 rounded-xl shadow-lg animate-float" style={{ animationDelay: '-4s' }}>
              <p className="text-sm font-medium">⭐ 4.9 puan ortalama</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
