import {
  Globe,
  PlayCircle,
  MessageSquare,
  Twitter,
  Youtube,
  Share2,
  Rocket,
} from "lucide-react";

const PageContent = () => {
  const socialLinks = [
    {
      icon: Rocket,
      label: "Web App",
      href: "https://app.iseekaigo.com/",
      color: "bg-blue-500",
    },
    {
      icon: MessageSquare,
      label: "Discord",
      href: "https://discord.gg/hpmEhtCbRY",
      color: "bg-indigo-500",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://x.com/ISEEKAI_GO",
      color: "bg-sky-500",
    },
    {
      icon: Youtube,
      label: "YouTube",
      href: "https://www.youtube.com/@ISEEKAIGO-h6g",
      color: "bg-red-500",
    },
    {
      icon: Share2,
      label: "TikTok",
      href: "https://www.tiktok.com/@iseekaigo",
      color: "bg-pink-500",
    },
  ];

  const violetai_socialLinks = [
    {
      icon: Globe,
      label: "Web App",
      href: "http://violetai.iseekaigo.com/",
      color: "bg-blue-500",
    },
    {
      icon: Globe,
      label: "White Paper",
      href: "https://violetai-whitepaper.iseekaigo.com/",
      color: "bg-blue-500",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://x.com/VioletAi_chan",
      color: "bg-sky-500",
    },
  ];

  return (
    <>
      <div className="min-h-screen p-6 bg-gradient-to-b from-blue-50 to-yellow-50">
        <div className="max-w-md mx-auto space-y-8 animate-fade-in">
          {/* Logo Section */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-32 h-32 overflow-hidden rounded-full bg-white shadow-xl animate-slide-up">
              <img
                src="/ISEEKAIGO-ANIMATED-LOGO-v2.gif"
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-2xl font-semibold text-gray-800 animate-text-focus">
              ISEEKAIGO OFFICIAL LINKS
            </h1>
            {/* Animated Tagline */}
            <div className="text-center pt-2">
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-600 bg-[length:200%_200%] animate-gradient-move font-semibold inline-block">
                #Connecting Web2 to Web3:
              </p>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-600 bg-[length:200%_200%] animate-gradient-move font-semibold inline-block">
                Explore a New Era with AI and AR Adventures
              </p>
            </div>
          </div>

          {/* ISEEKAIGO Social Links */}
          <div className="space-y-4">
            {socialLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative w-full flex items-center justify-center p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`absolute inset-0 ${link.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}
                />
                <link.icon className="w-5 h-5 mr-3 text-gray-700" />
                <span className="text-gray-800 font-medium">{link.label}</span>
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-32 h-32 overflow-hidden rounded-full bg-white shadow-xl animate-slide-up">
              <img
                src="/violetai.jpg"
                alt="violetai Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-2xl font-semibold text-gray-800 animate-text-focus">
              Get $VioletAI
            </h1>
            {/* Animated Tagline */}
            <div className="text-center pt-2">
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-600 bg-[length:200%_200%] animate-gradient-move font-semibold inline-block">
                The Violet AI token ($VioletAI) is a official fan-driven
                cryptocurrency, the flagship UR (ultra rare) NFT AI character of
                the Iseekaigo universe
              </p>
            </div>
          </div>

          {/* ISEEKAIGO Social Links */}
          <div className="space-y-4">
            {violetai_socialLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative w-full flex items-center justify-center p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`absolute inset-0 ${link.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}
                />
                <link.icon className="w-5 h-5 mr-3 text-gray-700" />
                <span className="text-gray-800 font-medium">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PageContent;
