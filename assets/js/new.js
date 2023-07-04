function generatePDF() {
    const newdown = document.getElementById("generate_invoice");
    html2pdf()
    .from(newdown)
    .save();
}