import { Link } from '../router'
import { policy } from '../policy'

const hours = (n: number) => `${n} hour${n === 1 ? '' : 's'}`
const days = (n: number) => `${n} day${n === 1 ? '' : 's'}`

export default function Privacy() {
  return (
    <div className="page">
      <main>
        <p className="small">
          <Link to="/" className="brand">
            {policy.appName}
          </Link>
        </p>
        <h1>Privacy Policy</h1>
        <p className="muted small">Effective {policy.effectiveDate}</p>

        <p className="lede">
          {policy.appName} exists to move a code from your phone to your browser and then
          forget it. This policy explains what we collect, why, how long we keep it, and how
          it is protected.
        </p>

        <h2>Who we are</h2>
        <p>
          {policy.appName} is operated by {policy.operator} (&ldquo;we&rdquo;,
          &ldquo;us&rdquo;). We are the data controller for the relay service at{' '}
          {policy.domain}. If you run your own relay server, this policy covers only the app
          and the extension; the data on your server is yours.
        </p>

        <h2>What we collect</h2>
        <dl>
          <dt>Account details</dt>
          <dd>
            Your email address and a password of at least {policy.passwordMinLength}{' '}
            characters. We use the email only to identify your account and to contact you
            about it. We do not send marketing email.
          </dd>
          <dt>Device registrations</dt>
          <dd>
            When you sign in on a phone or a browser we issue that device its own credential
            and record its kind (Android or browser), its capability (publish or subscribe),
            and when it was last seen. We do not collect device identifiers, contacts, or
            location.
          </dd>
          <dt>One-time passcodes</dt>
          <dd>
            The codes the Android app forwards. These pass through the relay in order to reach
            your browser. They are the only content we handle, and we handle them for as short
            a time as possible.
          </dd>
          <dt>Operational logs</dt>
          <dd>
            Standard server logs such as request timestamps, status codes, and IP addresses,
            used for security and to keep the service running. Logs never contain passcodes,
            passwords, or credentials.
          </dd>
        </dl>

        <h2>What we do not collect</h2>
        <p>
          The Android app reads only messages that contain a verification code and forwards
          only the code. It does not upload your other messages, your contacts, or your call
          history. Neither the app nor the extension includes analytics, advertising, or
          tracking SDKs, and we do not build profiles of you.
        </p>

        <h2>How your data is protected</h2>
        <ul>
          <li>
            <strong>Credentials are encrypted and never stored in a readable form.</strong>{' '}
            Passwords are hashed with argon2id, a memory-hard algorithm designed to resist
            brute-force attacks. Device and session credentials are stored only as
            cryptographic hashes; the credential itself is shown once, at creation, and we
            cannot recover it afterwards.
          </li>
          <li>
            <strong>Everything travels over TLS.</strong> The apps refuse to talk to a relay
            over plain HTTP outside of local development.
          </li>
          <li>
            <strong>Passcodes are never written to a database.</strong> They are held in
            memory only, scoped to your account, and delivered only to your own devices.
          </li>
          <li>
            <strong>Devices have one job each.</strong> A phone can publish codes but not
            receive them; a browser can receive codes but not publish them. A compromised
            browser credential cannot inject codes into your account.
          </li>
        </ul>

        <h2>How long we keep it</h2>
        <dl>
          <dt>One-time passcodes</dt>
          <dd>
            Automatically deleted no later than {hours(policy.otpRetentionHours)} after they
            are received. In practice they are dropped far sooner: the relay only holds a code
            long enough for a browser that reconnects a moment later to still receive it.
          </dd>
          <dt>Devices</dt>
          <dd>
            A device that has not connected for {days(policy.deviceInactivityDays)} is
            automatically deregistered and its credential invalidated. You can also revoke any
            device yourself at any time, which disconnects it immediately.
          </dd>
          <dt>Sign-in sessions</dt>
          <dd>Expire {days(policy.sessionDays)} after sign-in.</dd>
          <dt>Account</dt>
          <dd>
            Kept until you delete it. Deleting your account removes your email, password hash,
            devices, and sessions.
          </dd>
        </dl>

        <h2>Sharing</h2>
        <p>
          We do not sell, rent, or share your personal data with third parties. We use hosting
          providers to run the relay, who process data on our behalf under contract. We will
          disclose data only if required by law, and only what the law requires.
        </p>

        <h2>Your rights</h2>
        <p>
          You can access, correct, export, or delete your account data at any time from the
          apps or by contacting us. Depending on where you live you may have additional rights
          under laws such as the GDPR or the CCPA, including the right to lodge a complaint
          with a supervisory authority. We will respond to requests within 30 days.
        </p>

        <h2>Children</h2>
        <p>
          {policy.appName} is not directed at children under 16, and we do not knowingly
          collect data from them. If you believe a child has created an account, contact us
          and we will delete it.
        </p>

        <h2>Browser and platform permissions</h2>
        <p>
          The extension asks for storage (to keep your settings and relay credential), alarms
          (to poll when a live connection is unavailable), notifications (to tell you a code
          arrived), and access to the active tab (to type the code into the field you are
          looking at). It does not read page content beyond locating a one-time-code field.
          The Android app asks for SMS access solely to detect verification codes.
        </p>

        <h2>Changes</h2>
        <p>
          If we change this policy we will update the effective date above and, for material
          changes, notify you in the apps before they take effect.
        </p>

        <h2>Contact</h2>
        <p>
          Questions or requests:{' '}
          <a href={`mailto:${policy.contactEmail}`}>{policy.contactEmail}</a>
        </p>
      </main>

      <footer>
        <span>
          &copy; {new Date().getFullYear()} {policy.operator}
        </span>
        <Link to="/">Home</Link>
      </footer>
    </div>
  )
}
