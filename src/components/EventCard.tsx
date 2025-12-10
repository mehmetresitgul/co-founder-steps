import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MapPin, Calendar, Clock, Users, Route } from "lucide-react";
import { WalkEvent } from "@/data/mockEvents";

interface EventCardProps {
  event: WalkEvent;
}

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

const EventCard = ({ event }: EventCardProps) => {
  const spotsLeft = event.maxParticipants - event.currentParticipants;
  const formattedDate = new Date(event.date).toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
  });

  return (
    <Card variant="elevated" className="overflow-hidden group">
      <div className="relative h-40 overflow-hidden bg-gradient-to-br from-primary/20 to-accent">
        <div className="absolute inset-0 flex items-center justify-center">
          <Route className="w-16 h-16 text-primary/30" />
        </div>
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge variant={difficultyColors[event.difficulty]}>
            {difficultyLabels[event.difficulty]}
          </Badge>
          <Badge variant="muted">{event.distance}</Badge>
        </div>
      </div>
      
      <CardContent className="pt-4 space-y-3">
        <h3 className="font-display font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors">
          {event.title}
        </h3>
        
        <p className="text-sm text-muted-foreground line-clamp-2">
          {event.description}
        </p>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="line-clamp-1">{event.location}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4 text-primary" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4 text-primary" />
              <span>{event.time}</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1.5">
          {event.topics.slice(0, 3).map((topic) => (
            <Badge key={topic} variant="outline" className="text-xs">
              {topic}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="flex items-center justify-between border-t border-border pt-4">
        <div className="flex items-center gap-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src={event.host.avatar} alt={event.host.name} />
            <AvatarFallback>{event.host.name[0]}</AvatarFallback>
          </Avatar>
          <div className="text-xs">
            <p className="font-medium">{event.host.name}</p>
            <p className="text-muted-foreground">{event.host.expertise}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-1 text-xs">
          <Users className="w-4 h-4 text-primary" />
          <span className={spotsLeft <= 2 ? "text-secondary font-medium" : "text-muted-foreground"}>
            {spotsLeft} yer kaldı
          </span>
        </div>
      </CardFooter>
      
      <div className="px-6 pb-4">
        <Link to={`/events/${event.id}`}>
          <Button variant="soft" size="sm" className="w-full">
            Detayları Gör
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default EventCard;
