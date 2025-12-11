import { ExamenBlanc, Question, hashAnswer, decodeQuestion } from './types';

// =====================================================
// EXAMEN BLANC #2 - 40 QUESTIONS
// Répartition officielle :
// 1. Principes et valeurs (11 questions)
// 2. Système institutionnel (6 questions)
// 3. Droits et devoirs (11 questions)
// 4. Histoire/géographie/culture (8 questions)
// 5. Vivre en France (4 questions)
// =====================================================

const EXAM_NUMBER = 2;

const questions: Question[] = [
  // ==================== 1. PRINCIPES ET VALEURS (11 questions) ====================
  
  {
    id: 1,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Devise et symboles",
    question: "UXVlbCBhbmltYWwgc3ltYm9saXNlIGxhIEZyYW5jZSA/",
    options: [
      "TCdhaWdsZQ==",
      "TGUgY29x",
      "TGUgbGlvbg==",
      "TGUgdGF1cmVhdQ=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 1, 1),
    explication: "TGUgY29xIGdhdWxvaXMgZXN0IGwndW4gZGVzIHN5bWJvbGVzIGRlIGxhIEZyYW5jZS4gSWwgcmVwcsOpc2VudGUgbGEgdmlnaWxhbmNlIGV0IGxlIGNvdXJhZ2UuIElsIGZpZ3VyZSBub3RhbW1lbnQgc3VyIGxlcyBtYWlsbG90cyBkZXMgw6lxdWlwZXMgbmF0aW9uYWxlcyBzcG9ydGl2ZXMu"},
  {
    id: 2,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Devise et symboles",
    question: "TWFyaWFubmUgZXN0IGxlIHN5bWJvbGUgZGUgOg==",
    options: [
      "TGEgbW9uYXJjaGllIGZyYW7Dp2Fpc2U=",
      "TGEgUsOpcHVibGlxdWUgZnJhbsOnYWlzZQ==",
      "TCdFbXBpcmUgZnJhbsOnYWlz",
      "TGEgcsOpZ2lvbiBwYXJpc2llbm5l"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 2, 1),
    explication: "TWFyaWFubmUgZXN0IGxhIHJlcHLDqXNlbnRhdGlvbiBzeW1ib2xpcXVlIGRlIGxhIFLDqXB1YmxpcXVlIGZyYW7Dp2Fpc2UuIFNvbiBidXN0ZSBmaWd1cmUgZGFucyB0b3V0ZXMgbGVzIG1haXJpZXMuIEVsbGUgcG9ydGUgc291dmVudCB1biBib25uZXQgcGhyeWdpZW4sIHN5bWJvbGUgZGUgbGliZXJ0w6ku"},
  {
    id: 3,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Devise et symboles",
    question: "UXVlbGxlIGVzdCBsYSBmw6p0ZSBuYXRpb25hbGUgZnJhbsOnYWlzZSA/",
    options: [
      "TGUgMWVyIG1haQ==",
      "TGUgOCBtYWk=",
      "TGUgMTQganVpbGxldA==",
      "TGUgMTEgbm92ZW1icmU="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 3, 2),
    explication: "TGUgMTQganVpbGxldCBlc3QgbGEgZsOqdGUgbmF0aW9uYWxlIGZyYW7Dp2Fpc2UuIEVsbGUgY29tbcOpbW9yZSBsYSBwcmlzZSBkZSBsYSBCYXN0aWxsZSBsZSAxNCBqdWlsbGV0IDE3ODkgZXQgbGEgRsOqdGUgZGUgbGEgRsOpZMOpcmF0aW9uIGR1IDE0IGp1aWxsZXQgMTc5MC4="},
  {
    id: 4,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Laïcité",
    question: "RGFucyB1biDDqXRhYmxpc3NlbWVudCBzY29sYWlyZSBwdWJsaWMsIHVuIGVuc2VpZ25hbnQgcGV1dC1pbCBwb3J0ZXIgZGVzIHNpZ25lcyByZWxpZ2lldXggPw==",
    options: [
      "T3VpLCBjJ2VzdCBzYSBsaWJlcnTDqQ==",
      "Tm9uLCBpbCBkb2l0IHJlc3BlY3RlciBsZSBwcmluY2lwZSBkZSBuZXV0cmFsaXTDqQ==",
      "T3VpLCBzJ2lsIGVuc2VpZ25lIGxhIHJlbGlnaW9u",
      "Q2VsYSBkw6lwZW5kIGRlIGwnw6ljb2xl"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 4, 1),
    explication: "TGVzIGVuc2VpZ25hbnRzLCBlbiB0YW50IHF1J2FnZW50cyBwdWJsaWNzLCBkb2l2ZW50IHJlc3BlY3RlciBsZSBwcmluY2lwZSBkZSBuZXV0cmFsaXTDqSBldCBuZSBwZXV2ZW50IGFmZmljaGVyIGxldXJzIGNvbnZpY3Rpb25zIHJlbGlnaWV1c2VzIGRhbnMgbCdleGVyY2ljZSBkZSBsZXVycyBmb25jdGlvbnMu"},
  {
    id: 5,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Laïcité",
    question: "TGEgbGHDr2NpdMOpIGdhcmFudGl0IDo=",
    options: [
      "TCdpbnRlcmRpY3Rpb24gZGVzIHJlbGlnaW9ucw==",
      "TGEgbGliZXJ0w6kgZGUgY3VsdGUgZXQgbGEgbmV1dHJhbGl0w6kgZGUgbCfDiXRhdA==",
      "TGEgcHJpb3JpdMOpIMOgIGxhIHJlbGlnaW9uIGNhdGhvbGlxdWU=",
      "TCdhdGjDqWlzbWUgb2JsaWdhdG9pcmU="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 5, 1),
    explication: "TGEgbGHDr2NpdMOpIGdhcmFudGl0IGxhIGxpYmVydMOpIGRlIGNvbnNjaWVuY2UsIGxlIGxpYnJlIGV4ZXJjaWNlIGRlcyBjdWx0ZXMgZXQgbGEgbmV1dHJhbGl0w6kgZGUgbCfDiXRhdCB2aXMtw6AtdmlzIGRlcyByZWxpZ2lvbnMsIGRhbnMgbGUgcmVzcGVjdCBkZSBsJ29yZHJlIHB1YmxpYy4="},
  {
    id: 6,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Égalité",
    question: "UXVlbGxlIGZvcm1lIGRlIGRpc2NyaW1pbmF0aW9uIGVzdCBpbnRlcmRpdGUgZW4gRnJhbmNlID8=",
    options: [
      "VW5pcXVlbWVudCBsYSBkaXNjcmltaW5hdGlvbiByYWNpYWxl",
      "VG91dGVzIGxlcyBmb3JtZXMgZGUgZGlzY3JpbWluYXRpb24=",
      "VW5pcXVlbWVudCBsYSBkaXNjcmltaW5hdGlvbiByZWxpZ2lldXNl",
      "QXVjdW5lIGRpc2NyaW1pbmF0aW9uIG4nZXN0IGludGVyZGl0ZQ=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 6, 1),
    explication: "TGEgbG9pIGZyYW7Dp2Fpc2UgaW50ZXJkaXQgdG91dGVzIGxlcyBmb3JtZXMgZGUgZGlzY3JpbWluYXRpb24gOiBvcmlnaW5lLCBzZXhlLCBzaXR1YXRpb24gZGUgZmFtaWxsZSwgb3JpZW50YXRpb24gc2V4dWVsbGUsIMOiZ2UsIG9waW5pb25zIHBvbGl0aXF1ZXMsIGFjdGl2aXTDqXMgc3luZGljYWxlcywgcmVsaWdpb24sIGFwcGFyZW5jZSBwaHlzaXF1ZSwgaGFuZGljYXAsIGV0Yy4="},
  {
    id: 7,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation",
    question: "VW4gY29tbWVyw6dhbnQgcmVmdXNlIGRlIHNlcnZpciB1bmUgcGVyc29ubmUgZW4gcmFpc29uIGRlIHNvbiBvcmlnaW5lLiBRdWVsbGUgZXN0IGxhIHNhbmN0aW9uID8=",
    options: [
      "U2ltcGxlIGF2ZXJ0aXNzZW1lbnQ=",
      "QW1lbmRlIGRlIDUwIGV1cm9z",
      "SnVzcXUnw6AgMyBhbnMgZGUgcHJpc29uIGV0IDQ1IDAwMCDigqwgZCdhbWVuZGU=",
      "QXVjdW5lIHNhbmN0aW9uLCBjJ2VzdCBsw6lnYWw="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 7, 2),
    explication: "UmVmdXNlciB1biBiaWVuIG91IHVuIHNlcnZpY2UgZW4gcmFpc29uIGRlIGwnb3JpZ2luZSBlc3QgdW5lIGRpc2NyaW1pbmF0aW9uIHB1bmllIHBhciBsZSBDb2RlIHDDqW5hbCA6IGp1c3F1J8OgIDMgYW5zIGRlIHByaXNvbiBldCA0NSAwMDAg4oKsIGQnYW1lbmRlLg=="},
  {
    id: 8,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation",
    question: "RW4gRnJhbmNlLCB1bmUgZmVtbWUgbWFyacOpZSBkb2l0LWVsbGUgb2J0ZW5pciBsJ2F1dG9yaXNhdGlvbiBkZSBzb24gbWFyaSBwb3VyIHRyYXZhaWxsZXIgPw==",
    options: [
      "T3VpLCB0b3Vqb3Vycw==",
      "Tm9uLCBlbGxlIGEgbGEgbcOqbWUgbGliZXJ0w6kgcXVlIGxlcyBob21tZXM=",
      "T3VpLCBzaSBlbGxlIGEgZGVzIGVuZmFudHM=",
      "Q2VsYSBkw6lwZW5kIGR1IGNvbnRyYXQgZGUgbWFyaWFnZQ=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 8, 1),
    explication: "RGVwdWlzIDE5NjUsIHVuZSBmZW1tZSBtYXJpw6llIHBldXQgZXhlcmNlciB1bmUgcHJvZmVzc2lvbiBzYW5zIGxlIGNvbnNlbnRlbWVudCBkZSBzb24gbWFyaS4gTCfDqWdhbGl0w6kgZmVtbWVzLWhvbW1lcyBlc3QgdW4gcHJpbmNpcGUgY29uc3RpdHV0aW9ubmVsLg=="},
  {
    id: 9,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation",
    question: "Vm91cyB2b3lleiBxdWVscXUndW4gdGFndWVyIHVuIG1vbnVtZW50IHB1YmxpYy4gUXVlIGRldmV6LXZvdXMgZmFpcmUgPw==",
    options: [
      "UmllbiwgY2Ugbidlc3QgcGFzIHZvdHJlIHByb2Jsw6htZQ==",
      "UHJlbmRyZSB1bmUgcGhvdG8gZXQgYXBwZWxlciBsYSBwb2xpY2UgKDE3KQ==",
      "QWlkZXIgbGEgcGVyc29ubmU=",
      "RmlsbWVyIGV0IHB1YmxpZXIgc3VyIGxlcyByw6lzZWF1eCBzb2NpYXV4"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 9, 1),
    explication: "TGEgZMOpZ3JhZGF0aW9uIGRlIGJpZW4gcHVibGljIGVzdCB1biBkw6lsaXQuIElsIGNvbnZpZW50IGQnYWxlcnRlciBsZXMgZm9yY2VzIGRlIGwnb3JkcmUgKDE3IG91IDExMikgZXQgw6l2ZW50dWVsbGVtZW50IGRlIHByZW5kcmUgZGVzIHBob3RvcyBjb21tZSBwcmV1dmVzLg=="},
  {
    id: 10,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation",
    question: "VW4gY29sbMOoZ3VlIGZhaXQgZGVzIHJlbWFycXVlcyBzZXhpc3Rlcy4gUXVlIGRpdCBsYSBsb2kgPw==",
    options: [
      "Qydlc3Qgbm9ybWFsLCBjJ2VzdCBkZSBsJ2h1bW91cg==",
      "Qydlc3QgaW50ZXJkaXQsIGMnZXN0IGR1IGhhcmPDqGxlbWVudA==",
      "Qydlc3QgYXV0b3Jpc8OpIGVudHJlIGNvbGzDqGd1ZXM=",
      "Q2VsYSBkw6lwZW5kIGRlIGwnZW50cmVwcmlzZQ=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 10, 1),
    explication: "TGVzIHByb3BvcyBzZXhpc3RlcyBjb25zdGl0dWVudCBkdSBoYXJjw6hsZW1lbnQgc2V4dWVsIG91IG1vcmFsLCBpbnRlcmRpdCBwYXIgbGUgQ29kZSBkdSB0cmF2YWlsIGV0IGxlIENvZGUgcMOpbmFsLiBMZXMgc2FuY3Rpb25zIHBldXZlbnQgw6p0cmUgc8OpdsOocmVzLg=="},
  {
    id: 11,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Fraternité",
    question: "UXVlIHNpZ25pZmllIGxlIHByaW5jaXBlIGRlIGZyYXRlcm5pdMOpID8=",
    options: [
      "TCdvYmxpZ2F0aW9uIGQnw6p0cmUgYW1pIGF2ZWMgdG91dCBsZSBtb25kZQ==",
      "TGEgc29saWRhcml0w6kgZXQgbCdlbnRyYWlkZSBlbnRyZSB0b3VzIGxlcyBjaXRveWVucw==",
      "TCdvYsOpaXNzYW5jZSBhdXggYXV0b3JpdMOpcw==",
      "TGUgcmVzcGVjdCBkZXMgdHJhZGl0aW9ucyBmYW1pbGlhbGVz"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 11, 1),
    explication: "TGEgZnJhdGVybml0w6kgaW1wbGlxdWUgbGEgc29saWRhcml0w6kgZXQgbCdlbnRyYWlkZSBlbnRyZSB0b3VzIGxlcyBtZW1icmVzIGRlIGxhIHNvY2nDqXTDqSwgc2FucyBkaXN0aW5jdGlvbi4gQydlc3QgbGUgdHJvaXNpw6htZSBwaWxpZXIgZGUgbGEgZGV2aXNlIHLDqXB1YmxpY2FpbmUu"},

  // ==================== 2. SYSTÈME INSTITUTIONNEL (6 questions) ====================
  
  {
    id: 12,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Démocratie et droit de vote",
    question: "UG91ciB2b3RlciBlbiBGcmFuY2UsIGlsIGZhdXQgOg==",
    options: [
      "QXZvaXIgMTggYW5zIGV0IMOqdHJlIGluc2NyaXQgc3VyIGxlcyBsaXN0ZXMgw6lsZWN0b3JhbGVz",
      "QXZvaXIgMjEgYW5zIG1pbmltdW0=",
      "QXZvaXIgdW4gZGlwbMO0bWU=",
      "w4p0cmUgcHJvcHJpw6l0YWlyZQ=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 12, 0),
    explication: "UG91ciB2b3RlciBlbiBGcmFuY2UsIGlsIGZhdXQgYXZvaXIgMTggYW5zLCDDqnRyZSBkZSBuYXRpb25hbGl0w6kgZnJhbsOnYWlzZSwgam91aXIgZGUgc2VzIGRyb2l0cyBjaXZpbHMgZXQgcG9saXRpcXVlcywgZXQgw6p0cmUgaW5zY3JpdCBzdXIgbGVzIGxpc3RlcyDDqWxlY3RvcmFsZXMu"},
  {
    id: 13,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Démocratie et droit de vote",
    question: "TGVzIGTDqXB1dMOpcyBzb250IMOpbHVzIHBvdXIgOg==",
    options: [
      "MyBhbnM=",
      "NCBhbnM=",
      "NSBhbnM=",
      "NyBhbnM="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 13, 2),
    explication: "TGVzIGTDqXB1dMOpcyBkZSBsJ0Fzc2VtYmzDqWUgbmF0aW9uYWxlIHNvbnQgw6lsdXMgcG91ciA1IGFucyBhdSBzdWZmcmFnZSB1bml2ZXJzZWwgZGlyZWN0LiBJbHMgcGV1dmVudCDDqnRyZSByw6nDqWx1cyBzYW5zIGxpbWl0YXRpb24u"},
  {
    id: 14,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Organisation de la République",
    question: "UXVpIG5vbW1lIGxlIFByZW1pZXIgbWluaXN0cmUgPw==",
    options: [
      "TGVzIGTDqXB1dMOpcw==",
      "TGUgUHLDqXNpZGVudCBkZSBsYSBSw6lwdWJsaXF1ZQ==",
      "TGVzIGNpdG95ZW5zIHBhciB2b3Rl",
      "TGUgU8OpbmF0"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 14, 1),
    explication: "TGUgUHJlbWllciBtaW5pc3RyZSBlc3Qgbm9tbcOpIHBhciBsZSBQcsOpc2lkZW50IGRlIGxhIFLDqXB1YmxpcXVlLiBJbCBlc3QgbGUgY2hlZiBkdSBHb3V2ZXJuZW1lbnQgZXQgZGlyaWdlIGwnYWN0aW9uIGRlIGNlbHVpLWNpLg=="},
  {
    id: 15,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Organisation de la République",
    question: "TGUgQ29uc2VpbCBjb25zdGl0dXRpb25uZWwgdsOpcmlmaWUgOg==",
    options: [
      "TGVzIGltcMO0dHMgZGVzIGNpdG95ZW5z",
      "TGEgY29uZm9ybWl0w6kgZGVzIGxvaXMgw6AgbGEgQ29uc3RpdHV0aW9u",
      "TGVzIGRpcGzDtG1lcyBkZXMgZm9uY3Rpb25uYWlyZXM=",
      "TGVzIGJ1ZGdldHMgZGVzIGVudHJlcHJpc2Vz"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 15, 1),
    explication: "TGUgQ29uc2VpbCBjb25zdGl0dXRpb25uZWwgY29udHLDtGxlIGxhIGNvbmZvcm1pdMOpIGRlcyBsb2lzIMOgIGxhIENvbnN0aXR1dGlvbi4gSWwgdmVpbGxlIGF1IHJlc3BlY3QgZGUgY2VsbGUtY2kgZXQganVnZSBkZSBsYSByw6lndWxhcml0w6kgZGVzIMOpbGVjdGlvbnMgbmF0aW9uYWxlcy4="},
  {
    id: 16,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Collectivités territoriales",
    question: "UXVpIGRpcmlnZSB1bmUgY29tbXVuZSBlbiBGcmFuY2UgPw==",
    options: [
      "TGUgcHLDqWZldA==",
      "TGUgbWFpcmU=",
      "TGUgZMOpcHV0w6k=",
      "TGUgcHLDqXNpZGVudCBkdSBjb25zZWlsIHLDqWdpb25hbA=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 16, 1),
    explication: "TGUgbWFpcmUgZXN0IMOpbHUgcGFyIGxlIGNvbnNlaWwgbXVuaWNpcGFsIGV0IGRpcmlnZSBsYSBjb21tdW5lLiBJbCBlc3Qgw6AgbGEgZm9pcyBhZ2VudCBkZSBsJ8OJdGF0IGV0IHJlcHLDqXNlbnRhbnQgZGUgbGEgY29sbGVjdGl2aXTDqSBsb2NhbGUu"},
  {
    id: 17,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Institutions européennes",
    question: "UXVlbGxlIGVzdCBsYSBtb25uYWllIG9mZmljaWVsbGUgZGUgbGEgRnJhbmNlIGRlcHVpcyAyMDAyID8=",
    options: [
      "TGUgZnJhbmM=",
      "TCdldXJv",
      "TGUgZG9sbGFy",
      "TGEgbGl2cmU="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 17, 1),
    explication: "TCdldXJvIGVzdCBsYSBtb25uYWllIG9mZmljaWVsbGUgZGUgbGEgRnJhbmNlIGRlcHVpcyBsZSAxZXIgamFudmllciAyMDAyLCByZW1wbGHDp2FudCBsZSBmcmFuYyBmcmFuw6dhaXMuIEVsbGUgZXN0IHV0aWxpc8OpZSBwYXIgMjAgcGF5cyBkZSBsJ1VuaW9uIGV1cm9ww6llbm5lLg=="},

  // ==================== 3. DROITS ET DEVOIRS (11 questions) ====================
  
  {
    id: 18,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits fondamentaux",
    question: "TGEgbGliZXJ0w6kgZCdleHByZXNzaW9uIGVzdC1lbGxlIGFic29sdWUgZW4gRnJhbmNlID8=",
    options: [
      "T3VpLCBvbiBwZXV0IHRvdXQgZGlyZQ==",
      "Tm9uLCBlbGxlIGVzdCBsaW1pdMOpZSBwYXIgbGUgcmVzcGVjdCBkJ2F1dHJ1aSBldCBsJ29yZHJlIHB1YmxpYw==",
      "T3VpLCBzYXVmIHBvdXIgbGVzIHBvbGl0aWNpZW5z",
      "Tm9uLCBlbGxlIG4nZXhpc3RlIHBhcw=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 18, 1),
    explication: "TGEgbGliZXJ0w6kgZCdleHByZXNzaW9uIGVzdCB1biBkcm9pdCBmb25kYW1lbnRhbCBtYWlzIGVsbGUgYSBkZXMgbGltaXRlcyA6IGludGVyZGljdGlvbiBkZSBsJ2luanVyZSwgbGEgZGlmZmFtYXRpb24sIGwnaW5jaXRhdGlvbiDDoCBsYSBoYWluZSwgbCdhcG9sb2dpZSBkdSB0ZXJyb3Jpc21lLCBldGMu"},
  {
    id: 19,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits fondamentaux",
    question: "RW4gRnJhbmNlLCBsZSBkcm9pdCBkZSBncsOodmUgZXN0LWlsIGF1dG9yaXPDqSA/",
    options: [
      "Tm9uLCBjJ2VzdCBpbnRlcmRpdA==",
      "T3VpLCBjJ2VzdCB1biBkcm9pdCBjb25zdGl0dXRpb25uZWw=",
      "T3VpLCBtYWlzIHNldWxlbWVudCBwb3VyIGxlcyBmb25jdGlvbm5haXJlcw==",
      "Tm9uLCBzYXVmIGF1dG9yaXNhdGlvbiBkdSBwYXRyb24="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 19, 1),
    explication: "TGUgZHJvaXQgZGUgZ3LDqHZlIGVzdCByZWNvbm51IHBhciBsZSBQcsOpYW1idWxlIGRlIGxhIENvbnN0aXR1dGlvbiBkZSAxOTQ2LiBJbCBzJ2V4ZXJjZSBkYW5zIGxlIGNhZHJlIGRlcyBsb2lzIHF1aSBsZSByw6lnbGVtZW50ZW50LCBub3RhbW1lbnQgcG91ciBsZXMgc2VydmljZXMgcHVibGljcy4="},
  {
    id: 20,
    categorie: "Droits et devoirs",
    sousCategorie: "Devoirs du citoyen",
    question: "UXVlbCBlc3QgbGUgZGV2b2lyIGRlIHRvdXQgY2l0b3llbiBmcmFuw6dhaXMgPw==",
    options: [
      "UGF5ZXIgc2VzIGltcMO0dHM=",
      "Vm90ZXIgb2JsaWdhdG9pcmVtZW50",
      "UG9zc8OpZGVyIHVuZSB2b2l0dXJl",
      "w4p0cmUgZGlwbMO0bcOp"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 20, 0),
    explication: "UGF5ZXIgc2VzIGltcMO0dHMgZXN0IHVuIGRldm9pciBkZSB0b3V0IGNpdG95ZW4uIExlcyBpbXDDtHRzIGZpbmFuY2VudCBsZXMgc2VydmljZXMgcHVibGljcyA6IMOpZHVjYXRpb24sIHNhbnTDqSwgc8OpY3VyaXTDqSwgaW5mcmFzdHJ1Y3R1cmVzLCBldGMu"},
  {
    id: 21,
    categorie: "Droits et devoirs",
    sousCategorie: "Devoirs du citoyen",
    question: "TGUgc2VydmljZSBuYXRpb25hbCB1bml2ZXJzZWwgKFNOVSkgY29uY2VybmUgOg==",
    options: [
      "VG91cyBsZXMgamV1bmVzIGRlIDE1IMOgIDE3IGFucw==",
      "VW5pcXVlbWVudCBsZXMgZ2Fyw6dvbnM=",
      "VW5pcXVlbWVudCBsZXMgbWlsaXRhaXJlcw==",
      "TGVzIHBlcnNvbm5lcyBkZSBwbHVzIGRlIDI1IGFucw=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 21, 0),
    explication: "TGUgU2VydmljZSBOYXRpb25hbCBVbml2ZXJzZWwgKFNOVSkgcydhZHJlc3NlIGF1eCBqZXVuZXMgZGUgMTUgw6AgMTcgYW5zLCBmaWxsZXMgZXQgZ2Fyw6dvbnMuIElsIGNvbXByZW5kIHVuIHPDqWpvdXIgZGUgY29ow6lzaW9uIGV0IHVuZSBtaXNzaW9uIGQnaW50w6lyw6p0IGfDqW7DqXJhbC4="},
  {
    id: 22,
    categorie: "Droits et devoirs",
    sousCategorie: "Justice",
    question: "RW4gRnJhbmNlLCBxdWkgcGV1dCBqdWdlciB1bmUgcGVyc29ubmUgPw==",
    options: [
      "TGEgcG9saWNl",
      "TGVzIHRyaWJ1bmF1eCBhdmVjIGRlcyBqdWdlcw==",
      "TGUgbWFpcmU=",
      "TGUgUHLDqXNpZGVudCBkZSBsYSBSw6lwdWJsaXF1ZQ=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 22, 1),
    explication: "U2V1bHMgbGVzIHRyaWJ1bmF1eCwgY29tcG9zw6lzIGRlIGp1Z2VzIGluZMOpcGVuZGFudHMsIHBldXZlbnQganVnZXIgdW5lIHBlcnNvbm5lLiBMYSBwb2xpY2UgZW5xdcOqdGUgZXQgYXJyw6p0ZSwgbWFpcyBuZSBqdWdlIHBhcy4gQydlc3QgbGUgcHJpbmNpcGUgZGUgc8OpcGFyYXRpb24gZGVzIHBvdXZvaXJzLg=="},
  {
    id: 23,
    categorie: "Droits et devoirs",
    sousCategorie: "Justice",
    question: "UXVlIHNpZ25pZmllIGxhIHByw6lzb21wdGlvbiBkJ2lubm9jZW5jZSA/",
    options: [
      "VG91dCBzdXNwZWN0IGVzdCBjb3VwYWJsZQ==",
      "VG91dGUgcGVyc29ubmUgZXN0IGNvbnNpZMOpcsOpZSBjb21tZSBpbm5vY2VudGUgdGFudCBxdWUgc2EgY3VscGFiaWxpdMOpIG4nZXN0IHBhcyBwcm91dsOpZQ==",
      "U2V1bHMgbGVzIHJpY2hlcyBzb250IGlubm9jZW50cw==",
      "SWwgbid5IGEgcGFzIGRlIHByb2PDqHM="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 23, 1),
    explication: "TGEgcHLDqXNvbXB0aW9uIGQnaW5ub2NlbmNlIGVzdCB1biBwcmluY2lwZSBmb25kYW1lbnRhbCA6IHRvdXRlIHBlcnNvbm5lIGFjY3Vzw6llIGQndW5lIGluZnJhY3Rpb24gZXN0IHByw6lzdW3DqWUgaW5ub2NlbnRlIGp1c3F1J8OgIGNlIHF1ZSBzYSBjdWxwYWJpbGl0w6kgc29pdCBsw6lnYWxlbWVudCDDqXRhYmxpZS4="},
  {
    id: 24,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits sociaux",
    question: "TGUgc3lzdMOobWUgZGUgc8OpY3VyaXTDqSBzb2NpYWxlIGVuIEZyYW5jZSBnYXJhbnRpdCA6",
    options: [
      "VW5pcXVlbWVudCBsZXMgcmV0cmFpdGVz",
      "TGEgc2FudMOpLCBsYSBmYW1pbGxlLCBsZSBjaMO0bWFnZSBldCBsYSByZXRyYWl0ZQ==",
      "VW5pcXVlbWVudCBsYSBzYW50w6k=",
      "UmllbiBkdSB0b3V0"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 24, 1),
    explication: "TGEgU8OpY3VyaXTDqSBzb2NpYWxlIGNvdXZyZSA0IGJyYW5jaGVzIDogbWFsYWRpZSAoc2FudMOpKSwgZmFtaWxsZSAoYWxsb2NhdGlvbnMpLCBhY2NpZGVudHMgZHUgdHJhdmFpbCwgZXQgdmllaWxsZXNzZSAocmV0cmFpdGUpLiBFbGxlIGVzdCBmaW5hbmPDqWUgcGFyIGxlcyBjb3Rpc2F0aW9ucyBzb2NpYWxlcy4="},
  {
    id: 25,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits sociaux",
    question: "TCfDqWNvbGUgZXN0LWVsbGUgb2JsaWdhdG9pcmUgZW4gRnJhbmNlID8=",
    options: [
      "Tm9uLCBjJ2VzdCBmYWN1bHRhdGlm",
      "T3VpLCBkZSAzIMOgIDE2IGFucw==",
      "T3VpLCBtYWlzIHNldWxlbWVudCBqdXNxdSfDoCAxNCBhbnM=",
      "T3VpLCBqdXNxdSfDoCAxOCBhbnM="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 25, 1),
    explication: "TCdpbnN0cnVjdGlvbiBlc3Qgb2JsaWdhdG9pcmUgZGUgMyDDoCAxNiBhbnMgZW4gRnJhbmNlLiBFbGxlIHBldXQgw6p0cmUgZGlzcGVuc8OpZSBkYW5zIHVuZSDDqWNvbGUgcHVibGlxdWUsIHByaXbDqWUgb3Ugw6AgZG9taWNpbGUgKGF2ZWMgY29udHLDtGxlcyku"},
  {
    id: 26,
    categorie: "Droits et devoirs",
    sousCategorie: "Défense nationale",
    question: "TGEgSm91cm7DqWUgRMOpZmVuc2UgZXQgQ2l0b3llbm5ldMOpIChKREMpIGVzdCBvYmxpZ2F0b2lyZSBwb3VyIDo=",
    options: [
      "UGVyc29ubmU=",
      "VG91cyBsZXMgamV1bmVzIEZyYW7Dp2FpcyBlbnRyZSAxNiBldCAyNSBhbnM=",
      "VW5pcXVlbWVudCBsZXMgbWlsaXRhaXJlcw==",
      "VW5pcXVlbWVudCBsZXMgaG9tbWVz"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 26, 1),
    explication: "TGEgSkRDIGVzdCBvYmxpZ2F0b2lyZSBwb3VyIHRvdXMgbGVzIGpldW5lcyBGcmFuw6dhaXMsIGZpbGxlcyBldCBnYXLDp29ucywgZW50cmUgMTYgZXQgMjUgYW5zLiBFbGxlIGR1cmUgdW5lIGpvdXJuw6llIGV0IHBlcm1ldCBkZSBzZW5zaWJpbGlzZXIgw6AgbGEgZMOpZmVuc2UgZXQgbGEgY2l0b3llbm5ldMOpLg=="},
  {
    id: 27,
    categorie: "Droits et devoirs",
    sousCategorie: "Vie démocratique",
    question: "VW5lIHDDqXRpdGlvbiBjaXRveWVubmUgcGVybWV0IGRlIDo=",
    options: [
      "w4lsaXJlIGxlIFByw6lzaWRlbnQ=",
      "UHJvcG9zZXIgdW5lIGxvaSBvdSBkZW1hbmRlciB1biBjaGFuZ2VtZW50",
      "QW5udWxlciBsZXMgaW1ww7R0cw==",
      "RGlzc291ZHJlIGwnQXNzZW1ibMOpZQ=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 27, 1),
    explication: "VW5lIHDDqXRpdGlvbiBwZXJtZXQgYXV4IGNpdG95ZW5zIGRlIHNlIHJhc3NlbWJsZXIgYXV0b3VyIGQndW5lIGRlbWFuZGUgY29sbGVjdGl2ZSBhZHJlc3PDqWUgYXV4IHBvdXZvaXJzIHB1YmxpY3MuIEMnZXN0IHVuIG91dGlsIGRlIHBhcnRpY2lwYXRpb24gZMOpbW9jcmF0aXF1ZS4="},
  {
    id: 28,
    categorie: "Droits et devoirs",
    sousCategorie: "Vie démocratique",
    question: "VW4gY2l0b3llbiBwZXV0LWlsIHBhcnRpY2lwZXIgw6AgbGEgdmllIGxvY2FsZSA/",
    options: [
      "Tm9uLCBjJ2VzdCByw6lzZXJ2w6kgYXV4IMOpbHVz",
      "T3VpLCBwYXIgbGUgdm90ZSwgbGVzIGFzc29jaWF0aW9ucywgbGVzIGNvbnNlaWxzIGRlIHF1YXJ0aWVy",
      "T3VpLCBtYWlzIHNldWxlbWVudCBzJ2lsIGVzdCByaWNoZQ==",
      "Tm9uLCBjJ2VzdCBpbnRlcmRpdA=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 28, 1),
    explication: "TGVzIGNpdG95ZW5zIHBldXZlbnQgcGFydGljaXBlciDDoCBsYSB2aWUgbG9jYWxlIGRlIG5vbWJyZXVzZXMgZmHDp29ucyA6IHZvdGUsIGNvbnNlaWxzIGRlIHF1YXJ0aWVyLCBhc3NvY2lhdGlvbnMsIGNvbnNlaWxzIGNpdG95ZW5zLCBjb25zdWx0YXRpb25zIHB1YmxpcXVlcywgZXRjLg=="},

  // ==================== 4. HISTOIRE/GÉOGRAPHIE/CULTURE (8 questions) ====================
  
  {
    id: 29,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Histoire de France",
    question: "UXVlbGxlIHLDqXZvbHV0aW9uIGEgbWlzIGZpbiDDoCBsYSBtb25hcmNoaWUgYWJzb2x1ZSBlbiBGcmFuY2UgPw==",
    options: [
      "TGEgUsOpdm9sdXRpb24gZGUgMTc4OQ==",
      "TGEgUsOpdm9sdXRpb24gZGUgMTg0OA==",
      "TWFpIDE5Njg=",
      "TGEgQ29tbXVuZSBkZSBQYXJpcw=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 29, 0),
    explication: "TGEgUsOpdm9sdXRpb24gZnJhbsOnYWlzZSBkZSAxNzg5IGEgbWlzIGZpbiDDoCBsYSBtb25hcmNoaWUgYWJzb2x1ZS4gRWxsZSBhIGFib3V0aSDDoCBsYSBwcm9jbGFtYXRpb24gZGUgbGEgUsOpcHVibGlxdWUgZXQgw6AgbCdhZG9wdGlvbiBkZSBsYSBEw6ljbGFyYXRpb24gZGVzIGRyb2l0cyBkZSBsJ2hvbW1lLg=="},
  {
    id: 30,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Histoire de France",
    question: "UXVpIMOpdGFpdCBOYXBvbMOpb24gQm9uYXBhcnRlID8=",
    options: [
      "VW4gcm9pIGRlIEZyYW5jZQ==",
      "VW4gZW1wZXJldXIgZXQgZ8OpbsOpcmFs",
      "VW4gcHLDqXNpZGVudCBkZSBsYSBSw6lwdWJsaXF1ZQ==",
      "VW4gcGhpbG9zb3BoZQ=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 30, 1),
    explication: "TmFwb2zDqW9uIEJvbmFwYXJ0ZSBmdXQgUHJlbWllciBjb25zdWwgcHVpcyBFbXBlcmV1ciBkZXMgRnJhbsOnYWlzIGRlIDE4MDQgw6AgMTgxNS4gSWwgYSBtb2Rlcm5pc8OpIGxhIEZyYW5jZSAoQ29kZSBjaXZpbCwgbHljw6llcykgZXQgbWVuw6kgZGUgbm9tYnJldXNlcyBjYW1wYWduZXMgbWlsaXRhaXJlcyBlbiBFdXJvcGUu"},
  {
    id: 31,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Histoire de France",
    question: "UXVlbGxlIGd1ZXJyZSBhIGR1csOpIGRlIDE5MTQgw6AgMTkxOCA/",
    options: [
      "TGEgZ3VlcnJlIGRlIENlbnQgQW5z",
      "TGEgUHJlbWnDqHJlIEd1ZXJyZSBtb25kaWFsZQ==",
      "TGEgU2Vjb25kZSBHdWVycmUgbW9uZGlhbGU=",
      "TGEgZ3VlcnJlIGQnQWxnw6lyaWU="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 31, 1),
    explication: "TGEgUHJlbWnDqHJlIEd1ZXJyZSBtb25kaWFsZSAoMTkxNC0xOTE4KSBhIG9wcG9zw6kgbGVzIEFsbGnDqXMgKGRvbnQgbGEgRnJhbmNlKSBhdXggRW1waXJlcyBjZW50cmF1eC4gRWxsZSBmaXQgcGx1cyBkZSAxLDQgbWlsbGlvbiBkZSBtb3J0cyBmcmFuw6dhaXMu"},
  {
    id: 32,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Histoire de France",
    question: "TGUgOCBtYWkgY29tbcOpbW9yZSA6",
    options: [
      "TGEgcHJpc2UgZGUgbGEgQmFzdGlsbGU=",
      "TGEgdmljdG9pcmUgZGUgMTk0NSBldCBsYSBmaW4gZGUgbGEgU2Vjb25kZSBHdWVycmUgbW9uZGlhbGUgZW4gRXVyb3Bl",
      "TCdhcm1pc3RpY2UgZGUgMTkxOA==",
      "TGEgbGliw6lyYXRpb24gZGUgUGFyaXM="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 32, 1),
    explication: "TGUgOCBtYWkgMTk0NSBtYXJxdWUgbGEgY2FwaXR1bGF0aW9uIGRlIGwnQWxsZW1hZ25lIG5hemllIGV0IGxhIGZpbiBkZSBsYSBTZWNvbmRlIEd1ZXJyZSBtb25kaWFsZSBlbiBFdXJvcGUuIEMnZXN0IHVuIGpvdXIgZsOpcmnDqSBlbiBGcmFuY2Uu"},
  {
    id: 33,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Géographie",
    question: "UXVlbGxlIGVzdCBsYSBjYXBpdGFsZSBkZSBsYSBGcmFuY2UgPw==",
    options: [
      "TWFyc2VpbGxl",
      "THlvbg==",
      "UGFyaXM=",
      "TGlsbGU="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 33, 2),
    explication: "UGFyaXMgZXN0IGxhIGNhcGl0YWxlIGRlIGxhIEZyYW5jZSBldCBsZSBjaGVmLWxpZXUgZGUgbGEgcsOpZ2lvbiDDjmxlLWRlLUZyYW5jZS4gQydlc3QgbGEgdmlsbGUgbGEgcGx1cyBwZXVwbMOpZSBkZSBGcmFuY2UgYXZlYyBlbnZpcm9uIDIsMSBtaWxsaW9ucyBkJ2hhYml0YW50cy4="},
  {
    id: 34,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Géographie",
    question: "TGEgRnJhbmNlIG3DqXRyb3BvbGl0YWluZSBhIGNvbWJpZW4gZGUgcsOpZ2lvbnMgZGVwdWlzIDIwMTYgPw==",
    options: [
      "MTMgcsOpZ2lvbnM=",
      "MTggcsOpZ2lvbnM=",
      "MjIgcsOpZ2lvbnM=",
      "MjcgcsOpZ2lvbnM="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 34, 0),
    explication: "RGVwdWlzIGxhIHLDqWZvcm1lIHRlcnJpdG9yaWFsZSBkZSAyMDE2LCBsYSBGcmFuY2UgbcOpdHJvcG9saXRhaW5lIGNvbXB0ZSAxMyByw6lnaW9ucyAoY29udHJlIDIyIGF1cGFyYXZhbnQpLiBJbCB5IGEgw6lnYWxlbWVudCA1IHLDqWdpb25zIGQnb3V0cmUtbWVyLg=="},
  {
    id: 35,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Géographie",
    question: "UXVlbCBvY8OpYW4gYm9yZGUgbGEgRnJhbmNlIMOgIGwnb3Vlc3QgPw==",
    options: [
      "TCdvY8OpYW4gSW5kaWVu",
      "TCdvY8OpYW4gUGFjaWZpcXVl",
      "TCdvY8OpYW4gQXRsYW50aXF1ZQ==",
      "TCdvY8OpYW4gQXJjdGlxdWU="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 35, 2),
    explication: "TCdvY8OpYW4gQXRsYW50aXF1ZSBib3JkZSBsYSBGcmFuY2Ugw6AgbCdvdWVzdC4gTGEgRnJhbmNlIHBvc3PDqGRlIMOpZ2FsZW1lbnQgZGVzIGZhw6dhZGVzIHN1ciBsYSBtZXIgZHUgTm9yZCwgbGEgTWFuY2hlIGV0IGxhIG1lciBNw6lkaXRlcnJhbsOpZS4="},
  {
    id: 36,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Culture",
    question: "UXVlbCBtb251bWVudCBwYXJpc2llbiBlc3QgbGUgcGx1cyB2aXNpdMOpIGF1IG1vbmRlID8=",
    options: [
      "TGUgTG91dnJl",
      "TGEgdG91ciBFaWZmZWw=",
      "Tm90cmUtRGFtZQ==",
      "TCdBcmMgZGUgVHJpb21waGU="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 36, 1),
    explication: "TGEgdG91ciBFaWZmZWwgZXN0IGxlIG1vbnVtZW50IHBheWFudCBsZSBwbHVzIHZpc2l0w6kgYXUgbW9uZGUgYXZlYyBlbnZpcm9uIDcgbWlsbGlvbnMgZGUgdmlzaXRldXJzIHBhciBhbi4gRWxsZSBhIMOpdMOpIGNvbnN0cnVpdGUgcG91ciBsJ0V4cG9zaXRpb24gdW5pdmVyc2VsbGUgZGUgMTg4OS4="},

  // ==================== 5. VIVRE EN FRANCE (4 questions) ====================
  
  {
    id: 37,
    categorie: "Vivre en France",
    sousCategorie: "Vie quotidienne",
    question: "RW4gY2FzIGQndXJnZW5jZSBtw6lkaWNhbGUsIHF1ZWwgbnVtw6lybyBhcHBlbGVyID8=",
    options: [
      "MTU=",
      "MTc=",
      "MTg=",
      "MTEy"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 37, 0),
    explication: "TGUgMTUgZXN0IGxlIG51bcOpcm8gZHUgU0FNVSBwb3VyIGxlcyB1cmdlbmNlcyBtw6lkaWNhbGVzLiBMZSAxMTIgZXN0IGxlIG51bcOpcm8gZCd1cmdlbmNlIGV1cm9ww6llbiBxdWkgcmVkaXJpZ2UgdmVycyBsZSBzZXJ2aWNlIGFwcHJvcHJpw6ku"},
  {
    id: 38,
    categorie: "Vivre en France",
    sousCategorie: "Vie quotidienne",
    question: "UG91ciBzaWduYWxlciB1biBpbmNlbmRpZSwgcXVlbCBudW3DqXJvIGFwcGVsZXIgPw==",
    options: [
      "MTU=",
      "MTc=",
      "MTg=",
      "MTE0"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 38, 2),
    explication: "TGUgMTggZXN0IGxlIG51bcOpcm8gZGVzIHBvbXBpZXJzLiBJbHMgaW50ZXJ2aWVubmVudCBwb3VyIGxlcyBpbmNlbmRpZXMsIGFjY2lkZW50cywgZXQgw6lnYWxlbWVudCBwb3VyIGNlcnRhaW5lcyB1cmdlbmNlcyBtw6lkaWNhbGVzLg=="},
  {
    id: 39,
    categorie: "Vivre en France",
    sousCategorie: "Services publics",
    question: "TGEgY2FydGUgVml0YWxlIHNlcnQgw6AgOg==",
    options: [
      "Vm90ZXI=",
      "U2UgZmFpcmUgcmVtYm91cnNlciBsZXMgc29pbnMgZGUgc2FudMOp",
      "UHJlbmRyZSBsZSB0cmFpbg==",
      "T3V2cmlyIHVuIGNvbXB0ZSBiYW5jYWlyZQ=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 39, 1),
    explication: "TGEgY2FydGUgVml0YWxlIGVzdCBsYSBjYXJ0ZSBkJ2Fzc3Vyw6kgc29jaWFsLiBFbGxlIGZhY2lsaXRlIGxlIHJlbWJvdXJzZW1lbnQgZGVzIHNvaW5zIGRlIHNhbnTDqSBwYXIgbGEgU8OpY3VyaXTDqSBzb2NpYWxlIGV0IGxlcyBtdXR1ZWxsZXMu"},
  {
    id: 40,
    categorie: "Vivre en France",
    sousCategorie: "Logement",
    question: "UXVlIGRvaXQgZmFpcmUgdW4gbG9jYXRhaXJlIGF2YW50IGRlIHF1aXR0ZXIgc29uIGxvZ2VtZW50ID8=",
    options: [
      "Umllbg==",
      "RG9ubmVyIHVuIHByw6lhdmlzIGF1IHByb3ByacOpdGFpcmUgKGfDqW7DqXJhbGVtZW50IDMgbW9pcyBwb3VyIHVuIGxvZ2VtZW50IHZpZGUp",
      "Q2hhbmdlciBsZXMgc2VycnVyZXM=",
      "VmVuZHJlIGwnYXBwYXJ0ZW1lbnQ="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 40, 1),
    explication: "TGUgbG9jYXRhaXJlIGRvaXQgcmVzcGVjdGVyIHVuIGTDqWxhaSBkZSBwcsOpYXZpcyA6IDMgbW9pcyBwb3VyIHVuIGxvZ2VtZW50IHZpZGUsIDEgbW9pcyBwb3VyIHVuIG1ldWJsw6kgKG91IGRhbnMgY2VydGFpbnMgY2FzIHBhcnRpY3VsaWVycykuIENlIHByw6lhdmlzIGRvaXQgw6p0cmUgbm90aWZpw6kgYXUgcHJvcHJpw6l0YWlyZSBwYXIgw6ljcml0Lg=="},
];

export const EXAMEN_2: ExamenBlanc = {
  numero: 2,
  titre: "Examen blanc #2",
  description: "40 questions en conditions réelles d'examen",
  questions: questions.map(q => decodeQuestion(q)),
  dureeMinutes: 45,
  totalQuestions: 40
};
