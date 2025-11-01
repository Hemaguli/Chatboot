// Base de conocimiento del chatbot
const knowledgeBase = {
  // Tamaños de papel
  "tamaño papel": {
    responses: [
      {
        text: "Para configurar el tamaño de papel, sigue estos pasos:",
        content: `
                    <div class="config-section">
                        <h3>📄 Tamaños de Papel Disponibles:</h3>
                        <p><strong>Media Carta:</strong> 8.5" × 5.5" (140 × 216 mm)</p>
                        <p><strong>Carta:</strong> 8.5" × 11" (216 × 279 mm)</p>
                        <p><strong>Oficio:</strong> 8.5" × 13" (216 × 330 mm)</p>
                        <p><strong>Legal:</strong> 8.5" × 14" (216 × 356 mm)</p>
                    </div>
                    <div class="config-section">
                        <h3>⚙️ Cómo configurar:</h3>
                        <ol>
                            <li>Ve al menú <span class="highlight">Configuración</span> en el panel de control</li>
                            <li>Selecciona <span class="highlight">Tamaño de Papel</span></li>
                            <li>Elige el tamaño deseado de la lista</li>
                            <li>Asegúrate de que la bandeja tenga el papel del tamaño correcto</li>
                            <li>Confirma los cambios</li>
                        </ol>
                    </div>
                `,
      },
      {
        text: "¡Por supuesto! Los tamaños de papel más comunes son:",
        content: `
                    <div class="config-section">
                        <h3>📏 Opciones de Tamaño:</h3>
                        <p><strong>Media Carta (Half Letter):</strong> Ideal para documentos pequeños, notas y comprobantes</p>
                        <p><strong>Carta (Letter):</strong> Estándar para documentos de oficina y correspondencia</p>
                        <p><strong>Oficio (Legal/Letter Plus):</strong> Perfecto para contratos y documentos largos</p>
                    </div>
                    <div class="tip">
                        💡 <strong>Consejo:</strong> Siempre verifica que el tamaño configurado coincida con el papel en la bandeja para evitar atascos.
                    </div>
                `,
      },
    ],
  },

  // Duplex
  duplex: {
    responses: [
      {
        text: "El modo duplex te permite imprimir o copiar en ambas caras del papel automáticamente:",
        content: `
                    <div class="config-section">
                        <h3>🔄 Copiado/Impresión Duplex:</h3>
                        <ol>
                            <li>En el menú principal, selecciona <span class="highlight">Imprimir</span> o <span class="highlight">Copiar</span></li>
                            <li>Busca la opción <span class="highlight">Imprimir en ambas caras</span> o <span class="highlight">Duplex</span></li>
                            <li>Elige <span class="highlight">Duplex automático</span> si tu equipo lo soporta</li>
                            <li>Para copiado duplex, coloca los documentos en el alimentador automático</li>
                            <li>Ajusta la orientación si es necesario (vertical u horizontal)</li>
                        </ol>
                    </div>
                    <div class="warning">
                        ⚠️ <strong>Nota:</strong> Asegúrate de que tu impresora/copiadora tenga la función duplex habilitada. Algunos modelos requieren módulos adicionales.
                    </div>
                `,
      },
      {
        text: "¡Excelente opción para ahorrar papel! Aquí te explico el proceso duplex:",
        content: `
                    <div class="config-section">
                        <h3>📋 Pasos para Duplex:</h3>
                        <p><strong>Para Impresión Duplex:</strong></p>
                        <ul>
                            <li>Abra el documento que desea imprimir</li>
                            <li>Seleccione <span class="highlight">Archivo → Imprimir</span></li>
                            <li>En propiedades de impresora, active <span class="highlight">Imprimir en ambas caras</span></li>
                            <li>Configure el orden de las páginas (corto o largo)</li>
                        </ul>
                        <p><strong>Para Escaneado Duplex:</strong></p>
                        <ul>
                            <li>Coloque los documentos en el alimentador automático</li>
                            <li>Seleccione <span class="highlight">Escaneado Duplex</span> en el menú</li>
                            <li>El escáner capturará ambas caras automáticamente</li>
                        </ul>
                    </div>
                    <div class="tip">
                        🌱 <strong>Ahorro:</strong> El duplex puede reducir el uso de papel hasta en un 50%.
                    </div>
                `,
      },
    ],
  },

  // Escaneado
  escanear: {
    responses: [
      {
        text: "Te ayudo con el escaneado usando el alimentador automático:",
        content: `
                    <div class="config-section">
                        <h3>📷 Escaneado con Alimentador Automático:</h3>
                        <ol>
                            <li><strong>Preparación:</strong> Asegúrate de que los documentos estén libres de clips, grapas o adhesivos</li>
                            <li><strong>Colocación:</strong> Coloca los documentos boca arriba en el alimentador automático</li>
                            <li><strong>Límites:</strong> No excedas la capacidad máxima (generalmente 50-100 hojas)</li>
                            <li><strong>Configuración:</strong> En el panel de control, selecciona:
                                <ul>
                                    <li>Tipo de documento (color o blanco y negro)</li>
                                    <li>Resolución (300 DPI recomendado para documentos, 600 DPI para imágenes)</li>
                                    <li>Formato de salida (PDF, JPEG, TIFF)</li>
                                    <li>Escaneado duplex si es necesario</li>
                                </ul>
                            </li>
                            <li><strong>Destino:</strong> Elige dónde guardar:
                                <ul>
                                    <li>Correo electrónico</li>
                                    <li>Carpeta compartida en red</li>
                                    <li>USB o memoria externa</li>
                                    <li>Dispositivo móvil</li>
                                </ul>
                            </li>
                            <li><strong>Inicio:</strong> Presiona el botón <span class="highlight">Iniciar</span> o <span class="highlight">Escanear</span></li>
                        </ol>
                    </div>
                `,
      },
      {
        text: "El alimentador automático facilita mucho el proceso. Aquí tienes una guía completa:",
        content: `
                    <div class="config-section">
                        <h3>🎯 Configuración de Escaneado:</h3>
                        <p><strong>Opciones de Resolución:</strong></p>
                        <ul>
                            <li><span class="highlight">200 DPI:</span> Para documentos de texto simples</li>
                            <li><span class="highlight">300 DPI:</span> Estándar para la mayoría de documentos</li>
                            <li><span class="highlight">600 DPI:</span> Para imágenes y documentos detallados</li>
                        </ul>
                        <p><strong>Formatos Disponibles:</strong></p>
                        <ul>
                            <li><span class="highlight">PDF:</span> Para documentos múltiples páginas</li>
                            <li><span class="highlight">JPEG:</span> Para imágenes individuales</li>
                            <li><span class="highlight">TIFF:</span> Para máxima calidad</li>
                        </ul>
                    </div>
                    <div class="config-section">
                        <h3>📧 Envío por Correo:</h3>
                        <ol>
                            <li>Selecciona <span class="highlight">Enviar por correo</span></li>
                            <li>Ingresa la dirección de correo del destinatario</li>
                            <li>Puedes agregar un asunto y mensaje opcional</li>
                            <li>Configura el formato del archivo adjunto</li>
                            <li>Presiona <span class="highlight">Enviar</span></li>
                        </ol>
                    </div>
                    <div class="config-section">
                        <h3>📁 Carpeta Compartida:</h3>
                        <ol>
                            <li>Selecciona <span class="highlight">Guardar en red</span> o <span class="highlight">Carpeta compartida</span></li>
                            <li>Ingresa la ruta de red (ejemplo: \\\\servidor\\carpeta)</li>
                            <li>Proporciona credenciales si es necesario</li>
                            <li>El archivo se guardará automáticamente</li>
                        </ol>
                    </div>
                `,
      },
    ],
  },

  // Ajustes y configuración
  ajustes: {
    responses: [
      {
        text: "Aquí tienes los ajustes más importantes que puedes configurar:",
        content: `
                    <div class="config-section">
                        <h3>⚙️ Ajustes de Densidad:</h3>
                        <p>La densidad controla qué tan oscuro o claro se imprime:</p>
                        <ul>
                            <li><span class="highlight">Ligero (-3 a -1):</span> Para documentos con mucho texto o ahorro de tóner/tinta</li>
                            <li><span class="highlight">Normal (0):</span> Configuración estándar para uso diario</li>
                            <li><span class="highlight">Oscuro (+1 a +3):</span> Para mayor contraste y nitidez</li>
                        </ul>
                        <p><strong>Cómo ajustar:</strong> Menú → Calidad → Densidad</p>
                    </div>
                    <div class="config-section">
                        <h3>💚 Modo Económico:</h3>
                        <p>Reduce el consumo de tóner/tinta:</p>
                        <ul>
                            <li>Activa el <span class="highlight">Modo Económico</span> o <span class="highlight">Modo Borrador</span></li>
                            <li>Reduce la resolución de impresión</li>
                            <li>Usa menos tóner/tinta por página</li>
                            <li>Ideal para documentos internos o borradores</li>
                        </ul>
                    </div>
                    <div class="config-section">
                        <h3>📐 Desplazamiento de Márgenes:</h3>
                        <p>Permite ajustar la posición del contenido en la página:</p>
                        <ol>
                            <li>Ve a <span class="highlight">Ajustes → Márgenes</span></li>
                            <li>Ajusta horizontal y verticalmente según necesites</li>
                            <li>Los valores típicos van de -20mm a +20mm</li>
                        </ol>
                    </div>
                    <div class="config-section">
                        <h3>🌿 Ahorro de Papel - Distribución Múltiple:</h3>
                        <p>Imprime múltiples páginas en una sola hoja:</p>
                        <ul>
                            <li><span class="highlight">2 en 1:</span> Dos páginas por hoja (vertical u horizontal)</li>
                            <li><span class="highlight">4 en 1:</span> Cuatro páginas por hoja</li>
                            <li><span class="highlight">Imagen por esquina:</span> Distribución automática</li>
                        </ul>
                        <p><strong>Cómo configurar:</strong> Menú → Ahorro de Papel → N páginas por hoja</p>
                    </div>
                `,
      },
      {
        text: "¡Perfecto! Te explico los ajustes disponibles en detalle:",
        content: `
                    <div class="config-section">
                        <h3>🎛️ Panel de Control - Ajustes Rápidos:</h3>
                        <p><strong>1. Densidad de Impresión:</strong></p>
                        <p>Ajusta en el menú de <span class="highlight">Calidad</span>. Para documentos con mucho texto, usa densidad ligera. Para presentaciones importantes, usa densidad oscura.</p>
                        
                        <p><strong>2. Modo Económico:</strong></p>
                        <p>Perfecto para ahorrar recursos. Se puede activar permanentemente o por trabajo. Busca el ícono de <span class="highlight">💡</span> o <span class="highlight">💰</span> en el panel.</p>
                        
                        <p><strong>3. Márgenes:</strong></p>
                        <p>Útil cuando necesitas ajustar el contenido. Algunos modelos permiten previsualización antes de imprimir.</p>
                    </div>
                    <div class="config-section">
                        <h3>📊 Configuración de Ahorro de Papel:</h3>
                        <p><strong>Opción 2 en 1:</strong></p>
                        <ul>
                            <li>Selecciona <span class="highlight">Imprimir → Propiedades → Diseño</span></li>
                            <li>Elige <span class="highlight">2 páginas por hoja</span></li>
                            <li>Orientación automática o manual</li>
                        </ul>
                        <p><strong>Opción 4 en 1:</strong></p>
                        <ul>
                            <li>Similar proceso, selecciona <span class="highlight">4 páginas por hoja</span></li>
                            <li>Útil para presentaciones o resúmenes</li>
                        </ul>
                    </div>
                    <div class="tip">
                        💡 <strong>Pro Tip:</strong> Combina modo económico + distribución múltiple para máximo ahorro de recursos.
                    </div>
                `,
      },
    ],
  },

  // Respuestas generales
  default: {
    responses: [
      {
        text: "Entiendo tu consulta. Déjame ayudarte con eso:",
        content: `<p>Puedes preguntarme sobre:</p>
                    <ul>
                        <li>📄 Configuración de tamaños de papel (media carta, carta, oficio)</li>
                        <li>🔄 Impresión y copiado duplex</li>
                        <li>📷 Escaneado con alimentador automático</li>
                        <li>⚙️ Ajustes de densidad y calidad</li>
                        <li>💚 Modo económico</li>
                        <li>📐 Desplazamiento de márgenes</li>
                        <li>🌿 Ahorro de papel (2 en 1, 4 en 1)</li>
                        <li>📧 Envío por correo electrónico</li>
                        <li>📁 Almacenamiento en carpeta compartida</li>
                    </ul>
                    <p>¿Sobre qué tema específico necesitas ayuda?</p>`,
      },
      {
        text: "¡Por supuesto! Estoy aquí para ayudarte.",
        content: `<p>Puedo asistirte con diversas funciones de tu equipo:</p>
                    <div class="config-section">
                        <h3>🔧 Áreas en las que puedo ayudar:</h3>
                        <ul>
                            <li><strong>Tamaños de papel:</strong> Media carta, carta, oficio</li>
                            <li><strong>Duplex:</strong> Copiado, impresión y escaneado en ambas caras</li>
                            <li><strong>Escaneado:</strong> Con alimentador automático y opciones de destino</li>
                            <li><strong>Ajustes:</strong> Densidad, modo económico, márgenes</li>
                            <li><strong>Ahorro:</strong> Distribución de 2 a 4 imágenes por hoja</li>
                        </ul>
                    </div>
                    <p>¿Qué necesitas hacer específicamente?</p>`,
      },
    ],
  },
};

