document.getElementById("slideButton").addEventListener("click", function () {
  var section = document.getElementById("hiddenSection");
  section.classList.toggle("show");

  if (section.classList.contains("show")) {
    section.style.display = "flex";
    section.style.flexDirection = "row";
    section.style.justifyContent = "space-between";
  } else {
    section.style.display = "none";
  }
});

const PRODUCTS = {
  "cereal-a": {
    emoji: "🌾",
    category: "Álcoois Cereais",
    name: "Marca Cereal A",
    desc: "Álcool cereal de alta pureza, produzido a partir de grãos selecionados. Ideal para uso industrial e comercial, com excelente rendimento e qualidade certificada.",
    tags: ["Uso Industrial", "Alta Pureza", "Granel"],
    specs: [
      { label: "Teor Alcoólico", value: "96° GL" },
      { label: "Origem", value: "Cereal" },
      { label: "Embalagens", value: "200L / 1000L" },
      { label: "Validade", value: "24 meses" },
    ],
  },
  "hidratado-a": {
    emoji: "💧",
    category: "Álcool Hidratado",
    name: "Marca Hidratado A",
    desc: "Álcool hidratado combustível com alto desempenho. Produzido conforme as normas ANP, ideal para abastecimento veicular e geração de energia.",
    tags: ["Combustível", "Norma ANP", "Automotivo"],
    specs: [
      { label: "Teor Alcoólico", value: "92,6° INPM" },
      { label: "Tipo", value: "Hidratado" },
      { label: "Embalagens", value: "Granel / Tambor" },
      { label: "Certificação", value: "ANP" },
    ],
  },
  "hidratado-b": {
    emoji: "💧",
    category: "Álcool Hidratado",
    name: "Marca Hidratado B",
    desc: "Solução alcoólica hidratada para limpeza e higienização, com eficácia comprovada contra bactérias e fungos. Amplamente utilizado em ambientes hospitalares e comerciais.",
    tags: ["Higienização", "Hospitalar", "70 INPM"],
    specs: [
      { label: "Teor Alcoólico", value: "70° INPM" },
      { label: "Tipo", value: "Hidratado" },
      { label: "Embalagens", value: "1L / 5L / 20L" },
      { label: "Validade", value: "24 meses" },
    ],
  },
  "hidratado-c": {
    emoji: "💧",
    category: "Álcool Hidratado",
    name: "Marca Hidratado C",
    desc: "Álcool hidratado para uso doméstico e comercial. Eficaz na limpeza de superfícies, remoção de manchas e como agente desinfetante geral.",
    tags: ["Doméstico", "Multiuso", "Econômico"],
    specs: [
      { label: "Teor Alcoólico", value: "46° GL" },
      { label: "Tipo", value: "Hidratado" },
      { label: "Embalagens", value: "500ml / 1L / 5L" },
      { label: "Validade", value: "12 meses" },
    ],
  },
  "coca-cola": {
    emoji: "🥤",
    category: "Bebidas",
    name: "Coca-Cola",
    desc: "O refrigerante mais famoso do mundo. Sabor inconfundível que refresca e conquista gerações. Distribuído com exclusividade pela YORK como franqueada SOLAR.",
    tags: ["Refrigerante", "Clássico", "Franqueado SOLAR"],
    specs: [
      { label: "Tipos", value: "Original / Zero / Light" },
      { label: "Embalagens", value: "Lata / PET / Vidro" },
      { label: "Volumes", value: "350ml a 2,5L" },
      { label: "Origem", value: "SOLAR Coca-Cola" },
    ],
  },
  fanta: {
    emoji: "🍊",
    category: "Bebidas",
    name: "Fanta",
    desc: "Refrigerante de frutas com sabores vibrantes e refrescantes. Fanta é sinônimo de diversão e tem variedades para todos os gostos.",
    tags: ["Refrigerante", "Sabor Frutas", "Jovem"],
    specs: [
      { label: "Sabores", value: "Laranja / Uva / Limão" },
      { label: "Embalagens", value: "Lata / PET" },
      { label: "Volumes", value: "350ml a 2L" },
      { label: "Linha", value: "Coca-Cola Brasil" },
    ],
  },
  sprite: {
    emoji: "💚",
    category: "Bebidas",
    name: "Sprite",
    desc: "Refrigerante de limão com gás, sabor leve e extremamente refrescante. Sprite é a escolha certa para quem busca refrescância sem cor.",
    tags: ["Refrigerante", "Limão", "Sem Cor"],
    specs: [
      { label: "Sabor", value: "Limão / Zero" },
      { label: "Embalagens", value: "Lata / PET / Vidro" },
      { label: "Volumes", value: "350ml a 2L" },
      { label: "Linha", value: "Coca-Cola Brasil" },
    ],
  },
  kaiser: {
    emoji: "🍺",
    category: "Bebidas",
    name: "Kaiser",
    desc: "Cerveja brasileira de tradição, com sabor suave e refrescante. Kaiser é uma das marcas mais queridas do portfólio de cervejas nacionais.",
    tags: ["Cerveja", "Nacional", "Lager"],
    specs: [
      { label: "Tipo", value: "Lager / Premium" },
      { label: "Teor Alcoólico", value: "4,3% vol." },
      { label: "Embalagens", value: "Long neck / Lata / Barril" },
      { label: "Volumes", value: "350ml / 600ml" },
    ],
  },
  kuat: {
    emoji: "🥭",
    category: "Bebidas",
    name: "Kuat",
    desc: "Guaraná brasileiro com sabor único e levemente adocicado. Kuat é o refrigerante de guaraná da família Coca-Cola, feito com extrato natural da fruta.",
    tags: ["Guaraná", "Brasileiro", "Natural"],
    specs: [
      { label: "Sabor", value: "Guaraná / Zero" },
      { label: "Embalagens", value: "Lata / PET" },
      { label: "Volumes", value: "350ml a 2L" },
      { label: "Linha", value: "Coca-Cola Brasil" },
    ],
  },
  crystal: {
    emoji: "💎",
    category: "Bebidas",
    name: "Crystal",
    desc: "Água mineral Crystal, pura e de qualidade premium. Disponível com e sem gás, ideal para consumo doméstico, comercial e em grandes eventos.",
    tags: ["Água Mineral", "Com/Sem Gás", "Premium"],
    specs: [
      { label: "Tipos", value: "Com Gás / Sem Gás" },
      { label: "Embalagens", value: "PET / Galão" },
      { label: "Volumes", value: "500ml a 20L" },
      { label: "Linha", value: "Coca-Cola Brasil" },
    ],
  },
  "del-valle": {
    emoji: "🍹",
    category: "Bebidas",
    name: "Del Valle",
    desc: "Sucos e néctares Del Valle com sabores naturais e refrescantes. A linha mais completa em sucos de frutas da família Coca-Cola.",
    tags: ["Suco", "Néctar", "Frutas Naturais"],
    specs: [
      { label: "Sabores", value: "+10 sabores" },
      { label: "Linha", value: "Néctar / Fresh / Mais" },
      { label: "Volumes", value: "200ml a 1,5L" },
      { label: "Origem", value: "Coca-Cola Brasil" },
    ],
  },
  burn: {
    emoji: "⚡",
    category: "Bebidas",
    name: "Burn",
    desc: "Energético Burn para quem precisa de mais energia e foco. Fórmula com cafeína, taurina e vitaminas do complexo B para máxima performance.",
    tags: ["Energético", "Cafeína", "Performance"],
    specs: [
      { label: "Sabores", value: "Original / Tropical" },
      { label: "Teor Cafeína", value: "32mg/100ml" },
      { label: "Embalagens", value: "Lata 473ml" },
      { label: "Linha", value: "Coca-Cola Brasil" },
    ],
  },
  heineken: {
    emoji: "🟢",
    category: "Bebidas",
    name: "Heineken",
    desc: "A cerveja premium holandesa mais famosa do mundo. Heineken é sinônimo de qualidade internacional, com sabor equilibrado e refrescante.",
    tags: ["Cerveja Premium", "Importada", "Lager"],
    specs: [
      { label: "Tipo", value: "Lager / 0.0 / Silver" },
      { label: "Teor Alcoólico", value: "5% vol." },
      { label: "Embalagens", value: "Long neck / Lata / Barril" },
      { label: "Volumes", value: "330ml / 600ml" },
    ],
  },
  leao: {
    emoji: "🍵",
    category: "Bebidas",
    name: "Leão Ice Tea",
    desc: "Chá gelado Leão Ice Tea nos sabores mais refrescantes. Feito com extrato de chá real e sem conservantes, perfeito para qualquer momento do dia.",
    tags: ["Chá Gelado", "Sem Conservantes", "Refrescante"],
    specs: [
      { label: "Sabores", value: "Pêssego / Limão / Morango" },
      { label: "Embalagens", value: "PET / Lata" },
      { label: "Volumes", value: "300ml a 1,5L" },
      { label: "Linha", value: "Coca-Cola Brasil" },
    ],
  },
  gladiator: {
    emoji: "💪",
    category: "Bebidas",
    name: "Gladiator",
    desc: "Energético Gladiator com custo acessível e alto rendimento. Ideal para quem busca energia e disposição no dia a dia sem abrir mão do sabor.",
    tags: ["Energético", "Acessível", "Alto Rendimento"],
    specs: [
      { label: "Sabores", value: "Original / Frutas" },
      { label: "Teor Cafeína", value: "30mg/100ml" },
      { label: "Embalagens", value: "Lata 269ml / 473ml" },
      { label: "Linha", value: "Distribuição YORK" },
    ],
  },
  bavaria: {
    emoji: "🍻",
    category: "Bebidas",
    name: "Bavaria",
    desc: "Cerveja Bavaria, tradição e sabor com um preço justo. Com longa história no mercado brasileiro, Bavaria oferece qualidade e refrescância em cada dose.",
    tags: ["Cerveja", "Nacional", "Tradicional"],
    specs: [
      { label: "Tipo", value: "Lager / Malzbier / Sem Álcool" },
      { label: "Teor Alcoólico", value: "4,7% vol." },
      { label: "Embalagens", value: "Long neck / Lata / Barril" },
      { label: "Volumes", value: "350ml / 600ml" },
    ],
  },
};

