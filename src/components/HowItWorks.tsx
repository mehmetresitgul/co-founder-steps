import { Route, Users, MessageCircle, Handshake } from "lucide-react";

const steps = [
  {
    icon: Route,
    title: "Etkinlik Bul veya Oluştur",
    description: "İlgi alanlarına ve konumuna göre yürüyüş etkinliklerini keşfet veya kendi etkinliğini oluştur.",
  },
  {
    icon: Users,
    title: "Katılımcılarla Tanış",
    description: "Benzer vizyona sahip girişimcilerle etkinlik öncesi profilleri incele ve bağlantı kur.",
  },
  {
    icon: MessageCircle,
    title: "Yürürken Sohbet Et",
    description: "Doğanın içinde, hareket halinde en verimli sohbetleri gerçekleştir.",
  },
  {
    icon: Handshake,
    title: "Ortak Bul",
    description: "Eşleştiğin girişimcilerle iletişimde kal ve potansiyel ortaklıklar kur.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Nasıl Çalışır?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Co-Walk ile kurucu ortak bulmak dört basit adımda gerçekleşir
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.title} 
              className="relative group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] border-t-2 border-dashed border-primary/30" />
              )}
              
              <div className="relative bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-secondary text-secondary-foreground font-display font-bold text-sm flex items-center justify-center">
                  {index + 1}
                </div>
                
                <h3 className="font-display font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
