
export const INFO_CARDS_DATA = [
  {
    id: "restaurante",
    titleImageSrc: "/logos/Buen_Sabor.png", // Corregido: usa /logo/ en lugar de /titles/
    titleImageAlt: "El buen sabor",
    position: "left-[-8%] top-[1%]",
    delay: 0.4,
    animationDelay: 0.5,
  },
  {
    id: "hamburgueseria",
    titleImageSrc: "/logos/Hot_Burger.png", // Cambiado a /logo/ para consistencia
    titleImageAlt: "Hot Burger",
    position: "right-[-8%] top-[1%]",
    delay: 0.4,
    animationDelay: 0.7,
  },
  {
    id: "pizzeria",
    titleImageSrc: "/logos/Napoli_Express.png", // Cambiado a /logo/ para consistencia
    titleImageAlt: "Napoli Express",
    position: "left-[12%] top-[35%]",
    delay: 0.6,
    animationDelay: 0.9,
  },
  {
    id: "cafeteria",
    titleImageSrc: "/logos/Cafe_Aroma.png", // Cambiado a /logo/ para consistencia
    titleImageAlt: "Cafe Aroma",
    position: "right-[12%] top-[35%]",
    delay: 0.6,
    animationDelay: 1.1,
  },
] as const;

export const WHATSAPP_CONFIG = {
  phoneNumber: "541170605577",
  defaultMessage: "¡Hola! Me interesa saber más sobre ToppingFly",
};

export const VIDEO_CONFIG = {
  videoUrl: "/video/intro_toppingfly.mov",
  posterImage: "/images/video-poster.jpg",
};