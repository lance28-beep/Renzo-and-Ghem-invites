"use client"

import { useState } from "react"
import Image from "next/image"
import { Section } from "@/components/section"
import { Smartphone, Building2, CreditCard } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"

const paymentMethods = [
  {
    id: "bpi",
    label: "BPI Bank",
    description: "Bank transfer via BPI",
    accent: "from-[#E21836] to-[#C4122E]",
    Icon: Building2,
    qrSrc: "/QR/BPI.png",
  },
  {
    id: "gcash",
    label: "GCash",
    description: "Mobile payment via GCash",
    accent: "from-[#007BFF] to-[#0056B3]",
    Icon: Smartphone,
    qrSrc: "/QR/Gcash.png",
  },
  {
    id: "maya",
    label: "Maya",
    description: "Mobile payment via Maya",
    accent: "from-[#00A859] to-[#008A4A]",
    Icon: CreditCard,
    qrSrc: "/QR/MAYA.png",
  },
] as const

type PaymentMethodId = (typeof paymentMethods)[number]["id"]

export function Registry() {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethodId>("bpi")
  const selectedPaymentMethod = paymentMethods.find((method) => method.id === selectedMethod) || paymentMethods[0]
  return (
    <Section
      id="registry"
      className="relative overflow-hidden py-10 sm:py-12 md:py-16 lg:py-20"
    >
      {/* Top-left corner decoration */}
      <div className="absolute top-0 left-0 z-10 pointer-events-none m-0 p-0">
        <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[24rem] xl:h-[24rem] m-0 p-0">
          <Image
            src="/decoration/top-left-corner.png"
            alt=""
            fill
            className="object-contain object-top-left"
            priority={false}
            style={{ 
              filter: 'brightness(0) saturate(100%) invert(84%) sepia(28%) saturate(557%) hue-rotate(342deg) brightness(100%) contrast(88%)',
              objectPosition: 'top left'
            }}
          />
        </div>
      </div>

      {/* Top-right corner decoration */}
      <div className="absolute top-0 right-0 z-10 pointer-events-none m-0 p-0">
        <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[24rem] xl:h-[24rem] m-0 p-0">
          <Image
            src="/decoration/right-bottom-corner.png"
            alt=""
            fill
            className="object-contain object-top-right"
            priority={false}
            style={{ 
              filter: 'brightness(0) saturate(100%) invert(84%) sepia(28%) saturate(557%) hue-rotate(342deg) brightness(100%) contrast(88%)',
              objectPosition: 'top right',
              transform: 'scaleY(-1)'
            }}
          />
        </div>
      </div>

      <div className="relative z-10 text-center mb-6 sm:mb-8 md:mb-10 px-3 sm:px-4">
        {/* Decorative element above title */}
        <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
          <div className="w-8 sm:w-12 md:w-16 h-px bg-[#E1C49C]/25" />
          <div className="w-1.5 h-1.5 bg-gradient-to-br from-[#A58169] to-[#751A23] rounded-full shadow-[0_0_12px_rgba(165,129,105,0.9)]" />
          <div className="w-8 sm:w-12 md:w-16 h-px bg-[#E1C49C]/25" />
        </div>
        
        <h2 className="style-script-regular text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#E1C49C] mb-2 sm:mb-3 md:mb-4 drop-shadow-lg">
          Gift Guide
        </h2>
        
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#E1C49C]/95 font-light max-w-2xl mx-auto leading-relaxed px-2">
          With all that we have we are truly blessed. Your Presence and prayer are that we request, but if you are thinking of giving a gift, to help us on our way a monetary or if you prefer to purchase a gift, feel free to surprise as on your on way.
        </p>
        
        {/* Decorative element below subtitle */}
        <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
          <div className="w-8 sm:w-12 md:w-16 h-px bg-[#E1C49C]/25" />
          <div className="w-1.5 h-1.5 bg-gradient-to-br from-[#A58169] to-[#751A23] rounded-full shadow-[0_0_12px_rgba(165,129,105,0.9)]" />
          <div className="w-8 sm:w-12 md:w-16 h-px bg-[#E1C49C]/25" />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        {/* Payment Method Toggle */}
        <div className="mb-6 sm:mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 p-1.5 bg-white/10 backdrop-blur-sm border border-[#E1C49C]/30 rounded-full shadow-lg">
            {paymentMethods.map((method) => {
              const Icon = method.Icon
              const isSelected = selectedMethod === method.id
              return (
                <button
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`relative px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${
                    isSelected
                      ? "bg-[#E1C49C] text-[#51080F] shadow-md"
                      : "text-[#E1C49C]/80 hover:text-[#E1C49C] hover:bg-[#E1C49C]/10"
                  }`}
                >
                  <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${isSelected ? "text-[#51080F]" : "text-[#E1C49C]"}`} />
                  <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">{method.label}</span>
                  {isSelected && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-[#E1C49C] rounded-full -z-10"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* QR Code Display */}
        <div className="relative bg-[#F4F4F4]/95 backdrop-blur-md border border-[#B9AACB]/60 rounded-lg sm:rounded-xl md:rounded-2xl shadow-[0_20px_60px_rgba(106,79,130,0.3)] p-4 sm:p-6 md:p-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#B9AACB]/20 via-transparent to-[#6A4F82]/10 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedMethod}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 flex flex-col items-center"
            >
              <div className="relative bg-white/95 rounded-xl sm:rounded-2xl border-2 border-dashed border-[#B9AACB]/40 p-5 sm:p-6 md:p-8 text-center shadow-[0_6px_24px_rgba(106,79,130,0.15)] w-full max-w-md mx-auto">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F4F4F4] px-4 py-1.5 rounded-full shadow-sm border-2 border-[#B9AACB]/50 text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#6A4F82] uppercase">
                  {selectedPaymentMethod.label}
                </div>
                <div className="flex flex-col items-center gap-4 w-full mt-4">
                  <div className="w-56 h-56 sm:w-64 sm:h-64 border-2 border-dashed border-[#B9AACB]/40 rounded-xl sm:rounded-2xl flex items-center justify-center bg-white relative overflow-hidden">
                    <Image
                      src={selectedPaymentMethod.qrSrc}
                      alt={`${selectedPaymentMethod.label} QR code`}
                      fill
                      sizes="256px"
                      className="object-contain p-4"
                    />
                  </div>
                  <p className="text-sm sm:text-base text-[#6A4F82] max-w-md">
                    Scan the QR code to make a {selectedPaymentMethod.id === "bpi" ? "bank transfer" : "mobile payment"}.
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-xs sm:text-sm text-[#E1C49C]/95 italic">
            Thank you from the bottom of our hearts.
          </p>
        </div>
      </div>
    </Section>
  )
}
