import { useState } from 'react';
import { Paw, Heart, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const dogBreeds = [
  { name: 'Labrador Retriever', description: 'Friendly and outgoing' },
  { name: 'German Shepherd', description: 'Intelligent and versatile' },
  { name: 'Golden Retriever', description: 'Loyal and gentle' },
  { name: 'Bulldog', description: 'Calm and courageous' },
];

const Index = () => {
  const [selectedBreed, setSelectedBreed] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to the World of Dogs</h1>
        <p className="text-xl text-gray-600">Discover the joy and companionship of man's best friend</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Paw className="mr-2" /> Loyalty
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Dogs are known for their unwavering loyalty to their human companions.</CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Heart className="mr-2" /> Affection
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Dogs provide unconditional love and affection to their families.</CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2" /> Companionship
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Dogs offer constant companionship and reduce feelings of loneliness.</CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="mr-2" /> Health Benefits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Owning a dog can lead to improved physical and mental health.</CardDescription>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Popular Dog Breeds</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {dogBreeds.map((breed) => (
            <Button
              key={breed.name}
              variant={selectedBreed === breed ? "secondary" : "outline"}
              className="h-auto py-4"
              onClick={() => setSelectedBreed(breed)}
            >
              {breed.name}
            </Button>
          ))}
        </div>
        {selectedBreed && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>{selectedBreed.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{selectedBreed.description}</CardDescription>
            </CardContent>
          </Card>
        )}
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-6">Ready to Welcome a Furry Friend?</h2>
        <p className="mb-6">Adopting a dog can bring joy, love, and companionship to your life.</p>
        <Button size="lg">Find a Dog to Adopt</Button>
      </section>
    </div>
  );
};

export default Index;
