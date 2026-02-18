import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Sparkles, Laugh, PartyPopper, Search, Upload, User } from 'lucide-react';

function App() {
  const [jokeIndex, setJokeIndex] = useState(0);
  const [showPunchline, setShowPunchline] = useState(false);

  const jokes = [
    {
      setup: "Why did your mom bring a ladder to the bar?",
      punchline: "Because she heard the drinks were on the house!"
    },
    {
      setup: "Your mom is so sweet...",
      punchline: "...she makes honey jealous!"
    },
    {
      setup: "Your mom is so cool...",
      punchline: "...she makes ice cubes look warm!"
    },
    {
      setup: "Your mom is so smart...",
      punchline: "...she makes Einstein look like he's still in kindergarten!"
    },
    {
      setup: "Your mom is so talented...",
      punchline: "...she can make a website about herself and it's actually awesome!"
    }
  ];

  const handleJokeClick = () => {
    if (showPunchline) {
      setJokeIndex((prev) => (prev + 1) % jokes.length);
      setShowPunchline(false);
    } else {
      setShowPunchline(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Banner Image */}
      <div className="w-full h-32 md:h-40 overflow-hidden">
        <img 
          src="/assets/generated/excited-mom-thumbs-up-banner.dim_1600x400.png" 
          alt="Excited mom giving thumbs up"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Header - Early 2010s YouTube style */}
      <header className="bg-card border-b-2 border-border shadow-sm">
        <div className="container mx-auto px-3 py-2">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 flex-1">
              <h1 className="text-lg md:text-xl font-bold heading-gloss whitespace-nowrap">
                your_mom's_website
              </h1>
            </div>
            
            {/* Faux search bar - 2010s YouTube style */}
            <div className="hidden md:flex items-center flex-1 max-w-md">
              <div className="flex w-full border border-border rounded-sm overflow-hidden bg-background/50">
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="flex-1 px-2 py-1 text-sm bg-transparent outline-none"
                  disabled
                />
                <button className="px-3 py-1 bg-muted border-l border-border">
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {/* Faux action buttons */}
            <div className="flex items-center gap-1 md:gap-2">
              <Button variant="ghost" size="sm" className="hidden sm:flex gap-1 text-xs">
                <Upload className="w-3 h-3" />
                <span className="hidden md:inline">Upload</span>
              </Button>
              <Button variant="ghost" size="sm" className="gap-1 text-xs">
                <User className="w-3 h-3" />
                <span className="hidden md:inline">Account</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-6 md:py-8">
        {/* Hero Section */}
        <section className="text-center mb-8 md:mb-10">
          <div className="inline-block mb-4 relative">
            <img 
              src="/assets/generated/goofy-mascot.dim_768x768.png" 
              alt="Goofy mascot character"
              className="w-24 h-24 md:w-32 md:h-32 object-contain mx-auto"
            />
          </div>
          
          <p className="text-base md:text-lg mb-4 max-w-2xl mx-auto">
            The most wholesome corner of the internet, dedicated to celebrating the amazing person who brought you into this world.
          </p>

          <div className="flex flex-wrap gap-2 justify-center mb-6">
            <Badge variant="secondary" className="text-sm px-3 py-1">
              <Laugh className="w-3 h-3 mr-1" />
              100% Wholesome
            </Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              <Heart className="w-3 h-3 mr-1" />
              Mom Approved
            </Badge>
          </div>
        </section>

        {/* Joke Card Section */}
        <section className="max-w-3xl mx-auto mb-8">
          <Card className="border shadow-md">
            <CardHeader className="text-center pb-3">
              <CardTitle className="text-xl md:text-2xl flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" />
                Daily Mom Joke
                <Sparkles className="w-5 h-5" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted/30 rounded border border-border p-4 md:p-6 min-h-[100px] flex items-center justify-center">
                <p className="text-base md:text-lg text-center font-medium">
                  {jokes[jokeIndex].setup}
                </p>
              </div>

              {showPunchline && (
                <div className="bg-primary/20 rounded border-2 border-primary/40 p-4 md:p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <p className="text-base md:text-lg text-center font-bold">
                    {jokes[jokeIndex].punchline}
                  </p>
                </div>
              )}

              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  onClick={handleJokeClick}
                  className="text-base px-6 py-5 font-bold"
                >
                  {showPunchline ? (
                    <>
                      <PartyPopper className="w-4 h-4 mr-2" />
                      Next Joke
                    </>
                  ) : (
                    <>
                      <Laugh className="w-4 h-4 mr-2" />
                      Show Punchline
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Badge Section */}
        <section className="max-w-2xl mx-auto text-center">
          <div className="bg-card border border-border rounded p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-3">Official Certification</h3>
            <p className="mb-4 text-sm md:text-base">
              This website has been officially certified as silly by the International Bureau of Internet Nonsense.
            </p>
            <div className="flex justify-center">
              <img 
                src="/assets/generated/certified-silly-badge.dim_512x512.png" 
                alt="Certified silly badge"
                className="w-28 h-28 md:w-32 md:h-32 object-contain"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-auto">
        <div className="container mx-auto px-4 py-4 text-center text-xs md:text-sm">
          <p className="flex items-center justify-center gap-2 flex-wrap mb-2">
            <span className="flex items-center gap-1">
              Built with <Heart className="w-3 h-3 fill-current" /> using{' '}
              <a 
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'unknown-app')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-80 transition-opacity"
              >
                caffeine.ai
              </a>
            </span>
          </p>
          <p className="text-footer">
            <span className="block sm:inline">Joke manufacturing by moms_of_ momland.inc</span>
            <span className="hidden sm:inline mx-2">•</span>
            <span className="block sm:inline">© {new Date().getFullYear()} All jokes reserved</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
