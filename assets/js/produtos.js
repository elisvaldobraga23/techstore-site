 const produtos = [
  {
    id: 1,
    nome: "Notebook Gamer Nitro V15",
    preco: 4799.90,
    descricao:
      "Notebook desenvolvido para jogos e produtividade, oferecendo excelente desempenho e carregamento rápido.",
    fotos: [
      "",
      "",
      "",
    ],
    especificacoes: {
      processador: { label: "Processador", valor: "Intel Core i5 13420H" },
      memoria: { label: "Memória RAM", valor: "16 GB DDR5" },
      armazenamento: { label: "Armazenamento", valor: "SSD 512 GB NVMe" },
      placaVideo: { label: "Placa de Vídeo", valor: "RTX 4050 6GB" },
      tela: { label: "Tela", valor: '15.6" Full HD 144Hz' }
    }
  },

  {
    id: 2,
    nome: "Monitor Gamer 27 Polegadas",
    preco: 1299.90,
    descricao:
      "Monitor IPS com alta taxa de atualização para jogos e trabalhos gráficos.",
    fotos: [
      "",
      "",
      "",
    ],
    especificacoes: {
      tamanho: { label: "Tamanho", valor: "27 Polegadas" },
      resolucao: { label: "Resolução", valor: "Full HD" },
      painel: { label: "Painel", valor: "IPS" },
      taxaAtualizacao: { label: "Taxa de Atualização", valor: "180Hz" },
      tempoResposta: { label: "Tempo de Resposta", valor: "1ms" }
    }
  },

  {
    id: 3,
    nome: "Mouse Gamer RGB",
    preco: 189.90,
    descricao:
      "Mouse ergonômico com iluminação RGB personalizável e alta precisão.",
    fotos: [
      "",
      "",
      "",
    ],
    especificacoes: {
      dpi: { label: "DPI", valor: "16000 DPI" },
      botoes: { label: "Botões", valor: "7" },
      conexao: { label: "Conexão", valor: "USB" },
      rgb: { label: "Iluminação RGB", valor: "Sim" },
      peso: { label: "Peso", valor: "75 g" }
    }
  },

  {
    id: 4,
    nome: "Teclado Mecânico RGB",
    preco: 359.90,
    descricao:
      "Teclado mecânico com switches de alta durabilidade e iluminação RGB.",
    fotos: [
      "",
      "",
      "",
    ],
    especificacoes: {
      switch: { label: "Switch", valor: "Red" },
      iluminacao: { label: "Iluminação", valor: "RGB" },
      layout: { label: "Layout", valor: "ABNT2" },
      conexao: { label: "Conexão", valor: "USB-C" },
      antiGhosting: { label: "Anti-Ghosting", valor: "Sim" }
    }
  },

  {
    id: 5,
    nome: "Headset Gamer Surround",
    preco: 299.90,
    descricao:
      "Headset confortável com áudio surround e microfone removível.",
    fotos: [
      "",
      "",
      "",
    ],
    especificacoes: {
      audio: { label: "Áudio", valor: "7.1 Virtual" },
      conexao: { label: "Conexão", valor: "USB" },
      microfone: { label: "Microfone", valor: "Removível" },
      cabo: { label: "Comprimento do Cabo", valor: "2 m" },
      rgb: { label: "Iluminação RGB", valor: "Sim" }
    }
  },

  {
    id: 6,
    nome: "SSD NVMe 1TB",
    preco: 549.90,
    descricao:
      "SSD de alta velocidade para inicialização rápida e carregamento de aplicativos.",
    fotos: [
      "",
      "",
      "",
    ],
    especificacoes: {
      capacidade: { label: "Capacidade", valor: "1 TB" },
      interface: { label: "Interface", valor: "PCIe 4.0" },
      leitura: { label: "Velocidade de Leitura", valor: "7000 MB/s" },
      gravacao: { label: "Velocidade de Gravação", valor: "6000 MB/s" },
      formato: { label: "Formato", valor: "M.2 2280" }
    }
  },

  {
    id: 7,
    nome: "Placa de Vídeo RTX 4060",
    preco: 2499.90,
    descricao:
      "Placa de vídeo para jogos em alta qualidade e criação de conteúdo.",
    fotos: [
      "",
      "",
      "",
    ],
    especificacoes: {
      memoria: { label: "Memória", valor: "8 GB GDDR6" },
      interface: { label: "Interface", valor: "PCIe 4.0" },
      rayTracing: { label: "Ray Tracing", valor: "Sim" },
      dlss: { label: "DLSS", valor: "DLSS 3" },
      consumo: { label: "Consumo de Energia", valor: "115 W" }
    }
  },

  {
    id: 8,
    nome: "Smartphone Premium 256GB",
    preco: 3899.90,
    descricao:
      "Smartphone com câmera avançada, tela AMOLED e desempenho de alto nível.",
    fotos: [
      "",
      "",
      "",
    ],
    especificacoes: {
      tela: { label: "Tela", valor: '6.7" AMOLED' },
      armazenamento: { label: "Armazenamento", valor: "256 GB" },
      memoria: { label: "Memória RAM", valor: "12 GB" },
      bateria: { label: "Bateria", valor: "5000 mAh" },
      camera: { label: "Câmera", valor: "50 MP" }
    }
  },

  {
    id: 9,
    nome: "Smartwatch Fitness",
    preco: 599.90,
    descricao:
      "Relógio inteligente com monitoramento de saúde e atividades físicas.",
    fotos: [
      "",
      "",
      "",
    ],
    especificacoes: {
      tela: { label: "Tela", valor: "AMOLED" },
      bateria: { label: "Bateria", valor: "10 dias" },
      gps: { label: "GPS", valor: "Integrado" },
      resistencia: { label: "Resistência", valor: "5 ATM" },
      bluetooth: { label: "Bluetooth", valor: "5.3" }
    }
  },

  {
    id: 10,
    nome: "Caixa de Som Bluetooth",
    preco: 429.90,
    descricao:
      "Caixa de som portátil com áudio potente e resistência à água.",
    fotos: [
      "",
      "",
      "",
    ],
    especificacoes: {
      potencia: { label: "Potência", valor: "40 W" },
      bluetooth: { label: "Bluetooth", valor: "5.3" },
      bateria: { label: "Bateria", valor: "20 horas" },
      resistencia: { label: "Resistência", valor: "IP67" },
      carregamento: { label: "Carregamento", valor: "USB-C" }
    }
  }
];

export default produtos
