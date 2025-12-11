import React from 'react';
import { DeckPresentation } from './components/deck/DeckPresentation';

// Add the font directly to the document head style
const fontStyle = `
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap');

body {
  font-family: 'IBM Plex Mono', monospace;
}
`;

function App() {
  return (
    <>
      <style>{fontStyle}</style>
      <DeckPresentation />
    </>
  );
}

export default App;
