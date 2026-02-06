require("dotenv").config();
const express = require("express");
const { convertCode } = require("./groq");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "/frontend")));
app.use(express.json());
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    methods: ["POST"],
  })
);
const MAX_CODE_LENGTH = 8000;
const MAX_PROMPT_LENGTH = 500;

app.post("/convert", async (req, res) => {
  try {
    const { source_language, target_language, code, prompt } = req.body;

    // Validation
    if (!source_language || !target_language || !code) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields",
      });
    }

    if (code.length > MAX_CODE_LENGTH) {
      return res.status(400).json({
        success: false,
        error: "Code is too large",
      });
    }

    if (prompt && prompt.length > MAX_PROMPT_LENGTH) {
      return res.status(400).json({
        success: false,
        error: "Prompt too long",
      });
    }

    const converted = await convertCode({
      sourceLanguage: source_language,
      targetLanguage: target_language,
      code,
      prompt,
    });

    if (!converted) {
      return res.status(500).json({
        success: false,
        error: "Conversion failed",
      });
    }

    res.json({
      success: true,
      code: converted,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` Server running on port http://localhost:${PORT}`);
});