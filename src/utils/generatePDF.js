import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

function generatePdf(cliente, pedra) {
  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  let docDefinitions = {
    content: [
      { text: "Marmoaria do Joaquin", style: "header" },
      {
        ul: [`Cliente ${cliente}`, `Pedra ${pedra}`],
      },

      { text: "Tables", style: "header" },
      "Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.",
      {
        text:
          "A simple table (no headers, no width specified, no spans, no styling)",
        style: "subheader",
      },
      "The following table has nothing more than a body array",
      {
        style: "tableExample",
        table: {
          body: [
            ["Cliente", "Pedra", "Valor"],
            [cliente, pedra, "R$ 350,00"],
          ],
        },
      },
    ],
    styles: {
      header: {
        bold: true,
        fontSize: 15,
      },
    },
    defaultStyle: {
      fontSize: 12,
    },
  };
  pdfMake.createPdf(docDefinitions).open({}, window.open("", "_blank"));
}

export default generatePdf;