// Contador para respuestas alternas
let responseCounters = {};

// Función para detectar la intención del usuario
function detectIntent(message) {
  const lowerMessage = message.toLowerCase();

  // Palabras clave para cada categoría
  const keywords = {
    "tamaño papel": [
      "tamaño",
      "papel",
      "carta",
      "oficio",
      "media carta",
      "formato",
      "dimensiones",
    ],
    duplex: ["duplex", "ambas caras", "dos lados", "doble cara", "dos caras"],
    escanear: [
      "escanear",
      "escanear",
      "escáner",
      "alimentador",
      "automatico",
      "escanado",
    ],
    ajustes: [
      "ajustes",
      "ajuste",
      "configuración",
      "configurar",
      "densidad",
      "económico",
      "margen",
      "ahorro",
      "distribución",
      "2 en 1",
      "4 en 1",
    ],
  };

  // Buscar coincidencias
  for (const [category, words] of Object.entries(keywords)) {
    if (words.some((word) => lowerMessage.includes(word))) {
      return category;
    }
  }

  return "default";
}

// Función para obtener respuesta alterna
function getAlternateResponse(category) {
  if (!responseCounters[category]) {
    responseCounters[category] = 0;
  }

  const categoryData = knowledgeBase[category] || knowledgeBase["default"];
  const responses = categoryData.responses;
  const index = responseCounters[category] % responses.length;
  responseCounters[category]++;

  return responses[index];
}

