import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { mockEvents } from "@/data/mockEvents";
import { 
  MapPin, Calendar, Clock, Users, Route, ArrowLeft, 
  Share2, Heart, MessageCircle 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const difficultyColors = {
  easy: "success",
  moderate: "warm",
  challenging: "destructive",
} as const;

const difficultyLabels = {
  easy: "Kolay",
  moderate: "Orta",
  challenging: "Zorlu",
};

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isJoined, setIsJoined] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  
  const event = mockEvents.find(e => e.id === id);
  
  if (!event) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16 container mx-auto px-4">
          <div className="text-center py-16">
            <h1 className="text-2xl font-display font-bold mb-4">Etkinlik Bulunamadı</h1>
            <Link to="/events">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Etkinliklere Dön
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const spotsLeft = event.maxParticipants - event.currentParticipants;
  const formattedDate = new Date(event.date).toLocaleDateString('tr-TR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  
  const handleJoin = () => {
    setIsJoined(true);
    toast({
      title: "Etkinliğe katıldınız!",
      description: `"${event.title}" etkinliğine başarıyla kaydoldunuz.`,
    });
  };
  
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link kopyalandı!",
      description: "Etkinlik linki panoya kopyalandı.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back button */}
          <Link to="/events" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Etkinliklere Dön
          </Link>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Header image */}
              <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Route className="w-24 h-24 text-primary/30" />
                </div>
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge variant={difficultyColors[event.difficulty]}>
                    {difficultyLabels[event.difficulty]}
                  </Badge>
                  <Badge variant="muted">{event.distance}</Badge>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="bg-card/80 backdrop-blur-sm hover:bg-card"
                    onClick={() => setIsFavorite(!isFavorite)}
                  >
                    <Heart className={`w-5 h-5 ${isFavorite ? 'fill-secondary text-secondary' : ''}`} />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="bg-card/80 backdrop-blur-sm hover:bg-card"
                    onClick={handleShare}
                  >
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              
              {/* Event info */}
              <div>
                <h1 className="font-display text-2xl sm:text-3xl font-bold mb-4">
                  {event.title}
                </h1>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {event.description}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Konum</p>
                      <p className="font-medium">{event.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Tarih</p>
                      <p className="font-medium">{formattedDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Saat</p>
                      <p className="font-medium">{event.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Route className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Mesafe</p>
                      <p className="font-medium">{event.distance}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-display font-semibold">Konuşulacak Konular</h3>
                  <div className="flex flex-wrap gap-2">
                    {event.topics.map((topic) => (
                      <Badge key={topic} variant="success">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Join card */}
              <Card variant="elevated" className="sticky top-24">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="font-medium">
                        {event.currentParticipants}/{event.maxParticipants}
                      </span>
                    </div>
                    <span className={`text-sm ${spotsLeft <= 2 ? 'text-secondary font-medium' : 'text-muted-foreground'}`}>
                      {spotsLeft} yer kaldı
                    </span>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full gradient-primary transition-all duration-500"
                      style={{ width: `${(event.currentParticipants / event.maxParticipants) * 100}%` }}
                    />
                  </div>
                  
                  {isJoined ? (
                    <div className="space-y-3">
                      <Button variant="soft" size="lg" className="w-full" disabled>
                        Katılımınız Onaylandı ✓
                      </Button>
                      <Button variant="outline" size="lg" className="w-full">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Grup Sohbetine Katıl
                      </Button>
                    </div>
                  ) : (
                    <Button 
                      variant="hero" 
                      size="lg" 
                      className="w-full"
                      onClick={handleJoin}
                      disabled={spotsLeft === 0}
                    >
                      {spotsLeft === 0 ? 'Etkinlik Dolu' : 'Etkinliğe Katıl'}
                    </Button>
                  )}
                  
                  <p className="text-xs text-muted-foreground text-center">
                    Ücretsiz katılım • Kayıt iptal edilebilir
                  </p>
                </CardContent>
              </Card>
              
              {/* Host card */}
              <Card variant="default">
                <CardContent className="p-6">
                  <h3 className="font-display font-semibold mb-4">Etkinlik Düzenleyici</h3>
                  <div className="flex items-center gap-4">
                    <Avatar className="w-14 h-14">
                      <AvatarImage src={event.host.avatar} alt={event.host.name} />
                      <AvatarFallback>{event.host.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{event.host.name}</p>
                      <p className="text-sm text-muted-foreground">{event.host.expertise}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    Profili Görüntüle
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EventDetail;
