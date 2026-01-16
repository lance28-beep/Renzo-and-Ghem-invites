"use client"
import { Section } from "@/components/section"
import { siteConfig } from "@/content/site"
import Stack from "@/components/stack"
import { motion } from "motion/react"
import { Cormorant_Garamond, Style_Script } from "next/font/google"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

const styleScript = Style_Script({
  subsets: ["latin"],
  weight: "400",
})


export function Narrative() {
  const { brideNickname, groomNickname } = siteConfig.couple
  const coupleDisplayName = `${groomNickname} and ${brideNickname}`

  return (
    <Section id="narrative" className="relative bg-[#51080F] py-10 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Background image */}
        <img
          src="/Details/new.jpeg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        {/* Overlay with #751A23 */}
        <div className="absolute inset-0 bg-[#751A23]/40" />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-8 sm:mb-10 md:mb-12 px-4">
        <div className="space-y-2 sm:space-y-3">
          <p
            className={`${cormorant.className} text-[0.7rem] sm:text-xs md:text-sm uppercase tracking-[0.28em] text-[#E1C49C]`}
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.75)" }}
          >
            The Journey of {coupleDisplayName}
          </p>
          <h2
            className={`${styleScript.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#E1C49C]`}
            style={{ textShadow: "0 4px 18px rgba(0,0,0,0.9)" }}
          >
            Our Love Story
          </h2>
        </div>

        <p className={`${cormorant.className} text-xs sm:text-sm md:text-base text-[#E1C49C]/95 font-light max-w-xl mx-auto leading-relaxed mt-3`}>
          A beautiful tale of how {coupleDisplayName} found each other and began their journey toward forever together.
        </p>

        <div className="flex items-center justify-center gap-2 mt-6">
          <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-[#751A23]/80 to-transparent" />
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-[#751A23]/80"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-[#751A23]/80 to-transparent" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">

        {/* Main Content - Centered Layout - Compact */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 items-center lg:items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Left Spacer */}
          <div className="hidden lg:block"></div>

          {/* Interactive Stack Component - Center - Smaller for mobile */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="scale-[0.75] sm:scale-90 md:scale-100">
                <Stack
                  randomRotation={true}
                  sensitivity={180}
                  sendToBackOnClick={false}
                  cardDimensions={{ width: 220, height: 260 }}
                  cardsData={[
                    { id: 1, img: "/mobile-background/couple (1).webp" },             
                    { id: 2, img: "/mobile-background/couple (2).webp" },
                    { id: 3, img: "/mobile-background/couple (3).webp" },      
                  ]}
                  animationConfig={{ stiffness: 260, damping: 20 }}
                />
              </div>

              <motion.p 
                className="text-center text-xs sm:text-sm md:text-base text-[#E1C49C]/90 mt-4 sm:mt-6 font-sans font-medium tracking-wide drop-shadow-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
              >
                ✨ Drag to explore our moments ✨
              </motion.p>
            </div>
          </div>

          {/* Right Spacer */}
          <div className="hidden lg:block"></div>
        </motion.div>

        {/* Story Text - Full Width Below - Compact for mobile */}
        <motion.div 
          className="mt-8 sm:mt-12 md:mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Text container - compact padding for mobile */}
          <div className="relative bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-[#E1C49C]/30">
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {siteConfig.narrative.split("\n\n").map((paragraph, index) => (
                <motion.div 
                  key={index} 
                  className="relative"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  {/* First paragraph with drop cap - smaller for mobile */}
                  {index === 0 ? (
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-[#E1C49C] text-pretty font-sans font-light pl-2 sm:pl-3 md:pl-4">
                      <span className="float-left text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#E1C49C] leading-none mr-1.5 sm:mr-2 mt-0.5 sm:mt-1 drop-shadow-md">
                        {paragraph.charAt(0)}
                      </span>
                      {paragraph.slice(1)}
                    </p>
                  ) : (
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-[#E1C49C]/90 text-pretty font-sans font-light pl-2 sm:pl-3 md:pl-4">
                      {paragraph}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div 
            className="mt-8 sm:mt-12 md:mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex justify-center">
              <motion.a
                href="#guest-list"
                className="w-full sm:w-auto px-6 sm:px-8 md:px-12 py-3.5 sm:py-4 md:py-5 bg-gradient-to-r from-[#51080F] via-[#51080F] to-[#751A23] text-[#E1C49C] font-sans font-bold text-sm sm:text-base md:text-lg lg:text-xl rounded-[1.5rem] sm:rounded-[2rem] transition-all duration-300 shadow-xl hover:shadow-2xl border-2 border-[#E1C49C]/30 hover:border-[#E1C49C]/50 flex items-center justify-center gap-2 sm:gap-3 tracking-wide uppercase"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                Join Our Celebration
                <svg 
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </div>
        </motion.div>

      </div>
    </Section>
  )
}