// Función para enviar mensaje
function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();

  if (!message) return;

  // Agregar mensaje del usuario
  addMessage(message, "user");

  // Limpiar input
  input.value = "";

  // Simular delay de respuesta
  setTimeout(() => {
    const intent = detectIntent(message);
    const response = getAlternateResponse(intent);

    addMessage(response.text, "bot", response.content);

    // Scroll automático
    scrollToBottom();
  }, 500);
}

// Función para agregar mensaje al chat
function addMessage(text, sender, htmlContent = "") {
  const chatContainer = document.getElementById("chatContainer");
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${sender}-message`;

  const avatar = sender === "user" ? "👤" : "🤖";

  messageDiv.innerHTML = `
        <div class="message-avatar">${avatar}</div>
        <div class="message-content">
            <p>${text}</p>
            ${htmlContent}
        </div>
    `;

  chatContainer.appendChild(messageDiv);
  scrollToBottom();
}

// Función para scroll automático
function scrollToBottom() {
  const chatContainer = document.getElementById("chatContainer");
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  const sendButton = document.getElementById("sendButton");
  const userInput = document.getElementById("userInput");
  const quickButtons = document.querySelectorAll(".quick-btn");

  // Enviar con botón
  sendButton.addEventListener("click", sendMessage);

  // Enviar con Enter
  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

  // Botones de acción rápida
  quickButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.getAttribute("data-action");
      userInput.value = action;
      sendMessage();
    });
  });

  // Scroll inicial
  scrollToBottom();
});
