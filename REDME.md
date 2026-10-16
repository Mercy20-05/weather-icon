# Weather Icon Display (Static Data)

A lightweight web application built to practice JavaScript DOM manipulation, conditional rendering, and mapping static data structures directly to UI components without relying on an external API.

---

## 📌 Project Overview
- **Deliverables**:
  - Dropdown containing multiple weather condition options.
  - Dynamic update of weather icon and descriptive summary upon selection.
  - Dynamically styled background per condition.
  - Default initial state prior to selection.
- **Tech Stack**:
  - **HTML5**: Semantic document structure and select control.
  - **CSS3**: Responsive flexbox layout, smooth gradient transitions, and animations.
  - **JavaScript (ES6+)**: Event listeners, object lookup, and DOM manipulation.

---

## 💡 Approach

1. **Data Modeling**:
   - Instead of fetching from a third-party API, a single static JavaScript object (`weatherData`) is used as the single source of truth.
   - Keys (`sunny`, `cloudy`, `rainy`, etc.) map directly to each condition's metadata (`icon`, `title`, `description`, and matching `themeClass`).

2. **UI & Layout**:
   - The interface features a clean, responsive card container centered using modern CSS Flexbox.
   - Background colors use gradient transitions applied directly to `document.body` classes to reflect the selected condition smoothly.

3. **Event-Driven Interaction**:
   - An event listener is attached to the `<select>` element listening for the `change` event.
   - When a user selects an option, the script retrieves the selected value, queries the static data dictionary in $O(1)$ constant time, and updates the text, icon, and background class accordingly.
   - A brief CSS reflow trigger adds a pop/bounce effect to the icon on every switch.

---

## 🎯 Outcome

- **Seamless User Experience**: Users immediately get visual feedback through changing icons, detailed descriptions, and color-matched backgrounds.
- **Pure Client-Side Implementation**: Demonstrates object mapping, clean code separation, and conditional rendering without external dependencies or API latency.
- **Accessibility & Responsiveness**: Clean typography, readable contrast, and mobile-friendly responsive layout.