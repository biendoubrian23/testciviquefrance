// ==================== EXAMEN BLANC #4 ====================
// Répartition officielle :
// 1. Principes et valeurs (11 questions)
// 2. Système institutionnel (6 questions)
// 3. Droits et devoirs (11 questions)
// 4. Histoire/géographie/culture (8 questions)
// 5. Vivre en France (4 questions)
// ==========================================================================
// VERSION NON ENCODÉE - Questions difficiles niveau examen civique
// ==========================================================================

import { ExamenBlanc, Question, hashAnswer, decodeExamen } from './types';

const EXAM_NUMBER = 4;

const questions: Question[] = [
  // ==================== 1. PRINCIPES ET VALEURS (11 questions) ====================
  
  {
    id: 1,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Caractère démocratique",
    question: "UXVlIHNpZ25pZmllIGxlIGNhcmFjdMOocmUgwqsgZMOpbW9jcmF0aXF1ZSDCuyBkZSBsYSBSw6lwdWJsaXF1ZSBpbnNjcml0IMOgIGwnYXJ0aWNsZSAxZXIgZGUgbGEgQ29uc3RpdHV0aW9uIGRlIDE5NTggPw==",
    options: [
      "TGUgcG91dm9pciBhcHBhcnRpZW50IGF1IHBldXBsZSBxdWkgbCdleGVyY2UgcGFyIGxlIHZvdGUgZXQgc2VzIHJlcHLDqXNlbnRhbnRzIMOpbHVzIGF1IHN1ZmZyYWdlIHVuaXZlcnNlbA==",
      "TGUgUHLDqXNpZGVudCBkZSBsYSBSw6lwdWJsaXF1ZSBkw6l0aWVudCB0b3VzIGxlcyBwb3V2b2lycyBldCBnb3V2ZXJuZSBzZXVsIHNhbnMgY29udHJlLXBvdXZvaXI=",
      "U2V1bHMgbGVzIGNpdG95ZW5zIGxlcyBwbHVzIMOpZHVxdcOpcyBwZXV2ZW50IHBhcnRpY2lwZXIgYXV4IGTDqWNpc2lvbnMgcG9saXRpcXVlcyBuYXRpb25hbGVz",
      "TGUgcG91dm9pciBlc3QgcGFydGFnw6kgZW50cmUgbGVzIGRpZmbDqXJlbnRlcyByZWxpZ2lvbnMgcHLDqXNlbnRlcyBzdXIgbGUgdGVycml0b2lyZSBmcmFuw6dhaXM="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 1, 0),
    explication: "TGEgZMOpbW9jcmF0aWUgc2lnbmlmaWUgcXVlIGxlIHBvdXZvaXIgYXBwYXJ0aWVudCBhdSBwZXVwbGUuIExlcyBjaXRveWVucyBleGVyY2VudCBjZSBwb3V2b2lyIHBhciBsZSB2b3RlIGV0IHBhciBsZXVycyByZXByw6lzZW50YW50cyDDqWx1cy4="},
  {
    id: 2,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Bonnet phrygien",
    question: "UXVlbGxlIGVzdCBsYSBzaWduaWZpY2F0aW9uIGhpc3RvcmlxdWUgZHUgYm9ubmV0IHBocnlnaWVuIHBvcnTDqSBwYXIgTWFyaWFubmUsIHN5bWJvbGUgZGUgbGEgUsOpcHVibGlxdWUgPw==",
    options: [
      "VW4gc3ltYm9sZSBkZSBsaWJlcnTDqSBow6lyaXTDqSBkZSBsJ0FudGlxdWl0w6ksIHBvcnTDqSBwYXIgbGVzIGVzY2xhdmVzIGFmZnJhbmNoaXMgZGUgUm9tZQ==",
      "VW4gY291dnJlLWNoZWYgdHJhZGl0aW9ubmVsIGJyZXRvbiBhZG9wdMOpIGNvbW1lIHN5bWJvbGUgbmF0aW9uYWwgcGVuZGFudCBsYSBSw6l2b2x1dGlvbg==",
      "VW5lIGNvaWZmZSBtaWxpdGFpcmUgcG9ydMOpZSBwYXIgbGVzIGfDqW7DqXJhdXggZGUgbCdhcm3DqWUgcsOpdm9sdXRpb25uYWlyZSBmcmFuw6dhaXNl",
      "VW4gYWNjZXNzb2lyZSBkZSBtb2RlIHBhcmlzaWVuIHBvcHVsYXJpc8OpIHBhciBsZXMgYXJpc3RvY3JhdGVzIGR1IFhWSUlJZSBzacOoY2xl"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 2, 0),
    explication: "TGUgYm9ubmV0IHBocnlnaWVuIGVzdCB1biBzeW1ib2xlIGRlIGxpYmVydMOpIGjDqXJpdMOpIGRlIGwnQW50aXF1aXTDqSByb21haW5lLiBJbCDDqXRhaXQgcG9ydMOpIHBhciBsZXMgZXNjbGF2ZXMgYWZmcmFuY2hpcyBldCBhIMOpdMOpIGFkb3B0w6kgcGVuZGFudCBsYSBSw6l2b2x1dGlvbi4="},
  {
    id: 3,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "14 juillet",
    question: "RGVwdWlzIHF1ZWxsZSBhbm7DqWUgbGUgMTQganVpbGxldCBlc3QtaWwgb2ZmaWNpZWxsZW1lbnQgbGEgZsOqdGUgbmF0aW9uYWxlIGZyYW7Dp2Fpc2UgPw==",
    options: [
      "RGVwdWlzIDE4ODAsIHNvdXMgbGEgSUlJZSBSw6lwdWJsaXF1ZSwgcGFyIHVuZSBsb2kgaW5zdGl0dWFudCBjZSBqb3VyIGNvbW1lIGbDqnRlIG5hdGlvbmFsZQ==",
      "RGVwdWlzIDE3ODksIGltbcOpZGlhdGVtZW50IGFwcsOocyBsYSBwcmlzZSBkZSBsYSBCYXN0aWxsZSBwYXIgbGVzIHLDqXZvbHV0aW9ubmFpcmVzIHBhcmlzaWVucw==",
      "RGVwdWlzIDE5NTgsIGxvcnMgZGUgbCdpbnN0YXVyYXRpb24gZGUgbGEgVmUgUsOpcHVibGlxdWUgcGFyIGxlIGfDqW7DqXJhbCBkZSBHYXVsbGU=",
      "RGVwdWlzIDE5NDUsIHBvdXIgY29tbcOpbW9yZXIgbGEgdmljdG9pcmUgc3VyIGwnQWxsZW1hZ25lIG5hemllIGV0IGxhIExpYsOpcmF0aW9u"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 3, 0),
    explication: "TGUgMTQganVpbGxldCBlc3QgZGV2ZW51IGxhIGbDqnRlIG5hdGlvbmFsZSBmcmFuw6dhaXNlIHBhciBsYSBsb2kgZHUgNiBqdWlsbGV0IDE4ODAsIHNvdXMgbGEgSUlJZSBSw6lwdWJsaXF1ZS4="},
  {
    id: 4,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Laïcité universités",
    question: "TGEgbG9pIGRlIDIwMDQgc3VyIGxlcyBzaWduZXMgcmVsaWdpZXV4IHMnYXBwbGlxdWUtdC1lbGxlIGF1eCDDqXR1ZGlhbnRzIGRlcyB1bml2ZXJzaXTDqXMgcHVibGlxdWVzID8=",
    options: [
      "Tm9uLCBjZXR0ZSBsb2kgY29uY2VybmUgdW5pcXVlbWVudCBsZXMgw6lsw6h2ZXMgZGVzIMOpY29sZXMsIGNvbGzDqGdlcyBldCBseWPDqWVzIHB1YmxpY3MsIHBhcyBsZXMgdW5pdmVyc2l0w6lz",
      "T3VpLCB0b3VzIGxlcyDDqXR1ZGlhbnRzIGRlcyB1bml2ZXJzaXTDqXMgcHVibGlxdWVzIGRvaXZlbnQgcmV0aXJlciBsZXVycyBzaWduZXMgcmVsaWdpZXV4",
      "T3VpLCBtYWlzIHVuaXF1ZW1lbnQgZGFucyBsZXMgYW1waGl0aMOpw6J0cmVzIGV0IG5vbiBkYW5zIGxlcyBlc3BhY2VzIGRlIHZpZSDDqXR1ZGlhbnRl",
      "Tm9uLCBzYXVmIHBvdXIgbGVzIMOpdHVkaWFudHMgcHLDqXBhcmFudCBkZXMgY29uY291cnMgZGUgbGEgZm9uY3Rpb24gcHVibGlxdWUgdGVycml0b3JpYWxl"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 4, 0),
    explication: "TGEgbG9pIGRlIDIwMDQgc3VyIGxlcyBzaWduZXMgcmVsaWdpZXV4IG5lIHMnYXBwbGlxdWUgcGFzIGF1eCB1bml2ZXJzaXTDqXMuIExlcyDDqXR1ZGlhbnRzIG1hamV1cnMgcGV1dmVudCBwb3J0ZXIgZGVzIHNpZ25lcyByZWxpZ2lldXgsIHNldWxzIGxlcyBhZ2VudHMgcHVibGljcyBkb2l2ZW50IMOqdHJlIG5ldXRyZXMu"},
  {
    id: 5,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Neutralité services publics",
    question: "VW4gdXNhZ2VyIGRlcyBzZXJ2aWNlcyBwdWJsaWNzIHBldXQtaWwgcG9ydGVyIGRlcyBzaWduZXMgcmVsaWdpZXV4IGxvcnNxdSdpbCBzZSByZW5kIGRhbnMgdW5lIGFkbWluaXN0cmF0aW9uID8=",
    options: [
      "T3VpLCBsZXMgdXNhZ2VycyBuZSBzb250IHBhcyBzb3VtaXMgw6AgbCdvYmxpZ2F0aW9uIGRlIG5ldXRyYWxpdMOpLCBjb250cmFpcmVtZW50IGF1eCBhZ2VudHMgcHVibGljcw==",
      "Tm9uLCB0b3VzIGxlcyBzaWduZXMgcmVsaWdpZXV4IHNvbnQgaW50ZXJkaXRzIGRhbnMgbCdlbnNlbWJsZSBkZXMgYsOidGltZW50cyBwdWJsaWNzIGZyYW7Dp2Fpcw==",
      "T3VpLCBtYWlzIHVuaXF1ZW1lbnQgbGVzIHNpZ25lcyByZWxpZ2lldXggZGlzY3JldHMgbmUgZMOpcGFzc2FudCBwYXMgdW5lIGNlcnRhaW5lIHRhaWxsZSByw6lnbGVtZW50w6ll",
      "Tm9uLCBzYXVmIGF1dG9yaXNhdGlvbiBwcsOpYWxhYmxlIGR1IHJlc3BvbnNhYmxlIGR1IHNlcnZpY2UgcHVibGljIGNvbmNlcm7DqQ=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 5, 0),
    explication: "TGVzIHVzYWdlcnMgZGVzIHNlcnZpY2VzIHB1YmxpY3MgbmUgc29udCBwYXMgc291bWlzIMOgIGwnb2JsaWdhdGlvbiBkZSBuZXV0cmFsaXTDqS4gSWxzIHBldXZlbnQgcG9ydGVyIGRlcyBzaWduZXMgcmVsaWdpZXV4LCBjb250cmFpcmVtZW50IGF1eCBhZ2VudHMgcHVibGljcy4="},
  {
    id: 6,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Égalité chances",
    question: "UXUnZXN0LWNlIHF1ZSBsZSBwcmluY2lwZSBkJ8OpZ2FsaXTDqSBkZXMgY2hhbmNlcyBldCBjb21tZW50IGxhIFLDqXB1YmxpcXVlIGxlIG1ldC1lbGxlIGVuIMWTdXZyZSA/",
    options: [
      "TCfDiXRhdCBkb2l0IHBlcm1ldHRyZSDDoCBjaGFjdW4gZCdhdHRlaW5kcmUgc29uIHBvdGVudGllbCBwYXIgbCfDqWR1Y2F0aW9uIGV0IGRlcyBkaXNwb3NpdGlmcyBkZSBjb3JyZWN0aW9uIGRlcyBpbsOpZ2FsaXTDqXM=",
      "VG91cyBsZXMgY2l0b3llbnMgZG9pdmVudCBvYnRlbmlyIGV4YWN0ZW1lbnQgbGVzIG3Dqm1lcyByw6lzdWx0YXRzIHNjb2xhaXJlcyBldCBwcm9mZXNzaW9ubmVscw==",
      "TCfDiXRhdCBuZSBkb2l0IHBhcyBpbnRlcnZlbmlyLCBsYWlzc2FudCBsYSBjb25jdXJyZW5jZSBsaWJyZSBkw6l0ZXJtaW5lciBsYSByw6l1c3NpdGUgZGUgY2hhY3Vu",
      "U2V1bHMgbGVzIGNpdG95ZW5zIG3DqXJpdGFudHMgc2Vsb24gZGVzIGNyaXTDqHJlcyBvYmplY3RpZnMgcGV1dmVudCBiw6luw6lmaWNpZXIgZGUgbCdhaWRlIGRlIGwnw4l0YXQ="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 6, 0),
    explication: "TCfDqWdhbGl0w6kgZGVzIGNoYW5jZXMgdmlzZSDDoCBwZXJtZXR0cmUgw6AgY2hhY3VuIGQnYXR0ZWluZHJlIHNvbiBwb3RlbnRpZWwuIEwnw4l0YXQgbWV0IGVuIHBsYWNlIGwnw6lkdWNhdGlvbiBncmF0dWl0ZSwgbGVzIGJvdXJzZXMsIGxlcyB6b25lcyBkJ8OpZHVjYXRpb24gcHJpb3JpdGFpcmUuLi4="},
  {
    id: 7,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation logement",
    question: "Vm91cyBjaGVyY2hleiB1biBsb2dlbWVudCBldCBsZSBwcm9wcmnDqXRhaXJlIGV4aWdlIGRlIGNvbm5hw650cmUgdm90cmUgcmVsaWdpb24gYXZhbnQgZGUgbG91ZXIuIEVzdC1jZSBsw6lnYWwgPw==",
    options: [
      "Tm9uLCBjJ2VzdCB1bmUgcXVlc3Rpb24gZGlzY3JpbWluYXRvaXJlIGludGVyZGl0ZSA7IGxlIHByb3ByacOpdGFpcmUgbmUgcGV1dCBwYXMgZGVtYW5kZXIgY2V0dGUgaW5mb3JtYXRpb24=",
      "T3VpLCBsZSBwcm9wcmnDqXRhaXJlIGEgbGUgZHJvaXQgZGUgY2hvaXNpciBzb24gbG9jYXRhaXJlIHNlbG9uIHRvdXMgbGVzIGNyaXTDqHJlcyBxdSdpbCBzb3VoYWl0ZQ==",
      "T3VpLCBzaSBsZSBsb2dlbWVudCBlc3Qgc2l0dcOpIGRhbnMgdW4gaW1tZXVibGUgb8O5IHLDqXNpZGVudCBkZXMgcGVyc29ubmVzIGQndW5lIHJlbGlnaW9uIHBhcnRpY3VsacOocmU=",
      "Tm9uLCBzYXVmIHNpIGxlIHByb3ByacOpdGFpcmUgZXN0IGx1aS1tw6ptZSByZWxpZ2lldXggZXQgc291aGFpdGUgdW4gbG9jYXRhaXJlIGRlIG3Dqm1lIGNvbmZlc3Npb24="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 7, 0),
    explication: "RGVtYW5kZXIgbGEgcmVsaWdpb24gZCd1biBjYW5kaWRhdCBsb2NhdGFpcmUgZXN0IGludGVyZGl0LiBDJ2VzdCB1bmUgZGlzY3JpbWluYXRpb24gcHVuaWUgcGFyIGxhIGxvaS4gTGUgcHJvcHJpw6l0YWlyZSBuZSBwZXV0IGRlbWFuZGVyIHF1ZSBkZXMgaW5mb3JtYXRpb25zIGxpw6llcyDDoCBsYSBzb2x2YWJpbGl0w6ku"},
  {
    id: 8,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mixité",
    question: "TGUgcHJpbmNpcGUgZGUgbWl4aXTDqSBlc3QtaWwgb2JsaWdhdG9pcmUgZGFucyBsZXMgw6l0YWJsaXNzZW1lbnRzIHNjb2xhaXJlcyBwdWJsaWNzIGVuIEZyYW5jZSA/",
    options: [
      "T3VpLCBsYSBtaXhpdMOpIGZpbGxlcy1nYXLDp29ucyBlc3Qgb2JsaWdhdG9pcmUgZGFucyBsJ2Vuc2VpZ25lbWVudCBwdWJsaWMgZGVwdWlzIGxhIGxvaSBIYWJ5IGRlIDE5NzU=",
      "Tm9uLCBsZXMgZmFtaWxsZXMgcGV1dmVudCBjaG9pc2lyIGVudHJlIMOpY29sZXMgbWl4dGVzIGV0IMOpY29sZXMgbm9uLW1peHRlcyBzZWxvbiBsZXVycyBwcsOpZsOpcmVuY2Vz",
      "T3VpLCBtYWlzIHVuaXF1ZW1lbnQgZGFucyBsZXMgbHljw6llcywgbGVzIMOpY29sZXMgcHJpbWFpcmVzIHBvdXZhbnQgcmVzdGVyIG5vbi1taXh0ZXM=",
      "Tm9uLCBsYSBtaXhpdMOpIGVzdCBlbmNvdXJhZ8OpZSBtYWlzIG5vbiBvYmxpZ2F0b2lyZSBzZWxvbiBsZXMgdHJhZGl0aW9ucyBsb2NhbGVzIGRlIGNoYXF1ZSByw6lnaW9u"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 8, 0),
    explication: "TGEgbWl4aXTDqSBlc3Qgb2JsaWdhdG9pcmUgZGFucyBsJ2Vuc2VpZ25lbWVudCBwdWJsaWMgZGVwdWlzIGxhIGxvaSBIYWJ5IGRlIDE5NzUuIExlcyDDqXRhYmxpc3NlbWVudHMgcHVibGljcyBkb2l2ZW50IGFjY3VlaWxsaXIgZmlsbGVzIGV0IGdhcsOnb25zIGVuc2VtYmxlLg=="},
  {
    id: 9,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "HALDE Défenseur",
    question: "UXVlbGxlIGluc3RpdHV0aW9uIGEgw6l0w6kgZnVzaW9ubsOpZSBhdmVjIGQnYXV0cmVzIHBvdXIgY3LDqWVyIGxlIETDqWZlbnNldXIgZGVzIGRyb2l0cyBlbiAyMDExID8=",
    options: [
      "TGEgSEFMREUgKEhhdXRlIEF1dG9yaXTDqSBkZSBMdXR0ZSBjb250cmUgbGVzIERpc2NyaW1pbmF0aW9ucyBldCBwb3VyIGwnw4lnYWxpdMOpKSwgbGUgTcOpZGlhdGV1ciBkZSBsYSBSw6lwdWJsaXF1ZSBldCBsZSBEw6lmZW5zZXVyIGRlcyBlbmZhbnRz",
      "TGUgQ29uc2VpbCBjb25zdGl0dXRpb25uZWwsIGxhIENvdXIgZGVzIGNvbXB0ZXMgZXQgbGUgQ29uc2VpbCBkJ8OJdGF0IHLDqXVuaXMgZW4gdW5lIHNldWxlIGF1dG9yaXTDqQ==",
      "TGEgQ29tbWlzc2lvbiBuYXRpb25hbGUgZGUgbCdpbmZvcm1hdGlxdWUgZXQgZGVzIGxpYmVydMOpcyAoQ05JTCkgZXQgbCdBdXRvcml0w6kgZGUgbGEgY29uY3VycmVuY2U=",
      "TCdJbnNwZWN0aW9uIGfDqW7DqXJhbGUgZGUgbCdhZG1pbmlzdHJhdGlvbiBldCBsJ0luc3BlY3Rpb24gZ8OpbsOpcmFsZSBkZXMgZmluYW5jZXMgZnVzaW9ubsOpZXM="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 9, 0),
    explication: "TGUgRMOpZmVuc2V1ciBkZXMgZHJvaXRzLCBjcsOpw6kgZW4gMjAxMSwgYSBmdXNpb25uw6kgbGEgSEFMREUsIGxlIE3DqWRpYXRldXIgZGUgbGEgUsOpcHVibGlxdWUsIGxlIETDqWZlbnNldXIgZGVzIGVuZmFudHMgZXQgbGEgQ29tbWlzc2lvbiBkZSBkw6lvbnRvbG9naWUgZGUgbGEgc8OpY3VyaXTDqS4="},
  {
    id: 10,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Violence conjugale",
    question: "TGVzIHZpb2xlbmNlcyBjb25qdWdhbGVzIHNvbnQtZWxsZXMgY29uc2lkw6lyw6llcyBjb21tZSB1bmUgY2lyY29uc3RhbmNlIGFnZ3JhdmFudGUgcGFyIGxlIENvZGUgcMOpbmFsID8=",
    options: [
      "T3VpLCBsZSBmYWl0IHF1ZSBsYSB2aWN0aW1lIHNvaXQgbGUgY29uam9pbnQgb3UgcGFydGVuYWlyZSBjb25zdGl0dWUgdW5lIGNpcmNvbnN0YW5jZSBhZ2dyYXZhbnRlIGRlcyBwZWluZXM=",
      "Tm9uLCBsZXMgdmlvbGVuY2VzIGNvbmp1Z2FsZXMgc29udCB0cmFpdMOpZXMgY29tbWUgbidpbXBvcnRlIHF1ZWxsZSBhdXRyZSBmb3JtZSBkZSB2aW9sZW5jZSBlbnRyZSBwYXJ0aWN1bGllcnM=",
      "T3VpLCBtYWlzIHVuaXF1ZW1lbnQgc2kgbGUgY291cGxlIGVzdCBtYXJpw6kgbMOpZ2FsZW1lbnQsIHBhcyBwb3VyIGxlcyBjb25jdWJpbnMgb3UgcGFjc8Opcw==",
      "Tm9uLCBsZXMgdmlvbGVuY2VzIGF1IHNlaW4gZHUgY291cGxlIHJlbMOodmVudCBleGNsdXNpdmVtZW50IGR1IGRyb2l0IGNpdmlsIGV0IG5vbiBkdSBkcm9pdCBww6luYWw="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 10, 0),
    explication: "TGVzIHZpb2xlbmNlcyBjb21taXNlcyBzdXIgbGUgY29uam9pbnQgb3UgcGFydGVuYWlyZSBjb25zdGl0dWVudCB1bmUgY2lyY29uc3RhbmNlIGFnZ3JhdmFudGUuIExlcyBwZWluZXMgc29udCBwbHVzIGxvdXJkZXMgcG91ciBwcm90w6lnZXIgbGVzIHZpY3RpbWVzIGRlIHZpb2xlbmNlcyBpbnRyYWZhbWlsaWFsZXMu"},
  {
    id: 11,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mariage pour tous",
    question: "RGVwdWlzIHF1ZWxsZSBhbm7DqWUgbGUgbWFyaWFnZSBjaXZpbCBlc3QtaWwgb3V2ZXJ0IGF1eCBjb3VwbGVzIGRlIG3Dqm1lIHNleGUgZW4gRnJhbmNlID8=",
    options: [
      "RGVwdWlzIDIwMTMsIHBhciBsYSBsb2kgZHUgMTcgbWFpIG91dnJhbnQgbGUgbWFyaWFnZSBhdXggY291cGxlcyBkZSBwZXJzb25uZXMgZGUgbcOqbWUgc2V4ZQ==",
      "RGVwdWlzIDE5OTksIGxvcnMgZGUgbGEgY3LDqWF0aW9uIGR1IFBhY3RlIGNpdmlsIGRlIHNvbGlkYXJpdMOpIChQQUNTKSBwYXIgbGUgZ291dmVybmVtZW50IEpvc3Bpbg==",
      "RGVwdWlzIDIwMDgsIGxvcnMgZGUgbGEgcsOpdmlzaW9uIGNvbnN0aXR1dGlvbm5lbGxlIG1vZGVybmlzYW50IGxlcyBpbnN0aXR1dGlvbnMgZGUgbGEgUsOpcHVibGlxdWU=",
      "RGVwdWlzIDE5ODEsIHNvdXMgbGEgcHLDqXNpZGVuY2UgZGUgRnJhbsOnb2lzIE1pdHRlcnJhbmQsIHByZW1pw6hyZSBhbHRlcm5hbmNlIGRlIGxhIFZlIFLDqXB1YmxpcXVl"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 11, 0),
    explication: "TGEgbG9pIGR1IDE3IG1haSAyMDEzIGEgb3V2ZXJ0IGxlIG1hcmlhZ2UgY2l2aWwgYXV4IGNvdXBsZXMgZGUgcGVyc29ubmVzIGRlIG3Dqm1lIHNleGUuIENlcyBjb3VwbGVzIHBldXZlbnQgw6lnYWxlbWVudCBhZG9wdGVyLg=="},

  // ==================== 2. SYSTÈME INSTITUTIONNEL (6 questions) ====================
  
  {
    id: 12,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Référendum",
    question: "TGUgUHLDqXNpZGVudCBkZSBsYSBSw6lwdWJsaXF1ZSBwZXV0LWlsIG9yZ2FuaXNlciB1biByw6lmw6lyZW5kdW0gZXQgc3VyIHF1ZWxzIHN1amV0cyA/",
    options: [
      "T3VpLCBzdXIgbCdvcmdhbmlzYXRpb24gZGVzIHBvdXZvaXJzIHB1YmxpY3MsIGxlcyByw6lmb3JtZXMgw6ljb25vbWlxdWVzIGV0IHNvY2lhbGVzLCBvdSBsYSByYXRpZmljYXRpb24gZGUgdHJhaXTDqXM=",
      "Tm9uLCBzZXVsIGxlIFBhcmxlbWVudCBwZXV0IGTDqWNpZGVyIGRlIGNvbnN1bHRlciBsZSBwZXVwbGUgcGFyIHZvaWUgcsOpZsOpcmVuZGFpcmU=",
      "T3VpLCBtYWlzIHVuaXF1ZW1lbnQgcG91ciBtb2RpZmllciBsYSBDb25zdGl0dXRpb24gZnJhbsOnYWlzZSwgc2FucyBhdXRyZSBwb3NzaWJpbGl0w6k=",
      "Tm9uLCBsZXMgcsOpZsOpcmVuZHVtcyBvbnQgw6l0w6kgc3VwcHJpbcOpcyBwYXIgbGEgcsOpdmlzaW9uIGNvbnN0aXR1dGlvbm5lbGxlIGRlIDIwMDg="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 12, 0),
    explication: "TGUgUHLDqXNpZGVudCBwZXV0IG9yZ2FuaXNlciB1biByw6lmw6lyZW5kdW0gc3VyIGwnb3JnYW5pc2F0aW9uIGRlcyBwb3V2b2lycyBwdWJsaWNzLCBzdXIgZGVzIHLDqWZvcm1lcyDDqWNvbm9taXF1ZXMgb3Ugc29jaWFsZXMsIG91IHBvdXIgcmF0aWZpZXIgY2VydGFpbnMgdHJhaXTDqXMgKGFydGljbGUgMTEpLg=="},
  {
    id: 13,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Article 49.3",
    question: "UXUnZXN0LWNlIHF1ZSBsJ2FydGljbGUgNDkuMyBkZSBsYSBDb25zdGl0dXRpb24gZXQgcXVlbGxlcyBzb250IHNlcyBjb25zw6lxdWVuY2VzID8=",
    options: [
      "SWwgcGVybWV0IGF1IFByZW1pZXIgbWluaXN0cmUgZCdlbmdhZ2VyIGxhIHJlc3BvbnNhYmlsaXTDqSBkdSBHb3V2ZXJuZW1lbnQgc3VyIHVuIHRleHRlIGFkb3B0w6kgc2FucyB2b3RlIHNhdWYgbW90aW9uIGRlIGNlbnN1cmU=",
      "SWwgYXV0b3Jpc2UgbGUgUHLDqXNpZGVudCDDoCBkaXNzb3VkcmUgbCdBc3NlbWJsw6llIG5hdGlvbmFsZSBlbiBjYXMgZGUgY3Jpc2UgcG9saXRpcXVlIG1hamV1cmU=",
      "SWwgZMOpZmluaXQgbGVzIGNvbmRpdGlvbnMgZGUgcsOpdmlzaW9uIGRlIGxhIENvbnN0aXR1dGlvbiBwYXIgbGUgQ29uZ3LDqHMgb3UgbGUgcsOpZsOpcmVuZHVt",
      "SWwgZml4ZSBsZXMgcsOoZ2xlcyBkZSBsJ8OpdGF0IGQndXJnZW5jZSBldCBsZXMgcG91dm9pcnMgZXhjZXB0aW9ubmVscyBkdSBQcsOpc2lkZW50"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 13, 0),
    explication: "TCdhcnRpY2xlIDQ5LjMgcGVybWV0IGF1IFByZW1pZXIgbWluaXN0cmUgZCdlbmdhZ2VyIGxhIHJlc3BvbnNhYmlsaXTDqSBkdSBHb3V2ZXJuZW1lbnQgc3VyIHVuIHRleHRlLiBDZWx1aS1jaSBlc3QgYWRvcHTDqSBzYW5zIHZvdGUgc2F1ZiBzaSB1bmUgbW90aW9uIGRlIGNlbnN1cmUgZXN0IHZvdMOpZS4="},
  {
    id: 14,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Sénateurs",
    question: "Q29tbWVudCBsZXMgc8OpbmF0ZXVycyBzb250LWlscyDDqWx1cyBldCBxdWVsbGUgZXN0IGxhIGR1csOpZSBkZSBsZXVyIG1hbmRhdCA/",
    options: [
      "QXUgc3VmZnJhZ2UgdW5pdmVyc2VsIGluZGlyZWN0IHBhciB1biBjb2xsw6hnZSBkZSBncmFuZHMgw6lsZWN0ZXVycyAow6lsdXMgbG9jYXV4KSBwb3VyIHVuIG1hbmRhdCBkZSA2IGFucw==",
      "QXUgc3VmZnJhZ2UgdW5pdmVyc2VsIGRpcmVjdCBwYXIgdG91cyBsZXMgY2l0b3llbnMgbWFqZXVycyBwb3VyIHVuIG1hbmRhdCBkZSA1IGFucw==",
      "UGFyIG5vbWluYXRpb24gZHUgUHLDqXNpZGVudCBkZSBsYSBSw6lwdWJsaXF1ZSBzdXIgcHJvcG9zaXRpb24gZGVzIHByw6lmZXRzIHBvdXIgdW4gbWFuZGF0IGRlIDkgYW5z",
      "UGFyIGNvb3B0YXRpb24gZGVzIHPDqW5hdGV1cnMgc29ydGFudHMgY2hvaXNpc3NhbnQgbGV1cnMgc3VjY2Vzc2V1cnMgcG91ciB1biBtYW5kYXQgw6Agdmll"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 14, 0),
    explication: "TGVzIHPDqW5hdGV1cnMgc29udCDDqWx1cyBhdSBzdWZmcmFnZSBpbmRpcmVjdCBwYXIgbGVzIGdyYW5kcyDDqWxlY3RldXJzIChjb25zZWlsbGVycyBtdW5pY2lwYXV4LCBkw6lwYXJ0ZW1lbnRhdXgsIHLDqWdpb25hdXggZXQgZMOpcHV0w6lzKSBwb3VyIDYgYW5zLg=="},
  {
    id: 15,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Conseil des ministres",
    question: "UXVpIHByw6lzaWRlIGxlIENvbnNlaWwgZGVzIG1pbmlzdHJlcyBldCBxdWVsIGVzdCBzb24gcsO0bGUgZGFucyBsZSBmb25jdGlvbm5lbWVudCBkdSBHb3V2ZXJuZW1lbnQgPw==",
    options: [
      "TGUgUHLDqXNpZGVudCBkZSBsYSBSw6lwdWJsaXF1ZSBsZSBwcsOpc2lkZSA7IGMnZXN0IGzDoCBxdWUgc29udCBhZG9wdMOpcyBsZXMgcHJvamV0cyBkZSBsb2kgZXQgZMOpY3JldHMgaW1wb3J0YW50cw==",
      "TGUgUHJlbWllciBtaW5pc3RyZSBsZSBwcsOpc2lkZSBjYXIgaWwgZXN0IGxlIGNoZWYgZHUgR291dmVybmVtZW50IGV0IGNvb3Jkb25uZSBsJ2FjdGlvbiBtaW5pc3TDqXJpZWxsZQ==",
      "TGUgcHLDqXNpZGVudCBkZSBsJ0Fzc2VtYmzDqWUgbmF0aW9uYWxlIGxlIHByw6lzaWRlIHBvdXIgZ2FyYW50aXIgbGUgY29udHLDtGxlIHBhcmxlbWVudGFpcmU=",
      "TGUgR2FyZGUgZGVzIFNjZWF1eCBsZSBwcsOpc2lkZSBlbiB0YW50IHF1ZSBnYXJkaWVuIGRlcyBpbnN0aXR1dGlvbnMgcsOpcHVibGljYWluZXMgZnJhbsOnYWlzZXM="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 15, 0),
    explication: "TGUgUHLDqXNpZGVudCBkZSBsYSBSw6lwdWJsaXF1ZSBwcsOpc2lkZSBsZSBDb25zZWlsIGRlcyBtaW5pc3RyZXMuIEMnZXN0IGzDoCBxdWUgc29udCBhZG9wdMOpcyBsZXMgcHJvamV0cyBkZSBsb2ksIG9yZG9ubmFuY2VzIGV0IGTDqWNyZXRzIGltcG9ydGFudHMu"},
  {
    id: 16,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Département préfet",
    question: "UXVlbCBlc3QgbGUgcsO0bGUgZHUgcHLDqWZldCBldCBxdWkgbGUgbm9tbWUgw6AgbGEgdMOqdGUgZHUgZMOpcGFydGVtZW50ID8=",
    options: [
      "UmVwcsOpc2VudGFudCBkZSBsJ8OJdGF0IG5vbW3DqSBwYXIgZMOpY3JldCBkdSBQcsOpc2lkZW50IGVuIENvbnNlaWwgZGVzIG1pbmlzdHJlcywgaWwgdmVpbGxlIMOgIGwnYXBwbGljYXRpb24gZGVzIGxvaXM=",
      "w4lsdSBwYXIgbGVzIGNvbnNlaWxsZXJzIGTDqXBhcnRlbWVudGF1eCBwb3VyIGRpcmlnZXIgbGUgY29uc2VpbCBkw6lwYXJ0ZW1lbnRhbCBldCBzZXMgc2VydmljZXM=",
      "Rm9uY3Rpb25uYWlyZSByZWNydXTDqSBwYXIgY29uY291cnMgYWRtaW5pc3RyYXRpZiBnw6lyYW50IGxlcyBzZXJ2aWNlcyBkw6ljb25jZW50csOpcyBkZSBsJ8OJdGF0",
      "TWFnaXN0cmF0IG5vbW3DqSBwYXIgbGUgQ29uc2VpbCBzdXDDqXJpZXVyIGRlIGxhIG1hZ2lzdHJhdHVyZSBwb3VyIGdhcmFudGlyIGwnb3JkcmUgcHVibGlj"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 16, 0),
    explication: "TGUgcHLDqWZldCBlc3QgbGUgcmVwcsOpc2VudGFudCBkZSBsJ8OJdGF0IGRhbnMgbGUgZMOpcGFydGVtZW50LiBOb21tw6kgcGFyIGTDqWNyZXQgZHUgUHLDqXNpZGVudCBlbiBDb25zZWlsIGRlcyBtaW5pc3RyZXMsIGlsIHZlaWxsZSDDoCBsJ2FwcGxpY2F0aW9uIGRlcyBsb2lzIGV0IGRpcmlnZSBsZXMgc2VydmljZXMgZGUgbCfDiXRhdC4="},
  {
    id: 17,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Compétences région",
    question: "UXVlbGxlcyBzb250IGxlcyBwcmluY2lwYWxlcyBjb21ww6l0ZW5jZXMgZGVzIHLDqWdpb25zIGRlcHVpcyBsZXMgbG9pcyBkZSBkw6ljZW50cmFsaXNhdGlvbiA/",
    options: [
      "THljw6llcywgdHJhbnNwb3J0cyByw6lnaW9uYXV4IChURVIpLCBmb3JtYXRpb24gcHJvZmVzc2lvbm5lbGxlLCBkw6l2ZWxvcHBlbWVudCDDqWNvbm9taXF1ZSBldCBhbcOpbmFnZW1lbnQgZHUgdGVycml0b2lyZQ==",
      "w4ljb2xlcyBwcmltYWlyZXMsIGFpZGUgc29jaWFsZSDDoCBsJ2VuZmFuY2UsIFJTQSBldCBnZXN0aW9uIGRlcyByb3V0ZXMgZMOpcGFydGVtZW50YWxlcw==",
      "VW5pdmVyc2l0w6lzLCBow7RwaXRhdXggcHVibGljcywgYXJtw6llIGV0IHBvbGljZSBuYXRpb25hbGUgc3VyIGxlIHRlcnJpdG9pcmUgcsOpZ2lvbmFs",
      "TWF0ZXJuZWxsZXMsIGFzc2Fpbmlzc2VtZW50LCBkaXN0cmlidXRpb24gZCdlYXUgcG90YWJsZSBldCBjb2xsZWN0ZSBkZXMgb3JkdXJlcyBtw6luYWfDqHJlcw=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 17, 0),
    explication: "TGVzIHLDqWdpb25zIGfDqHJlbnQgbGVzIGx5Y8OpZXMsIGxlcyB0cmFuc3BvcnRzIHLDqWdpb25hdXggKFRFUiksIGxhIGZvcm1hdGlvbiBwcm9mZXNzaW9ubmVsbGUsIGxlIGTDqXZlbG9wcGVtZW50IMOpY29ub21pcXVlIGV0IGwnYW3DqW5hZ2VtZW50IGR1IHRlcnJpdG9pcmUu"},

  // ==================== 3. DROITS ET DEVOIRS (11 questions) ====================
  
  {
    id: 18,
    categorie: "Droits et devoirs",
    sousCategorie: "Droit à la vie privée",
    question: "TGUgZHJvaXQgYXUgcmVzcGVjdCBkZSBsYSB2aWUgcHJpdsOpZSBlc3QtaWwgcHJvdMOpZ8OpIHBhciBsYSBsb2kgZnJhbsOnYWlzZSBldCBjb21tZW50ID8=",
    options: [
      "T3VpLCBsJ2FydGljbGUgOSBkdSBDb2RlIGNpdmlsIGxlIHByb3TDqGdlIDsgdG91dGUgYXR0ZWludGUgcGV1dCBkb25uZXIgbGlldSDDoCBkZXMgZG9tbWFnZXMgZXQgaW50w6lyw6p0cw==",
      "Tm9uLCBsYSB2aWUgcHJpdsOpZSBuJ2VzdCBwYXMgcHJvdMOpZ8OpZSBqdXJpZGlxdWVtZW50LCBjaGFjdW4gZXN0IHJlc3BvbnNhYmxlIGRlIHNhIHByb3ByZSBwcm90ZWN0aW9u",
      "T3VpLCBtYWlzIHVuaXF1ZW1lbnQgcG91ciBsZXMgcGVyc29ubmFsaXTDqXMgcHVibGlxdWVzIGV0IGxlcyDDqWx1cyBkZSBsYSBSw6lwdWJsaXF1ZQ==",
      "Tm9uLCBsZXMgaW5mb3JtYXRpb25zIHBlcnNvbm5lbGxlcyBwZXV2ZW50IMOqdHJlIGxpYnJlbWVudCBkaWZmdXPDqWVzIHBhciBsYSBwcmVzc2Ugc2FucyByZXN0cmljdGlvbg=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 18, 0),
    explication: "TCdhcnRpY2xlIDkgZHUgQ29kZSBjaXZpbCBwcm90w6hnZSBsZSBkcm9pdCBhdSByZXNwZWN0IGRlIGxhIHZpZSBwcml2w6llLiBUb3V0ZSBhdHRlaW50ZSBwZXV0IGRvbm5lciBsaWV1IMOgIHLDqXBhcmF0aW9uIHBhciBkZXMgZG9tbWFnZXMgZXQgaW50w6lyw6p0cy4="},
  {
    id: 19,
    categorie: "Droits et devoirs",
    sousCategorie: "Données personnelles",
    question: "UXVlbGxlIGF1dG9yaXTDqSBpbmTDqXBlbmRhbnRlIHByb3TDqGdlIGxlcyBkb25uw6llcyBwZXJzb25uZWxsZXMgZGVzIGNpdG95ZW5zIGVuIEZyYW5jZSA/",
    options: [
      "TGEgQ05JTCAoQ29tbWlzc2lvbiBOYXRpb25hbGUgZGUgbCdJbmZvcm1hdGlxdWUgZXQgZGVzIExpYmVydMOpcyksIHZlaWxsYW50IGF1IHJlc3BlY3QgZHUgUkdQRA==",
      "TGUgRMOpZmVuc2V1ciBkZXMgZHJvaXRzLCBhdXRvcml0w6kgY29uc3RpdHV0aW9ubmVsbGUgcHJvdMOpZ2VhbnQgdG91dGVzIGxlcyBsaWJlcnTDqXMgZm9uZGFtZW50YWxlcw==",
      "TCdBdXRvcml0w6kgZGUgbGEgY29uY3VycmVuY2UsIHLDqWd1bGFudCBsZXMgcHJhdGlxdWVzIGNvbW1lcmNpYWxlcyBkZXMgZW50cmVwcmlzZXMgbnVtw6lyaXF1ZXM=",
      "TGUgQ29uc2VpbCBzdXDDqXJpZXVyIGRlIGwnYXVkaW92aXN1ZWwgKENTQSksIGNvbnRyw7RsYW50IGxlcyBtw6lkaWFzIGF1ZGlvdmlzdWVscyBmcmFuw6dhaXM="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 19, 0),
    explication: "TGEgQ05JTCAoQ29tbWlzc2lvbiBOYXRpb25hbGUgZGUgbCdJbmZvcm1hdGlxdWUgZXQgZGVzIExpYmVydMOpcykgcHJvdMOoZ2UgbGVzIGRvbm7DqWVzIHBlcnNvbm5lbGxlcy4gRWxsZSB2ZWlsbGUgYXUgcmVzcGVjdCBkdSBSR1BEIGV0IHBldXQgc2FuY3Rpb25uZXIgbGVzIHZpb2xhdGlvbnMu"},
  {
    id: 20,
    categorie: "Droits et devoirs",
    sousCategorie: "Congé maternité",
    question: "UXVlbGxlIGVzdCBsYSBkdXLDqWUgbWluaW1hbGUgZHUgY29uZ8OpIG1hdGVybml0w6kgcG91ciB1bmUgcHJlbWnDqHJlIGdyb3NzZXNzZSBlbiBGcmFuY2UgPw==",
    options: [
      "MTYgc2VtYWluZXMgKDYgc2VtYWluZXMgYXZhbnQgZXQgMTAgc2VtYWluZXMgYXByw6hzIGwnYWNjb3VjaGVtZW50KSBhdmVjIG1haW50aWVuIGR1IHNhbGFpcmU=",
      "OCBzZW1haW5lcyBkZSBjb25nw6kgb2JsaWdhdG9pcmUgbm9uIHLDqW11bsOpcsOpIHBvdXIgdG91dGVzIGxlcyBzYWxhcmnDqWVzIGVuY2VpbnRlcw==",
      "MjYgc2VtYWluZXMgZMOocyBsYSBwcmVtacOocmUgZ3Jvc3Nlc3NlIHBvdXIgZmF2b3Jpc2VyIGwnw6lnYWxpdMOpIGF2ZWMgbGVzIHBheXMgbm9yZGlxdWVz",
      "NCBzZW1haW5lcyBhdmFudCBsJ2FjY291Y2hlbWVudCBzYW5zIGdhcmFudGllIGQnZW1wbG9pIMOgIGxhIGZpbiBkdSBjb25nw6kgbMOpZ2Fs"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 20, 0),
    explication: "TGUgY29uZ8OpIG1hdGVybml0w6kgZXN0IGRlIDE2IHNlbWFpbmVzIHBvdXIgdW5lIHByZW1pw6hyZSBncm9zc2Vzc2UgKDYgYXZhbnQsIDEwIGFwcsOocyBsJ2FjY291Y2hlbWVudCkuIExhIHNhbGFyacOpZSBwZXLDp29pdCBkZXMgaW5kZW1uaXTDqXMgam91cm5hbGnDqHJlcyBkZSBsYSBTw6ljdXJpdMOpIHNvY2lhbGUu"},
  {
    id: 21,
    categorie: "Droits et devoirs",
    sousCategorie: "Congé paternité",
    question: "UXVlbGxlIGVzdCBsYSBkdXLDqWUgZHUgY29uZ8OpIHBhdGVybml0w6kgZXQgZCdhY2N1ZWlsIGRlIGwnZW5mYW50IGRlcHVpcyBsYSByw6lmb3JtZSBkZSAyMDIxID8=",
    options: [
      "Mjggam91cnMgKDI1IGpvdXJzICsgMyBqb3VycyBkZSBuYWlzc2FuY2UpLCBkb250IDcgam91cnMgb2JsaWdhdG9pcmVzIMOgIHByZW5kcmUgYXByw6hzIGxhIG5haXNzYW5jZQ==",
      "MTEgam91cnMgY2FsZW5kYWlyZXMgw6AgcHJlbmRyZSBkYW5zIGxlcyA0IG1vaXMgc3VpdmFudCBsYSBuYWlzc2FuY2UgZGUgbCdlbmZhbnQ=",
      "MyBqb3VycyBvdXZyw6lzIGFjY29yZMOpcyBwYXIgbCdlbXBsb3lldXIgc2FucyBpbmRlbW5pc2F0aW9uIGRlIGxhIFPDqWN1cml0w6kgc29jaWFsZQ==",
      "MTYgc2VtYWluZXMgY29tbWUgbGUgY29uZ8OpIG1hdGVybml0w6kgcG91ciBnYXJhbnRpciBsJ8OpZ2FsaXTDqSBwYXJlbnRhbGU="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 21, 0),
    explication: "RGVwdWlzIDIwMjEsIGxlIGNvbmfDqSBwYXRlcm5pdMOpIGVzdCBkZSAyOCBqb3VycyAoMjUgam91cnMgKyAzIGpvdXJzIGRlIG5haXNzYW5jZSkuIFVuZSBwYXJ0aWUgZXN0IG9ibGlnYXRvaXJlIHBvdXIgZmF2b3Jpc2VyIGwnaW1wbGljYXRpb24gZGVzIHDDqHJlcy4="},
  {
    id: 22,
    categorie: "Droits et devoirs",
    sousCategorie: "Droit de retrait",
    question: "RGFucyBxdWVsbGVzIGNvbmRpdGlvbnMgdW4gc2FsYXJpw6kgcGV1dC1pbCBleGVyY2VyIHNvbiBkcm9pdCBkZSByZXRyYWl0IGF1IHRyYXZhaWwgPw==",
    options: [
      "RW4gY2FzIGRlIGRhbmdlciBncmF2ZSBldCBpbW1pbmVudCBwb3VyIHNhIHZpZSBvdSBzYSBzYW50w6ksIHNhbnMgc2FuY3Rpb24gbmkgcmV0ZW51ZSBkZSBzYWxhaXJl",
      "RW4gY2FzIGRlIGTDqXNhY2NvcmQgYXZlYyBsZXMgZGlyZWN0aXZlcyBkZSBzb24gZW1wbG95ZXVyIHN1ciBsJ29yZ2FuaXNhdGlvbiBkdSB0cmF2YWls",
      "VW5pcXVlbWVudCBhcHLDqHMgYXV0b3Jpc2F0aW9uIMOpY3JpdGUgZGUgbCdpbnNwZWN0aW9uIGR1IHRyYXZhaWwgY29tcMOpdGVudGUgdGVycml0b3JpYWxl",
      "RW4gY2FzIGRlIG3DqXNlbnRlbnRlIGF2ZWMgdW4gY29sbMOoZ3VlIHJlbmRhbnQgaW1wb3NzaWJsZSBsYSBjb2xsYWJvcmF0aW9uIHByb2Zlc3Npb25uZWxsZQ=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 22, 0),
    explication: "TGUgZHJvaXQgZGUgcmV0cmFpdCBwZXJtZXQgw6AgdW4gc2FsYXJpw6kgZGUgcXVpdHRlciBzb24gcG9zdGUgZW4gY2FzIGRlIGRhbmdlciBncmF2ZSBldCBpbW1pbmVudCBwb3VyIHNhIHZpZSBvdSBzYSBzYW50w6ksIHNhbnMgc2FuY3Rpb24gbmkgcmV0ZW51ZSBkZSBzYWxhaXJlLg=="},
  {
    id: 23,
    categorie: "Droits et devoirs",
    sousCategorie: "Mise en situation travail",
    question: "Vm90cmUgZW1wbG95ZXVyIHZvdXMgZGVtYW5kZSBkZSBzaWduZXIgdW4gY29udHJhdCB2b3VzIGludGVyZGlzYW50IGRlIHJlam9pbmRyZSBsYSBjb25jdXJyZW5jZS4gRXN0LWNlIGzDqWdhbCA/",
    options: [
      "T3VpLCB1bmUgY2xhdXNlIGRlIG5vbi1jb25jdXJyZW5jZSBlc3QgbMOpZ2FsZSBzaSBlbGxlIGVzdCBsaW1pdMOpZSBkYW5zIGxlIHRlbXBzLCBsJ2VzcGFjZSBldCBjb21wZW5zw6llIGZpbmFuY2nDqHJlbWVudA==",
      "Tm9uLCBjZWxhIGNvbnN0aXR1ZSB1bmUgYXR0ZWludGUgw6AgbGEgbGliZXJ0w6kgZHUgdHJhdmFpbCBpbnRlcmRpdGUgcGFyIGxlIENvZGUgZHUgdHJhdmFpbA==",
      "T3VpLCBsJ2VtcGxveWV1ciBwZXV0IGltcG9zZXIgdG91dGVzIGxlcyBjbGF1c2VzIHF1J2lsIHNvdWhhaXRlIGRhbnMgbGUgY29udHJhdCBkZSB0cmF2YWls",
      "Tm9uLCBzYXVmIHNpIHZvdXMgw6p0ZXMgY2FkcmUgZGlyaWdlYW50IG91IG1hbmRhdGFpcmUgc29jaWFsIGRlIGwnZW50cmVwcmlzZSBjb25jZXJuw6ll"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 23, 0),
    explication: "VW5lIGNsYXVzZSBkZSBub24tY29uY3VycmVuY2UgZXN0IGzDqWdhbGUgc2kgZWxsZSBlc3QgbGltaXTDqWUgZGFucyBsZSB0ZW1wcywgZGFucyBsJ2VzcGFjZSwganVzdGlmacOpZSBwYXIgbGVzIGludMOpcsOqdHMgZGUgbCdlbnRyZXByaXNlIGV0IGNvbXBlbnPDqWUgZmluYW5jacOocmVtZW50Lg=="},
  {
    id: 24,
    categorie: "Droits et devoirs",
    sousCategorie: "Assistance juridique GAV",
    question: "QXZlei12b3VzIGRyb2l0IMOgIGwnYXNzaXN0YW5jZSBkJ3VuIGF2b2NhdCBkw6hzIGxlIGTDqWJ1dCBkJ3VuZSBnYXJkZSDDoCB2dWUgPw==",
    options: [
      "T3VpLCB2b3VzIHBvdXZleiBkZW1hbmRlciBsJ2Fzc2lzdGFuY2UgZCd1biBhdm9jYXQgZMOocyBsZSBkw6lidXQgZGUgbGEgZ2FyZGUgw6AgdnVlLCBjJ2VzdCB1biBkcm9pdCBmb25kYW1lbnRhbA==",
      "Tm9uLCBsJ2F2b2NhdCBuZSBwZXV0IGludGVydmVuaXIgcXUnYXByw6hzIGxlcyAyNCBwcmVtacOocmVzIGhldXJlcyBkZSBsYSBwcm9jw6lkdXJl",
      "T3VpLCBtYWlzIHVuaXF1ZW1lbnQgc2kgdm91cyDDqnRlcyBlbiBtZXN1cmUgZGUgcGF5ZXIgbGVzIGhvbm9yYWlyZXMgZGUgbCdhdm9jYXQgdm91cy1tw6ptZQ==",
      "Tm9uLCBsYSBwcsOpc2VuY2UgZCd1biBhdm9jYXQgbidlc3Qgb2JsaWdhdG9pcmUgcXVlIGRldmFudCB1biBqdWdlLCBwYXMgZW4gZ2FyZGUgw6AgdnVl"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 24, 0),
    explication: "Vm91cyBhdmV6IGRyb2l0IMOgIGwnYXNzaXN0YW5jZSBkJ3VuIGF2b2NhdCBkw6hzIGxlIGTDqWJ1dCBkZSBsYSBnYXJkZSDDoCB2dWUuIEMnZXN0IHVuIGRyb2l0IGZvbmRhbWVudGFsIHF1aSBuZSBwZXV0IMOqdHJlIHJlZnVzw6ku"},
  {
    id: 25,
    categorie: "Droits et devoirs",
    sousCategorie: "Assurance habitation",
    question: "TCdhc3N1cmFuY2UgaGFiaXRhdGlvbiBlc3QtZWxsZSBvYmxpZ2F0b2lyZSBlbiBGcmFuY2UgcG91ciBsZXMgbG9jYXRhaXJlcyA/",
    options: [
      "T3VpLCBsZXMgbG9jYXRhaXJlcyBkb2l2ZW50IG9ibGlnYXRvaXJlbWVudCBzb3VzY3JpcmUgdW5lIGFzc3VyYW5jZSBjb3V2cmFudCBhdSBtaW5pbXVtIGxlcyByaXNxdWVzIGxvY2F0aWZz",
      "Tm9uLCBsJ2Fzc3VyYW5jZSBoYWJpdGF0aW9uIGVzdCB0b3Vqb3VycyBmYWN1bHRhdGl2ZSBxdWVsIHF1ZSBzb2l0IGxlIHN0YXR1dCBkJ29jY3VwYXRpb24=",
      "T3VpLCBtYWlzIHVuaXF1ZW1lbnQgcG91ciBsZXMgbG9nZW1lbnRzIHNpdHXDqXMgZGFucyBkZXMgem9uZXMgw6AgcmlzcXVlIChpbm9uZGF0aW9uLCBpbmNlbmRpZSk=",
      "Tm9uLCBzZXVsIGxlIHByb3ByacOpdGFpcmUgZXN0IHRlbnUgZGUgc291c2NyaXJlIHVuZSBhc3N1cmFuY2UgcG91ciBzb24gYmllbiBpbW1vYmlsaWVy"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 25, 0),
    explication: "TGVzIGxvY2F0YWlyZXMgZG9pdmVudCBvYmxpZ2F0b2lyZW1lbnQgc291c2NyaXJlIHVuZSBhc3N1cmFuY2UgaGFiaXRhdGlvbiBjb3V2cmFudCBhdSBtaW5pbXVtIGxlcyByaXNxdWVzIGxvY2F0aWZzIChpbmNlbmRpZSwgZMOpZ8OidCBkZXMgZWF1eCwgZXhwbG9zaW9uKS4="},
  {
    id: 26,
    categorie: "Droits et devoirs",
    sousCategorie: "Mise en situation héritage",
    question: "RW4gY2FzIGRlIGTDqWPDqHMsIGxlcyBow6lyaXRpZXJzIGRvaXZlbnQtaWxzIG9ibGlnYXRvaXJlbWVudCBwYXllciBsZXMgZGV0dGVzIGR1IGTDqWZ1bnQgPw==",
    options: [
      "T3VpLCBzYXVmIHMnaWxzIHJlbm9uY2VudCDDoCBsYSBzdWNjZXNzaW9uIG91IGwnYWNjZXB0ZW50IMOgIGNvbmN1cnJlbmNlIGRlIGwnYWN0aWYgbmV0IGR1IHBhdHJpbW9pbmU=",
      "Tm9uLCBsZXMgZGV0dGVzIGRpc3BhcmFpc3NlbnQgYXV0b21hdGlxdWVtZW50IGF2ZWMgbGUgZMOpY8OocyBkdSBkw6liaXRldXIgc2FucyB0cmFuc21pc3Npb24=",
      "T3VpLCB0b3VzIGxlcyBow6lyaXRpZXJzIHNvbnQgc29saWRhaXJlbWVudCByZXNwb25zYWJsZXMgZGVzIGRldHRlcyBzYW5zIHBvc3NpYmlsaXTDqSBkZSByZWZ1cw==",
      "Tm9uLCBzZXVsIGwnaMOpcml0aWVyIGTDqXNpZ27DqSBjb21tZSBleMOpY3V0ZXVyIHRlc3RhbWVudGFpcmUgZXN0IHJlc3BvbnNhYmxlIGRlcyBkZXR0ZXM="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 26, 0),
    explication: "TGVzIGjDqXJpdGllcnMgcGV1dmVudCByZW5vbmNlciDDoCBsYSBzdWNjZXNzaW9uIG91IGwnYWNjZXB0ZXIgw6AgY29uY3VycmVuY2UgZGUgbCdhY3RpZiBuZXQgcG91ciBuZSBwYXMgcGF5ZXIgcGx1cyBxdWUgbGEgdmFsZXVyIGRlIGwnaMOpcml0YWdlIHJlw6d1Lg=="},
  {
    id: 27,
    categorie: "Droits et devoirs",
    sousCategorie: "Autorité parentale",
    question: "UXUnZXN0LWNlIHF1ZSBsJ2F1dG9yaXTDqSBwYXJlbnRhbGUgZXQgY29tbWVudCBzJ2V4ZXJjZS10LWVsbGUgZW4gY2FzIGRlIHPDqXBhcmF0aW9uIGRlcyBwYXJlbnRzID8=",
    options: [
      "RW5zZW1ibGUgZGVzIGRyb2l0cyBldCBkZXZvaXJzIGRlcyBwYXJlbnRzIGVudmVycyBsJ2VuZmFudCA7IGVsbGUgcmVzdGUgY29uam9pbnRlIG3Dqm1lIGFwcsOocyBzw6lwYXJhdGlvbiBzYXVmIGTDqWNpc2lvbiBjb250cmFpcmUgZHUganVnZQ==",
      "TGUgcG91dm9pciBhYnNvbHUgZGVzIHBhcmVudHMgc3VyIGxldXJzIGVuZmFudHMganVzcXUnw6AgbGV1ciBtYWpvcml0w6kgc2FucyBhdWN1biBjb250csO0bGU=",
      "VW4gZHJvaXQgZXhjbHVzaWYgZHUgcMOocmUgZGUgZmFtaWxsZSBxdWkgZMOpY2lkZSBzZXVsIGRlIGwnw6lkdWNhdGlvbiBldCBkdSBtb2RlIGRlIHZpZSBkZSBsJ2VuZmFudA==",
      "VW5lIHJlc3BvbnNhYmlsaXTDqSB0cmFuc2bDqXLDqWUgYXV0b21hdGlxdWVtZW50IMOgIGwnw4l0YXQgZW4gY2FzIGRlIHPDqXBhcmF0aW9uIG91IGRpdm9yY2UgZGVzIHBhcmVudHM="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 27, 0),
    explication: "TCdhdXRvcml0w6kgcGFyZW50YWxlIGVzdCBsJ2Vuc2VtYmxlIGRlcyBkcm9pdHMgZXQgZGV2b2lycyBkZXMgcGFyZW50cy4gRWxsZSByZXN0ZSBjb25qb2ludGUgYXByw6hzIHPDqXBhcmF0aW9uIHNhdWYgZMOpY2lzaW9uIGR1IGp1Z2UgYXV4IGFmZmFpcmVzIGZhbWlsaWFsZXMu"},
  {
    id: 28,
    categorie: "Droits et devoirs",
    sousCategorie: "Médiation familiale",
    question: "UXUnZXN0LWNlIHF1ZSBsYSBtw6lkaWF0aW9uIGZhbWlsaWFsZSBldCBxdWFuZCBwZXV0LWVsbGUgw6p0cmUgcHJvcG9zw6llID8=",
    options: [
      "VW4gcHJvY2Vzc3VzIGRlIHLDqXNvbHV0aW9uIGFtaWFibGUgZGVzIGNvbmZsaXRzIGZhbWlsaWF1eCBhdmVjIHVuIHRpZXJzIG5ldXRyZSwgcHJvcG9zw6kgYXZhbnQgb3UgcGVuZGFudCB1bmUgcHJvY8OpZHVyZSBqdWRpY2lhaXJl",
      "VW5lIHByb2PDqWR1cmUganVkaWNpYWlyZSBvYmxpZ2F0b2lyZSBhdmFudCB0b3V0IGRpdm9yY2UgcG91ciB0ZW50ZXIgdW5lIHLDqWNvbmNpbGlhdGlvbiBkZXMgw6lwb3V4",
      "VW4gY29uc2VpbCBkb25uw6kgcGFyIHVuIGF2b2NhdCBwb3VyIMOpdml0ZXIgdW5lIHByb2PDqWR1cmUganVkaWNpYWlyZSBjb8O7dGV1c2UgZXQgbG9uZ3Vl",
      "VW5lIHRow6lyYXBpZSBmYW1pbGlhbGUgcmVtYm91cnPDqWUgcGFyIGxhIFPDqWN1cml0w6kgc29jaWFsZSBwb3VyIGxlcyBmYW1pbGxlcyBlbiBkaWZmaWN1bHTDqQ=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 28, 0),
    explication: "TGEgbcOpZGlhdGlvbiBmYW1pbGlhbGUgZXN0IHVuIHByb2Nlc3N1cyBkZSByw6lzb2x1dGlvbiBhbWlhYmxlIGRlcyBjb25mbGl0cyBhdmVjIHVuIG3DqWRpYXRldXIgbmV1dHJlLiBFbGxlIHBldXQgw6p0cmUgcHJvcG9zw6llIG91IG9yZG9ubsOpZSBwYXIgbGUganVnZS4="},

  // ==================== 4. HISTOIRE, GÉOGRAPHIE ET CULTURE (8 questions) ====================
  
  {
    id: 29,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Napoléon Code civil",
    question: "UXVlbGxlIHLDqWZvcm1lIG1hamV1cmUgTmFwb2zDqW9uIEJvbmFwYXJ0ZSBhLXQtaWwgbWlzZSBlbiBwbGFjZSBxdWkgcsOpZ2l0IGVuY29yZSBsZSBkcm9pdCBmcmFuw6dhaXMgYXVqb3VyZCdodWkgPw==",
    options: [
      "TGUgQ29kZSBjaXZpbCBkZSAxODA0IChDb2RlIE5hcG9sw6lvbiksIHVuaWZpYW50IGxlIGRyb2l0IHByaXbDqSBmcmFuw6dhaXMgZXQgaW5zcGlyYW50IGRlIG5vbWJyZXV4IHBheXM=",
      "TGEgRMOpY2xhcmF0aW9uIGRlcyBkcm9pdHMgZGUgbCdob21tZSBldCBkdSBjaXRveWVuLCB0ZXh0ZSBmb25kYXRldXIgZGVzIGxpYmVydMOpcyBpbmRpdmlkdWVsbGVz",
      "TGEgQ29uc3RpdHV0aW9uIGRlIGxhIFZlIFLDqXB1YmxpcXVlLCBvcmdhbmlzYW50IGxlcyBpbnN0aXR1dGlvbnMgcG9saXRpcXVlcyBhY3R1ZWxsZXM=",
      "TGEgbG9pIGRlIHPDqXBhcmF0aW9uIGRlcyDDiWdsaXNlcyBldCBkZSBsJ8OJdGF0LCBmb25kZW1lbnQgZGUgbGEgbGHDr2NpdMOpIGZyYW7Dp2Fpc2U="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 29, 0),
    explication: "TGUgQ29kZSBjaXZpbCBkZSAxODA0LCBhdXNzaSBhcHBlbMOpIENvZGUgTmFwb2zDqW9uLCB1bmlmaWUgbGUgZHJvaXQgcHJpdsOpIGZyYW7Dp2Fpcy4gSWwgYSBpbnNwaXLDqSBkZSBub21icmV1eCBjb2RlcyBjaXZpbHMgZGFucyBsZSBtb25kZS4="},
  {
    id: 30,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "IIIe République",
    question: "UXVlbGxlIFLDqXB1YmxpcXVlIGZyYW7Dp2Fpc2UgYSDDqXTDqSBsYSBwbHVzIGxvbmd1ZSBkZSBsJ2hpc3RvaXJlIGV0IGNvbWJpZW4gZCdhbm7DqWVzIGEtdC1lbGxlIGR1csOpID8=",
    options: [
      "TGEgSUlJZSBSw6lwdWJsaXF1ZSAoMTg3MC0xOTQwKSwgcXVpIGEgZHVyw6kgZW52aXJvbiA3MCBhbnMsIGNvbnNvbGlkYW50IGxlcyBpbnN0aXR1dGlvbnMgZMOpbW9jcmF0aXF1ZXM=",
      "TGEgVmUgUsOpcHVibGlxdWUgKGRlcHVpcyAxOTU4KSwgYWN0dWVsbGVtZW50IGVuIHZpZ3VldXIgZGVwdWlzIHBsdXMgZGUgNjAgYW5z",
      "TGEgSXJlIFLDqXB1YmxpcXVlICgxNzkyLTE4MDQpLCBwcmVtacOocmUgZXhww6lyaWVuY2UgcsOpcHVibGljYWluZSBkZSBsJ2hpc3RvaXJlIGRlIEZyYW5jZQ==",
      "TGEgSVZlIFLDqXB1YmxpcXVlICgxOTQ2LTE5NTgpLCByw6lnaW1lIHBhcmxlbWVudGFpcmUgaW5zdGF1csOpIGFwcsOocyBsYSBMaWLDqXJhdGlvbg=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 30, 0),
    explication: "TGEgSUlJZSBSw6lwdWJsaXF1ZSAoMTg3MC0xOTQwKSBlc3QgbGEgcGx1cyBsb25ndWUgUsOpcHVibGlxdWUgZnJhbsOnYWlzZS4gRWxsZSBhIGR1csOpIGVudmlyb24gNzAgYW5zIGV0IGEgY29uc29saWTDqSBsZXMgaW5zdGl0dXRpb25zIGTDqW1vY3JhdGlxdWVzIGV0IGxhIGxhw69jaXTDqS4="},
  {
    id: 31,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Mai 1968",
    question: "UXVlbHMgw6l2w6luZW1lbnRzIG1hamV1cnMgb250IG1hcnF1w6kgbGEgRnJhbmNlIGVuIG1haSAxOTY4ID8=",
    options: [
      "VW5lIGNyaXNlIHNvY2lhbGUgZXQgcG9saXRpcXVlIG3DqmxhbnQgY29udGVzdGF0aW9uIMOpdHVkaWFudGUsIGdyw6h2ZSBnw6luw6lyYWxlIGV0IHJlbWlzZSBlbiBjYXVzZSBkZSBsYSBzb2Npw6l0w6k=",
      "TCfDqWxlY3Rpb24gZGUgQ2hhcmxlcyBkZSBHYXVsbGUgY29tbWUgcHLDqXNpZGVudCBkZSBsYSBSw6lwdWJsaXF1ZSBwb3VyIHVuIG5vdXZlYXUgbWFuZGF0",
      "TCdhZG9wdGlvbiBkZSBsYSBDb25zdGl0dXRpb24gZGUgbGEgVmUgUsOpcHVibGlxdWUgcGFyIHLDqWbDqXJlbmR1bSBwb3B1bGFpcmUgbmF0aW9uYWw=",
      "TGEgZmluIGRlIGxhIGd1ZXJyZSBkJ0FsZ8OpcmllIGV0IGwnaW5kw6lwZW5kYW5jZSBkZXMgYW5jaWVubmVzIGNvbG9uaWVzIGZyYW7Dp2Fpc2VzIGQnQWZyaXF1ZQ=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 31, 0),
    explication: "TWFpIDE5NjggYSDDqXTDqSBtYXJxdcOpIHBhciB1bmUgY29udGVzdGF0aW9uIMOpdHVkaWFudGUsIHVuZSBncsOodmUgZ8OpbsOpcmFsZSBldCB1bmUgY3Jpc2UgcG9saXRpcXVlIG1hamV1cmUuIENlcyDDqXbDqW5lbWVudHMgb250IHByb2ZvbmTDqW1lbnQgdHJhbnNmb3Jtw6kgbGEgc29jacOpdMOpIGZyYW7Dp2Fpc2Uu"},
  {
    id: 32,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Outre-mer Caraïbes",
    question: "UXVlbHMgc29udCBsZXMgZMOpcGFydGVtZW50cyBmcmFuw6dhaXMgc2l0dcOpcyBkYW5zIGxhIG1lciBkZXMgQ2FyYcOvYmVzID8=",
    options: [
      "TGEgR3VhZGVsb3VwZSBldCBsYSBNYXJ0aW5pcXVlLCBkw6lwYXJ0ZW1lbnRzIGV0IHLDqWdpb25zIGQnb3V0cmUtbWVyIGRlcyBBbnRpbGxlcyBmcmFuw6dhaXNlcw==",
      "TGEgUsOpdW5pb24gZXQgTWF5b3R0ZSwgc2l0dcOpcyBkYW5zIGwnb2PDqWFuIEluZGllbiBhdSBsYXJnZSBkZSBsJ0FmcmlxdWUgb3JpZW50YWxl",
      "TGEgR3V5YW5lIGV0IFNhaW50LVBpZXJyZS1ldC1NaXF1ZWxvbiwgdGVycml0b2lyZXMgZGUgbCdBdGxhbnRpcXVlIGV0IGRlIGwnQW3DqXJpcXVlIGR1IE5vcmQ=",
      "TGEgUG9seW7DqXNpZSBmcmFuw6dhaXNlIGV0IGxhIE5vdXZlbGxlLUNhbMOpZG9uaWUsIGNvbGxlY3Rpdml0w6lzIGR1IFBhY2lmaXF1ZSBTdWQ="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 32, 0),
    explication: "TGEgR3VhZGVsb3VwZSBldCBsYSBNYXJ0aW5pcXVlIHNvbnQgbGVzIGRldXggZMOpcGFydGVtZW50cyBmcmFuw6dhaXMgc2l0dcOpcyBkYW5zIGxhIG1lciBkZXMgQ2FyYcOvYmVzLiBDZSBzb250IGRlcyBEUk9NIChkw6lwYXJ0ZW1lbnRzIGV0IHLDqWdpb25zIGQnb3V0cmUtbWVyKS4="},
  {
    id: 33,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Marseille",
    question: "UXVlbGxlIGVzdCBsYSBkZXV4acOobWUgdmlsbGUgZGUgRnJhbmNlIHBhciBzYSBwb3B1bGF0aW9uIGV0IHF1ZWwgZXN0IHNvbiBwcmluY2lwYWwgYXRvdXQgZ8Opb2dyYXBoaXF1ZSA/",
    options: [
      "TWFyc2VpbGxlLCB2aWxsZSBwb3J0dWFpcmUgbcOpZGl0ZXJyYW7DqWVubmUgbGEgcGx1cyBhbmNpZW5uZSBkZSBGcmFuY2UsIGZvbmTDqWUgcGFyIGxlcyBHcmVjcyBlbiA2MDAgYXYuIEouLUMu",
      "THlvbiwgYW5jaWVubmUgY2FwaXRhbGUgZGVzIEdhdWxlcyBzaXR1w6llIGF1IGNvbmZsdWVudCBkdSBSaMO0bmUgZXQgZGUgbGEgU2HDtG5l",
      "VG91bG91c2UsIGNhcGl0YWxlIGRlIGwnYcOpcm9uYXV0aXF1ZSBldXJvcMOpZW5uZSBkYW5zIGxlIHN1ZC1vdWVzdCBkZSBsYSBGcmFuY2U=",
      "Qm9yZGVhdXgsIG3DqXRyb3BvbGUgdml0aWNvbGUgZXQgcG9ydHVhaXJlIHN1ciBsYSBHYXJvbm5lIG91dmVydGUgc3VyIGwnQXRsYW50aXF1ZQ=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 33, 0),
    explication: "TWFyc2VpbGxlIGVzdCBsYSBkZXV4acOobWUgdmlsbGUgZGUgRnJhbmNlLiBGb25kw6llIHBhciBsZXMgR3JlY3MgdmVycyA2MDAgYXYuIEouLUMuLCBjJ2VzdCBsYSBwbHVzIGFuY2llbm5lIHZpbGxlIGRlIEZyYW5jZSBldCB1biBncmFuZCBwb3J0IG3DqWRpdGVycmFuw6llbi4="},
  {
    id: 34,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Versailles",
    question: "UXVlbCByb2kgYSBmYWl0IGNvbnN0cnVpcmUgbGUgY2jDonRlYXUgZGUgVmVyc2FpbGxlcyBldCBxdWVsbGUgw6l0YWl0IHNhIGZvbmN0aW9uIHByZW1pw6hyZSA/",
    options: [
      "TG91aXMgWElWIChsZSBSb2ktU29sZWlsKSwgcXVpIGVuIGEgZmFpdCBsZSBzacOoZ2UgZHUgZ291dmVybmVtZW50IGV0IGxlIHN5bWJvbGUgZGUgbGEgbW9uYXJjaGllIGFic29sdWU=",
      "TG91aXMgWFZJLCBkZXJuaWVyIHJvaSBhdmFudCBsYSBSw6l2b2x1dGlvbiwgcXVpIHkgYSBpbnN0YWxsw6kgbGEgcHJlbWnDqHJlIGFzc2VtYmzDqWUgbmF0aW9uYWxl",
      "TmFwb2zDqW9uIEllciwgcXVpIGEgdHJhbnNmb3Jtw6kgbGUgY2jDonRlYXUgZW4gcsOpc2lkZW5jZSBpbXDDqXJpYWxlIGV0IG11c8OpZSBkZSBsYSBnbG9pcmUgbWlsaXRhaXJl",
      "RnJhbsOnb2lzIEllciwgcm9pIGRlIGxhIFJlbmFpc3NhbmNlLCBxdWkgYSBpbml0acOpIGxhIGNvbnN0cnVjdGlvbiBkZXMgcHJlbWllcnMgYsOidGltZW50cyByb3lhdXg="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 34, 0),
    explication: "TG91aXMgWElWIGEgZmFpdCBjb25zdHJ1aXJlIGxlIGNow6J0ZWF1IGRlIFZlcnNhaWxsZXMgZXQgeSBhIGluc3RhbGzDqSBsZSBnb3V2ZXJuZW1lbnQgZW4gMTY4Mi4gQyfDqXRhaXQgbGUgc3ltYm9sZSBkZSBsYSBtb25hcmNoaWUgYWJzb2x1ZS4="},
  {
    id: 35,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Molière",
    question: "UXVlbCBkcmFtYXR1cmdlIGZyYW7Dp2FpcyBkdSBYVklJZSBzacOoY2xlIGVzdCBjb25zaWTDqXLDqSBjb21tZSBsZSBww6hyZSBkZSBsYSBjb23DqWRpZSBjbGFzc2lxdWUgZnJhbsOnYWlzZSA/",
    options: [
      "TW9sacOocmUgKEplYW4tQmFwdGlzdGUgUG9xdWVsaW4pLCBhdXRldXIgZHUgVGFydHVmZmUsIGR1IE1pc2FudGhyb3BlIGV0IGRlcyBGb3VyYmVyaWVzIGRlIFNjYXBpbg==",
      "SmVhbiBSYWNpbmUsIGF1dGV1ciBkZSB0cmFnw6lkaWVzIGNsYXNzaXF1ZXMgY29tbWUgUGjDqGRyZSwgQW5kcm9tYXF1ZSBldCBCcml0YW5uaWN1cw==",
      "UGllcnJlIENvcm5laWxsZSwgYXV0ZXVyIGR1IENpZCBldCBmb25kYXRldXIgZGUgbGEgdHJhZ8OpZGllIGNsYXNzaXF1ZSBmcmFuw6dhaXNl",
      "SmVhbiBkZSBMYSBGb250YWluZSwgYXV0ZXVyIGRlcyBGYWJsZXMgaW5zcGlyw6llcyBkJ8OJc29wZSBldCBkZSBQaMOoZHJl"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 35, 0),
    explication: "TW9sacOocmUgKDE2MjItMTY3MykgZXN0IGxlIHDDqHJlIGRlIGxhIGNvbcOpZGllIGNsYXNzaXF1ZSBmcmFuw6dhaXNlLiBTZXMgxZN1dnJlcyAoVGFydHVmZmUsIExlIE1pc2FudGhyb3BlLCBMJ0F2YXJlLi4uKSBzb250IHRvdWpvdXJzIGpvdcOpZXMgYXVqb3VyZCdodWku"},
  {
    id: 36,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Marie Curie",
    question: "UXVpIGVzdCBNYXJpZSBDdXJpZSBldCBwb3VycXVvaSBlc3QtZWxsZSB1bmUgZmlndXJlIG1hamV1cmUgZGUgbCdoaXN0b2lyZSBzY2llbnRpZmlxdWUgZnJhbsOnYWlzZSA/",
    options: [
      "UGh5c2ljaWVubmUgZXQgY2hpbWlzdGUsIHByZW1pw6hyZSBmZW1tZSBQcml4IE5vYmVsLCBlbGxlIGEgZMOpY291dmVydCBsZSBwb2xvbml1bSBldCBsZSByYWRpdW0=",
      "UHJlbWnDqHJlIGZlbW1lIG3DqWRlY2luIGVuIEZyYW5jZSwgcGlvbm5pw6hyZSBkZSBsYSBtw6lkZWNpbmUgbW9kZXJuZSBldCBkZSBsJ2h5Z2nDqG5lIGhvc3BpdGFsacOocmU=",
      "UHJlbWnDqHJlIGZlbW1lIGFzdHJvbmF1dGUgZnJhbsOnYWlzZSwgZWxsZSBhIHBhcnRpY2lww6kgw6AgbGEgbWlzc2lvbiBzcGF0aWFsZSBldXJvcMOpZW5uZSBkZSAxOTk2",
      "TWF0aMOpbWF0aWNpZW5uZSBheWFudCByw6lzb2x1IGxlIGRlcm5pZXIgdGjDqW9yw6htZSBkZSBGZXJtYXQgZW4gY29sbGFib3JhdGlvbiBhdmVjIFBpZXJyZSBDdXJpZQ=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 36, 0),
    explication: "TWFyaWUgQ3VyaWUgKDE4NjctMTkzNCkgZXN0IGxhIHByZW1pw6hyZSBmZW1tZSBQcml4IE5vYmVsIChwaHlzaXF1ZSAxOTAzLCBjaGltaWUgMTkxMSkuIEVsbGUgYSBkw6ljb3V2ZXJ0IGxlIHBvbG9uaXVtIGV0IGxlIHJhZGl1bS4gRWxsZSByZXBvc2UgYXUgUGFudGjDqW9uLg=="},

  // ==================== 5. VIVRE DANS LA SOCIÉTÉ FRANÇAISE (4 questions) ====================
  
  {
    id: 37,
    categorie: "Vivre dans la société française",
    sousCategorie: "RSA",
    question: "UXUnZXN0LWNlIHF1ZSBsZSBSU0EgZXQgcXVlbGxlcyBzb250IGxlcyBjb25kaXRpb25zIHBvdXIgZW4gYsOpbsOpZmljaWVyID8=",
    options: [
      "TGUgUmV2ZW51IGRlIFNvbGlkYXJpdMOpIEFjdGl2ZSwgYWlkZSBzb2NpYWxlIHBvdXIgbGVzIHBlcnNvbm5lcyBzYW5zIHJlc3NvdXJjZXMgw6Jnw6llcyBkJ2F1IG1vaW5zIDI1IGFucyBvdSBwYXJlbnRz",
      "VW4gaW1ww7R0IHN1ciBsZSByZXZlbnUgZGVzIHNvY2nDqXTDqXMgY2FsY3Vsw6kgc3VyIGxlIGLDqW7DqWZpY2UgYW5udWVsIGRlcyBlbnRyZXByaXNlcyBmcmFuw6dhaXNlcw==",
      "VW5lIGFsbG9jYXRpb24gZmFtaWxpYWxlIHZlcnPDqWUgYXV0b21hdGlxdWVtZW50IMOgIHRvdXRlcyBsZXMgZmFtaWxsZXMgYXZlYyBlbmZhbnRzIGVuIEZyYW5jZQ==",
      "VW5lIGFzc3VyYW5jZSBjaMO0bWFnZSB2ZXJzw6llIHBlbmRhbnQgMiBhbnMgYXV4IHNhbGFyacOpcyBheWFudCBwZXJkdSBsZXVyIGVtcGxvaQ=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 37, 0),
    explication: "TGUgUlNBIChSZXZlbnUgZGUgU29saWRhcml0w6kgQWN0aXZlKSBlc3QgdW5lIGFpZGUgc29jaWFsZSBwb3VyIGxlcyBwZXJzb25uZXMgc2FucyByZXNzb3VyY2VzLiBJbCBlc3QgYWNjZXNzaWJsZSDDoCBwYXJ0aXIgZGUgMjUgYW5zLCBvdSBhdmFudCBzaSBsJ29uIGVzdCBwYXJlbnQu"},
  {
    id: 38,
    categorie: "Vivre dans la société française",
    sousCategorie: "Médecin traitant",
    question: "UXVlbCBlc3QgbCdpbnTDqXLDqnQgZGUgZMOpY2xhcmVyIHVuIG3DqWRlY2luIHRyYWl0YW50IGF1cHLDqHMgZGUgbGEgU8OpY3VyaXTDqSBzb2NpYWxlID8=",
    options: [
      "QsOpbsOpZmljaWVyIGQndW4gbWVpbGxldXIgcmVtYm91cnNlbWVudCBkZXMgc29pbnMgZW4gc3VpdmFudCBsZSBwYXJjb3VycyBkZSBzb2lucyBjb29yZG9ubsOpcw==",
      "T2J0ZW5pciBncmF0dWl0ZW1lbnQgdG91cyBsZXMgbcOpZGljYW1lbnRzIHByZXNjcml0cyBzYW5zIGF2YW5jZSBkZSBmcmFpcyBlbiBwaGFybWFjaWU=",
      "QWNjw6lkZXIgcHJpb3JpdGFpcmVtZW50IGF1eCBzcMOpY2lhbGlzdGVzIHNhbnMgcmVuZGV6LXZvdXMgZGFucyB0b3VzIGxlcyBow7RwaXRhdXggZnJhbsOnYWlz",
      "w4l2aXRlciBkZSBwYXllciBsYSBjb25zdWx0YXRpb24gY2hleiBsZSBtw6lkZWNpbiBncsOiY2UgYXUgdGllcnMgcGF5YW50IG9ibGlnYXRvaXJl"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 38, 0),
    explication: "RMOpY2xhcmVyIHVuIG3DqWRlY2luIHRyYWl0YW50IHBlcm1ldCBkZSBiw6luw6lmaWNpZXIgZCd1biBtZWlsbGV1ciByZW1ib3Vyc2VtZW50IGRlcyBzb2lucy4gQydlc3QgbGUgcHJpbmNpcGUgZHUgcGFyY291cnMgZGUgc29pbnMgY29vcmRvbm7DqXMu"},
  {
    id: 39,
    categorie: "Vivre dans la société française",
    sousCategorie: "Contrat de travail",
    question: "UXVlbHMgc29udCBsZXMgcHJpbmNpcGF1eCB0eXBlcyBkZSBjb250cmF0cyBkZSB0cmF2YWlsIGVuIEZyYW5jZSA/",
    options: [
      "TGUgQ0RJIChkdXLDqWUgaW5kw6l0ZXJtaW7DqWUpLCBsZSBDREQgKGR1csOpZSBkw6l0ZXJtaW7DqWUpLCBsZSBjb250cmF0IGQnaW50w6lyaW0gZXQgbGUgY29udHJhdCBkJ2FwcHJlbnRpc3NhZ2U=",
      "TGUgY29udHJhdCBjaXZpbCwgbGUgY29udHJhdCBjb21tZXJjaWFsIGV0IGxlIGNvbnRyYXQgYWRtaW5pc3RyYXRpZiB1bmlxdWVtZW50IHBvdXIgbGVzIGZvbmN0aW9ubmFpcmVz",
      "TGUgY29udHJhdCBvcmFsIHN1ZmZpdCBkYW5zIHRvdXMgbGVzIGNhcywgYXVjdW4gw6ljcml0IG4nw6l0YW50IG9ibGlnYXRvaXJlIHNlbG9uIGxlIENvZGUgZHUgdHJhdmFpbA==",
      "VW4gc2V1bCB0eXBlIGRlIGNvbnRyYXQgZXhpc3RlLCBsZSBDREksIHRvdXMgbGVzIGF1dHJlcyDDqXRhbnQgaWxsw6lnYXV4IGVuIGRyb2l0IGZyYW7Dp2Fpcw=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 39, 0),
    explication: "TGVzIHByaW5jaXBhdXggY29udHJhdHMgZGUgdHJhdmFpbCBzb250IGxlIENESSAoY29udHJhdCBwYXIgZMOpZmF1dCksIGxlIENERCAobW90aWYgcHLDqWNpcyBldCBkdXLDqWUgbGltaXTDqWUpLCBsJ2ludMOpcmltIGV0IGwnYXBwcmVudGlzc2FnZS4="},
  {
    id: 40,
    categorie: "Vivre dans la société française",
    sousCategorie: "Prud'hommes",
    question: "UXVlbCB0cmlidW5hbCBlc3QgY29tcMOpdGVudCBwb3VyIGp1Z2VyIGxlcyBsaXRpZ2VzIGVudHJlIGVtcGxveWV1cnMgZXQgc2FsYXJpw6lzID8=",
    options: [
      "TGUgY29uc2VpbCBkZSBwcnVkJ2hvbW1lcywganVyaWRpY3Rpb24gcGFyaXRhaXJlIGNvbXBvc8OpZSBkZSByZXByw6lzZW50YW50cyBkZXMgZW1wbG95ZXVycyBldCBkZXMgc2FsYXJpw6lz",
      "TGUgdHJpYnVuYWwgYWRtaW5pc3RyYXRpZiwgY29tcMOpdGVudCBwb3VyIHRvdXMgbGVzIGxpdGlnZXMgaW1wbGlxdWFudCB1bmUgcGVyc29ubmUgcHVibGlxdWU=",
      "TGUgdHJpYnVuYWwgZGUgY29tbWVyY2UsIHNww6ljaWFsaXPDqSBkYW5zIGxlcyBhZmZhaXJlcyBjb21tZXJjaWFsZXMgZXQgw6ljb25vbWlxdWVz",
      "TGUgdHJpYnVuYWwganVkaWNpYWlyZSwganVyaWRpY3Rpb24gZGUgZHJvaXQgY29tbXVuIGNvbXDDqXRlbnRlIHBvdXIgdG91dGVzIGxlcyBhZmZhaXJlcyBjaXZpbGVz"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 40, 0),
    explication: "TGUgY29uc2VpbCBkZSBwcnVkJ2hvbW1lcyBqdWdlIGxlcyBsaXRpZ2VzIGVudHJlIGVtcGxveWV1cnMgZXQgc2FsYXJpw6lzLiBDJ2VzdCB1bmUganVyaWRpY3Rpb24gcGFyaXRhaXJlIGNvbXBvc8OpZSBkZSBqdWdlcyDDqWx1cyBwYXIgbGVzIGVtcGxveWV1cnMgZXQgbGVzIHNhbGFyacOpcy4="}
];

// Fonction pour vérifier une réponse
export function verifyAnswerExam4(questionId: number, userAnswerIndex: number, correctHash: string): boolean {
  return hashAnswer(EXAM_NUMBER, questionId, userAnswerIndex) === correctHash;
}

// Fonction pour trouver l'index correct à partir du hash
export function findCorrectIndexExam4(questionId: number, correctHash: string): number {
  for (let i = 0; i < 4; i++) {
    if (hashAnswer(EXAM_NUMBER, questionId, i) === correctHash) {
      return i;
    }
  }
  return 0;
}

// Examen avec questions décodées pour l'affichage
const _EXAMEN_4: ExamenBlanc = {
  numero: 4,
  titre: "Examen blanc #4",
  description: "40 questions en conditions réelles d'examen",
  questions: questions,
  dureeMinutes: 45,
  totalQuestions: 40
};

export const EXAMEN_4 = decodeExamen(_EXAMEN_4);
