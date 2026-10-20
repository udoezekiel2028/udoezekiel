import * as React from 'react'
import { Body, Container, Head, Heading, Html, Preview, Text } from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  status?: string
  plan?: string
  amount?: string
  email?: string
  testMode?: boolean
}

const HEADLINES: Record<string, string> = {
  paid: 'New payment received',
  renewal_paid: 'Monthly plan renewed',
  payment_failed: 'A payment failed',
  canceled: 'A monthly plan was cancelled',
}

const PaymentAlert = ({ status = 'paid', plan = 'Payment', amount = '', email = '', testMode = false }: Props) => {
  const headline = HEADLINES[status] ?? 'Payment update'
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>{headline}</Preview>
      <Body style={main}>
        <div style={topBar} />
        <Container style={container}>
          <Text style={wordmark}>Udo Ezekiel</Text>
          <Heading style={h1}>{testMode ? `[Test] ${headline}` : headline}</Heading>
          <Text style={text}><strong>Item:</strong> {plan}</Text>
          {amount && <Text style={text}><strong>Amount:</strong> {amount}</Text>}
          {email && <Text style={text}><strong>Client email:</strong> {email}</Text>}
          <Text style={footer}>See every payment on the Payments tab of your private requests page at udoezekiel.dev/requests.</Text>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: PaymentAlert,
  subject: (d: Record<string, any>) => `${d['testMode'] ? '[Test] ' : ''}${HEADLINES[d['status']] ?? 'Payment update'}`,
  displayName: 'Payment alert (owner)',
  previewData: { status: 'paid', plan: 'Website project (one-time)', amount: '300.00 USD', email: 'ada@example.test' },
} satisfies TemplateEntry

const BRAND = '#ed4b1b'
const main = { backgroundColor: '#ffffff', fontFamily: '"Quicksand", "Segoe UI", Arial, sans-serif', margin: '0' }
const topBar = { height: '5px', backgroundColor: BRAND }
const container = { padding: '30px 26px 36px', maxWidth: '560px' }
const wordmark = { fontSize: '14px', fontWeight: '800' as const, letterSpacing: '0.16em', textTransform: 'uppercase' as const, color: BRAND, margin: '0 0 18px' }
const h1 = { fontFamily: '"Nunito", Arial, sans-serif', fontSize: '24px', color: '#17181c', margin: '0 0 18px' }
const text = { fontSize: '15px', lineHeight: '24px', color: '#3a3b40', margin: '0 0 8px' }
const footer = { fontSize: '13px', color: '#7a7b80', marginTop: '24px' }
