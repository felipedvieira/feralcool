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
    name: "Álcool de Cereais",
    desc: "Álcool cereal de alta pureza, produzido a partir de grãos selecionados. Ideal para uso industrial e comercial, com excelente rendimento e qualidade certificada.",
    tags: ["Uso Industrial", "Alta Pureza", "Granel"],
    specs: [
      { label: "Teor Alcoólico", value: "96° GL" },
      { label: "Origem", value: "Cereal" },
      { label: "Embalagens", value: "Granel / 5L / 20L / 50L" },
      { label: "Validade", value: "24 meses" },
    ],
  },
  "hidratado-a": {
    emoji: "💧",
    category: "Álcool Hidratado",
    name: "Álcool Hidratado 96°",
    desc: "Álcool hidratado combustível com alto desempenho. Produzido conforme as normas ANP, ideal para abastecimento veicular e geração de energia.",
    tags: ["Combustível", "Norma ANP", "Automotivo"],
    specs: [
      { label: "Teor Alcoólico", value: "96° INPM" },
      { label: "Tipo", value: "Hidratado" },
      { label: "Embalagens", value: "Granel / 5L / 20L / 50L" },
      { label: "Certificação", value: "ANP" },
    ],
  },
  "hidratado-b": {
    emoji: "💧",
    category: "Álcool Hidratado",
    name: "Álcool Hidratado 70°",
    desc: "Solução alcoólica hidratada para limpeza e higienização, com eficácia comprovada contra bactérias e fungos. Amplamente utilizado em ambientes hospitalares e comerciais.",
    tags: ["Higienização", "Hospitalar", "70 INPM"],
    specs: [
      { label: "Teor Alcoólico", value: "70° INPM" },
      { label: "Tipo", value: "Hidratado" },
      { label: "Embalagens", value: "Granel / 5L / 20L / 50L" },
      { label: "Validade", value: "24 meses" },
    ],
  },
  "hidratado-c": {
    emoji: "💧",
    category: "Álcool Hidratado",
    name: "Álcool Isopropílico",
    desc: "Álcool hidratado para uso doméstico e comercial. Eficaz na limpeza de superfícies, remoção de manchas e como agente desinfetante geral.",
    tags: ["Doméstico", "Multiuso", "Econômico"],
    specs: [
      { label: "Teor Alcoólico", value: "46° GL" },
      { label: "Tipo", value: "Hidratado" },
      { label: "Embalagens", value: "500ml / 1L / 5L" },
      { label: "Validade", value: "12 meses" },
    ],
  },
  "Salinas": {
    emoji: "🥃",
    category: "Bebidas",
    name: "Cachaça Salinas",
    desc: "Envelhecida em Tonéis de Bálsamo por 3 Anos - Suavidade e Sabor Marcantes.",
    tags: ["Cachaça", "Tradicional", "Bebidas"],
    specs: [
      { label: "Tipos", value: "Tradicional" },
      { label: "Embalagens", value: "Garrafa" },
      { label: "Volumes", value: "600ml" },
      { label: "Origem", value: "Cachaçaria Salinas" },
    ],
  },
  Seleta: {
    emoji: "🥃",
    category: "Bebidas",
    name: "Cachaça Seleta Ouro",
    desc: "Feita a partir de canas rigorosamente selecionadas, fermentadas, destiladas e armazenadas em tonéis de Umburana, planta conhecida por suas características curativas e digestivas. A Seleta Ouro tem sabor suave e delicioso.",
    tags: ["Cachaça", "Umburana", "Bebidas"],
    specs: [
      { label: "Tipos", value: "Ouro" },
      { label: "Embalagens", value: "Garrafa" },
      { label: "Volumes", value: "600ml" },
      { label: "Origem", value: "Cachaçaria Seleta" },
    ],
  },
  Cristalina: {
    emoji: "🥃",
    category: "Bebidas",
    name: "Cachaça Cristalina Buenópolis Ouro",
    desc: "Descubra a Cachaça Cristalina Buenópolis Ouro 600ml, produzida em Buenópolis, Minas Gerais. Com 42% ABV, é envelhecida por dois anos em barris de amburana, equilibrando juventude e maturidade com uma textura aveludada. Sua cor é amarelo-palha, límpida e cristalina, enquanto o aroma destaca a presença marcante da cana.",
    tags: ["Cachaça", "Umburana", "Bebidas"],
    specs: [
      { label: "Tipos", value: "Ouro" },
      { label: "Embalagens", value: "Garrafa" },
      { label: "Volumes", value: "600ml" },
      { label: "Origem", value: "Cachaçaria Cristalina Buenópolis" },
    ],
  },
  Ferreira: {
    emoji: "🥃",
    category: "Bebidas",
    name: "Cachaça Ferreira Amburana Ouro",
    desc: "A Cachaça Ferreira Januaria Amburana Ouro 600ml é uma bebida armazenada por dois anos em barris de amburana, madeira tipicamente brasileira. Leve, possui graduação alcoólica de 40%.",
    tags: ["Cachaça", "Umburana", "Bebidas"],
    specs: [
      { label: "Tipos", value: "Ouro" },
     { label: "Embalagens", value: "Garrafa" },
      { label: "Volumes", value: "600ml" },
      { label: "Origem", value: "Cachaçaria Ferreira Januária" },
    ],
  },
  cinquentaum: {
    emoji: "🥃",
    category: "Bebidas",
    name: "Cachaça 51",
    desc: "A mais brasileira das cachaças é feita para ser degustada e apreciada em doses, drinks e até mesmo em receitas gastronômicas. Cada etapa do seu processo produtivo é feito cuidadosamente pela empresa, desde o preparo do solo, passando pela escolha da cana, moagem, fermentação, destilação até envase.",
    tags: ["Cachaça", "Tradicional", "Bebidas"],
    specs: [
      { label: "Tipos", value: "Tradicional" },
      { label: "Embalagens", value: "Garrafa" },
      { label: "Volumes", value: "965ml" },
      { label: "Origem", value: "Companhia Müller de Bebidas" },
    ],
  },
  Guaraciaba: {
    emoji: "🥃",
    category: "Bebidas",
    name: "Cachaça Guaraciaba",
    desc: "Cachaça Guaraciaba, disponível nas versões Jequitibá, Amburana e Bálsamo. Diferentes tipos de armazenamento, mas mantendo a qualidade e equilíbro. Marcada pela versatilidade e refinamento, conferem muita personalidade e complexidade de sabores",
    tags: ["Cachaça", "Amburana","Jequitibá","Bálsamo", "Bebidas"],
    specs: [
      { label: "Tipos", value: "Jequitibá / Amburana / Bálsamo" },
      { label: "Embalagens", value: "Garrafa" },
      { label: "Volumes", value: "970ml" },
      { label: "Origem", value: "Cachaça Guaraciaba" },
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
  closeModal();
  openGeneralOrderModal(currentProduct.name);
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

// ── ORÇAMENTO GERAL (CTA) — MÚLTIPLOS PRODUTOS ──
const generalOrderOverlay = document.getElementById('general-order-modal');
const productRowsContainer = document.getElementById('product-rows');
let productRowCount = 0;

const PRODUCT_OPTIONS = [
  { group: 'Álcoois Cereais', items: ['Álcool Cereais'] },
  { group: 'Álcool Hidratado', items: ['Álcool Hidratado 96°', 'Álcool Hidratado 70°', 'Álcool Isopropílico'] },
  { group: 'Bebidas', items: ['Salinas','Seleta','Cristalina','Ferreira','cinquentaum','Guaraciaba','Del Valle','Burn','Heineken','Leão Ice Tea','Gladiator','Bavaria'] },
];

function buildProductOptionsHTML() {
  return '<option value="">Selecione...</option>' +
    PRODUCT_OPTIONS.map(g =>
      `<optgroup label="${g.group}">` +
      g.items.map(i => `<option value="${i}">${i}</option>`).join('') +
      `</optgroup>`
    ).join('');
}

function addProductRow() {
  productRowCount++;
  const rowId = `row-${productRowCount}`;
  const row = document.createElement('div');
  row.className = 'product-row';
  row.id = rowId;
  row.innerHTML = `
    <select class="order-input row-produto">${buildProductOptionsHTML()}</select>
    <input class="order-input row-embalagem" type="text" placeholder="Embalagem">
    <input class="order-input row-quantidade" type="text" placeholder="Quantidade">
    <button type="button" class="btn-remove-row" title="Remover">✕</button>
  `;
  row.querySelector('.btn-remove-row').addEventListener('click', () => {
    if (productRowsContainer.children.length > 1) {
      row.remove();
    }
  });
  productRowsContainer.appendChild(row);
}

document.getElementById('add-product-row').addEventListener('click', addProductRow);

function openGeneralOrderModal(preSelectedProduct = null) {
  productRowsContainer.innerHTML = '';
  productRowCount = 0;
  addProductRow();

  if (preSelectedProduct) {
    const firstSelect = productRowsContainer.querySelector('.row-produto');
    if (firstSelect) firstSelect.value = preSelectedProduct;
  }

  ['general-field-nome','general-field-empresa','general-field-telefone','general-field-email','general-field-obs']
    .forEach(id => document.getElementById(id).value = '');
  document.getElementById('general-order-error').style.display = 'none';
  document.getElementById('general-order-form-area').style.display = 'block';
  document.getElementById('general-order-success').style.display = 'none';
  generalOrderOverlay.classList.add('active');
  generalOrderOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

document.getElementById('open-general-order-btn').addEventListener('click', () => openGeneralOrderModal());

function closeGeneralOrderModal() {
  generalOrderOverlay.classList.remove('active');
  generalOrderOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.getElementById('general-order-close').addEventListener('click', closeGeneralOrderModal);
document.getElementById('general-order-success-close').addEventListener('click', closeGeneralOrderModal);
generalOrderOverlay.addEventListener('click', e => { if (e.target === generalOrderOverlay) closeGeneralOrderModal(); });

function getGeneralFormData() {
  const produtos = [];
  productRowsContainer.querySelectorAll('.product-row').forEach(row => {
    const produto = row.querySelector('.row-produto').value;
    const embalagem = row.querySelector('.row-embalagem').value.trim();
    const quantidade = row.querySelector('.row-quantidade').value.trim();
    if (produto || quantidade) {
      produtos.push({ produto, embalagem, quantidade });
    }
  });
  return {
    produtos,
    nome: document.getElementById('general-field-nome').value.trim(),
    empresa: document.getElementById('general-field-empresa').value.trim(),
    telefone: document.getElementById('general-field-telefone').value.trim(),
    email: document.getElementById('general-field-email').value.trim(),
    obs: document.getElementById('general-field-obs').value.trim(),
  };
}

function validateGeneralForm(data) {
  const produtosValidos = data.produtos.length > 0 &&
    data.produtos.every(p => p.produto && p.quantidade);
  return produtosValidos && data.nome && data.empresa && data.telefone;
}

document.getElementById('general-btn-whatsapp').addEventListener('click', () => {
  const d = getGeneralFormData();
  if (!validateGeneralForm(d)) {
    document.getElementById('general-order-error').style.display = 'block';
    return;
  }
  document.getElementById('general-order-error').style.display = 'none';

  const listaProdutos = d.produtos.map((p, i) =>
    `${i + 1}. ${p.produto}${p.embalagem ? ` (${p.embalagem})` : ''} — *${p.quantidade}*`
  ).join('\n');

  const msg =
    `*Solicitação de Orçamento — Feralcool*\n\n` +
    `📦 *Produtos:*\n${listaProdutos}\n\n` +
    `👤 *Nome:* ${d.nome}\n` +
    `🏢 *Empresa:* ${d.empresa}\n` +
    `📞 *Telefone:* ${d.telefone}\n` +
    (d.email ? `📧 *E-mail:* ${d.email}\n` : '') +
    (d.obs ? `📝 *Observações:* ${d.obs}` : '');

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

  const produtosTexto = d.produtos.map((p, i) =>
    `${i + 1}. ${p.produto}${p.embalagem ? ` (${p.embalagem})` : ''} — ${p.quantidade}`
  ).join('\n');

  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        produtos: produtosTexto,
        nome: d.nome,
        empresa: d.empresa,
        telefone: d.telefone,
        email: d.email,
        observacoes: d.obs,
        _subject: `Orçamento (${d.produtos.length} produto${d.produtos.length > 1 ? 's' : ''}) — ${d.empresa}`
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
  const coverageArea =  [
          [
            -19.8153091,-43.9584104
          ],
          [
            -19.8464878,-43.9133969
            
          ],
          [
             -19.8690254,-43.8898824
           
          ],
          [
            -19.9227235,-43.8686074
            
          ],
          [
            -19.9629326,-43.9270577
            
          ],
          [
            -19.9955474,-43.9674268
            
          ],
          [
            -20.011289,-44.017052
            
          ],
          [
            -19.9853394,-44.0375862
            
          ],
          [
           -19.9536562, -44.1478429
            
          ],
          [
            -19.9011644,-44.1176939
            
          ],
          [
            -19.8606259,-44.0560312
            
          ],
          [
            -19.7980276,-44.0135891
            
          ],
          [
            -19.8050695,-43.9723246
            
          ],
          [
            -19.8156462,-43.9586656
            
          ],
          [
           -19.8152293,-43.9584246
            
          ]
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

// ── MODAL CONTATO ──
const contactModal = document.getElementById('contact-modal');

document.querySelectorAll('#open-contact-btn, .open-contact-modal').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    contactModal.classList.add('active');
    contactModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });
});

function closeContactModal() {
  contactModal.classList.remove('active');
  contactModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.getElementById('contact-modal-close').addEventListener('click', closeContactModal);
contactModal.addEventListener('click', e => { if (e.target === contactModal) closeContactModal(); });