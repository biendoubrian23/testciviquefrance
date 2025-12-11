// ==================== EXAMEN BLANC #5 ====================
// Répartition officielle :
// 1. Principes et valeurs (11 questions)
// 2. Système institutionnel (6 questions)
// 3. Droits et devoirs (11 questions)
// 4. Histoire/géographie/culture (8 questions)
// 5. Vivre en France (4 questions)
// ==========================================================================

import { ExamenBlanc, Question, decodeQuestion } from './types';

const EXAM_NUMBER = 5;

// Fonction de hash simple (djb2) pour l'examen 5
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
    question: "UXVlbGxlIGVzdCBsYSBkZXZpc2UgZGUgbGEgUsOpcHVibGlxdWUgZnJhbsOnYWlzZSA/",
    options: [
      "VHJhdmFpbCwgRmFtaWxsZSwgUGF0cmll",
      "TGliZXJ0w6ksIMOJZ2FsaXTDqSwgRnJhdGVybml0w6k=",
      "Rm9yY2UgZXQgSG9ubmV1cg==",
      "VW5pb24gZXQgSnVzdGljZQ=="
    ],
    correctHash: hashAnswer(1, 1),
    explication: "TGEgZGV2aXNlIGRlIGxhIFLDqXB1YmxpcXVlIGZyYW7Dp2Fpc2UgZXN0ICdMaWJlcnTDqSwgw4lnYWxpdMOpLCBGcmF0ZXJuaXTDqScuIEVsbGUgZXN0IGluc2NyaXRlIHN1ciBsZXMgbW9udW1lbnRzIHB1YmxpY3MgZXQgYXBwYXJhw650IHN1ciBsZXMgcGnDqGNlcyBkZSBtb25uYWllLg=="},
  {
    id: 2,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Devise et symboles",
    question: "UXVlbGxlIGVzdCBsYSBmw6p0ZSBuYXRpb25hbGUgZnJhbsOnYWlzZSA/",
    options: [
      "TGUgMWVyIG1haQ==",
      "TGUgMTQganVpbGxldA==",
      "TGUgMTEgbm92ZW1icmU=",
      "TGUgOCBtYWk="
    ],
    correctHash: hashAnswer(2, 1),
    explication: "TGEgZsOqdGUgbmF0aW9uYWxlIGZyYW7Dp2Fpc2UgZXN0IGxlIDE0IGp1aWxsZXQsIHF1aSBjb21tw6ltb3JlIGxhIHByaXNlIGRlIGxhIEJhc3RpbGxlIGVuIDE3ODkgZXQgbGEgRsOqdGUgZGUgbGEgRsOpZMOpcmF0aW9uIGRlIDE3OTAu"},
  {
    id: 3,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Laïcité",
    question: "UXUnZXN0LWNlIHF1ZSBsYSBsYcOvY2l0w6kgZW4gRnJhbmNlID8=",
    options: [
      "TCdpbnRlcmRpY3Rpb24gZGUgdG91dGVzIGxlcyByZWxpZ2lvbnM=",
      "TGEgc8OpcGFyYXRpb24gZGUgbCfDiXRhdCBldCBkZXMgcmVsaWdpb25z",
      "TCdvYmxpZ2F0aW9uIGQnw6p0cmUgY2F0aG9saXF1ZQ==",
      "TGEgcHJpb3JpdMOpIGRvbm7DqWUgw6AgdW5lIHJlbGlnaW9u"
    ],
    correctHash: hashAnswer(3, 1),
    explication: "TGEgbGHDr2NpdMOpIGVzdCB1biBwcmluY2lwZSBmb25kYW1lbnRhbCBkZSBsYSBSw6lwdWJsaXF1ZSBmcmFuw6dhaXNlIHF1aSDDqXRhYmxpdCBsYSBzw6lwYXJhdGlvbiBkZSBsJ8OJdGF0IGV0IGRlcyByZWxpZ2lvbnMuIENoYWN1biBlc3QgbGlicmUgZGUgY3JvaXJlIG91IGRlIG5lIHBhcyBjcm9pcmUu"},
  {
    id: 4,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Laïcité",
    question: "RGFucyBsZXMgw6ljb2xlcyBwdWJsaXF1ZXMsIGxlcyDDqWzDqHZlcyBwZXV2ZW50LWlscyBwb3J0ZXIgZGVzIHNpZ25lcyByZWxpZ2lldXggZGlzY3JldHMgPw==",
    options: [
      "T3VpLCBsZXMgc2lnbmVzIGRpc2NyZXRzIHNvbnQgYXV0b3Jpc8Opcw==",
      "Tm9uLCBhdWN1biBzaWduZSByZWxpZ2lldXggbidlc3QgYXV0b3Jpc8Op",
      "T3VpLCBtYWlzIHNldWxlbWVudCBwb3VyIGNlcnRhaW5lcyByZWxpZ2lvbnM=",
      "Q2VsYSBkw6lwZW5kIGRlIGNoYXF1ZSDDqWNvbGU="
    ],
    correctHash: hashAnswer(4, 0),
    explication: "TGEgbG9pIGRlIDIwMDQgaW50ZXJkaXQgbGUgcG9ydCBkZSBzaWduZXMgcmVsaWdpZXV4IG9zdGVuc2libGVzICh2b2lsZSwga2lwcGEsIGdyYW5kZSBjcm9peCkgZGFucyBsZXMgw6ljb2xlcyBwdWJsaXF1ZXMsIG1haXMgYXV0b3Jpc2UgbGVzIHNpZ25lcyBkaXNjcmV0cyAocGV0aXRlIGNyb2l4LCBtYWluIGRlIEZhdG1hKS4="},
  {
    id: 5,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Égalité",
    question: "RW4gRnJhbmNlLCBsZXMgZmVtbWVzIGV0IGxlcyBob21tZXMgc29udC1pbHMgw6lnYXV4IGRldmFudCBsYSBsb2kgPw==",
    options: [
      "Tm9uLCBsZXMgaG9tbWVzIG9udCBwbHVzIGRlIGRyb2l0cw==",
      "T3VpLCBpbHMgb250IGxlcyBtw6ptZXMgZHJvaXRz",
      "Tm9uLCBsZXMgZmVtbWVzIG9udCBwbHVzIGRlIGRyb2l0cw==",
      "Q2VsYSBkw6lwZW5kIGRlcyBzaXR1YXRpb25z"
    ],
    correctHash: hashAnswer(5, 1),
    explication: "TCfDqWdhbGl0w6kgZW50cmUgbGVzIGZlbW1lcyBldCBsZXMgaG9tbWVzIGVzdCB1biBwcmluY2lwZSBjb25zdGl0dXRpb25uZWwuIExhIGxvaSBnYXJhbnRpdCBsJ8OpZ2FsaXTDqSBkZXMgZHJvaXRzIGV0IGludGVyZGl0IHRvdXRlIGRpc2NyaW1pbmF0aW9uIGZvbmTDqWUgc3VyIGxlIHNleGUu"},
  {
    id: 6,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Égalité",
    question: "UXVlbCBwcmluY2lwZSBwZXJtZXQgw6AgdG91cyBsZXMgZW5mYW50cyBkJ2FsbGVyIMOgIGwnw6ljb2xlIGdyYXR1aXRlID8=",
    options: [
      "TGEgbGliZXJ0w6kgZCdlbnNlaWduZW1lbnQ=",
      "TCfDqWdhbGl0w6kgZCdhY2PDqHMgw6AgbCfDqWR1Y2F0aW9u",
      "TGEgbGHDr2NpdMOpIHNjb2xhaXJl",
      "TCdvYmxpZ2F0aW9uIHNjb2xhaXJl"
    ],
    correctHash: hashAnswer(6, 1),
    explication: "TGUgcHJpbmNpcGUgZCfDqWdhbGl0w6kgZCdhY2PDqHMgw6AgbCfDqWR1Y2F0aW9uIGdhcmFudGl0IHF1ZSB0b3VzIGxlcyBlbmZhbnRzIHBldXZlbnQgYWxsZXIgw6AgbCfDqWNvbGUgcHVibGlxdWUgZ3JhdHVpdGVtZW50LCBzYW5zIGRpc2NyaW1pbmF0aW9uLg=="},
  {
    id: 7,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Fraternité",
    question: "UXVlIHNpZ25pZmllIGxlIHByaW5jaXBlIGRlIGZyYXRlcm5pdMOpID8=",
    options: [
      "TCdvYmxpZ2F0aW9uIGQnYXZvaXIgZGVzIGZyw6hyZXMgZXQgc8WTdXJz",
      "TGEgc29saWRhcml0w6kgZW50cmUgdG91cyBsZXMgY2l0b3llbnM=",
      "TGUgcmVzcGVjdCBkZXMgdHJhZGl0aW9ucyBmYW1pbGlhbGVz",
      "TCdhaWRlIHVuaXF1ZW1lbnQgw6Agc2EgZmFtaWxsZQ=="
    ],
    correctHash: hashAnswer(7, 1),
    explication: "TGEgZnJhdGVybml0w6kgZXN0IGxlIHByaW5jaXBlIGRlIHNvbGlkYXJpdMOpIGV0IGQnZW50cmFpZGUgZW50cmUgdG91cyBsZXMgY2l0b3llbnMuIEVsbGUgaW1wbGlxdWUgbGUgcmVzcGVjdCBkJ2F1dHJ1aSBldCBsYSBjb2jDqXNpb24gc29jaWFsZS4="},
  {
    id: 8,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Liberté",
    question: "UXVlbGxlIGxpYmVydMOpIHBlcm1ldCDDoCBjaGFjdW4gZGUgcHJhdGlxdWVyIG91IG5vbiB1bmUgcmVsaWdpb24gPw==",
    options: [
      "TGEgbGliZXJ0w6kgZCdhc3NvY2lhdGlvbg==",
      "TGEgbGliZXJ0w6kgZGUgY3VsdGU=",
      "TGEgbGliZXJ0w6kgZGUgcsOpdW5pb24=",
      "TGEgbGliZXJ0w6kgZCdleHByZXNzaW9u"
    ],
    correctHash: hashAnswer(8, 1),
    explication: "TGEgbGliZXJ0w6kgZGUgY3VsdGUgcGVybWV0IMOgIGNoYXF1ZSBwZXJzb25uZSBkZSBwcmF0aXF1ZXIgbGEgcmVsaWdpb24gZGUgc29uIGNob2l4IG91IGRlIG5lIHByYXRpcXVlciBhdWN1bmUgcmVsaWdpb24uIEMnZXN0IHVuIGRyb2l0IGZvbmRhbWVudGFsLg=="},
  {
    id: 9,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Liberté",
    question: "RW4gRnJhbmNlLCBwZXV0LW9uIGV4cHJpbWVyIGxpYnJlbWVudCBzZXMgb3BpbmlvbnMgPw==",
    options: [
      "T3VpLCBzYW5zIGF1Y3VuZSBsaW1pdGU=",
      "T3VpLCBzYXVmIHNpIGNlbGEgcG9ydGUgYXR0ZWludGUgw6AgYXV0cnVp",
      "Tm9uLCBjJ2VzdCBpbnRlcmRpdA==",
      "U2V1bGVtZW50IGF2ZWMgdW5lIGF1dG9yaXNhdGlvbg=="
    ],
    correctHash: hashAnswer(9, 1),
    explication: "TGEgbGliZXJ0w6kgZCdleHByZXNzaW9uIHBlcm1ldCDDoCBjaGFjdW4gZCdleHByaW1lciBzZXMgb3BpbmlvbnMsIG1haXMgZWxsZSBhIGRlcyBsaW1pdGVzIDogb24gbmUgcGV1dCBwYXMgdGVuaXIgZGVzIHByb3BvcyByYWNpc3RlcywgZGlmZmFtYXRvaXJlcyBvdSBhcHBlbGFudCDDoCBsYSBoYWluZS4="},
  {
    id: 10,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Symboles",
    question: "UXVlbGxlcyBzb250IGxlcyBjb3VsZXVycyBkdSBkcmFwZWF1IGZyYW7Dp2FpcyA/",
    options: [
      "Um91Z2UsIGJsYW5jLCB2ZXJ0",
      "QmxldSwgYmxhbmMsIHJvdWdl",
      "QmxldSwgamF1bmUsIHJvdWdl",
      "QmxldSwgYmxhbmMsIG5vaXI="
    ],
    correctHash: hashAnswer(10, 1),
    explication: "TGUgZHJhcGVhdSBmcmFuw6dhaXMgZXN0IGNvbXBvc8OpIGRlIHRyb2lzIGJhbmRlcyB2ZXJ0aWNhbGVzIDogYmxldSAow6AgZ2F1Y2hlKSwgYmxhbmMgKGF1IGNlbnRyZSkgZXQgcm91Z2UgKMOgIGRyb2l0ZSku"},
  {
    id: 11,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Symboles",
    question: "UXVlbCBlc3QgbCdoeW1uZSBuYXRpb25hbCBmcmFuw6dhaXMgPw==",
    options: [
      "TGUgQ2hhbnQgZGVzIFBhcnRpc2Fucw==",
      "TGEgTWFyc2VpbGxhaXNl",
      "TGEgU3RyYXNib3VyZ2VvaXNl",
      "RG91Y2UgRnJhbmNl"
    ],
    correctHash: hashAnswer(11, 1),
    explication: "TGEgTWFyc2VpbGxhaXNlIGVzdCBsJ2h5bW5lIG5hdGlvbmFsIGRlIGxhIEZyYW5jZSBkZXB1aXMgMTc5NS4gRWxsZSBhIMOpdMOpIMOpY3JpdGUgcGFyIFJvdWdldCBkZSBMaXNsZSBlbiAxNzkyLg=="},

  // ==================== 2. SYSTÈME INSTITUTIONNEL (6 questions) ====================
  
  {
    id: 12,
    categorie: "Organisation et fonctionnement des institutions",
    sousCategorie: "Président de la République",
    question: "Q29tYmllbiBkJ2FubsOpZXMgZHVyZSBsZSBtYW5kYXQgZHUgUHLDqXNpZGVudCBkZSBsYSBSw6lwdWJsaXF1ZSA/",
    options: [
      "NCBhbnM=",
      "NSBhbnM=",
      "NyBhbnM=",
      "MTAgYW5z"
    ],
    correctHash: hashAnswer(12, 1),
    explication: "TGUgbWFuZGF0IGR1IFByw6lzaWRlbnQgZGUgbGEgUsOpcHVibGlxdWUgZnJhbsOnYWlzZSBkdXJlIDUgYW5zIChxdWlucXVlbm5hdCkuIENldHRlIGR1csOpZSBhIMOpdMOpIGZpeMOpZSBlbiAyMDAwLCByZW1wbGHDp2FudCBsZSBzZXB0ZW5uYXQgZGUgNyBhbnMu"},
  {
    id: 13,
    categorie: "Organisation et fonctionnement des institutions",
    sousCategorie: "Président de la République",
    question: "UXVpIMOpbGl0IGxlIFByw6lzaWRlbnQgZGUgbGEgUsOpcHVibGlxdWUgZW4gRnJhbmNlID8=",
    options: [
      "TGVzIGTDqXB1dMOpcw==",
      "TGVzIGNpdG95ZW5zIGZyYW7Dp2Fpcw==",
      "TGUgUHJlbWllciBtaW5pc3RyZQ==",
      "TGUgU8OpbmF0"
    ],
    correctHash: hashAnswer(13, 1),
    explication: "TGUgUHLDqXNpZGVudCBkZSBsYSBSw6lwdWJsaXF1ZSBlc3Qgw6lsdSBhdSBzdWZmcmFnZSB1bml2ZXJzZWwgZGlyZWN0IHBhciB0b3VzIGxlcyBjaXRveWVucyBmcmFuw6dhaXMgbWFqZXVycywgYXUgc2NydXRpbiBtYWpvcml0YWlyZSDDoCBkZXV4IHRvdXJzLg=="},
  {
    id: 14,
    categorie: "Organisation et fonctionnement des institutions",
    sousCategorie: "Assemblée nationale",
    question: "Q29tbWVudCBhcHBlbGxlLXQtb24gbGVzIG1lbWJyZXMgZGUgbCdBc3NlbWJsw6llIG5hdGlvbmFsZSA/",
    options: [
      "TGVzIG1pbmlzdHJlcw==",
      "TGVzIGTDqXB1dMOpcw==",
      "TGVzIHPDqW5hdGV1cnM=",
      "TGVzIGNvbnNlaWxsZXJz"
    ],
    correctHash: hashAnswer(14, 1),
    explication: "TGVzIG1lbWJyZXMgZGUgbCdBc3NlbWJsw6llIG5hdGlvbmFsZSBzb250IGFwcGVsw6lzIGxlcyBkw6lwdXTDqXMuIElscyBzb250IMOpbHVzIHBvdXIgNSBhbnMgYXUgc3VmZnJhZ2UgdW5pdmVyc2VsIGRpcmVjdC4="},
  {
    id: 15,
    categorie: "Organisation et fonctionnement des institutions",
    sousCategorie: "Gouvernement",
    question: "UXVpIG5vbW1lIGxlIFByZW1pZXIgbWluaXN0cmUgPw==",
    options: [
      "TGVzIGTDqXB1dMOpcw==",
      "TGUgUHLDqXNpZGVudCBkZSBsYSBSw6lwdWJsaXF1ZQ==",
      "TGVzIGNpdG95ZW5z",
      "TGUgU8OpbmF0"
    ],
    correctHash: hashAnswer(15, 1),
    explication: "TGUgUHJlbWllciBtaW5pc3RyZSBlc3Qgbm9tbcOpIHBhciBsZSBQcsOpc2lkZW50IGRlIGxhIFLDqXB1YmxpcXVlLiBJbCBkaXJpZ2UgbCdhY3Rpb24gZHUgZ291dmVybmVtZW50IGV0IGVzdCByZXNwb25zYWJsZSBkZXZhbnQgbCdBc3NlbWJsw6llIG5hdGlvbmFsZS4="},
  {
    id: 16,
    categorie: "Organisation et fonctionnement des institutions",
    sousCategorie: "Sénat",
    question: "UXVpIMOpbGl0IGxlcyBzw6luYXRldXJzID8=",
    options: [
      "VG91cyBsZXMgY2l0b3llbnMgZnJhbsOnYWlz",
      "TGVzIGdyYW5kcyDDqWxlY3RldXJz",
      "TGUgUHLDqXNpZGVudCBkZSBsYSBSw6lwdWJsaXF1ZQ==",
      "TGVzIGTDqXB1dMOpcw=="
    ],
    correctHash: hashAnswer(16, 1),
    explication: "TGVzIHPDqW5hdGV1cnMgc29udCDDqWx1cyBhdSBzdWZmcmFnZSB1bml2ZXJzZWwgaW5kaXJlY3QgcGFyIGRlcyBncmFuZHMgw6lsZWN0ZXVycyAow6lsdXMgbG9jYXV4IDogbWFpcmVzLCBjb25zZWlsbGVycyBkw6lwYXJ0ZW1lbnRhdXggZXQgcsOpZ2lvbmF1eCwgZMOpcHV0w6lzKS4="},
  {
    id: 17,
    categorie: "Organisation et fonctionnement des institutions",
    sousCategorie: "Constitution",
    question: "UXVlbGxlIGVzdCBsYSBDb25zdGl0dXRpb24gYWN0dWVsbGUgZGUgbGEgRnJhbmNlID8=",
    options: [
      "TGEgQ29uc3RpdHV0aW9uIGRlIGxhIElWZSBSw6lwdWJsaXF1ZQ==",
      "TGEgQ29uc3RpdHV0aW9uIGRlIGxhIFZlIFLDqXB1YmxpcXVl",
      "TGEgQ29uc3RpdHV0aW9uIGRlIGxhIElJSWUgUsOpcHVibGlxdWU=",
      "TGEgQ29uc3RpdHV0aW9uIGRlIGwnRW1waXJl"
    ],
    correctHash: hashAnswer(17, 1),
    explication: "TGEgRnJhbmNlIHZpdCBzb3VzIGxhIENvbnN0aXR1dGlvbiBkZSBsYSBWZSBSw6lwdWJsaXF1ZSwgYWRvcHTDqWUgZW4gMTk1OC4gRWxsZSBkw6lmaW5pdCBsJ29yZ2FuaXNhdGlvbiBldCBsZSBmb25jdGlvbm5lbWVudCBkZXMgaW5zdGl0dXRpb25zIGZyYW7Dp2Fpc2VzLg=="},

  // ==================== 3. DROITS ET DEVOIRS (11 questions) ====================
  
  {
    id: 18,
    categorie: "Droits et devoirs du citoyen français",
    sousCategorie: "Droits civiques",
    question: "w4AgcGFydGlyIGRlIHF1ZWwgw6JnZSBwZXV0LW9uIHZvdGVyIGVuIEZyYW5jZSA/",
    options: [
      "MTYgYW5z",
      "MTggYW5z",
      "MjEgYW5z",
      "MjUgYW5z"
    ],
    correctHash: hashAnswer(18, 1),
    explication: "RW4gRnJhbmNlLCBsZSBkcm9pdCBkZSB2b3RlIGVzdCBhY2NvcmTDqSDDoCB0b3VzIGxlcyBjaXRveWVucyBmcmFuw6dhaXMgw6AgcGFydGlyIGRlIDE4IGFucy4gTCfDomdlIGRlIGxhIG1ham9yaXTDqSBjaXZpbGUgZXQgw6lsZWN0b3JhbGUgZXN0IGRlIDE4IGFucy4="},
  {
    id: 19,
    categorie: "Droits et devoirs du citoyen français",
    sousCategorie: "Droits civiques",
    question: "TGUgdm90ZSBlc3QtaWwgb2JsaWdhdG9pcmUgZW4gRnJhbmNlID8=",
    options: [
      "T3VpLCBjJ2VzdCBvYmxpZ2F0b2lyZQ==",
      "Tm9uLCBjJ2VzdCB1biBkcm9pdCBtYWlzIHBhcyB1bmUgb2JsaWdhdGlvbg==",
      "T3VpLCBzYXVmIHBvdXIgbGVzIHBlcnNvbm5lcyDDomfDqWVz",
      "T3VpLCBtYWlzIHNldWxlbWVudCBwb3VyIGxlcyDDqWxlY3Rpb25zIHByw6lzaWRlbnRpZWxsZXM="
    ],
    correctHash: hashAnswer(19, 1),
    explication: "RW4gRnJhbmNlLCBsZSB2b3RlIGVzdCB1biBkcm9pdCBtYWlzIHBhcyB1bmUgb2JsaWdhdGlvbi4gQ2hhcXVlIGNpdG95ZW4gZXN0IGxpYnJlIGRlIHZvdGVyIG91IG5vbiwgYydlc3QgdW4gY2hvaXggcGVyc29ubmVsLg=="},
  {
    id: 20,
    categorie: "Droits et devoirs du citoyen français",
    sousCategorie: "Devoirs",
    question: "UXVlbCBlc3QgbGUgZGV2b2lyIGRlIHRvdXMgbGVzIGNpdG95ZW5zIGVudmVycyBsZXMgZW5mYW50cyA/",
    options: [
      "TGVzIGluc2NyaXJlIMOgIGwnw6ljb2xl",
      "TGV1ciBlbnNlaWduZXIgdW5lIHJlbGlnaW9u",
      "TGV1ciBhcHByZW5kcmUgdW4gbcOpdGllcg==",
      "TGVzIGVudm95ZXIgw6AgbCfDqXRyYW5nZXI="
    ],
    correctHash: hashAnswer(20, 0),
    explication: "TCdpbnN0cnVjdGlvbiBlc3Qgb2JsaWdhdG9pcmUgZW4gRnJhbmNlIHBvdXIgdG91cyBsZXMgZW5mYW50cyBkZSAzIMOgIDE2IGFucy4gTGVzIHBhcmVudHMgb250IGxlIGRldm9pciBkJ2luc2NyaXJlIGxldXJzIGVuZmFudHMgw6AgbCfDqWNvbGUgb3UgZGUgbGV1ciBhc3N1cmVyIHVuZSBpbnN0cnVjdGlvbi4="},
  {
    id: 21,
    categorie: "Droits et devoirs du citoyen français",
    sousCategorie: "Devoirs",
    question: "RG9pdC1vbiBwYXllciBzZXMgaW1ww7R0cyBlbiBGcmFuY2UgPw==",
    options: [
      "Tm9uLCBjJ2VzdCBmYWN1bHRhdGlm",
      "T3VpLCBjJ2VzdCBvYmxpZ2F0b2lyZQ==",
      "U2V1bGVtZW50IHNpIG9uIGVzdCByaWNoZQ==",
      "U2V1bGVtZW50IGFwcsOocyAzMCBhbnM="
    ],
    correctHash: hashAnswer(21, 1),
    explication: "UGF5ZXIgc2VzIGltcMO0dHMgZXN0IHVuIGRldm9pciBjaXZpcXVlIG9ibGlnYXRvaXJlLiBMZXMgaW1ww7R0cyBmaW5hbmNlbnQgbGVzIHNlcnZpY2VzIHB1YmxpY3MgKMOpY29sZXMsIGjDtHBpdGF1eCwgcm91dGVzLCBldGMuKSBkb250IGLDqW7DqWZpY2llbnQgdG91cyBsZXMgY2l0b3llbnMu"},
  {
    id: 22,
    categorie: "Droits et devoirs du citoyen français",
    sousCategorie: "Devoirs",
    question: "RXN0LWlsIG9ibGlnYXRvaXJlIGRlIHJlc3BlY3RlciBsZXMgbG9pcyBkZSBsYSBSw6lwdWJsaXF1ZSA/",
    options: [
      "Tm9uLCBjJ2VzdCB1biBjaG9peCBwZXJzb25uZWw=",
      "T3VpLCBwb3VyIHRvdXM=",
      "U2V1bGVtZW50IHBvdXIgbGVzIEZyYW7Dp2FpcyBkZSBuYWlzc2FuY2U=",
      "U2V1bGVtZW50IHBvdXIgbGVzIGFkdWx0ZXM="
    ],
    correctHash: hashAnswer(22, 1),
    explication: "TGUgcmVzcGVjdCBkZXMgbG9pcyBlc3QgdW5lIG9ibGlnYXRpb24gcG91ciB0b3VzIGNldXggcXVpIHZpdmVudCBlbiBGcmFuY2UsIGNpdG95ZW5zIGZyYW7Dp2FpcyBvdSDDqXRyYW5nZXJzLiBOdWwgbidlc3QgY2Vuc8OpIGlnbm9yZXIgbGEgbG9pLg=="},
  {
    id: 23,
    categorie: "Droits et devoirs du citoyen français",
    sousCategorie: "Droits sociaux",
    question: "VG91cyBsZXMgZW5mYW50cyBvbnQtaWxzIGxlIGRyb2l0IGQnYWxsZXIgw6AgbCfDqWNvbGUgZW4gRnJhbmNlID8=",
    options: [
      "Tm9uLCBzZXVsZW1lbnQgbGVzIGVuZmFudHMgZnJhbsOnYWlz",
      "T3VpLCB0b3VzIGxlcyBlbmZhbnRz",
      "U2V1bGVtZW50IGxlcyBlbmZhbnRzIGRlcyBwYXJlbnRzIHJpY2hlcw==",
      "U2V1bGVtZW50IGxlcyBnYXLDp29ucw=="
    ],
    correctHash: hashAnswer(23, 1),
    explication: "RW4gRnJhbmNlLCB0b3VzIGxlcyBlbmZhbnRzIG9udCBsZSBkcm9pdCBkJ2FsbGVyIMOgIGwnw6ljb2xlLCBxdWVsbGUgcXVlIHNvaXQgbGV1ciBuYXRpb25hbGl0w6kgb3UgbGV1ciBzaXR1YXRpb24uIEwnw6lkdWNhdGlvbiBlc3QgZ3JhdHVpdGUgZXQgb2JsaWdhdG9pcmUgZGUgMyDDoCAxNiBhbnMu"},
  {
    id: 24,
    categorie: "Droits et devoirs du citoyen français",
    sousCategorie: "Droits sociaux",
    question: "UXVlbCBzeXN0w6htZSBwcm90w6hnZSBsZXMgcGVyc29ubmVzIGVuIGNhcyBkZSBtYWxhZGllID8=",
    options: [
      "TGEgcG9saWNl",
      "TGEgU8OpY3VyaXTDqSBzb2NpYWxl",
      "TCdhcm3DqWU=",
      "TGVzIHBvbXBpZXJz"
    ],
    correctHash: hashAnswer(24, 1),
    explication: "TGEgU8OpY3VyaXTDqSBzb2NpYWxlIGVzdCB1biBzeXN0w6htZSBkZSBwcm90ZWN0aW9uIHNvY2lhbGUgcXVpIHJlbWJvdXJzZSB1bmUgcGFydGllIGRlcyBmcmFpcyBtw6lkaWNhdXggZXQgZ2FyYW50aXQgZGVzIHJldmVudXMgZW4gY2FzIGRlIG1hbGFkaWUsIGQnYWNjaWRlbnQgb3UgZGUgY2jDtG1hZ2Uu"},
  {
    id: 25,
    categorie: "Droits et devoirs du citoyen français",
    sousCategorie: "Libertés",
    question: "UGV1dC1vbiBzZSByw6l1bmlyIGxpYnJlbWVudCBlbiBGcmFuY2UgPw==",
    options: [
      "Tm9uLCBjJ2VzdCBpbnRlcmRpdA==",
      "T3VpLCBkYW5zIGxlIHJlc3BlY3QgZGUgbCdvcmRyZSBwdWJsaWM=",
      "U2V1bGVtZW50IGF2ZWMgdW5lIGF1dG9yaXNhdGlvbiBkdSBwcsOpZmV0",
      "U2V1bGVtZW50IGRhbnMgZGVzIGxpZXV4IHByaXbDqXM="
    ],
    correctHash: hashAnswer(25, 1),
    explication: "TGEgbGliZXJ0w6kgZGUgcsOpdW5pb24gZXN0IGdhcmFudGllIGVuIEZyYW5jZS4gT24gcGV1dCBzZSByw6l1bmlyIGxpYnJlbWVudCwgbWFpcyBsZXMgbWFuaWZlc3RhdGlvbnMgc3VyIGxhIHZvaWUgcHVibGlxdWUgZG9pdmVudCDDqnRyZSBkw6ljbGFyw6llcyDDoCBsYSBwcsOpZmVjdHVyZS4="},
  {
    id: 26,
    categorie: "Droits et devoirs du citoyen français",
    sousCategorie: "Libertés",
    question: "UGV1dC1vbiBjcsOpZXIgdW5lIGFzc29jaWF0aW9uIGVuIEZyYW5jZSA/",
    options: [
      "Tm9uLCBjJ2VzdCBpbnRlcmRpdA==",
      "T3VpLCBsaWJyZW1lbnQ=",
      "U2V1bGVtZW50IGF2ZWMgbCdhdXRvcmlzYXRpb24gZGUgbGEgbWFpcmll",
      "U2V1bGVtZW50IHNpIG9uIGEgcGx1cyBkZSAzMCBhbnM="
    ],
    correctHash: hashAnswer(26, 1),
    explication: "TGEgbGliZXJ0w6kgZCdhc3NvY2lhdGlvbiBlc3QgZ2FyYW50aWUgcGFyIGxhIGxvaSBkZSAxOTAxLiBUb3V0ZSBwZXJzb25uZSBwZXV0IGNyw6llciB1bmUgYXNzb2NpYXRpb24gbGlicmVtZW50LCDDoCBidXQgbm9uIGx1Y3JhdGlmLCBwYXIgc2ltcGxlIGTDqWNsYXJhdGlvbiDDoCBsYSBwcsOpZmVjdHVyZS4="},
  {
    id: 27,
    categorie: "Droits et devoirs du citoyen français",
    sousCategorie: "Droits civiques",
    question: "TGVzIGZlbW1lcyBvbnQtZWxsZXMgbGUgZHJvaXQgZGUgdm90ZSBlbiBGcmFuY2UgPw==",
    options: [
      "Tm9uLCBlbGxlcyBuZSBwZXV2ZW50IHBhcyB2b3Rlcg==",
      "T3VpLCBkZXB1aXMgMTk0NA==",
      "U2V1bGVtZW50IHNpIGVsbGVzIHNvbnQgbWFyacOpZXM=",
      "U2V1bGVtZW50IGFwcsOocyAyNSBhbnM="
    ],
    correctHash: hashAnswer(27, 1),
    explication: "TGVzIGZlbW1lcyBmcmFuw6dhaXNlcyBvbnQgb2J0ZW51IGxlIGRyb2l0IGRlIHZvdGUgZW4gMTk0NC4gRWxsZXMgb250IHZvdMOpIHBvdXIgbGEgcHJlbWnDqHJlIGZvaXMgYXV4IMOpbGVjdGlvbnMgbXVuaWNpcGFsZXMgZCdhdnJpbCAxOTQ1Lg=="},
  {
    id: 28,
    categorie: "Droits et devoirs du citoyen français",
    sousCategorie: "Devoirs",
    question: "RW4gY2FzIGQnaW5jZW5kaWUgb3UgZCdhY2NpZGVudCwgcXVlbCBudW3DqXJvIGQndXJnZW5jZSBkb2l0LW9uIGFwcGVsZXIgPw==",
    options: [
      "MTU=",
      "MTc=",
      "MTg=",
      "MTEy"
    ],
    correctHash: hashAnswer(28, 2),
    explication: "TGUgMTggZXN0IGxlIG51bcOpcm8gZGVzIHBvbXBpZXJzIMOgIGFwcGVsZXIgZW4gY2FzIGQnaW5jZW5kaWUgb3UgZCdhY2NpZGVudC4gTGUgMTEyIGVzdCBsZSBudW3DqXJvIGQndXJnZW5jZSBldXJvcMOpZW4gcXVpIGZvbmN0aW9ubmUgw6lnYWxlbWVudC4="},

  // ==================== 4. HISTOIRE/GÉOGRAPHIE/CULTURE (8 questions) ====================
  
  {
    id: 29,
    categorie: "Principaux repères historiques, géographiques et culturels",
    sousCategorie: "Histoire",
    question: "RW4gcXVlbGxlIGFubsOpZSBhIGV1IGxpZXUgbGEgUsOpdm9sdXRpb24gZnJhbsOnYWlzZSA/",
    options: [
      "MTc4OQ==",
      "MTc5Mg==",
      "MTgwNA==",
      "MTgxNQ=="
    ],
    correctHash: hashAnswer(29, 0),
    explication: "TGEgUsOpdm9sdXRpb24gZnJhbsOnYWlzZSBhIGNvbW1lbmPDqSBlbiAxNzg5IGF2ZWMgbGEgcHJpc2UgZGUgbGEgQmFzdGlsbGUgbGUgMTQganVpbGxldC4gQydlc3QgdW4gw6l2w6luZW1lbnQgZm9uZGF0ZXVyIGRlIGxhIFLDqXB1YmxpcXVlIGZyYW7Dp2Fpc2Uu"},
  {
    id: 30,
    categorie: "Principaux repères historiques, géographiques et culturels",
    sousCategorie: "Histoire",
    question: "UXVlbCDDqXbDqW5lbWVudCBlc3QgY29tbcOpbW9yw6kgbGUgOCBtYWkgZW4gRnJhbmNlID8=",
    options: [
      "TGEgZmluIGRlIGxhIFByZW1pw6hyZSBHdWVycmUgbW9uZGlhbGU=",
      "TGEgZmluIGRlIGxhIFNlY29uZGUgR3VlcnJlIG1vbmRpYWxlIGVuIEV1cm9wZQ==",
      "TGEgcHJpc2UgZGUgbGEgQmFzdGlsbGU=",
      "TCdhcm1pc3RpY2UgZGUgMTkxOA=="
    ],
    correctHash: hashAnswer(30, 1),
    explication: "TGUgOCBtYWkgY29tbcOpbW9yZSBsYSB2aWN0b2lyZSBkZXMgQWxsacOpcyBldCBsYSBmaW4gZGUgbGEgU2Vjb25kZSBHdWVycmUgbW9uZGlhbGUgZW4gRXVyb3BlICg4IG1haSAxOTQ1KS4gQydlc3QgdW4gam91ciBmw6lyacOpIGVuIEZyYW5jZS4="},
  {
    id: 31,
    categorie: "Principaux repères historiques, géographiques et culturels",
    sousCategorie: "Histoire",
    question: "UXVlbCDDqXbDqW5lbWVudCBlc3QgY29tbcOpbW9yw6kgbGUgMTEgbm92ZW1icmUgPw==",
    options: [
      "TGEgUsOpdm9sdXRpb24gZnJhbsOnYWlzZQ==",
      "TCdhcm1pc3RpY2UgZGUgbGEgUHJlbWnDqHJlIEd1ZXJyZSBtb25kaWFsZQ==",
      "TGEgZmluIGRlIGxhIFNlY29uZGUgR3VlcnJlIG1vbmRpYWxl",
      "TGEgZsOqdGUgbmF0aW9uYWxl"
    ],
    correctHash: hashAnswer(31, 1),
    explication: "TGUgMTEgbm92ZW1icmUgY29tbcOpbW9yZSBsJ2FybWlzdGljZSBkZSAxOTE4IHF1aSBhIG1pcyBmaW4gw6AgbGEgUHJlbWnDqHJlIEd1ZXJyZSBtb25kaWFsZS4gQydlc3QgdW4gam91ciBmw6lyacOpIG5hdGlvbmFsIGVuIEZyYW5jZS4="},
  {
    id: 32,
    categorie: "Principaux repères historiques, géographiques et culturels",
    sousCategorie: "Géographie",
    question: "UXVlbGxlIGVzdCBsYSBjYXBpdGFsZSBkZSBsYSBGcmFuY2UgPw==",
    options: [
      "THlvbg==",
      "TWFyc2VpbGxl",
      "UGFyaXM=",
      "Qm9yZGVhdXg="
    ],
    correctHash: hashAnswer(32, 2),
    explication: "UGFyaXMgZXN0IGxhIGNhcGl0YWxlIGRlIGxhIEZyYW5jZS4gQydlc3QgbGUgc2nDqGdlIGRlcyBpbnN0aXR1dGlvbnMgbmF0aW9uYWxlcyBldCBsYSB2aWxsZSBsYSBwbHVzIHBldXBsw6llIGRlIEZyYW5jZS4="},
  {
    id: 33,
    categorie: "Principaux repères historiques, géographiques et culturels",
    sousCategorie: "Géographie",
    question: "Q29tYmllbiBkZSByw6lnaW9ucyBjb21wdGUgbGEgRnJhbmNlIG3DqXRyb3BvbGl0YWluZSA/",
    options: [
      "MTA=",
      "MTM=",
      "MTg=",
      "MjI="
    ],
    correctHash: hashAnswer(33, 1),
    explication: "RGVwdWlzIGxhIHLDqWZvcm1lIGRlIDIwMTYsIGxhIEZyYW5jZSBtw6l0cm9wb2xpdGFpbmUgY29tcHRlIDEzIHLDqWdpb25zIChwbHVzIDUgcsOpZ2lvbnMgZCdvdXRyZS1tZXIpLiBMZXMgcsOpZ2lvbnMgb250IMOpdMOpIHJlZ3JvdXDDqWVzIHBvdXIgZ2FnbmVyIGVuIGVmZmljYWNpdMOpLg=="},
  {
    id: 34,
    categorie: "Principaux repères historiques, géographiques et culturels",
    sousCategorie: "Géographie",
    question: "UXVlbCBvY8OpYW4gYm9yZGUgbGEgY8O0dGUgb3Vlc3QgZGUgbGEgRnJhbmNlID8=",
    options: [
      "TCdvY8OpYW4gSW5kaWVu",
      "TCdvY8OpYW4gQXRsYW50aXF1ZQ==",
      "TCdvY8OpYW4gUGFjaWZpcXVl",
      "TCdvY8OpYW4gQXJjdGlxdWU="
    ],
    correctHash: hashAnswer(34, 1),
    explication: "TCdvY8OpYW4gQXRsYW50aXF1ZSBib3JkZSBsYSBjw7R0ZSBvdWVzdCBkZSBsYSBGcmFuY2UuIExhIEZyYW5jZSBlc3Qgw6lnYWxlbWVudCBib3Jkw6llIHBhciBsYSBtZXIgTcOpZGl0ZXJyYW7DqWUgYXUgc3VkLg=="},
  {
    id: 35,
    categorie: "Principaux repères historiques, géographiques et culturels",
    sousCategorie: "Culture",
    question: "UXVlbGxlIGxhbmd1ZSBlc3QgcGFybMOpZSBvZmZpY2llbGxlbWVudCBlbiBGcmFuY2UgPw==",
    options: [
      "TCdhbmdsYWlz",
      "TGUgZnJhbsOnYWlz",
      "TCdhbGxlbWFuZA==",
      "TCdlc3BhZ25vbA=="
    ],
    correctHash: hashAnswer(35, 1),
    explication: "TGUgZnJhbsOnYWlzIGVzdCBsYSBsYW5ndWUgb2ZmaWNpZWxsZSBkZSBsYSBSw6lwdWJsaXF1ZSBmcmFuw6dhaXNlLiBDJ2VzdCBsYSBsYW5ndWUgZGUgbCdlbnNlaWduZW1lbnQsIGR1IHRyYXZhaWwsIGRlcyDDqWNoYW5nZXMgZXQgZGVzIHNlcnZpY2VzIHB1YmxpY3Mu"},
  {
    id: 36,
    categorie: "Principaux repères historiques, géographiques et culturels",
    sousCategorie: "Culture",
    question: "UXVlbCBtb251bWVudCBjw6lsw6hicmUgc2UgdHJvdXZlIMOgIFBhcmlzID8=",
    options: [
      "TGEgU3RhdHVlIGRlIGxhIExpYmVydMOp",
      "TGEgVG91ciBFaWZmZWw=",
      "QmlnIEJlbg==",
      "TGUgQ29saXPDqWU="
    ],
    correctHash: hashAnswer(36, 1),
    explication: "TGEgVG91ciBFaWZmZWwgZXN0IGxlIG1vbnVtZW50IGxlIHBsdXMgY8OpbMOoYnJlIGRlIFBhcmlzLiBDb25zdHJ1aXRlIGVuIDE4ODkgcG91ciBsJ0V4cG9zaXRpb24gdW5pdmVyc2VsbGUsIGVsbGUgZXN0IGRldmVudWUgbGUgc3ltYm9sZSBkZSBsYSBGcmFuY2Uu"},

  // ==================== 5. VIVRE EN FRANCE (4 questions) ====================
  
  {
    id: 37,
    categorie: "Vivre en France",
    sousCategorie: "Vie quotidienne",
    question: "UXVlbCBkb2N1bWVudCBkb2l0LW9uIHByw6lzZW50ZXIgcG91ciBwcm91dmVyIHNvbiBpZGVudGl0w6kgZW4gRnJhbmNlID8=",
    options: [
      "VW4gcGFzc2Vwb3J0IG91IHVuZSBjYXJ0ZSBkJ2lkZW50aXTDqQ==",
      "VW4gcGVybWlzIGRlIGNvbmR1aXJlIHNldWxlbWVudA==",
      "VW5lIGZhY3R1cmUgZCfDqWxlY3RyaWNpdMOp",
      "VW4gYWN0ZSBkZSBuYWlzc2FuY2U="
    ],
    correctHash: hashAnswer(37, 0),
    explication: "UG91ciBwcm91dmVyIHNvbiBpZGVudGl0w6ksIG9uIGRvaXQgcHLDqXNlbnRlciB1bmUgY2FydGUgbmF0aW9uYWxlIGQnaWRlbnRpdMOpIG91IHVuIHBhc3NlcG9ydC4gTGUgcGVybWlzIGRlIGNvbmR1aXJlIHBldXQgw6p0cmUgYWNjZXB0w6kgZGFucyBjZXJ0YWlucyBjYXMgbWFpcyBuJ2VzdCBwYXMgdW4gZG9jdW1lbnQgZCdpZGVudGl0w6kgb2ZmaWNpZWwu"},
  {
    id: 38,
    categorie: "Vivre en France",
    sousCategorie: "Vie quotidienne",
    question: "UXVlIGRvaXQtb24gZmFpcmUgcXVhbmQgb24gZMOpbcOpbmFnZSBlbiBGcmFuY2UgPw==",
    options: [
      "UmllbiBkZSBwYXJ0aWN1bGllcg==",
      "RMOpY2xhcmVyIHNvbiBjaGFuZ2VtZW50IGQnYWRyZXNzZQ==",
      "RGVtYW5kZXIgdW5lIG5vdXZlbGxlIGNhcnRlIGQnaWRlbnRpdMOp",
      "UXVpdHRlciBzb24gYW5jaWVuIGxvZ2VtZW50IHNhbnMgcHLDqXZlbmly"
    ],
    correctHash: hashAnswer(38, 1),
    explication: "TG9ycyBkJ3VuIGTDqW3DqW5hZ2VtZW50LCBpbCBmYXV0IGTDqWNsYXJlciBzb24gY2hhbmdlbWVudCBkJ2FkcmVzc2UgYXV4IGRpZmbDqXJlbnRlcyBhZG1pbmlzdHJhdGlvbnMgKGltcMO0dHMsIHPDqWN1cml0w6kgc29jaWFsZSwgYmFucXVlLCBldGMuKSBldCBtZXR0cmUgw6Agam91ciBzZXMgcGFwaWVycy4="},
  {
    id: 39,
    categorie: "Vivre en France",
    sousCategorie: "Services publics",
    question: "T8O5IHBldXQtb24gZmFpcmUgZGVzIGTDqW1hcmNoZXMgYWRtaW5pc3RyYXRpdmVzIGVuIEZyYW5jZSA/",
    options: [
      "w4AgbGEgYm91bGFuZ2VyaWU=",
      "w4AgbGEgbWFpcmll",
      "QXUgc3VwZXJtYXJjaMOp",
      "w4AgbGEgcGhhcm1hY2ll"
    ],
    correctHash: hashAnswer(39, 1),
    explication: "TGEgbWFpcmllIGVzdCBsZSBsaWV1IG/DuSBsJ29uIHBldXQgZWZmZWN0dWVyIGRlIG5vbWJyZXVzZXMgZMOpbWFyY2hlcyBhZG1pbmlzdHJhdGl2ZXMgOiBkZW1hbmRlIGRlIGNhcnRlIGQnaWRlbnRpdMOpLCBpbnNjcmlwdGlvbiBzdXIgbGVzIGxpc3RlcyDDqWxlY3RvcmFsZXMsIGFjdGVzIGQnw6l0YXQgY2l2aWwsIGV0Yy4="},
  {
    id: 40,
    categorie: "Vivre en France",
    sousCategorie: "Santé",
    question: "Q29tbWVudCBmb25jdGlvbm5lIGxlIHN5c3TDqG1lIGRlIHNhbnTDqSBlbiBGcmFuY2UgPw==",
    options: [
      "VG91dCBlc3QgZ3JhdHVpdCBzYW5zIGNvbmRpdGlvbg==",
      "TGEgU8OpY3VyaXTDqSBzb2NpYWxlIHJlbWJvdXJzZSB1bmUgcGFydGllIGRlcyBzb2lucw==",
      "SWwgZmF1dCB0b3V0IHBheWVyIHNvaS1tw6ptZQ==",
      "U2V1bHMgbGVzIHJpY2hlcyBvbnQgYWNjw6hzIGF1eCBzb2lucw=="
    ],
    correctHash: hashAnswer(40, 1),
    explication: "RW4gRnJhbmNlLCBsYSBTw6ljdXJpdMOpIHNvY2lhbGUgcmVtYm91cnNlIHVuZSBwYXJ0aWUgZGVzIGZyYWlzIG3DqWRpY2F1eC4gVW5lIG11dHVlbGxlIGNvbXBsw6ltZW50YWlyZSBwZXV0IGNvdXZyaXIgbGUgcmVzdGUuIEwnYWNjw6hzIGF1eCBzb2lucyBlc3QgZ2FyYW50aSBwb3VyIHRvdXMu"}
];

// Fonction pour vérifier une réponse
export function verifyAnswerExam5(questionId: number, userAnswerIndex: number, correctHash: string): boolean {
  return hashAnswer(questionId, userAnswerIndex) === correctHash;
}

// Fonction pour trouver l'index correct à partir du hash
export function findCorrectIndexExam5(questionId: number, correctHash: string): number {
  for (let i = 0; i < 4; i++) {
    if (hashAnswer(questionId, i) === correctHash) {
      return i;
    }
  }
  return 0;
}

export const EXAMEN_5: ExamenBlanc = {
  numero: 5,
  titre: "Examen blanc #5",
  description: "40 questions en conditions réelles d'examen",
  questions: questions.map(q => decodeQuestion(q)),
  dureeMinutes: 45,
  totalQuestions: 40
};
