// Every number the privacy page states lives here, so a change in the relay's
// configuration is a one-line edit rather than a hunt through prose.
//
// Sources, as of writing:
//  - otpRetentionHours: the relay holds codes only in memory and drops them
//    after BUFFER_TTL_SECONDS (default 300s). The stated figure is an upper
//    bound; tighten it if you want the page to match the server exactly.
//  - deviceInactivityDays: devices that have not authenticated within this
//    window are deregistered. Adjust to match the server's sweep.
//  - sessionDays: SESSION_TTL_HOURS defaults to 720 hours.

export const policy = {
  appName: 'OTP Relay',
  operator: 'Collectiv Works',
  domain: 'otp-relay.app',
  contactEmail: 'privacy@otp-relay.app',
  effectiveDate: '26 September 2026',

  otpRetentionHours: 24,
  deviceInactivityDays: 90,
  sessionDays: 30,
  passwordMinLength: 12,
} as const
