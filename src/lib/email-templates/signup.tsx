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

interface SignupEmailProps {
  siteName: string
  siteUrl: string
  recipient: string
  confirmationUrl: string
}

export const SignupEmail = ({
  siteName,
  siteUrl,
  recipient,
  confirmationUrl,
}: SignupEmailProps) => (
  <Html lang="en" dir="ltr">
    <Head>
      <style>{darkModeCss}</style>
    </Head>
    <Preview>Confirm your email for {siteName}</Preview>
    <Body style={main}>
      <div style={topBar} />
      <Container style={container}>
        <Text style={wordmark}>{siteName}</Text>
        <div style={rule} />
        <Heading style={h1}>Confirm your email</Heading>
        <Text style={text}>
          Thanks for signing up for{' '}
          <Link href={siteUrl} style={link}>
            <strong>{siteName}</strong>
          </Link>
          !
        </Text>
        <Text style={text}>
          Please confirm your email address (
          <Link href={`mailto:${recipient}`} style={link}>
            {recipient}
          </Link>
          ) by clicking the button below:
        </Text>
        <Button className="dm-btn" style={button} href={confirmationUrl}>
          Verify Email
        </Button>
        <Text style={footer}>
          If you didn't create an account, you can safely ignore this email.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default SignupEmail

const BRAND = "#ed4b1b"
const INK = "#17181c"
const SANS = '"Quicksand", "Segoe UI", Arial, sans-serif'
const DISPLAY = '"Nunito", "Trebuchet MS", Arial, sans-serif'

const main = {
  backgroundColor: "#ffffff",
  fontFamily: SANS,
  margin: "0",
  padding: "0",
}
const topBar = {
  height: "5px",
  backgroundColor: BRAND,
  margin: "0",
}
const container = { padding: "30px 26px 36px", maxWidth: "560px" }
const wordmark = {
  fontFamily: DISPLAY,
  fontSize: "14px",
  fontWeight: "800" as const,
  letterSpacing: "0.16em",
  textTransform: "uppercase" as const,
  color: BRAND,
  margin: "0 0 8px",
}
const rule = {
  height: "3px",
  width: "46px",
  backgroundColor: BRAND,
  borderRadius: "9999px",
  margin: "0 0 26px",
}
const h1 = {
  fontFamily: DISPLAY,
  fontSize: "24px",
  fontWeight: "800" as const,
  color: INK,
  lineHeight: "1.25",
  margin: "0 0 16px",
}
const text = {
  fontFamily: SANS,
  fontSize: "15px",
  color: "#4b4f55",
  lineHeight: "1.6",
  margin: "0 0 22px",
}
const link = { color: BRAND, textDecoration: "underline" }
const button = {
  backgroundColor: BRAND,
  color: "#ffffff",
  fontFamily: DISPLAY,
  fontSize: "15px",
  fontWeight: "700" as const,
  border: "1px solid #ed4b1b",
  borderRadius: "10px",
  padding: "13px 26px",
  textDecoration: "none",
}
const footer = {
  fontFamily: SANS,
  fontSize: "12px",
  color: "#9aa0a6",
  lineHeight: "1.55",
  margin: "28px 0 0",
}
// Rendered as a text child, which React may HTML-escape: keep this CSS free of >, &, and quotes.
const darkModeCss = `
  @media (prefers-color-scheme: dark) {
    .dm-btn { background-color: #ed4b1b !important; color: #ffffff !important; }
  }
  [data-ogsc] .dm-btn { background-color: #ed4b1b !important; color: #ffffff !important; }
  [data-ogsb] .dm-btn { background-color: #ed4b1b !important; color: #ffffff !important; }
`
