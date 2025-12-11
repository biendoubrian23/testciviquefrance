// ==================== EXAMEN BLANC #4 ====================
// Répartition officielle :
// 1. Principes et valeurs (11 questions)
// 2. Système institutionnel (6 questions)
// 3. Droits et devoirs (11 questions)
// 4. Histoire/géographie/culture (8 questions)
// 5. Vivre en France (4 questions)
// ==========================================================================

import { ExamenBlanc, Question, decodeQuestion } from './types';

const EXAM_NUMBER = 4;

// Fonction de hash simple (djb2) pour l'examen 4
function hashAnswer(questionId: number, answerIndex: number): string {
  const str = `exam${EXAM_NUMBER}_q${questionId}_a${answerIndex}_civique2024`;
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) + str.charCodeAt(i);
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16);
}

const questions: Question[] = [
  // ==================== 1. PRINCIPES ET VALEURS (11 questions) ====================
  
  {
    id: 1,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Devise et symboles",
    question: "T8O5IHRyb3V2ZS10LW9uIGfDqW7DqXJhbGVtZW50IGxhIGRldmlzZSBkZSBsYSBSw6lwdWJsaXF1ZSBmcmFuw6dhaXNlID8=",
    options: [
      "VW5pcXVlbWVudCBzdXIgbGVzIHBpw6hjZXMgZGUgbW9ubmFpZQ==",
      "U3VyIGxlcyBmcm9udG9ucyBkZXMgw6lkaWZpY2VzIHB1YmxpY3MgZXQgbW9udW1lbnRz",
      "U2V1bGVtZW50IMOgIFBhcmlz",
      "RGFucyBsZXMgbGl2cmVzIGQnaGlzdG9pcmUgdW5pcXVlbWVudA=="
    ],
    correctHash: hashAnswer(1, 1),
    explication: "TGEgZGV2aXNlICdMaWJlcnTDqSwgw4lnYWxpdMOpLCBGcmF0ZXJuaXTDqScgZXN0IGdyYXbDqWUgc3VyIGxlcyBmcm9udG9ucyBkZXMgbWFpcmllcywgw6ljb2xlcywgcGFsYWlzIGRlIGp1c3RpY2UgZXQgYXV0cmVzIMOpZGlmaWNlcyBwdWJsaWNzIGRhbnMgdG91dGUgbGEgRnJhbmNlLg=="},
  {
    id: 2,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Devise et symboles",
    question: "UXVlIHJlcHLDqXNlbnRlIE1hcmlhbm5lIGF2ZWMgc29uIGJvbm5ldCBwaHJ5Z2llbiA/",
    options: [
      "TGEgcm95YXV0w6k=",
      "TGEgbGliZXJ0w6kgZXQgbGEgUsOpcHVibGlxdWU=",
      "TGEgcmVsaWdpb24=",
      "TCdhcm3DqWU="
    ],
    correctHash: hashAnswer(2, 1),
    explication: "TWFyaWFubmUgY29pZmbDqWUgZHUgYm9ubmV0IHBocnlnaWVuIHN5bWJvbGlzZSBsYSBsaWJlcnTDqSBldCBsYSBSw6lwdWJsaXF1ZSBmcmFuw6dhaXNlLiBMZSBib25uZXQgcGhyeWdpZW4gw6l0YWl0IHBvcnTDqSBwYXIgbGVzIGVzY2xhdmVzIGFmZnJhbmNoaXMgZGFucyBsJ0FudGlxdWl0w6ku"},
  {
    id: 3,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Laïcité",
    question: "RGFucyB1biBow7RwaXRhbCBwdWJsaWMsIHBldXQtb24gcmVmdXNlciBkJ8OqdHJlIHNvaWduw6kgcGFyIHVuIG3DqWRlY2luIHBvdXIgZGVzIHJhaXNvbnMgcmVsaWdpZXVzZXMgPw==",
    options: [
      "T3VpLCBjJ2VzdCB1biBkcm9pdCBhYnNvbHU=",
      "Tm9uLCBzYXVmIHVyZ2VuY2Ugdml0YWxlIG/DuSBsZSBwYXRpZW50IG5lIHBldXQgcGFzIGNob2lzaXI=",
      "T3VpLCBtYWlzIHNldWxlbWVudCBsZSB3ZWVrLWVuZA==",
      "Q2VsYSBkw6lwZW5kIGRlIGxhIHLDqWdpb24="
    ],
    correctHash: hashAnswer(3, 1),
    explication: "TGUgcHJpbmNpcGUgZGUgbGHDr2NpdMOpIGV0IGRlIG5vbi1kaXNjcmltaW5hdGlvbiBzJ2FwcGxpcXVlLiBPbiBuZSBwZXV0IGfDqW7DqXJhbGVtZW50IHBhcyByZWZ1c2VyIHVuIHNvaWduYW50IHBvdXIgZGVzIHJhaXNvbnMgcmVsaWdpZXVzZXMsIHNhdWYgZGFucyBjZXJ0YWlucyBjYXMgc3DDqWNpZmlxdWVzIGV0IGhvcnMgdXJnZW5jZS4="},
  {
    id: 4,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Laïcité",
    question: "TGEgbG9pIGRlIDE5MDUgc3VyIGxhIGxhw69jaXTDqSDDqXRhYmxpdCA6",
    options: [
      "TCdpbnRlcmRpY3Rpb24gZGUgdG91dGVzIGxlcyByZWxpZ2lvbnM=",
      "TGEgc8OpcGFyYXRpb24gZGVzIMOJZ2xpc2VzIGV0IGRlIGwnw4l0YXQ=",
      "VW5lIHJlbGlnaW9uIGQnw4l0YXQgb2JsaWdhdG9pcmU=",
      "TCdpbnRlcmRpY3Rpb24gZGUgY29uc3RydWlyZSBkZXMgbGlldXggZGUgY3VsdGU="
    ],
    correctHash: hashAnswer(4, 1),
    explication: "TGEgbG9pIGRlIDE5MDUgw6l0YWJsaXQgbGEgc8OpcGFyYXRpb24gZGVzIMOJZ2xpc2VzIGV0IGRlIGwnw4l0YXQuIEwnw4l0YXQgbmUgcmVjb25uYcOudCwgbmUgc2FsYXJpZSBuaSBuZSBzdWJ2ZW50aW9ubmUgYXVjdW4gY3VsdGUsIG1haXMgZ2FyYW50aXQgbGEgbGliZXJ0w6kgZGUgY29uc2NpZW5jZS4="},
  {
    id: 5,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Égalité",
    question: "TCfDqWdhbGl0w6kgZW50cmUgbGVzIGZlbW1lcyBldCBsZXMgaG9tbWVzIHNpZ25pZmllIDo=",
    options: [
      "UXUnaWxzIGRvaXZlbnQgZmFpcmUgZXhhY3RlbWVudCBsZXMgbcOqbWVzIG3DqXRpZXJz",
      "UXUnaWxzIG9udCBsZXMgbcOqbWVzIGRyb2l0cyBldCBkZXZvaXJz",
      "UXVlIGxlcyBmZW1tZXMgb250IHBsdXMgZGUgZHJvaXRz",
      "UXUnaWxzIGRvaXZlbnQgdml2cmUgc8OpcGFyw6ltZW50"
    ],
    correctHash: hashAnswer(5, 1),
    explication: "TCfDqWdhbGl0w6kgZW50cmUgZmVtbWVzIGV0IGhvbW1lcyBzaWduaWZpZSBxdSdpbHMgZGlzcG9zZW50IGRlcyBtw6ptZXMgZHJvaXRzIHBvbGl0aXF1ZXMsIGNpdmlscywgw6ljb25vbWlxdWVzIGV0IHNvY2lhdXgsIGV0IGRlcyBtw6ptZXMgZGV2b2lycy4gQydlc3QgdW4gcHJpbmNpcGUgY29uc3RpdHV0aW9ubmVsLg=="},
  {
    id: 6,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Égalité",
    question: "TGUgaGFuZGljYXAgcGV1dC1pbCDDqnRyZSB1bmUgcmFpc29uIGRlIGRpc2NyaW1pbmVyIHF1ZWxxdSd1biA/",
    options: [
      "T3VpLCBkYW5zIGNlcnRhaW5zIGVtcGxvaXM=",
      "Tm9uLCBjJ2VzdCBzdHJpY3RlbWVudCBpbnRlcmRpdCBwYXIgbGEgbG9p",
      "T3VpLCBzaSBjJ2VzdCBkaXNjcmV0",
      "Q2VsYSBkw6lwZW5kIGR1IHR5cGUgZGUgaGFuZGljYXA="
    ],
    correctHash: hashAnswer(6, 1),
    explication: "TGEgZGlzY3JpbWluYXRpb24gZm9uZMOpZSBzdXIgbGUgaGFuZGljYXAgZXN0IHN0cmljdGVtZW50IGludGVyZGl0ZSBwYXIgbGEgbG9pLiBMZXMgZW50cmVwcmlzZXMgZXQgc2VydmljZXMgcHVibGljcyBkb2l2ZW50IGZhY2lsaXRlciBsJ2FjY2Vzc2liaWxpdMOpIGV0IGwnw6lnYWxpdMOpIGRlcyBjaGFuY2VzLg=="},
  {
    id: 7,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Liberté",
    question: "TGEgbGliZXJ0w6kgZCdhc3NvY2lhdGlvbiBlbiBGcmFuY2UgcGVybWV0IGRlIDo=",
    options: [
      "Q3LDqWVyIHVuZSBhc3NvY2lhdGlvbiBzYW5zIGF1dG9yaXNhdGlvbiBwcsOpYWxhYmxl",
      "Q3LDqWVyIHVuZSBhc3NvY2lhdGlvbiBzZXVsZW1lbnQgYXZlYyBhY2NvcmQgZHUgZ291dmVybmVtZW50",
      "Q3LDqWVyIHVuZSBhc3NvY2lhdGlvbiB1bmlxdWVtZW50IMOgIFBhcmlz",
      "SW50ZXJkaXJlIHRvdXRlIGZvcm1lIGRlIHJlZ3JvdXBlbWVudA=="
    ],
    correctHash: hashAnswer(7, 0),
    explication: "TGEgbGliZXJ0w6kgZCdhc3NvY2lhdGlvbiwgZ2FyYW50aWUgcGFyIGxhIGxvaSBkZSAxOTAxLCBwZXJtZXQgZGUgY3LDqWVyIGxpYnJlbWVudCB1bmUgYXNzb2NpYXRpb24gc2FucyBhdXRvcmlzYXRpb24gcHLDqWFsYWJsZSwgcGFyIHNpbXBsZSBkw6ljbGFyYXRpb24gZW4gcHLDqWZlY3R1cmUu"},
  {
    id: 8,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Liberté",
    question: "RW4gRnJhbmNlLCBwZXV0LW9uIGNyaXRpcXVlciBsZSBnb3V2ZXJuZW1lbnQgPw==",
    options: [
      "Tm9uLCBjJ2VzdCBpbnRlcmRpdA==",
      "T3VpLCBjJ2VzdCBnYXJhbnRpIHBhciBsYSBsaWJlcnTDqSBkJ2V4cHJlc3Npb24=",
      "T3VpLCBtYWlzIHNldWxlbWVudCBlbiBwcml2w6k=",
      "Tm9uLCBzYXVmIHBlbmRhbnQgbGVzIMOpbGVjdGlvbnM="
    ],
    correctHash: hashAnswer(8, 1),
    explication: "TGEgbGliZXJ0w6kgZCdleHByZXNzaW9uIGdhcmFudGl0IGxlIGRyb2l0IGRlIGNyaXRpcXVlciBsZSBnb3V2ZXJuZW1lbnQgZXQgbGVzIHBvbGl0aXF1ZXMgcHVibGlxdWVzLiBDJ2VzdCB1biBwaWxpZXIgZGUgbGEgZMOpbW9jcmF0aWUsIHRhbnQgcXVlIGNlbGEgcmVzdGUgZGFucyBsZSBjYWRyZSBkZSBsYSBsb2ku"},
  {
    id: 9,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Fraternité",
    question: "TGEgZnJhdGVybml0w6kgaW1wbGlxdWUgOg==",
    options: [
      "RCdhdm9pciBkZXMgZnLDqHJlcyBldCBzxZN1cnM=",
      "TGEgc29saWRhcml0w6kgZW50cmUgdG91cyBsZXMgbWVtYnJlcyBkZSBsYSBzb2Npw6l0w6k=",
      "RGUgdml2cmUgZW4gZmFtaWxsZSB1bmlxdWVtZW50",
      "RCdhcHBhcnRlbmlyIMOgIHVuZSBhc3NvY2lhdGlvbg=="
    ],
    correctHash: hashAnswer(9, 1),
    explication: "TGEgZnJhdGVybml0w6kgZXN0IHVuIHByaW5jaXBlIHF1aSBpbXBsaXF1ZSBsYSBzb2xpZGFyaXTDqSwgbCdlbnRyYWlkZSBldCBsZSByZXNwZWN0IG11dHVlbCBlbnRyZSB0b3VzIGxlcyBtZW1icmVzIGRlIGxhIHNvY2nDqXTDqSwgYXUtZGVsw6AgZGVzIGRpZmbDqXJlbmNlcy4="},
  {
    id: 10,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Fraternité",
    question: "QWlkZXIgdW5lIHBlcnNvbm5lIGVuIGRhbmdlciBlc3QgOg==",
    options: [
      "RmFjdWx0YXRpZg==",
      "VW5lIG9ibGlnYXRpb24gbW9yYWxlIGV0IHBhcmZvaXMgbMOpZ2FsZSAobm9uLWFzc2lzdGFuY2Ugw6AgcGVyc29ubmUgZW4gZGFuZ2VyKQ==",
      "UsOpc2VydsOpIGF1eCBwcm9mZXNzaW9ubmVscyB1bmlxdWVtZW50",
      "SW50ZXJkaXQgcG91ciDDqXZpdGVyIGxlcyBhY2NpZGVudHM="
    ],
    correctHash: hashAnswer(10, 1),
    explication: "UG9ydGVyIGFzc2lzdGFuY2Ugw6AgdW5lIHBlcnNvbm5lIGVuIGRhbmdlciBlc3QgdW5lIG9ibGlnYXRpb24gbMOpZ2FsZSBlbiBGcmFuY2UuIE5lIHBhcyBsZSBmYWlyZSBjb25zdGl0dWUgbGUgZMOpbGl0IGRlIG5vbi1hc3Npc3RhbmNlIMOgIHBlcnNvbm5lIGVuIGRhbmdlci4="},
  {
    id: 11,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Lutte contre les discriminations",
    question: "TGUgcmFjaXNtZSBlc3QgOg==",
    options: [
      "VW5lIG9waW5pb24gcGVyc29ubmVsbGUgcHJvdMOpZ8OpZQ==",
      "VW4gZMOpbGl0IHB1bmkgcGFyIGxhIGxvaQ==",
      "QXV0b3Jpc8OpIGRhbnMgbGUgY2FkcmUgcHJpdsOp",
      "VW5lIHRyYWRpdGlvbiBjdWx0dXJlbGxl"
    ],
    correctHash: hashAnswer(11, 1),
    explication: "TGUgcmFjaXNtZSBlc3QgdW4gZMOpbGl0IGVuIEZyYW5jZS4gTGVzIGFjdGVzLCBwcm9wb3Mgb3UgZGlzY3JpbWluYXRpb25zIHJhY2lzdGVzIHNvbnQgcHVuaXMgcGFyIGxhIGxvaSBww6luYWxlLCBxdSdpbHMgc29pZW50IGNvbW1pcyBlbiBwdWJsaWMgb3UgZW4gcHJpdsOpLg=="},

  // ==================== 2. SYSTÈME INSTITUTIONNEL (6 questions) ====================
  
  {
    id: 12,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Démocratie et droit de vote",
    question: "UG91ciDDqnRyZSDDqWx1IFByw6lzaWRlbnQgZGUgbGEgUsOpcHVibGlxdWUsIGlsIGZhdXQgb2J0ZW5pciA6",
    options: [
      "TGEgbWFqb3JpdMOpIHJlbGF0aXZlIChsZSBwbHVzIGRlIHZvaXgp",
      "TGEgbWFqb3JpdMOpIGFic29sdWUgKHBsdXMgZGUgNTAlIGRlcyB2b2l4KQ==",
      "QXUgbW9pbnMgMzAlIGRlcyB2b2l4",
      "TCdhY2NvcmQgZGVzIGTDqXB1dMOpcw=="
    ],
    correctHash: hashAnswer(12, 1),
    explication: "UG91ciDDqnRyZSDDqWx1IFByw6lzaWRlbnQsIGlsIGZhdXQgb2J0ZW5pciBsYSBtYWpvcml0w6kgYWJzb2x1ZSBkZXMgc3VmZnJhZ2VzIGV4cHJpbcOpcyAocGx1cyBkZSA1MCUpLiBTaSBhdWN1biBjYW5kaWRhdCBuZSBsJ29idGllbnQgYXUgcHJlbWllciB0b3VyLCB1biBzZWNvbmQgdG91ciBlc3Qgb3JnYW5pc8OpLg=="},
  {
    id: 13,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Démocratie et droit de vote",
    question: "Q29tYmllbiB5IGEtdC1pbCBkZSBkw6lwdXTDqXMgw6AgbCdBc3NlbWJsw6llIG5hdGlvbmFsZSA/",
    options: [
      "MzQ4",
      "NTc3",
      "OTIw",
      "MTAw"
    ],
    correctHash: hashAnswer(13, 1),
    explication: "TCdBc3NlbWJsw6llIG5hdGlvbmFsZSBjb21wdGUgNTc3IGTDqXB1dMOpcyDDqWx1cyBhdSBzdWZmcmFnZSB1bml2ZXJzZWwgZGlyZWN0IHBvdXIgNSBhbnMuIElscyByZXByw6lzZW50ZW50IGxlcyBjaXJjb25zY3JpcHRpb25zIGzDqWdpc2xhdGl2ZXMgZGUgRnJhbmNlLg=="},
  {
    id: 14,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Organisation de la République",
    question: "UXVpIHBldXQgZGlzc291ZHJlIGwnQXNzZW1ibMOpZSBuYXRpb25hbGUgPw==",
    options: [
      "TGUgUHJlbWllciBtaW5pc3RyZQ==",
      "TGUgUHLDqXNpZGVudCBkZSBsYSBSw6lwdWJsaXF1ZQ==",
      "TGVzIGTDqXB1dMOpcyBldXgtbcOqbWVz",
      "TGUgQ29uc2VpbCBjb25zdGl0dXRpb25uZWw="
    ],
    correctHash: hashAnswer(14, 1),
    explication: "TGUgUHLDqXNpZGVudCBkZSBsYSBSw6lwdWJsaXF1ZSBwZXV0IGRpc3NvdWRyZSBsJ0Fzc2VtYmzDqWUgbmF0aW9uYWxlLiBDZXR0ZSBkw6ljaXNpb24gZW50cmHDrm5lIGRlIG5vdXZlbGxlcyDDqWxlY3Rpb25zIGzDqWdpc2xhdGl2ZXMgZGFucyBsZXMgNjAgam91cnMu"},
  {
    id: 15,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Organisation de la République",
    question: "TGUgU8OpbmF0IHJlcHLDqXNlbnRlIDo=",
    options: [
      "TGVzIHBhcnRpcyBwb2xpdGlxdWVz",
      "TGVzIGNvbGxlY3Rpdml0w6lzIHRlcnJpdG9yaWFsZXM=",
      "TGVzIHN5bmRpY2F0cw==",
      "TGVzIGVudHJlcHJpc2Vz"
    ],
    correctHash: hashAnswer(15, 1),
    explication: "TGUgU8OpbmF0IGFzc3VyZSBsYSByZXByw6lzZW50YXRpb24gZGVzIGNvbGxlY3Rpdml0w6lzIHRlcnJpdG9yaWFsZXMgZGUgbGEgUsOpcHVibGlxdWUgKGNvbW11bmVzLCBkw6lwYXJ0ZW1lbnRzLCByw6lnaW9ucykuIElsIGVzdCDDqWx1IGF1IHN1ZmZyYWdlIHVuaXZlcnNlbCBpbmRpcmVjdC4="},
  {
    id: 16,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Collectivités territoriales",
    question: "UXVlbGxlIGNvbGxlY3Rpdml0w6kgZ8OocmUgbGVzIGx5Y8OpZXMgPw==",
    options: [
      "TGEgY29tbXVuZQ==",
      "TGUgZMOpcGFydGVtZW50",
      "TGEgcsOpZ2lvbg==",
      "TCfDiXRhdA=="
    ],
    correctHash: hashAnswer(16, 2),
    explication: "TGVzIHLDqWdpb25zIG9udCBsYSBjb21ww6l0ZW5jZSBkZSBjb25zdHJ1Y3Rpb24sIGQnZW50cmV0aWVuIGV0IGRlIGZvbmN0aW9ubmVtZW50IGRlcyBseWPDqWVzLiBMZXMgZMOpcGFydGVtZW50cyBnw6hyZW50IGxlcyBjb2xsw6hnZXMgZXQgbGVzIGNvbW11bmVzIGxlcyDDqWNvbGVzIHByaW1haXJlcy4="},
  {
    id: 17,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Institutions européennes",
    question: "TGUgUGFybGVtZW50IGV1cm9ww6llbiBlc3Qgw6lsdSA6",
    options: [
      "UGFyIGxlcyBjaGVmcyBkJ8OJdGF0",
      "QXUgc3VmZnJhZ2UgdW5pdmVyc2VsIGRpcmVjdCBwYXIgbGVzIGNpdG95ZW5zIGV1cm9ww6llbnM=",
      "UGFyIGxlcyBwYXJsZW1lbnRzIG5hdGlvbmF1eA==",
      "UGFyIHRpcmFnZSBhdSBzb3J0"
    ],
    correctHash: hashAnswer(17, 1),
    explication: "TGUgUGFybGVtZW50IGV1cm9ww6llbiBlc3Qgw6lsdSBhdSBzdWZmcmFnZSB1bml2ZXJzZWwgZGlyZWN0IHBhciBsZXMgY2l0b3llbnMgZGVzIHBheXMgbWVtYnJlcyBkZSBsJ1VFLCB0b3VzIGxlcyA1IGFucy4gTGVzIMOpbGVjdGlvbnMgb250IGxpZXUgc2ltdWx0YW7DqW1lbnQgZGFucyB0b3VzIGxlcyBwYXlzLg=="},

  // ==================== 3. DROITS ET DEVOIRS (11 questions) ====================
  
  {
    id: 18,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits fondamentaux",
    question: "TGUgc2VjcmV0IG3DqWRpY2FsIGVzdCA6",
    options: [
      "RmFjdWx0YXRpZiBzZWxvbiBsZSBtw6lkZWNpbg==",
      "QWJzb2x1IGV0IHByb3TDqWfDqSBwYXIgbGEgbG9p",
      "UsOpc2VydsOpIGF1eCBow7RwaXRhdXg=",
      "TGltaXTDqSBhdXggbWFsYWRpZXMgZ3JhdmVz"
    ],
    correctHash: hashAnswer(18, 1),
    explication: "TGUgc2VjcmV0IG3DqWRpY2FsIGVzdCBhYnNvbHUgZXQgcHJvdMOpZ8OpIHBhciBsYSBsb2kuIExlcyBwcm9mZXNzaW9ubmVscyBkZSBzYW50w6kgbmUgcGV1dmVudCByw6l2w6lsZXIgbGVzIGluZm9ybWF0aW9ucyBtw6lkaWNhbGVzIGRlIGxldXJzIHBhdGllbnRzLCBzYXVmIGV4Y2VwdGlvbnMgbMOpZ2FsZXMgdHLDqHMgbGltaXTDqWVzLg=="},
  {
    id: 19,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits fondamentaux",
    question: "UXUnZXN0LWNlIHF1ZSBsYSBsaWJlcnTDqSBkZSBjb25zY2llbmNlID8=",
    options: [
      "RmFpcmUgY2UgcXUnb24gdmV1dCBzYW5zIGxpbWl0ZQ==",
      "TGUgZHJvaXQgZCdhdm9pciBvdSBub24gZGVzIGNvbnZpY3Rpb25zIHJlbGlnaWV1c2VzIG91IHBoaWxvc29waGlxdWVz",
      "TCdvYmxpZ2F0aW9uIGRlIHN1aXZyZSB1bmUgcmVsaWdpb24=",
      "TGUgZHJvaXQgZGUganVnZXIgbGVzIGF1dHJlcw=="
    ],
    correctHash: hashAnswer(19, 1),
    explication: "TGEgbGliZXJ0w6kgZGUgY29uc2NpZW5jZSBnYXJhbnRpdCDDoCBjaGFjdW4gbGUgZHJvaXQgZCdhdm9pciwgZGUgbmUgcGFzIGF2b2lyLCBkZSBjaGFuZ2VyIG91IGRlIG1hbmlmZXN0ZXIgc2VzIGNvbnZpY3Rpb25zIHJlbGlnaWV1c2VzLCBwaGlsb3NvcGhpcXVlcyBvdSBwb2xpdGlxdWVzLg=="},
  {
    id: 20,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits fondamentaux",
    question: "RW4gRnJhbmNlLCBsYSBsaWJlcnTDqSBzeW5kaWNhbGUgcGVybWV0IDo=",
    options: [
      "RCdpbnRlcmRpcmUgbGVzIHN5bmRpY2F0cw==",
      "RGUgY3LDqWVyIG91IGQnYWRow6lyZXIgbGlicmVtZW50IMOgIHVuIHN5bmRpY2F0",
      "RCdvYmxpZ2VyIHRvdXQgbGUgbW9uZGUgw6AgYWRow6lyZXIgw6AgdW4gc3luZGljYXQ=",
      "RGUgY3LDqWVyIGRlcyBzeW5kaWNhdHMgdW5pcXVlbWVudCBhdmVjIGF1dG9yaXNhdGlvbg=="
    ],
    correctHash: hashAnswer(20, 1),
    explication: "TGEgbGliZXJ0w6kgc3luZGljYWxlIGdhcmFudGl0IGxlIGRyb2l0IGRlIGNyw6llciwgZCdhZGjDqXJlciBvdSBkZSBuZSBwYXMgYWRow6lyZXIgw6AgdW4gc3luZGljYXQuIExlcyBzeW5kaWNhdHMgZMOpZmVuZGVudCBsZXMgaW50w6lyw6p0cyBwcm9mZXNzaW9ubmVscyBkZSBsZXVycyBtZW1icmVzLg=="},
  {
    id: 21,
    categorie: "Droits et devoirs",
    sousCategorie: "Devoirs du citoyen",
    question: "TGUgdm90ZSBlbiBGcmFuY2UgZXN0IDo=",
    options: [
      "T2JsaWdhdG9pcmUgc291cyBwZWluZSBkJ2FtZW5kZQ==",
      "VW4gZHJvaXQgZXQgdW4gZGV2b2lyIGNpdmlxdWUsIG1haXMgcGFzIG9ibGlnYXRvaXJl",
      "UsOpc2VydsOpIGF1eCBwcm9wcmnDqXRhaXJlcw==",
      "SW50ZXJkaXQgYXV4IGpldW5lcyBkZSBtb2lucyBkZSAyNSBhbnM="
    ],
    correctHash: hashAnswer(21, 1),
    explication: "TGUgdm90ZSBlc3QgdW4gZHJvaXQgZXQgdW4gZGV2b2lyIGNpdmlxdWUgZW4gRnJhbmNlLCBtYWlzIGlsIG4nZXN0IHBhcyBvYmxpZ2F0b2lyZS4gTCdhYnN0ZW50aW9uIG4nZXN0IHBhcyBzYW5jdGlvbm7DqWUsIGJpZW4gcXUnZWxsZSBzb2l0IHNvdXZlbnQgY29uc2lkw6lyw6llIGNvbW1lIHVuIG1hbnF1ZW1lbnQgY2l0b3llbi4="},
  {
    id: 22,
    categorie: "Droits et devoirs",
    sousCategorie: "Devoirs du citoyen",
    question: "TGEgSm91cm7DqWUgRMOpZmVuc2UgZXQgQ2l0b3llbm5ldMOpIChKREMpIGVzdCBvYmxpZ2F0b2lyZSBwb3VyIDo=",
    options: [
      "TGVzIGdhcsOnb25zIHVuaXF1ZW1lbnQ=",
      "VG91cyBsZXMgamV1bmVzIEZyYW7Dp2FpcywgZmlsbGVzIGV0IGdhcsOnb25z",
      "TGVzIMOpdHJhbmdlcnMgcsOpc2lkYW50IGVuIEZyYW5jZQ==",
      "UGVyc29ubmUsIGVsbGUgZXN0IGZhY3VsdGF0aXZl"
    ],
    correctHash: hashAnswer(22, 1),
    explication: "TGEgSkRDIChhbmNpZW5uZW1lbnQgSkFQRCkgZXN0IG9ibGlnYXRvaXJlIHBvdXIgdG91cyBsZXMgamV1bmVzIEZyYW7Dp2FpcywgZmlsbGVzIGV0IGdhcsOnb25zLCBnw6luw6lyYWxlbWVudCBlbnRyZSAxNiBldCAyNSBhbnMuIEVsbGUgZXN0IG7DqWNlc3NhaXJlIHBvdXIgcGFzc2VyIGNlcnRhaW5zIGV4YW1lbnMu"},
  {
    id: 23,
    categorie: "Droits et devoirs",
    sousCategorie: "Devoirs du citoyen",
    question: "UmVzcGVjdGVyIGxhIGxvaSBlbiBGcmFuY2UgZXN0IDo=",
    options: [
      "RmFjdWx0YXRpZiBzaSBvbiBuJ2VzdCBwYXMgZCdhY2NvcmQ=",
      "VW5lIG9ibGlnYXRpb24gcG91ciB0b3VzLCBjaXRveWVucyBldCByw6lzaWRlbnRz",
      "UsOpc2VydsOpIGF1eCBGcmFuw6dhaXMgdW5pcXVlbWVudA==",
      "RmFjdWx0YXRpZiBwb3VyIGxlcyB0b3VyaXN0ZXM="
    ],
    correctHash: hashAnswer(23, 1),
    explication: "UmVzcGVjdGVyIGxhIGxvaSBlc3QgdW5lIG9ibGlnYXRpb24gcG91ciB0b3VzLCBGcmFuw6dhaXMgZXQgw6l0cmFuZ2VycyByw6lzaWRhbnQgZW4gRnJhbmNlLiAnTnVsIG4nZXN0IGNlbnPDqSBpZ25vcmVyIGxhIGxvaScgOiBuZSBwYXMgbGEgY29ubmHDrnRyZSBuZSBkaXNwZW5zZSBwYXMgZGUgbGEgcmVzcGVjdGVyLg=="},
  {
    id: 24,
    categorie: "Droits et devoirs",
    sousCategorie: "Justice",
    question: "TGEgcHLDqXNvbXB0aW9uIGQnaW5ub2NlbmNlIHNpZ25pZmllIHF1ZSA6",
    options: [
      "VG91dCBhY2N1c8OpIGVzdCBjb3VwYWJsZSBqdXNxdSfDoCBwcmV1dmUgZHUgY29udHJhaXJl",
      "VG91dGUgcGVyc29ubmUgZXN0IHByw6lzdW3DqWUgaW5ub2NlbnRlIGp1c3F1J8OgIGNlIHF1ZSBzYSBjdWxwYWJpbGl0w6kgc29pdCDDqXRhYmxpZQ==",
      "TGVzIGp1Z2VzIGTDqWNpZGVudCBzYW5zIHByZXV2ZQ==",
      "T24gbmUgcGV1dCBqYW1haXMgw6p0cmUganVnw6k="
    ],
    correctHash: hashAnswer(24, 1),
    explication: "TGEgcHLDqXNvbXB0aW9uIGQnaW5ub2NlbmNlIGVzdCB1biBwcmluY2lwZSBmb25kYW1lbnRhbCA6IHRvdXRlIHBlcnNvbm5lIGVzdCBwcsOpc3Vtw6llIGlubm9jZW50ZSB0YW50IHF1ZSBzYSBjdWxwYWJpbGl0w6kgbidhIHBhcyDDqXTDqSBsw6lnYWxlbWVudCDDqXRhYmxpZSBwYXIgdW4gdHJpYnVuYWwu"},
  {
    id: 25,
    categorie: "Droits et devoirs",
    sousCategorie: "Justice",
    question: "UXVpIGp1Z2UgbGVzIGNyaW1lcyBsZXMgcGx1cyBncmF2ZXMgZW4gRnJhbmNlID8=",
    options: [
      "TGUgdHJpYnVuYWwgZGUgcG9saWNl",
      "TGEgY291ciBkJ2Fzc2lzZXMgYXZlYyBqdXJ5IHBvcHVsYWlyZQ==",
      "TGUgUHLDqXNpZGVudCBkZSBsYSBSw6lwdWJsaXF1ZQ==",
      "TGUgbWFpcmU="
    ],
    correctHash: hashAnswer(25, 1),
    explication: "TGVzIGNyaW1lcyBsZXMgcGx1cyBncmF2ZXMgc29udCBqdWfDqXMgcGFyIGxhIGNvdXIgZCdhc3Npc2VzLCBjb21wb3PDqWUgZGUgbWFnaXN0cmF0cyBwcm9mZXNzaW9ubmVscyBldCBkJ3VuIGp1cnkgcG9wdWxhaXJlIGRlIGNpdG95ZW5zIHRpcsOpcyBhdSBzb3J0Lg=="},
  {
    id: 26,
    categorie: "Droits et devoirs",
    sousCategorie: "Défense nationale",
    question: "UXVlIGZhdXQtaWwgZmFpcmUgc2kgb24gZMOpbcOpbmFnZSA/",
    options: [
      "UmllbiBkZSBwYXJ0aWN1bGllcg==",
      "RMOpY2xhcmVyIHNvbiBjaGFuZ2VtZW50IGQnYWRyZXNzZSAoaW1ww7R0cywgQ0FGLCBzw6ljdS4uLik=",
      "RGVtYW5kZXIgbCdhdXRvcmlzYXRpb24gYXUgbWFpcmU=",
      "QXR0ZW5kcmUgNSBhbnM="
    ],
    correctHash: hashAnswer(26, 1),
    explication: "TG9ycyBkJ3VuIGTDqW3DqW5hZ2VtZW50LCBpbCBlc3Qgb2JsaWdhdG9pcmUgZGUgZMOpY2xhcmVyIHNvbiBjaGFuZ2VtZW50IGQnYWRyZXNzZSBhdXggYWRtaW5pc3RyYXRpb25zIDogaW1ww7R0cywgc8OpY3VyaXTDqSBzb2NpYWxlLCBDQUYsIHByw6lmZWN0dXJlIChwb3VyIGxhIGNhcnRlIGdyaXNlKSwgZXRjLg=="},
  {
    id: 27,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits sociaux",
    question: "TGUgUlNBIChSZXZlbnUgZGUgU29saWRhcml0w6kgQWN0aXZlKSBlc3QgOg==",
    options: [
      "VW5lIGFpZGUgcG91ciBsZXMgw6l0dWRpYW50cw==",
      "VW5lIGFpZGUgcG91ciBsZXMgcGVyc29ubmVzIHNhbnMgcmVzc291cmNlcyBvdSBhdmVjIGZhaWJsZXMgcmV2ZW51cw==",
      "VW5lIHByaW1lIHBvdXIgbGVzIGZvbmN0aW9ubmFpcmVz",
      "VW5lIHRheGUgb2JsaWdhdG9pcmU="
    ],
    correctHash: hashAnswer(27, 1),
    explication: "TGUgUlNBIGVzdCB1bmUgYWlkZSBzb2NpYWxlIHF1aSBnYXJhbnRpdCB1biByZXZlbnUgbWluaW11bSBhdXggcGVyc29ubmVzIHNhbnMgcmVzc291cmNlcyBvdSBkaXNwb3NhbnQgZGUgZmFpYmxlcyByZXZlbnVzLiBJbCByZW1wbGFjZSBsZSBSTUkgZGVwdWlzIDIwMDku"},
  {
    id: 28,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits sociaux",
    question: "RW4gRnJhbmNlLCBwZXV0LW9uIGxpY2VuY2llciB1bmUgZmVtbWUgZW5jZWludGUgPw==",
    options: [
      "T3VpLCBjb21tZSB0b3V0IHNhbGFyacOp",
      "Tm9uLCBzYXVmIGV4Y2VwdGlvbnMgdHLDqHMgbGltaXTDqWVzIChmYXV0ZSBncmF2ZSwgaW1wb3NzaWJpbGl0w6kgZGUgbWFpbnRlbmlyIGxlIGNvbnRyYXQp",
      "T3VpLCBzaSBlbGxlIGVzdCBlbmNlaW50ZSBkZSBtb2lucyBkZSAzIG1vaXM=",
      "Q2VsYSBkw6lwZW5kIGRlIGwnZW50cmVwcmlzZQ=="
    ],
    correctHash: hashAnswer(28, 1),
    explication: "TGVzIGZlbW1lcyBlbmNlaW50ZXMgYsOpbsOpZmljaWVudCBkJ3VuZSBwcm90ZWN0aW9uIHJlbmZvcmPDqWUuIExlIGxpY2VuY2llbWVudCBlc3QgaW50ZXJkaXQgcGVuZGFudCBsYSBncm9zc2Vzc2UgZXQgbGUgY29uZ8OpIG1hdGVybml0w6ksIHNhdWYgZmF1dGUgZ3JhdmUgb3UgaW1wb3NzaWJpbGl0w6kgZGUgbWFpbnRlbmlyIGxlIGNvbnRyYXQu"},

  // ==================== 4. HISTOIRE, GÉOGRAPHIE, CULTURE (8 questions) ====================
  
  {
    id: 29,
    categorie: "Histoire, géographie et culture de la France",
    sousCategorie: "Grandes dates",
    question: "UXVlIGPDqWzDqGJyZS10LW9uIGxlIDggbWFpID8=",
    options: [
      "TGEgZmluIGRlIGxhIFByZW1pw6hyZSBHdWVycmUgbW9uZGlhbGU=",
      "TGEgdmljdG9pcmUgZGVzIEFsbGnDqXMgZW4gMTk0NSBldCBsYSBmaW4gZGUgbGEgU2Vjb25kZSBHdWVycmUgbW9uZGlhbGUgZW4gRXVyb3Bl",
      "TGEgbGliw6lyYXRpb24gZGUgUGFyaXM=",
      "TGEgZsOqdGUgbmF0aW9uYWxl"
    ],
    correctHash: hashAnswer(29, 1),
    explication: "TGUgOCBtYWkgY29tbcOpbW9yZSBsYSB2aWN0b2lyZSBkZXMgQWxsacOpcyBzdXIgbCdBbGxlbWFnbmUgbmF6aWUgZXQgbGEgZmluIGRlIGxhIFNlY29uZGUgR3VlcnJlIG1vbmRpYWxlIGVuIEV1cm9wZSAoY2FwaXR1bGF0aW9uIGFsbGVtYW5kZSBsZSA4IG1haSAxOTQ1KS4="},
  {
    id: 30,
    categorie: "Histoire, géographie et culture de la France",
    sousCategorie: "Grandes dates",
    question: "UXUnZXN0LWNlIHF1ZSBsYSBEw6ljbGFyYXRpb24gZGVzIGRyb2l0cyBkZSBsJ2hvbW1lIGV0IGR1IGNpdG95ZW4gPw==",
    options: [
      "VW4gdHJhaXTDqSBpbnRlcm5hdGlvbmFsIHLDqWNlbnQ=",
      "VW4gdGV4dGUgZm9uZGFtZW50YWwgZGUgMTc4OSBxdWkgcHJvY2xhbWUgbGVzIGRyb2l0cyBuYXR1cmVscyBkZSBsJ2hvbW1l",
      "VW4gZGlzY291cnMgZHUgUHLDqXNpZGVudA==",
      "VW5lIGxvaSBzdXIgbCdpbW1pZ3JhdGlvbg=="
    ],
    correctHash: hashAnswer(30, 1),
    explication: "TGEgRMOpY2xhcmF0aW9uIGRlcyBkcm9pdHMgZGUgbCdob21tZSBldCBkdSBjaXRveWVuIGRlIDE3ODkgZXN0IHVuIHRleHRlIGZvbmRhbWVudGFsIHF1aSBwcm9jbGFtZSBsZXMgZHJvaXRzIG5hdHVyZWxzLCBpbmFsacOpbmFibGVzIGV0IHNhY3LDqXMgZGUgbCdob21tZS4gRWxsZSBpbnNwaXJlIGVuY29yZSBub3RyZSBDb25zdGl0dXRpb24u"},
  {
    id: 31,
    categorie: "Histoire, géographie et culture de la France",
    sousCategorie: "Grandes dates",
    question: "UXUnZXN0LWNlIHF1ZSBsJ2Fib2xpdGlvbiBkZSBsJ2VzY2xhdmFnZSBlbiBGcmFuY2UgPw==",
    options: [
      "VW4gw6l2w6luZW1lbnQgcsOpY2VudA==",
      "TCdpbnRlcmRpY3Rpb24gZMOpZmluaXRpdmUgZGUgbCdlc2NsYXZhZ2UgZW4gMTg0OA==",
      "VW5lIG1lc3VyZSB0ZW1wb3JhaXJl",
      "VW5lIHByb3Bvc2l0aW9uIHJlZnVzw6ll"
    ],
    correctHash: hashAnswer(31, 1),
    explication: "TCdlc2NsYXZhZ2UgYSDDqXTDqSBkw6lmaW5pdGl2ZW1lbnQgYWJvbGkgZW4gRnJhbmNlIGxlIDI3IGF2cmlsIDE4NDggZ3LDomNlIGF1IGTDqWNyZXQgZGUgVmljdG9yIFNjaMWTbGNoZXIuIENldHRlIGRhdGUgZXN0IGNvbW3DqW1vcsOpZSBlbiBPdXRyZS1tZXIgZXQgbGUgMTAgbWFpIGVuIG3DqXRyb3BvbGUu"},
  {
    id: 32,
    categorie: "Histoire, géographie et culture de la France",
    sousCategorie: "Géographie",
    question: "UXVlbCBvY8OpYW4gYm9yZGUgbGEgRnJhbmNlIMOgIGwnb3Vlc3QgPw==",
    options: [
      "TCdvY8OpYW4gSW5kaWVu",
      "TCdvY8OpYW4gQXRsYW50aXF1ZQ==",
      "TCdvY8OpYW4gUGFjaWZpcXVl",
      "TCdvY8OpYW4gQXJjdGlxdWU="
    ],
    correctHash: hashAnswer(32, 1),
    explication: "TCdvY8OpYW4gQXRsYW50aXF1ZSBib3JkZSBsYSBGcmFuY2Ugw6AgbCdvdWVzdCwgZGUgbGEgQnJldGFnbmUganVzcXUnYXUgUGF5cyBiYXNxdWUuIExhIEZyYW5jZSBkaXNwb3NlIMOpZ2FsZW1lbnQgZCd1biBsaXR0b3JhbCBtw6lkaXRlcnJhbsOpZW4gYXUgc3VkLWVzdC4="},
  {
    id: 33,
    categorie: "Histoire, géographie et culture de la France",
    sousCategorie: "Géographie",
    question: "UXVlbCBlc3QgbGUgcGx1cyBoYXV0IHNvbW1ldCBkZSBGcmFuY2UgPw==",
    options: [
      "TGUgTW9udCBCbGFuYw==",
      "TGUgTW9udCBWZW50b3V4",
      "TGUgUGljIGR1IE1pZGk=",
      "TGEgRHVuZSBkdSBQaWxhdA=="
    ],
    correctHash: hashAnswer(33, 0),
    explication: "TGUgTW9udCBCbGFuYywgc2l0dcOpIGRhbnMgbGVzIEFscGVzIMOgIGxhIGZyb250acOocmUgZnJhbmNvLWl0YWxpZW5uZSwgZXN0IGxlIHBsdXMgaGF1dCBzb21tZXQgZGUgRnJhbmNlIGV0IGQnRXVyb3BlIG9jY2lkZW50YWxlIGF2ZWMgNCA4MDggbcOodHJlcyBkJ2FsdGl0dWRlLg=="},
  {
    id: 34,
    categorie: "Histoire, géographie et culture de la France",
    sousCategorie: "Culture et patrimoine",
    question: "UXVpIGEgcGVpbnQgJ0xhIExpYmVydMOpIGd1aWRhbnQgbGUgcGV1cGxlJyA/",
    options: [
      "Q2xhdWRlIE1vbmV0",
      "RXVnw6huZSBEZWxhY3JvaXg=",
      "UGFibG8gUGljYXNzbw==",
      "QXVndXN0ZSBSZW5vaXI="
    ],
    correctHash: hashAnswer(34, 1),
    explication: "RXVnw6huZSBEZWxhY3JvaXggYSBwZWludCAnTGEgTGliZXJ0w6kgZ3VpZGFudCBsZSBwZXVwbGUnIGVuIDE4MzAgcG91ciBjb21tw6ltb3JlciBsZXMgVHJvaXMgR2xvcmlldXNlcy4gQ2UgdGFibGVhdSBlc3QgZXhwb3PDqSBhdSBtdXPDqWUgZHUgTG91dnJlLg=="},
  {
    id: 35,
    categorie: "Histoire, géographie et culture de la France",
    sousCategorie: "Culture et patrimoine",
    question: "UXVlbCBjaMOidGVhdSByb3lhbCBzZSB0cm91dmUgcHLDqHMgZGUgUGFyaXMgPw==",
    options: [
      "TGUgY2jDonRlYXUgZGUgQ2hhbWJvcmQ=",
      "TGUgY2jDonRlYXUgZGUgVmVyc2FpbGxlcw==",
      "TGUgY2jDonRlYXUgZGUgQ2hlbm9uY2VhdQ==",
      "TGUgY2jDonRlYXUgZCdBbWJvaXNl"
    ],
    correctHash: hashAnswer(35, 1),
    explication: "TGUgY2jDonRlYXUgZGUgVmVyc2FpbGxlcywgYW5jaWVubmUgcsOpc2lkZW5jZSBkZXMgcm9pcyBkZSBGcmFuY2UgKG5vdGFtbWVudCBMb3VpcyBYSVYpLCBlc3Qgc2l0dcOpIHByw6hzIGRlIFBhcmlzLiBDJ2VzdCBsJ3VuIGRlcyBtb251bWVudHMgbGVzIHBsdXMgdmlzaXTDqXMgZGUgRnJhbmNlLg=="},
  {
    id: 36,
    categorie: "Histoire, géographie et culture de la France",
    sousCategorie: "Personnalités",
    question: "UXVpIMOpdGFpdCBKZWFuIE1vdWxpbiA/",
    options: [
      "VW4gcm9pIGRlIEZyYW5jZQ==",
      "VW4gaMOpcm9zIGRlIGxhIFLDqXNpc3RhbmNlIGZyYW7Dp2Fpc2UgcGVuZGFudCBsYSBTZWNvbmRlIEd1ZXJyZSBtb25kaWFsZQ==",
      "VW4gw6ljcml2YWluIGPDqWzDqGJyZQ==",
      "VW4gc2NpZW50aWZpcXVl"
    ],
    correctHash: hashAnswer(36, 1),
    explication: "SmVhbiBNb3VsaW4gKDE4OTktMTk0MykgZXN0IGwndW4gZGVzIHByaW5jaXBhdXggaMOpcm9zIGRlIGxhIFLDqXNpc3RhbmNlIGZyYW7Dp2Fpc2UuIElsIGEgdW5pZmnDqSBsZXMgbW91dmVtZW50cyBkZSByw6lzaXN0YW5jZSBzb3VzIGwnYXV0b3JpdMOpIGR1IGfDqW7DqXJhbCBkZSBHYXVsbGUu"},

  // ==================== 5. VIVRE EN FRANCE (4 questions) ====================
  
  {
    id: 37,
    categorie: "Vivre en France",
    sousCategorie: "Vie quotidienne",
    question: "UG91ciBvdXZyaXIgdW4gY29tcHRlIGJhbmNhaXJlIGVuIEZyYW5jZSwgaWwgZmF1dCBnw6luw6lyYWxlbWVudCA6",
    options: [
      "w4p0cmUgbWlsbGlvbm5haXJl",
      "UHLDqXNlbnRlciB1bmUgcGnDqGNlIGQnaWRlbnRpdMOpIGV0IHVuIGp1c3RpZmljYXRpZiBkZSBkb21pY2lsZQ==",
      "QXZvaXIgcGx1cyBkZSAzMCBhbnM=",
      "TCdhdXRvcmlzYXRpb24gZHUgbWFpcmU="
    ],
    correctHash: hashAnswer(37, 1),
    explication: "UG91ciBvdXZyaXIgdW4gY29tcHRlIGJhbmNhaXJlLCBpbCBmYXV0IHByw6lzZW50ZXIgdW5lIHBpw6hjZSBkJ2lkZW50aXTDqSB2YWxpZGUgZXQgdW4ganVzdGlmaWNhdGlmIGRlIGRvbWljaWxlLiBUb3V0ZSBwZXJzb25uZSByw6lzaWRhbnQgZW4gRnJhbmNlIGEgZHJvaXQgw6AgdW4gY29tcHRlIGJhbmNhaXJlLg=="},
  {
    id: 38,
    categorie: "Vivre en France",
    sousCategorie: "Vie quotidienne",
    question: "TGEgQ0FGIChDYWlzc2UgZCdBbGxvY2F0aW9ucyBGYW1pbGlhbGVzKSB2ZXJzZSA6",
    options: [
      "TGVzIHNhbGFpcmVz",
      "RGVzIGFpZGVzIHNvY2lhbGVzIGV0IGZhbWlsaWFsZXMgKGFsbG9jYXRpb25zIGxvZ2VtZW50LCBmYW1pbGlhbGVzLi4uKQ==",
      "TGVzIHJldHJhaXRlcyB1bmlxdWVtZW50",
      "TGVzIGFtZW5kZXM="
    ],
    correctHash: hashAnswer(38, 1),
    explication: "TGEgQ0FGIHZlcnNlIGRpdmVyc2VzIGFpZGVzIHNvY2lhbGVzIGV0IGZhbWlsaWFsZXMgOiBhbGxvY2F0aW9ucyBmYW1pbGlhbGVzLCBhaWRlcyBhdSBsb2dlbWVudCAoQVBMKSwgUlNBLCBwcmltZSBkJ2FjdGl2aXTDqSwgZXRjLiwgc2Vsb24gbGEgc2l0dWF0aW9uIGRlIGNoYWN1bi4="},
  {
    id: 39,
    categorie: "Vivre en France",
    sousCategorie: "Vie citoyenne",
    question: "RW4gRnJhbmNlLCBsZSB0cmkgc8OpbGVjdGlmIGRlcyBkw6ljaGV0cyBlc3QgOg==",
    options: [
      "RmFjdWx0YXRpZg==",
      "T2JsaWdhdG9pcmUgZXQgZW5jb3VyYWdlIGxlIHJlY3ljbGFnZQ==",
      "UsOpc2VydsOpIGF1eCBncmFuZGVzIHZpbGxlcw==",
      "SW50ZXJkaXQ="
    ],
    correctHash: hashAnswer(39, 1),
    explication: "TGUgdHJpIHPDqWxlY3RpZiBkZXMgZMOpY2hldHMgZXN0IG9ibGlnYXRvaXJlIGRhbnMgdG91dGVzIGxlcyBjb21tdW5lcy4gSWwgcGVybWV0IGRlIHJlY3ljbGVyIGV0IGRlIHLDqWR1aXJlIGxlcyBkw6ljaGV0cywgY29udHJpYnVhbnQgYWluc2kgw6AgbGEgcHJvdGVjdGlvbiBkZSBsJ2Vudmlyb25uZW1lbnQu"},
  {
    id: 40,
    categorie: "Vivre en France",
    sousCategorie: "Santé",
    question: "TGUgbcOpZGVjaW4gdHJhaXRhbnQgZW4gRnJhbmNlIGVzdCA6",
    options: [
      "T2JsaWdhdG9pcmUgZXQgcGVybWV0IHVuIG1laWxsZXVyIHN1aXZpIG3DqWRpY2FsIGV0IHJlbWJvdXJzZW1lbnQ=",
      "SW50ZXJkaXQ=",
      "UsOpc2VydsOpIGF1eCBwZXJzb25uZXMgw6Jnw6llcw==",
      "VW5pcXVlbWVudCBwb3VyIGxlcyB1cmdlbmNlcw=="
    ],
    correctHash: hashAnswer(40, 0),
    explication: "Q2hvaXNpciB1biBtw6lkZWNpbiB0cmFpdGFudCBlc3Qgdml2ZW1lbnQgcmVjb21tYW5kw6kgKHF1YXNpLW9ibGlnYXRvaXJlKSBwb3VyIGLDqW7DqWZpY2llciBkJ3VuIG1laWxsZXVyIHN1aXZpIG3DqWRpY2FsIGV0IGR1IHJlbWJvdXJzZW1lbnQgb3B0aW1hbCBkZSBsYSBTw6ljdXJpdMOpIHNvY2lhbGUu"}
];

// Fonction pour vérifier une réponse
export function verifyAnswerExam4(questionId: number, userAnswerIndex: number, correctHash: string): boolean {
  return hashAnswer(questionId, userAnswerIndex) === correctHash;
}

// Fonction pour trouver l'index correct à partir du hash
export function findCorrectIndexExam4(questionId: number, correctHash: string): number {
  for (let i = 0; i < 4; i++) {
    if (hashAnswer(questionId, i) === correctHash) {
      return i;
    }
  }
  return 0;
}

export const EXAMEN_4: ExamenBlanc = {
  numero: 4,
  titre: "Examen blanc #4",
  description: "40 questions en conditions réelles d'examen",
  questions: questions.map(q => decodeQuestion(q)),
  dureeMinutes: 45,
  totalQuestions: 40
};
