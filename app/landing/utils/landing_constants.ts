export const INFO_CARDS_DATA = [
  {
    id: "restaurante",
    logoSrc: "/logos/Buen_Sabor.png",
    logoAlt: "El buen sabor",
    position: "left-[-8%] top-[1%]",
    delay: 0.4,
    animationDelay: 0.5,
    logoSize: 100, // Tamaño del logo circular
  },
  {
    id: "hamburgueseria",
    logoSrc: "/logos/Hot_Burger.png",
    logoAlt: "Hot Burger",
    position: "right-[-8%] top-[1%]",
    delay: 0.4,
    animationDelay: 0.7,
    logoSize: 100,
  },
  {
    id: "pizzeria",
    logoSrc: "/logos/Napoli_Express.png",
    logoAlt: "Napoli Express",
    position: "left-[12%] top-[35%]",
    delay: 0.6,
    animationDelay: 0.9,
    logoSize: 80,
  },
  {
    id: "cafeteria",
    logoSrc: "/logos/Cafe_Aroma.png",
    logoAlt: "Cafe Aroma",
    position: "right-[12%] top-[35%]",
    delay: 0.6,
    animationDelay: 1.1,
    logoSize: 100,
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