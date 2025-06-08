import { motion } from "framer-motion";
import { LucideIcon, ExternalLink, Copy, ArrowUpRight } from "lucide-react";

interface SocialCardProps {
  platform: string;
  username: string;
  url?: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  delay: number;
  copyable?: boolean;
  onClick?: () => void;
}

export default function SocialCard({
  platform,
  username,
  url,
  description,
  icon: Icon,
  gradient,
  delay,
  copyable = false,
  onClick,
}: SocialCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const isClickable = copyable || url;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      className={`modern-card rounded-3xl p-8 group relative overflow-hidden ${
        isClickable ? "cursor-pointer" : ""
      }`}
      whileHover={{
        scale: 1.02,
      }}
      whileTap={isClickable ? { scale: 0.98 } : {}}
      onClick={isClickable ? handleClick : undefined}
    >
      {/* Background gradient overlay */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
        initial={false}
      />
      
      {/* Glowing border effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ padding: "1px" }}
      >
        <div className="w-full h-full rounded-3xl bg-gray-900/90" />
      </motion.div>

      <div className="relative z-10 flex items-center space-x-6">
        <motion.div
          className={`w-20 h-20 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center text-white shadow-xl relative overflow-hidden`}
          whileHover={{ 
            scale: 1.1, 
            rotate: [0, -5, 5, 0],
            boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {platform === "Discord" ? (
            <svg className="w-10 h-10 relative z-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.211.375-.445.865-.608 1.249a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.249a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
          ) : (
            <Icon className="w-10 h-10 relative z-10" />
          )}
          
          {/* Icon background animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
            animate={{ 
              x: ["-100%", "100%"],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        </motion.div>
        
        <div className="flex-1">
          <motion.h3 
            className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-500"
            whileHover={{ x: 5 }}
          >
            {platform}
          </motion.h3>
          <motion.p 
            className="text-gray-300 text-base mb-2 font-medium"
            whileHover={{ x: 5 }}
            transition={{ delay: 0.1 }}
          >
            {username}
          </motion.p>
          <motion.p 
            className="text-gray-400 text-sm font-light"
            whileHover={{ x: 5 }}
            transition={{ delay: 0.15 }}
          >
            {description}
          </motion.p>
        </div>
        
        <motion.div
          className="text-gray-400 group-hover:text-white transition-colors duration-300 relative"
          whileHover={{ 
            scale: 1.2,
            rotate: copyable ? 0 : 45
          }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {copyable ? (
            <div className="relative">
              <Copy className="w-6 h-6" />
              <motion.div
                className="absolute -top-8 -left-2 text-xs bg-black/80 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ y: 10 }}
                whileHover={{ y: 0 }}
              >
                Copy
              </motion.div>
            </div>
          ) : (
            <div className="relative">
              <ArrowUpRight className="w-6 h-6" />
              <motion.div
                className="absolute -top-8 -left-2 text-xs bg-black/80 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ y: 10 }}
                whileHover={{ y: 0 }}
              >
                Visit
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Floating particles on hover */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100"
          style={{
            left: `${20 + i * 25}%`,
            top: `${30 + i * 15}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
}
