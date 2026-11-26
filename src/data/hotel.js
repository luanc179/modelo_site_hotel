export const hotelData = {
  name: "Alto Rio Negro Hotel",
  shortName: "Alto Rio Negro",
  initials: "ARN",
  city: "São Gabriel da Cachoeira • Amazonas",
  whatsapp: "5597999999999", // Substitua pelo WhatsApp real do hotel
  instagram: "@hotelaltorionegro",
  address: "Centro, São Gabriel da Cachoeira - AM",
  heroImage: "/images/capa.jpg",
  heroFallback: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80",
  rooms: [
    {
      id: "single",
      name: "Apartamento Individual (Single)",
      subtitle: "Ideal para viagens a trabalho e missões institucionais",
      dailyRate: 180, // Valor de referência para estimativa (editável)
      size: "18 m²",
      bed: "1 Cama Box Solteiro / Viúva",
      image: "/images/single.jpg",
      fallback: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80",
      description: "Ambiente silencioso e climatizado com bancada de apoio para notebook, iluminação adequada e Wi-Fi estável.",
      amenities: [
        "Ar-condicionado Split",
        "Wi-Fi de alta velocidade",
        "Frigobar abastecível",
        "TV e Banheiro privativo",
        "Café da manhã regional incluso"
      ]
    },
    {
      id: "casal",
      name: "Apartamento Casal / Duplo",
      subtitle: "Conforto completo para casais ou dois hóspedes",
      dailyRate: 240,
      size: "22 m²",
      bed: "1 Cama Box Casal ou 2 Solteiro",
      image: "/images/casal.jpg",
      fallback: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
      description: "Quarto amplo com opção de cama de casal ou duas camas separadas, ideal para estadias curtas ou prolongadas.",
      amenities: [
        "Ar-condicionado Split",
        "Wi-Fi dedicado",
        "Frigobar e Armário",
        "Banheiro privativo",
        "Café da manhã regional incluso"
      ]
    },
    {
      id: "triplo",
      name: "Apartamento Triplo / Equipe",
      subtitle: "Espaço otimizado para famílias e equipes técnicas",
      dailyRate: 310,
      size: "28 m²",
      bed: "1 Cama Casal + 1 Solteiro (ou 3 Solteiro)",
      image: "/images/triplo.jpg",
      fallback: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80",
      description: "Acomodação espaçosa projetada para receber até três pessoas com conforto, climatização eficiente e praticidade.",
      amenities: [
        "Climatização Split",
        "Wi-Fi em todo o ambiente",
        "Frigobar e TV",
        "Banheiro privativo amplo",
        "Café da manhã regional incluso"
      ]
    }
  ]
};