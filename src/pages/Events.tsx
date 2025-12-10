import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { mockEvents } from "@/data/mockEvents";
import { Search, Filter, MapPin } from "lucide-react";

const difficulties = [
  { value: 'all', label: 'Tümü' },
  { value: 'easy', label: 'Kolay' },
  { value: 'moderate', label: 'Orta' },
  { value: 'challenging', label: 'Zorlu' },
];

const cities = ['Tümü', 'İstanbul', 'Ankara', 'İzmir', 'Bursa'];

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedCity, setSelectedCity] = useState('Tümü');

  const filteredEvents = mockEvents.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.topics.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesDifficulty = selectedDifficulty === 'all' || event.difficulty === selectedDifficulty;
    
    const matchesCity = selectedCity === 'Tümü' || event.location.includes(selectedCity);
    
    return matchesSearch && matchesDifficulty && matchesCity;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-display text-3xl sm:text-4xl font-bold mb-2">
              Yürüyüş Etkinlikleri
            </h1>
            <p className="text-muted-foreground">
              {filteredEvents.length} etkinlik bulundu
            </p>
          </div>
          
          {/* Filters */}
          <div className="bg-card rounded-2xl p-4 sm:p-6 shadow-sm mb-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  placeholder="Etkinlik veya konu ara..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm font-medium">Filtrele:</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground font-medium">Zorluk</p>
                <div className="flex flex-wrap gap-2">
                  {difficulties.map((diff) => (
                    <Badge 
                      key={diff.value}
                      variant={selectedDifficulty === diff.value ? "default" : "outline"}
                      className="cursor-pointer hover:bg-primary/10 transition-colors"
                      onClick={() => setSelectedDifficulty(diff.value)}
                    >
                      {diff.label}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground font-medium flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> Şehir
                </p>
                <div className="flex flex-wrap gap-2">
                  {cities.map((city) => (
                    <Badge 
                      key={city}
                      variant={selectedCity === city ? "default" : "outline"}
                      className="cursor-pointer hover:bg-primary/10 transition-colors"
                      onClick={() => setSelectedCity(city)}
                    >
                      {city}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Events Grid */}
          {filteredEvents.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event, index) => (
                <div 
                  key={event.id}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground mb-4">
                Arama kriterlerine uygun etkinlik bulunamadı.
              </p>
              <Button variant="outline" onClick={() => {
                setSearchTerm('');
                setSelectedDifficulty('all');
                setSelectedCity('Tümü');
              }}>
                Filtreleri Temizle
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
