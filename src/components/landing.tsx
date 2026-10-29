import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { StatusDemo } from '@/components/status-demo'
import { APP_URL, BOT_URL, CONTENT, type Lang, NEXURA_URL } from '@/content'

const DESK = { width: 2880, height: 1800 }
const PHONE = { width: 1170, height: 2532 }
const WRAP = 'mx-auto w-full max-w-6xl px-4 md:px-8'
const H2 = 'text-[clamp(1.75rem,3.2vw,2.5rem)] leading-tight font-medium tracking-[-0.02em] text-balance'
const LEAD = 'text-lg leading-relaxed'

function Shot({ src, alt, size, className = '', priority }: {
  src: string; alt: string; size: typeof DESK; className?: string; priority?: boolean
}) {
  return (
    <Image
      src={src}
      alt={alt}
      {...size}
      priority={priority}
      sizes="(min-width: 1152px) 1088px, 100vw"
      className={`rounded-md ${className}`}
    />
  )
}

function BotButton({ label, light }: { label: string; light?: boolean }) {
  return (
    <a
      href={BOT_URL}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex h-12 items-center rounded-md px-6 font-medium transition hover:brightness-110 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hue ${
        light ? 'bg-surface text-ink' : 'bg-accent text-white'
      }`}
    >
      {label}
    </a>
  )
}

export function Landing({ lang }: { lang: Lang }) {
  const t = CONTENT[lang]
  const shot = (name: string) => `/screens/${lang}/${name}.jpg`

  return (
    <>
      <header className={`${WRAP} flex h-20 items-center justify-between gap-4`}>
        <a href={lang === 'ru' ? '/ru' : '/'} aria-label="Ustaxona">
          <Image src="/ustaxona-horizontal.svg" alt="Ustaxona" width={150} height={40} priority className="h-8 w-auto" />
        </a>
        <nav className="flex items-center gap-5">
          <a href="#how" className="hidden text-muted hover:text-ink md:inline">{t.nav.how}</a>
          <a href="#features" className="hidden text-muted hover:text-ink md:inline">{t.nav.features}</a>
          <a href={t.nav.otherHref} hrefLang={lang === 'ru' ? 'uz' : 'ru'} className="text-muted hover:text-ink">{t.nav.other}</a>
          <a
            href={BOT_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden h-9 items-center rounded-md bg-accent px-4 font-medium text-white hover:brightness-110 sm:inline-flex"
          >
            {t.nav.start}
          </a>
        </nav>
      </header>

      <main>
        {/* first screen: what it is, the one action, and the app itself */}
        <section className={`${WRAP} flex flex-col gap-10 pt-10 pb-16 md:pt-16`}>
          <div className="flex flex-col gap-6">
            <h1 className="max-w-[17ch] text-[clamp(2.25rem,5.2vw,4.25rem)] leading-[1.04] font-medium tracking-[-0.03em] text-balance">
              {t.hero.title}
            </h1>
            <p className={`max-w-[54ch] ${LEAD}`}>{t.hero.text}</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <BotButton label={t.hero.start} />
              <a href={APP_URL} className="font-medium text-accent underline-offset-4 hover:underline">
                {t.hero.login}
              </a>
            </div>
          </div>
          <figure className="flex flex-col gap-3">
            <div className="relative rounded-xl bg-tint p-3 md:p-6">
              <Shot src={shot('desk-orders')} alt={t.hero.alt.desk} size={DESK} priority className="hidden w-full md:block" />
              <Image
                src={shot('phone-orders')}
                alt={t.hero.alt.phone}
                {...PHONE}
                priority
                sizes="(min-width: 768px) 22vw, 80vw"
                className="mx-auto w-[80%] max-w-sm rounded-[1.5rem] border-[10px] border-tint md:absolute md:right-10 md:-bottom-16 md:w-[22%]"
              />
            </div>
            <figcaption className="text-sm text-muted md:mt-16">{t.hero.caption}</figcaption>
          </figure>
        </section>

        {/* the product doing its job: the order moves, the customer is told */}
        <section id="how" className="scroll-mt-8 bg-surface py-20 md:py-28">
          <div className={`${WRAP} flex flex-col gap-10`}>
            <div className="flex flex-col gap-4">
              <h2 className={H2}>{t.demo.title}</h2>
              <p className={`max-w-[56ch] ${LEAD}`}>{t.demo.text}</p>
            </div>
            <StatusDemo t={t.demo} />
          </div>
        </section>

        {/* what else the shop gets, each next to the screen that does it */}
        <section id="features" className={`${WRAP} flex scroll-mt-8 flex-col gap-24 py-24 md:gap-32 md:py-32`}>
          {t.features.map((f, i) => (
            <Reveal key={f.title} className="grid items-center gap-8 md:grid-cols-12">
              <div className="flex flex-col gap-3 md:col-span-4">
                <h2 className={H2}>{f.title}</h2>
                <p className={LEAD}>{f.text}</p>
              </div>
              {/* wide screens get the desktop app; phones get the phone app, so the text stays readable */}
              <div className="rounded-xl bg-tint p-3 md:col-span-8 md:p-5">
                <div className={`hidden overflow-hidden rounded-md md:block ${i === 1 ? 'aspect-[16/9]' : 'aspect-[16/10]'}`}>
                  <Shot src={shot(f.image)} alt={f.alt} size={DESK} className="h-full w-full object-cover object-left-top" />
                </div>
                <div className="mx-auto aspect-[3/4] max-w-xs overflow-hidden rounded-[1.25rem] md:hidden">
                  <Image src={shot(f.phoneImage)} alt={f.alt} {...PHONE} sizes="80vw" className="h-full w-full object-cover object-top" />
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal className="grid items-center gap-8 md:grid-cols-12">
            <div className="flex flex-col gap-3 md:col-span-4">
              <h2 className={H2}>{t.phone.title}</h2>
              <p className={LEAD}>{t.phone.text}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 rounded-xl bg-tint p-4 md:col-span-8 md:gap-8 md:p-8">
              <Image src={shot('phone-order')} alt={t.phone.alt} {...PHONE} sizes="(min-width: 768px) 30vw, 45vw"
                className="rounded-[1.25rem]" />
              <Image src={shot('phone-orders')} alt={t.hero.alt.phone} {...PHONE} sizes="(min-width: 768px) 30vw, 45vw"
                className="mt-12 rounded-[1.25rem]" />
            </div>
          </Reveal>
        </section>

        {/* every kind of shop, as words at size */}
        <section className="bg-surface py-24 md:py-32">
          <Reveal className={`${WRAP} flex flex-col gap-8`}>
            <h2 className={H2}>{t.kinds.title}</h2>
            <p className="text-[clamp(1.5rem,2.6vw,2.25rem)] leading-snug tracking-[-0.02em] text-muted">
              {t.kinds.list.map((k, i) => (
                <span key={k}>
                  {k}
                  {i < t.kinds.list.length - 1 && <span className="text-hue"> · </span>}
                </span>
              ))}
            </p>
          </Reveal>
        </section>

        <section className="bg-ink py-24 text-white md:py-32">
          <Reveal className={`${WRAP} grid items-center gap-10 md:grid-cols-2`}>
            <div className="flex flex-col items-start gap-6">
              <h2 className={H2}>{t.cta.title}</h2>
              <p className={`max-w-[52ch] text-white/85 ${LEAD}`}>{t.cta.text}</p>
              <BotButton label={t.cta.start} light />
            </div>
            {/* what the bot answers first: one button, and that is the whole sign-up */}
            <div data-ui className="flex flex-col gap-3 rounded-lg bg-telegram p-4 text-ink">
              <span className="self-center rounded-full bg-black/10 px-3 py-0.5 text-sm text-ink/70">{t.cta.bot}</span>
              <div className="max-w-[24rem] rounded-2xl rounded-bl-md bg-bubble px-3.5 py-2.5 leading-snug">
                <p>{t.cta.greeting}</p>
                <p className="mt-2">{t.cta.press}</p>
              </div>
              <span className="rounded-md bg-bubble py-2.5 text-center font-medium text-accent">{t.cta.share}</span>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className={`${WRAP} flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between`}>
        <Image src="/ustaxona-horizontal.svg" alt="Ustaxona" width={150} height={40} className="h-7 w-auto self-start" />
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-muted">
          <a href={APP_URL} className="hover:text-ink">{t.footer.app}</a>
          <a href={BOT_URL} target="_blank" rel="noreferrer" className="hover:text-ink">{t.footer.bot}</a>
          <a href={t.nav.otherHref} className="hover:text-ink">{t.nav.other}</a>
          <a href={NEXURA_URL} target="_blank" rel="noreferrer" className="hover:text-ink">{t.footer.by}</a>
          <span className="num">© 2026 Ustaxona</span>
        </nav>
      </footer>
    </>
  )
}
