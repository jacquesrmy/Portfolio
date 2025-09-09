export const servicesData = [
  {
    title: "Systèmes & Administration",
    description:
      "Maîtrise des environnements Linux et Windows pour garantir disponibilité, performance et sécurité des infrastructures IT.",
    items: [
      {
        title: "Linux",
        description: "(Administration avancée, LPIC 101, Red Hat, iptables, routage)",
      },
      {
        title: "Windows Server",
        description: "(AD DS, DNS, DHCP, supervision et dépannage)",
      },
      {
        title: "Automatisation",
        description: "(Bash, Python, scripting système)",
      },
    ],
  },
  {
    title: "Réseaux",
    description:
      "Conception et simulation de réseaux sécurisés pour les entreprises, avec des solutions fiables et évolutives.",
    items: [
      {
        title: "GNS3",
        description: "(Simulation de topologies, routage statique, SNAT/DNAT)",
      },
      {
        title: "Cisco & CCNA",
        description: "(Switching, routing, VLANs, protocoles réseaux)",
      },
      {
        title: "Sécurité réseau",
        description: "(Pare-feu, supervision Nagios, durcissement)",
      },
    ],
  },
  {
    title: "Cloud & Virtualisation",
    description:
      "Déploiement d’applications et d’environnements sur le cloud et en conteneurs pour des infrastructures scalables et résilientes.",
    items: [
      {
        title: "AWS",
        description: "(EC2, ECS, RDS, ElastiCache, S3, ELB, IAM)",
      },
      {
        title: "Docker & VMware",
        description: "(Conteneurisation, orchestration, virtualisation)",
      },
      {
        title: "Azure",
        description: "(Bases Cloud Microsoft, virtualisation, panorama)",
      },
    ],
  },
  {
    title: "Développement & Outils",
    description:
      "Développement d’outils systèmes et d’applications techniques pour améliorer la productivité et l’automatisation.",
    items: [
      {
        title: "Langages systèmes",
        description: "(C, C++, Java, Assembly x86, Go)",
      },
      {
        title: "Développement applicatif",
        description: "(JavaScript, Node.js, React Native, SQL/PostgreSQL)",
      },
      {
        title: "DevOps",
        description: "(Git, CI/CD, tests, intégration continue)",
      },
    ],
  },
];
export const projects = [
  {
    id: 1,
    name: "Mini-Internet - Simulation Réseau",
    description:
      "Simulation d’un Internet miniature avec GNS3 : routage statique, SNAT/DNAT, DHCP, firewall iptables et accès externe aux serveurs.",
    image: "/assets/projects/GNS3.png",
    frameworks: [
      { id: 1, name: "Linux" },
      { id: 2, name: "GNS3" },
      { id: 3, name: "iptables" },
    ],
  },
  {
    id: 2,
    name: "42SH – Shell Unix",
    description:
      "Développement d’un shell Unix conforme POSIX avec gestion des commandes, pipes, redirections et erreurs.",
    image: "/assets/projects/42sh.png",
    frameworks: [
      { id: 1, name: "C" },
      { id: 2, name: "Bash" },
      { id: 3, name: "Linux" },
    ],
  },
  {
    id: 3,
    name: "Plateforme Cloud-Native de Recommandation",
    description:
      "Application full-stack déployée sur AWS (ECS, RDS, S3, ElastiCache, ELB) avec conteneurisation Docker.",
    image: "/assets/projects/Flynn.png",
    frameworks: [
      { id: 1, name: "AWS" },
      { id: 2, name: "Docker" },
      { id: 3, name: "PostgreSQL" },
      { id: 4, name: "Node.js" },
      { id: 5, name: "React Native" },
      { id: 6, name: "TensorFlow" },
    ],
  },
  {
    id: 4,
    name: "Compilateur TIGER",
    description:
      "Conception d’un compilateur avec génération d’arbre syntaxique. Parsing via Flex & Bison, gestion mémoire et erreurs.",
    image: "/assets/projects/tiger.png",
    frameworks: [
      { id: 1, name: "C++" },
      { id: 2, name: "Flex" },
      { id: 3, name: "Bison" },
    ],
  },
  {
    id: 5,
    name: "OCR Sudoku Solver",
    description:
      "OCRSudoku est un logiciel de reconnaissance optique de caractères (OCR) qui résout des grilles de sudoku. Il prend en entrée une image de sudoku et affiche la grille résolue.",
    image: "/assets/projects/OCR-Sudoku.png",
    frameworks: [
      { id: 1, name: "C" },
      { id: 2, name: "OCR" },
      { id: 3, name: "Algorithmics" },
    ],
  },
];
export const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/jacques-remy/" },
  { name: "GitHub", href: "https://github.com/jacquesrmy" },
];
