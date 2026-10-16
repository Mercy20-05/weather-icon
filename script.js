// 1. Static Weather Data Dictionary
const weatherData = {
  sunny: {
    title: "Sunny",
    icon: "☀️",
    description: "Clear skies and abundant sunshine. Ideal for outdoor activities!",
    themeClass: "theme-sunny"
  },
  cloudy: {
    title: "Cloudy",
    icon: "☁️",
    description: "Overcast skies with dense clouds. Cool and calm conditions.",
    themeClass: "theme-cloudy"
  },
  rainy: {
    title: "Rainy",
    icon: "🌧️",
    description: "Steady rainfall expected. Remember to grab an umbrella or raincoat!",
    themeClass: "theme-rainy"
  },
  snowy: {
    title: "Snowy",
    icon: "❄️",
    description: "Freezing temperatures accompanied by falling snowflakes. Dress warmly!",
    themeClass: "theme-snowy"
  },
  thunderstorm: {
    title: "Thunderstorm",
    icon: "⛈️",
    description: "Heavy downpours, flashes of lightning, and loud thunder. Stay indoors!",
    themeClass: "theme-thunderstorm"
  }
};

// 2. Select DOM Elements
const weatherSelect = document.getElementById("weather-select");
const weatherIcon = document.getElementById("weather-icon");
const weatherTitle = document.getElementById("weather-title");
const weatherDescription = document.getElementById("weather-description");

// 3. Handle Weather Selection Event
weatherSelect.addEventListener("change", (event) => {
  const selectedKey = event.target.value;
  const currentCondition = weatherData[selectedKey];

  if (!currentCondition) return;

  // Update Display Content
  weatherIcon.textContent = currentCondition.icon;
  weatherTitle.textContent = currentCondition.title;
  weatherDescription.textContent = currentCondition.description;

  // Trigger quick icon pop animation
  weatherIcon.classList.remove("animate");
  void weatherIcon.offsetWidth; // Force DOM reflow
  weatherIcon.classList.add("animate");

  // Update Background Theme on <body>
  document.body.className = currentCondition.themeClass;
});