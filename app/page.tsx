import { SiteHeader, Hero } from '@/components/sales/hero'
import { OpeningHook, PromiseBanner, FounderStory } from '@/components/sales/story'
import { ProductReveal, SystemTimeline, WhatsInside } from '@/components/sales/product'
import { WhoThisIsFor, Testimonials, Comparison } from '@/components/sales/audience'
import { Bonuses, Pricing, Guarantee, FAQ, Closing, SiteFooter } from '@/components/sales/offer'
import { StickyNav } from '@/components/sales/sticky-nav'
import { MobileCta } from '@/components/sales/cta-button'
import { CrossSell } from '@/components/sales/cross-sell'
import { ExitIntent } from '@/components/sales/exit-intent'

export default function Page(){return <div className="min-h-screen bg-background"><SiteHeader/><StickyNav/><main><Hero/><OpeningHook/><PromiseBanner/><FounderStory/><ProductReveal/><SystemTimeline/><WhatsInside/><WhoThisIsFor/><Testimonials/><Comparison/><CrossSell/><Bonuses/><Pricing/><Guarantee/><FAQ/><Closing/></main><SiteFooter/><MobileCta/><ExitIntent/></div>}