const WHATSAPP_NUMBER = '5531983754922';
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xvzjglje'; // registre em formspree.io com feralcooldistribuidora@gmail.com
 
// ── PRODUTO MODAL ──
let currentProduct = null;
const overlay = document.getElementById('product-modal');
const closeBtn = document.getElementById('modal-close');
 
document.querySelectorAll('.brand-pill[data-product]').forEach(btn => {
  btn.addEventListener('click', () => {
    const p = PRODUCTS[btn.dataset.product];
    if (!p) return;
    currentProduct = p;
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
 
// ── PEDIDO MODAL ──
const orderOverlay = document.getElementById('order-modal');
const orderCloseBtn = document.getElementById('order-modal-close');
 
document.getElementById('open-order-btn').addEventListener('click', () => {
  if (!currentProduct) return;
  document.getElementById('order-product-title').textContent = currentProduct.name;
  // reset form
  ['field-nome','field-empresa','field-telefone','field-email','field-embalagem','field-quantidade','field-obs']
    .forEach(id => document.getElementById(id).value = '');
  document.getElementById('order-error').style.display = 'none';
  document.getElementById('order-form-area').style.display = 'block';
  document.getElementById('order-success').style.display = 'none';
  orderOverlay.classList.add('active');
  orderOverlay.setAttribute('aria-hidden', 'false');
});
 
function closeOrderModal() {
  orderOverlay.classList.remove('active');
  orderOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
 
orderCloseBtn.addEventListener('click', closeOrderModal);
orderOverlay.addEventListener('click', e => { if (e.target === orderOverlay) closeOrderModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal(); closeOrderModal(); } });
document.getElementById('order-success-close').addEventListener('click', closeOrderModal);
 
function getFormData() {
  return {
    nome: document.getElementById('field-nome').value.trim(),
    empresa: document.getElementById('field-empresa').value.trim(),
    telefone: document.getElementById('field-telefone').value.trim(),
    email: document.getElementById('field-email').value.trim(),
    embalagem: document.getElementById('field-embalagem').value.trim(),
    quantidade: document.getElementById('field-quantidade').value.trim(),
    obs: document.getElementById('field-obs').value.trim(),
  };
}
 
function validateForm(data) {
  return data.nome && data.empresa && data.telefone && data.quantidade;
}
 
// WhatsApp
document.getElementById('btn-whatsapp').addEventListener('click', () => {
  const d = getFormData();
  if (!validateForm(d)) {
    document.getElementById('order-error').style.display = 'block';
    return;
  }
  document.getElementById('order-error').style.display = 'none';
  const produto = currentProduct ? currentProduct.name : '';
  const msg = `*Solicitação de Cotação — YORK*\n\n` +
    `📦 *Produto:* ${produto}\n` +
    `👤 *Nome:* ${d.nome}\n` +
    `🏢 *Empresa:* ${d.empresa}\n` +
    `📞 *Telefone:* ${d.telefone}\n` +
    (d.email ? `📧 *E-mail:* ${d.email}\n` : '') +
    (d.embalagem ? `📐 *Embalagem:* ${d.embalagem}\n` : '') +
    `📊 *Quantidade:* ${d.quantidade}\n` +
    (d.obs ? `📝 *Observações:* ${d.obs}` : '');
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
  document.getElementById('order-form-area').style.display = 'none';
  document.getElementById('order-success').style.display = 'block';
});
 
// E-mail via Formspree
document.getElementById('btn-email').addEventListener('click', async () => {
  const d = getFormData();
  if (!validateForm(d)) {
    document.getElementById('order-error').style.display = 'block';
    return;
  }
  document.getElementById('order-error').style.display = 'none';
  const produto = currentProduct ? currentProduct.name : '';
  const btn = document.getElementById('btn-email');
  btn.textContent = 'Enviando...';
  btn.disabled = true;
  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        produto, nome: d.nome, empresa: d.empresa,
        telefone: d.telefone, email: d.email,
        embalagem: d.embalagem, quantidade: d.quantidade,
        observacoes: d.obs,
        _subject: `Cotação: ${produto} — ${d.empresa}`
      })
    });
    if (res.ok) {
      document.getElementById('order-form-area').style.display = 'none';
      document.getElementById('order-success').style.display = 'block';
    } else {
      alert('Erro ao enviar. Tente pelo WhatsApp.');
    }
  } catch {
    alert('Erro de conexão. Tente pelo WhatsApp.');
  }
  btn.textContent = 'Enviar por E-mail';
  btn.disabled = false;
});

