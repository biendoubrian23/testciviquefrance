// ==================== EXAMEN BLANC #3 ====================
// Répartition officielle :
// 1. Principes et valeurs (11 questions)
// 2. Système institutionnel (6 questions)
// 3. Droits et devoirs (11 questions)
// 4. Histoire/géographie/culture (8 questions)
// 5. Vivre en France (4 questions)
// ==========================================================================

import { ExamenBlanc, Question, decodeQuestion } from './types';

const EXAM_NUMBER = 3;

// Fonction de hash simple (djb2) pour l'examen 3
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
    question: "UXVlbGxlIGZsZXVyIGVzdCB0cmFkaXRpb25uZWxsZW1lbnQgYXNzb2Npw6llIMOgIGxhIFLDqXB1YmxpcXVlIGZyYW7Dp2Fpc2UgPw==",
    options: [
      "TGEgcm9zZQ==",
      "TGUgbHlz",
      "TCdpcmlz",
      "TGEgdHVsaXBl"
    ],
    correctHash: hashAnswer(1, 1),
    explication: "TGUgbHlzIGVzdCB0cmFkaXRpb25uZWxsZW1lbnQgYXNzb2Npw6kgw6AgbGEgUsOpcHVibGlxdWUgZnJhbsOnYWlzZS4gSWwgc3ltYm9saXNlIGxhIHJveWF1dMOpIGZyYW7Dp2Fpc2UgZXQgYSDDqXTDqSByZXByaXMgY29tbWUgc3ltYm9sZSBkZSBsYSBuYXRpb24u"},
  {
    id: 2,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Devise et symboles",
    question: "Q29tYmllbiBkZSBiYW5kZXMgYSBsZSBkcmFwZWF1IGZyYW7Dp2FpcyA/",
    options: [
      "RGV1eA==",
      "VHJvaXM=",
      "UXVhdHJl",
      "Q2lucQ=="
    ],
    correctHash: hashAnswer(2, 1),
    explication: "TGUgZHJhcGVhdSBmcmFuw6dhaXMsIGFwcGVsw6kgZHJhcGVhdSB0cmljb2xvcmUsIGNvbXBvcnRlIHRyb2lzIGJhbmRlcyB2ZXJ0aWNhbGVzIGRlIGNvdWxldXJzIMOpZ2FsZXMgOiBibGV1LCBibGFuYyBldCByb3VnZS4="},
  {
    id: 3,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Laïcité",
    question: "w4AgbCfDqWNvbGUgcHVibGlxdWUgZW4gRnJhbmNlLCBsZXMgZW5zZWlnbmFudHMgcGV1dmVudC1pbHMgcG9ydGVyIGRlcyBzaWduZXMgcmVsaWdpZXV4IG9zdGVuc2libGVzID8=",
    options: [
      "T3VpLCBjJ2VzdCB1biBkcm9pdA==",
      "Tm9uLCBjJ2VzdCBpbnRlcmRpdCBwYXIgbGEgbG9pIGRlIGxhw69jaXTDqQ==",
      "T3VpLCBtYWlzIHNldWxlbWVudCBlbiBtYXRlcm5lbGxl",
      "Q2VsYSBkw6lwZW5kIGRlIGxhIHLDqWdpb24="
    ],
    correctHash: hashAnswer(3, 1),
    explication: "TGVzIGFnZW50cyBkdSBzZXJ2aWNlIHB1YmxpYywgZG9udCBsZXMgZW5zZWlnbmFudHMsIHNvbnQgdGVudXMgw6AgdW5lIHN0cmljdGUgbmV1dHJhbGl0w6kgcmVsaWdpZXVzZS4gSWxzIG5lIHBldXZlbnQgcGFzIHBvcnRlciBkZSBzaWduZXMgcmVsaWdpZXV4IG9zdGVuc2libGVzLg=="},
  {
    id: 4,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Laïcité",
    question: "TGEgbGHDr2NpdMOpIGdhcmFudGl0IDo=",
    options: [
      "TCdpbnRlcmRpY3Rpb24gZGUgdG91dGVzIGxlcyByZWxpZ2lvbnM=",
      "TGEgbGliZXJ0w6kgZGUgY29uc2NpZW5jZSBldCBkZSBjdWx0ZSBwb3VyIHRvdXM=",
      "TGEgcHLDqWRvbWluYW5jZSBkJ3VuZSBzZXVsZSByZWxpZ2lvbg==",
      "TCdvYmxpZ2F0aW9uIGQnw6p0cmUgYXRow6ll"
    ],
    correctHash: hashAnswer(4, 1),
    explication: "TGEgbGHDr2NpdMOpIGdhcmFudGl0IGxhIGxpYmVydMOpIGRlIGNvbnNjaWVuY2UgZXQgZGUgY3VsdGUgcG91ciB0b3VzIGxlcyBjaXRveWVucy4gRWxsZSBhc3N1cmUgbGEgbmV1dHJhbGl0w6kgZGUgbCfDiXRhdCB2aXMtw6AtdmlzIGRlcyByZWxpZ2lvbnMgdG91dCBlbiBwcm90w6lnZWFudCBsYSBsaWJlcnTDqSByZWxpZ2lldXNlIGRlIGNoYWN1bi4="},
  {
    id: 5,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Égalité",
    question: "UXUnZXN0LWNlIHF1ZSBsYSBwYXJpdMOpIGVuIHBvbGl0aXF1ZSA/",
    options: [
      "TCfDqWdhbCBhY2PDqHMgZGVzIGhvbW1lcyBldCBkZXMgZmVtbWVzIGF1eCBtYW5kYXRzIMOpbGVjdG9yYXV4",
      "TCfDqWdhbGl0w6kgZGVzIHJldmVudXMgZW50cmUgdG91cyBsZXMgY2l0b3llbnM=",
      "TGUgcGFydGFnZSDDqWdhbCBkdSB0ZW1wcyBkZSBwYXJvbGU=",
      "TGEgcm90YXRpb24gb2JsaWdhdG9pcmUgZGVzIMOpbHVz"
    ],
    correctHash: hashAnswer(5, 0),
    explication: "TGEgcGFyaXTDqSBkw6lzaWduZSBsJ8OpZ2FsIGFjY8OocyBkZXMgaG9tbWVzIGV0IGRlcyBmZW1tZXMgYXV4IG1hbmRhdHMgw6lsZWN0b3JhdXggZXQgZm9uY3Rpb25zIMOpbGVjdGl2ZXMuIERlcyBsb2lzIGltcG9zZW50IGTDqXNvcm1haXMgZGVzIHF1b3RhcyBwb3VyIGZhdm9yaXNlciBsJ8OpZ2FsaXTDqS4="},
  {
    id: 6,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Égalité",
    question: "RW4gRnJhbmNlLCBsYSBkaXNjcmltaW5hdGlvbiDDoCBsJ2VtYmF1Y2hlIGVzdCA6",
    options: [
      "QXV0b3Jpc8OpZSBkYW5zIGNlcnRhaW5zIGNhcw==",
      "U3RyaWN0ZW1lbnQgaW50ZXJkaXRlIGV0IHB1bmllIHBhciBsYSBsb2k=",
      "VG9sw6lyw6llIHBvdXIgbGVzIHBldGl0ZXMgZW50cmVwcmlzZXM=",
      "UGVybWlzZSBhdmVjIGwnYWNjb3JkIGR1IGNhbmRpZGF0"
    ],
    correctHash: hashAnswer(6, 1),
    explication: "VG91dGUgZGlzY3JpbWluYXRpb24gw6AgbCdlbWJhdWNoZSBlc3Qgc3RyaWN0ZW1lbnQgaW50ZXJkaXRlIGV0IGNvbnN0aXR1ZSB1biBkw6lsaXQgcMOpbmFsLiBFbGxlIHBldXQgw6p0cmUgZm9uZMOpZSBzdXIgbCdvcmlnaW5lLCBsZSBzZXhlLCBsJ8OiZ2UsIGwnb3JpZW50YXRpb24gc2V4dWVsbGUsIGV0Yy4="},
  {
    id: 7,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Liberté",
    question: "TGEgbGliZXJ0w6kgZGUgbGEgcHJlc3NlIGVuIEZyYW5jZSBzaWduaWZpZSBxdWUgOg==",
    options: [
      "TGVzIGpvdXJuYWxpc3RlcyBwZXV2ZW50IMOpY3JpcmUgY2UgcXUnaWxzIHZldWxlbnQgc2FucyBhdWN1bmUgbGltaXRl",
      "TGVzIG3DqWRpYXMgc29udCBsaWJyZXMgbWFpcyBkb2l2ZW50IHJlc3BlY3RlciBsZXMgbG9pcyAoZGlmZmFtYXRpb24sIHZpZSBwcml2w6llLi4uKQ==",
      "U2V1bCBsJ8OJdGF0IHBldXQgcHVibGllciBkZXMgam91cm5hdXg=",
      "TGEgcHJlc3NlIGVzdCBlbnRpw6hyZW1lbnQgY29udHLDtGzDqWUgcGFyIGxlIGdvdXZlcm5lbWVudA=="
    ],
    correctHash: hashAnswer(7, 1),
    explication: "TGEgbGliZXJ0w6kgZGUgbGEgcHJlc3NlIGVzdCBnYXJhbnRpZSBtYWlzIGVuY2FkcsOpZSBwYXIgbGEgbG9pLiBMZXMgam91cm5hbGlzdGVzIGRvaXZlbnQgcmVzcGVjdGVyIGxhIHZpZSBwcml2w6llLCBuZSBwYXMgZGlmZmFtZXIsIG5pIGluY2l0ZXIgw6AgbGEgaGFpbmUu"},
  {
    id: 8,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Liberté",
    question: "UGV1dC1vbiBtYW5pZmVzdGVyIGxpYnJlbWVudCBlbiBGcmFuY2UgPw==",
    options: [
      "T3VpLCBzYW5zIGF1Y3VuZSBmb3JtYWxpdMOp",
      "T3VpLCBtYWlzIGlsIGZhdXQgZMOpY2xhcmVyIGxhIG1hbmlmZXN0YXRpb24gw6AgbGEgcHLDqWZlY3R1cmU=",
      "Tm9uLCBjJ2VzdCBpbnRlcmRpdA==",
      "T3VpLCBtYWlzIHNldWxlbWVudCBsZSBkaW1hbmNoZQ=="
    ],
    correctHash: hashAnswer(8, 1),
    explication: "TGUgZHJvaXQgZGUgbWFuaWZlc3RhdGlvbiBlc3QgZ2FyYW50aSBlbiBGcmFuY2UsIG1haXMgdG91dGUgbWFuaWZlc3RhdGlvbiBzdXIgbGEgdm9pZSBwdWJsaXF1ZSBkb2l0IMOqdHJlIGTDqWNsYXLDqWUgw6AgbCdhdmFuY2UgYXVwcsOocyBkZSBsYSBwcsOpZmVjdHVyZSBvdSBkZSBsYSBtYWlyaWUu"},
  {
    id: 9,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Fraternité",
    question: "TGUgU2Vjb3VycyBwb3B1bGFpcmUsIGxhIENyb2l4LVJvdWdlLCBsZXMgUmVzdG9zIGR1IEPFk3VyIHNvbnQgZGVzIGV4ZW1wbGVzIGRlIDo=",
    options: [
      "U2VydmljZXMgcHVibGljcyBvYmxpZ2F0b2lyZXM=",
      "QXNzb2NpYXRpb25zIHF1aSBpbmNhcm5lbnQgbGEgZnJhdGVybml0w6kgZXQgbGEgc29saWRhcml0w6k=",
      "RW50cmVwcmlzZXMgY29tbWVyY2lhbGVz",
      "UGFydGlzIHBvbGl0aXF1ZXM="
    ],
    correctHash: hashAnswer(9, 1),
    explication: "Q2VzIGFzc29jaWF0aW9ucyBjYXJpdGF0aXZlcyBpbmNhcm5lbnQgbGVzIHZhbGV1cnMgZGUgZnJhdGVybml0w6kgZXQgZGUgc29saWRhcml0w6kgZW4gdmVuYW50IGVuIGFpZGUgYXV4IHBlcnNvbm5lcyBlbiBkaWZmaWN1bHTDqSAocGF1dnJldMOpLCBleGNsdXNpb24sIGV0Yy4pLg=="},
  {
    id: 10,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Fraternité",
    question: "UXVlIHNpZ25pZmllIMOqdHJlIHNvbGlkYWlyZSA/",
    options: [
      "Vml2cmUgc2V1bCBldCBpbmTDqXBlbmRhbnQ=",
      "QWlkZXIgbGVzIGF1dHJlcyBldCBzZSBzZW50aXIgcmVzcG9uc2FibGUgZHUgYmllbiBjb21tdW4=",
      "T2LDqWlyIGF1eCBhdXRvcml0w6lz",
      "UGF5ZXIgc2VzIGltcMO0dHMgdW5pcXVlbWVudA=="
    ],
    correctHash: hashAnswer(10, 1),
    explication: "TGEgc29saWRhcml0w6kgaW1wbGlxdWUgZCdhaWRlciBsZXMgYXV0cmVzLCBkZSBzZSBzZW50aXIgcmVzcG9uc2FibGUgZHUgYmllbi3DqnRyZSBjb2xsZWN0aWYgZXQgZGUgY29udHJpYnVlciBhdSBiaWVuIGNvbW11bi4gQydlc3QgdW4gcGlsaWVyIGRlIGxhIGZyYXRlcm5pdMOpLg=="},
  {
    id: 11,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Lutte contre les discriminations",
    question: "RW4gRnJhbmNlLCBsJ2hvbW9waG9iaWUgZXN0IDo=",
    options: [
      "VG9sw6lyw6llIHNpIGVsbGUgcmVzdGUgZGlzY3LDqHRl",
      "UHVuaWUgcGFyIGxhIGxvaSBjb21tZSB0b3V0ZSBkaXNjcmltaW5hdGlvbg==",
      "QXV0b3Jpc8OpZSBkYW5zIGxlIGNhZHJlIHByaXbDqQ==",
      "VW5lIG9waW5pb24gcGVyc29ubmVsbGUgcHJvdMOpZ8OpZQ=="
    ],
    correctHash: hashAnswer(11, 1),
    explication: "TCdob21vcGhvYmllIGVzdCB1bmUgZGlzY3JpbWluYXRpb24gZm9uZMOpZSBzdXIgbCdvcmllbnRhdGlvbiBzZXh1ZWxsZS4gRWxsZSBlc3Qgc3RyaWN0ZW1lbnQgaW50ZXJkaXRlIGV0IHB1bmllIHBhciBsYSBsb2kgZnJhbsOnYWlzZSwgY29tbWUgdG91dGUgZm9ybWUgZGUgZGlzY3JpbWluYXRpb24u"},

  // ==================== 2. SYSTÈME INSTITUTIONNEL (6 questions) ====================
  
  {
    id: 12,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Démocratie et droit de vote",
    question: "UXVlbCBlc3QgbGUgbW9kZSBkZSBzY3J1dGluIHBvdXIgw6lsaXJlIGxlIFByw6lzaWRlbnQgZGUgbGEgUsOpcHVibGlxdWUgPw==",
    options: [
      "U2NydXRpbiBwcm9wb3J0aW9ubmVs",
      "U3VmZnJhZ2UgdW5pdmVyc2VsIGRpcmVjdCDDoCBkZXV4IHRvdXJz",
      "w4lsZWN0aW9uIHBhciBsZXMgZMOpcHV0w6lz",
      "VGlyYWdlIGF1IHNvcnQ="
    ],
    correctHash: hashAnswer(12, 1),
    explication: "TGUgUHLDqXNpZGVudCBkZSBsYSBSw6lwdWJsaXF1ZSBlc3Qgw6lsdSBhdSBzdWZmcmFnZSB1bml2ZXJzZWwgZGlyZWN0IMOgIGRldXggdG91cnMuIFNpIGF1Y3VuIGNhbmRpZGF0IG4nb2J0aWVudCBsYSBtYWpvcml0w6kgYWJzb2x1ZSBhdSBwcmVtaWVyIHRvdXIsIHVuIHNlY29uZCB0b3VyIGVzdCBvcmdhbmlzw6ku"},
  {
    id: 13,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Démocratie et droit de vote",
    question: "TGVzIHPDqW5hdGV1cnMgc29udCDDqWx1cyBwYXIgOg==",
    options: [
      "TGVzIGNpdG95ZW5zIGRpcmVjdGVtZW50",
      "TGVzIGdyYW5kcyDDqWxlY3RldXJzICjDqWx1cyBsb2NhdXggcHJpbmNpcGFsZW1lbnQp",
      "TGUgUHLDqXNpZGVudCBkZSBsYSBSw6lwdWJsaXF1ZQ==",
      "TGVzIGTDqXB1dMOpcw=="
    ],
    correctHash: hashAnswer(13, 1),
    explication: "TGVzIHPDqW5hdGV1cnMgc29udCDDqWx1cyBhdSBzdWZmcmFnZSB1bml2ZXJzZWwgaW5kaXJlY3QgcGFyIGRlcyBncmFuZHMgw6lsZWN0ZXVycywgcHJpbmNpcGFsZW1lbnQgY29tcG9zw6lzIGQnw6lsdXMgbG9jYXV4IChtYWlyZXMsIGNvbnNlaWxsZXJzIG11bmljaXBhdXgsIGTDqXBhcnRlbWVudGF1eCBldCByw6lnaW9uYXV4KS4="},
  {
    id: 14,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Organisation de la République",
    question: "Q29tYmllbiB5IGEtdC1pbCBkZSByw6lnaW9ucyBlbiBGcmFuY2UgbcOpdHJvcG9saXRhaW5lID8=",
    options: [
      "MTA=",
      "MTI=",
      "MTM=",
      "MjI="
    ],
    correctHash: hashAnswer(14, 2),
    explication: "RGVwdWlzIGxhIHLDqWZvcm1lIHRlcnJpdG9yaWFsZSBkZSAyMDE2LCBsYSBGcmFuY2UgbcOpdHJvcG9saXRhaW5lIGNvbXB0ZSAxMyByw6lnaW9ucy4gQXZlYyBsZXMgNSByw6lnaW9ucyBkJ291dHJlLW1lciwgbGEgRnJhbmNlIGNvbXB0ZSAxOCByw6lnaW9ucyBhdSB0b3RhbC4="},
  {
    id: 15,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Organisation de la République",
    question: "UXVpIHJlcHLDqXNlbnRlIGwnw4l0YXQgZGFucyBsZSBkw6lwYXJ0ZW1lbnQgPw==",
    options: [
      "TGUgbWFpcmU=",
      "TGUgZMOpcHV0w6k=",
      "TGUgcHLDqWZldA==",
      "TGUgcHLDqXNpZGVudCBkdSBjb25zZWlsIGTDqXBhcnRlbWVudGFs"
    ],
    correctHash: hashAnswer(15, 2),
    explication: "TGUgcHLDqWZldCBlc3QgbGUgcmVwcsOpc2VudGFudCBkZSBsJ8OJdGF0IGRhbnMgbGUgZMOpcGFydGVtZW50LiBJbCBlc3Qgbm9tbcOpIHBhciBsZSBQcsOpc2lkZW50IGRlIGxhIFLDqXB1YmxpcXVlIGV0IGRpcmlnZSBsZXMgc2VydmljZXMgZGUgbCfDiXRhdCBhdSBuaXZlYXUgbG9jYWwu"},
  {
    id: 16,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Collectivités territoriales",
    question: "UXVlbGxlIGNvbGxlY3Rpdml0w6kgZ8OocmUgbGVzIGNvbGzDqGdlcyA/",
    options: [
      "TGEgY29tbXVuZQ==",
      "TGUgZMOpcGFydGVtZW50",
      "TGEgcsOpZ2lvbg==",
      "TCfDiXRhdA=="
    ],
    correctHash: hashAnswer(16, 1),
    explication: "TGVzIGTDqXBhcnRlbWVudHMgb250IGxhIHJlc3BvbnNhYmlsaXTDqSBkZSBsYSBjb25zdHJ1Y3Rpb24sIGRlIGwnZW50cmV0aWVuIGV0IGR1IGZvbmN0aW9ubmVtZW50IGRlcyBjb2xsw6hnZXMuIExlcyByw6lnaW9ucyBnw6hyZW50IGxlcyBseWPDqWVzIGV0IGxlcyBjb21tdW5lcyBsZXMgw6ljb2xlcy4="},
  {
    id: 17,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Institutions européennes",
    question: "RGVwdWlzIHF1YW5kIGxhIEZyYW5jZSBlc3QtZWxsZSBtZW1icmUgZGUgbCdVbmlvbiBldXJvcMOpZW5uZSA/",
    options: [
      "MTk0NQ==",
      "MTk1Nw==",
      "MTk5Mg==",
      "MjAwMg=="
    ],
    correctHash: hashAnswer(17, 1),
    explication: "TGEgRnJhbmNlIGVzdCBtZW1icmUgZm9uZGF0ZXVyIGRlIGwnVW5pb24gZXVyb3DDqWVubmUgZGVwdWlzIGxlIHRyYWl0w6kgZGUgUm9tZSBlbiAxOTU3LCBxdWkgYSBjcsOpw6kgbGEgQ29tbXVuYXV0w6kgw6ljb25vbWlxdWUgZXVyb3DDqWVubmUgKENFRSku"},

  // ==================== 3. DROITS ET DEVOIRS (11 questions) ====================
  
  {
    id: 18,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits fondamentaux",
    question: "TGUgZHJvaXQgZGUgZ3LDqHZlIGVuIEZyYW5jZSBlc3QgOg==",
    options: [
      "SW50ZXJkaXQgZGFucyB0b3VzIGxlcyBjYXM=",
      "R2FyYW50aSBwYXIgbGEgQ29uc3RpdHV0aW9u",
      "QXV0b3Jpc8OpIHNldWxlbWVudCBkYW5zIGxlIHByaXbDqQ==",
      "UsOpc2VydsOpIGF1eCBmb25jdGlvbm5haXJlcw=="
    ],
    correctHash: hashAnswer(18, 1),
    explication: "TGUgZHJvaXQgZGUgZ3LDqHZlIGVzdCBnYXJhbnRpIHBhciBsYSBDb25zdGl0dXRpb24gZnJhbsOnYWlzZSBkZXB1aXMgMTk0Ni4gSWwgcGVybWV0IGF1eCBzYWxhcmnDqXMgZGUgY2Vzc2VyIGxlIHRyYXZhaWwgcG91ciBkw6lmZW5kcmUgbGV1cnMgcmV2ZW5kaWNhdGlvbnMgcHJvZmVzc2lvbm5lbGxlcy4="},
  {
    id: 19,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits fondamentaux",
    question: "RW4gRnJhbmNlLCBsYSBwcm9wcmnDqXTDqSBwcml2w6llIGVzdCA6",
    options: [
      "SW50ZXJkaXRl",
      "VW4gZHJvaXQgcHJvdMOpZ8OpIHBhciBsYSBsb2k=",
      "UsOpc2VydsOpZSBhdXggY2l0b3llbnMgZnJhbsOnYWlzIHVuaXF1ZW1lbnQ=",
      "TGltaXTDqWUgw6AgMTAgYW5z"
    ],
    correctHash: hashAnswer(19, 1),
    explication: "TGUgZHJvaXQgZGUgcHJvcHJpw6l0w6kgZXN0IHVuIGRyb2l0IGZvbmRhbWVudGFsIHByb3TDqWfDqSBwYXIgbGEgRMOpY2xhcmF0aW9uIGRlcyBkcm9pdHMgZGUgbCdob21tZSBldCBkdSBjaXRveWVuIGRlIDE3ODkuIElsIGVzdCBpbnZpb2xhYmxlIGV0IHNhY3LDqS4="},
  {
    id: 20,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits fondamentaux",
    question: "TGEgbGliZXJ0w6kgZGUgcsOpdW5pb24gc2lnbmlmaWUgcXVlIDo=",
    options: [
      "T24gbmUgcGV1dCBqYW1haXMgc2UgcsOpdW5pcg==",
      "T24gcGV1dCBzZSByw6l1bmlyIGxpYnJlbWVudCBwb3VyIGRlcyBtb3RpZnMgcGFjaWZpcXVlcw==",
      "SWwgZmF1dCB1bmUgYXV0b3Jpc2F0aW9uIHBvdXIgdG91dGUgcsOpdW5pb24=",
      "T24gbmUgcGV1dCBzZSByw6l1bmlyIHF1ZSBkYW5zIGRlcyBsaWV1eCBwdWJsaWNz"
    ],
    correctHash: hashAnswer(20, 1),
    explication: "TGEgbGliZXJ0w6kgZGUgcsOpdW5pb24gcGVybWV0IGF1eCBjaXRveWVucyBkZSBzZSByYXNzZW1ibGVyIHBhY2lmaXF1ZW1lbnQuIExlcyByw6l1bmlvbnMgcHJpdsOpZXMgc29udCBsaWJyZXMsIGxlcyByw6l1bmlvbnMgcHVibGlxdWVzIHBldXZlbnQgbsOpY2Vzc2l0ZXIgdW5lIGTDqWNsYXJhdGlvbi4="},
  {
    id: 21,
    categorie: "Droits et devoirs",
    sousCategorie: "Devoirs du citoyen",
    question: "UG91cnF1b2kgcGFpZS10LW9uIGRlcyBpbXDDtHRzIGVuIEZyYW5jZSA/",
    options: [
      "UG91ciBlbnJpY2hpciBsJ8OJdGF0",
      "UG91ciBmaW5hbmNlciBsZXMgc2VydmljZXMgcHVibGljcyBldCBsYSBzb2xpZGFyaXTDqSBuYXRpb25hbGU=",
      "Qydlc3QgdW5lIHB1bml0aW9u",
      "UG91ciBwYXllciBsZXMgc2FsYWlyZXMgZGVzIHBvbGl0aWNpZW5zIHVuaXF1ZW1lbnQ="
    ],
    correctHash: hashAnswer(21, 1),
    explication: "TGVzIGltcMO0dHMgZmluYW5jZW50IGxlcyBzZXJ2aWNlcyBwdWJsaWNzICjDqWR1Y2F0aW9uLCBzYW50w6ksIHPDqWN1cml0w6kuLi4pLCBsZXMgaW5mcmFzdHJ1Y3R1cmVzIGV0IGxhIHNvbGlkYXJpdMOpIG5hdGlvbmFsZSAoYWlkZXMgc29jaWFsZXMsIHJldHJhaXRlcy4uLikuIEMnZXN0IHVuIGRldm9pciBjaXRveWVuLg=="},
  {
    id: 22,
    categorie: "Droits et devoirs",
    sousCategorie: "Devoirs du citoyen",
    question: "w4AgcGFydGlyIGRlIHF1ZWwgw6JnZSBwZXV0LW9uIHZvdGVyIGVuIEZyYW5jZSA/",
    options: [
      "MTYgYW5z",
      "MTggYW5z",
      "MjEgYW5z",
      "MjUgYW5z"
    ],
    correctHash: hashAnswer(22, 1),
    explication: "RW4gRnJhbmNlLCBsZSBkcm9pdCBkZSB2b3RlIGVzdCBhY2NvcmTDqSDDoCBwYXJ0aXIgZGUgMTggYW5zLiBDJ2VzdCBsJ8OiZ2UgZGUgbGEgbWFqb3JpdMOpIGNpdmlsZSBldCBwb2xpdGlxdWUsIMOpdGFibGkgZGVwdWlzIDE5NzQu"},
  {
    id: 23,
    categorie: "Droits et devoirs",
    sousCategorie: "Devoirs du citoyen",
    question: "TGUgc2VydmljZSBjaXZpcXVlIGVzdCA6",
    options: [
      "T2JsaWdhdG9pcmUgcG91ciB0b3Vz",
      "VW4gZW5nYWdlbWVudCB2b2xvbnRhaXJlIGF1IHNlcnZpY2UgZGUgbCdpbnTDqXLDqnQgZ8OpbsOpcmFs",
      "UsOpc2VydsOpIGF1eCBtaWxpdGFpcmVz",
      "VW5lIHB1bml0aW9uIGp1ZGljaWFpcmU="
    ],
    correctHash: hashAnswer(23, 1),
    explication: "TGUgc2VydmljZSBjaXZpcXVlIGVzdCB1biBlbmdhZ2VtZW50IHZvbG9udGFpcmUgZGUgNiDDoCAxMiBtb2lzIGF1IHNlcnZpY2UgZGUgbCdpbnTDqXLDqnQgZ8OpbsOpcmFsLCBvdXZlcnQgYXV4IGpldW5lcyBkZSAxNiDDoCAyNSBhbnMgKDMwIGFucyBwb3VyIGxlcyBoYW5kaWNhcMOpcyku"},
  {
    id: 24,
    categorie: "Droits et devoirs",
    sousCategorie: "Justice",
    question: "RW4gRnJhbmNlLCBsYSBqdXN0aWNlIGVzdCA6",
    options: [
      "UmVuZHVlIGF1IG5vbSBkdSBQcsOpc2lkZW50",
      "UmVuZHVlIGF1IG5vbSBkdSBwZXVwbGUgZnJhbsOnYWlz",
      "UmVuZHVlIGF1IG5vbSBkZSBsJ8OJZ2xpc2U=",
      "UmVuZHVlIGF1IG5vbSBkZXMganVnZXM="
    ],
    correctHash: hashAnswer(24, 1),
    explication: "TGEganVzdGljZSBlc3QgcmVuZHVlIGF1IG5vbSBkdSBwZXVwbGUgZnJhbsOnYWlzLiBDZXR0ZSBmb3JtdWxlIGZpZ3VyZSBzdXIgdG91cyBsZXMganVnZW1lbnRzIGV0IGTDqWNpc2lvbnMgZGUganVzdGljZSwgcmFwcGVsYW50IHF1ZSBsZSBwb3V2b2lyIGp1ZGljaWFpcmUgw6ltYW5lIGR1IHBldXBsZS4="},
  {
    id: 25,
    categorie: "Droits et devoirs",
    sousCategorie: "Justice",
    question: "UXVlbCBlc3QgbGUgcsO0bGUgZCd1biBhdm9jYXQgPw==",
    options: [
      "SnVnZXIgbGVzIGFjY3Vzw6lz",
      "RMOpZmVuZHJlIGV0IGNvbnNlaWxsZXIgc29uIGNsaWVudA==",
      "QXJyw6p0ZXIgbGVzIGNyaW1pbmVscw==",
      "RMOpY2lkZXIgZGUgbGEgcGVpbmU="
    ],
    correctHash: hashAnswer(25, 1),
    explication: "TCdhdm9jYXQgZMOpZmVuZCBldCBjb25zZWlsbGUgc29uIGNsaWVudCBkYW5zIHNlcyBkw6ltYXJjaGVzIGp1cmlkaXF1ZXMuIElsIGFzc3VyZSBsYSBkw6lmZW5zZSBkZSBzZXMgZHJvaXRzIGRldmFudCBsYSBqdXN0aWNlIGV0IHBldXQgbGUgcmVwcsOpc2VudGVyIGF1IHRyaWJ1bmFsLg=="},
  {
    id: 26,
    categorie: "Droits et devoirs",
    sousCategorie: "Défense nationale",
    question: "TGUgc2VydmljZSBtaWxpdGFpcmUgZW4gRnJhbmNlIGVzdCA6",
    options: [
      "T2JsaWdhdG9pcmUgcG91ciB0b3Vz",
      "U3VzcGVuZHUgZGVwdWlzIDE5OTcsIHJlbXBsYWPDqSBwYXIgdW5lIEpvdXJuw6llIETDqWZlbnNlIGV0IENpdG95ZW5uZXTDqQ==",
      "UsOpc2VydsOpIGF1eCB2b2xvbnRhaXJlcyDDqXRyYW5nZXJz",
      "T2JsaWdhdG9pcmUganVzcXUnw6AgMzAgYW5z"
    ],
    correctHash: hashAnswer(26, 1),
    explication: "TGUgc2VydmljZSBtaWxpdGFpcmUgb2JsaWdhdG9pcmUgYSDDqXTDqSBzdXNwZW5kdSBlbiAxOTk3LiBJbCBlc3QgcmVtcGxhY8OpIHBhciBsYSBKb3VybsOpZSBEw6lmZW5zZSBldCBDaXRveWVubmV0w6kgKEpEQyksIG9ibGlnYXRvaXJlIHBvdXIgdG91cyBsZXMgamV1bmVzIEZyYW7Dp2Fpcy4="},
  {
    id: 27,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits sociaux",
    question: "TGEgU8OpY3VyaXTDqSBzb2NpYWxlIGVuIEZyYW5jZSBnYXJhbnRpdCA6",
    options: [
      "VW5pcXVlbWVudCBsZXMgcmV0cmFpdGVz",
      "TGEgcHJvdGVjdGlvbiBjb250cmUgbGVzIHJpc3F1ZXMgc29jaWF1eCAobWFsYWRpZSwgdmllaWxsZXNzZSwgZmFtaWxsZS4uLik=",
      "U2V1bGVtZW50IGwnYXNzdXJhbmNlIGNow7RtYWdl",
      "TGVzIHJldmVudXMgZGVzIGVudHJlcHJpc2Vz"
    ],
    correctHash: hashAnswer(27, 1),
    explication: "TGEgU8OpY3VyaXTDqSBzb2NpYWxlIHByb3TDqGdlIGNvbnRyZSBsZXMgcmlzcXVlcyBzb2NpYXV4IDogbWFsYWRpZSwgbWF0ZXJuaXTDqSwgaW52YWxpZGl0w6ksIHZpZWlsbGVzc2UsIGTDqWPDqHMsIGFjY2lkZW50cyBkdSB0cmF2YWlsIGV0IG1hbGFkaWVzIHByb2Zlc3Npb25uZWxsZXMuIEVsbGUgY29tcHJlbmQgYXVzc2kgbGVzIHByZXN0YXRpb25zIGZhbWlsaWFsZXMu"},
  {
    id: 28,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits sociaux",
    question: "RW4gRnJhbmNlLCBsJ8OpY29sZSBlc3Qgb2JsaWdhdG9pcmUgOg==",
    options: [
      "RGUgMyDDoCAxNiBhbnM=",
      "RGUgNiDDoCAxNCBhbnM=",
      "RGUgMyDDoCAxOCBhbnM=",
      "U2V1bGVtZW50IGp1c3F1J8OgIDEyIGFucw=="
    ],
    correctHash: hashAnswer(28, 0),
    explication: "TCdpbnN0cnVjdGlvbiBlc3Qgb2JsaWdhdG9pcmUgZW4gRnJhbmNlIGRlIDMgw6AgMTYgYW5zIGRlcHVpcyAyMDE5LiBFbGxlIHBldXQgw6p0cmUgZGlzcGVuc8OpZSDDoCBsJ8OpY29sZSBwdWJsaXF1ZSwgcHJpdsOpZSBvdSBkYW5zIGxhIGZhbWlsbGUgKGluc3RydWN0aW9uIGVuIGZhbWlsbGUpLg=="},

  // ==================== 4. HISTOIRE, GÉOGRAPHIE, CULTURE (8 questions) ====================
  
  {
    id: 29,
    categorie: "Histoire, géographie et culture de la France",
    sousCategorie: "Grandes dates",
    question: "UXVlIGNvbW3DqW1vcmUtdC1vbiBsZSAxNCBqdWlsbGV0ID8=",
    options: [
      "TGEgZmluIGRlIGxhIFNlY29uZGUgR3VlcnJlIG1vbmRpYWxl",
      "TGEgcHJpc2UgZGUgbGEgQmFzdGlsbGUgZW4gMTc4OQ==",
      "TGEgc2lnbmF0dXJlIGR1IHRyYWl0w6kgZGUgVmVyc2FpbGxlcw==",
      "TGEgbGliw6lyYXRpb24gZGUgUGFyaXM="
    ],
    correctHash: hashAnswer(29, 1),
    explication: "TGUgMTQganVpbGxldCBjb21tw6ltb3JlIGxhIHByaXNlIGRlIGxhIEJhc3RpbGxlIGxlIDE0IGp1aWxsZXQgMTc4OSwgw6l2w6luZW1lbnQgc3ltYm9saXF1ZSBkdSBkw6lidXQgZGUgbGEgUsOpdm9sdXRpb24gZnJhbsOnYWlzZS4gQydlc3QgbGEgZsOqdGUgbmF0aW9uYWxlLg=="},
  {
    id: 30,
    categorie: "Histoire, géographie et culture de la France",
    sousCategorie: "Grandes dates",
    question: "UXVlbCDDqXbDqW5lbWVudCBtYXJxdWUgbGUgZMOpYnV0IGRlIGxhIFZlIFLDqXB1YmxpcXVlID8=",
    options: [
      "TGEgUsOpdm9sdXRpb24gZnJhbsOnYWlzZQ==",
      "TCfDqWxlY3Rpb24gZHUgZ8OpbsOpcmFsIGRlIEdhdWxsZSBldCBsYSBDb25zdGl0dXRpb24gZGUgMTk1OA==",
      "TGEgZmluIGRlIGxhIFByZW1pw6hyZSBHdWVycmUgbW9uZGlhbGU=",
      "TGUgdHJhaXTDqSBkZSBSb21l"
    ],
    correctHash: hashAnswer(30, 1),
    explication: "TGEgVmUgUsOpcHVibGlxdWUgZMOpYnV0ZSBlbiAxOTU4IGF2ZWMgbCfDqWxlY3Rpb24gZHUgZ8OpbsOpcmFsIGRlIEdhdWxsZSBldCBsJ2Fkb3B0aW9uIGQndW5lIG5vdXZlbGxlIENvbnN0aXR1dGlvbiwgcXVpIHJlbmZvcmNlIGxlcyBwb3V2b2lycyBkdSBQcsOpc2lkZW50Lg=="},
  {
    id: 31,
    categorie: "Histoire, géographie et culture de la France",
    sousCategorie: "Grandes dates",
    question: "UXVhbmQgbGVzIGZlbW1lcyBvbnQtZWxsZXMgb2J0ZW51IGxlIGRyb2l0IGRlIHZvdGUgZW4gRnJhbmNlID8=",
    options: [
      "MTc4OQ==",
      "MTg0OA==",
      "MTk0NA==",
      "MTk3NA=="
    ],
    correctHash: hashAnswer(31, 2),
    explication: "TGVzIGZlbW1lcyBvbnQgb2J0ZW51IGxlIGRyb2l0IGRlIHZvdGUgZW4gRnJhbmNlIGVuIDE5NDQsIGdyw6JjZSDDoCB1bmUgb3Jkb25uYW5jZSBkdSBnw6luw6lyYWwgZGUgR2F1bGxlLiBFbGxlcyBvbnQgdm90w6kgcG91ciBsYSBwcmVtacOocmUgZm9pcyBlbiAxOTQ1Lg=="},
  {
    id: 32,
    categorie: "Histoire, géographie et culture de la France",
    sousCategorie: "Géographie",
    question: "UXVlbGxlIGVzdCBsYSBwbHVzIGdyYW5kZSB2aWxsZSBkZSBGcmFuY2UgPw==",
    options: [
      "TWFyc2VpbGxl",
      "THlvbg==",
      "UGFyaXM=",
      "VG91bG91c2U="
    ],
    correctHash: hashAnswer(32, 2),
    explication: "UGFyaXMgZXN0IGxhIGNhcGl0YWxlIGV0IGxhIHBsdXMgZ3JhbmRlIHZpbGxlIGRlIEZyYW5jZSBhdmVjIHBsdXMgZGUgMiBtaWxsaW9ucyBkJ2hhYml0YW50cyAoMTIgbWlsbGlvbnMgZGFucyBsJ2FnZ2xvbcOpcmF0aW9uKS4="},
  {
    id: 33,
    categorie: "Histoire, géographie et culture de la France",
    sousCategorie: "Géographie",
    question: "Q29tYmllbiBkZSBwYXlzIHBhcnRhZ2VudCB1bmUgZnJvbnRpw6hyZSB0ZXJyZXN0cmUgYXZlYyBsYSBGcmFuY2UgbcOpdHJvcG9saXRhaW5lID8=",
    options: [
      "NA==",
      "Ng==",
      "OA==",
      "MTA="
    ],
    correctHash: hashAnswer(33, 2),
    explication: "TGEgRnJhbmNlIG3DqXRyb3BvbGl0YWluZSBwYXJ0YWdlIHNlcyBmcm9udGnDqHJlcyBhdmVjIDggcGF5cyA6IEVzcGFnbmUsIEl0YWxpZSwgU3Vpc3NlLCBBbGxlbWFnbmUsIEx1eGVtYm91cmcsIEJlbGdpcXVlLCBNb25hY28gZXQgQW5kb3JyZS4="},
  {
    id: 34,
    categorie: "Histoire, géographie et culture de la France",
    sousCategorie: "Culture et patrimoine",
    question: "UXVlbCBtb251bWVudCBlc3QgbGUgc3ltYm9sZSBkZSBQYXJpcyA/",
    options: [
      "TGUgTG91dnJl",
      "Tm90cmUtRGFtZQ==",
      "TGEgdG91ciBFaWZmZWw=",
      "TCdBcmMgZGUgVHJpb21waGU="
    ],
    correctHash: hashAnswer(34, 2),
    explication: "TGEgdG91ciBFaWZmZWwgZXN0IGxlIG1vbnVtZW50IGxlIHBsdXMgZW1ibMOpbWF0aXF1ZSBkZSBQYXJpcy4gQ29uc3RydWl0ZSBwYXIgR3VzdGF2ZSBFaWZmZWwgcG91ciBsJ0V4cG9zaXRpb24gdW5pdmVyc2VsbGUgZGUgMTg4OSwgZWxsZSBtZXN1cmUgMzMwIG3DqHRyZXMu"},
  {
    id: 35,
    categorie: "Histoire, géographie et culture de la France",
    sousCategorie: "Culture et patrimoine",
    question: "UXVlbCBtdXPDqWUgcGFyaXNpZW4gZXN0IGxlIHBsdXMgdmlzaXTDqSBhdSBtb25kZSA/",
    options: [
      "TGUgbXVzw6llIGQnT3JzYXk=",
      "TGUgQ2VudHJlIFBvbXBpZG91",
      "TGUgbXVzw6llIGR1IExvdXZyZQ==",
      "TGUgbXVzw6llIFJvZGlu"
    ],
    correctHash: hashAnswer(35, 2),
    explication: "TGUgbXVzw6llIGR1IExvdXZyZSBlc3QgbGUgbXVzw6llIGxlIHBsdXMgdmlzaXTDqSBhdSBtb25kZSBhdmVjIHByw6hzIGRlIDEwIG1pbGxpb25zIGRlIHZpc2l0ZXVycyBwYXIgYW4uIElsIGFicml0ZSBub3RhbW1lbnQgTGEgSm9jb25kZSBkZSBMw6lvbmFyZCBkZSBWaW5jaS4="},
  {
    id: 36,
    categorie: "Histoire, géographie et culture de la France",
    sousCategorie: "Personnalités",
    question: "UXVpIMOpdGFpdCBWaWN0b3IgSHVnbyA/",
    options: [
      "VW4gcGVpbnRyZSBpbXByZXNzaW9ubmlzdGU=",
      "VW4gw6ljcml2YWluIGV0IHBvw6h0ZSBmcmFuw6dhaXMgbWFqZXVy",
      "VW4gZ8OpbsOpcmFsIGRlIGxhIFLDqXZvbHV0aW9u",
      "VW4gc2NpZW50aWZpcXVl"
    ],
    correctHash: hashAnswer(36, 1),
    explication: "VmljdG9yIEh1Z28gKDE4MDItMTg4NSkgZXN0IGwndW4gZGVzIHBsdXMgZ3JhbmRzIMOpY3JpdmFpbnMgZnJhbsOnYWlzLiBJbCBlc3QgbCdhdXRldXIgZGVzIE1pc8OpcmFibGVzLCBkZSBOb3RyZS1EYW1lIGRlIFBhcmlzIGV0IGRlIG5vbWJyZXV4IHBvw6htZXMgZW5nYWfDqXMu"},

  // ==================== 5. VIVRE EN FRANCE (4 questions) ====================
  
  {
    id: 37,
    categorie: "Vivre en France",
    sousCategorie: "Vie quotidienne",
    question: "TGUgbnVtw6lybyBkJ3VyZ2VuY2UgZXVyb3DDqWVuIGVzdCBsZSA6",
    options: [
      "MTU=",
      "MTc=",
      "MTg=",
      "MTEy"
    ],
    correctHash: hashAnswer(37, 3),
    explication: "TGUgMTEyIGVzdCBsZSBudW3DqXJvIGQndXJnZW5jZSBldXJvcMOpZW4gZ3JhdHVpdCwgYWNjZXNzaWJsZSBkYW5zIHRvdXMgbGVzIHBheXMgZGUgbCdVbmlvbiBldXJvcMOpZW5uZS4gRW4gRnJhbmNlLCBpbCBleGlzdGUgYXVzc2kgbGUgMTUgKFNBTVUpLCAxNyAocG9saWNlKSBldCAxOCAocG9tcGllcnMpLg=="},
  {
    id: 38,
    categorie: "Vivre en France",
    sousCategorie: "Vie quotidienne",
    question: "UG91ciBsb3VlciB1biBsb2dlbWVudCBlbiBGcmFuY2UsIG9uIGRlbWFuZGUgZ8OpbsOpcmFsZW1lbnQgOg==",
    options: [
      "VW5pcXVlbWVudCBkZSBsJ2FyZ2VudA==",
      "VW4gZG9zc2llciBhdmVjIGp1c3RpZmljYXRpZnMgZGUgcmV2ZW51cyBldCBkJ2lkZW50aXTDqQ==",
      "UmllbiBkdSB0b3V0",
      "VW5lIGF1dG9yaXNhdGlvbiBkdSBtYWlyZQ=="
    ],
    correctHash: hashAnswer(38, 1),
    explication: "UG91ciBsb3VlciB1biBsb2dlbWVudCwgaWwgZmF1dCBjb25zdGl0dWVyIHVuIGRvc3NpZXIgY29tcHJlbmFudCBwacOoY2UgZCdpZGVudGl0w6ksIGp1c3RpZmljYXRpZnMgZGUgcmV2ZW51cywgZ2FyYW50aWVzLi4uIExlIHByb3ByacOpdGFpcmUgdsOpcmlmaWUgbGEgc29sdmFiaWxpdMOpIGR1IGxvY2F0YWlyZS4="},
  {
    id: 39,
    categorie: "Vivre en France",
    sousCategorie: "Vie citoyenne",
    question: "RGFucyB1biBpbW1ldWJsZSwgbGVzIGTDqWNpc2lvbnMgY29sbGVjdGl2ZXMgc29udCBwcmlzZXMgOg==",
    options: [
      "UGFyIGxlIHByb3ByacOpdGFpcmUgdW5pcXVlbWVudA==",
      "RW4gYXNzZW1ibMOpZSBnw6luw6lyYWxlIGRlcyBjb3Byb3ByacOpdGFpcmVz",
      "UGFyIGxlIG1haXJl",
      "UGFyIGxhIHBvbGljZQ=="
    ],
    correctHash: hashAnswer(39, 1),
    explication: "RGFucyB1bmUgY29wcm9wcmnDqXTDqSwgbGVzIGTDqWNpc2lvbnMgaW1wb3J0YW50ZXMgKHRyYXZhdXgsIGNoYXJnZXMuLi4pIHNvbnQgcHJpc2VzIGVuIGFzc2VtYmzDqWUgZ8OpbsOpcmFsZSBvw7kgdG91cyBsZXMgY29wcm9wcmnDqXRhaXJlcyBwZXV2ZW50IHZvdGVyLg=="},
  {
    id: 40,
    categorie: "Vivre en France",
    sousCategorie: "Santé",
    question: "UG91ciBjb25zdWx0ZXIgdW4gbcOpZGVjaW4gZW4gRnJhbmNlLCBpbCBmYXV0IDo=",
    options: [
      "w4p0cmUgcmljaGUgb2JsaWdhdG9pcmVtZW50",
      "QXZvaXIgdW5lIGNhcnRlIFZpdGFsZSBvdSDDqnRyZSBhZmZpbGnDqSDDoCBsYSBTw6ljdXJpdMOpIHNvY2lhbGU=",
      "QXZvaXIgcGx1cyBkZSA0MCBhbnM=",
      "T2J0ZW5pciBsJ2F1dG9yaXNhdGlvbiBkZSBsYSBtYWlyaWU="
    ],
    correctHash: hashAnswer(40, 1),
    explication: "UG91ciBiw6luw6lmaWNpZXIgZHUgcmVtYm91cnNlbWVudCBkZXMgc29pbnMsIGlsIGZhdXQgw6p0cmUgYWZmaWxpw6kgw6AgbGEgU8OpY3VyaXTDqSBzb2NpYWxlIGV0IGRpc3Bvc2VyIGQndW5lIGNhcnRlIFZpdGFsZS4gTGVzIHBlcnNvbm5lcyBzYW5zIHJlc3NvdXJjZXMgcGV1dmVudCBiw6luw6lmaWNpZXIgZGUgbCdhaWRlIG3DqWRpY2FsZSBkJ8OJdGF0Lg=="}
];

// Fonction pour vérifier une réponse
export function verifyAnswerExam3(questionId: number, userAnswerIndex: number, correctHash: string): boolean {
  return hashAnswer(questionId, userAnswerIndex) === correctHash;
}

// Fonction pour trouver l'index correct à partir du hash
export function findCorrectIndexExam3(questionId: number, correctHash: string): number {
  for (let i = 0; i < 4; i++) {
    if (hashAnswer(questionId, i) === correctHash) {
      return i;
    }
  }
  return 0;
}

export const EXAMEN_3: ExamenBlanc = {
  numero: 3,
  titre: "Examen blanc #3",
  description: "40 questions en conditions réelles d'examen",
  questions: questions.map(q => decodeQuestion(q)),
  dureeMinutes: 45,
  totalQuestions: 40
};
