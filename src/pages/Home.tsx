import { Link } from '../router'
import type { ReactNode } from 'react'
import { policy } from '../policy'

function DownloadTile({
  href,
  title,
  note,
  icon,
  download,
}: {
  href: string
  title: string
  note: string
  icon: ReactNode
  download?: boolean
}) {
  const body = (
    <>
      <span className="download-icon" aria-hidden="true">
        {icon}
      </span>
      <span className="download-text">
        <strong>{title}</strong>
        <span className="muted">{href ? note : 'Coming soon'}</span>
      </span>
    </>
  )
  if (!href) {
    return <div className="download download-pending">{body}</div>
  }
  return (
    <a
      className="download"
      href={href}
      download={download || undefined}
      target={download ? undefined : '_blank'}
      rel={download ? undefined : 'noreferrer'}
    >
      {body}
    </a>
  )
}

function PuzzleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 4a2 2 0 0 1 4 0v1h4a1 1 0 0 1 1 1v4h-1a2 2 0 0 0 0 4h1v4a1 1 0 0 1-1 1h-4v-1a2 2 0 0 0-4 0v1H6a1 1 0 0 1-1-1v-4h1a2 2 0 0 0 0-4H5V6a1 1 0 0 1 1-1h4V4z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
      <path d="M12 8v7M9 12.5l3 3 3-3" />
      <path d="M10.5 18.5h3" />
    </svg>
  )
}

export default function Home() {
  return (
    <div className="page">
      <main>
        <h1>{policy.appName}</h1>
        <p className="lede">
          One-time passcodes arrive on your phone. You need them on your computer.{' '}
          {policy.appName} moves them across and types them in for you.
        </p>

        <div className="downloads">
          <DownloadTile
            href={policy.chromeExtensionUrl}
            title="Browser extension"
            note="Chrome Web Store"
            icon={<PuzzleIcon />}
          />
          <DownloadTile
            href={policy.apkUrl}
            title="Android app"
            note="Download APK"
            icon={<PhoneIcon />}
            download
          />
        </div>

        <ol className="steps">
          <li>
            <div>
              <h3>A code arrives</h3>
              <p>
                A verification SMS lands on your Android phone. The {policy.appName} app
                notices it and forwards the code to your relay.
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3>The relay passes it on</h3>
              <p>
                The relay hands the code straight to your signed-in browser over an encrypted
                connection. Codes are kept in memory only and expire on their own.
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3>Your browser fills it in</h3>
              <p>
                The browser extension finds the one-time-code field on the page you are on,
                types the code, and shows a small panel with your recent codes.
              </p>
            </div>
          </li>
        </ol>

        <h2>What you install</h2>
        <ul className="parts">
          <li>
            <strong>Android app.</strong> Reads incoming verification codes and publishes
            them. It never reads your other messages.
          </li>
          <li>
            <strong>Browser extension.</strong> For Chrome, Edge, and Firefox. Receives codes,
            autofills them, and raises a desktop notification.
          </li>
          <li>
            <strong>Relay.</strong> The small server in between. Use ours, or run your own and
            point both ends at it.
          </li>
        </ul>

        <h2>Designed to hold as little as possible</h2>
        <p>
          Each phone and each browser gets its own revocable device credential, so a browser
          can only ever receive codes, never send them. The relay stores who may publish and
          who may subscribe, and nothing about the codes themselves. There is no history to
          leak and nothing sold to anyone.
        </p>
      </main>

      <footer>
        <span>
          &copy; {new Date().getFullYear()} {policy.operator}
        </span>
        <Link to="/privacy">Privacy</Link>
      </footer>
    </div>
  )
}
