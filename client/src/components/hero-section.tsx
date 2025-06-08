import { motion } from "framer-motion";
import { Github, Sparkles, MessageCircle, Send, Instagram } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="text-center max-w-5xl mx-auto relative z-10">
        {/* Floating decorative elements */}
        <motion.div
          className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-bl from-cyan-500/20 to-blue-500/20 rounded-full blur-lg"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        {/* Profile Avatar */}
        <motion.div
          className="mb-12 relative"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="w-40 h-40 mx-auto rounded-full glass-effect p-2 relative group"
            animate={{
              boxShadow: [
                "0 0 40px var(--portfolio-accent-purple)",
                "0 0 60px var(--portfolio-accent-pink)",
                "0 0 40px var(--portfolio-accent-purple)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-cyan-600/30 animate-pulse" />
              <Github className="w-16 h-16 text-white relative z-10" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: [-100, 300] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <motion.h1
            className="text-7xl md:text-9xl font-black mb-4 gradient-text leading-none"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            AYUSH
          </motion.h1>

          <motion.div
            className="flex items-center justify-center gap-3 text-2xl md:text-3xl text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Sparkles className="w-6 h-6 text-purple-400" />
            <span className="font-light">Developer & Creator</span>
            <Sparkles className="w-6 h-6 text-pink-400" />
          </motion.div>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          className="text-lg md:text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <div className="mb-6 font-medium">
            Building the future, one line of code at a time
          </div>
          <div className="text-base opacity-75 font-light">
            Passionate about creating innovative solutions through technology
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          <motion.button
            className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl font-bold text-white text-lg shadow-2xl overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px rgba(168, 85, 247, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById("links")?.scrollIntoView({ 
                behavior: "smooth" 
              });
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <span className="relative z-10 mr-2">Connect With Me</span>
            <motion.div
              className="relative z-10"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨
            </motion.div>
          </motion.button>

          <motion.div
            className="flex items-center gap-3 px-6 py-3 modern-card rounded-xl"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex -space-x-1">
              <motion.div 
                className="w-8 h-8 bg-[#333] rounded-full flex items-center justify-center shadow-lg border border-gray-700"
                whileHover={{ scale: 1.1, zIndex: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Github className="w-4 h-4 text-white" />
              </motion.div>

              <motion.div 
                className="w-8 h-8 bg-[#5865F2] rounded-full flex items-center justify-center shadow-lg border border-[#4752C4]"
                whileHover={{ scale: 1.1, zIndex: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0190 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
                </svg>
              </motion.div>

              <motion.div 
                className="w-8 h-8 bg-[#0088cc] rounded-full flex items-center justify-center shadow-lg border border-[#006699]"
                whileHover={{ scale: 1.1, zIndex: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Send className="w-4 h-4 text-white" />
              </motion.div>

              <motion.div 
                className="w-8 h-8 bg-gradient-to-r from-[#E4405F] via-[#F77737] to-[#FCAF45] rounded-full flex items-center justify-center shadow-lg border border-[#E4405F]"
                whileHover={{ scale: 1.1, zIndex: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Instagram className="w-4 h-4 text-white" />
              </motion.div>
            </div>
            <span className="text-white/70 text-xs">Available on 4+ platforms</span>
          </motion.div>
        </motion.div>

        

      </div>
    </section>
  );
}