// ── ORÇAMENTO GERAL (CTA) ──
const generalOrderOverlay = document.getElementById('general-order-modal');

document.getElementById('open-general-order-btn').addEventListener('click', () => {
  // reset
  document.getElementById('general-field-produto').value = '';
  ['general-field-nome','general-field-empresa','general-field-telefone',
   'general-field-email','general-field-embalagem','general-field-quantidade','general-field-obs']
    .forEach(id => document.getElementById(id).value = '');
  document.getElementById('general-order-error').style.display = 'none';
  document.getElementById('general-order-form-area').style.display = 'block';
  document.getElementById('general-order-success').style.display = 'none';
  generalOrderOverlay.classList.add('active');
  generalOrderOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
});

function closeGeneralOrderModal() {
  generalOrderOverlay.classList.remove('active');
  generalOrderOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.getElementById('general-order-close').addEventListener('click', closeGeneralOrderModal);
document.getElementById('general-order-success-close').addEventListener('click', closeGeneralOrderModal);
generalOrderOverlay.addEventListener('click', e => { if (e.target === generalOrderOverlay) closeGeneralOrderModal(); });

// fechar com Esc — substitua o listener anterior por este:
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); closeOrderModal(); closeGeneralOrderModal(); closeMapModal(); }
});

function getGeneralFormData() {
  return {
    produto:    document.getElementById('general-field-produto').value,
    nome:       document.getElementById('general-field-nome').value.trim(),
    empresa:    document.getElementById('general-field-empresa').value.trim(),
    telefone:   document.getElementById('general-field-telefone').value.trim(),
    email:      document.getElementById('general-field-email').value.trim(),
    embalagem:  document.getElementById('general-field-embalagem').value.trim(),
    quantidade: document.getElementById('general-field-quantidade').value.trim(),
    obs:        document.getElementById('general-field-obs').value.trim(),
  };
}

