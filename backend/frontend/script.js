const convertBtn = document.getElementById("convertBtn");
const statusText = document.getElementById("status");

convertBtn.addEventListener("click", async () => {
  const source_language = document.getElementById("sourceLang").value;
  const target_language = document.getElementById("targetLang").value;
  const code = document.getElementById("inputCode").value;
  const prompt = document.getElementById("prompt").value;

  if (!code.trim()) {
    statusText.textContent = "Please paste some code";
    return;
  }

  convertBtn.disabled = true;
  statusText.textContent = "Converting...";

  try {
    const res = await fetch("/convert", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source_language,
        target_language,
        code,
        prompt,
      }),
    });

    const data = await res.json();

    if (!data.success) {
      statusText.textContent = " " + data.error;
    } else {
      document.getElementById("outputCode").value = data.code;
      statusText.textContent = " Done";
    }
  } catch (err) {
    statusText.textContent = " Network error";
  } finally {
    convertBtn.disabled = false;
  }
});