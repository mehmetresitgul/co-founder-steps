import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 gradient-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
          Bir Sonraki Büyük Fikrin
          <br />
          Yürüyüş Yolunda Bekliyor
        </h2>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
          Hemen kayıt ol ve Türkiye'nin en dinamik girişimci topluluğuna katıl. 
          Kurucu ortağını bulmak hiç bu kadar doğal olmamıştı.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/events">
            <Button 
              size="xl" 
              className="bg-card text-foreground hover:bg-card/90 font-semibold"
            >
              Ücretsiz Başla
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          </Link>
          <Button 
            variant="outline" 
            size="xl"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
          >
            Daha Fazla Bilgi
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