function validateGeneralForm(data) {
  return data.produto && data.nome && data.empresa && data.telefone && data.quantidade;
}

document.getElementById('general-btn-whatsapp').addEventListener('click', () => {
  const d = getGeneralFormData();
  if (!validateGeneralForm(d)) {
    document.getElementById('general-order-error').style.display = 'block';
    return;
  }
  document.getElementById('general-order-error').style.display = 'none';
  const msg =
    `*Solicitação de Orçamento — Feralcool*\n\n` +
    `📦 *Produto:* ${d.produto}\n` +
    `👤 *Nome:* ${d.nome}\n` +
    `🏢 *Empresa:* ${d.empresa}\n` +
    `📞 *Telefone:* ${d.telefone}\n` +
    (d.email     ? `📧 *E-mail:* ${d.email}\n`       : '') +
    (d.embalagem ? `📐 *Embalagem:* ${d.embalagem}\n` : '') +
    `📊 *Quantidade:* ${d.quantidade}\n` +
    (d.obs       ? `📝 *Observações:* ${d.obs}`       : '');
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  document.getElementById('general-order-form-area').style.display = 'none';
  document.getElementById('general-order-success').style.display = 'block';
});

document.getElementById('general-btn-email').addEventListener('click', async () => {
  const d = getGeneralFormData();
  if (!validateGeneralForm(d)) {
    document.getElementById('general-order-error').style.display = 'block';
    return;
  }
  document.getElementById('general-order-error').style.display = 'none';
  const btn = document.getElementById('general-btn-email');
  btn.textContent = 'Enviando...';
  btn.disabled = true;
  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        produto:     d.produto,
        nome:        d.nome,
        empresa:     d.empresa,
        telefone:    d.telefone,
        email:       d.email,
        embalagem:   d.embalagem,
        quantidade:  d.quantidade,
        observacoes: d.obs,
        _subject:    `Orçamento: ${d.produto} — ${d.empresa}`
      })
    });
    if (res.ok) {
      document.getElementById('general-order-form-area').style.display = 'none';
      document.getElementById('general-order-success').style.display = 'block';
    } else {
      alert('Erro ao enviar. Tente pelo WhatsApp.');
    }
  } catch {
    alert('Erro de conexão. Tente pelo WhatsApp.');
  }
  btn.textContent = 'Enviar por E-mail';
  btn.disabled = false;
});

