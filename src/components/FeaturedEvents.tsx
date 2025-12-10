import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import EventCard from "@/components/EventCard";
import { mockEvents } from "@/data/mockEvents";

const FeaturedEvents = () => {
  const featuredEvents = mockEvents.slice(0, 3);
  
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-2">
              Yaklaşan Etkinlikler
            </h2>
            <p className="text-muted-foreground">
              Girişimcilerle tanışmak için bir sonraki yürüyüşüne katıl
            </p>
          </div>
          <Link to="/events">
            <Button variant="outline">
              Tüm Etkinlikler
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredEvents.map((event, index) => (
            <div 
              key={event.id} 
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
