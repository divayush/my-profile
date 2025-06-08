import { motion } from "framer-motion";
import SocialCard from "@/components/social-card";
import { Github, MessageCircle, Send, Instagram, Sparkles, Zap, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  {
    platform: "GitHub",
    username: "divayush",
    url: "https://github.com/divayush",
    description: "Code repositories & projects",
    icon: Github,
    gradient: "from-gray-800 to-gray-900",
    delay: 0.1,
  },
  {
    platform: "Discord",
    username: "@chief_ayush08",
    description: "Direct messaging",
    icon: MessageCircle,
    gradient: "from-indigo-600 to-purple-600",
    delay: 0.2,
    copyable: false,
    url: "https://discord.com/users/706788138692903014",
  },
  {
    platform: "Telegram",
    username: "@CHIEFAYUSH",
    url: "https://t.me/CHIEFAYUSH",
    description: "Direct messaging",
    icon: Send,
    gradient: "from-blue-500 to-cyan-500",
    delay: 0.3,
  },
  {
    platform: "Instagram",
    username: "@ay.ayush1",
    url: "https://www.instagram.com/ay.ayush1?igsh=MTk3aWI1dTdtc2s1dg==",
    description: "Photos & stories",
    icon: Instagram,
    gradient: "from-pink-500 to-orange-500",
    delay: 0.4,
  },
];

export default function SocialLinksSection() {
  const { toast } = useToast();

  const handleCopyDiscord = async () => {
    try {
      await navigator.clipboard.writeText("706788138692903014");
      toast({
        title: "Discord ID copied!",
        description: "Discord ID has been copied to your clipboard.",
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please copy the Discord ID manually.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="links" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-8 px-6 py-3 glass-effect rounded-full"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-white/80 font-medium">Let's Connect</span>
            <Sparkles className="w-5 h-5 text-pink-400" />
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-black mb-8 gradient-text leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Find Me Everywhere
          </motion.h2>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Ready to collaborate? I'm active across multiple platforms. Choose your favorite and let's start building something incredible together.
          </motion.p>
        </motion.div>

        {/* Social Cards Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((social, index) => (
            <SocialCard
              key={social.platform}
              {...social}
              onClick={social.copyable ? handleCopyDiscord : undefined}
            />
          ))}
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="modern-card rounded-3xl p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background decorative elements */}
            <motion.div
              className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            
            <motion.div
              className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-cyan-500/20 to-blue-500/20 rounded-full blur-lg"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative z-10">
              <motion.h3
                className="text-3xl md:text-4xl font-bold mb-6 gradient-text"
                whileInView={{ scale: [0.9, 1] }}
                transition={{ duration: 0.5 }}
              >
                Ready to Build Together?
              </motion.h3>
              
              <motion.p
                className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                I'm always excited about new projects, collaborations, and opportunities. Whether you have an idea, need help with development, or just want to chat about technology.
              </motion.p>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <motion.div
                  className="flex flex-col items-center p-6 modern-card rounded-2xl group"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                  >
                    <Zap className="w-8 h-8 text-white" />
                  </motion.div>
                  <h4 className="font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Quick Response</h4>
                  <p className="text-gray-400 text-sm text-center">I typically respond within 24 hours</p>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center p-6 modern-card rounded-2xl group"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                  >
                    <Github className="w-8 h-8 text-white" />
                  </motion.div>
                  <h4 className="font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Open Source</h4>
                  <p className="text-gray-400 text-sm text-center">Love contributing to open projects</p>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center p-6 modern-card rounded-2xl group"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-pink-500/25 transition-all duration-300"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                  >
                    <Heart className="w-8 h-8 text-white" />
                  </motion.div>
                  <h4 className="font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">Passionate</h4>
                  <p className="text-gray-400 text-sm text-center">Dedicated to creating amazing experiences</p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
