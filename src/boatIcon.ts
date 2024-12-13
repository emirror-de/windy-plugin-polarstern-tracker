export const boatIcon = L.divIcon({
    html: `<svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 64"
        width="24"
        height="24"
        aria-label="Polarstern Ship Icon"
    >
      <!-- Blue lower hull -->
      <path
        d="M10 50 L118 50 L108 60 L20 60 Z"
        fill="#002D62"
        stroke="none"
      />

      <!-- Red upper hull -->
      <rect
        x="10"
        y="46"
        width="108"
        height="4"
        fill="#D71920"
      />

      <!-- White stripe between hull sections -->
      <rect
        x="10"
        y="44"
        width="108"
        height="2"
        fill="#FFFFFF"
      />

      <!-- Upper deck -->
      <rect
        x="34"
        y="32"
        width="60"
        height="12"
        fill="#FFFFFF"
      />

      <!-- Bridge -->
      <rect
        x="54"
        y="20"
        width="20"
        height="12"
        fill="#FFFFFF"
      />

      <!-- Chimney with blue top and orange base -->
      <rect
        x="70"
        y="10"
        width="10"
        height="10"
        fill="#002D62"
      />
      <rect
        x="70"
        y="20"
        width="10"
        height="4"
        fill="#F17C00"
      />

      <!-- Bow icebreaker -->
      <polygon
        points="10,50 20,50 15,42"
        fill="#D71920"
      />

      <!-- Simplified orange crane on the left -->
      <line
        x1="28"
        y1="32"
        x2="20"
        y2="20"
        stroke="#F17C00"
        stroke-width="2"
      />

      <!-- Simplified orange crane on the right -->
      <line
        x1="100"
        y1="32"
        x2="110"
        y2="20"
        stroke="#F17C00"
        stroke-width="2"
      />
    </svg>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
});
