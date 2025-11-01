// Estado del chatbot
let userGreeted = false;
let conversationCount = 0;

// Referencias DOM
const chatMessages = document.getElementById("chatMessages");
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");
const quickActions = document.getElementById("quickActions");

// Respuestas del chatbot
const responses = {
  greeting: [
    "¡Hola! 😊 Me alegra saber que tu día va bien. Estoy aquí para ayudarte con cualquier consulta sobre copiadoras, impresoras o escáneres.",
    "¡Genial! 😄 Me encanta escuchar eso. Estoy listo para asistirte con todo lo que necesites sobre equipos de oficina.",
    "¡Excelente! 🌟 Me da mucho gusto. Cuenta conmigo para resolver todas tus dudas sobre impresión, copia y escaneo.",
  ],
  copiadora: {
    general:
      "¡Por supuesto! Te puedo ayudar con tu copiadora. ¿Qué tipo de copiadora tienes: inkjet o láser?",
    inkjet:
      "Perfecto, una copiadora inkjet. Estas son excelentes para documentos con imágenes y fotografías. ¿En qué específicamente necesitas ayuda?",
    laser:
      "Excelente, una copiadora láser. Estas son ideales para documentos de texto con gran volumen. ¿Cuál es tu consulta?",
    configuracion:
      "Para configurar tu copiadora, te recomiendo revisar las siguientes opciones: tamaño de papel, calidad de impresión, modo económico y ajustes de densidad.",
  },
  impresora: {
    general:
      "¡Claro que sí! 😊 ¿Tienes una impresora inkjet o láser? Ambas tienen sus ventajas.",
    inkjet:
      "Las impresoras inkjet son perfectas para impresiones de alta calidad en color. ¿Qué necesitas saber?",
    laser:
      "Las impresoras láser son excelentes para impresión rápida y económica en blanco y negro o color. ¿En qué puedo ayudarte?",
    configuracion:
      "Para configurar tu impresora, podemos ajustar: tamaño de papel, calidad, modo económico, márgenes y opciones de ahorro de papel.",
  },
  escaner: {
    general:
      "¡Perfecto! Los escáneres con alimentador automático son muy prácticos. Te puedo ayudar con su configuración y uso.",
    uso: "Para usar tu escáner con alimentador automático: 1) Coloca los documentos en el alimentador, 2) Configura el tamaño y formato, 3) Selecciona destino (correo o carpeta), 4) Inicia el escaneo.",
  },
  tamanos_papel: {
    general:
      "¡Por supuesto! Te ayudo con los tamaños de papel. Las opciones disponibles son:",
    opciones: [
      "📄 Media Carta (A5) - Ideal para documentos pequeños",
      "📄 Carta (A4) - El tamaño estándar más común",
      "📄 Oficio (Legal) - Perfecto para documentos largos",
    ],
  },
  duplex: {
    copiado:
      "El copiado duplex permite imprimir en ambas caras automáticamente. Para activarlo: 1) Selecciona 'Copiar' en el menú, 2) Busca la opción 'Dos caras' o 'Duplex', 3) Actívala antes de iniciar. ¡Ahorra papel y dinero! 🌱",
    impresion:
      "La impresión duplex es muy útil. En tu equipo: 1) Abre el cuadro de diálogo de impresión, 2) Busca 'Propiedades de impresora', 3) Selecciona 'Imprimir en ambas caras', 4) Configura si deseas voltear en el lado largo o corto.",
    escaneado:
      "El escaneado duplex escanea ambas caras automáticamente. Pasos: 1) Coloca documentos en el alimentador, 2) Selecciona 'Escaneo duplex' en el menú, 3) El equipo escaneará ambas caras automáticamente. ¡Muy eficiente! ✨",
  },
  correo:
    "Para enviar escaneados a correo electrónico: 1) Selecciona 'Enviar a correo' en el menú, 2) Ingresa la dirección de destino, 3) Configura el formato (PDF o imagen), 4) Presiona 'Enviar'. ¡Listo! 📧",
  carpeta_compartida:
    "Para guardar en carpeta compartida: 1) Accede a la configuración de red del equipo, 2) Configura la ruta de la carpeta compartida, 3) Selecciona 'Enviar a carpeta' en el menú, 4) Elige la carpeta y confirma. Los archivos se guardarán automáticamente. 💾",
  densidad:
    "El ajuste de densidad controla qué tan oscura será la impresión. Para ajustarla: 1) Ve a 'Ajustes' o 'Propiedades', 2) Busca 'Densidad' o 'Calidad', 3) Mueve el control (más bajo = más claro, más alto = más oscuro), 4) Aplica y prueba. Ajusta según tus necesidades. 🎚️",
  modo_economico:
    "El modo económico reduce el consumo de tóner/tinta. Para activarlo: 1) Busca 'Modo económico' o 'Eco' en el menú, 2) Actívalo (algunos equipos lo llaman 'Borrador'), 3) La calidad será ligeramente menor pero ahorrarás mucho. Perfecto para documentos internos. 💰",
  margenes:
    "Para ajustar márgenes: 1) Ve a 'Configuración' > 'Ajustes de página', 2) Selecciona 'Márgenes' o 'Desplazamiento', 3) Ajusta superior, inferior, izquierdo y derecho según necesites, 4) Guarda la configuración. Esto te permite optimizar el espacio. 📏",
  ahorro_papel: {
    general:
      "¡Excelente opción para ahorrar papel! Te puedo ayudar con la distribución de imágenes en una sola hoja.",
    dos_imagenes:
      "Para 2 imágenes por hoja: 1) Selecciona 'Layout' o 'Diseño', 2) Elige '2 en 1' o '2 páginas por hoja', 3) El equipo distribuirá dos páginas en una sola. ¡Ahorra 50% de papel! 🌱",
    tres_imagenes:
      "Para 3 imágenes por hoja: 1) Ve a 'Configuración de página', 2) Selecciona '3 en 1', 3) Ajusta el orden si es necesario. Eficiente para documentos pequeños. 📄",
    cuatro_imagenes:
      "Para 4 imágenes por hoja: 1) Selecciona '4 en 1' en el menú de diseño, 2) El equipo organizará 4 páginas en una sola hoja, 3) Ideal para borradores. ¡Ahorra 75% de papel! 🌍",
  },
  formato: {
    general:
      "Los formatos disponibles son: PDF (recomendado), JPEG, PNG y TIFF. ¿Qué formato prefieres?",
    pdf: "PDF es el formato más común. Es universal y mantiene la calidad. Perfecto para documentos que se compartirán.",
    jpeg: "JPEG es ideal para imágenes. Tiene buena compresión pero puede perder calidad con texto pequeño.",
    png: "PNG mantiene calidad sin pérdidas. Excelente para imágenes con texto, pero archivos más grandes.",
    tiff: "TIFF es de alta calidad, ideal para archivos profesionales y archivado a largo plazo.",
  },
  default: [
    "¡Por supuesto! Estoy aquí para ayudarte. ¿Podrías ser más específico sobre lo que necesitas? 😊",
    "Entiendo. ¿Te refieres a configuración de copiadora, impresora o escáner? Puedo ayudarte con cualquiera. ✨",
    "No hay problema. Cuéntame más detalles y te guiaré paso a paso. 😄",
  ],
};

