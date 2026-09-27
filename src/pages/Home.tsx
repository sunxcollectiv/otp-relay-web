import { Link } from '../router'
import { policy } from '../policy'

export default function Home() {
  return (
    <div className="page">
      <main>
        <h1>{policy.appName}</h1>
        <p className="lede">
          One-time passcodes arrive on your phone. You need them on your computer.{' '}
          {policy.appName} moves them across and types them in for you.
        </p>

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
