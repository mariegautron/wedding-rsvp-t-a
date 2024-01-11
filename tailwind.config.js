module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      // Vos couleurs personnalisées
      transparent: "transparent",
      "fond-foncé": "#4f4341ff",
      primary: "#b68e88ff",
      "fond-clair": "#e8dad6ff",
      white: "#f9f7f4ff",
      current: "#4f4341ff",
      tagDefault: "#F4E9E3ff", // Fond encore plus clair
      tagDefaultBorder: "#D6BCB4ff", // Bordure
      tagDefaultText: "#4F4341ff", // Texte
      tagSuccess: "#D7E3D2ff", // Fond encore plus clair
      tagSuccessBorder: "#AABBA6ff", // Bordure
      tagSuccessText: "#4F4341ff", // Texte
      tagError: "#F1D6D6ff", // Fond encore plus clair
      tagErrorBorder: "#E1C5C5ff", // Bordure
      tagErrorText: "#4F4341ff", // Texte
    },
    extend: {
      fontFamily: {
        // Vos polices personnalisées
        classico: "classicobold",
        Raleway: "raleway",
      },
      fontSize: {
        // Ajout des tailles de texte personnalisées
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        // ... (autres tailles personnalisées)
        "10xl": "13rem",
      },
      height: {
        "h-0.5": "0.1rem",
      },
      // Étendez ou remplacez d'autres propriétés de base de Tailwind selon vos besoins
    },
  },
  variants: {
    // Variants personnalisées ou extension des variants de base de Tailwind
    extend: {
      fontSize: ["responsive"],
      // ... (autres variants personnalisées)
    },
  },
  plugins: [
    // Plugins personnalisés ou extensions de plugins de base de Tailwind
    // ...
  ],
};
