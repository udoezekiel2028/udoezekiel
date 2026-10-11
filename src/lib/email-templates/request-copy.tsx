import * as React from 'react'

import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components'

import type { TemplateEntry } from './registry'

interface Row {
  label?: string
  value?: string
}

interface RequestCopyProps {
  siteName?: string
  pageName?: string
  submittedAt?: string
  visitorEmail?: string
  rows?: Row[]
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const RequestCopyEmail = ({
  siteName = 'Udo Ezekiel',
  pageName = 'project questionnaire',
  submittedAt = '',
  visitorEmail = '',
  rows = [],
}: RequestCopyProps) => {
  const cleanRows = rows.filter((row) => row.label && row.value)
  const canReply = EMAIL_RE.test(visitorEmail)

  return (
    <Html lang="en" dir="ltr">
      <Head>
        <style>{darkModeCss}</style>
      </Head>
      <Preview>New request from your website</Preview>
      <Body style={main}>
        <div style={topBar} />
        <Container style={container}>
          <Text style={wordmark}>{siteName}</Text>
          <div style={rule} />
          <Heading style={h1}>New {pageName}</Heading>
          <Text style={text}>
            {cleanRows.length} answer{cleanRows.length === 1 ? '' : 's'} came in
            {submittedAt ? ` on ${submittedAt}` : ''}.
            {canReply && (
              <>
                {' '}
                Hitting reply sends your message straight to{' '}
                <Link href={`mailto:${visitorEmail}`} style={link}>
                  {visitorEmail}
                </Link>
                .
              </>
            )}
          </Text>
          {cleanRows.map((row, i) => (
            <Section key={i} style={rowBlock}>
              <Text style={rowLabel}>{row.label}</Text>
              <Text style={rowValue}>{row.value}</Text>
            </Section>
          ))}
          <Text style={footer}>
            This copy is sent to you for every request submitted on udoezekiel.dev. The visitor also
            received their own confirmation.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: RequestCopyEmail,
  subject: (data: Record<string, any>) => `New request: ${data['pageName'] ?? 'your website'}`,
  displayName: 'New request copy (owner)',
  to: 'udoezekiel2028@gmail.com',
  previewData: {
    siteName: 'Udo Ezekiel',
    pageName: 'project questionnaire',
    submittedAt: 'Saturday, 11 October 2026 at 9:15am',
    visitorEmail: 'ada@example.test',
    rows: [
      { label: 'Name', value: 'Ada Obi' },
      { label: 'Email address', value: 'ada@example.test' },
      { label: 'Type of website wanted', value: 'eCommerce website, Online course website' },
      { label: 'Main goal of the project', value: 'Sell courses and take payments online' },
    ],
  },
} satisfies TemplateEntry

export default RequestCopyEmail

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
  lineHeight: '1.7',
  margin: '0 0 24px',
}
const rowBlock = {
  borderLeft: '3px solid #ed4b1b',
  margin: '0 0 18px',
  padding: '2px 0 2px 14px',
}
const rowLabel = {
  fontFamily: DISPLAY,
  fontSize: '11px',
  fontWeight: '800' as const,
  letterSpacing: '0.12em',
  textTransform: 'uppercase' as const,
  color: BRAND,
  margin: '0 0 4px',
}
const rowValue = {
  fontFamily: SANS,
  fontSize: '15px',
  color: INK,
  lineHeight: '1.6',
  margin: '0',
  whiteSpace: 'pre-wrap' as const,
}
const link = { color: BRAND, textDecoration: 'underline' }
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
    .dm-row { border-left-color: #ed4b1b !important; }
  }
`
