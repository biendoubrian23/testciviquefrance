// ==================== EXAMEN BLANC #1 ====================
// Répartition officielle :
// 1. Principes et valeurs (11 questions)
// 2. Système institutionnel (6 questions)
// 3. Droits et devoirs (11 questions)
// 4. Histoire/géographie/culture (8 questions)
// 5. Vivre en France (4 questions)
// ==========================================================================
// VERSION NON ENCODÉE - Questions difficiles niveau examen civique
// ==========================================================================

import { ExamenBlanc, Question, decodeExamen } from './types';

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
    sousCategorie: "Constitution",
    question: "UXVlbCBhcnRpY2xlIGRlIGxhIENvbnN0aXR1dGlvbiBkZSAxOTU4IGTDqWZpbml0IGxlcyBjYXJhY3TDqXJpc3RpcXVlcyBmb25kYW1lbnRhbGVzIGRlIGxhIFLDqXB1YmxpcXVlIGZyYW7Dp2Fpc2UgY29tbWUgaW5kaXZpc2libGUsIGxhw69xdWUsIGTDqW1vY3JhdGlxdWUgZXQgc29jaWFsZSA/",
    options: [
      "TCdhcnRpY2xlIDFlciBkZSBsYSBDb25zdGl0dXRpb24gZGUgMTk1OA==",
      "TCdhcnRpY2xlIDIgZGUgbGEgQ29uc3RpdHV0aW9uIGRlIDE5NTg=",
      "TCdhcnRpY2xlIDg5IGRlIGxhIENvbnN0aXR1dGlvbiBkZSAxOTU4",
      "TGUgUHLDqWFtYnVsZSBkZSBsYSBDb25zdGl0dXRpb24gZGUgMTk1OA=="
    ],
    correctHash: hashAnswer(1, 0),
    explication: "TCdhcnRpY2xlIDFlciBkZSBsYSBDb25zdGl0dXRpb24gZGUgMTk1OCBhZmZpcm1lIHF1ZSDCqyBMYSBGcmFuY2UgZXN0IHVuZSBSw6lwdWJsaXF1ZSBpbmRpdmlzaWJsZSwgbGHDr3F1ZSwgZMOpbW9jcmF0aXF1ZSBldCBzb2NpYWxlIMK7LiBDJ2VzdCBsZSBmb25kZW1lbnQgZGUgbCdpZGVudGl0w6kgY29uc3RpdHV0aW9ubmVsbGUgZnJhbsOnYWlzZS4="},
  {
    id: 2,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Laïcité",
    question: "UXVlbGxlIGxvaSBmb25kYW1lbnRhbGUgYSDDqXRhYmxpIGxhIHPDqXBhcmF0aW9uIGRlcyDDiWdsaXNlcyBldCBkZSBsJ8OJdGF0LCBnYXJhbnRpc3NhbnQgbGEgbGliZXJ0w6kgZGUgY29uc2NpZW5jZSBldCBsZSBsaWJyZSBleGVyY2ljZSBkZXMgY3VsdGVzID8=",
    options: [
      "TGEgbG9pIGR1IDkgZMOpY2VtYnJlIDE5MDUgcmVsYXRpdmUgw6AgbGEgc8OpcGFyYXRpb24gZGVzIMOJZ2xpc2VzIGV0IGRlIGwnw4l0YXQ=",
      "TGEgbG9pIGR1IDI4IG1hcnMgMTg4MiBzdXIgbCdlbnNlaWduZW1lbnQgcHJpbWFpcmUgb2JsaWdhdG9pcmUgZXQgbGHDr3F1ZQ==",
      "TGEgbG9pIGR1IDFlciBqdWlsbGV0IDE5MDEgcmVsYXRpdmUgYXUgY29udHJhdCBkJ2Fzc29jaWF0aW9u",
      "TGEgbG9pIGR1IDI5IGp1aWxsZXQgMTg4MSBzdXIgbGEgbGliZXJ0w6kgZGUgbGEgcHJlc3Nl"
    ],
    correctHash: hashAnswer(2, 0),
    explication: "TGEgbG9pIGR1IDkgZMOpY2VtYnJlIDE5MDUgw6l0YWJsaXQgbGEgc8OpcGFyYXRpb24gZGVzIMOJZ2xpc2VzIGV0IGRlIGwnw4l0YXQuIEVsbGUgZ2FyYW50aXQgbGEgbGliZXJ0w6kgZGUgY29uc2NpZW5jZSBldCBsZSBsaWJyZSBleGVyY2ljZSBkZXMgY3VsdGVzLCB0b3V0IGVuIGFmZmlybWFudCBxdWUgbGEgUsOpcHVibGlxdWUgbmUgcmVjb25uYcOudCwgbmUgc2FsYXJpZSBuaSBuZSBzdWJ2ZW50aW9ubmUgYXVjdW4gY3VsdGUu"},
  {
    id: 3,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Bloc de constitutionnalité",
    question: "UXUnZXN0LWNlIHF1ZSBsZSDCqyBibG9jIGRlIGNvbnN0aXR1dGlvbm5hbGl0w6kgwrsgcmVjb25udSBwYXIgbGUgQ29uc2VpbCBjb25zdGl0dXRpb25uZWwgZGVwdWlzIDE5NzEgPw==",
    options: [
      "TGEgQ29uc3RpdHV0aW9uIGRlIDE5NTgsIGxhIERESEMgZGUgMTc4OSwgbGUgUHLDqWFtYnVsZSBkZSAxOTQ2IGV0IGxhIENoYXJ0ZSBkZSBsJ2Vudmlyb25uZW1lbnQgZGUgMjAwNA==",
      "TGEgQ29uc3RpdHV0aW9uIGRlIDE5NTgsIGxlIENvZGUgY2l2aWwgZXQgbGVzIHRyYWl0w6lzIGludGVybmF0aW9uYXV4IHJhdGlmacOpcyBwYXIgbGEgRnJhbmNl",
      "TGVzIGTDqWNpc2lvbnMgZHUgQ29uc2VpbCBjb25zdGl0dXRpb25uZWwgZXQgbGVzIGxvaXMgb3JnYW5pcXVlcyBmb25kYW1lbnRhbGVzIHZvdMOpZXMgZGVwdWlzIDE5NTg=",
      "TGEgQ29uc3RpdHV0aW9uIGRlIDE5NTgsIGxlcyBvcmRvbm5hbmNlcyBwcsOpc2lkZW50aWVsbGVzIGV0IGxlcyByw6hnbGVtZW50cyBpbnTDqXJpZXVycyBkdSBQYXJsZW1lbnQ="
    ],
    correctHash: hashAnswer(3, 0),
    explication: "TGUgYmxvYyBkZSBjb25zdGl0dXRpb25uYWxpdMOpIGNvbXByZW5kIGxhIENvbnN0aXR1dGlvbiBkZSAxOTU4LCBsYSBEw6ljbGFyYXRpb24gZGVzIGRyb2l0cyBkZSBsJ2hvbW1lIGRlIDE3ODksIGxlIFByw6lhbWJ1bGUgZGUgMTk0NiBldCBsYSBDaGFydGUgZGUgbCdlbnZpcm9ubmVtZW50IGRlIDIwMDQuIENlcyB0ZXh0ZXMgb250IHRvdXMgdW5lIHZhbGV1ciBjb25zdGl0dXRpb25uZWxsZS4="},
  {
    id: 4,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "DDHC",
    question: "U2Vsb24gbCdhcnRpY2xlIDQgZGUgbGEgRMOpY2xhcmF0aW9uIGRlcyBkcm9pdHMgZGUgbCdob21tZSBldCBkdSBjaXRveWVuIGRlIDE3ODksIGNvbW1lbnQgZXN0IGTDqWZpbmllIGxhIExpYmVydMOpID8=",
    options: [
      "UG91dm9pciBmYWlyZSB0b3V0IGNlIHF1aSBuZSBudWl0IHBhcyDDoCBhdXRydWksIGRhbnMgbGVzIGxpbWl0ZXMgZMOpdGVybWluw6llcyBwYXIgbGEgbG9p",
      "UG91dm9pciBhZ2lyIHNlbG9uIHNhIGNvbnNjaWVuY2UgcGVyc29ubmVsbGUgc2FucyBhdWN1bmUgcmVzdHJpY3Rpb24gZXh0w6lyaWV1cmU=",
      "UG91dm9pciBleGVyY2VyIHNlcyBkcm9pdHMgZm9uZGFtZW50YXV4IHNhbnMgaW50ZXJ2ZW50aW9uIGRlIGwnw4l0YXQ=",
      "UG91dm9pciBzJ2V4cHJpbWVyIGxpYnJlbWVudCBlbiB0b3V0IGxpZXUgZXQgZW4gdG91dGUgY2lyY29uc3RhbmNl"
    ],
    correctHash: hashAnswer(4, 0),
    explication: "TCdhcnRpY2xlIDQgZGUgbGEgRERIQyBkw6lmaW5pdCBsYSBsaWJlcnTDqSBjb21tZSDCqyBwb3V2b2lyIGZhaXJlIHRvdXQgY2UgcXVpIG5lIG51aXQgcGFzIMOgIGF1dHJ1aSDCuy4gTGVzIGxpbWl0ZXMgZGUgY2V0dGUgbGliZXJ0w6kgc29udCBkw6l0ZXJtaW7DqWVzIHBhciBsYSBsb2ksIHF1aSBwcm90w6hnZSBsZXMgZHJvaXRzIGQnYXV0cnVpLg=="},
  {
    id: 5,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Conseil constitutionnel",
    question: "UXVlbGxlIGluc3RpdHV0aW9uIGNyw6nDqWUgZW4gMTk1OCB2ZWlsbGUgYXUgcmVzcGVjdCBkZSBsYSBDb25zdGl0dXRpb24gZXQgcGV1dCDDqnRyZSBzYWlzaWUgcGFyIGxlcyBjaXRveWVucyB2aWEgbGEgUVBDIGRlcHVpcyAyMDA4ID8=",
    options: [
      "TGUgQ29uc2VpbCBjb25zdGl0dXRpb25uZWwgY29tcG9zw6kgZGUgOSBtZW1icmVzIG5vbW3DqXMgcG91ciA5IGFucw==",
      "TGUgQ29uc2VpbCBkJ8OJdGF0IHF1aSBlc3QgbGEgcGx1cyBoYXV0ZSBqdXJpZGljdGlvbiBhZG1pbmlzdHJhdGl2ZSBmcmFuw6dhaXNl",
      "TGEgQ291ciBkZSBjYXNzYXRpb24gcXVpIGVzdCBsYSBwbHVzIGhhdXRlIGp1cmlkaWN0aW9uIGRlIGwnb3JkcmUganVkaWNpYWlyZQ==",
      "TGEgQ291ciBkZXMgY29tcHRlcyBxdWkgY29udHLDtGxlIGxlcyBmaW5hbmNlcyBwdWJsaXF1ZXMgZGUgbCfDiXRhdA=="
    ],
    correctHash: hashAnswer(5, 0),
    explication: "TGUgQ29uc2VpbCBjb25zdGl0dXRpb25uZWwsIGNyw6nDqSBlbiAxOTU4LCB2w6lyaWZpZSBsYSBjb25mb3JtaXTDqSBkZXMgbG9pcyDDoCBsYSBDb25zdGl0dXRpb24uIERlcHVpcyAyMDA4LCBsZXMgY2l0b3llbnMgcGV1dmVudCBsZSBzYWlzaXIgdmlhIGxhIFF1ZXN0aW9uIFByaW9yaXRhaXJlIGRlIENvbnN0aXR1dGlvbm5hbGl0w6kgKFFQQyku"},
  {
    id: 6,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Indivisibilité",
    question: "UXUnaW1wbGlxdWUgbGUgY2FyYWN0w6hyZSDCqyBpbmRpdmlzaWJsZSDCuyBkZSBsYSBSw6lwdWJsaXF1ZSBmcmFuw6dhaXNlIGluc2NyaXQgw6AgbCdhcnRpY2xlIDFlciBkZSBsYSBDb25zdGl0dXRpb24gPw==",
    options: [
      "TCd1bml0w6kgZHUgcGV1cGxlIGZyYW7Dp2FpcywgZHUgdGVycml0b2lyZSBuYXRpb25hbCBldCBkZSBsYSBsb2kgcydhcHBsaXF1YW50IHVuaWZvcm3DqW1lbnQgw6AgdG91cw==",
      "TCdpbXBvc3NpYmlsaXTDqSBkZSBjcsOpZXIgZGVzIHLDqWdpb25zIGF1dG9ub21lcyBkaXNwb3NhbnQgZGUgbGV1cnMgcHJvcHJlcyBwb3V2b2lycyBsw6lnaXNsYXRpZnM=",
      "TCdpbnRlcmRpY3Rpb24gZGUgdG91dGUgZMOpY2VudHJhbGlzYXRpb24gYWRtaW5pc3RyYXRpdmUgZXQgZGVzIHBvdXZvaXJzIGxvY2F1eCDDqWx1cyBwYXIgbGVzIGNpdG95ZW5z",
      "TGEgY2VudHJhbGlzYXRpb24gZGUgdG91dGVzIGxlcyBkw6ljaXNpb25zIGFkbWluaXN0cmF0aXZlcyBldCBwb2xpdGlxdWVzIGRhbnMgbGEgY2FwaXRhbGUgUGFyaXM="
    ],
    correctHash: hashAnswer(6, 0),
    explication: "TCdpbmRpdmlzaWJpbGl0w6kgc2lnbmlmaWUgcXVlIGxhIEZyYW5jZSBmb3JtZSB1biB0b3V0IDogdW4gc2V1bCBwZXVwbGUsIHVuIHNldWwgdGVycml0b2lyZSwgdW5lIHNldWxlIGxvaS4gQ2VsYSBuJ2VtcMOqY2hlIHBhcyBsYSBkw6ljZW50cmFsaXNhdGlvbiBtYWlzIGV4Y2x1dCBsZSBmw6lkw6lyYWxpc21lIGV0IGdhcmFudGl0IGwnw6lnYWxpdMOpIGRlcyBjaXRveWVucy4="},
  {
    id: 7,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Laïcité garanties",
    question: "UXVlbGxlcyBnYXJhbnRpZXMgZm9uZGFtZW50YWxlcyBsYSBsYcOvY2l0w6kgYXNzdXJlLXQtZWxsZSBhdXggY2l0b3llbnMgZnJhbsOnYWlzIHNlbG9uIGxhIGxvaSBkZSAxOTA1ID8=",
    options: [
      "TGEgbGliZXJ0w6kgZGUgY29uc2NpZW5jZSBldCBsZSBsaWJyZSBleGVyY2ljZSBkZXMgY3VsdGVzIGRhbnMgbGUgcmVzcGVjdCBkZSBsJ29yZHJlIHB1YmxpYw==",
      "TGEgbmV1dHJhbGl0w6kgb2JsaWdhdG9pcmUgZGUgdG91cyBsZXMgY2l0b3llbnMgdmlzLcOgLXZpcyBkZSB0b3V0ZXMgbGVzIHJlbGlnaW9ucyByZWNvbm51ZXM=",
      "TCdpbnRlcmRpY3Rpb24gZGUgdG91cyBsZXMgc2lnbmVzIHJlbGlnaWV1eCBkYW5zIGwnZW5zZW1ibGUgZGUgbCdlc3BhY2UgcHVibGljIGZyYW7Dp2Fpcw==",
      "TGEgc8OpcGFyYXRpb24gc3RyaWN0ZSBldCBhYnNvbHVlIGVudHJlIGxhIHZpZSBwcml2w6llIGRlcyBpbmRpdmlkdXMgZXQgdG91dGUgcHJhdGlxdWUgcmVsaWdpZXVzZQ=="
    ],
    correctHash: hashAnswer(7, 0),
    explication: "TGEgbGHDr2NpdMOpIGdhcmFudGl0IMOgIGNoYWN1biBsYSBsaWJlcnTDqSBkZSBjcm9pcmUgb3UgZGUgbmUgcGFzIGNyb2lyZSwgZXQgZGUgcHJhdGlxdWVyIHNhIHJlbGlnaW9uIGxpYnJlbWVudC4gTCfDiXRhdCByZXN0ZSBuZXV0cmUgdmlzLcOgLXZpcyBkZSB0b3V0ZXMgbGVzIHJlbGlnaW9ucyBzYW5zIGVuIGZhdm9yaXNlciBhdWN1bmUu"},
  {
    id: 8,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Égalité",
    question: "UXVlbCBwcmluY2lwZSByw6lwdWJsaWNhaW4gZm9uZGFtZW50YWwgZXN0IGRpcmVjdGVtZW50IHByb2NsYW3DqSBwYXIgbCdhcnRpY2xlIDFlciBkZSBsYSBEREhDIGRlIDE3ODkgPw==",
    options: [
      "TCfDqWdhbGl0w6kgZW4gZHJvaXRzIGRlcyBob21tZXMgbmFpc3NhbnQgZXQgZGVtZXVyYW50IGxpYnJlcyBkw6hzIGxldXIgbmFpc3NhbmNl",
      "TGEgbGliZXJ0w6kgZCdleHByZXNzaW9uIGV0IGQnb3BpbmlvbiBzYW5zIGF1Y3VuZSByZXN0cmljdGlvbiBnb3V2ZXJuZW1lbnRhbGU=",
      "TGUgZHJvaXQgZGUgcHJvcHJpw6l0w6kgY29uc2lkw6lyw6kgY29tbWUgaW52aW9sYWJsZSBldCBzYWNyw6kgcGFyIGxhIE5hdGlvbg==",
      "TGEgcsOpc2lzdGFuY2Ugw6AgbCdvcHByZXNzaW9uIGNvbW1lIGRyb2l0IG5hdHVyZWwgZXQgaW1wcmVzY3JpcHRpYmxlIGRlIGwnaG9tbWU="
    ],
    correctHash: hashAnswer(8, 0),
    explication: "TCdhcnRpY2xlIDFlciBkZSBsYSBEREhDIHByb2NsYW1lIHF1ZSDCqyBMZXMgaG9tbWVzIG5haXNzZW50IGV0IGRlbWV1cmVudCBsaWJyZXMgZXQgw6lnYXV4IGVuIGRyb2l0cyDCuy4gQ2UgcHJpbmNpcGUgZCfDqWdhbGl0w6kgZXN0IHJlcHJpcyBkYW5zIGwnYXJ0aWNsZSAxZXIgZGUgbGEgQ29uc3RpdHV0aW9uIGRlIDE5NTgu"},
  {
    id: 9,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "République sociale",
    question: "UXVlIHNpZ25pZmllIGxlIGNhcmFjdMOocmUgwqsgc29jaWFsIMK7IGRlIGxhIFLDqXB1YmxpcXVlIGZyYW7Dp2Fpc2UgbWVudGlvbm7DqSBkYW5zIGxhIENvbnN0aXR1dGlvbiBkZSAxOTU4ID8=",
    options: [
      "TCfDiXRhdCBnYXJhbnRpdCBsYSBwcm90ZWN0aW9uIHNvY2lhbGUsIGxhIHNvbGlkYXJpdMOpIG5hdGlvbmFsZSBldCBsZXMgZHJvaXRzIHNvY2lhdXggZm9uZGFtZW50YXV4",
      "TCfDiXRhdCBvcmdhbmlzZSBsYSByZWRpc3RyaWJ1dGlvbiDDqWdhbGl0YWlyZSBldCB0b3RhbGUgZGVzIHJpY2hlc3NlcyBlbnRyZSB0b3VzIGxlcyBjaXRveWVucw==",
      "TCfDiXRhdCBjb250csO0bGUgZGlyZWN0ZW1lbnQgdG91dGVzIGxlcyBwcmluY2lwYWxlcyBlbnRyZXByaXNlcyBzdHJhdMOpZ2lxdWVzIGR1IHBheXM=",
      "TCfDiXRhdCBhc3N1cmUgdW4gcmV2ZW51IG1pbmltdW0gc3RyaWN0ZW1lbnQgaWRlbnRpcXVlIHBvdXIgdG91cyBsZXMgcsOpc2lkZW50cw=="
    ],
    correctHash: hashAnswer(9, 0),
    explication: "TGUgY2FyYWN0w6hyZSBzb2NpYWwgZGUgbGEgUsOpcHVibGlxdWUgaW1wbGlxdWUgcXVlIGwnw4l0YXQgYXNzdXJlIGxhIHByb3RlY3Rpb24gc29jaWFsZSBkZXMgY2l0b3llbnMgOiBzYW50w6ksIHJldHJhaXRlLCBjaMO0bWFnZSwgZmFtaWxsZS4gQydlc3QgbGUgZm9uZGVtZW50IGRlIGxhIFPDqWN1cml0w6kgc29jaWFsZSBjcsOpw6llIGVuIDE5NDUu"},
  {
    id: 10,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Droits sociaux",
    question: "UXVlbCB0ZXh0ZSBjb25zdGl0dXRpb25uZWwgYSBpbnRyb2R1aXQgbGVzIGRyb2l0cyDDqWNvbm9taXF1ZXMgZXQgc29jaWF1eCBlbiBGcmFuY2UsIG5vdGFtbWVudCBsZSBkcm9pdCBhdSB0cmF2YWlsIGV0IGxlIGRyb2l0IHN5bmRpY2FsID8=",
    options: [
      "TGUgUHLDqWFtYnVsZSBkZSBsYSBDb25zdGl0dXRpb24gZGUgMTk0NiBmYWlzYW50IHBhcnRpZSBkdSBibG9jIGRlIGNvbnN0aXR1dGlvbm5hbGl0w6k=",
      "TGEgRMOpY2xhcmF0aW9uIGRlcyBkcm9pdHMgZGUgbCdob21tZSBldCBkdSBjaXRveWVuIGR1IDI2IGFvw7t0IDE3ODk=",
      "TCdhcnRpY2xlIHByZW1pZXIgZGUgbGEgQ29uc3RpdHV0aW9uIGRlIGxhIFZlIFLDqXB1YmxpcXVlIGRlIDE5NTg=",
      "TGEgQ2hhcnRlIGRlIGwnZW52aXJvbm5lbWVudCBhZG9wdMOpZSBldCBpbnTDqWdyw6llIMOgIGxhIENvbnN0aXR1dGlvbiBlbiAyMDA0"
    ],
    correctHash: hashAnswer(10, 0),
    explication: "TGUgUHLDqWFtYnVsZSBkZSAxOTQ2IGEgY29uc2FjcsOpIGxlcyBkcm9pdHMgw6ljb25vbWlxdWVzIGV0IHNvY2lhdXggOiBkcm9pdCBhdSB0cmF2YWlsLCBkcm9pdCBzeW5kaWNhbCwgZHJvaXQgZGUgZ3LDqHZlLCBwcm90ZWN0aW9uIGRlIGxhIHNhbnTDqSwgZHJvaXQgw6AgbCfDqWR1Y2F0aW9uLiBJbCBmYWl0IHBhcnRpZSBkdSBibG9jIGRlIGNvbnN0aXR1dGlvbm5hbGl0w6ku"},
  {
    id: 11,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Égalité femmes-hommes",
    question: "UXVlIGdhcmFudGl0IGxlIHByaW5jaXBlIGNvbnN0aXR1dGlvbm5lbCBkJ8OpZ2FsaXTDqSBlbnRyZSBsZXMgZmVtbWVzIGV0IGxlcyBob21tZXMgcmVuZm9yY8OpIHBhciBsYSByw6l2aXNpb24gZGUgMjAwOCA/",
    options: [
      "TCfDqWdhbCBhY2PDqHMgZGVzIGZlbW1lcyBldCBkZXMgaG9tbWVzIGF1eCBtYW5kYXRzIMOpbGVjdG9yYXV4LCBmb25jdGlvbnMgZXQgcmVzcG9uc2FiaWxpdMOpcw==",
      "VW4gcXVvdGEgb2JsaWdhdG9pcmUgZGUgNTAlIGRlIGZlbW1lcyBkYW5zIHRvdXRlcyBsZXMgZW50cmVwcmlzZXMgcHJpdsOpZXMgZnJhbsOnYWlzZXM=",
      "TGEgcGFyaXTDqSBzdHJpY3RlIGV0IG9ibGlnYXRvaXJlIGRhbnMgdG91cyBsZXMgc2VjdGV1cnMgw6ljb25vbWlxdWVzIHNhbnMgZXhjZXB0aW9u",
      "TCdpbnRlcmRpY3Rpb24gZGUgdG91dGUgZGlmZsOpcmVuY2Ugc2FsYXJpYWxlIG3Dqm1lIGp1c3RpZmnDqWUgcGFyIGRlcyBjcml0w6hyZXMgb2JqZWN0aWZz"
    ],
    correctHash: hashAnswer(11, 0),
    explication: "TCfDqWdhbGl0w6kgZW50cmUgbGVzIGZlbW1lcyBldCBsZXMgaG9tbWVzIGVzdCB1biBwcmluY2lwZSBjb25zdGl0dXRpb25uZWwuIExhIGxvaSBmYXZvcmlzZSBsJ8OpZ2FsIGFjY8OocyBhdXggbWFuZGF0cyDDqWxlY3RvcmF1eCBldCBmb25jdGlvbnMgw6lsZWN0aXZlcywgYWluc2kgcXUnYXV4IHJlc3BvbnNhYmlsaXTDqXMgcHJvZmVzc2lvbm5lbGxlcyBldCBzb2NpYWxlcy4="},

  // ==================== 2. SYSTÈME INSTITUTIONNEL (6 questions) ====================
  
  {
    id: 12,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Souveraineté",
    question: "U2Vsb24gbCdhcnRpY2xlIDMgZGUgbGEgQ29uc3RpdHV0aW9uIGRlIDE5NTgsIMOgIHF1aSBhcHBhcnRpZW50IGxhIHNvdXZlcmFpbmV0w6kgbmF0aW9uYWxlIGV0IGNvbW1lbnQgcydleGVyY2UtdC1lbGxlID8=",
    options: [
      "QXUgcGV1cGxlIHF1aSBsJ2V4ZXJjZSBwYXIgc2VzIHJlcHLDqXNlbnRhbnRzIMOpbHVzIGV0IHBhciBsYSB2b2llIGR1IHLDqWbDqXJlbmR1bQ==",
      "QXUgR291dmVybmVtZW50IHF1aSBkw6lmaW5pdCBldCBjb25kdWl0IGxhIHBvbGl0aXF1ZSBkZSBsYSBOYXRpb24gZnJhbsOnYWlzZQ==",
      "QXUgUGFybGVtZW50IGJpY2Ftw6lyYWwgY29tcG9zw6kgZGUgbCdBc3NlbWJsw6llIG5hdGlvbmFsZSBldCBkdSBTw6luYXQ=",
      "QXUgUHLDqXNpZGVudCBkZSBsYSBSw6lwdWJsaXF1ZSDDqWx1IGF1IHN1ZmZyYWdlIHVuaXZlcnNlbCBkaXJlY3QgZGVwdWlzIDE5NjI="
    ],
    correctHash: hashAnswer(12, 0),
    explication: "U2Vsb24gbCdhcnRpY2xlIDMgZGUgbGEgQ29uc3RpdHV0aW9uIDogwqsgTGEgc291dmVyYWluZXTDqSBuYXRpb25hbGUgYXBwYXJ0aWVudCBhdSBwZXVwbGUgcXVpIGwnZXhlcmNlIHBhciBzZXMgcmVwcsOpc2VudGFudHMgZXQgcGFyIGxhIHZvaWUgZHUgcsOpZsOpcmVuZHVtLiDCuyBDJ2VzdCBsZSBwcmluY2lwZSBkZSBsYSBkw6ltb2NyYXRpZSByZXByw6lzZW50YXRpdmUu"},
  {
    id: 13,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Droit de vote",
    question: "UXVlbGxlcyBzb250IGxlcyBjb25kaXRpb25zIGN1bXVsYXRpdmVzIHBvdXIgZXhlcmNlciBsZSBkcm9pdCBkZSB2b3RlIGVuIEZyYW5jZSBsb3JzIGRlcyDDqWxlY3Rpb25zIG5hdGlvbmFsZXMgPw==",
    options: [
      "QXZvaXIgMTggYW5zLCDDqnRyZSBkZSBuYXRpb25hbGl0w6kgZnJhbsOnYWlzZSwgam91aXIgZGUgc2VzIGRyb2l0cyBjaXZpcXVlcyBldCDDqnRyZSBpbnNjcml0IHN1ciBsZXMgbGlzdGVzIMOpbGVjdG9yYWxlcw==",
      "QXZvaXIgMjEgYW5zLCByw6lzaWRlciBlbiBGcmFuY2UgZGVwdWlzIHBsdXMgZGUgNSBhbnMgZXQgcG9zc8OpZGVyIHVuIHRpdHJlIGRlIHPDqWpvdXIgdmFsaWRl",
      "QXZvaXIgMTggYW5zLCBwb3Nzw6lkZXIgdW4gZGlwbMO0bWUgcmVjb25udSBwYXIgbCfDiXRhdCBldCBwYXllciBkZXMgaW1ww7R0cyBlbiBGcmFuY2U=",
      "w4p0cmUgbWFqZXVyLCDDqnRyZSBwcm9wcmnDqXRhaXJlIGQndW4gYmllbiBpbW1vYmlsaWVyIGV0IGF2b2lyIHVuIGVtcGxvaSBzdGFibGUgZGVwdWlzIDIgYW5z"
    ],
    correctHash: hashAnswer(13, 0),
    explication: "RW4gRnJhbmNlLCBsZSBkcm9pdCBkZSB2b3RlIGVzdCBhY2NvcmTDqSDDoCB0b3VzIGxlcyBjaXRveWVucyBmcmFuw6dhaXMgw6Jnw6lzIGRlIDE4IGFucyBvdSBwbHVzLCBqb3Vpc3NhbnQgZGUgbGV1cnMgZHJvaXRzIGNpdmlscyBldCBwb2xpdGlxdWVzLCBldCBpbnNjcml0cyBzdXIgbGVzIGxpc3RlcyDDqWxlY3RvcmFsZXMu"},
  {
    id: 14,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Vote",
    question: "TGUgdm90ZSBlbiBGcmFuY2UgZXN0LWlsIG9ibGlnYXRvaXJlIGV0IHF1ZWxsZXMgc29udCBsZXMgY29uc8OpcXVlbmNlcyBkZSBsJ2Fic3RlbnRpb24gw6lsZWN0b3JhbGUgPw==",
    options: [
      "Tm9uLCBsZSB2b3RlIGVzdCB1biBkcm9pdCBldCB1biBkZXZvaXIgY2l2aXF1ZSBtYWlzIGwnYWJzdGVudGlvbiBuJ2VzdCBwYXMgc2FuY3Rpb25uw6llIHBhciBsYSBsb2k=",
      "T3VpLCBsJ2Fic3RlbnRpb24gZXN0IHBhc3NpYmxlIGQndW5lIGFtZW5kZSBwb3V2YW50IGFsbGVyIGp1c3F1J8OgIDE1MCBldXJvcyBwYXIgc2NydXRpbg==",
      "T3VpLCBzYXVmIHBvdXIgbGVzIHBlcnNvbm5lcyDDomfDqWVzIGRlIHBsdXMgZGUgNzAgYW5zIHF1aSBiw6luw6lmaWNpZW50IGQndW5lIGRpc3BlbnNlIGF1dG9tYXRpcXVl",
      "Tm9uLCBzYXVmIHBvdXIgbGVzIMOpbGVjdGlvbnMgcHLDqXNpZGVudGllbGxlcyBvw7kgbCdhYnN0ZW50aW9uIGVudHJhw65uZSB1bmUgc3VzcGVuc2lvbiBkZXMgZHJvaXRzIGNpdmlxdWVz"
    ],
    correctHash: hashAnswer(14, 0),
    explication: "RW4gRnJhbmNlLCBsZSB2b3RlIG4nZXN0IHBhcyBvYmxpZ2F0b2lyZSAoY29udHJhaXJlbWVudCDDoCBsYSBCZWxnaXF1ZSBvdSBhdSBMdXhlbWJvdXJnKS4gQydlc3QgdW4gZHJvaXQgZm9uZGFtZW50YWwgZXQgdW4gZGV2b2lyIGNpdmlxdWUsIG1haXMgbCdhYnN0ZW50aW9uIG4nZXN0IHBhcyBzYW5jdGlvbm7DqWUu"},
  {
    id: 15,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Président",
    question: "UXVlbCBlc3QgbGUgcsO0bGUgY29uc3RpdHV0aW9ubmVsIGR1IFByw6lzaWRlbnQgZGUgbGEgUsOpcHVibGlxdWUgc2Vsb24gbCdhcnRpY2xlIDUgZGUgbGEgQ29uc3RpdHV0aW9uIGRlIDE5NTggPw==",
    options: [
      "VmVpbGxlciBhdSByZXNwZWN0IGRlIGxhIENvbnN0aXR1dGlvbiwgYXNzdXJlciBsZSBmb25jdGlvbm5lbWVudCBkZXMgcG91dm9pcnMgcHVibGljcyBldCBsYSBjb250aW51aXTDqSBkZSBsJ8OJdGF0",
      "RGlyaWdlciBsJ2FjdGlvbiBkdSBHb3V2ZXJuZW1lbnQsIMOqdHJlIHJlc3BvbnNhYmxlIGRlIGxhIGTDqWZlbnNlIG5hdGlvbmFsZSBldCBwcsOpc2lkZXIgbGUgQ29uc2VpbCBkZXMgbWluaXN0cmVz",
      "Vm90ZXIgbGVzIGxvaXMsIGNvbnRyw7RsZXIgbCdhY3Rpb24gZHUgR291dmVybmVtZW50IGV0IHJlcHLDqXNlbnRlciBsZXMgdGVycml0b2lyZXMgZGUgbGEgUsOpcHVibGlxdWU=",
      "VHJhbmNoZXIgbGVzIGxpdGlnZXMgZW50cmUgbGVzIGNpdG95ZW5zLCBpbnRlcnByw6l0ZXIgbGEgQ29uc3RpdHV0aW9uIGV0IHZhbGlkZXIgbGVzIMOpbGVjdGlvbnMgbmF0aW9uYWxlcw=="
    ],
    correctHash: hashAnswer(15, 0),
    explication: "TGUgUHLDqXNpZGVudCBkZSBsYSBSw6lwdWJsaXF1ZSB2ZWlsbGUgYXUgcmVzcGVjdCBkZSBsYSBDb25zdGl0dXRpb24uIElsIGFzc3VyZSwgcGFyIHNvbiBhcmJpdHJhZ2UsIGxlIGZvbmN0aW9ubmVtZW50IHLDqWd1bGllciBkZXMgcG91dm9pcnMgcHVibGljcyBhaW5zaSBxdWUgbGEgY29udGludWl0w6kgZGUgbCfDiXRhdC4="},
  {
    id: 16,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Parlement",
    question: "Q29tbWVudCBlc3QgY29tcG9zw6kgbGUgUGFybGVtZW50IGZyYW7Dp2FpcyBldCBxdWVsbGUgZXN0IGxhIGR1csOpZSBkdSBtYW5kYXQgZGUgc2VzIG1lbWJyZXMgPw==",
    options: [
      "TCdBc3NlbWJsw6llIG5hdGlvbmFsZSAoNTc3IGTDqXB1dMOpcyDDqWx1cyBwb3VyIDUgYW5zKSBldCBsZSBTw6luYXQgKDM0OCBzw6luYXRldXJzIMOpbHVzIHBvdXIgNiBhbnMp",
      "TCdBc3NlbWJsw6llIG5hdGlvbmFsZSAoNTAwIGTDqXB1dMOpcyDDqWx1cyBwb3VyIDQgYW5zKSBldCBsZSBTw6luYXQgKDMwMCBzw6luYXRldXJzIMOpbHVzIHBvdXIgNSBhbnMp",
      "VW5lIGNoYW1icmUgdW5pcXVlIGRlIDYwMCBwYXJsZW1lbnRhaXJlcyDDqWx1cyBhdSBzdWZmcmFnZSB1bml2ZXJzZWwgZGlyZWN0IHBvdXIgNiBhbnM=",
      "RGV1eCBjaGFtYnJlcyBkZSA0MDAgbWVtYnJlcyBjaGFjdW5lIMOpbHVzIGF1IHNjcnV0aW4gcHJvcG9ydGlvbm5lbCBwb3VyIDQgYW5z"
    ],
    correctHash: hashAnswer(16, 0),
    explication: "TGUgUGFybGVtZW50IGZyYW7Dp2FpcyBlc3QgYmljYW3DqXJhbCA6IGlsIGNvbXByZW5kIGwnQXNzZW1ibMOpZSBuYXRpb25hbGUgKDU3NyBkw6lwdXTDqXMgw6lsdXMgYXUgc3VmZnJhZ2UgZGlyZWN0IHBvdXIgNSBhbnMpIGV0IGxlIFPDqW5hdCAoMzQ4IHPDqW5hdGV1cnMgw6lsdXMgYXUgc3VmZnJhZ2UgaW5kaXJlY3QgcG91ciA2IGFucyku"},
  {
    id: 17,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Union européenne",
    question: "RW4gcXVlbGxlIGFubsOpZSBhIMOpdMOpIHNpZ27DqSBsZSB0cmFpdMOpIGRlIFJvbWUgaW5zdGl0dWFudCBsYSBDb21tdW5hdXTDqSDDqWNvbm9taXF1ZSBldXJvcMOpZW5uZSBkb250IGxhIEZyYW5jZSBlc3QgbWVtYnJlIGZvbmRhdGV1ciA/",
    options: [
      "TGUgMjUgbWFycyAxOTU3IHBhciBzaXggcGF5cyA6IEZyYW5jZSwgQWxsZW1hZ25lLCBJdGFsaWUsIEJlbGdpcXVlLCBQYXlzLUJhcyBldCBMdXhlbWJvdXJn",
      "TGUgNyBmw6l2cmllciAxOTkyIGxvcnMgZGUgbGEgc2lnbmF0dXJlIGR1IHRyYWl0w6kgZGUgTWFhc3RyaWNodCBjcsOpYW50IGwnVW5pb24gZXVyb3DDqWVubmU=",
      "TGUgOSBtYWkgMTk1MCBkYXRlIGRlIGxhIGTDqWNsYXJhdGlvbiBkZSBSb2JlcnQgU2NodW1hbiBjb25zaWTDqXLDqWUgY29tbWUgbCdhY3RlIGZvbmRhdGV1cg==",
      "TGUgMTMgZMOpY2VtYnJlIDIwMDcgbG9ycyBkZSBsYSBzaWduYXR1cmUgZHUgdHJhaXTDqSBkZSBMaXNib25uZSByw6lmb3JtYW50IGxlcyBpbnN0aXR1dGlvbnM="
    ],
    correctHash: hashAnswer(17, 0),
    explication: "TGUgdHJhaXTDqSBkZSBSb21lIGEgw6l0w6kgc2lnbsOpIGxlIDI1IG1hcnMgMTk1NyBwYXIgNiBwYXlzIGZvbmRhdGV1cnMgOiBGcmFuY2UsIEFsbGVtYWduZSwgSXRhbGllLCBCZWxnaXF1ZSwgUGF5cy1CYXMgZXQgTHV4ZW1ib3VyZy4gSWwgYSBjcsOpw6kgbGEgQ29tbXVuYXV0w6kgw6ljb25vbWlxdWUgZXVyb3DDqWVubmUgKENFRSku"},

  // ==================== 3. DROITS ET DEVOIRS (11 questions) ====================
  
  {
    id: 18,
    categorie: "Droits et devoirs",
    sousCategorie: "DDHC",
    question: "RW4gcXVlbGxlIGFubsOpZSBhIMOpdMOpIGFkb3B0w6llIGxhIETDqWNsYXJhdGlvbiBkZXMgZHJvaXRzIGRlIGwnaG9tbWUgZXQgZHUgY2l0b3llbiBxdWkgZmFpdCBwYXJ0aWUgZHUgYmxvYyBkZSBjb25zdGl0dXRpb25uYWxpdMOpID8=",
    options: [
      "TGUgMjYgYW/Du3QgMTc4OSwgcGVuZGFudCBsYSBSw6l2b2x1dGlvbiBmcmFuw6dhaXNlLCBwYXIgbCdBc3NlbWJsw6llIG5hdGlvbmFsZSBjb25zdGl0dWFudGU=",
      "TGUgMjQgZsOpdnJpZXIgMTg0OCwgbG9ycyBkZSBsYSBwcm9jbGFtYXRpb24gZGUgbGEgRGV1eGnDqG1lIFLDqXB1YmxpcXVlIGZyYW7Dp2Fpc2U=",
      "TGUgOSBkw6ljZW1icmUgMTkwNSwgZW4gbcOqbWUgdGVtcHMgcXVlIGxhIGxvaSBkZSBzw6lwYXJhdGlvbiBkZXMgw4lnbGlzZXMgZXQgZGUgbCfDiXRhdA==",
      "TGUgNCBvY3RvYnJlIDE5NTgsIGxvcnMgZGUgbCdhZG9wdGlvbiBkZSBsYSBDb25zdGl0dXRpb24gZGUgbGEgVmUgUsOpcHVibGlxdWU="
    ],
    correctHash: hashAnswer(18, 0),
    explication: "TGEgRMOpY2xhcmF0aW9uIGRlcyBkcm9pdHMgZGUgbCdob21tZSBldCBkdSBjaXRveWVuIGEgw6l0w6kgYWRvcHTDqWUgbGUgMjYgYW/Du3QgMTc4OS4gRWxsZSBmYWl0IHBhcnRpZSBkdSBibG9jIGRlIGNvbnN0aXR1dGlvbm5hbGl0w6kgZXQgZ2FyYW50aXQgbGVzIGRyb2l0cyBmb25kYW1lbnRhdXgu"},
  {
    id: 19,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits constitutionnels",
    question: "UGFybWkgbGVzIGRyb2l0cyBzdWl2YW50cywgbGVxdWVsIG4nZXN0IFBBUyBnYXJhbnRpIGNvbW1lIHVuIGRyb2l0IGNyw6lhbmNlIG9wcG9zYWJsZSDDoCBsJ8OJdGF0IGRhbnMgbGEgQ29uc3RpdHV0aW9uIGZyYW7Dp2Fpc2UgPw==",
    options: [
      "TGUgZHJvaXQgw6AgdW4gZW1wbG9pIGdhcmFudGkgcGFyIGwnw4l0YXQgcG91ciB0b3V0IGNpdG95ZW4gZGVtYW5kZXVyIGQnZW1wbG9p",
      "TGEgbGliZXJ0w6kgZCdleHByZXNzaW9uIGV0IGRlIGNvbW11bmljYXRpb24gZGVzIHBlbnPDqWVzIGV0IGRlcyBvcGluaW9ucw==",
      "TGUgZHJvaXQgZGUgcHJvcHJpw6l0w6kgY29uc2lkw6lyw6kgY29tbWUgaW52aW9sYWJsZSBldCBzYWNyw6kgZGVwdWlzIDE3ODk=",
      "TGEgbGliZXJ0w6kgZGUgY29uc2NpZW5jZSBldCBsZSBsaWJyZSBleGVyY2ljZSBkZXMgY3VsdGVzIHJlbGlnaWV1eA=="
    ],
    correctHash: hashAnswer(19, 0),
    explication: "TGUgZHJvaXQgYXUgdHJhdmFpbCBlc3QgbWVudGlvbm7DqSBkYW5zIGxlIHByw6lhbWJ1bGUgZGUgMTk0NiwgbWFpcyBpbCBuZSBzJ2FnaXQgcGFzIGQndW5lIGdhcmFudGllIGQnZW1wbG9pIHBhciBsJ8OJdGF0LiBMJ8OJdGF0IGRvaXQgZmF2b3Jpc2VyIGwnYWNjw6hzIMOgIGwnZW1wbG9pLCBtYWlzIG5lIHBldXQgZ2FyYW50aXIgdW4gZW1wbG9pIMOgIGNoYWN1bi4="},
  {
    id: 20,
    categorie: "Droits et devoirs",
    sousCategorie: "Obligations fiscales",
    question: "UXVlbGxlIGVzdCBsYSBwcmluY2lwYWxlIG9ibGlnYXRpb24gZmlzY2FsZSBkZXMgcGVyc29ubmVzIHLDqXNpZGFudCBlbiBGcmFuY2UsIHF1J2VsbGVzIHNvaWVudCBmcmFuw6dhaXNlcyBvdSDDqXRyYW5nw6hyZXMgPw==",
    options: [
      "RMOpY2xhcmVyIGwnZW5zZW1ibGUgZGUgc2VzIHJldmVudXMgbW9uZGlhdXggZXQgcGF5ZXIgbGVzIGltcMO0dHMgY29ycmVzcG9uZGFudHMgZGFucyBsZXMgZMOpbGFpcyBsw6lnYXV4",
      "UGF5ZXIgdW5pcXVlbWVudCBsYSBUVkEgc3VyIGxlcyBhY2hhdHMgZWZmZWN0dcOpcyBkYW5zIGxlcyBjb21tZXJjZXMgZHUgdGVycml0b2lyZSBmcmFuw6dhaXM=",
      "UydhY3F1aXR0ZXIgZGVzIGltcMO0dHMgc2V1bGVtZW50IGVuIGNhcyBkZSBwcm9wcmnDqXTDqSBpbW1vYmlsacOocmUgc3VyIGxlIHRlcnJpdG9pcmUgbmF0aW9uYWw=",
      "TGVzIMOpdHJhbmdlcnMgcsOpc2lkYW50IGVuIEZyYW5jZSBzb250IGV4b27DqXLDqXMgZGUgdG91dCBpbXDDtHQgcGVuZGFudCBsZXMgY2lucSBwcmVtacOocmVzIGFubsOpZXM="
    ],
    correctHash: hashAnswer(20, 0),
    explication: "VG91dGUgcGVyc29ubmUgcsOpc2lkYW50IGVuIEZyYW5jZSBkb2l0IGTDqWNsYXJlciBzZXMgcmV2ZW51cyBldCBwYXllciBsZXMgaW1ww7R0cyBjb3JyZXNwb25kYW50cy4gQydlc3QgdW5lIG9ibGlnYXRpb24gbMOpZ2FsZSBxdWkgY29udHJpYnVlIGF1IGZpbmFuY2VtZW50IGRlcyBzZXJ2aWNlcyBwdWJsaWNzLg=="},
  {
    id: 21,
    categorie: "Droits et devoirs",
    sousCategorie: "Respect des lois",
    question: "TGUgcmVzcGVjdCBkZXMgbG9pcyBkZSBsYSBSw6lwdWJsaXF1ZSBlc3QtaWwgb2JsaWdhdG9pcmUgcG91ciB0b3V0ZXMgbGVzIHBlcnNvbm5lcyBzZSB0cm91dmFudCBzdXIgbGUgdGVycml0b2lyZSBmcmFuw6dhaXMgPw==",
    options: [
      "T3VpLCB0b3V0ZSBwZXJzb25uZSBzdXIgbGUgdGVycml0b2lyZSBmcmFuw6dhaXMgZG9pdCByZXNwZWN0ZXIgbGVzIGxvaXMsIHF1ZWxsZSBxdWUgc29pdCBzYSBuYXRpb25hbGl0w6k=",
      "Tm9uLCBzZXVscyBsZXMgY2l0b3llbnMgZnJhbsOnYWlzIGRlIG5haXNzYW5jZSBzb250IHRlbnVzIGRlIHJlc3BlY3RlciBsJ2Vuc2VtYmxlIGRlcyBsb2lz",
      "Tm9uLCBsZXMgdG91cmlzdGVzIGV0IHZpc2l0ZXVycyDDqXRyYW5nZXJzIGLDqW7DqWZpY2llbnQgZCd1bmUgaW1tdW5pdMOpIGp1cmlkaXF1ZSB0ZW1wb3JhaXJl",
      "T3VpLCBtYWlzIHVuaXF1ZW1lbnQgbGVzIGxvaXMgcMOpbmFsZXMsIGxlcyBsb2lzIGNpdmlsZXMgbmUgcydhcHBsaXF1YW50IHF1J2F1eCBuYXRpb25hdXg="
    ],
    correctHash: hashAnswer(21, 0),
    explication: "VG91dGUgcGVyc29ubmUgc3VyIGxlIHRlcnJpdG9pcmUgZnJhbsOnYWlzLCBxdWVsbGUgcXVlIHNvaXQgc2EgbmF0aW9uYWxpdMOpLCBkb2l0IHJlc3BlY3RlciBsZXMgbG9pcyBkZSBsYSBSw6lwdWJsaXF1ZS4gTnVsIG4nZXN0IGNlbnPDqSBpZ25vcmVyIGxhIGxvaS4="},
  {
    id: 22,
    categorie: "Droits et devoirs",
    sousCategorie: "Scolarité obligatoire",
    question: "RGVwdWlzIGxhIGxvaSBkZSAyMDE5LCBxdWVsbGUgZXN0IGxhIHRyYW5jaGUgZCfDomdlIHBlbmRhbnQgbGFxdWVsbGUgbCdpbnN0cnVjdGlvbiBlc3Qgb2JsaWdhdG9pcmUgZW4gRnJhbmNlID8=",
    options: [
      "RGUgMyDDoCAxNiBhbnMsIGF2ZWMgdW5lIG9ibGlnYXRpb24gZGUgZm9ybWF0aW9uIGp1c3F1J8OgIDE4IGFucyAow6ljb2xlLCBhcHByZW50aXNzYWdlIG91IGluc2VydGlvbik=",
      "RGUgNiDDoCAxNiBhbnMsIGNvbW1lIGMnw6l0YWl0IGxlIGNhcyBkZXB1aXMgbGEgbG9pIGRlIDE5NTkgc3VyIGxhIHByb2xvbmdhdGlvbiBkZSBsYSBzY29sYXJpdMOp",
      "RGUgMyDDoCAxNCBhbnMsIGwnaW5zdHJ1Y3Rpb24gw6l0YW50IGZhY3VsdGF0aXZlIGF1LWRlbMOgIHBvdXIgbGVzIMOpbMOodmVzIGVuIGRpZmZpY3VsdMOpIHNjb2xhaXJl",
      "RGUgNiDDoCAxOCBhbnMsIHNhbnMgcG9zc2liaWxpdMOpIGRlIGTDqXJvZ2F0aW9uIG3Dqm1lIHBvdXIgbGVzIMOpbMOodmVzIGVuIGFwcHJlbnRpc3NhZ2UgcHJvZmVzc2lvbm5lbA=="
    ],
    correctHash: hashAnswer(22, 0),
    explication: "RGVwdWlzIDIwMTksIGwnaW5zdHJ1Y3Rpb24gZXN0IG9ibGlnYXRvaXJlIGRlIDMgw6AgMTYgYW5zLiBMYSBmb3JtYXRpb24gZXN0IGVuc3VpdGUgb2JsaWdhdG9pcmUganVzcXUnw6AgMTggYW5zICjDqWNvbGUsIGFwcHJlbnRpc3NhZ2UsIGluc2VydGlvbi4uLiku"},
  {
    id: 23,
    categorie: "Droits et devoirs",
    sousCategorie: "Mise en situation fiscale",
    question: "Vm91cyByZWNldmV6IHVuIGF2aXMgZCdpbXBvc2l0aW9uIHF1ZSB2b3VzIGVzdGltZXogdHJvcCDDqWxldsOpLiBRdWVsbGUgZXN0IHZvdHJlIG9ibGlnYXRpb24gbMOpZ2FsZSA/",
    options: [
      "UGF5ZXIgZGFucyBsZXMgZMOpbGFpcyBwdWlzIGNvbnRlc3RlciBwYXIgcsOpY2xhbWF0aW9uIGF1cHLDqHMgZGUgbCdhZG1pbmlzdHJhdGlvbiBmaXNjYWxlIHNpIG7DqWNlc3NhaXJl",
      "SWdub3JlciBsJ2F2aXMgc2kgdm91cyBlc3RpbWV6IHF1ZSBsZSBtb250YW50IGVzdCBpbmp1c3RpZmnDqSBldCBhdHRlbmRyZSB1bmUgcmVsYW5jZSBvZmZpY2llbGxl",
      "UGF5ZXIgdW5pcXVlbWVudCBsYSBtb2l0acOpIGR1IG1vbnRhbnQgZW4gYXR0ZW5kYW50IHF1ZSBsJ2VycmV1ciBzb2l0IGNvcnJpZ8OpZSBhdXRvbWF0aXF1ZW1lbnQ=",
      "UmVmdXNlciB0b3V0IHBhaWVtZW50IGp1c3F1J8OgIG9idGVudGlvbiBkJ3VuIHJlbmRlei12b3VzIGF2ZWMgdW4gaW5zcGVjdGV1ciBkZXMgaW1ww7R0cw=="
    ],
    correctHash: hashAnswer(23, 0),
    explication: "TGUgcGFpZW1lbnQgZGVzIGltcMO0dHMgZGFucyBsZXMgZMOpbGFpcyBlc3QgdW5lIG9ibGlnYXRpb24gbMOpZ2FsZS4gRW4gY2FzIGRlIGTDqXNhY2NvcmQsIGlsIGZhdXQgZCdhYm9yZCBwYXllciBwdWlzIGNvbnRlc3RlciBwYXIgcsOpY2xhbWF0aW9uLiBFbiBjYXMgZGUgZGlmZmljdWx0w6lzLCBjb250YWN0ZXIgbCdhZG1pbmlzdHJhdGlvbiBwb3VyIGRlbWFuZGVyIHVuIGTDqWxhaS4="},
  {
    id: 24,
    categorie: "Droits et devoirs",
    sousCategorie: "Mise en situation voisinage",
    question: "Vm90cmUgdm9pc2luIGZhaXQgZHUgYnJ1aXQgZXhjZXNzaWYgbGEgbnVpdCBkZSBtYW5pw6hyZSByw6lww6l0w6llLiBRdWVscyBzb250IHZvcyByZWNvdXJzIGzDqWdhdXggPw==",
    options: [
      "QXBwZWxlciBsYSBwb2xpY2UgKDE3KSwgZmFpcmUgY29uc3RhdGVyIGxlIHRyb3VibGUgcGFyIGh1aXNzaWVyIG91IGVuZ2FnZXIgdW5lIG3DqWRpYXRpb24gZGUgdm9pc2luYWdl",
      "UmllbiwgY2FyIGxlcyBudWlzYW5jZXMgc29ub3JlcyBlbnRyZSB2b2lzaW5zIG5lIHNvbnQgcGFzIHLDqXByaW3DqWVzIHBhciBsYSBsw6lnaXNsYXRpb24gZnJhbsOnYWlzZQ==",
      "U2UgdmVuZ2VyIGVuIGZhaXNhbnQgw6lnYWxlbWVudCBkdSBicnVpdCBjYXIgbGEgbG9pIGF1dG9yaXNlIGxhIHLDqWNpcHJvY2l0w6kgZW50cmUgdm9pc2lucw==",
      "RMOpbcOpbmFnZXIgaW1tw6lkaWF0ZW1lbnQgY2FyIGF1Y3VuZSBwcm9jw6lkdXJlIGp1ZGljaWFpcmUgbidleGlzdGUgcG91ciBsZXMgdHJvdWJsZXMgZGUgdm9pc2luYWdl"
    ],
    correctHash: hashAnswer(24, 0),
    explication: "TGUgdGFwYWdlIG5vY3R1cm5lIGVzdCB1bmUgaW5mcmFjdGlvbi4gVm91cyBwb3V2ZXogYXBwZWxlciBsYSBwb2xpY2UgKDE3KSwgZmFpcmUgY29uc3RhdGVyIGxlIHRyb3VibGUgcGFyIHVuIGh1aXNzaWVyLCBvdSBlbmdhZ2VyIHVuZSBtw6lkaWF0aW9uLg=="},
  {
    id: 25,
    categorie: "Droits et devoirs",
    sousCategorie: "Devoir civique jury",
    question: "Vm91cyDDqnRlcyBjb252b3F1w6kgcG91ciBwYXJ0aWNpcGVyIMOgIHVuIGp1cnkgZCdhc3Npc2VzLiBRdWVsbGUgZXN0IGxhIG5hdHVyZSBkZSBjZXR0ZSBvYmxpZ2F0aW9uID8=",
    options: [
      "Qydlc3QgdW4gZGV2b2lyIGNpdmlxdWUgb2JsaWdhdG9pcmUgOyByZWZ1c2VyIHNhbnMgbW90aWYgbMOpZ2l0aW1lIGVzdCBwYXNzaWJsZSBkJ3VuZSBhbWVuZGUgZGUgMzc1MCBldXJvcw==",
      "Qydlc3QgdW5lIHNpbXBsZSBpbnZpdGF0aW9uIGZhY3VsdGF0aXZlIHF1ZSB2b3VzIHBvdXZleiBkw6ljbGluZXIgc2FucyBhdWN1bmUganVzdGlmaWNhdGlvbg==",
      "Qydlc3Qgb2JsaWdhdG9pcmUgc2V1bGVtZW50IHBvdXIgbGVzIGZvbmN0aW9ubmFpcmVzIGV0IGFnZW50cyBkZSBsJ8OJdGF0IGVuIGV4ZXJjaWNl",
      "Qydlc3QgZmFjdWx0YXRpZiBtYWlzIGxlIHJlZnVzIGVudHJhw65uZSB1bmUgaW5zY3JpcHRpb24gYXUgY2FzaWVyIGp1ZGljaWFpcmUgcG91ciBjaW5xIGFucw=="
    ],
    correctHash: hashAnswer(25, 0),
    explication: "w4p0cmUganVyw6kgZCdhc3Npc2VzIGVzdCB1biBkZXZvaXIgY2l2aXF1ZSBvYmxpZ2F0b2lyZS4gUmVmdXNlciBzYW5zIG1vdGlmIGzDqWdpdGltZSBlc3QgcGFzc2libGUgZCd1bmUgYW1lbmRlIHBvdXZhbnQgYWxsZXIganVzcXUnw6AgMzc1MCBldXJvcy4="},
  {
    id: 26,
    categorie: "Droits et devoirs",
    sousCategorie: "Mise en situation discrimination",
    question: "VW4gY29tbWVyw6dhbnQgcmVmdXNlIGRlIHZvdXMgc2VydmlyIGVuIHJhaXNvbiBkZSB2b3RyZSBvcmlnaW5lLiBRdWVsbGVzIHNvbnQgbGVzIHNhbmN0aW9ucyBwcsOpdnVlcyBwYXIgbGEgbG9pID8=",
    options: [
      "Qydlc3QgdW4gZMOpbGl0IGRlIGRpc2NyaW1pbmF0aW9uIHB1bmkganVzcXUnw6AgMyBhbnMgZGUgcHJpc29uIGV0IDQ1IDAwMCBldXJvcyBkJ2FtZW5kZQ==",
      "Qydlc3QgdW5lIHNpbXBsZSBjb250cmF2ZW50aW9uIHBhc3NpYmxlIGQndW5lIGFtZW5kZSBkZSAxNTAgZXVyb3MgbWF4aW11bQ==",
      "Qydlc3QgbMOpZ2FsIGNhciBsZSBjb21tZXLDp2FudCBlc3QgbGlicmUgZGUgY2hvaXNpciBzYSBjbGllbnTDqGxlIHNlbG9uIHNlcyBjcml0w6hyZXMgcGVyc29ubmVscw==",
      "Qydlc3QgaW50ZXJkaXQgbWFpcyBub24gc2FuY3Rpb25uw6kgcMOpbmFsZW1lbnQsIHNldWxlIHVuZSBhY3Rpb24gY2l2aWxlIGVzdCBwb3NzaWJsZQ=="
    ],
    correctHash: hashAnswer(26, 0),
    explication: "TGUgcmVmdXMgZGUgdmVudGUgZGlzY3JpbWluYXRvaXJlIGVzdCB1biBkw6lsaXQgcHVuaSBwYXIgbGUgQ29kZSBww6luYWwgOiBqdXNxdSfDoCAzIGFucyBkZSBwcmlzb24gZXQgNDUgMDAwIGV1cm9zIGQnYW1lbmRlLiBWb3VzIHBvdXZleiBwb3J0ZXIgcGxhaW50ZSBhdXByw6hzIGRlIGxhIHBvbGljZSBvdSBkdSBwcm9jdXJldXIu"},
  {
    id: 27,
    categorie: "Droits et devoirs",
    sousCategorie: "Mise en situation objet trouvé",
    question: "Vm91cyB0cm91dmV6IHVuIHBvcnRlZmV1aWxsZSBjb250ZW5hbnQgZGUgbCdhcmdlbnQgZXQgZGVzIHBhcGllcnMgZCdpZGVudGl0w6kuIFF1ZWxsZSBlc3Qgdm90cmUgb2JsaWdhdGlvbiBsw6lnYWxlID8=",
    options: [
      "TGUgcmFwcG9ydGVyIMOgIGxhIHBvbGljZSwgbGEgZ2VuZGFybWVyaWUgb3UgbGEgbWFpcmllIDsgZ2FyZGVyIGwnb2JqZXQgcGV1dCBjb25zdGl0dWVyIHVuIGFidXMgZGUgY29uZmlhbmNl",
      "TGUgZ2FyZGVyIGVuIGF0dGVuZGFudCBxdWUgbGUgcHJvcHJpw6l0YWlyZSB2b3VzIGNvbnRhY3RlIHZpYSB1bmUgYW5ub25jZSBzdXIgbGVzIHLDqXNlYXV4IHNvY2lhdXg=",
      "R2FyZGVyIGwnYXJnZW50IGV0IGpldGVyIGxlcyBwYXBpZXJzIHBvdXIgw6l2aXRlciB0b3V0IHByb2Jsw6htZSBhZG1pbmlzdHJhdGlmIHVsdMOpcmlldXI=",
      "TGUgcmVtZXR0cmUgYXUgcHJlbWllciBwYXNzYW50IHF1aSBhY2NlcHRlIGRlIHMnZW4gY2hhcmdlciBwb3VyIHZvdXMgbGliw6lyZXIgZGUgdG91dGUgcmVzcG9uc2FiaWxpdMOp"
    ],
    correctHash: hashAnswer(27, 0),
    explication: "Vm91cyBkZXZleiByYXBwb3J0ZXIgbCdvYmpldCB0cm91dsOpIGF1IGNvbW1pc3NhcmlhdCwgw6AgbGEgZ2VuZGFybWVyaWUgb3Ugw6AgbGEgbWFpcmllLiBHYXJkZXIgdW4gb2JqZXQgdHJvdXbDqSBzYW5zIGNoZXJjaGVyIMOgIGxlIHJlc3RpdHVlciBwZXV0IGNvbnN0aXR1ZXIgdW4gYWJ1cyBkZSBjb25maWFuY2Uu"},
  {
    id: 28,
    categorie: "Droits et devoirs",
    sousCategorie: "Droit du travail",
    question: "Vm90cmUgZW1wbG95ZXVyIHZvdXMgZGVtYW5kZSBkZSB0cmF2YWlsbGVyIGxlIGRpbWFuY2hlLiBEYW5zIHF1ZWxzIGNhcyBlc3QtY2UgYXV0b3Jpc8OpIHBhciBsYSBsb2kgPw==",
    options: [
      "RGFucyBjZXJ0YWlucyBzZWN0ZXVycyBkw6lmaW5pcyBwYXIgbGEgbG9pIChjb21tZXJjZSBhbGltZW50YWlyZSwgc2FudMOpLCBow7R0ZWxsZXJpZSkgYXZlYyBjb21wZW5zYXRpb25zIG9ibGlnYXRvaXJlcw==",
      "SmFtYWlzLCBsZSByZXBvcyBkb21pbmljYWwgZXN0IHVuIGRyb2l0IGFic29sdSBldCBpbmFsacOpbmFibGUgcG91ciB0b3VzIGxlcyBzYWxhcmnDqXMgZnJhbsOnYWlz",
      "VG91am91cnMsIGwnZW1wbG95ZXVyIGVzdCBsaWJyZSBkJ29yZ2FuaXNlciBsZSB0ZW1wcyBkZSB0cmF2YWlsIHNlbG9uIGxlcyBiZXNvaW5zIGRlIGwnZW50cmVwcmlzZQ==",
      "U2V1bGVtZW50IGF2ZWMgbCdhY2NvcmQgw6ljcml0IHByw6lhbGFibGUgZHUgc2FsYXJpw6ksIHNhbnMgYXVjdW5lIGF1dHJlIGNvbmRpdGlvbiBuaSBjb21wZW5zYXRpb24="
    ],
    correctHash: hashAnswer(28, 0),
    explication: "TGUgdHJhdmFpbCBsZSBkaW1hbmNoZSBlc3QgZW5jYWRyw6kgcGFyIGxhIGxvaS4gSWwgZXN0IGF1dG9yaXPDqSBkYW5zIGNlcnRhaW5zIHNlY3RldXJzIChjb21tZXJjZSBhbGltZW50YWlyZSwgaMO0dGVsbGVyaWUsIHNhbnTDqS4uLikgZXQgZG9pdCBkb25uZXIgbGlldSDDoCBkZXMgY29tcGVuc2F0aW9ucy4="},

  // ==================== 4. HISTOIRE, GÉOGRAPHIE ET CULTURE (8 questions) ====================
  
  {
    id: 29,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Révolution française",
    question: "UXVlbCDDqXbDqW5lbWVudCBkdSAxNCBqdWlsbGV0IDE3ODkgbWFycXVlIHN5bWJvbGlxdWVtZW50IGxlIGTDqWJ1dCBkZSBsYSBSw6l2b2x1dGlvbiBmcmFuw6dhaXNlID8=",
    options: [
      "TGEgcHJpc2UgZGUgbGEgQmFzdGlsbGUsIGZvcnRlcmVzc2Ugcm95YWxlIHN5bWJvbGUgZGUgbCdhcmJpdHJhaXJlIG1vbmFyY2hpcXVl",
      "TGEgbW9ydCBkZSBMb3VpcyBYVkkgZ3VpbGxvdGluw6kgc3VyIGxhIHBsYWNlIGRlIGxhIFLDqXZvbHV0aW9uIMOgIFBhcmlz",
      "TGUgc2FjcmUgZGUgTmFwb2zDqW9uIEJvbmFwYXJ0ZSBjb21tZSBFbXBlcmV1ciBkZXMgRnJhbsOnYWlzIMOgIE5vdHJlLURhbWU=",
      "TGEgYmF0YWlsbGUgZGUgVmFsbXksIHByZW1pw6hyZSB2aWN0b2lyZSBkZSBsJ2FybcOpZSByw6l2b2x1dGlvbm5haXJlIGZyYW7Dp2Fpc2U="
    ],
    correctHash: hashAnswer(29, 0),
    explication: "TGEgcHJpc2UgZGUgbGEgQmFzdGlsbGUgbGUgMTQganVpbGxldCAxNzg5IGVzdCBsZSBzeW1ib2xlIGR1IGTDqWJ1dCBkZSBsYSBSw6l2b2x1dGlvbiBmcmFuw6dhaXNlLiBDZXR0ZSBkYXRlIGVzdCBkZXZlbnVlIGxhIGbDqnRlIG5hdGlvbmFsZSBmcmFuw6dhaXNlIGRlcHVpcyAxODgwLg=="},
  {
    id: 30,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Charles de Gaulle",
    question: "UXVlbCBnw6luw6lyYWwgYSBkaXJpZ8OpIGxhIEZyYW5jZSBsaWJyZSBwZW5kYW50IGxhIFNlY29uZGUgR3VlcnJlIG1vbmRpYWxlIGV0IGZvbmTDqSBsYSBWZSBSw6lwdWJsaXF1ZSBlbiAxOTU4ID8=",
    options: [
      "TGUgZ8OpbsOpcmFsIENoYXJsZXMgZGUgR2F1bGxlLCBwcmVtaWVyIHByw6lzaWRlbnQgZGUgbGEgVmUgUsOpcHVibGlxdWUgZGUgMTk1OSDDoCAxOTY5",
      "TGUgbWFyw6ljaGFsIFBoaWxpcHBlIFDDqXRhaW4sIGNoZWYgZGUgbCfDiXRhdCBmcmFuw6dhaXMgc291cyBsZSByw6lnaW1lIGRlIFZpY2h5",
      "SmVhbiBNb3VsaW4sIGNoZWYgZHUgQ29uc2VpbCBuYXRpb25hbCBkZSBsYSBSw6lzaXN0YW5jZSB1bmlmacOpIGVuIDE5NDM=",
      "R2VvcmdlcyBDbGVtZW5jZWF1LCBwcsOpc2lkZW50IGR1IENvbnNlaWwgZXQgYXJ0aXNhbiBkZSBsYSB2aWN0b2lyZSBkZSAxOTE4"
    ],
    correctHash: hashAnswer(30, 0),
    explication: "TGUgZ8OpbsOpcmFsIENoYXJsZXMgZGUgR2F1bGxlIGEgZGlyaWfDqSBsYSBGcmFuY2UgbGlicmUgcGVuZGFudCBsYSBTZWNvbmRlIEd1ZXJyZSBtb25kaWFsZSBldCBhIGZvbmTDqSBsYSBWZSBSw6lwdWJsaXF1ZSBlbiAxOTU4LiBJbCBlbiBhIMOpdMOpIGxlIHByZW1pZXIgcHLDqXNpZGVudCAoMTk1OS0xOTY5KS4="},
  {
    id: 31,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Abolition esclavage",
    question: "UXVhbmQgbCdlc2NsYXZhZ2UgYS10LWlsIMOpdMOpIGTDqWZpbml0aXZlbWVudCBhYm9saSBkYW5zIGxlcyBjb2xvbmllcyBmcmFuw6dhaXNlcyBldCBwYXIgcXVlbCBkw6ljcmV0ID8=",
    options: [
      "TGUgMjcgYXZyaWwgMTg0OCBwYXIgbGUgZMOpY3JldCBkZSBWaWN0b3IgU2NoxZNsY2hlciwgc291cyBsYSBEZXV4acOobWUgUsOpcHVibGlxdWU=",
      "TGUgNCBmw6l2cmllciAxNzk0IHBhciBsYSBDb252ZW50aW9uIG5hdGlvbmFsZSwgcHJlbWnDqHJlIGFib2xpdGlvbiByw6l2b2x1dGlvbm5haXJl",
      "TGUgOSBkw6ljZW1icmUgMTkwNSBwYXIgbGEgbG9pIGRlIHPDqXBhcmF0aW9uIGRlcyDDiWdsaXNlcyBldCBkZSBsJ8OJdGF0",
      "TGUgOCBtYWkgMTk0NSDDoCBsYSBmaW4gZGUgbGEgU2Vjb25kZSBHdWVycmUgbW9uZGlhbGUgZW4gRXVyb3Bl"
    ],
    correctHash: hashAnswer(31, 0),
    explication: "TCdhYm9saXRpb24gZMOpZmluaXRpdmUgZGUgbCdlc2NsYXZhZ2UgZW4gRnJhbmNlIGEgw6l0w6kgcHJvY2xhbcOpZSBsZSAyNyBhdnJpbCAxODQ4IHBhciBsZSBkw6ljcmV0IGRlIFZpY3RvciBTY2jFk2xjaGVyLg=="},
  {
    id: 32,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Régions métropolitaines",
    question: "RGVwdWlzIGxhIHLDqWZvcm1lIHRlcnJpdG9yaWFsZSBkZSAyMDE2LCBjb21iaWVuIGxhIEZyYW5jZSBtw6l0cm9wb2xpdGFpbmUgY29tcHRlLXQtZWxsZSBkZSByw6lnaW9ucyA/",
    options: [
      "MTMgcsOpZ2lvbnMgbcOpdHJvcG9saXRhaW5lcyAoY29udHJlIDIyIGF1cGFyYXZhbnQpLCBhdXhxdWVsbGVzIHMnYWpvdXRlbnQgNSByw6lnaW9ucyBkJ291dHJlLW1lcg==",
      "MTIgcsOpZ2lvbnMgbcOpdHJvcG9saXRhaW5lcyBvcmdhbmlzw6llcyBhdXRvdXIgZGVzIHByaW5jaXBhbGVzIG3DqXRyb3BvbGVzIMOpY29ub21pcXVlcyBmcmFuw6dhaXNlcw==",
      "MTggcsOpZ2lvbnMgYXUgdG90YWwgaW5jbHVhbnQgbGVzIGTDqXBhcnRlbWVudHMgZXQgcsOpZ2lvbnMgZCdvdXRyZS1tZXIgaW50w6lncsOpcyBkZXB1aXMgMjAwMw==",
      "MjIgcsOpZ2lvbnMgbcOpdHJvcG9saXRhaW5lcyBjb21tZSBhdmFudCBsYSByw6lmb3JtZSB0ZXJyaXRvcmlhbGUgaW5pdGlhbGVtZW50IHByw6l2dWUgZW4gMjAxMA=="
    ],
    correctHash: hashAnswer(32, 0),
    explication: "RGVwdWlzIDIwMTYsIGxhIEZyYW5jZSBtw6l0cm9wb2xpdGFpbmUgY29tcHRlIDEzIHLDqWdpb25zIChjb250cmUgMjIgYXVwYXJhdmFudCkuIEVuIGNvbXB0YW50IGxlcyByw6lnaW9ucyBkJ291dHJlLW1lciwgbGEgRnJhbmNlIGNvbXB0ZSAxOCByw6lnaW9ucyBhdSB0b3RhbC4="},
  {
    id: 33,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Géographie fleuves",
    question: "UXVlbCBlc3QgbGUgcGx1cyBsb25nIGZsZXV2ZSBlbnRpw6hyZW1lbnQgZnJhbsOnYWlzLCBwcmVuYW50IHNhIHNvdXJjZSBhdSBNb250IEdlcmJpZXItZGUtSm9uYyA/",
    options: [
      "TGEgTG9pcmUsIGF2ZWMgMSAwMTIga20sIHNlIGpldGFudCBkYW5zIGwnb2PDqWFuIEF0bGFudGlxdWUgw6AgU2FpbnQtTmF6YWlyZQ==",
      "TGEgU2VpbmUsIHRyYXZlcnNhbnQgUGFyaXMgZXQgc2UgamV0YW50IGRhbnMgbGEgTWFuY2hlIGF1IEhhdnJlIGVuIE5vcm1hbmRpZQ==",
      "TGUgUmjDtG5lLCBwcmVuYW50IHNhIHNvdXJjZSBlbiBTdWlzc2UgZXQgc2UgamV0YW50IGRhbnMgbGEgTcOpZGl0ZXJyYW7DqWUgw6AgTWFyc2VpbGxl",
      "TGEgR2Fyb25uZSwgcHJlbmFudCBzYSBzb3VyY2UgZW4gRXNwYWduZSBldCBmb3JtYW50IGwnZXN0dWFpcmUgZGUgbGEgR2lyb25kZQ=="
    ],
    correctHash: hashAnswer(33, 0),
    explication: "TGEgTG9pcmUgZXN0IGxlIHBsdXMgbG9uZyBmbGV1dmUgZGUgRnJhbmNlIGF2ZWMgMSAwMTIga20uIEVsbGUgcHJlbmQgc2Egc291cmNlIGF1IE1vbnQgR2VyYmllci1kZS1Kb25jIGVuIEFyZMOoY2hlIGV0IHNlIGpldHRlIGRhbnMgbCdvY8OpYW4gQXRsYW50aXF1ZSDDoCBTYWludC1OYXphaXJlLg=="},
  {
    id: 34,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Outre-mer",
    question: "UGFybWkgbGVzIHRlcnJpdG9pcmVzIHN1aXZhbnRzLCBsZXF1ZWwgbidlc3QgUEFTIHVuIGTDqXBhcnRlbWVudCBvdSB1bmUgcsOpZ2lvbiBkJ291dHJlLW1lciBmcmFuw6dhaXMgPw==",
    options: [
      "TW9uYWNvLCBxdWkgZXN0IHVuZSBwcmluY2lwYXV0w6kgaW5kw6lwZW5kYW50ZSBldCBzb3V2ZXJhaW5lIGRlcHVpcyBsZSBYSUlJZSBzacOoY2xl",
      "TGEgR3VhZGVsb3VwZSwgZMOpcGFydGVtZW50IGV0IHLDqWdpb24gZCdvdXRyZS1tZXIgc2l0dcOpIGRhbnMgbGVzIEFudGlsbGVzIGZyYW7Dp2Fpc2Vz",
      "TGEgUsOpdW5pb24sIGTDqXBhcnRlbWVudCBldCByw6lnaW9uIGQnb3V0cmUtbWVyIHNpdHXDqSBkYW5zIGwnb2PDqWFuIEluZGllbg==",
      "TGEgTWFydGluaXF1ZSwgZMOpcGFydGVtZW50IGV0IHLDqWdpb24gZCdvdXRyZS1tZXIgc2l0dcOpIGRhbnMgbGVzIEFudGlsbGVzIGZyYW7Dp2Fpc2Vz"
    ],
    correctHash: hashAnswer(34, 0),
    explication: "TW9uYWNvIGVzdCB1bmUgcHJpbmNpcGF1dMOpIGluZMOpcGVuZGFudGUsIGNlIG4nZXN0IHBhcyB1biB0ZXJyaXRvaXJlIGZyYW7Dp2Fpcy4gTGEgR3VhZGVsb3VwZSwgbGEgTWFydGluaXF1ZSBldCBMYSBSw6l1bmlvbiBzb250IGRlcyBkw6lwYXJ0ZW1lbnRzIGV0IHLDqWdpb25zIGQnb3V0cmUtbWVyIChEUk9NKS4="},
  {
    id: 35,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Patrimoine Tour Eiffel",
    question: "UG91ciBxdWVsIMOpdsOpbmVtZW50IGV0IGVuIHF1ZWxsZSBhbm7DqWUgbGEgVG91ciBFaWZmZWwgYS10LWVsbGUgw6l0w6kgY29uc3RydWl0ZSBwYXIgR3VzdGF2ZSBFaWZmZWwgPw==",
    options: [
      "TCdFeHBvc2l0aW9uIHVuaXZlcnNlbGxlIGRlIDE4ODksIGPDqWzDqWJyYW50IGxlIGNlbnRlbmFpcmUgZGUgbGEgUsOpdm9sdXRpb24gZnJhbsOnYWlzZQ==",
      "TCdFeHBvc2l0aW9uIHVuaXZlcnNlbGxlIGRlIDE5MDAsIG1hcnF1YW50IGwnZW50csOpZSBkYW5zIGxlIG5vdXZlYXUgc2nDqGNsZQ==",
      "TGVzIEpldXggT2x5bXBpcXVlcyBkZSBQYXJpcyBlbiAxOTI0LCBwcmVtaWVycyBqZXV4IG1vZGVybmVzIGVuIEZyYW5jZQ==",
      "TGEgTGliw6lyYXRpb24gZGUgUGFyaXMgZW4gMTk0NCwgY29tbWUgc3ltYm9sZSBkZSBsYSBGcmFuY2UgbGlicmUgcmV0cm91dsOpZQ=="
    ],
    correctHash: hashAnswer(35, 0),
    explication: "TGEgVG91ciBFaWZmZWwgYSDDqXTDqSBjb25zdHJ1aXRlIHBhciBHdXN0YXZlIEVpZmZlbCBwb3VyIGwnRXhwb3NpdGlvbiB1bml2ZXJzZWxsZSBkZSAxODg5LCBjZW50ZW5haXJlIGRlIGxhIFLDqXZvbHV0aW9uIGZyYW7Dp2Fpc2Uu"},
  {
    id: 36,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Panthéon",
    question: "UXVlbCBtb251bWVudCBwYXJpc2llbiBhY2N1ZWlsbGUgbGVzIHPDqXB1bHR1cmVzIGRlcyBwZXJzb25uYWxpdMOpcyBheWFudCBtYXJxdcOpIGwnaGlzdG9pcmUgZGUgRnJhbmNlID8=",
    options: [
      "TGUgUGFudGjDqW9uLCBvw7kgcmVwb3NlbnQgVmljdG9yIEh1Z28sIE1hcmllIEN1cmllLCBKZWFuIE1vdWxpbiBldCBTaW1vbmUgVmVpbA==",
      "TGUgbXVzw6llIGR1IExvdXZyZSwgYW5jaWVubmUgcsOpc2lkZW5jZSByb3lhbGUgZXQgcGx1cyBncmFuZCBtdXPDqWUgZHUgbW9uZGU=",
      "TGUgY2jDonRlYXUgZGUgVmVyc2FpbGxlcywgc3ltYm9sZSBkZSBsYSBtb25hcmNoaWUgYWJzb2x1ZSBkZSBMb3VpcyBYSVY=",
      "TGEgY2F0aMOpZHJhbGUgTm90cmUtRGFtZSBkZSBQYXJpcywgY2hlZi1kJ8WTdXZyZSBkZSBsJ2FyY2hpdGVjdHVyZSBnb3RoaXF1ZQ=="
    ],
    correctHash: hashAnswer(36, 0),
    explication: "TGUgUGFudGjDqW9uLCDDoCBQYXJpcywgYWNjdWVpbGxlIGxlcyBzw6lwdWx0dXJlcyBkZSBwZXJzb25uYWxpdMOpcyBheWFudCBtYXJxdcOpIGwnaGlzdG9pcmUgZGUgRnJhbmNlIChWaWN0b3IgSHVnbywgTWFyaWUgQ3VyaWUsIEplYW4gTW91bGluLCBTaW1vbmUgVmVpbC4uLiku"},

  // ==================== 5. VIVRE DANS LA SOCIÉTÉ FRANÇAISE (4 questions) ====================
  
  {
    id: 37,
    categorie: "Vivre dans la société française",
    sousCategorie: "Titre de séjour",
    question: "UXVlbCBkb2N1bWVudCBlc3Qgb2JsaWdhdG9pcmUgcG91ciB1biDDqXRyYW5nZXIgbm9uLWV1cm9ww6llbiBzb3VoYWl0YW50IHLDqXNpZGVyIGVuIEZyYW5jZSBwbHVzIGRlIDMgbW9pcyA/",
    options: [
      "VW4gdGl0cmUgZGUgc8Opam91ciBvdSB1biB2aXNhIGxvbmcgc8Opam91ciB2YWxhbnQgdGl0cmUgZGUgc8Opam91ciAoVkxTLVRTKSBkw6lsaXZyw6kgcGFyIGxhIHByw6lmZWN0dXJl",
      "VW4gc2ltcGxlIHZpc2EgdG91cmlzdGlxdWUgZGUgY291cnQgc8Opam91ciB2YWxhYmxlIDkwIGpvdXJzIHJlbm91dmVsYWJsZSBpbmTDqWZpbmltZW50",
      "VW5lIGNhcnRlIGQnaWRlbnRpdMOpIGRlIHNvbiBwYXlzIGQnb3JpZ2luZSBhY2NvbXBhZ27DqWUgZCd1bmUgYXR0ZXN0YXRpb24gZCdow6liZXJnZW1lbnQ=",
      "QXVjdW4gZG9jdW1lbnQgcGFydGljdWxpZXIsIGxhIGxpYnJlIGNpcmN1bGF0aW9uIHMnYXBwbGlxdWFudCDDoCB0b3VzIGxlcyByZXNzb3J0aXNzYW50cyDDqXRyYW5nZXJz"
    ],
    correctHash: hashAnswer(37, 0),
    explication: "UG91ciBzw6lqb3VybmVyIGVuIEZyYW5jZSBwbHVzIGRlIDMgbW9pcywgdW4gw6l0cmFuZ2VyIG5vbi1ldXJvcMOpZW4gZG9pdCBwb3Nzw6lkZXIgdW4gdGl0cmUgZGUgc8Opam91ciBvdSB1biB2aXNhIGxvbmcgc8Opam91ciB2YWxhbnQgdGl0cmUgZGUgc8Opam91ciAoVkxTLVRTKS4="},
  {
    id: 38,
    categorie: "Vivre dans la société française",
    sousCategorie: "Urgences médicales",
    question: "UXVlbCBudW3DqXJvIGRldmV6LXZvdXMgYXBwZWxlciBlbiBjYXMgZCd1cmdlbmNlIG3DqWRpY2FsZSBuw6ljZXNzaXRhbnQgdW5lIGludGVydmVudGlvbiBkdSBTQU1VID8=",
    options: [
      "TGUgMTUgKFNBTVUgLSBTZXJ2aWNlIGQnQWlkZSBNw6lkaWNhbGUgVXJnZW50ZSkgcG91ciB0b3V0ZSB1cmdlbmNlIG3DqWRpY2FsZSBncmF2ZQ==",
      "TGUgMTcgKFBvbGljZSBzZWNvdXJzKSBwb3VyIHNpZ25hbGVyIHVuZSBpbmZyYWN0aW9uIG91IGRlbWFuZGVyIHVuZSBpbnRlcnZlbnRpb24gcG9saWNpw6hyZQ==",
      "TGUgMTggKFNhcGV1cnMtcG9tcGllcnMpIHBvdXIgbGVzIGluY2VuZGllcyBldCBsZXMgYWNjaWRlbnRzIGRlIGxhIHJvdXRl",
      "TGUgMTE0IChOdW3DqXJvIGQndXJnZW5jZSBwb3VyIGxlcyBwZXJzb25uZXMgc291cmRlcyBvdSBtYWxlbnRlbmRhbnRlcyk="
    ],
    correctHash: hashAnswer(38, 0),
    explication: "TGUgMTUgZXN0IGxlIG51bcOpcm8gZHUgU0FNVSAoU2VydmljZSBkJ0FpZGUgTcOpZGljYWxlIFVyZ2VudGUpLiBMZSAxNyBlc3QgbGEgcG9saWNlLCBsZSAxOCBsZXMgcG9tcGllcnMsIGxlIDExMiBsZSBudW3DqXJvIGV1cm9ww6llbiBkJ3VyZ2VuY2Uu"},
  {
    id: 39,
    categorie: "Vivre dans la société française",
    sousCategorie: "Durée du travail",
    question: "UXVlbGxlIGVzdCBsYSBkdXLDqWUgbMOpZ2FsZSBoZWJkb21hZGFpcmUgZHUgdHJhdmFpbCBlbiBGcmFuY2UgcG91ciB1biBzYWxhcmnDqSDDoCB0ZW1wcyBwbGVpbiBkZXB1aXMgbGVzIGxvaXMgQXVicnkgPw==",
    options: [
      "MzUgaGV1cmVzIHBhciBzZW1haW5lIGRlcHVpcyAyMDAwLCBsZXMgaGV1cmVzIGF1LWRlbMOgIMOpdGFudCBkZXMgaGV1cmVzIHN1cHBsw6ltZW50YWlyZXMgbWFqb3LDqWVz",
      "MzIgaGV1cmVzIHBhciBzZW1haW5lIGRlcHVpcyBsYSByw6lmb3JtZSBkdSB0ZW1wcyBkZSB0cmF2YWlsIGRlIDIwMTkgcG91ciB0b3VzIGxlcyBzZWN0ZXVycw==",
      "MzkgaGV1cmVzIHBhciBzZW1haW5lIGNvbW1lIGMnw6l0YWl0IGxlIGNhcyBhdmFudCBsZXMgb3Jkb25uYW5jZXMgTWFjcm9uIGRlIDIwMTc=",
      "NDAgaGV1cmVzIHBhciBzZW1haW5lIHNlbG9uIGxlIHN0YW5kYXJkIGV1cm9ww6llbiBhcHBsaXF1w6kgZGFucyB0b3VzIGxlcyBwYXlzIGRlIGwnVUU="
    ],
    correctHash: hashAnswer(39, 0),
    explication: "TGEgZHVyw6llIGzDqWdhbGUgZHUgdHJhdmFpbCBlbiBGcmFuY2UgZXN0IGRlIDM1IGhldXJlcyBwYXIgc2VtYWluZSBkZXB1aXMgMjAwMCAobG9pcyBBdWJyeSkuIExlcyBoZXVyZXMgYXUtZGVsw6Agc29udCBkZXMgaGV1cmVzIHN1cHBsw6ltZW50YWlyZXMgbWFqb3LDqWVzLg=="},
  {
    id: 40,
    categorie: "Vivre dans la société française",
    sousCategorie: "École publique",
    question: "UXVlbHMgc29udCBsZXMgdHJvaXMgcHJpbmNpcGVzIGZvbmRhbWVudGF1eCBkZSBsJ8OpY29sZSBwdWJsaXF1ZSBmcmFuw6dhaXNlIGlzc3VzIGRlcyBsb2lzIEp1bGVzIEZlcnJ5ID8=",
    options: [
      "R3JhdHVpdGUsIGxhw69xdWUgZXQgb2JsaWdhdG9pcmUgZGUgMyDDoCAxNiBhbnMgcG91ciB0b3VzIGxlcyBlbmZhbnRzIHLDqXNpZGFudCBlbiBGcmFuY2U=",
      "UGF5YW50ZSwgY29uZmVzc2lvbm5lbGxlIGV0IGZhY3VsdGF0aXZlIHNlbG9uIGxlIGNob2l4IGRlcyBwYXJlbnRzIHBvdXIgbGV1cnMgZW5mYW50cw==",
      "UsOpc2VydsOpZSBhdXggY2l0b3llbnMgZnJhbsOnYWlzLCBnw6lyw6llIHBhciBsZXMgcmVsaWdpb25zIGV0IGFjY2Vzc2libGUgZMOocyA2IGFucw==",
      "UHJpdsOpZSwgc8OpbGVjdGl2ZSBldCBvYmxpZ2F0b2lyZSB1bmlxdWVtZW50IHBvdXIgbGVzIGZhbWlsbGVzIGRpc3Bvc2FudCBkZSByZXZlbnVzIHN1ZmZpc2FudHM="
    ],
    correctHash: hashAnswer(40, 0),
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

// Examen avec questions décodées pour l'affichage
const _EXAMEN_1: ExamenBlanc = {
  numero: 1,
  titre: "Examen blanc #1",
  description: "40 questions en conditions réelles d'examen",
  questions: questions,
  dureeMinutes: 45,
  totalQuestions: 40
};

export const EXAMEN_1 = decodeExamen(_EXAMEN_1);
