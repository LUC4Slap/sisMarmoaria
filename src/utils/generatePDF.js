import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import Logo from "../images/logo.png";

function generatePdf(cliente, pedra, info) {
  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  let docDefinitions = {
    content: [
      {
        columns: [
          // imagem
          {
            image: Logo,
            width: 100,
            height: 100,
          },
          {
            stack: [
              {
                text: [
                  {
                    text: "                   GRANIMAR MARMORES E GRANITOS",
                    style: "header",
                  },
                  {
                    text:
                      "\n\nC.N.P.J 12.300.377/0001-45                       INSCR. EST.: 28.360.00-4",
                  },
                  {
                    text:
                      "\nAvenida Costa e Silva, 4.091 – B.Universitario – CEP 79064-000",
                  },
                  {
                    text:
                      "\nFone/FAX 3387-6228 ;         9 9193-0346 (MICHELE PAES)",
                  },
                  {
                    text: "\n\nVALIDO POR 7 DIAS",
                  },
                ],
                style: "center",
              },
            ],
          },
        ],
      },
      {
        type: "none",
        ul: [
          `Destinado a:  ${cliente}`,
          `Endereço: ${info.endereco} - ${info.numero}`,
          `Telefone: ${mtel(info.telefone)}`,
          "Condições de pagamento: A combinar",
          "Prazo de entrega: 10 A 15 DIAS ÚTEIS APÓS A CONFIRMAÇÃO DO MATERIAL",
          "VENDEDOR: MICHELE PAES",
        ],
      },
      {
        style: "tableExample",
        table: {
          body: [
            [
              "Ítem",
              "Quant.",
              "m² - total",
              "ML",
              "R$",
              "Valor Unitário R$",
              "Total R$",
            ],
            ["1", "2", "3", "4", "5", "6", "7"],
          ],
        },
      },
      {
        columns: [
          {
            text: [
              {
                text: ["\n\nTotal e pedras e acabamento: ", ` R$ ${350.5}`],
              },
              {
                text: ["\nSEM Mão de Obra para instalação: ", ` R$ ${350.5}`],
              },
              { text: ["\nValor Total Geral: ", ` R$ ${350.5}`] },
            ],
          },
        ],
        style: "alinhamentoParaDireita",
      },
      {
        columns: [
          {
            text: [
              { text: ["\nObs1: Exceto cubas em geral"] },
              { text: ["\nObs2: Exceto Colocação de soleiras e peitoris."] },
              {
                text: [
                  "\nObs3: Por se tratar de pedras ornamentais, poderá haver alterações de veios e tonalidades.",
                ],
              },
            ],
          },
        ],
      },
      {
        text: [
          {
            text: `
            \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n
            Estamos plenamente de acordo com as condições do presente contrato, e autorizamos a confecção do(s) serviço(s) acima descrito).  Em ${dataAtual()}
            `,
          },
        ],
      },
      {
        columns: [
          {
            text: [
              { text: "___________________________________" },
              {
                text: "\n  Granimar Marmores e Granitos",
              },
            ],
          },
          {
            text: [
              { text: "___________________________________" },
              {
                text: `\n${cliente}`,
              },
            ],
          },
        ],
      },
    ],
    styles: {
      header: {
        fontSize: 16,
        bold: true,
        alignment: "center",
        // textAlign: "rigth",
        // margin: [0, 0, 0, 0],
      },
      alinhamentoParaDireita: {
        alignment: "right",
      },
      alinhamentoParaEsquerda: {
        alignment: "left",
      },
      tableExample: {
        margin: [0, 20, 0, 0],
      },
      center: {
        alignment: "center",
      },
    },
    defaultStyle: {
      fontSize: 12,
    },
  };
  pdfMake.createPdf(docDefinitions).open({}, window.open("", "_blank"));
  dataAtual();
}

function mtel(v) {
  let ddd = v.substr(0, 2);
  let numero = v.split(ddd)[1];
  let parte1 = numero.substr(0, 5);
  let parte2 = numero.substr(4);
  let numeroFormatado = `(${ddd})${parte1}-${parte2}`;
  return numeroFormatado;
}

function dataAtual() {
  let date = new Date();
  let dia = date.getDate().toString();
  let mes = date.getMonth().toString();
  let ano = date.getFullYear().toString();
  let data = `${dia.length === 1 ? `0${dia}` : dia}/${
    mes.length === 1 ? `0${mes}` : mes
  }/${ano}`;
  return data;
}

export default generatePdf;
