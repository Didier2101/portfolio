// backend/server.js
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Lista de dominios permitidos
const allowedOrigins = [
  "https://www.ibug.space",
  "https://ibug.space",
  "http://localhost:5173",
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

  // Manejar solicitudes OPTIONS
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
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Ruta para enviar correos
app.post("/send-email", (req, res) => {
  const { nombre, email, asunto, mensaje } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `Nuevo mensaje de ${nombre}: ${asunto}`,
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
      background-color: #f6f9fc;
      font-family: Arial, sans-serif;
    ">
      <div style="
        max-width: 600px;
        margin: 40px auto;
        background: white;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      ">
        <!-- Encabezado -->
        <div style="
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 30px;
          text-align: center;
        ">
          <h1 style="
            margin: 0;
            font-size: 24px;
            font-weight: 600;
          ">Nuevo Mensaje de Contacto</h1>
        </div>

        <!-- Contenido Principal -->
        <div style="padding: 40px 30px;">
          <!-- Información del Remitente -->
          <div style="
            background-color: #f8fafc;
            border-radius: 6px;
            padding: 20px;
            margin-bottom: 30px;
          ">
            <h2 style="
              margin: 0 0 20px 0;
              color: #1a237e;
              font-size: 18px;
              border-bottom: 2px solid #e3e8ee;
              padding-bottom: 10px;
            ">Detalles del Contacto</h2>
            
            <div style="margin-bottom: 15px;">
              <p style="
                margin: 0;
                color: #64748b;
                font-size: 14px;
                font-weight: 600;
              ">Nombre</p>
              <p style="
                margin: 5px 0 0 0;
                color: #334155;
                font-size: 16px;
              ">${nombre}</p>
            </div>

            <div style="margin-bottom: 15px;">
              <p style="
                margin: 0;
                color: #64748b;
                font-size: 14px;
                font-weight: 600;
              ">Email</p>
              <p style="
                margin: 5px 0 0 0;
                color: #334155;
                font-size: 16px;
              ">${email}</p>
            </div>

            <div style="margin-bottom: 15px;">
              <p style="
                margin: 0;
                color: #64748b;
                font-size: 14px;
                font-weight: 600;
              ">Asunto</p>
              <p style="
                margin: 5px 0 0 0;
                color: #334155;
                font-size: 16px;
              ">${asunto}</p>
            </div>
          </div>

          <!-- Mensaje -->
          <div style="
            background-color: #f8fafc;
            border-radius: 6px;
            padding: 20px;
          ">
            <h2 style="
              margin: 0 0 20px 0;
              color: #1a237e;
              font-size: 18px;
              border-bottom: 2px solid #e3e8ee;
              padding-bottom: 10px;
            ">Mensaje</h2>
            
            <p style="
              margin: 0;
              color: #334155;
              font-size: 16px;
              line-height: 1.6;
              white-space: pre-line;
            ">${mensaje}</p>
          </div>
        </div>

        <!-- Pie de página -->
        <div style="
          background-color: #f8fafc;
          padding: 20px;
          text-align: center;
          border-top: 1px solid #e3e8ee;
        ">
          <p style="
            margin: 0;
            color: #64748b;
            font-size: 14px;
          ">
            Este mensaje fue enviado desde el formulario de contacto del Portafolio
            <br>
            © ${new Date().getFullYear()} - Todos los derechos reservados
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
      return res.status(500).send("Error al enviar el correo");
    }
    console.log("Correo enviado:", info.response);
    res.status(200).send("Correo enviado con éxito");
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
