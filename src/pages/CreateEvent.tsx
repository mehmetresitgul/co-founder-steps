import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { CalendarDays, Clock, MapPin, Route, Users, X, Plus, Sparkles } from "lucide-react";

const topicSuggestions = [
  "Fintech", "AI", "SaaS", "E-ticaret", "Deep Tech", "EdTech", 
  "HealthTech", "Sustainability", "B2B Sales", "Growth Hacking",
  "Product-Market Fit", "Seed Funding", "Leadership", "Marketing"
];

const CreateEvent = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    date: '',
    time: '',
    distance: '',
    difficulty: 'easy',
    maxParticipants: 8,
  });
  
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [customTopic, setCustomTopic] = useState('');
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const toggleTopic = (topic: string) => {
    setSelectedTopics(prev => 
      prev.includes(topic) 
        ? prev.filter(t => t !== topic)
        : prev.length < 5 ? [...prev, topic] : prev
    );
  };
  
  const addCustomTopic = () => {
    if (customTopic.trim() && !selectedTopics.includes(customTopic.trim()) && selectedTopics.length < 5) {
      setSelectedTopics(prev => [...prev, customTopic.trim()]);
      setCustomTopic('');
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.location || !formData.date || !formData.time) {
      toast({
        title: "Eksik Bilgi",
        description: "Lütfen tüm zorunlu alanları doldurun.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Etkinlik Oluşturuldu!",
      description: `"${formData.title}" etkinliğiniz başarıyla oluşturuldu.`,
    });
    
    navigate('/events');
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-8">
            <h1 className="font-display text-3xl sm:text-4xl font-bold mb-2">
              Yeni Etkinlik Oluştur
            </h1>
            <p className="text-muted-foreground">
              Girişimcileri bir araya getiren bir yürüyüş planlayın
            </p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <Card variant="default" className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-secondary" />
                  Etkinlik Detayları
                </CardTitle>
                <CardDescription>
                  Etkinliğinizin temel bilgilerini girin
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Title */}
                <div className="space-y-2">
                  <Label htmlFor="title">Etkinlik Başlığı *</Label>
                  <Input 
                    id="title"
                    name="title"
                    placeholder="Örn: Boğaz Kıyısında Startup Sohbeti"
                    value={formData.title}
                    onChange={handleInputChange}
                  />
                </div>
                
                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Açıklama</Label>
                  <Textarea 
                    id="description"
                    name="description"
                    placeholder="Etkinliğinizi kısaca tanımlayın..."
                    rows={4}
                    value={formData.description}
                    onChange={handleInputChange}
                  />
                </div>
                
                {/* Location */}
                <div className="space-y-2">
                  <Label htmlFor="location" className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    Konum *
                  </Label>
                  <Input 
                    id="location"
                    name="location"
                    placeholder="Örn: Bebek Sahili, İstanbul"
                    value={formData.location}
                    onChange={handleInputChange}
                  />
                </div>
                
                {/* Date & Time */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="flex items-center gap-2">
                      <CalendarDays className="w-4 h-4 text-primary" />
                      Tarih *
                    </Label>
                    <Input 
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time" className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      Saat *
                    </Label>
                    <Input 
                      id="time"
                      name="time"
                      type="time"
                      value={formData.time}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                {/* Distance & Difficulty */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="distance" className="flex items-center gap-2">
                      <Route className="w-4 h-4 text-primary" />
                      Mesafe
                    </Label>
                    <Input 
                      id="distance"
                      name="distance"
                      placeholder="Örn: 5 km"
                      value={formData.distance}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="difficulty">Zorluk Seviyesi</Label>
                    <select
                      id="difficulty"
                      name="difficulty"
                      value={formData.difficulty}
                      onChange={handleInputChange}
                      className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="easy">Kolay</option>
                      <option value="moderate">Orta</option>
                      <option value="challenging">Zorlu</option>
                    </select>
                  </div>
                </div>
                
                {/* Max Participants */}
                <div className="space-y-2">
                  <Label htmlFor="maxParticipants" className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    Maksimum Katılımcı
                  </Label>
                  <Input 
                    id="maxParticipants"
                    name="maxParticipants"
                    type="number"
                    min="2"
                    max="20"
                    value={formData.maxParticipants}
                    onChange={handleInputChange}
                  />
                </div>
                
                {/* Topics */}
                <div className="space-y-3">
                  <Label>Konuşulacak Konular (max 5)</Label>
                  <div className="flex flex-wrap gap-2">
                    {topicSuggestions.map((topic) => (
                      <Badge 
                        key={topic}
                        variant={selectedTopics.includes(topic) ? "default" : "outline"}
                        className="cursor-pointer hover:bg-primary/10 transition-colors"
                        onClick={() => toggleTopic(topic)}
                      >
                        {topic}
                        {selectedTopics.includes(topic) && (
                          <X className="w-3 h-3 ml-1" />
                        )}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Özel konu ekle..."
                      value={customTopic}
                      onChange={(e) => setCustomTopic(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addCustomTopic())}
                    />
                    <Button 
                      type="button" 
                      variant="soft" 
                      size="icon"
                      onClick={addCustomTopic}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  {selectedTopics.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="text-sm text-muted-foreground">Seçili:</span>
                      {selectedTopics.map((topic) => (
                        <Badge key={topic} variant="success">
                          {topic}
                          <X 
                            className="w-3 h-3 ml-1 cursor-pointer" 
                            onClick={() => toggleTopic(topic)}
                          />
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-end gap-4 mt-6">
              <Button type="button" variant="ghost" onClick={() => navigate('/events')}>
                İptal
              </Button>
              <Button type="submit" variant="hero" size="lg">
                Etkinlik Oluştur
              </Button>
            </div>
          </form>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CreateEvent;
