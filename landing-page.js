const PRODUCTS = {
  "cereal-a": {
    emoji: "🌾", category: "Álcoois Cereais", name: "Marca Cereal A",
    desc: "Álcool cereal de alta pureza, produzido a partir de grãos selecionados. Ideal para uso industrial e comercial, com excelente rendimento e qualidade certificada.",
    tags: ["Uso Industrial", "Alta Pureza", "Granel"],
    specs: [
      { label: "Teor Alcoólico", value: "96° GL" },
      { label: "Origem", value: "Cereal" },
      { label: "Embalagens", value: "200L / 1000L" },
      { label: "Validade", value: "24 meses" }
    ]
  },
  "hidratado-a": {
    emoji: "💧", category: "Álcool Hidratado", name: "Marca Hidratado A",
    desc: "Álcool hidratado combustível com alto desempenho. Produzido conforme as normas ANP, ideal para abastecimento veicular e geração de energia.",
    tags: ["Combustível", "Norma ANP", "Automotivo"],
    specs: [
      { label: "Teor Alcoólico", value: "92,6° INPM" },
      { label: "Tipo", value: "Hidratado" },
      { label: "Embalagens", value: "Granel / Tambor" },
      { label: "Certificação", value: "ANP" }
    ]
  },
  "hidratado-b": {
    emoji: "💧", category: "Álcool Hidratado", name: "Marca Hidratado B",
    desc: "Solução alcoólica hidratada para limpeza e higienização, com eficácia comprovada contra bactérias e fungos. Amplamente utilizado em ambientes hospitalares e comerciais.",
    tags: ["Higienização", "Hospitalar", "70 INPM"],
    specs: [
      { label: "Teor Alcoólico", value: "70° INPM" },
      { label: "Tipo", value: "Hidratado" },
      { label: "Embalagens", value: "1L / 5L / 20L" },
      { label: "Validade", value: "24 meses" }
    ]
  },
  "hidratado-c": {
    emoji: "💧", category: "Álcool Hidratado", name: "Marca Hidratado C",
    desc: "Álcool hidratado para uso doméstico e comercial. Eficaz na limpeza de superfícies, remoção de manchas e como agente desinfetante geral.",
    tags: ["Doméstico", "Multiuso", "Econômico"],
    specs: [
      { label: "Teor Alcoólico", value: "46° GL" },
      { label: "Tipo", value: "Hidratado" },
      { label: "Embalagens", value: "500ml / 1L / 5L" },
      { label: "Validade", value: "12 meses" }
    ]
  },
  "coca-cola": {
    emoji: "🥤", category: "Bebidas", name: "Coca-Cola",
    desc: "O refrigerante mais famoso do mundo. Sabor inconfundível que refresca e conquista gerações. Distribuído com exclusividade pela YORK como franqueada SOLAR.",
    tags: ["Refrigerante", "Clássico", "Franqueado SOLAR"],
    specs: [
      { label: "Tipos", value: "Original / Zero / Light" },
      { label: "Embalagens", value: "Lata / PET / Vidro" },
      { label: "Volumes", value: "350ml a 2,5L" },
      { label: "Origem", value: "SOLAR Coca-Cola" }
    ]
  },
  "fanta": {
    emoji: "🍊", category: "Bebidas", name: "Fanta",
    desc: "Refrigerante de frutas com sabores vibrantes e refrescantes. Fanta é sinônimo de diversão e tem variedades para todos os gostos.",
    tags: ["Refrigerante", "Sabor Frutas", "Jovem"],
    specs: [
      { label: "Sabores", value: "Laranja / Uva / Limão" },
      { label: "Embalagens", value: "Lata / PET" },
      { label: "Volumes", value: "350ml a 2L" },
      { label: "Linha", value: "Coca-Cola Brasil" }
    ]
  },
  "sprite": {
    emoji: "💚", category: "Bebidas", name: "Sprite",
    desc: "Refrigerante de limão com gás, sabor leve e extremamente refrescante. Sprite é a escolha certa para quem busca refrescância sem cor.",
    tags: ["Refrigerante", "Limão", "Sem Cor"],
    specs: [
      { label: "Sabor", value: "Limão / Zero" },
      { label: "Embalagens", value: "Lata / PET / Vidro" },
      { label: "Volumes", value: "350ml a 2L" },
      { label: "Linha", value: "Coca-Cola Brasil" }
    ]
  },
  "kaiser": {
    emoji: "🍺", category: "Bebidas", name: "Kaiser",
    desc: "Cerveja brasileira de tradição, com sabor suave e refrescante. Kaiser é uma das marcas mais queridas do portfólio de cervejas nacionais.",
    tags: ["Cerveja", "Nacional", "Lager"],
    specs: [
      { label: "Tipo", value: "Lager / Premium" },
      { label: "Teor Alcoólico", value: "4,3% vol." },
      { label: "Embalagens", value: "Long neck / Lata / Barril" },
      { label: "Volumes", value: "350ml / 600ml" }
    ]
  },
  "kuat": {
    emoji: "🥭", category: "Bebidas", name: "Kuat",
    desc: "Guaraná brasileiro com sabor único e levemente adocicado. Kuat é o refrigerante de guaraná da família Coca-Cola, feito com extrato natural da fruta.",
    tags: ["Guaraná", "Brasileiro", "Natural"],
    specs: [
      { label: "Sabor", value: "Guaraná / Zero" },
      { label: "Embalagens", value: "Lata / PET" },
      { label: "Volumes", value: "350ml a 2L" },
      { label: "Linha", value: "Coca-Cola Brasil" }
    ]
  },
  "crystal": {
    emoji: "💎", category: "Bebidas", name: "Crystal",
    desc: "Água mineral Crystal, pura e de qualidade premium. Disponível com e sem gás, ideal para consumo doméstico, comercial e em grandes eventos.",
    tags: ["Água Mineral", "Com/Sem Gás", "Premium"],
    specs: [
      { label: "Tipos", value: "Com Gás / Sem Gás" },
      { label: "Embalagens", value: "PET / Galão" },
      { label: "Volumes", value: "500ml a 20L" },
      { label: "Linha", value: "Coca-Cola Brasil" }
    ]
  },
  "del-valle": {
    emoji: "🍹", category: "Bebidas", name: "Del Valle",
    desc: "Sucos e néctares Del Valle com sabores naturais e refrescantes. A linha mais completa em sucos de frutas da família Coca-Cola.",
    tags: ["Suco", "Néctar", "Frutas Naturais"],
    specs: [
      { label: "Sabores", value: "+10 sabores" },
      { label: "Linha", value: "Néctar / Fresh / Mais" },
      { label: "Volumes", value: "200ml a 1,5L" },
      { label: "Origem", value: "Coca-Cola Brasil" }
    ]
  },
  "burn": {
    emoji: "⚡", category: "Bebidas", name: "Burn",
    desc: "Energético Burn para quem precisa de mais energia e foco. Fórmula com cafeína, taurina e vitaminas do complexo B para máxima performance.",
    tags: ["Energético", "Cafeína", "Performance"],
    specs: [
      { label: "Sabores", value: "Original / Tropical" },
      { label: "Teor Cafeína", value: "32mg/100ml" },
      { label: "Embalagens", value: "Lata 473ml" },
      { label: "Linha", value: "Coca-Cola Brasil" }
    ]
  },
  "heineken": {
    emoji: "🟢", category: "Bebidas", name: "Heineken",
    desc: "A cerveja premium holandesa mais famosa do mundo. Heineken é sinônimo de qualidade internacional, com sabor equilibrado e refrescante.",
    tags: ["Cerveja Premium", "Importada", "Lager"],
    specs: [
      { label: "Tipo", value: "Lager / 0.0 / Silver" },
      { label: "Teor Alcoólico", value: "5% vol." },
      { label: "Embalagens", value: "Long neck / Lata / Barril" },
      { label: "Volumes", value: "330ml / 600ml" }
    ]
  },
  "leao": {
    emoji: "🍵", category: "Bebidas", name: "Leão Ice Tea",
    desc: "Chá gelado Leão Ice Tea nos sabores mais refrescantes. Feito com extrato de chá real e sem conservantes, perfeito para qualquer momento do dia.",
    tags: ["Chá Gelado", "Sem Conservantes", "Refrescante"],
    specs: [
      { label: "Sabores", value: "Pêssego / Limão / Morango" },
      { label: "Embalagens", value: "PET / Lata" },
      { label: "Volumes", value: "300ml a 1,5L" },
      { label: "Linha", value: "Coca-Cola Brasil" }
    ]
  },
  "gladiator": {
    emoji: "💪", category: "Bebidas", name: "Gladiator",
    desc: "Energético Gladiator com custo acessível e alto rendimento. Ideal para quem busca energia e disposição no dia a dia sem abrir mão do sabor.",
    tags: ["Energético", "Acessível", "Alto Rendimento"],
    specs: [
      { label: "Sabores", value: "Original / Frutas" },
      { label: "Teor Cafeína", value: "30mg/100ml" },
      { label: "Embalagens", value: "Lata 269ml / 473ml" },
      { label: "Linha", value: "Distribuição YORK" }
    ]
  },
  "bavaria": {
    emoji: "🍻", category: "Bebidas", name: "Bavaria",
    desc: "Cerveja Bavaria, tradição e sabor com um preço justo. Com longa história no mercado brasileiro, Bavaria oferece qualidade e refrescância em cada dose.",
    tags: ["Cerveja", "Nacional", "Tradicional"],
    specs: [
      { label: "Tipo", value: "Lager / Malzbier / Sem Álcool" },
      { label: "Teor Alcoólico", value: "4,7% vol." },
      { label: "Embalagens", value: "Long neck / Lata / Barril" },
      { label: "Volumes", value: "350ml / 600ml" }
    ]
  }
};
 
const overlay = document.getElementById('product-modal');
const closeBtn = document.getElementById('modal-close');
 
document.querySelectorAll('.brand-pill[data-product]').forEach(btn => {
  btn.addEventListener('click', () => {
    const p = PRODUCTS[btn.dataset.product];
    if (!p) return;
    document.getElementById('modal-emoji').textContent = p.emoji;
    document.getElementById('modal-category').textContent = p.category;
    document.getElementById('modal-title').textContent = p.name;
    document.getElementById('modal-desc').textContent = p.desc;
    document.getElementById('modal-tags').innerHTML = p.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');
    document.getElementById('modal-specs').innerHTML = p.specs.map(s =>
      `<div class="modal-spec"><div class="modal-spec-label">${s.label}</div><div class="modal-spec-value">${s.value}</div></div>`
    ).join('');
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });
});
 
function closeModal() {
  overlay.classList.remove('active');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
 
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });