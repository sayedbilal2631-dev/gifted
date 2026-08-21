# Birthday Surprise (React)

An interactive, scrapbook-style birthday reveal site — a "do u want to see it?"
teaser, a candle-blow birthday reveal, a romantic question, clickable gift
boxes, a polaroid garland, and a closing love letter.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Structure

```
src/
  App.jsx                 - scene state machine
  index.css                - design tokens + global styles
  components/
    PhoneFrame.jsx          - browser-mockup shell
    AmbientHearts.jsx       - floating background hearts
    Dots.jsx                - progress dots
    BearDuo.jsx             - original cartoon bear-duo illustration (SVG)
    scenes/
      SceneSpecial.jsx      - "I made something special" YES/NO (dodging NO)
      SceneBirthday.jsx     - candle-blow birthday reveal + confetti
      SceneWillYou.jsx      - romantic question
      SceneGifts.jsx        - clickable gift boxes with revealed messages
      SceneGarland.jsx      - polaroid photo garland "I love you"
      SceneLetter.jsx       - closing love letter
  utils/
    confetti.js              - lightweight confetti burst (Web Animations API)
```

## Customizing

- Swap the emoji "photos" in `SceneGarland.jsx` for real `<img>` tags.
- Edit the letter text directly in `SceneLetter.jsx`.
- Edit the gift messages array in `SceneGifts.jsx`.
- Colors and fonts are defined as CSS variables in `src/index.css`.
