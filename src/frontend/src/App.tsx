import { useState, useMemo, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Sparkles, Laugh, PartyPopper, Search, Upload, User, ExternalLink, Home, Video, Star, TrendingUp } from 'lucide-react';
import { getRandomVideos, getRandomArticles } from '@/lib/momMedia';
import { useIosScrollIndicator } from '@/hooks/useIosScrollIndicator';
import { IosScrollIndicator } from '@/components/IosScrollIndicator';
import { HeaderClickNotice } from '@/components/HeaderClickNotice';
import { InitialLoadSpinner } from '@/components/InitialLoadSpinner';

function App() {
  const [jokeIndex, setJokeIndex] = useState(0);
  const [showPunchline, setShowPunchline] = useState(false);
  const [noticeMessage, setNoticeMessage] = useState<string | null>(null);
  const [showInitialSpinner, setShowInitialSpinner] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // iOS scroll indicator
  const scrollIndicator = useIosScrollIndicator(scrollContainerRef);

  // Randomize videos and articles on mount
  const randomVideos = useMemo(() => getRandomVideos(3), []);
  const randomArticles = useMemo(() => getRandomArticles(3), []);

  // Initial load spinner timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInitialSpinner(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

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

  const handleRickroll = () => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank', 'noopener,noreferrer');
  };

  const handleUploadClick = () => {
    setNoticeMessage("🎥 Upload feature coming soon! Your mom's cooking videos will be legendary!");
  };

  const handleAccountClick = () => {
    setNoticeMessage("👤 Account feature coming soon! You're already logged in as 'your_mom' 😄");
  };

  const handleVideosClick = () => {
    setNoticeMessage("📹 Videos section coming soon! More mom content on the way!");
  };

  const handleFeaturedClick = () => {
    setNoticeMessage("⭐ Featured section coming soon! Only the best mom content!");
  };

  const handlePopularClick = () => {
    setNoticeMessage("📈 Popular section coming soon! Trending mom wisdom!");
  };

  // Animated header letters
  const headerText = "your moms website";
  const letters = headerText.split('').map((char, index) => (
    <span
      key={index}
      className="letter-bounce"
      style={{
        animationDelay: `${index * 0.1}s`,
        display: 'inline-block',
        minWidth: char === ' ' ? '0.3em' : 'auto'
      }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));

  return (
    <div className="min-h-screen flex items-center justify-center bg-portal-outer p-0 md:p-4">
      {/* 480p Frame Container */}
      <div className="portal-frame w-full md:max-w-[854px] md:max-h-[600px] bg-background shadow-portal overflow-hidden flex flex-col">
        <div 
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto retro-scanlines relative"
        >
          {/* Initial Load Spinner */}
          <InitialLoadSpinner visible={showInitialSpinner} />

          {/* iOS Scroll Indicator */}
          <IosScrollIndicator
            visible={scrollIndicator.visible}
            thumbHeight={scrollIndicator.thumbHeight}
            thumbTop={scrollIndicator.thumbTop}
          />

          {/* Header Click Notice */}
          {noticeMessage && (
            <HeaderClickNotice
              message={noticeMessage}
              onClose={() => setNoticeMessage(null)}
            />
          )}

          {/* Banner Image */}
          <div className="w-full h-24 overflow-hidden border-b-2 border-portal-divider">
            <img 
              src="/assets/generated/excited-mom-thumbs-up-banner.dim_1600x400.png" 
              alt="Excited mom giving thumbs up"
              className="w-full h-full object-cover object-center retro-pixelated"
            />
          </div>

          {/* Header - Multi-row 2005-2012 portal style */}
          <header className="bg-portal-header border-b-2 border-portal-divider glass-surface">
            {/* Top row - Logo and search */}
            <div className="px-2 py-1.5 border-b border-portal-divider/50">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <h1 className="text-base font-bold heading-gloss heading-display whitespace-nowrap inline-flex" style={{ lineHeight: '1.3' }}>
                    {letters}
                  </h1>
                </div>
                
                {/* Faux search bar */}
                <div className="hidden sm:flex items-center flex-1 max-w-[280px]">
                  <div className="flex w-full border-2 border-portal-divider rounded-none overflow-hidden bg-portal-input glass-inset">
                    <input 
                      type="text" 
                      placeholder="Search" 
                      className="flex-1 px-2 py-0.5 text-xs bg-transparent outline-none"
                      disabled
                    />
                    <button className="px-2 py-0.5 bg-portal-button border-l-2 border-portal-divider hover:bg-portal-button-hover glass-button">
                      <Search className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                
                {/* Action buttons */}
                <div className="flex items-center gap-1">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-6 px-2 text-[10px] hidden sm:flex gap-1 glass-button"
                    onClick={handleUploadClick}
                  >
                    <Upload className="w-3 h-3" />
                    Upload
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-6 px-2 text-[10px] gap-1 glass-button"
                    onClick={handleAccountClick}
                  >
                    <User className="w-3 h-3" />
                    <span className="hidden sm:inline">Account</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Bottom row - Navigation tabs */}
            <div className="px-2 py-1 bg-portal-nav glass-nav">
              <div className="flex items-center gap-1 text-[10px] font-bold">
                <button className="px-2 py-0.5 bg-portal-tab-active border border-portal-divider rounded-none flex items-center gap-1 glass-tab-active">
                  <Home className="w-3 h-3" />
                  Home
                </button>
                <button 
                  className="px-2 py-0.5 hover:bg-portal-tab-hover border border-transparent flex items-center gap-1 glass-tab"
                  onClick={handleVideosClick}
                >
                  <Video className="w-3 h-3" />
                  Videos
                </button>
                <button 
                  className="px-2 py-0.5 hover:bg-portal-tab-hover border border-transparent flex items-center gap-1 glass-tab"
                  onClick={handleFeaturedClick}
                >
                  <Star className="w-3 h-3" />
                  Featured
                </button>
                <button 
                  className="px-2 py-0.5 hover:bg-portal-tab-hover border border-transparent hidden sm:flex items-center gap-1 glass-tab"
                  onClick={handlePopularClick}
                >
                  <TrendingUp className="w-3 h-3" />
                  Popular
                </button>
              </div>
            </div>
          </header>

          {/* Main Content with Sidebar Layout - Dense portal style */}
          <main className="p-2">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-2">
              {/* Main Content Column */}
              <div className="space-y-2">
                {/* Hero Module */}
                <div className="portal-module glass-module">
                  <div className="portal-module-header glass-module-header">
                    <h2 className="portal-module-title">Welcome!</h2>
                  </div>
                  <div className="portal-module-content">
                    <div className="flex items-start gap-2">
                      <img 
                        src="/assets/generated/goofy-mascot.dim_768x768.png" 
                        alt="Goofy mascot character"
                        className="w-16 h-16 object-contain retro-pixelated flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs leading-relaxed mb-2">
                          The most wholesome corner of the internet, dedicated to celebrating the{' '}
                          <span 
                            className="rickroll-link"
                            onClick={handleRickroll}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === 'Enter' && handleRickroll()}
                          >
                            amazing
                          </span>
                          {' '}person who brought you into this world.
                        </p>
                        <div className="flex flex-wrap gap-1">
                          <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4">
                            <Laugh className="w-2.5 h-2.5 mr-0.5" />
                            100% Wholesome
                          </Badge>
                          <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4">
                            <Heart className="w-2.5 h-2.5 mr-0.5" />
                            Mom Approved
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Joke Module */}
                <div className="portal-module glass-module">
                  <div className="portal-module-header glass-module-header">
                    <h2 className="portal-module-title flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Daily Mom Joke
                      <Sparkles className="w-3 h-3" />
                    </h2>
                  </div>
                  <div className="portal-module-content space-y-2">
                    <div className="bg-portal-inset border-2 border-portal-inset-border p-2 min-h-[60px] flex items-center justify-center glass-inset">
                      <p className="text-xs text-center font-medium leading-snug">
                        {jokes[jokeIndex].setup}
                      </p>
                    </div>

                    {showPunchline && (
                      <div className="bg-primary/20 border-2 border-primary/40 p-2 animate-in fade-in slide-in-from-bottom-2 duration-300 glass-highlight">
                        <p className="text-xs text-center font-bold leading-snug">
                          {jokes[jokeIndex].punchline}
                        </p>
                      </div>
                    )}

                    <div className="flex justify-center">
                      <Button 
                        size="sm" 
                        onClick={handleJokeClick}
                        className="text-xs px-3 py-1 h-7 font-bold"
                      >
                        {showPunchline ? (
                          <>
                            <PartyPopper className="w-3 h-3 mr-1" />
                            Next Joke
                          </>
                        ) : (
                          <>
                            <Laugh className="w-3 h-3 mr-1" />
                            Show Punchline
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Badge Module */}
                <div className="portal-module glass-module">
                  <div className="portal-module-header glass-module-header">
                    <h2 className="portal-module-title">Official Certification</h2>
                  </div>
                  <div className="portal-module-content text-center">
                    <p className="mb-2 text-[10px] leading-relaxed">
                      This website has been officially certified as silly by the International Bureau of Internet Nonsense.
                    </p>
                    <div className="flex justify-center">
                      <img 
                        src="/assets/generated/certified-silly-badge.dim_512x512.png" 
                        alt="Certified silly badge"
                        className="w-20 h-20 object-contain retro-pixelated"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar Column */}
              <div className="space-y-2">
                {/* Mom Videos Module */}
                <div className="portal-module glass-module">
                  <div className="portal-module-header glass-module-header">
                    <h2 className="portal-module-title">Mom's Kitchen</h2>
                  </div>
                  <div className="portal-module-content space-y-2">
                    {randomVideos.map((video, index) => (
                      <div key={index} className="border border-portal-divider bg-portal-inset glass-inset video-container">
                        <div className="aspect-video">
                          <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${video.id}`}
                            title={video.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="retro-pixelated"
                          />
                        </div>
                        <div className="p-1 bg-card border-t border-portal-divider">
                          <p className="text-[9px] font-medium leading-tight line-clamp-2">{video.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mom Articles Module */}
                <div className="portal-module glass-module">
                  <div className="portal-module-header glass-module-header">
                    <h2 className="portal-module-title">Mom's Wisdom</h2>
                  </div>
                  <div className="portal-module-content space-y-1.5">
                    {randomArticles.map((article, index) => (
                      <div key={index} className="p-1.5 bg-portal-inset border border-portal-inset-border glass-inset">
                        <h3 className="font-bold text-[10px] leading-tight mb-1">{article.title}</h3>
                        <p className="text-[9px] leading-snug mb-1 line-clamp-2">{article.snippet}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-[8px] text-muted-foreground">{article.source}</span>
                          <a
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[8px] flex items-center gap-0.5 hover:underline"
                          >
                            Read <ExternalLink className="w-2 h-2" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="border-t-2 border-portal-divider bg-portal-footer mt-2 glass-footer">
            <div className="px-2 py-2 text-center text-[9px]">
              <p className="flex items-center justify-center gap-1 flex-wrap mb-1">
                <span className="flex items-center gap-0.5">
                  Built with <Heart className="w-2.5 h-2.5 fill-current" /> using{' '}
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
              <p className="text-footer leading-tight">
                <span className="block sm:inline">Joke manufacturing by moms_of_momland.inc</span>
                <span className="hidden sm:inline mx-1">•</span>
                <span className="block sm:inline">© {new Date().getFullYear()} All jokes reserved</span>
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
