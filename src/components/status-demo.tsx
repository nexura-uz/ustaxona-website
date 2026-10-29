'use client'

import { useState } from 'react'
import { type Content, STATUSES, type Status } from '@/content'

// the same order as the app shows it, and the same messages the bot really sends (backend app/notify.py),
// emoji included: they are the bot's own text. The lines inside the order card are the app's own table rules.
const ICON: Record<Status, string> = { accepted: '📥', in_progress: '🔧', ready: '✅', handed_over: '🤝' }
const PILL: Record<Status, string> = {
  accepted: 'bg-[#ebf0f2] text-[#3b4a50]',
  in_progress: 'bg-[#e5eefb] text-[#1e4e8c]',
  ready: 'bg-[#fff1d1] text-[#7a4a00]',
  handed_over: 'bg-tint text-muted',
}
const TIMES = ['10:02', '10:40', '15:18', '17:05']
const ITEM = '#127 · Samsung Galaxy A54'
const SHOP = 'TechVision'

export function StatusDemo({ t }: { t: Content['demo'] }) {
  const [at, setAt] = useState(0)
  const status = STATUSES[at]
  const money = (n: number) => `${n.toLocaleString('ru-RU').replace(/\s/g, ' ')} ${t.money}`
  const total = t.lines.reduce((sum, l) => sum + l.price, 0)
  const next = status !== 'handed_over' ? t.actions[status] : null

  return (
    <div className="grid items-start gap-6 lg:grid-cols-2">
      {/* the shop's side: one order in the app */}
      <figure className="flex flex-col gap-3">
        <figcaption className="text-sm text-muted">{t.shop}</figcaption>
        <div data-ui className="flex flex-col gap-5 rounded-lg border border-line bg-surface p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="flex flex-col gap-1">
              <span className="text-lg font-medium">Samsung Galaxy A54</span>
              <span className="num text-sm text-muted">#127 · {t.customer}</span>
            </div>
            <span className={`inline-flex h-7 flex-none items-center rounded px-2 text-sm font-medium ${PILL[status]}`}>
              {t.statuses[status]}
            </span>
          </div>
          <div className="flex flex-col gap-1.5" aria-hidden>
            <div className="grid grid-cols-4 gap-1">
              {STATUSES.map((s, i) => (
                <span key={s} className={`h-1.5 rounded-full transition-colors duration-300 ${i <= at ? 'bg-accent' : 'bg-tint'}`} />
              ))}
            </div>
          </div>
          <p>{t.problem}</p>
          {at >= 2 && (
            <div className="rounded-md border border-line text-sm">
              {t.lines.map((l) => (
                <div key={l.name} className="flex justify-between gap-3 border-b border-line px-4 py-2.5 last:border-b-0" // taste-skill-ignore: the app's own table rule
                >
                  <span>{l.name}</span>
                  <span className="num">{money(l.price)}</span>
                </div>
              ))}
              <div className="flex justify-between gap-3 border-t border-line px-4 py-2.5 font-medium" // taste-skill-ignore
              >
                <span>{t.total}</span>
                <span className="num">{money(total)}</span>
              </div>
            </div>
          )}
          {next ? (
            <button
              type="button"
              onClick={() => setAt(at + 1)}
              className="h-11 self-start rounded-md bg-accent px-5 font-medium text-white transition-transform hover:brightness-110 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hue"
            >
              {next}
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setAt(0)}
              className="h-11 self-start rounded-md bg-tint px-5 font-medium transition-transform hover:bg-line active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hue"
            >
              {t.restart}
            </button>
          )}
        </div>
      </figure>

      {/* the customer's side: what reaches them in Telegram, one message per step */}
      <figure className="flex flex-col gap-3">
        <figcaption className="text-sm text-muted">{t.chat}</figcaption>
        <div data-ui className="flex min-h-80 flex-col gap-3 rounded-lg bg-telegram p-4" aria-live="polite">
          <span className="self-center rounded-full bg-black/10 px-3 py-0.5 text-sm text-ink/70">{t.bot}</span>
          {STATUSES.slice(0, at + 1).map((s, i) => (
            <div key={s} className="max-w-[22rem] rounded-2xl rounded-bl-md bg-bubble px-3.5 py-2.5 leading-snug">
              <p className="font-semibold">
                {ICON[s]} {t.statuses[s]}
              </p>
              <p>
                <b>{ITEM.split(' · ')[0]}</b> · {ITEM.split(' · ')[1]}
              </p>
              <p>🏪 {SHOP}</p>
              {i >= 2 && (
                <div className="mt-2 flex flex-col">
                  <p>🛠 <b>{t.works}</b></p>
                  <p>• {t.lines[0].name} — <b className="num">{money(t.lines[0].price)}</b></p>
                  <p className="mt-2">🔩 <b>{t.parts}</b></p>
                  <p>• {t.lines[1].name} — <b className="num">{money(t.lines[1].price)}</b></p>
                  <p className="mt-2">💰 <b className="num">{t.total}: {money(total)}</b></p>
                </div>
              )}
              {t.notes[s] && <p className="mt-2">{t.notes[s]}</p>}
              <p className="num mt-1 text-right text-sm text-muted">{TIMES[i]}</p>
              {s === 'handed_over' && (
                <div className="mt-2 grid grid-cols-5 gap-1">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <span key={n} className="rounded-md bg-telegram py-1.5 text-center text-sm">
                      {n} ⭐
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </figure>
    </div>
  )
}
