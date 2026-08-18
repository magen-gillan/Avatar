# Avatar — Design Direction

## Three stylistic approaches

### Theme Name: Ink Console
Very Brief Intro: A tactile editorial control room inspired by Japanese paper ephemera, studio markings, and quiet technical dashboards. It makes avatar switching feel like selecting a character from a curated archive.
Probability: 0.07

### Theme Name: Soft Orbit
Very Brief Intro: A calm celestial interface with pale surfaces, orbit lines, and warm highlights. It frames each avatar as a companion in a personal constellation.
Probability: 0.04

### Theme Name: Neon Stage
Very Brief Intro: A theatrical dark interface with saturated lighting and performance cues. It emphasizes live presence and expressive motion.
Probability: 0.03

## Chosen approach: Ink Console

### Design Movement
Contemporary editorial utility: Japanese print ephemera, Swiss information design, and premium creative software controls combined into a restrained avatar studio.

### Core Principles
1. Make the selected avatar feel like a tangible studio object, not a generic dropdown value.
2. Use asymmetric composition: a persistent navigation rail, a large stage, and a focused settings column.
3. Pair quiet paper texture with precise ink-blue controls and one ownable coral accent.
4. Keep actions obvious and fast; interaction should feel like switching a physical control surface.

### Color Philosophy
Warm ivory creates the feeling of a physical archive page. Ink navy carries structure and trust. Coral red is reserved for selection, recording, and expressive states so the important change is visually unmistakable. Slate-blue secondary tones separate metadata from active controls without introducing noisy gradients.

### Layout Paradigm
A three-zone studio: narrow left rail for identity and navigation, dominant center stage for the current avatar, and right settings drawer for avatar selection and behavior controls. The avatar list is a horizontal filmstrip below the stage rather than a uniform dashboard grid.

### Signature Elements
1. Coral registration marks and tiny technical labels around the preview stage.
2. Paper grain and thin ink rules that echo a character archive sheet.
3. A numbered avatar filmstrip with an active coral index and a quiet “loaded” status.

### Interaction Philosophy
Changing an avatar is immediate and reversible. Selecting a card updates the stage, metadata, and accent color in one coordinated transition. Controls use short labels, persistent values, and explicit status text; no important state is hidden behind icon-only buttons.

### Animation
Use 180–240ms ease-out transitions for selection states. The stage model should fade and translate upward by a few pixels when changed, while the selected filmstrip card receives a brief coral underline sweep. Avoid continuous decorative motion; allow only the ambient stage glow and a subtle “online” pulse. Respect reduced-motion preferences.

### Typography System
Use Fraunces for display headlines and IBM Plex Sans for interface text. Headlines are compact, slightly editorial, and never oversized beyond the information hierarchy. Interface labels are uppercase with letter spacing; body copy uses readable 14–16px IBM Plex Sans.

### Brand Essence
Avatar is a personal character studio for people who want to choose, tune, and preview Live2D companions without digging through raw model files. Personality: collected, expressive, precise.

### Brand Voice
Headlines sound like a studio note, not marketing filler. CTAs are direct and tactile.
Example lines: “Choose the presence for this session.” / “Load this avatar into the stage.”

### Wordmark & Logo
Use the generated symbol mark: an abstract crescent face fused with a speech wave and a registration spark. Pair it with the word Avatar in Fraunces, but keep the mark independent so it works as a favicon and compact rail badge.

### Signature Brand Color
Coral Register — #E45B4C. It is warm enough to feel human and sharp enough to indicate a live state without becoming neon.

## Style Decisions

- The main stage must read as a loaded studio object first, not a small texture thumbnail. The preview plate is therefore larger, framed, and labeled as a model plate.
- The avatar filmstrip uses numbered contact-sheet and catalog-package language rather than generic rounded product cards.
- Coral remains reserved for active index, live state, toggles, slider emphasis, and the primary load action.
