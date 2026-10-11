import * as React from 'react'

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
} from '@react-email/components'

import type { TemplateEntry } from './registry'

interface RequestReceivedProps {
  siteName?: string
  siteUrl?: string
  name?: string
  email?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const RequestReceivedEmail = ({
  siteName = 'Udo Ezekiel',
  siteUrl = 'https://udoezekiel.dev',
  name,
  email,
}: RequestReceivedProps) => {
  const greeting = name && name.trim() ? `Hi ${name.trim()}` : 'Hi there'
  const replyTo = email && EMAIL_RE.test(email) ? email : ''

  return (
    <Html lang="en" dir="ltr">
      <Head>
        <style>{darkModeCss}</style>
      </Head>
      <Preview>Your project request has been received</Preview>
      <Body style={main}>
        <div style={topBar} />
        <Container style={container}>
          <Text style={wordmark}>{siteName}</Text>
          <div style={rule} />
          <Heading style={h1}>Your request is in, thank you</Heading>
          <Text style={text}>
            {greeting}, your project details have been received and saved. Nothing else is needed
            from you right now.
          </Text>
          <Text style={text}>
            <strong style={strong}>What happens next</strong>
          </Text>
          <Text style={text}>
            <span style={bullet}>1.</span> I read through every answer you sent.
            <br />
            <span style={bullet}>2.</span> I reply by email, usually within one business day, with
            next steps and a clear quote.
            <br />
            <span style={bullet}>3.</span> If a short call would be quicker, I'll suggest a time that
            suits you.
          </Text>
          {replyTo && (
            <Text style={text}>
              This confirmation was sent to{' '}
              <Link href={`mailto:${replyTo}`} style={link}>
                {replyTo}
              </Link>
              . If you need to add anything, just reply to this email.
            </Text>
          )}
          <Button className="dm-btn" style={button} href={siteUrl}>
            Visit my website
          </Button>
          <Text style={footer}>
            You'll only get this email because a project request was submitted on my site. If that
            wasn't you, you can safely ignore it.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: RequestReceivedEmail,
  subject: "We've got your project request",
  displayName: 'Project request received (visitor)',
  previewData: {
    siteName: 'Udo Ezekiel',
    siteUrl: 'https://udoezekiel.dev',
    name: 'Ada',
    email: 'ada@example.test',
  },
} satisfies TemplateEntry

export default RequestReceivedEmail

const BRAND = '#ed4b1b'
const INK = '#17181c'
const SANS = '"Quicksand", "Segoe UI", Arial, sans-serif'
const DISPLAY = '"Nunito", "Trebuchet MS", Arial, sans-serif'

const main = {
  backgroundColor: '#ffffff',
  fontFamily: SANS,
  margin: '0',
  padding: '0',
}
const topBar = {
  height: '5px',
  backgroundColor: BRAND,
  margin: '0',
}
const container = { padding: '30px 26px 36px', maxWidth: '560px' }
const wordmark = {
  fontFamily: DISPLAY,
  fontSize: '14px',
  fontWeight: '800' as const,
  letterSpacing: '0.16em',
  textTransform: 'uppercase' as const,
  color: BRAND,
  margin: '0 0 8px',
}
const rule = {
  height: '3px',
  width: '46px',
  backgroundColor: BRAND,
  borderRadius: '9999px',
  margin: '0 0 26px',
}
const h1 = {
  fontFamily: DISPLAY,
  fontSize: '24px',
  fontWeight: '800' as const,
  color: INK,
  lineHeight: '1.25',
  margin: '0 0 16px',
}
const text = {
  fontFamily: SANS,
  fontSize: '15px',
  color: '#4b4f55',
  lineHeight: '1.75',
  margin: '0 0 20px',
}
const strong = { color: INK, fontFamily: DISPLAY, fontSize: '16px' }
const bullet = {
  color: BRAND,
  fontFamily: DISPLAY,
  fontWeight: '800' as const,
  marginRight: '8px',
}
const link = { color: BRAND, textDecoration: 'underline' }
const button = {
  backgroundColor: BRAND,
  color: '#ffffff',
  fontFamily: DISPLAY,
  fontSize: '15px',
  fontWeight: '700' as const,
  border: '1px solid #ed4b1b',
  borderRadius: '10px',
  padding: '13px 26px',
  textDecoration: 'none',
}
const footer = {
  fontFamily: SANS,
  fontSize: '12px',
  color: '#9aa0a6',
  lineHeight: '1.55',
  margin: '28px 0 0',
}
// Rendered as a text child, which React may HTML-escape: keep this CSS free of >, &, and quotes.
const darkModeCss = `
  @media (prefers-color-scheme: dark) {
    .dm-btn { background-color: #ed4b1b !important; color: #ffffff !important; }
  }
  [data-ogsc] .dm-btn { background-color: #ed4b1b !important; color: #ffffff !important; }
  [data-ogsb] .dm-btn { background-color: #ed4b1b !important; color: #ffffff !important; }
`
