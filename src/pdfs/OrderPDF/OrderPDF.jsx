import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export const OrderPDF = (order, orderDescription) => {
  const pdfTitle = {
    text: "Pedido 0001-24",
    fontSize: 16,
    bold: true,
    color: "black",
    alignment: "center",
    margin: [0, 0, 0, 20], // Margem inferior
  };

  // Gerar as linhas da tabela de pedidos
  const orderTableBody = [
    // Cabeçalho da tabela
    [
      { text: "Ordem", bold: true },
      { text: "Código", bold: true },
      { text: "Cliente", bold: true },
      { text: "Produto", bold: true },
      { text: "Qtd", bold: true },
      { text: "Data.Ab", bold: true },
      { text: "Data.UR", bold: true },
      { text: "Data.E", bold: true },
      { text: "Status", bold: true },
    ],
    // Linhas dinâmicas da tabela
    ...order.map((order, index) => [
      { text: index + 1 },
      { text: order.codigo },
      { text: order.cliente },
      { text: order.produto },
      { text: order.qtd },
      { text: order.dataAb },
      { text: order.dataUr },
      { text: order.dataE },
      { text: order.status },
    ]),
  ];

  // Gerar as linhas da tabela de descrição do pedido
  const descriptionTableBody = [
    // Cabeçalho da tabela
    [
      { text: "Item", bold: true },
      { text: "Unid", bold: true },
      { text: "Qtd", bold: true },
      { text: "Total", bold: true },
    ],
    // Linhas dinâmicas da tabela
    ...orderDescription.map((item) => [
      { text: item.item },
      { text: item.unid },
      { text: item.qtd },
      { text: "" }, // O campo "Total" pode ser preenchido se necessário
    ]),
  ];

  // Definições do documento PDF
  const docDefinitions = {
    pageSize: "A4",
    pageMargins: [15, 50, 15, 50],
    header: pdfTitle,
    content: [
      { text: "Detalhes do Pedido", style: "sectionHeader" },
      {
        table: {
          headerRows: 1,
          widths: ["auto", "*", "*", "*", "auto", "auto", "auto", "auto", "*"],
          body: orderTableBody,
        },
      },
      {
        text: "Descrição do Pedido",
        style: "sectionHeader",
        margin: [0, 20, 0, 10],
      },
      {
        table: {
          headerRows: 1,
          widths: ["*", "auto", "auto", "auto"],
          body: descriptionTableBody,
        },
      },
    ],
    styles: {
      sectionHeader: {
        fontSize: 14,
        bold: true,
        margin: [0, 10, 0, 10],
      },
    },
    footer: {
      text: "Footer text here",
      alignment: "center",
      fontSize: 10,
      margin: [0, 10, 0, 0],
    },
  };

  // Gerar e fazer o download do PDF
  pdfMake.createPdf(docDefinitions).download();
};
