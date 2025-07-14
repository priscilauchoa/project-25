import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://464482ab52318cf5369c479d200a9eee@o4509668601430016.ingest.de.sentry.io/4509668660215888",
  integrations: [Sentry.browserTracingIntegration()],
  release: '1.0',
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
  // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost"],
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
