import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import siteWrap from './SiteWrap/siteWrap';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const AppWithSiteWrap = siteWrap(App);

root.render(
  <StrictMode>
    <AppWithSiteWrap />
  </StrictMode>
);