// ── MAPA DE COBERTURA ──
const mapModal = document.getElementById('map-modal');
const mapModalClose = document.getElementById('map-modal-close');
let mapInstance = null;

document.getElementById('open-map-btn').addEventListener('click', () => {
  mapModal.classList.add('active');
  mapModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Inicializa o mapa apenas uma vez
  if (!mapInstance) {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.onload = () => initMap();
    document.head.appendChild(script);
  } else {
    setTimeout(() => mapInstance.invalidateSize(), 100);
  }
});

function initMap() {
  mapInstance = L.map('coverage-map', { zoomControl: true }).setView([-19.9167, -43.9345], 12);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18,
  }).addTo(mapInstance);

  // ── ÁREA DE COBERTURA ──
  // Edite as coordenadas abaixo para ajustar o polígono à sua região real
  const coverageArea = [
    [-19.8550, -44.0200], // Noroeste — Contagem / Ibirité
    [-19.8300, -43.9800], // Norte — Venda Nova / Pampulha
    [-19.8200, -43.9200], // Nordeste — Santa Luzia / Ribeiro de Abreu
    [-19.8600, -43.8700], // Leste — Caiçara / Sagrada Família
    [-19.9200, -43.8500], // Sudeste — Barreiro / Santa Efigênia
    [-19.9800, -43.8800], // Sul — Betim / Eldorado
    [-19.9900, -43.9600], // Sudoeste — Contagem
    [-19.9500, -44.0300], // Oeste — Ibirité / Betim
    [-19.8900, -44.0500], // Oeste-norte
  ];

  const polygon = L.polygon(coverageArea, {
    color: '#23be1e',
    weight: 2,
    fillColor: '#23be1e',
    fillOpacity: 0.2,
  }).addTo(mapInstance);

  // Marca o endereço da empresa
  const marker = L.marker([-19.9167, -43.9345]).addTo(mapInstance);
  marker.bindPopup(`
    <strong>Feralcool Distribuidora</strong><br>
    R. Além Paraíba, 725<br>
    Belo Horizonte – MG
  `).openPopup();

  mapInstance.fitBounds(polygon.getBounds(), { padding: [40, 40] });
}

function closeMapModal() {
  mapModal.classList.remove('active');
  mapModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

mapModalClose.addEventListener('click', closeMapModal);
mapModal.addEventListener('click', e => { if (e.target === mapModal) closeMapModal(); });