// ==================== EXAMEN BLANC #1 ====================
// Répartition officielle :
// 1. Principes et valeurs (11 questions)
// 2. Système institutionnel (6 questions)
// 3. Droits et devoirs (11 questions)
// 4. Histoire/géographie/culture (8 questions)
// 5. Vivre en France (4 questions)
// ==========================================================================

import { ExamenBlanc, Question, decodeQuestion } from './types';

const EXAM_NUMBER = 1;

// Fonction de hash simple (djb2) pour l'examen 1
function hashAnswer(questionId: number, answerIndex: number): string {
  const str = `q${questionId}_a${answerIndex}_civique2024`;
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
    question: "UXVlbGxlIGVzdCBsYSBkZXZpc2UgZGUgbGEgUsOpcHVibGlxdWUgZnJhbsOnYWlzZSA/",
    options: [
      "VW5pdMOpLCBGb3JjZSwgUHJvZ3LDqHM=",
      "TGliZXJ0w6ksIMOJZ2FsaXTDqSwgRnJhdGVybml0w6k=",
      "VHJhdmFpbCwgRmFtaWxsZSwgUGF0cmll",
      "SG9ubmV1ciwgUGF0cmllLCBEZXZvaXI="
    ],
    correctHash: hashAnswer(1, 1),
    explication: "TGEgZGV2aXNlIGRlIGxhIFLDqXB1YmxpcXVlIGZyYW7Dp2Fpc2UgZXN0IMKrIExpYmVydMOpLCDDiWdhbGl0w6ksIEZyYXRlcm5pdMOpIMK7LiBFbGxlIGZpZ3VyZSBkYW5zIGwnYXJ0aWNsZSAyIGRlIGxhIENvbnN0aXR1dGlvbiBkZSAxOTU4IGV0IGVzdCBpbnNjcml0ZSBzdXIgbGVzIGZyb250b25zIGRlcyBiw6J0aW1lbnRzIHB1YmxpY3Mu"},
  {
    id: 2,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Devise et symboles",
    question: "UXVlbGxlcyBzb250IGxlcyBjb3VsZXVycyBkdSBkcmFwZWF1IGZyYW7Dp2FpcywgZGUgZ2F1Y2hlIMOgIGRyb2l0ZSA/",
    options: [
      "Um91Z2UsIGJsYW5jLCBibGV1",
      "QmxldSwgcm91Z2UsIGJsYW5j",
      "QmxldSwgYmxhbmMsIHJvdWdl",
      "QmxhbmMsIGJsZXUsIHJvdWdl"
    ],
    correctHash: hashAnswer(2, 2),
    explication: "TGUgZHJhcGVhdSBmcmFuw6dhaXMgZXN0IGNvbXBvc8OpIGRlIHRyb2lzIGJhbmRlcyB2ZXJ0aWNhbGVzIDogYmxldSAoY8O0dMOpIG3DonQpLCBibGFuYyAoY2VudHJlKSBldCByb3VnZSAoY8O0dMOpIGZsb3R0YW50KS4gSWwgZXN0IGxlIHN5bWJvbGUgZGUgbGEgUsOpcHVibGlxdWUgZGVwdWlzIDE3OTQu"},
  {
    id: 3,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Devise et symboles",
    question: "UXVlbCBlc3QgbCdoeW1uZSBuYXRpb25hbCBmcmFuw6dhaXMgPw==",
    options: [
      "TGUgQ2hhbnQgZHUgRMOpcGFydA==",
      "TGEgTWFyc2VpbGxhaXNl",
      "TCdJbnRlcm5hdGlvbmFsZQ==",
      "TGEgUGFyaXNpZW5uZQ=="
    ],
    correctHash: hashAnswer(3, 1),
    explication: "TGEgTWFyc2VpbGxhaXNlIGVzdCBsJ2h5bW5lIG5hdGlvbmFsIGZyYW7Dp2FpcyBkZXB1aXMgMTc5NS4gQ29tcG9zw6llIHBhciBSb3VnZXQgZGUgTGlzbGUgZW4gMTc5MiwgZWxsZSBhIMOpdMOpIMOpY3JpdGUgw6AgU3RyYXNib3VyZyBwb3VyIGwnYXJtw6llIGR1IFJoaW4u"},
  {
    id: 4,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Laïcité",
    question: "UXVlIHNpZ25pZmllIGxhIGxhw69jaXTDqSBlbiBGcmFuY2UgPw==",
    options: [
      "TCdpbnRlcmRpY3Rpb24gZGUgdG91dGVzIGxlcyByZWxpZ2lvbnM=",
      "TGEgc8OpcGFyYXRpb24gZGVzIMOJZ2xpc2VzIGV0IGRlIGwnw4l0YXQgZXQgbGEgbGliZXJ0w6kgZGUgY3JvaXJlIG91IGRlIG5lIHBhcyBjcm9pcmU=",
      "TCdvYmxpZ2F0aW9uIGQnw6p0cmUgYXRow6ll",
      "TGEgcmVsaWdpb24gZCfDiXRhdA=="
    ],
    correctHash: hashAnswer(4, 1),
    explication: "TGEgbGHDr2NpdMOpIGdhcmFudGl0IGxhIGxpYmVydMOpIGRlIGNvbnNjaWVuY2UgZXQgbGEgbmV1dHJhbGl0w6kgZGUgbCfDiXRhdCB2aXMtw6AtdmlzIGRlcyByZWxpZ2lvbnMuIENoYWN1biBlc3QgbGlicmUgZGUgY3JvaXJlIG91IGRlIG5lIHBhcyBjcm9pcmUsIGRhbnMgbGUgcmVzcGVjdCBkZSBsJ29yZHJlIHB1YmxpYy4="},
  {
    id: 5,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Laïcité",
    question: "RW4gcXVlbGxlIGFubsOpZSBhIMOpdMOpIHZvdMOpZSBsYSBsb2kgZGUgc8OpcGFyYXRpb24gZGVzIMOJZ2xpc2VzIGV0IGRlIGwnw4l0YXQgPw==",
    options: [
      "MTc4OQ==",
      "MTg0OA==",
      "MTkwNQ==",
      "MTk1OA=="
    ],
    correctHash: hashAnswer(5, 2),
    explication: "TGEgbG9pIGRlIHPDqXBhcmF0aW9uIGRlcyDDiWdsaXNlcyBldCBkZSBsJ8OJdGF0IGEgw6l0w6kgdm90w6llIGxlIDkgZMOpY2VtYnJlIDE5MDUuIEVsbGUgw6l0YWJsaXQgbGEgbmV1dHJhbGl0w6kgZGUgbCfDiXRhdCBldCBnYXJhbnRpdCBsYSBsaWJlcnTDqSByZWxpZ2lldXNlLg=="},
  {
    id: 6,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation",
    question: "VW4gZW1wbG95ZXVyIHJlZnVzZSBkJ2VtYmF1Y2hlciB1bmUgcGVyc29ubmUgZW4gcmFpc29uIGRlIHNvbiBvcmlnaW5lLiBRdWUgZGl0IGxhIGxvaSA/",
    options: [
      "Qydlc3QgbMOpZ2FsLCBsJ2VtcGxveWV1ciBlc3QgbGlicmUgZGUgY2hvaXNpcg==",
      "Qydlc3QgaW50ZXJkaXQsIGMnZXN0IHVuZSBkaXNjcmltaW5hdGlvbiBwdW5pZSBwYXIgbGEgbG9p",
      "Qydlc3QgbMOpZ2FsIHNpIGMnZXN0IHVuZSBwZXRpdGUgZW50cmVwcmlzZQ==",
      "Q2VsYSBkw6lwZW5kIGR1IHBvc3Rl"
    ],
    correctHash: hashAnswer(6, 1),
    explication: "TGEgZGlzY3JpbWluYXRpb24gw6AgbCdlbWJhdWNoZSBmb25kw6llIHN1ciBsJ29yaWdpbmUgZXN0IGludGVyZGl0ZSBwYXIgbGUgQ29kZSBkdSB0cmF2YWlsIGV0IGxlIENvZGUgcMOpbmFsLiBFbGxlIGVzdCBwYXNzaWJsZSBkZSBzYW5jdGlvbnMgcMOpbmFsZXMgKDMgYW5zIGRlIHByaXNvbiBldCA0NSAwMDAg4oKsIGQnYW1lbmRlKS4="},
  {
    id: 7,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation",
    question: "VW4gYWdlbnQgZGUgbGEgZm9uY3Rpb24gcHVibGlxdWUgcGV1dC1pbCBhZmZpY2hlciBzZXMgb3BpbmlvbnMgcmVsaWdpZXVzZXMgZGFucyBsJ2V4ZXJjaWNlIGRlIHNlcyBmb25jdGlvbnMgPw==",
    options: [
      "T3VpLCBjJ2VzdCBzYSBsaWJlcnTDqSBpbmRpdmlkdWVsbGU=",
      "Tm9uLCBpbCBkb2l0IHJlc3BlY3RlciBsZSBwcmluY2lwZSBkZSBuZXV0cmFsaXTDqQ==",
      "T3VpLCBzaSBzZXMgY29sbMOoZ3VlcyBzb250IGQnYWNjb3Jk",
      "Q2VsYSBkw6lwZW5kIGRlIGxhIHJlbGlnaW9u"
    ],
    correctHash: hashAnswer(7, 1),
    explication: "TGVzIGFnZW50cyBwdWJsaWNzIGRvaXZlbnQgcmVzcGVjdGVyIGxlIHByaW5jaXBlIGRlIG5ldXRyYWxpdMOpIGV0IG5lIHBldXZlbnQgbWFuaWZlc3RlciBsZXVycyBjb252aWN0aW9ucyByZWxpZ2lldXNlcyBkYW5zIGwnZXhlcmNpY2UgZGUgbGV1cnMgZm9uY3Rpb25zLg=="},
  {
    id: 8,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation",
    question: "Vm91cyDDqnRlcyB0w6ltb2luIGQndW5lIGFncmVzc2lvbiByYWNpc3RlIGRhbnMgbGEgcnVlLiBRdWUgZGV2ZXotdm91cyBmYWlyZSA/",
    options: [
      "UmllbiwgY2Ugbidlc3QgcGFzIHZvdHJlIGFmZmFpcmU=",
      "RmlsbWVyIGV0IHB1YmxpZXIgc3VyIGxlcyByw6lzZWF1eCBzb2NpYXV4",
      "QWxlcnRlciBsZXMgc2Vjb3VycyAoMTcgb3UgMTEyKSBldCBwb3J0ZXIgYXNzaXN0YW5jZSBzaSBwb3NzaWJsZSBzYW5zIHZvdXMgbWV0dHJlIGVuIGRhbmdlcg==",
      "SW50ZXJ2ZW5pciBwaHlzaXF1ZW1lbnQgZGFucyB0b3VzIGxlcyBjYXM="
    ],
    correctHash: hashAnswer(8, 2),
    explication: "RmFjZSDDoCB1bmUgYWdyZXNzaW9uLCBpbCBmYXV0IGFsZXJ0ZXIgbGVzIHNlY291cnMgKDE3IHBvdXIgbGEgcG9saWNlLCAxMTIgbnVtw6lybyBldXJvcMOpZW4gZCd1cmdlbmNlKSBldCBwb3J0ZXIgYXNzaXN0YW5jZSBkYW5zIGxhIG1lc3VyZSBkdSBwb3NzaWJsZSwgc2FucyBzZSBtZXR0cmUgZW4gZGFuZ2VyLg=="},
  {
    id: 9,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation",
    question: "VW4gw6lsw6h2ZSBwZXV0LWlsIHBvcnRlciB1biBzaWduZSByZWxpZ2lldXggb3N0ZW5zaWJsZSBkYW5zIHVuZSDDqWNvbGUgcHVibGlxdWUgPw==",
    options: [
      "T3VpLCBjJ2VzdCBzYSBsaWJlcnTDqQ==",
      "Tm9uLCBjJ2VzdCBpbnRlcmRpdCBwYXIgbGEgbG9pIGRlIDIwMDQ=",
      "T3VpLCBzaSBsZXMgcGFyZW50cyBsJ2F1dG9yaXNlbnQ=",
      "Q2VsYSBkw6lwZW5kIGRlIGwnw6l0YWJsaXNzZW1lbnQ="
    ],
    correctHash: hashAnswer(9, 1),
    explication: "TGEgbG9pIGR1IDE1IG1hcnMgMjAwNCBpbnRlcmRpdCBsZSBwb3J0IGRlIHNpZ25lcyByZWxpZ2lldXggb3N0ZW5zaWJsZXMgZGFucyBsZXMgw6ljb2xlcywgY29sbMOoZ2VzIGV0IGx5Y8OpZXMgcHVibGljcy4gTGVzIHNpZ25lcyBkaXNjcmV0cyBzb250IGF1dG9yaXPDqXMu"},
  {
    id: 10,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation",
    question: "VW4gYmFpbGxldXIgcmVmdXNlIGRlIGxvdWVyIHVuIGFwcGFydGVtZW50IMOgIHVuZSBmYW1pbGxlIGVuIHJhaXNvbiBkZSBzYSByZWxpZ2lvbi4gRXN0LWNlIGzDqWdhbCA/",
    options: [
      "T3VpLCBsZSBwcm9wcmnDqXRhaXJlIGVzdCBsaWJyZSBkZSBjaG9pc2lyIHNvbiBsb2NhdGFpcmU=",
      "Tm9uLCBjJ2VzdCB1bmUgZGlzY3JpbWluYXRpb24gaW50ZXJkaXRlIHBhciBsYSBsb2k=",
      "T3VpLCBzaSBsZSBsb2dlbWVudCBlc3QgcGV0aXQ=",
      "Q2VsYSBkw6lwZW5kIGRlIGxhIHLDqWdpb24="
    ],
    correctHash: hashAnswer(10, 1),
    explication: "TGEgZGlzY3JpbWluYXRpb24gZGFucyBsZSBsb2dlbWVudCBmb25kw6llIHN1ciBsYSByZWxpZ2lvbiBlc3QgaW50ZXJkaXRlLiBMZSBiYWlsbGV1ciBlbmNvdXJ0IGRlcyBzYW5jdGlvbnMgcMOpbmFsZXMgcG91dmFudCBhbGxlciBqdXNxdSfDoCAzIGFucyBkZSBwcmlzb24gZXQgNDUgMDAwIOKCrCBkJ2FtZW5kZS4="},
  {
    id: 11,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation",
    question: "UXUnZXN0LWNlIHF1ZSBsJ8OpZ2FsaXTDqSBmZW1tZXMtaG9tbWVzIGltcGxpcXVlIGVuIEZyYW5jZSA/",
    options: [
      "TGVzIGZlbW1lcyBvbnQgbW9pbnMgZGUgZHJvaXRzIHF1ZSBsZXMgaG9tbWVz",
      "TGVzIGZlbW1lcyBldCBsZXMgaG9tbWVzIG9udCBsZXMgbcOqbWVzIGRyb2l0cyBldCBsZXMgbcOqbWVzIGRldm9pcnM=",
      "TGVzIGhvbW1lcyBkw6ljaWRlbnQgcG91ciBsZXMgZmVtbWVz",
      "TCfDqWdhbGl0w6kgbidleGlzdGUgcXVlIGRhbnMgbGUgdHJhdmFpbA=="
    ],
    correctHash: hashAnswer(11, 1),
    explication: "TCfDqWdhbGl0w6kgZW50cmUgbGVzIGZlbW1lcyBldCBsZXMgaG9tbWVzIGVzdCB1biBwcmluY2lwZSBjb25zdGl0dXRpb25uZWwuIEVsbGUgcydhcHBsaXF1ZSBkYW5zIHRvdXMgbGVzIGRvbWFpbmVzIDogdHJhdmFpbCwgZmFtaWxsZSwgdmllIHB1YmxpcXVlLCBldGMu"},

  // ==================== 2. SYSTÈME INSTITUTIONNEL (6 questions) ====================
  
  {
    id: 12,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Démocratie et droit de vote",
    question: "RW4gRnJhbmNlLCBsYSBzb3V2ZXJhaW5ldMOpIGFwcGFydGllbnQgw6AgOg==",
    options: [
      "QXUgR291dmVybmVtZW50",
      "QXUgUGFybGVtZW50",
      "QXUgUHLDqXNpZGVudCBkZSBsYSBSw6lwdWJsaXF1ZQ==",
      "QXUgcGV1cGxl"
    ],
    correctHash: hashAnswer(12, 3),
    explication: "U2Vsb24gbCdhcnRpY2xlIDMgZGUgbGEgQ29uc3RpdHV0aW9uIDogwqsgTGEgc291dmVyYWluZXTDqSBuYXRpb25hbGUgYXBwYXJ0aWVudCBhdSBwZXVwbGUgcXVpIGwnZXhlcmNlIHBhciBzZXMgcmVwcsOpc2VudGFudHMgZXQgcGFyIGxhIHZvaWUgZHUgcsOpZsOpcmVuZHVtLiDCuw=="},
  {
    id: 13,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Démocratie et droit de vote",
    question: "w4AgcXVlbCDDomdlIHBldXQtb24gdm90ZXIgZW4gRnJhbmNlID8=",
    options: [
      "MTYgYW5z",
      "MTggYW5z",
      "MjEgYW5z",
      "MjUgYW5z"
    ],
    correctHash: hashAnswer(13, 1),
    explication: "RW4gRnJhbmNlLCBsZSBkcm9pdCBkZSB2b3RlIGVzdCBhY2NvcmTDqSDDoCB0b3VzIGxlcyBjaXRveWVucyBmcmFuw6dhaXMgw6Jnw6lzIGRlIDE4IGFucyBvdSBwbHVzLCBqb3Vpc3NhbnQgZGUgbGV1cnMgZHJvaXRzIGNpdmlscyBldCBwb2xpdGlxdWVzLg=="},
  {
    id: 14,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Démocratie et droit de vote",
    question: "TGUgdm90ZSBlbiBGcmFuY2UgZXN0LWlsIG9ibGlnYXRvaXJlID8=",
    options: [
      "T3VpLCBvbiByaXNxdWUgdW5lIGFtZW5kZSBzaSBvbiBuZSB2b3RlIHBhcw==",
      "Tm9uLCBsZSB2b3RlIGVzdCB1biBkcm9pdCBldCB1biBkZXZvaXIgY2l2aXF1ZSwgbWFpcyBpbCBuJ2VzdCBwYXMgb2JsaWdhdG9pcmU=",
      "T3VpLCBzYXVmIHBvdXIgbGVzIHBlcnNvbm5lcyDDomfDqWVz",
      "Tm9uLCBzYXVmIHBvdXIgbGVzIMOpbGVjdGlvbnMgcHLDqXNpZGVudGllbGxlcw=="
    ],
    correctHash: hashAnswer(14, 1),
    explication: "RW4gRnJhbmNlLCBsZSB2b3RlIG4nZXN0IHBhcyBvYmxpZ2F0b2lyZSAoY29udHJhaXJlbWVudCDDoCBsYSBCZWxnaXF1ZSBvdSBhdSBMdXhlbWJvdXJnKS4gQydlc3QgdW4gZHJvaXQgZm9uZGFtZW50YWwgZXQgdW4gZGV2b2lyIGNpdmlxdWUsIG1haXMgbCdhYnN0ZW50aW9uIG4nZXN0IHBhcyBzYW5jdGlvbm7DqWUu"},
  {
    id: 15,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Organisation de la République",
    question: "UXVpIGVzdCBsZSBjaGVmIGRlIGwnw4l0YXQgZW4gRnJhbmNlID8=",
    options: [
      "TGUgUHJlbWllciBtaW5pc3RyZQ==",
      "TGUgUHLDqXNpZGVudCBkZSBsJ0Fzc2VtYmzDqWUgbmF0aW9uYWxl",
      "TGUgUHLDqXNpZGVudCBkZSBsYSBSw6lwdWJsaXF1ZQ==",
      "TGUgUHLDqXNpZGVudCBkdSBTw6luYXQ="
    ],
    correctHash: hashAnswer(15, 2),
    explication: "TGUgUHLDqXNpZGVudCBkZSBsYSBSw6lwdWJsaXF1ZSBlc3QgbGUgY2hlZiBkZSBsJ8OJdGF0LiBJbCBlc3Qgw6lsdSBhdSBzdWZmcmFnZSB1bml2ZXJzZWwgZGlyZWN0IHBvdXIgNSBhbnMgZXQgdmVpbGxlIGF1IHJlc3BlY3QgZGUgbGEgQ29uc3RpdHV0aW9uLg=="},
  {
    id: 16,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Organisation de la République",
    question: "TGUgUGFybGVtZW50IGZyYW7Dp2FpcyBlc3QgY29tcG9zw6kgZGUgOg==",
    options: [
      "TCdBc3NlbWJsw6llIG5hdGlvbmFsZSB1bmlxdWVtZW50",
      "TGUgU8OpbmF0IHVuaXF1ZW1lbnQ=",
      "TCdBc3NlbWJsw6llIG5hdGlvbmFsZSBldCBsZSBTw6luYXQ=",
      "TGUgQ29uc2VpbCBjb25zdGl0dXRpb25uZWwgZXQgbGUgQ29uc2VpbCBkJ8OJdGF0"
    ],
    correctHash: hashAnswer(16, 2),
    explication: "TGUgUGFybGVtZW50IGZyYW7Dp2FpcyBlc3QgYmljYW3DqXJhbCA6IGlsIGNvbXByZW5kIGwnQXNzZW1ibMOpZSBuYXRpb25hbGUgKDU3NyBkw6lwdXTDqXMgw6lsdXMgYXUgc3VmZnJhZ2UgZGlyZWN0KSBldCBsZSBTw6luYXQgKDM0OCBzw6luYXRldXJzIMOpbHVzIGF1IHN1ZmZyYWdlIGluZGlyZWN0KS4="},
  {
    id: 17,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Institutions européennes",
    question: "TGEgRnJhbmNlIGVzdCBtZW1icmUgZm9uZGF0ZXVyIGRlIGwnVW5pb24gZXVyb3DDqWVubmUuIEVuIHF1ZWxsZSBhbm7DqWUgYSDDqXTDqSBzaWduw6kgbGUgdHJhaXTDqSBkZSBSb21lID8=",
    options: [
      "MTk0NQ==",
      "MTk1Nw==",
      "MTk5Mg==",
      "MjAwMg=="
    ],
    correctHash: hashAnswer(17, 1),
    explication: "TGUgdHJhaXTDqSBkZSBSb21lIGEgw6l0w6kgc2lnbsOpIGxlIDI1IG1hcnMgMTk1NyBwYXIgNiBwYXlzIGZvbmRhdGV1cnMgOiBGcmFuY2UsIEFsbGVtYWduZSwgSXRhbGllLCBCZWxnaXF1ZSwgUGF5cy1CYXMgZXQgTHV4ZW1ib3VyZy4="},

  // ==================== 3. DROITS ET DEVOIRS (11 questions) ====================
  
  {
    id: 18,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits fondamentaux",
    question: "TGEgRMOpY2xhcmF0aW9uIGRlcyBkcm9pdHMgZGUgbCdob21tZSBldCBkdSBjaXRveWVuIGRhdGUgZGUgOg==",
    options: [
      "MTc4OQ==",
      "MTg0OA==",
      "MTkwNQ==",
      "MTk1OA=="
    ],
    correctHash: hashAnswer(18, 0),
    explication: "TGEgRMOpY2xhcmF0aW9uIGRlcyBkcm9pdHMgZGUgbCdob21tZSBldCBkdSBjaXRveWVuIGEgw6l0w6kgYWRvcHTDqWUgbGUgMjYgYW/Du3QgMTc4OS4gRWxsZSBmYWl0IHBhcnRpZSBkdSBibG9jIGRlIGNvbnN0aXR1dGlvbm5hbGl0w6kgZXQgZ2FyYW50aXQgbGVzIGRyb2l0cyBmb25kYW1lbnRhdXgu"},
  {
    id: 19,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits fondamentaux",
    question: "UXVlbCBkcm9pdCBuJ2VzdCBQQVMgZ2FyYW50aSBwYXIgbGEgQ29uc3RpdHV0aW9uIGZyYW7Dp2Fpc2UgPw==",
    options: [
      "TGEgbGliZXJ0w6kgZCdleHByZXNzaW9u",
      "TGUgZHJvaXQgZGUgcHJvcHJpw6l0w6k=",
      "TGUgZHJvaXQgYXUgdHJhdmFpbCBnYXJhbnRpIHBhciBsJ8OJdGF0",
      "TGEgbGliZXJ0w6kgZGUgY29uc2NpZW5jZQ=="
    ],
    correctHash: hashAnswer(19, 2),
    explication: "TGUgZHJvaXQgYXUgdHJhdmFpbCBlc3QgbWVudGlvbm7DqSBkYW5zIGxlIHByw6lhbWJ1bGUgZGUgMTk0NiwgbWFpcyBpbCBuZSBzJ2FnaXQgcGFzIGQndW5lIGdhcmFudGllIGQnZW1wbG9pIHBhciBsJ8OJdGF0LiBMJ8OJdGF0IGRvaXQgZmF2b3Jpc2VyIGwnYWNjw6hzIMOgIGwnZW1wbG9pLCBtYWlzIG5lIHBldXQgZ2FyYW50aXIgdW4gZW1wbG9pIMOgIGNoYWN1bi4="},
  {
    id: 20,
    categorie: "Droits et devoirs",
    sousCategorie: "Obligations et devoirs",
    question: "UXVlbGxlIGVzdCBsYSBwcmluY2lwYWxlIG9ibGlnYXRpb24gZmlzY2FsZSBkZXMgcsOpc2lkZW50cyBlbiBGcmFuY2UgPw==",
    options: [
      "UGF5ZXIgdW5pcXVlbWVudCBsYSBUVkE=",
      "RMOpY2xhcmVyIHNlcyByZXZlbnVzIGV0IHBheWVyIHNlcyBpbXDDtHRz",
      "UGF5ZXIgc2V1bGVtZW50IHMnaWxzIHNvbnQgcHJvcHJpw6l0YWlyZXM=",
      "TGVzIMOpdHJhbmdlcnMgbmUgcGFpZW50IHBhcyBkJ2ltcMO0dHM="
    ],
    correctHash: hashAnswer(20, 1),
    explication: "VG91dGUgcGVyc29ubmUgcsOpc2lkYW50IGVuIEZyYW5jZSBkb2l0IGTDqWNsYXJlciBzZXMgcmV2ZW51cyBldCBwYXllciBsZXMgaW1ww7R0cyBjb3JyZXNwb25kYW50cy4gQydlc3QgdW5lIG9ibGlnYXRpb24gbMOpZ2FsZSBxdWkgY29udHJpYnVlIGF1IGZpbmFuY2VtZW50IGRlcyBzZXJ2aWNlcyBwdWJsaWNzLg=="},
  {
    id: 21,
    categorie: "Droits et devoirs",
    sousCategorie: "Obligations et devoirs",
    question: "TGUgcmVzcGVjdCBkZXMgbG9pcyBkZSBsYSBSw6lwdWJsaXF1ZSBlc3QtaWwgb2JsaWdhdG9pcmUgcG91ciB0b3VzID8=",
    options: [
      "Tm9uLCBzZXVsZW1lbnQgcG91ciBsZXMgY2l0b3llbnMgZnJhbsOnYWlz",
      "T3VpLCBwb3VyIHRvdXRlIHBlcnNvbm5lIHNlIHRyb3V2YW50IHN1ciBsZSB0ZXJyaXRvaXJlIGZyYW7Dp2Fpcw==",
      "Tm9uLCBsZXMgdG91cmlzdGVzIGVuIHNvbnQgZXhlbXB0w6lz",
      "T3VpLCBtYWlzIHNldWxlbWVudCBsZXMgbG9pcyBww6luYWxlcw=="
    ],
    correctHash: hashAnswer(21, 1),
    explication: "VG91dGUgcGVyc29ubmUgc3VyIGxlIHRlcnJpdG9pcmUgZnJhbsOnYWlzLCBxdWVsbGUgcXVlIHNvaXQgc2EgbmF0aW9uYWxpdMOpLCBkb2l0IHJlc3BlY3RlciBsZXMgbG9pcyBkZSBsYSBSw6lwdWJsaXF1ZS4gTnVsIG4nZXN0IGNlbnPDqSBpZ25vcmVyIGxhIGxvaS4="},
  {
    id: 22,
    categorie: "Droits et devoirs",
    sousCategorie: "Obligations et devoirs",
    question: "TGEgc2NvbGFyaXTDqSBlc3Qgb2JsaWdhdG9pcmUgZW4gRnJhbmNlIHBvdXIgbGVzIGVuZmFudHMgZGUgOg==",
    options: [
      "MyDDoCAxNCBhbnM=",
      "MyDDoCAxNiBhbnM=",
      "NiDDoCAxNiBhbnM=",
      "NiDDoCAxOCBhbnM="
    ],
    correctHash: hashAnswer(22, 1),
    explication: "RGVwdWlzIDIwMTksIGwnaW5zdHJ1Y3Rpb24gZXN0IG9ibGlnYXRvaXJlIGRlIDMgw6AgMTYgYW5zLiBMYSBmb3JtYXRpb24gZXN0IGVuc3VpdGUgb2JsaWdhdG9pcmUganVzcXUnw6AgMTggYW5zICjDqWNvbGUsIGFwcHJlbnRpc3NhZ2UsIGluc2VydGlvbi4uLiku"},
  {
    id: 23,
    categorie: "Droits et devoirs",
    sousCategorie: "Mise en situation",
    question: "Vm91cyByZWNldmV6IHVuIGF2aXMgZCdpbXBvc2l0aW9uLiBRdWVsbGUgZXN0IHZvdHJlIG9ibGlnYXRpb24gPw==",
    options: [
      "Vm91cyBwb3V2ZXogbCdpZ25vcmVyIHNpIHZvdXMgZXN0aW1leiBwYXllciB0cm9w",
      "Vm91cyBkZXZleiBwYXllciBkYW5zIGxlcyBkw6lsYWlzIGluZGlxdcOpcw==",
      "Vm91cyBwb3V2ZXogcGF5ZXIgcXVhbmQgdm91cyB2b3VsZXo=",
      "U2V1bHMgbGVzIHByb3ByacOpdGFpcmVzIGRvaXZlbnQgcGF5ZXI="
    ],
    correctHash: hashAnswer(23, 1),
    explication: "TGUgcGFpZW1lbnQgZGVzIGltcMO0dHMgZGFucyBsZXMgZMOpbGFpcyBlc3QgdW5lIG9ibGlnYXRpb24gbMOpZ2FsZS4gRW4gY2FzIGRlIGRpZmZpY3VsdMOpcywgaWwgZmF1dCBjb250YWN0ZXIgbCdhZG1pbmlzdHJhdGlvbiBmaXNjYWxlIHBvdXIgZGVtYW5kZXIgdW4gZMOpbGFpIG91IHVuIMOpdGFsZW1lbnQu"},
  {
    id: 24,
    categorie: "Droits et devoirs",
    sousCategorie: "Mise en situation",
    question: "Vm90cmUgdm9pc2luIGZhaXQgZHUgYnJ1aXQgZXhjZXNzaWYgbGEgbnVpdC4gUXVlIHBvdXZlei12b3VzIGZhaXJlID8=",
    options: [
      "UmllbiwgYydlc3Qgc29uIGRyb2l0",
      "QXBwZWxlciBsYSBwb2xpY2UgZXQvb3UgZmFpcmUgY29uc3RhdGVyIGxlIHRyb3VibGUgcGFyIHVuIGh1aXNzaWVy",
      "Vm91cyB2ZW5nZXIgZW4gZmFpc2FudCBhdXNzaSBkdSBicnVpdA==",
      "RMOpbcOpbmFnZXI="
    ],
    correctHash: hashAnswer(24, 1),
    explication: "TGUgdGFwYWdlIG5vY3R1cm5lIGVzdCB1bmUgaW5mcmFjdGlvbi4gVm91cyBwb3V2ZXogYXBwZWxlciBsYSBwb2xpY2UgKDE3KSwgZmFpcmUgY29uc3RhdGVyIGxlIHRyb3VibGUgcGFyIHVuIGh1aXNzaWVyLCBvdSBlbmdhZ2VyIHVuZSBtw6lkaWF0aW9uLg=="},
  {
    id: 25,
    categorie: "Droits et devoirs",
    sousCategorie: "Mise en situation",
    question: "Vm91cyDDqnRlcyBjb252b3F1w6kgcG91ciB1bmUgam91cm7DqWUgZGUganVyeSBkJ2Fzc2lzZXMuIEVzdC1jZSBvYmxpZ2F0b2lyZSA/",
    options: [
      "Tm9uLCBjJ2VzdCB1bmUgaW52aXRhdGlvbg==",
      "T3VpLCBzYXVmIG1vdGlmIGzDqWdpdGltZSwgYydlc3QgdW4gZGV2b2lyIGNpdmlxdWU=",
      "Tm9uLCBzaSB2b3VzIHRyYXZhaWxsZXo=",
      "T3VpLCBtYWlzIHNldWxlbWVudCBwb3VyIGxlcyBmb25jdGlvbm5haXJlcw=="
    ],
    correctHash: hashAnswer(25, 1),
    explication: "w4p0cmUganVyw6kgZCdhc3Npc2VzIGVzdCB1biBkZXZvaXIgY2l2aXF1ZSBvYmxpZ2F0b2lyZS4gUmVmdXNlciBzYW5zIG1vdGlmIGzDqWdpdGltZSBlc3QgcGFzc2libGUgZCd1bmUgYW1lbmRlLg=="},
  {
    id: 26,
    categorie: "Droits et devoirs",
    sousCategorie: "Mise en situation",
    question: "VW4gY29tbWVyw6dhbnQgcmVmdXNlIGRlIHZvdXMgc2VydmlyIGVuIHJhaXNvbiBkZSB2b3RyZSBvcmlnaW5lLiBRdWUgZmFpcmUgPw==",
    options: [
      "UmllbiwgYydlc3Qgc29uIGNob2l4IGNvbW1lcmNpYWw=",
      "UG9ydGVyIHBsYWludGUgcG91ciBkaXNjcmltaW5hdGlvbg==",
      "TCdhY2NlcHRlciBldCBhbGxlciBhaWxsZXVycw==",
      "Q2VsYSBuJ2VzdCBwYXMgcHVuaXNzYWJsZQ=="
    ],
    correctHash: hashAnswer(26, 1),
    explication: "TGUgcmVmdXMgZGUgdmVudGUgZGlzY3JpbWluYXRvaXJlIGVzdCB1biBkw6lsaXQgcHVuaSBwYXIgbGEgbG9pLiBWb3VzIHBvdXZleiBwb3J0ZXIgcGxhaW50ZSBhdXByw6hzIGRlIGxhIHBvbGljZSwgZGUgbGEgZ2VuZGFybWVyaWUgb3UgZHUgcHJvY3VyZXVyIGRlIGxhIFLDqXB1YmxpcXVlLg=="},
  {
    id: 27,
    categorie: "Droits et devoirs",
    sousCategorie: "Mise en situation",
    question: "Vm91cyB0cm91dmV6IHVuIHBvcnRlZmV1aWxsZSBjb250ZW5hbnQgZGUgbCdhcmdlbnQgZXQgZGVzIHBhcGllcnMgZCdpZGVudGl0w6kuIFF1ZSBkZXZlei12b3VzIGZhaXJlID8=",
    options: [
      "R2FyZGVyIGwnYXJnZW50IGV0IGpldGVyIGxlIHJlc3Rl",
      "TGUgcmFwcG9ydGVyIMOgIGxhIHBvbGljZSBvdSDDoCBsYSBtYWlyaWU=",
      "TGUgZ2FyZGVyIGVuIGF0dGVuZGFudCBxdSdvbiB2b3VzIGNvbnRhY3Rl",
      "TGUgamV0ZXIgcG91ciBuZSBwYXMgYXZvaXIgZGUgcHJvYmzDqG1lcw=="
    ],
    correctHash: hashAnswer(27, 1),
    explication: "Vm91cyBkZXZleiByYXBwb3J0ZXIgbCdvYmpldCB0cm91dsOpIGF1IGNvbW1pc3NhcmlhdCwgw6AgbGEgZ2VuZGFybWVyaWUgb3Ugw6AgbGEgbWFpcmllLiBHYXJkZXIgdW4gb2JqZXQgdHJvdXbDqSBzYW5zIGNoZXJjaGVyIMOgIGxlIHJlc3RpdHVlciBwZXV0IGNvbnN0aXR1ZXIgdW4gYWJ1cyBkZSBjb25maWFuY2Uu"},
  {
    id: 28,
    categorie: "Droits et devoirs",
    sousCategorie: "Mise en situation",
    question: "Vm90cmUgZW1wbG95ZXVyIHZvdXMgZGVtYW5kZSBkZSB0cmF2YWlsbGVyIGxlIGRpbWFuY2hlLiBFc3QtY2UgbMOpZ2FsID8=",
    options: [
      "Tm9uLCBqYW1haXM=",
      "T3VpLCBkYW5zIGNlcnRhaW5zIHNlY3RldXJzIGV0IGF2ZWMgZGVzIGNvbXBlbnNhdGlvbnMgcHLDqXZ1ZXMgcGFyIGxhIGxvaQ==",
      "T3VpLCBzYW5zIGF1Y3VuZSBjb21wZW5zYXRpb24=",
      "U2V1bGVtZW50IGF2ZWMgdm90cmUgYWNjb3JkIMOpY3JpdCwgc2FucyBleGNlcHRpb24="
    ],
    correctHash: hashAnswer(28, 1),
    explication: "TGUgdHJhdmFpbCBsZSBkaW1hbmNoZSBlc3QgZW5jYWRyw6kgcGFyIGxhIGxvaS4gSWwgZXN0IGF1dG9yaXPDqSBkYW5zIGNlcnRhaW5zIHNlY3RldXJzIChjb21tZXJjZSBhbGltZW50YWlyZSwgaMO0dGVsbGVyaWUsIHNhbnTDqS4uLikgZXQgZG9pdCBkb25uZXIgbGlldSDDoCBkZXMgY29tcGVuc2F0aW9ucy4="},

  // ==================== 4. HISTOIRE, GÉOGRAPHIE ET CULTURE (8 questions) ====================
  
  {
    id: 29,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Histoire",
    question: "UXVlbCDDqXbDqW5lbWVudCBtYXJxdWUgbGUgZMOpYnV0IGRlIGxhIFLDqXZvbHV0aW9uIGZyYW7Dp2Fpc2UgPw==",
    options: [
      "TGEgbW9ydCBkZSBMb3VpcyBYSVY=",
      "TGEgcHJpc2UgZGUgbGEgQmFzdGlsbGUgbGUgMTQganVpbGxldCAxNzg5",
      "TGUgc2FjcmUgZGUgTmFwb2zDqW9u",
      "TGEgYmF0YWlsbGUgZGUgV2F0ZXJsb28="
    ],
    correctHash: hashAnswer(29, 1),
    explication: "TGEgcHJpc2UgZGUgbGEgQmFzdGlsbGUgbGUgMTQganVpbGxldCAxNzg5IGVzdCBsZSBzeW1ib2xlIGR1IGTDqWJ1dCBkZSBsYSBSw6l2b2x1dGlvbiBmcmFuw6dhaXNlLiBDZXR0ZSBkYXRlIGVzdCBkZXZlbnVlIGxhIGbDqnRlIG5hdGlvbmFsZSBmcmFuw6dhaXNlIGRlcHVpcyAxODgwLg=="},
  {
    id: 30,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Histoire",
    question: "UXVpIMOpdGFpdCBsZSBnw6luw6lyYWwgcXVpIGEgbGliw6lyw6kgbGEgRnJhbmNlIHBlbmRhbnQgbGEgU2Vjb25kZSBHdWVycmUgbW9uZGlhbGUgZXQgZm9uZMOpIGxhIFZlIFLDqXB1YmxpcXVlID8=",
    options: [
      "TWFyw6ljaGFsIFDDqXRhaW4=",
      "SmVhbiBNb3VsaW4=",
      "Q2hhcmxlcyBkZSBHYXVsbGU=",
      "R2VvcmdlcyBDbGVtZW5jZWF1"
    ],
    correctHash: hashAnswer(30, 2),
    explication: "TGUgZ8OpbsOpcmFsIENoYXJsZXMgZGUgR2F1bGxlIGEgZGlyaWfDqSBsYSBGcmFuY2UgbGlicmUgcGVuZGFudCBsYSBTZWNvbmRlIEd1ZXJyZSBtb25kaWFsZSBldCBhIGZvbmTDqSBsYSBWZSBSw6lwdWJsaXF1ZSBlbiAxOTU4LiBJbCBlbiBhIMOpdMOpIGxlIHByZW1pZXIgcHLDqXNpZGVudCAoMTk1OS0xOTY5KS4="},
  {
    id: 31,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Histoire",
    question: "UXVhbmQgYSDDqXTDqSBhYm9saWUgZMOpZmluaXRpdmVtZW50IGwnZXNjbGF2YWdlIGVuIEZyYW5jZSA/",
    options: [
      "MTc4OQ==",
      "MTg0OA==",
      "MTkwNQ==",
      "MTk0NQ=="
    ],
    correctHash: hashAnswer(31, 1),
    explication: "TCdhYm9saXRpb24gZMOpZmluaXRpdmUgZGUgbCdlc2NsYXZhZ2UgZW4gRnJhbmNlIGEgw6l0w6kgcHJvY2xhbcOpZSBsZSAyNyBhdnJpbCAxODQ4IHBhciBsZSBkw6ljcmV0IGRlIFZpY3RvciBTY2jFk2xjaGVyLg=="},
  {
    id: 32,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Géographie",
    question: "Q29tYmllbiBsYSBGcmFuY2UgY29tcHRlLXQtZWxsZSBkZSByw6lnaW9ucyBtw6l0cm9wb2xpdGFpbmVzID8=",
    options: [
      "MTI=",
      "MTM=",
      "MTg=",
      "MjI="
    ],
    correctHash: hashAnswer(32, 1),
    explication: "RGVwdWlzIDIwMTYsIGxhIEZyYW5jZSBtw6l0cm9wb2xpdGFpbmUgY29tcHRlIDEzIHLDqWdpb25zIChjb250cmUgMjIgYXVwYXJhdmFudCkuIEVuIGNvbXB0YW50IGxlcyByw6lnaW9ucyBkJ291dHJlLW1lciwgbGEgRnJhbmNlIGNvbXB0ZSAxOCByw6lnaW9ucyBhdSB0b3RhbC4="},
  {
    id: 33,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Géographie",
    question: "UXVlbCBlc3QgbGUgcGx1cyBsb25nIGZsZXV2ZSBkZSBGcmFuY2UgPw==",
    options: [
      "TGEgU2VpbmU=",
      "TGUgUmjDtG5l",
      "TGEgTG9pcmU=",
      "TGEgR2Fyb25uZQ=="
    ],
    correctHash: hashAnswer(33, 2),
    explication: "TGEgTG9pcmUgZXN0IGxlIHBsdXMgbG9uZyBmbGV1dmUgZGUgRnJhbmNlIGF2ZWMgMSAwMTIga20uIEVsbGUgcHJlbmQgc2Egc291cmNlIGF1IE1vbnQgR2VyYmllci1kZS1Kb25jIGVuIEFyZMOoY2hlIGV0IHNlIGpldHRlIGRhbnMgbCdvY8OpYW4gQXRsYW50aXF1ZSDDoCBTYWludC1OYXphaXJlLg=="},
  {
    id: 34,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Géographie",
    question: "TGVxdWVsIGRlIGNlcyB0ZXJyaXRvaXJlcyBuJ2VzdCBQQVMgdW4gZMOpcGFydGVtZW50IG91IHVuZSByw6lnaW9uIGQnb3V0cmUtbWVyID8=",
    options: [
      "TGEgR3VhZGVsb3VwZQ==",
      "TW9uYWNv",
      "TGEgUsOpdW5pb24=",
      "TGEgTWFydGluaXF1ZQ=="
    ],
    correctHash: hashAnswer(34, 1),
    explication: "TW9uYWNvIGVzdCB1bmUgcHJpbmNpcGF1dMOpIGluZMOpcGVuZGFudGUsIGNlIG4nZXN0IHBhcyB1biB0ZXJyaXRvaXJlIGZyYW7Dp2Fpcy4gTGEgR3VhZGVsb3VwZSwgbGEgTWFydGluaXF1ZSBldCBMYSBSw6l1bmlvbiBzb250IGRlcyBkw6lwYXJ0ZW1lbnRzIGV0IHLDqWdpb25zIGQnb3V0cmUtbWVyIChEUk9NKS4="},
  {
    id: 35,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Patrimoine",
    question: "UXVlbCBtb251bWVudCBwYXJpc2llbiBhIMOpdMOpIGNvbnN0cnVpdCBwb3VyIGwnRXhwb3NpdGlvbiB1bml2ZXJzZWxsZSBkZSAxODg5ID8=",
    options: [
      "TCdBcmMgZGUgVHJpb21waGU=",
      "TGEgVG91ciBFaWZmZWw=",
      "TGUgU2FjcsOpLUPFk3Vy",
      "TGUgUGFudGjDqW9u"
    ],
    correctHash: hashAnswer(35, 1),
    explication: "TGEgVG91ciBFaWZmZWwgYSDDqXTDqSBjb25zdHJ1aXRlIHBhciBHdXN0YXZlIEVpZmZlbCBwb3VyIGwnRXhwb3NpdGlvbiB1bml2ZXJzZWxsZSBkZSAxODg5LCBjZW50ZW5haXJlIGRlIGxhIFLDqXZvbHV0aW9uIGZyYW7Dp2Fpc2Uu"},
  {
    id: 36,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Patrimoine",
    question: "T8O5IHNvbnQgZW50ZXJyw6lzIGxlcyBncmFuZHMgcGVyc29ubmFnZXMgZGUgbCdoaXN0b2lyZSBkZSBGcmFuY2UgPw==",
    options: [
      "QXUgTG91dnJl",
      "QXUgUGFudGjDqW9u",
      "w4AgVmVyc2FpbGxlcw==",
      "w4AgTm90cmUtRGFtZQ=="
    ],
    correctHash: hashAnswer(36, 1),
    explication: "TGUgUGFudGjDqW9uLCDDoCBQYXJpcywgYWNjdWVpbGxlIGxlcyBzw6lwdWx0dXJlcyBkZSBwZXJzb25uYWxpdMOpcyBheWFudCBtYXJxdcOpIGwnaGlzdG9pcmUgZGUgRnJhbmNlIChWaWN0b3IgSHVnbywgTWFyaWUgQ3VyaWUsIEplYW4gTW91bGluLCBTaW1vbmUgVmVpbC4uLiku"},

  // ==================== 5. VIVRE DANS LA SOCIÉTÉ FRANÇAISE (4 questions) ====================
  
  {
    id: 37,
    categorie: "Vivre dans la société française",
    sousCategorie: "S'installer en France",
    question: "UXVlbCBkb2N1bWVudCBlc3Qgb2JsaWdhdG9pcmUgcG91ciB1biDDqXRyYW5nZXIgbm9uLWV1cm9ww6llbiBzb3VoYWl0YW50IHLDqXNpZGVyIGVuIEZyYW5jZSBwbHVzIGRlIDMgbW9pcyA/",
    options: [
      "VW4gdmlzYSBzZXVsZW1lbnQ=",
      "VW4gdGl0cmUgZGUgc8Opam91ciBvdSB2aXNhIGxvbmcgc8Opam91cg==",
      "VW5lIGNhcnRlIGQnaWRlbnRpdMOpIGRlIHNvbiBwYXlz",
      "QXVjdW4gZG9jdW1lbnQ="
    ],
    correctHash: hashAnswer(37, 1),
    explication: "UG91ciBzw6lqb3VybmVyIGVuIEZyYW5jZSBwbHVzIGRlIDMgbW9pcywgdW4gw6l0cmFuZ2VyIG5vbi1ldXJvcMOpZW4gZG9pdCBwb3Nzw6lkZXIgdW4gdGl0cmUgZGUgc8Opam91ciBvdSB1biB2aXNhIGxvbmcgc8Opam91ciB2YWxhbnQgdGl0cmUgZGUgc8Opam91ciAoVkxTLVRTKS4="},
  {
    id: 38,
    categorie: "Vivre dans la société française",
    sousCategorie: "Accès aux soins",
    question: "UXVlbCBudW3DqXJvIGFwcGVsZXIgZW4gY2FzIGQndXJnZW5jZSBtw6lkaWNhbGUgZW4gRnJhbmNlID8=",
    options: [
      "MTc=",
      "MTUgKFNBTVUp",
      "MTg=",
      "MTE0"
    ],
    correctHash: hashAnswer(38, 1),
    explication: "TGUgMTUgZXN0IGxlIG51bcOpcm8gZHUgU0FNVSAoU2VydmljZSBkJ0FpZGUgTcOpZGljYWxlIFVyZ2VudGUpLiBMZSAxNyBlc3QgbGEgcG9saWNlLCBsZSAxOCBsZXMgcG9tcGllcnMsIGxlIDExMiBsZSBudW3DqXJvIGV1cm9ww6llbiBkJ3VyZ2VuY2Uu"},
  {
    id: 39,
    categorie: "Vivre dans la société française",
    sousCategorie: "Travailler en France",
    question: "UXVlbGxlIGVzdCBsYSBkdXLDqWUgbMOpZ2FsZSBkdSB0cmF2YWlsIGVuIEZyYW5jZSBwb3VyIHVuIHNhbGFyacOpIMOgIHRlbXBzIHBsZWluID8=",
    options: [
      "MzIgaGV1cmVzIHBhciBzZW1haW5l",
      "MzUgaGV1cmVzIHBhciBzZW1haW5l",
      "MzkgaGV1cmVzIHBhciBzZW1haW5l",
      "NDAgaGV1cmVzIHBhciBzZW1haW5l"
    ],
    correctHash: hashAnswer(39, 1),
    explication: "TGEgZHVyw6llIGzDqWdhbGUgZHUgdHJhdmFpbCBlbiBGcmFuY2UgZXN0IGRlIDM1IGhldXJlcyBwYXIgc2VtYWluZSBkZXB1aXMgMjAwMCAobG9pcyBBdWJyeSkuIExlcyBoZXVyZXMgYXUtZGVsw6Agc29udCBkZXMgaGV1cmVzIHN1cHBsw6ltZW50YWlyZXMgbWFqb3LDqWVzLg=="},
  {
    id: 40,
    categorie: "Vivre dans la société française",
    sousCategorie: "Éducation",
    question: "TCfDqWNvbGUgcHVibGlxdWUgZW4gRnJhbmNlIGVzdCA6",
    options: [
      "UGF5YW50ZSBldCBmYWN1bHRhdGl2ZQ==",
      "R3JhdHVpdGUsIGxhw69xdWUgZXQgb2JsaWdhdG9pcmUgZGUgMyDDoCAxNiBhbnM=",
      "UsOpc2VydsOpZSBhdXggY2l0b3llbnMgZnJhbsOnYWlz",
      "R8OpcsOpZSBwYXIgbGVzIHJlbGlnaW9ucw=="
    ],
    correctHash: hashAnswer(40, 1),
    explication: "TCfDqWNvbGUgcHVibGlxdWUgZnJhbsOnYWlzZSBlc3QgZ3JhdHVpdGUsIGxhw69xdWUgZXQgb2JsaWdhdG9pcmUuIEwnaW5zdHJ1Y3Rpb24gZXN0IG9ibGlnYXRvaXJlIGRlIDMgw6AgMTYgYW5zIHBvdXIgdG91cyBsZXMgZW5mYW50cyByw6lzaWRhbnQgZW4gRnJhbmNlLCBxdWVsbGUgcXVlIHNvaXQgbGV1ciBuYXRpb25hbGl0w6ku"}
];

// Fonction pour vérifier une réponse
export function verifyAnswerExam1(questionId: number, userAnswerIndex: number, correctHash: string): boolean {
  return hashAnswer(questionId, userAnswerIndex) === correctHash;
}

// Fonction pour trouver l'index correct à partir du hash
export function findCorrectIndexExam1(questionId: number, correctHash: string): number {
  for (let i = 0; i < 4; i++) {
    if (hashAnswer(questionId, i) === correctHash) {
      return i;
    }
  }
  return 0;
}

export const EXAMEN_1: ExamenBlanc = {
  numero: 1,
  titre: "Examen blanc #1",
  description: "40 questions en conditions réelles d'examen",
  questions: questions.map(q => decodeQuestion(q)),
  dureeMinutes: 45,
  totalQuestions: 40
};