// Función para obtener respuesta amigable alternada
function getAlternateResponse(category, subcategory = null) {
  const responsesArray = subcategory
    ? responses[category]?.[subcategory] ||
      responses[category]?.[subcategory] ||
      responses.default
    : Array.isArray(responses[category])
    ? responses[category]
    : [responses[category]];

  if (Array.isArray(responsesArray)) {
    return responsesArray[conversationCount % responsesArray.length];
  }
  return (
    responsesArray ||
    responses.default[conversationCount % responses.default.length]
  );
}

// Función para agregar mensaje al chat
function addMessage(text, isUser = false) {
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${isUser ? "user-message" : "bot-message"}`;

  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";

  if (typeof text === "string") {
    contentDiv.innerHTML = `<p>${text}</p>`;
  } else if (Array.isArray(text)) {
    contentDiv.innerHTML = text.map((item) => `<p>${item}</p>`).join("");
  }

  const timeDiv = document.createElement("div");
  timeDiv.className = "message-time";
  const now = new Date();
  timeDiv.textContent = `${now.getHours().toString().padStart(2, "0")}:${now
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;

  messageDiv.appendChild(contentDiv);
  messageDiv.appendChild(timeDiv);

  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Función para mostrar indicador de escritura
function showTypingIndicator() {
  const typingDiv = document.createElement("div");
  typingDiv.className = "message bot-message";
  typingDiv.id = "typingIndicator";

  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content typing-indicator";
  contentDiv.innerHTML = `
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
    `;

  typingDiv.appendChild(contentDiv);
  chatMessages.appendChild(typingDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Función para ocultar indicador de escritura
function hideTypingIndicator() {
  const indicator = document.getElementById("typingIndicator");
  if (indicator) {
    indicator.remove();
  }
}

// Función para procesar mensaje del usuario
function processUserMessage(message) {
  const lowerMessage = message.toLowerCase();

  // Detectar saludo inicial
  if (
    !userGreeted &&
    (lowerMessage.includes("bien") ||
      lowerMessage.includes("bien gracias") ||
      lowerMessage.includes("excelente") ||
      lowerMessage.includes("genial") ||
      lowerMessage.includes("muy bien") ||
      lowerMessage.includes("todo bien"))
  ) {
    userGreeted = true;
    return getAlternateResponse("greeting");
  }

  // Detectar tipo de equipo
  if (lowerMessage.includes("copiadora")) {
    if (lowerMessage.includes("inkjet")) {
      return getAlternateResponse("copiadora", "inkjet");
    } else if (
      lowerMessage.includes("laser") ||
      lowerMessage.includes("láser")
    ) {
      return getAlternateResponse("copiadora", "laser");
    }
    return getAlternateResponse("copiadora", "general");
  }

  if (lowerMessage.includes("impresora")) {
    if (lowerMessage.includes("inkjet")) {
      return getAlternateResponse("impresora", "inkjet");
    } else if (
      lowerMessage.includes("laser") ||
      lowerMessage.includes("láser")
    ) {
      return getAlternateResponse("impresora", "laser");
    }
    return getAlternateResponse("impresora", "general");
  }

  if (
    lowerMessage.includes("escaner") ||
    lowerMessage.includes("escáner") ||
    lowerMessage.includes("escanear")
  ) {
    if (
      lowerMessage.includes("usar") ||
      lowerMessage.includes("operar") ||
      lowerMessage.includes("como")
    ) {
      return getAlternateResponse("escaner", "uso");
    }
    return getAlternateResponse("escaner", "general");
  }

  // Tamaños de papel
  if (
    lowerMessage.includes("tamaño") ||
    lowerMessage.includes("papel") ||
    lowerMessage.includes("media carta") ||
    lowerMessage.includes("carta") ||
    lowerMessage.includes("oficio")
  ) {
    const response = getAlternateResponse("tamanos_papel", "general");
    const options = responses.tamanos_papel.opciones;
    return response + "\n\n" + options.join("\n");
  }

  // Duplex
  if (
    lowerMessage.includes("duplex") ||
    lowerMessage.includes("doble cara") ||
    lowerMessage.includes("ambas caras")
  ) {
    if (lowerMessage.includes("copi") || lowerMessage.includes("copiar")) {
      return getAlternateResponse("duplex", "copiado");
    } else if (
      lowerMessage.includes("imprimir") ||
      lowerMessage.includes("impresión")
    ) {
      return getAlternateResponse("duplex", "impresion");
    } else if (
      lowerMessage.includes("escan") ||
      lowerMessage.includes("escáner")
    ) {
      return getAlternateResponse("duplex", "escaneado");
    }
    return getAlternateResponse("duplex", "copiado");
  }

  // Correo electrónico
  if (
    lowerMessage.includes("correo") ||
    lowerMessage.includes("email") ||
    lowerMessage.includes("mail")
  ) {
    return responses.correo;
  }

  // Carpeta compartida
  if (
    lowerMessage.includes("carpeta") ||
    lowerMessage.includes("almacenar") ||
    lowerMessage.includes("guardar") ||
    lowerMessage.includes("compartida")
  ) {
    return responses.carpeta_compartida;
  }

  // Densidad
  if (
    lowerMessage.includes("densidad") ||
    lowerMessage.includes("oscuro") ||
    lowerMessage.includes("claro")
  ) {
    return responses.densidad;
  }

  // Modo económico
  if (
    lowerMessage.includes("económico") ||
    lowerMessage.includes("economico") ||
    lowerMessage.includes("eco") ||
    lowerMessage.includes("ahorro")
  ) {
    if (lowerMessage.includes("papel")) {
      return getAlternateResponse("ahorro_papel", "general");
    }
    return responses.modo_economico;
  }

  // Márgenes
  if (
    lowerMessage.includes("margen") ||
    lowerMessage.includes("desplazamiento")
  ) {
    return responses.margenes;
  }

  // Ahorro de papel - distribución
  if (
    lowerMessage.includes("2 imagen") ||
    lowerMessage.includes("dos imagen") ||
    lowerMessage.includes("2 por hoja") ||
    lowerMessage.includes("dos por hoja")
  ) {
    return getAlternateResponse("ahorro_papel", "dos_imagenes");
  }

  if (
    lowerMessage.includes("3 imagen") ||
    lowerMessage.includes("tres imagen") ||
    lowerMessage.includes("3 por hoja") ||
    lowerMessage.includes("tres por hoja")
  ) {
    return getAlternateResponse("ahorro_papel", "tres_imagenes");
  }

  if (
    lowerMessage.includes("4 imagen") ||
    lowerMessage.includes("cuatro imagen") ||
    lowerMessage.includes("4 por hoja") ||
    lowerMessage.includes("cuatro por hoja")
  ) {
    return getAlternateResponse("ahorro_papel", "cuatro_imagenes");
  }

  // Formato
  if (lowerMessage.includes("formato")) {
    return responses.formato.general;
  }

  if (lowerMessage.includes("pdf")) {
    return responses.formato.pdf;
  }

  if (lowerMessage.includes("jpeg") || lowerMessage.includes("jpg")) {
    return responses.formato.jpeg;
  }

  if (lowerMessage.includes("png")) {
    return responses.formato.png;
  }

  if (lowerMessage.includes("tiff") || lowerMessage.includes("tif")) {
    return responses.formato.tiff;
  }

  // Configuración general
  if (
    lowerMessage.includes("configuración") ||
    lowerMessage.includes("configuracion") ||
    lowerMessage.includes("configurar") ||
    lowerMessage.includes("ajust")
  ) {
    return getAlternateResponse("default");
  }

  // Respuesta por defecto
  return getAlternateResponse("default");
}

// Función para enviar mensaje
function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  addMessage(message, true);
  userInput.value = "";

  showTypingIndicator();

  setTimeout(() => {
    hideTypingIndicator();
    const response = processUserMessage(message);
    addMessage(response);
    conversationCount++;
  }, 1000 + Math.random() * 1000);
}

// Event listeners
sendButton.addEventListener("click", sendMessage);

userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});

// Botones de acción rápida
quickActions.addEventListener("click", (e) => {
  if (e.target.classList.contains("quick-btn")) {
    const action = e.target.dataset.action;
    let message = "";

    switch (action) {
      case "copiadora":
        message = "Necesito ayuda con la copiadora";
        break;
      case "impresora":
        message = "Necesito ayuda con la impresora";
        break;
      case "escaner":
        message = "Necesito ayuda con el escáner";
        break;
      case "configuracion":
        message = "Necesito ayuda con la configuración";
        break;
    }

    if (message) {
      userInput.value = message;
      sendMessage();
    }
  }
});

// Saludo inicial si el usuario no ha respondido
setTimeout(() => {
  if (!userGreeted) {
    // Ya está el saludo inicial en el HTML
  }
}, 500);
