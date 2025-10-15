// backend/server.js
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Lista de dominios permitidos - MANTENIENDO dominios ibug
const allowedOrigins = [
  "https://www.ibug.space",
  "https://ibug.space",
  "http://localhost:5173",
  "https://ibug-backend.onrender.com",
];

// Middleware de CORS
app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

// Middleware adicional para asegurar los headers CORS
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }
  next();
});

app.use(express.json());

// Configurar Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // luminisaurora@gmail.com
    pass: process.env.EMAIL_PASS, // App Password de Gmail
  },
});

// Ruta para enviar correos - ACTUALIZADO nombre a Aurora Luminis
app.post("/send-email", (req, res) => {
  const { nombre, email, asunto, mensaje } = req.body;

  const mailOptions = {
    from: `"Aurora Luminis Contacto" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER, // Envía a luminisaurora@gmail.com
    replyTo: email, // Para responder directamente al usuario
    subject: `Aurora Luminis - Nuevo mensaje de ${nombre}: ${asunto}`,
    html: `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="
      margin: 0;
      padding: 0;
      background-color: #0f0f0f;
      font-family: 'Monaco', 'Consolas', monospace;
    ">
      <div style="
        max-width: 600px;
        margin: 40px auto;
        background: #1a1a1a;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        border: 1px solid #333;
      ">
        <!-- Encabezado estilo Aurora Luminis -->
        <div style="
          background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
          color: #f97316;
          padding: 30px;
          text-align: center;
          border-bottom: 1px solid #333;
        ">
          <h1 style="
            margin: 0;
            font-size: 24px;
            font-weight: 600;
            font-family: 'Monaco', 'Consolas', monospace;
          ">AURORA LUMINIS</h1>
          <p style="
            margin: 10px 0 0 0;
            color: #888;
            font-size: 14px;
            font-family: 'Monaco', 'Consolas', monospace;
          ">// Nuevo Mensaje de Contacto</p>
        </div>

        <!-- Contenido Principal -->
        <div style="padding: 40px 30px;">
          <!-- Información del Remitente -->
          <div style="
            background-color: #222;
            border-radius: 8px;
            padding: 25px;
            margin-bottom: 30px;
            border: 1px solid #333;
          ">
            <h2 style="
              margin: 0 0 20px 0;
              color: #f97316;
              font-size: 18px;
              border-bottom: 2px solid #333;
              padding-bottom: 10px;
              font-family: 'Monaco', 'Consolas', monospace;
            ">&lt;ContactDetails&gt;</h2>
            
            <div style="margin-bottom: 15px;">
              <p style="
                margin: 0;
                color: #888;
                font-size: 14px;
                font-weight: 600;
                font-family: 'Monaco', 'Consolas', monospace;
              ">Nombre</p>
              <p style="
                margin: 5px 0 0 0;
                color: #fff;
                font-size: 16px;
                font-family: 'Monaco', 'Consolas', monospace;
              ">${nombre}</p>
            </div>

            <div style="margin-bottom: 15px;">
              <p style="
                margin: 0;
                color: #888;
                font-size: 14px;
                font-weight: 600;
                font-family: 'Monaco', 'Consolas', monospace;
              ">Email</p>
              <p style="
                margin: 5px 0 0 0;
                color: #f97316;
                font-size: 16px;
                font-family: 'Monaco', 'Consolas', monospace;
              "><a href="mailto:${email}" style="color: #f97316; text-decoration: none;">${email}</a></p>
            </div>

            <div style="margin-bottom: 15px;">
              <p style="
                margin: 0;
                color: #888;
                font-size: 14px;
                font-weight: 600;
                font-family: 'Monaco', 'Consolas', monospace;
              ">Asunto</p>
              <p style="
                margin: 5px 0 0 0;
                color: #fff;
                font-size: 16px;
                font-family: 'Monaco', 'Consolas', monospace;
              ">${asunto}</p>
            </div>
          </div>

          <!-- Mensaje -->
          <div style="
            background-color: #222;
            border-radius: 8px;
            padding: 25px;
            border: 1px solid #333;
          ">
            <h2 style="
              margin: 0 0 20px 0;
              color: #f97316;
              font-size: 18px;
              border-bottom: 2px solid #333;
              padding-bottom: 10px;
              font-family: 'Monaco', 'Consolas', monospace;
            ">&lt;Message&gt;</h2>
            
            <p style="
              margin: 0;
              color: #ccc;
              font-size: 16px;
              line-height: 1.6;
              white-space: pre-line;
              font-family: 'Monaco', 'Consolas', monospace;
            ">${mensaje}</p>
          </div>
        </div>

        <!-- Pie de página -->
        <div style="
          background-color: #222;
          padding: 20px;
          text-align: center;
          border-top: 1px solid #333;
        ">
          <p style="
            margin: 0;
            color: #666;
            font-size: 12px;
            font-family: 'Monaco', 'Consolas', monospace;
          ">
            // Mensaje enviado desde Aurora Luminis<br>
            // ${new Date().toLocaleString("es-ES")}<br>
            // © ${new Date().getFullYear()} - Aurora Luminis
          </p>
        </div>
      </div>
    </body>
    </html>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error al enviar el correo:", error);
      return res.status(500).json({
        success: false,
        error: "Error al enviar el correo",
        details: error.message,
      });
    }
    console.log("Correo enviado:", info.response);
    res.status(200).json({
      success: true,
      message: "Correo enviado con éxito",
    });
  });
});

// Ruta de salud para verificar que el servidor funciona
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    service: "Aurora Luminis Backend",
    timestamp: new Date().toISOString(),
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`🚀 Aurora Luminis Backend corriendo en puerto ${PORT}`);
});
