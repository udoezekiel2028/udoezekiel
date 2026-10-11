import * as React from 'react'

import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from '@react-email/components'

interface ReauthenticationEmailProps {
  siteName: string
  token: string
}

export const ReauthenticationEmail = ({
  siteName,
  token,
}: ReauthenticationEmailProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Your verification code</Preview>
    <Body style={main}>
      <div style={topBar} />
      <Container style={container}>
        <Text style={wordmark}>{siteName}</Text>
        <div style={rule} />
        <Heading style={h1}>Confirm reauthentication</Heading>
        <Text style={text}>Use the code below to confirm your identity:</Text>
        <Text style={codeStyle}>{token}</Text>
        <Text style={footer}>
          This code will expire shortly. If you didn't request this, you can
          safely ignore this email.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default ReauthenticationEmail

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
const codeStyle = {
  fontFamily: DISPLAY,
  fontSize: "28px",
  fontWeight: "800" as const,
  letterSpacing: "0.18em",
  color: INK,
  backgroundColor: "#fdf1ec",
  border: "1px solid #f6cdbd",
  borderRadius: "10px",
  padding: "16px 20px",
  margin: "0 0 26px",
  textAlign: "center" as const,
}
const footer = {
  fontFamily: SANS,
  fontSize: "12px",
  color: "#9aa0a6",
  lineHeight: "1.55",
  margin: "28px 0 0",
}
