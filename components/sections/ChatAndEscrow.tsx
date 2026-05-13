import Image from 'next/image'
import { MessageCircle, ShieldCheck, CheckCircle2 } from 'lucide-react'
import { FadeIn } from '@/components/animations/FadeIn'

const chatFeatures = [
  'Negotiate rates directly with vendors in real-time',
  'AI-assisted pricing suggestions built in',
  'End-to-end encrypted conversations',
  'Rich media: share screenshots and documents',
]

const escrowFeatures = [
  'Funds held in regulated escrow until both parties confirm',
  'Automatic release on successful completion',
  'Dispute resolution with dedicated arbitrators',
  'Zero risk of payment fraud or chargeback abuse',
]

function FeatureBlock({
  icon: Icon,
  iconClass,
  eyebrow,
  heading,
  description,
  features,
  imageSrc,
  imageAlt,
  reverse = false,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>
  iconClass: string
  eyebrow: string
  heading: string
  description: string
  features: string[]
  imageSrc: string
  imageAlt: string
  reverse?: boolean
}) {
  return (
    <div
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-20`}
    >
      {/* Image */}
      <FadeIn
        direction={reverse ? 'right' : 'left'}
        className="w-full md:w-1/2 shrink-0"
        amount={0.2}
      >
        <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={600}
            height={420}
            className="w-full h-[320px] md:h-[380px] object-cover"
          />
          {/* Glass overlay badge */}
          <div className="absolute bottom-4 left-4 glass-dark rounded-xl px-4 py-3 flex items-center gap-3">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${iconClass}`}>
              <Icon size={16} className="text-white" />
            </div>
            <span className="text-xs font-semibold text-white">{eyebrow}</span>
          </div>
        </div>
      </FadeIn>

      {/* Content */}
      <FadeIn
        direction={reverse ? 'left' : 'right'}
        className="w-full md:w-1/2"
        delay={0.1}
        amount={0.2}
      >
        <p className="text-sm font-semibold text-hagull-500 uppercase tracking-widest mb-3 flex items-center gap-2">
          <Icon size={14} className="text-accent-500" />
          {eyebrow}
        </p>
        <h3 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight mb-4">
          {heading}
        </h3>
        <p className="text-base text-muted-foreground leading-relaxed mb-7">
          {description}
        </p>

        <ul className="space-y-3" role="list">
          {features.map((feat) => (
            <li key={feat} className="flex items-start gap-3 text-sm text-muted-foreground">
              <CheckCircle2 size={16} className="text-hagull-500 mt-0.5 shrink-0" />
              {feat}
            </li>
          ))}
        </ul>
      </FadeIn>
    </div>
  )
}

export default function ChatAndEscrow() {
  return (
    <section className="section-pad bg-teal-subtle" aria-labelledby="features-heading">
      <div className="container-fluid space-y-24">
        {/* Section label */}
        <FadeIn direction="up" className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-hagull-500 mb-3">
            Platform Features
          </p>
          <h2
            id="features-heading"
            className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight"
          >
            Everything you need to trade with confidence
          </h2>
        </FadeIn>

        {/* Live Chat Feature */}
        <FeatureBlock
          icon={MessageCircle}
          iconClass="bg-hagull-500"
          eyebrow="Live Chat System"
          heading="Negotiate directly. Trade smarter."
          description="Connect with vendors instantly through our built-in encrypted messaging system. Discuss rates, clarify terms, and reach agreements — all without ever leaving the platform."
          features={chatFeatures}
          imageSrc="/chat.jpg"
          imageAlt="Hagull live chat system screenshot"
        />

        {/* Escrow Feature */}
        <FeatureBlock
          icon={ShieldCheck}
          iconClass="bg-accent-500"
          eyebrow="Secure Escrow System"
          heading="Your funds are safe — always."
          description="Every trade on Hagull is protected by our institutional-grade escrow. Funds are only released when both parties confirm a successful exchange — eliminating fraud risk entirely."
          features={escrowFeatures}
          imageSrc="/escrow.jpg"
          imageAlt="Hagull escrow protection system screenshot"
          reverse
        />
      </div>
    </section>
  )
}
