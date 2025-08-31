document.getElementById("fileInput").addEventListener("change", handleFile);
document.getElementById("generateSummary").addEventListener("click", generateSummary);

let uploadedFile = null;

function handleFile(event) {
    uploadedFile = event.target.files[0];
    if (!uploadedFile) return;
    document.getElementById("extractedText").textContent = "✅ File ready for processing: " + uploadedFile.name;
}

async function generateSummary() {
    if (!uploadedFile) {
        alert("Please upload a file first!");
        return;
    }

    const length = document.getElementById("summaryLength").value;
    const summaryOutput = document.getElementById("summaryOutput");
    const extractedTextEl = document.getElementById("extractedText");

    summaryOutput.textContent = "⏳ Processing document...";

    const formData = new FormData();
    formData.append("file", uploadedFile);
    formData.append("length", length);

    try {
        const response = await fetch("http://127.0.0.1:5000/process", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.error) {
            summaryOutput.textContent = "⚠️ Error: " + data.error;
            return;
        }

        extractedTextEl.textContent = data.extracted_text || "⚠️ No text extracted";
        summaryOutput.textContent = data.summary || "⚠️ No summary generated";
    } catch (err) {
        summaryOutput.textContent = "❌ Backend request failed: " + err.message;
    }
}

document.getElementById("downloadTxt").addEventListener("click", () => {
    const summary = document.getElementById("summaryOutput").textContent;
    if (!summary || summary.includes("Your summary will appear")) {
        alert("No summary to download!");
        return;
    }
    const blob = new Blob([summary], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "summary.txt";
    a.click();
    URL.revokeObjectURL(url);
});

document.getElementById("downloadPdf").addEventListener("click", () => {
    const summary = document.getElementById("summaryOutput").textContent;
    if (!summary || summary.includes("Your summary will appear")) {
        alert("No summary to download!");
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.setFontSize(12);
    const lines = doc.splitTextToSize(summary, 180); 
    doc.text(lines, 10, 20);
    doc.save("summary.pdf");
});

