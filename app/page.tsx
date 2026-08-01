import { SiteHeader, Hero } from '@/components/sales/hero'
import { OpeningHook, PromiseBanner, FounderStory } from '@/components/sales/story'
import { ProductReveal, SystemTimeline, WhatsInside } from '@/components/sales/product'
import { WhoThisIsFor, Testimonials, Comparison } from '@/components/sales/audience'
import { Pricing, Guarantee, FAQ, Closing, SiteFooter } from '@/components/sales/offer'
import { StickyNav } from '@/components/sales/sticky-nav'
import { MobileCta } from '@/components/sales/cta-button'

export default function Page(){return <div className="min-h-screen bg-background"><SiteHeader/><StickyNav/><main><Hero/><OpeningHook/><PromiseBanner/><FounderStory/><ProductReveal/><SystemTimeline/><WhatsInside/><WhoThisIsFor/><Testimonials/><Comparison/><Pricing/><Guarantee/><FAQ/><Closing/></main><SiteFooter/><MobileCta/></div>}
