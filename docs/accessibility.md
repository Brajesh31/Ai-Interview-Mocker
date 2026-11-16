# Accessibility expectations

## Interface requirements

New and modified UI should:
- Use semantic headings in a logical hierarchy.
- Associate every input with a visible label.
- Use native buttons for actions and links for navigation.
- Provide accessible names for icon-only controls.
- Preserve keyboard access and visible focus indicators.
- Expose loading and error states to assistive technology.
- Avoid communicating status through color alone.
- Keep dialogs operable with keyboard and screen readers.
- Respect reduced-motion preferences for non-essential animation.

## Form behavior

The interview creation dialog should:
- Give each field a clear label and helpful description where needed.
- Preserve focus management when the dialog opens and closes.
- Announce submission errors through an alert or live region.
- Prevent duplicate submission while a request is active.
- Avoid clearing user input when generation fails.

## Verification

Before release:
1. Navigate the dashboard and dialog using only the keyboard.
2. Confirm focus is visible and does not become trapped incorrectly.
3. Check labels and error announcements with a screen reader.
4. Test at narrow viewport widths and browser zoom.
5. Check contrast for text, controls, and focus indicators.

## Current scope

This document describes expectations. It is not a claim of formal WCAG conformance or a completed accessibility audit.
