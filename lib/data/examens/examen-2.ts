// ==================== EXAMEN BLANC #2 ====================
// Répartition officielle :
// 1. Principes et valeurs (11 questions)
// 2. Système institutionnel (6 questions)
// 3. Droits et devoirs (11 questions)
// 4. Histoire/géographie/culture (8 questions)
// 5. Vivre en France (4 questions)
// ==========================================================================
// VERSION NON ENCODÉE - Questions difficiles niveau examen civique
// ==========================================================================

import { ExamenBlanc, Question, hashAnswer } from './types';

const EXAM_NUMBER = 2;

const questions: Question[] = [
  // ==================== 1. PRINCIPES ET VALEURS (11 questions) ====================
  
  {
    id: 1,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Symboles républicains",
    question: "UXVlbCBhbmltYWwgc3ltYm9saXNlIHRyYWRpdGlvbm5lbGxlbWVudCBsYSBGcmFuY2UgZXQgZmlndXJlIHN1ciBsZXMgbWFpbGxvdHMgZGVzIMOpcXVpcGVzIG5hdGlvbmFsZXMgc3BvcnRpdmVzID8=",
    options: [
      "TGUgY29xIGdhdWxvaXMsIHN5bWJvbGUgZGUgdmlnaWxhbmNlIGV0IGRlIGNvdXJhZ2UgaMOpcml0w6kgZGUgbCdBbnRpcXVpdMOpIHJvbWFpbmU=",
      "TCdhaWdsZSBpbXDDqXJpYWwsIHN5bWJvbGUgZGUgcHVpc3NhbmNlIGFkb3B0w6kgc291cyBsZSBQcmVtaWVyIGV0IGxlIFNlY29uZCBFbXBpcmU=",
      "TGUgbGlvbiBow6lyYWxkaXF1ZSwgc3ltYm9sZSBkZSBmb3JjZSB1dGlsaXPDqSBwYXIgbGVzIG1vbmFyY2hpZXMgZXVyb3DDqWVubmVz",
      "TGUgdGF1cmVhdSBjYW1hcmd1ZSwgc3ltYm9sZSBkZSBsYSByw6lzaXN0YW5jZSBldCBkZSBsYSBjdWx0dXJlIG3DqXJpZGlvbmFsZSBmcmFuw6dhaXNl"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 1, 0),
    explication: "TGUgY29xIGdhdWxvaXMgZXN0IGwndW4gZGVzIHN5bWJvbGVzIGRlIGxhIEZyYW5jZS4gSWwgcmVwcsOpc2VudGUgbGEgdmlnaWxhbmNlIGV0IGxlIGNvdXJhZ2UuIElsIGZpZ3VyZSBub3RhbW1lbnQgc3VyIGxlcyBtYWlsbG90cyBkZXMgw6lxdWlwZXMgbmF0aW9uYWxlcyBzcG9ydGl2ZXMu"},
  {
    id: 2,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Symboles républicains",
    question: "UXVpIGVzdCBNYXJpYW5uZSBldCBxdWVsIGVzdCBzb24gcsO0bGUgc3ltYm9saXF1ZSBkYW5zIGxhIFLDqXB1YmxpcXVlIGZyYW7Dp2Fpc2UgPw==",
    options: [
      "TGEgcmVwcsOpc2VudGF0aW9uIGFsbMOpZ29yaXF1ZSBkZSBsYSBSw6lwdWJsaXF1ZSBmcmFuw6dhaXNlLCBwcsOpc2VudGUgZGFucyB0b3V0ZXMgbGVzIG1haXJpZXMgYXZlYyBzb24gYm9ubmV0IHBocnlnaWVu",
      "VW5lIGZpZ3VyZSBoaXN0b3JpcXVlIHLDqWVsbGUgYXlhbnQgcGFydGljaXDDqSBhY3RpdmVtZW50IMOgIGxhIFLDqXZvbHV0aW9uIGZyYW7Dp2Fpc2UgZGUgMTc4OQ==",
      "TGEgcHJlbWnDqHJlIGZlbW1lIMOpbHVlIMOgIGwnQXNzZW1ibMOpZSBuYXRpb25hbGUgc291cyBsYSBUcm9pc2nDqG1lIFLDqXB1YmxpcXVlIGZyYW7Dp2Fpc2U=",
      "TCfDqXBvdXNlIGRlIE5hcG9sw6lvbiBCb25hcGFydGUgcXVpIGEgY29udHJpYnXDqSDDoCBtb2Rlcm5pc2VyIGwnYWRtaW5pc3RyYXRpb24gZnJhbsOnYWlzZQ=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 2, 0),
    explication: "TWFyaWFubmUgZXN0IGxhIHJlcHLDqXNlbnRhdGlvbiBzeW1ib2xpcXVlIGRlIGxhIFLDqXB1YmxpcXVlIGZyYW7Dp2Fpc2UuIFNvbiBidXN0ZSBmaWd1cmUgZGFucyB0b3V0ZXMgbGVzIG1haXJpZXMuIEVsbGUgcG9ydGUgc291dmVudCB1biBib25uZXQgcGhyeWdpZW4sIHN5bWJvbGUgZGUgbGliZXJ0w6ku"},
  {
    id: 3,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Fête nationale",
    question: "UXVlIGNvbW3DqW1vcmUgbGEgZsOqdGUgbmF0aW9uYWxlIGR1IDE0IGp1aWxsZXQsIGluc3RpdHXDqWUgY29tbWUgam91ciBmw6lyacOpIGRlcHVpcyAxODgwID8=",
    options: [
      "TGEgcHJpc2UgZGUgbGEgQmFzdGlsbGUgKDE3ODkpIGV0IGxhIEbDqnRlIGRlIGxhIEbDqWTDqXJhdGlvbiAoMTc5MCksIHN5bWJvbGVzIGRlIGwndW5pdMOpIG5hdGlvbmFsZQ==",
      "TGEgdmljdG9pcmUgZGUgTmFwb2zDqW9uIMOgIEF1c3RlcmxpdHogKDE4MDUpLCBjb25zaWTDqXLDqWUgY29tbWUgbGUgc29tbWV0IGRlIGwnRW1waXJlIGZyYW7Dp2Fpcw==",
      "TGEgcHJvY2xhbWF0aW9uIGRlIGxhIFRyb2lzacOobWUgUsOpcHVibGlxdWUgKDE4NzApIGFwcsOocyBsYSBkw6lmYWl0ZSBmYWNlIMOgIGxhIFBydXNzZQ==",
      "TCdhcm1pc3RpY2UgZGUgbGEgUHJlbWnDqHJlIEd1ZXJyZSBtb25kaWFsZSAoMTkxOCkgY8OpbMOpYnJhbnQgbGEgcGFpeCByZXRyb3V2w6ll"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 3, 0),
    explication: "TGUgMTQganVpbGxldCBlc3QgbGEgZsOqdGUgbmF0aW9uYWxlIGZyYW7Dp2Fpc2UuIEVsbGUgY29tbcOpbW9yZSBsYSBwcmlzZSBkZSBsYSBCYXN0aWxsZSBsZSAxNCBqdWlsbGV0IDE3ODkgZXQgbGEgRsOqdGUgZGUgbGEgRsOpZMOpcmF0aW9uIGR1IDE0IGp1aWxsZXQgMTc5MC4="},
  {
    id: 4,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Neutralité des agents publics",
    question: "VW4gZW5zZWlnbmFudCBkZSBsJ8OpY29sZSBwdWJsaXF1ZSBwZXV0LWlsIHBvcnRlciBkZXMgc2lnbmVzIHJlbGlnaWV1eCBvc3RlbnNpYmxlcyBwZW5kYW50IHNlcyBjb3VycyA/",
    options: [
      "Tm9uLCBsZXMgYWdlbnRzIHB1YmxpY3MgZG9pdmVudCByZXNwZWN0ZXIgbGUgcHJpbmNpcGUgZGUgbmV1dHJhbGl0w6kgZGFucyBsJ2V4ZXJjaWNlIGRlIGxldXJzIGZvbmN0aW9ucw==",
      "T3VpLCBjJ2VzdCBzYSBsaWJlcnTDqSBpbmRpdmlkdWVsbGUgZ2FyYW50aWUgcGFyIGxhIETDqWNsYXJhdGlvbiBkZXMgZHJvaXRzIGRlIGwnaG9tbWUgZGUgMTc4OQ==",
      "T3VpLCBzaSBsZSBkaXJlY3RldXIgZGUgbCfDqXRhYmxpc3NlbWVudCBldCBsZXMgcGFyZW50cyBkJ8OpbMOodmVzIGRvbm5lbnQgbGV1ciBhY2NvcmQgcHLDqWFsYWJsZQ==",
      "Q2VsYSBkw6lwZW5kIGRlIGxhIHJlbGlnaW9uIGNvbmNlcm7DqWUgZXQgZGUgbGEgdGFpbGxlIGR1IHNpZ25lIHBvcnTDqSBwYXIgbCdlbnNlaWduYW50"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 4, 0),
    explication: "TGVzIGVuc2VpZ25hbnRzLCBlbiB0YW50IHF1J2FnZW50cyBwdWJsaWNzLCBkb2l2ZW50IHJlc3BlY3RlciBsZSBwcmluY2lwZSBkZSBuZXV0cmFsaXTDqSBldCBuZSBwZXV2ZW50IGFmZmljaGVyIGxldXJzIGNvbnZpY3Rpb25zIHJlbGlnaWV1c2VzIGRhbnMgbCdleGVyY2ljZSBkZSBsZXVycyBmb25jdGlvbnMu"},
  {
    id: 5,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Laïcité garanties",
    question: "UXVlbGxlcyBzb250IGxlcyBkZXV4IGdhcmFudGllcyBmb25kYW1lbnRhbGVzIGRlIGxhIGxhw69jaXTDqSBpbnNjcml0ZXMgZGFucyBsYSBsb2kgZGUgMTkwNSA/",
    options: [
      "TGEgbGliZXJ0w6kgZGUgY3VsdGUgcG91ciB0b3VzIGV0IGxhIG5ldXRyYWxpdMOpIGFic29sdWUgZGUgbCfDiXRhdCB2aXMtw6AtdmlzIGRlcyByZWxpZ2lvbnM=",
      "TCdpbnRlcmRpY3Rpb24gZGUgdG91dGVzIGxlcyBwcmF0aXF1ZXMgcmVsaWdpZXVzZXMgZXQgbCdhdGjDqWlzbWUgb2JsaWdhdG9pcmUgcG91ciBsZXMgZm9uY3Rpb25uYWlyZXM=",
      "TGEgcHJpb3JpdMOpIGRvbm7DqWUgw6AgbGEgcmVsaWdpb24gY2F0aG9saXF1ZSBldCBsYSB0b2zDqXJhbmNlIGRlcyBhdXRyZXMgY3VsdGVzIHJlY29ubnVz",
      "TCdvYmxpZ2F0aW9uIHBvdXIgdG91cyBkZSBwcmF0aXF1ZXIgdW5lIHJlbGlnaW9uIGV0IGxlIGNvbnRyw7RsZSDDqXRhdGlxdWUgZGVzIGxpZXV4IGRlIGN1bHRl"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 5, 0),
    explication: "TGEgbGHDr2NpdMOpIGdhcmFudGl0IGxhIGxpYmVydMOpIGRlIGNvbnNjaWVuY2UsIGxlIGxpYnJlIGV4ZXJjaWNlIGRlcyBjdWx0ZXMgZXQgbGEgbmV1dHJhbGl0w6kgZGUgbCfDiXRhdCB2aXMtw6AtdmlzIGRlcyByZWxpZ2lvbnMsIGRhbnMgbGUgcmVzcGVjdCBkZSBsJ29yZHJlIHB1YmxpYy4="},
  {
    id: 6,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Discriminations interdites",
    question: "UXVlbHMgdHlwZXMgZGUgZGlzY3JpbWluYXRpb24gc29udCBleHByZXNzw6ltZW50IGludGVyZGl0cyBwYXIgbGEgbMOpZ2lzbGF0aW9uIGZyYW7Dp2Fpc2UgPw==",
    options: [
      "VG91dGVzIGxlcyBmb3JtZXMgZGUgZGlzY3JpbWluYXRpb24gOiBvcmlnaW5lLCBzZXhlLCByZWxpZ2lvbiwgaGFuZGljYXAsIG9yaWVudGF0aW9uIHNleHVlbGxlLCDDomdlLCBvcGluaW9ucw==",
      "VW5pcXVlbWVudCBsZXMgZGlzY3JpbWluYXRpb25zIGZvbmTDqWVzIHN1ciBsJ29yaWdpbmUgZXRobmlxdWUgb3UgbGEgY291bGV1ciBkZSBwZWF1",
      "VW5pcXVlbWVudCBsZXMgZGlzY3JpbWluYXRpb25zIGZvbmTDqWVzIHN1ciBsZSBzZXhlIGRhbnMgbGUgY2FkcmUgcHJvZmVzc2lvbm5lbCBldCBmYW1pbGlhbA==",
      "QXVjdW5lIGRpc2NyaW1pbmF0aW9uIG4nZXN0IGludGVyZGl0ZSwgbCdlbXBsb3lldXIgw6l0YW50IGxpYnJlIGRlIHNlcyBjcml0w6hyZXMgZGUgc8OpbGVjdGlvbg=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 6, 0),
    explication: "TGEgbG9pIGZyYW7Dp2Fpc2UgaW50ZXJkaXQgdG91dGVzIGxlcyBmb3JtZXMgZGUgZGlzY3JpbWluYXRpb24gOiBvcmlnaW5lLCBzZXhlLCBzaXR1YXRpb24gZGUgZmFtaWxsZSwgb3JpZW50YXRpb24gc2V4dWVsbGUsIMOiZ2UsIG9waW5pb25zIHBvbGl0aXF1ZXMsIGFjdGl2aXTDqXMgc3luZGljYWxlcywgcmVsaWdpb24sIGFwcGFyZW5jZSBwaHlzaXF1ZSwgaGFuZGljYXAsIGV0Yy4="},
  {
    id: 7,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Sanctions discrimination",
    question: "UXVlbGxlcyBzYW5jdGlvbnMgcMOpbmFsZXMgZW5jb3VydCB1biBjb21tZXLDp2FudCBxdWkgcmVmdXNlIGRlIHNlcnZpciB1bmUgcGVyc29ubmUgZW4gcmFpc29uIGRlIHNvbiBvcmlnaW5lID8=",
    options: [
      "SnVzcXUnw6AgMyBhbnMgZCdlbXByaXNvbm5lbWVudCBldCA0NSAwMDAgZXVyb3MgZCdhbWVuZGUgc2Vsb24gbGUgQ29kZSBww6luYWw=",
      "VW4gc2ltcGxlIGF2ZXJ0aXNzZW1lbnQgYWRtaW5pc3RyYXRpZiBzYW5zIGNvbnPDqXF1ZW5jZSBqdXJpZGlxdWUgbWFqZXVyZQ==",
      "VW5lIGFtZW5kZSBkZSA1MCBldXJvcyBwb3VyIHRyb3VibGUgw6AgbCdvcmRyZSBwdWJsaWMgY29tbWVyY2lhbA==",
      "QXVjdW5lIHNhbmN0aW9uLCBsZSBjb21tZXLDp2FudCDDqXRhbnQgbGlicmUgZGUgY2hvaXNpciBzYSBjbGllbnTDqGxlIHNhbnMganVzdGlmaWNhdGlvbg=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 7, 0),
    explication: "UmVmdXNlciB1biBiaWVuIG91IHVuIHNlcnZpY2UgZW4gcmFpc29uIGRlIGwnb3JpZ2luZSBlc3QgdW5lIGRpc2NyaW1pbmF0aW9uIHB1bmllIHBhciBsZSBDb2RlIHDDqW5hbCA6IGp1c3F1J8OgIDMgYW5zIGRlIHByaXNvbiBldCA0NSAwMDAg4oKsIGQnYW1lbmRlLg=="},
  {
    id: 8,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Égalité femmes-hommes travail",
    question: "RGVwdWlzIHF1ZWxsZSBkYXRlIHVuZSBmZW1tZSBtYXJpw6llIHBldXQtZWxsZSBleGVyY2VyIHVuZSBwcm9mZXNzaW9uIHNhbnMgbCdhdXRvcmlzYXRpb24gZGUgc29uIG1hcmkgPw==",
    options: [
      "RGVwdWlzIDE5NjUsIGRhdGUgZGUgbGEgcsOpZm9ybWUgZHUgcsOpZ2ltZSBtYXRyaW1vbmlhbCBhY2NvcmRhbnQgbCdhdXRvbm9taWUgcHJvZmVzc2lvbm5lbGxlIGF1eCBmZW1tZXM=",
      "RGVwdWlzIDE3ODksIGRhdGUgZGUgbGEgRMOpY2xhcmF0aW9uIGRlcyBkcm9pdHMgZGUgbCdob21tZSBwcm9jbGFtYW50IGwnw6lnYWxpdMOpIGRlIHRvdXM=",
      "RGVwdWlzIDE5NDQsIGRhdGUgZGUgbCdvYnRlbnRpb24gZHUgZHJvaXQgZGUgdm90ZSBwYXIgbGVzIGZlbW1lcyBlbiBGcmFuY2U=",
      "RGVwdWlzIDIwMDAsIGRhdGUgZGVzIGxvaXMgc3VyIGxhIHBhcml0w6kgZW4gcG9saXRpcXVlIGV0IGRhbnMgbGVzIGVudHJlcHJpc2Vz"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 8, 0),
    explication: "RGVwdWlzIDE5NjUsIHVuZSBmZW1tZSBtYXJpw6llIHBldXQgZXhlcmNlciB1bmUgcHJvZmVzc2lvbiBzYW5zIGxlIGNvbnNlbnRlbWVudCBkZSBzb24gbWFyaS4gTCfDqWdhbGl0w6kgZmVtbWVzLWhvbW1lcyBlc3QgdW4gcHJpbmNpcGUgY29uc3RpdHV0aW9ubmVsLg=="},
  {
    id: 9,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation dégradation",
    question: "Vm91cyB2b3lleiB1bmUgcGVyc29ubmUgZMOpZ3JhZGVyIHVuIG1vbnVtZW50IHB1YmxpYyBwYXIgZGVzIGdyYWZmaXRpcy4gUXVlbGxlIGVzdCBsYSBjb25kdWl0ZSDDoCB0ZW5pciA/",
    options: [
      "Tm90ZXIgbGVzIMOpbMOpbWVudHMgZCdpZGVudGlmaWNhdGlvbiwgcHJlbmRyZSBkZXMgcGhvdG9zIGRpc2Nyw6h0ZW1lbnQgZXQgYWxlcnRlciBsYSBwb2xpY2UgYXUgMTc=",
      "TmUgcmllbiBmYWlyZSBjYXIgbGEgZMOpZ3JhZGF0aW9uIGRlIGJpZW5zIHB1YmxpY3Mgbidlc3QgcGFzIHLDqXByw6loZW5zaWJsZSBlbiBGcmFuY2U=",
      "QWlkZXIgbGEgcGVyc29ubmUgw6AgZmluaXIgc29uIMWTdXZyZSBjYXIgbGUgc3RyZWV0IGFydCBlc3QgcmVjb25udSBjb21tZSB1biBhcnQgbMOpZ2l0aW1l",
      "RmlsbWVyIGxhIHNjw6huZSBldCBsYSBwdWJsaWVyIHN1ciBsZXMgcsOpc2VhdXggc29jaWF1eCBwb3VyIGTDqW5vbmNlciBwdWJsaXF1ZW1lbnQgbCdhY3Rl"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 9, 0),
    explication: "TGEgZMOpZ3JhZGF0aW9uIGRlIGJpZW4gcHVibGljIGVzdCB1biBkw6lsaXQuIElsIGNvbnZpZW50IGQnYWxlcnRlciBsZXMgZm9yY2VzIGRlIGwnb3JkcmUgKDE3IG91IDExMikgZXQgw6l2ZW50dWVsbGVtZW50IGRlIHByZW5kcmUgZGVzIHBob3RvcyBjb21tZSBwcmV1dmVzLg=="},
  {
    id: 10,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation harcèlement",
    question: "VW4gY29sbMOoZ3VlIGZhaXQgZGVzIHJlbWFycXVlcyBzZXhpc3RlcyByw6lww6l0w6llcyDDoCB2b3RyZSBlbmNvbnRyZS4gUXVlIGRpdCBsYSBsb2kgZnJhbsOnYWlzZSA/",
    options: [
      "Qydlc3QgZHUgaGFyY8OobGVtZW50IGludGVyZGl0IHBhciBsZSBDb2RlIGR1IHRyYXZhaWwgZXQgbGUgQ29kZSBww6luYWwsIHBhc3NpYmxlIGRlIHNhbmN0aW9ucyBzw6l2w6hyZXM=",
      "Qydlc3QgdG9sw6lyw6kgc2kgY2VsYSByZXN0ZSBkZSBsJ2h1bW91ciBlbnRyZSBjb2xsw6hndWVzIGRhbnMgdW4gY2FkcmUgcHJvZmVzc2lvbm5lbCBkw6l0ZW5kdQ==",
      "Qydlc3QgYXV0b3Jpc8OpIHNpIGxlcyByZW1hcnF1ZXMgbmUgc29udCBwYXMgZmFpdGVzIGRldmFudCBkJ2F1dHJlcyB0w6ltb2lucyBwcsOpc2VudHM=",
      "Q2VsYSBkw6lwZW5kIGR1IHLDqGdsZW1lbnQgaW50w6lyaWV1ciBkZSBsJ2VudHJlcHJpc2UgZXQgZGUgbGEgc2Vuc2liaWxpdMOpIGRlIGNoYXF1ZSBwZXJzb25uZQ=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 10, 0),
    explication: "TGVzIHByb3BvcyBzZXhpc3RlcyBjb25zdGl0dWVudCBkdSBoYXJjw6hsZW1lbnQgc2V4dWVsIG91IG1vcmFsLCBpbnRlcmRpdCBwYXIgbGUgQ29kZSBkdSB0cmF2YWlsIGV0IGxlIENvZGUgcMOpbmFsLiBMZXMgc2FuY3Rpb25zIHBldXZlbnQgw6p0cmUgc8OpdsOocmVzLg=="},
  {
    id: 11,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Fraternité solidarité",
    question: "UXVlIHNpZ25pZmllIGNvbmNyw6h0ZW1lbnQgbGUgcHJpbmNpcGUgZGUgZnJhdGVybml0w6kgaW5zY3JpdCBkYW5zIGxhIGRldmlzZSByw6lwdWJsaWNhaW5lID8=",
    options: [
      "TGEgc29saWRhcml0w6kgZXQgbCdlbnRyYWlkZSBlbnRyZSB0b3VzIGxlcyBjaXRveWVucywgZm9uZGVtZW50IGRlIGxhIGNvaMOpc2lvbiBzb2NpYWxlIG5hdGlvbmFsZQ==",
      "TCdvYmxpZ2F0aW9uIGzDqWdhbGUgZCfDqnRyZSBhbWkgYXZlYyB0b3V0ZXMgbGVzIHBlcnNvbm5lcyBkZSBzb24gcXVhcnRpZXIgb3UgZGUgc2EgY29tbXVuZQ==",
      "TCdvYsOpaXNzYW5jZSBhYnNvbHVlIGF1eCBhdXRvcml0w6lzIGV0IGxlIHJlc3BlY3QgaW5jb25kaXRpb25uZWwgZGUgbGEgaGnDqXJhcmNoaWUgc29jaWFsZQ==",
      "TGUgbWFpbnRpZW4gZGVzIHRyYWRpdGlvbnMgZmFtaWxpYWxlcyBldCBsYSB0cmFuc21pc3Npb24gZGVzIHZhbGV1cnMgYW5jZXN0cmFsZXMgdW5pcXVlbWVudA=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 11, 0),
    explication: "TGEgZnJhdGVybml0w6kgaW1wbGlxdWUgbGEgc29saWRhcml0w6kgZXQgbCdlbnRyYWlkZSBlbnRyZSB0b3VzIGxlcyBtZW1icmVzIGRlIGxhIHNvY2nDqXTDqSwgc2FucyBkaXN0aW5jdGlvbi4gQydlc3QgbGUgdHJvaXNpw6htZSBwaWxpZXIgZGUgbGEgZGV2aXNlIHLDqXB1YmxpY2FpbmUu"},

  // ==================== 2. SYSTÈME INSTITUTIONNEL (6 questions) ====================
  
  {
    id: 12,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Conditions du vote",
    question: "UXVlbGxlcyBzb250IHRvdXRlcyBsZXMgY29uZGl0aW9ucyByZXF1aXNlcyBwb3VyIHZvdGVyIGF1eCDDqWxlY3Rpb25zIG5hdGlvbmFsZXMgZW4gRnJhbmNlID8=",
    options: [
      "QXZvaXIgMTggYW5zLCDDqnRyZSBkZSBuYXRpb25hbGl0w6kgZnJhbsOnYWlzZSwgam91aXIgZGUgc2VzIGRyb2l0cyBjaXZpcXVlcyBldCDDqnRyZSBpbnNjcml0IHN1ciBsZXMgbGlzdGVzIMOpbGVjdG9yYWxlcw==",
      "QXZvaXIgMjEgYW5zIG1pbmltdW0sIHLDqXNpZGVyIGVuIEZyYW5jZSBkZXB1aXMgYXUgbW9pbnMgMTAgYW5zIGV0IHBvc3PDqWRlciB1biBkaXBsw7RtZQ==",
      "QXZvaXIgMTggYW5zLCDDqnRyZSBwcm9wcmnDqXRhaXJlIGQndW4gYmllbiBpbW1vYmlsaWVyIGV0IHBheWVyIGRlcyBpbXDDtHRzIGVuIEZyYW5jZQ==",
      "w4p0cmUgbWFqZXVyLCBhdm9pciB1biBjYXNpZXIganVkaWNpYWlyZSB2aWVyZ2UgZXQgZXhlcmNlciB1bmUgYWN0aXZpdMOpIHByb2Zlc3Npb25uZWxsZSBkw6ljbGFyw6ll"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 12, 0),
    explication: "UG91ciB2b3RlciBlbiBGcmFuY2UsIGlsIGZhdXQgYXZvaXIgMTggYW5zLCDDqnRyZSBkZSBuYXRpb25hbGl0w6kgZnJhbsOnYWlzZSwgam91aXIgZGUgc2VzIGRyb2l0cyBjaXZpbHMgZXQgcG9saXRpcXVlcywgZXQgw6p0cmUgaW5zY3JpdCBzdXIgbGVzIGxpc3RlcyDDqWxlY3RvcmFsZXMu"},
  {
    id: 13,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Mandat des députés",
    question: "UG91ciBxdWVsbGUgZHVyw6llIGxlcyBkw6lwdXTDqXMgZGUgbCdBc3NlbWJsw6llIG5hdGlvbmFsZSBzb250LWlscyDDqWx1cyBldCBzZWxvbiBxdWVsIG1vZGUgZGUgc2NydXRpbiA/",
    options: [
      "NSBhbnMgYXUgc2NydXRpbiB1bmlub21pbmFsIG1ham9yaXRhaXJlIMOgIGRldXggdG91cnMgZGFucyBkZXMgY2lyY29uc2NyaXB0aW9ucyBsw6lnaXNsYXRpdmVz",
      "NCBhbnMgYXUgc2NydXRpbiBwcm9wb3J0aW9ubmVsIGludMOpZ3JhbCBzdXIgZGVzIGxpc3RlcyBuYXRpb25hbGVzIHByw6lzZW50w6llcyBwYXIgbGVzIHBhcnRpcw==",
      "NyBhbnMgY29tbWUgbGUgUHLDqXNpZGVudCBkZSBsYSBSw6lwdWJsaXF1ZSBwb3VyIGFzc3VyZXIgbGEgc3RhYmlsaXTDqSBkZXMgaW5zdGl0dXRpb25z",
      "NiBhbnMgYXUgc2NydXRpbiBpbmRpcmVjdCBwYXIgZGVzIGdyYW5kcyDDqWxlY3RldXJzIGNvbW1lIGxlcyBzw6luYXRldXJzIGF1IFPDqW5hdA=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 13, 0),
    explication: "TGVzIGTDqXB1dMOpcyBkZSBsJ0Fzc2VtYmzDqWUgbmF0aW9uYWxlIHNvbnQgw6lsdXMgcG91ciA1IGFucyBhdSBzdWZmcmFnZSB1bml2ZXJzZWwgZGlyZWN0LiBJbHMgcGV1dmVudCDDqnRyZSByw6nDqWx1cyBzYW5zIGxpbWl0YXRpb24u"},
  {
    id: 14,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Nomination Premier ministre",
    question: "UXVpIG5vbW1lIGxlIFByZW1pZXIgbWluaXN0cmUgZW4gRnJhbmNlIHNlbG9uIGxhIENvbnN0aXR1dGlvbiBkZSBsYSBWZSBSw6lwdWJsaXF1ZSA/",
    options: [
      "TGUgUHLDqXNpZGVudCBkZSBsYSBSw6lwdWJsaXF1ZSwgcXVpIGNob2lzaXQgbGlicmVtZW50IHVuZSBwZXJzb25uYWxpdMOpIHBvbGl0aXF1ZSBkZSBzb24gY2hvaXg=",
      "TCdBc3NlbWJsw6llIG5hdGlvbmFsZSBwYXIgdW4gdm90ZSDDoCBsYSBtYWpvcml0w6kgYWJzb2x1ZSBkZSB0b3VzIGxlcyBkw6lwdXTDqXM=",
      "TGVzIGNpdG95ZW5zIGZyYW7Dp2FpcyBkaXJlY3RlbWVudCBsb3JzIGQndW4gc2NydXRpbiBuYXRpb25hbCBvcmdhbmlzw6kgdG91cyBsZXMgNSBhbnM=",
      "TGUgU8OpbmF0IGVuIGNvbmNlcnRhdGlvbiBhdmVjIGxlcyBwcsOpc2lkZW50cyBkZXMgY29uc2VpbHMgcsOpZ2lvbmF1eCBkZSBGcmFuY2U="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 14, 0),
    explication: "TGUgUHLDqXNpZGVudCBkZSBsYSBSw6lwdWJsaXF1ZSBub21tZSBsZSBQcmVtaWVyIG1pbmlzdHJlLiBJbCBkb2l0IGfDqW7DqXJhbGVtZW50IHRlbmlyIGNvbXB0ZSBkZSBsYSBtYWpvcml0w6kgcGFybGVtZW50YWlyZSDDoCBsJ0Fzc2VtYmzDqWUgbmF0aW9uYWxlLg=="},
  {
    id: 15,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Pouvoir législatif",
    question: "UXVlbCBlc3QgbGUgcsO0bGUgcHJpbmNpcGFsIGR1IFBhcmxlbWVudCBmcmFuw6dhaXMgZGFucyBsZSBzeXN0w6htZSBpbnN0aXR1dGlvbm5lbCBkZSBsYSBWZSBSw6lwdWJsaXF1ZSA/",
    options: [
      "Vm90ZXIgbGVzIGxvaXMsIGF1dG9yaXNlciBsZSBidWRnZXQgZGUgbCfDiXRhdCBldCBjb250csO0bGVyIGwnYWN0aW9uIGR1IEdvdXZlcm5lbWVudA==",
      "Tm9tbWVyIGxlcyBtaW5pc3RyZXMgZHUgR291dmVybmVtZW50IGV0IGRpcmlnZXIgbGEgcG9saXRpcXVlIMOpdHJhbmfDqHJlIGRlIGxhIEZyYW5jZQ==",
      "UmVuZHJlIGxhIGp1c3RpY2UgYXUgbm9tIGR1IHBldXBsZSBmcmFuw6dhaXMgZXQgaW50ZXJwcsOpdGVyIGxlcyBsb2lzIHZvdMOpZXM=",
      "R8OpcmVyIGxlcyBjb2xsZWN0aXZpdMOpcyB0ZXJyaXRvcmlhbGVzIGV0IG9yZ2FuaXNlciBsZXMgw6lsZWN0aW9ucyBtdW5pY2lwYWxlcw=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 15, 0),
    explication: "TGUgUGFybGVtZW50IHZvdGUgbGVzIGxvaXMsIGF1dG9yaXNlIGxlIGJ1ZGdldCBldCBjb250csO0bGUgbCdhY3Rpb24gZHUgR291dmVybmVtZW50LiBJbCBwZXV0IGxlIHJlbnZlcnNlciBwYXIgdW5lIG1vdGlvbiBkZSBjZW5zdXJlLg=="},
  {
    id: 16,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Collectivités territoriales",
    question: "UXVlbGxlcyBzb250IGxlcyBkaWZmw6lyZW50ZXMgY29sbGVjdGl2aXTDqXMgdGVycml0b3JpYWxlcyBmcmFuw6dhaXNlcyBheWFudCB1bmUgYXV0b25vbWllIGFkbWluaXN0cmF0aXZlID8=",
    options: [
      "TGVzIGNvbW11bmVzIChlbnZpcm9uIDM1IDAwMCksIGxlcyBkw6lwYXJ0ZW1lbnRzICgxMDEpIGV0IGxlcyByw6lnaW9ucyAoMTggZG9udCAxMyBtw6l0cm9wb2xpdGFpbmVzKQ==",
      "VW5pcXVlbWVudCBsZXMgcHLDqWZlY3R1cmVzIGV0IHNvdXMtcHLDqWZlY3R1cmVzIHJlcHLDqXNlbnRhbnQgbCfDiXRhdCBkYW5zIGxlcyB0ZXJyaXRvaXJlcw==",
      "TGVzIHByb3ZpbmNlcywgbGVzIGR1Y2jDqXMgZXQgbGVzIGNvbXTDqXMgaMOpcml0w6lzIGRlIGwnb3JnYW5pc2F0aW9uIGRlIGwnQW5jaWVuIFLDqWdpbWU=",
      "TGVzIGFycm9uZGlzc2VtZW50cywgbGVzIGNhbnRvbnMgZXQgbGVzIHF1YXJ0aWVycyBhZG1pbmlzdHLDqXMgcGFyIGRlcyBmb25jdGlvbm5haXJlcyBub21tw6lz"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 16, 0),
    explication: "TGEgRnJhbmNlIGNvbXB0ZSB0cm9pcyBuaXZlYXV4IGRlIGNvbGxlY3Rpdml0w6lzIHRlcnJpdG9yaWFsZXMgOiBsZXMgY29tbXVuZXMgKGVudmlyb24gMzUgMDAwKSwgbGVzIGTDqXBhcnRlbWVudHMgKDEwMSkgZXQgbGVzIHLDqWdpb25zICgxOCBkb250IDEzIG3DqXRyb3BvbGl0YWluZXMpLg=="},
  {
    id: 17,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Rôle du maire",
    question: "UXVlbGxlcyBzb250IGxlcyBwcmluY2lwYWxlcyBmb25jdGlvbnMgZHUgbWFpcmUgZGFucyB1bmUgY29tbXVuZSBmcmFuw6dhaXNlID8=",
    options: [
      "UmVwcsOpc2VudGVyIGwnw4l0YXQsIGRpcmlnZXIgbCdhZG1pbmlzdHJhdGlvbiBtdW5pY2lwYWxlLCBjw6lsw6licmVyIGxlcyBtYXJpYWdlcyBldCBnw6lyZXIgbCfDqXRhdCBjaXZpbA==",
      "Vm90ZXIgbGVzIGxvaXMgbmF0aW9uYWxlcywgbm9tbWVyIGxlcyBmb25jdGlvbm5haXJlcyBkJ8OJdGF0IGV0IGxldmVyIGxlcyBpbXDDtHRzIG5hdGlvbmF1eA==",
      "UmVuZHJlIGxhIGp1c3RpY2UgbG9jYWxlLCBjb250csO0bGVyIGxhIHBvbGljZSBuYXRpb25hbGUgZXQgZ8OpcmVyIGxlcyBow7RwaXRhdXggcHVibGljcw==",
      "QWRtaW5pc3RyZXIgbGVzIMOpbGVjdGlvbnMgcHLDqXNpZGVudGllbGxlcywgZ8OpcmVyIGxlcyB1bml2ZXJzaXTDqXMgZXQgZGlyaWdlciBsZXMgcHLDqWZlY3R1cmVz"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 17, 0),
    explication: "TGUgbWFpcmUgcmVwcsOpc2VudGUgw6AgbGEgZm9pcyBsJ8OJdGF0IGV0IGxhIGNvbW11bmUuIElsIGRpcmlnZSBsJ2FkbWluaXN0cmF0aW9uIG11bmljaXBhbGUsIGPDqWzDqGJyZSBsZXMgbWFyaWFnZXMsIGfDqHJlIGwnw6l0YXQgY2l2aWwgZXQgYXNzdXJlIGwnb3JkcmUgcHVibGljIGxvY2FsLg=="},

  // ==================== 3. DROITS ET DEVOIRS (11 questions) ====================
  
  {
    id: 18,
    categorie: "Droits et devoirs",
    sousCategorie: "Liberté d'expression",
    question: "UXVlbGxlcyBzb250IGxlcyBsaW1pdGVzIGzDqWdhbGVzIMOgIGxhIGxpYmVydMOpIGQnZXhwcmVzc2lvbiBlbiBGcmFuY2Ugc2Vsb24gbGEgbG9pIGRlIDE4ODEgPw==",
    options: [
      "TGEgZGlmZmFtYXRpb24sIGwnaW5qdXJlLCBsJ2luY2l0YXRpb24gw6AgbGEgaGFpbmUgcmFjaWFsZSBldCBsJ2Fwb2xvZ2llIGR1IHRlcnJvcmlzbWUgc29udCBpbnRlcmRpdGVz",
      "SWwgbidleGlzdGUgYXVjdW5lIGxpbWl0ZSwgbGEgbGliZXJ0w6kgZCdleHByZXNzaW9uIMOpdGFudCBhYnNvbHVlIGRhbnMgbGEgUsOpcHVibGlxdWUgZnJhbsOnYWlzZQ==",
      "U2V1bGUgbGEgY3JpdGlxdWUgZHUgUHLDqXNpZGVudCBkZSBsYSBSw6lwdWJsaXF1ZSBlc3QgaW50ZXJkaXRlIHBhciBsYSBsb2kgY29uc3RpdHV0aW9ubmVsbGU=",
      "VG91dGUgY3JpdGlxdWUgZGVzIHJlbGlnaW9ucyBlc3QgaW50ZXJkaXRlIHBvdXIgZ2FyYW50aXIgbGEgcGFpeCBzb2NpYWxlIGV0IHJlbGlnaWV1c2U="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 18, 0),
    explication: "TGEgbGliZXJ0w6kgZCdleHByZXNzaW9uIGEgZGVzIGxpbWl0ZXMgOiBsYSBkaWZmYW1hdGlvbiwgbCdpbmp1cmUsIGwnaW5jaXRhdGlvbiDDoCBsYSBoYWluZSwgbCdhcG9sb2dpZSBkdSB0ZXJyb3Jpc21lIHNvbnQgcHVuaWVzIHBhciBsYSBsb2ku"},
  {
    id: 19,
    categorie: "Droits et devoirs",
    sousCategorie: "Droit de grève",
    question: "TGUgZHJvaXQgZGUgZ3LDqHZlIGVzdC1pbCByZWNvbm51IGVuIEZyYW5jZSBldCBxdWVsbGVzIHNvbnQgc2VzIGNvbmRpdGlvbnMgZCdleGVyY2ljZSA/",
    options: [
      "T3VpLCBjJ2VzdCB1biBkcm9pdCBjb25zdGl0dXRpb25uZWwgcG91ciBsZXMgc2FsYXJpw6lzLCBhdmVjIHByw6lhdmlzIG9ibGlnYXRvaXJlIGRhbnMgbGVzIHNlcnZpY2VzIHB1YmxpY3M=",
      "Tm9uLCBsYSBncsOodmUgZXN0IGludGVyZGl0ZSBjYXIgZWxsZSBwZXJ0dXJiZSBsJ29yZHJlIMOpY29ub21pcXVlIGV0IGxhIHByb2R1Y3Rpdml0w6kgbmF0aW9uYWxl",
      "T3VpLCBtYWlzIHVuaXF1ZW1lbnQgcG91ciBsZXMgZm9uY3Rpb25uYWlyZXMgZGUgbCfDiXRhdCBldCBsZXMgYWdlbnRzIGRlcyBzZXJ2aWNlcyBwdWJsaWNz",
      "Tm9uLCBzYXVmIGF1dG9yaXNhdGlvbiBwcsOpYWxhYmxlIGR1IHByw6lmZXQgYWNjb3Jkw6llIGVuIGNhcyBkZSBjb25mbGl0IHNvY2lhbCBtYWpldXI="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 19, 0),
    explication: "TGUgZHJvaXQgZGUgZ3LDqHZlIGVzdCB1biBkcm9pdCBjb25zdGl0dXRpb25uZWwgcmVjb25udSBwYXIgbGUgcHLDqWFtYnVsZSBkZSAxOTQ2LiBJbCBzJ2V4ZXJjZSBkYW5zIGxlIGNhZHJlIGRlcyBsb2lzIHF1aSBsZSByw6lnbGVtZW50ZW50LCBhdmVjIHByw6lhdmlzIGRhbnMgbGVzIHNlcnZpY2VzIHB1YmxpY3Mu"},
  {
    id: 20,
    categorie: "Droits et devoirs",
    sousCategorie: "Obligation scolaire",
    question: "UXVlbGxlcyBzb250IGxlcyBzYW5jdGlvbnMgZW5jb3VydWVzIHBhciBsZXMgcGFyZW50cyBxdWkgbmUgc2NvbGFyaXNlbnQgcGFzIGxldXJzIGVuZmFudHMgc2FucyBtb3RpZiB2YWxhYmxlID8=",
    options: [
      "RGVzIGFtZW5kZXMgcG91dmFudCBhdHRlaW5kcmUgcGx1c2lldXJzIG1pbGxpZXJzIGQnZXVyb3MgZXQgZGVzIHBvdXJzdWl0ZXMgcG91ciBtYW5xdWVtZW50IMOgIGwnb2JsaWdhdGlvbiBkJ2luc3RydWN0aW9u",
      "QXVjdW5lIHNhbmN0aW9uIGNhciBsJ2luc3RydWN0aW9uIGVzdCB1biBkcm9pdCBtYWlzIHBhcyB1bmUgb2JsaWdhdGlvbiBwb3VyIGxlcyBmYW1pbGxlcw==",
      "VW5lIHNpbXBsZSBjb252b2NhdGlvbiDDoCBsYSBtYWlyaWUgcG91ciByYXBwZWwgZGUgbGEgcsOpZ2xlbWVudGF0aW9uIGVuIHZpZ3VldXI=",
      "TGUgcmV0cmFpdCBpbW3DqWRpYXQgZGUgbGEgZ2FyZGUgZGVzIGVuZmFudHMgc2FucyBwb3NzaWJpbGl0w6kgZGUgcmVjb3VycyBqdWRpY2lhaXJl"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 20, 0),
    explication: "TGUgbWFucXVlbWVudCDDoCBsJ29ibGlnYXRpb24gZCdpbnN0cnVjdGlvbiBlc3QgcHVuaSBwYXIgbGEgbG9pLiBMZXMgcGFyZW50cyBwZXV2ZW50IGZhaXJlIGwnb2JqZXQgZGUgcG91cnN1aXRlcyBldCBkJ2FtZW5kZXMgaW1wb3J0YW50ZXMu"},
  {
    id: 21,
    categorie: "Droits et devoirs",
    sousCategorie: "Protection sociale",
    question: "UXUnZXN0LWNlIHF1ZSBsYSBTw6ljdXJpdMOpIHNvY2lhbGUgZnJhbsOnYWlzZSBldCBxdWFuZCBhLXQtZWxsZSDDqXTDqSBjcsOpw6llID8=",
    options: [
      "VW4gc3lzdMOobWUgZGUgcHJvdGVjdGlvbiBzb2NpYWxlIGNyw6nDqSBlbiAxOTQ1IGNvdXZyYW50IG1hbGFkaWUsIHJldHJhaXRlLCBmYW1pbGxlIGV0IGFjY2lkZW50cyBkdSB0cmF2YWls",
      "VW5lIGFzc3VyYW5jZSBwcml2w6llIG9ibGlnYXRvaXJlIGNyw6nDqWUgZW4gMjAwMCBwb3VyIGNvbXBsw6l0ZXIgbGVzIG11dHVlbGxlcyBleGlzdGFudGVz",
      "VW4gaW1ww7R0IHByw6lsZXbDqSBzdXIgbGVzIHNhbGFpcmVzIHBvdXIgZmluYW5jZXIgbCdhcm3DqWUgZXQgbGEgZMOpZmVuc2UgbmF0aW9uYWxl",
      "VW5lIGFpZGUgcsOpc2VydsOpZSBhdXggcGVyc29ubmVzIHNhbnMgZW1wbG9pIGNyw6nDqWUgbG9ycyBkZSBsYSBjcmlzZSBkZSAxOTI5"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 21, 0),
    explication: "TGEgU8OpY3VyaXTDqSBzb2NpYWxlIGEgw6l0w6kgY3LDqcOpZSBlbiAxOTQ1LiBFbGxlIGNvdXZyZSBsYSBtYWxhZGllLCBsYSBtYXRlcm5pdMOpLCBsZXMgYWNjaWRlbnRzIGR1IHRyYXZhaWwsIGxhIHJldHJhaXRlIGV0IGxhIGZhbWlsbGUuIEMnZXN0IGxlIHBpbGllciBkZSBsYSBwcm90ZWN0aW9uIHNvY2lhbGUgZnJhbsOnYWlzZS4="},
  {
    id: 22,
    categorie: "Droits et devoirs",
    sousCategorie: "Mise en situation agression",
    question: "Vm91cyDDqnRlcyB0w6ltb2luIGQndW5lIGFncmVzc2lvbiBkYW5zIGxhIHJ1ZS4gUXVlbGxlIGVzdCB2b3RyZSBvYmxpZ2F0aW9uIGzDqWdhbGUgc2Vsb24gbGUgQ29kZSBww6luYWwgPw==",
    options: [
      "UG9ydGVyIGFzc2lzdGFuY2Ugw6AgbGEgdmljdGltZSBvdSBhbGVydGVyIGxlcyBzZWNvdXJzICgxNSwgMTcsIDE4LCAxMTIpLCBsYSBub24tYXNzaXN0YW5jZSBlc3QgdW4gZMOpbGl0",
      "TmUgcGFzIGludGVydmVuaXIgY2FyIHRvdXRlIGFjdGlvbiBwZXV0IHZvdXMgcmVuZHJlIGNvbXBsaWNlIGRlIGwnYWdyZXNzaW9uIGVuIGNvdXJz",
      "RmlsbWVyIGxhIHNjw6huZSBwb3VyIGF2b2lyIGRlcyBwcmV1dmVzIGV4cGxvaXRhYmxlcyBwYXIgbGEganVzdGljZSB1bHTDqXJpZXVyZW1lbnQ=",
      "RnVpciBsZXMgbGlldXggcG91ciBuZSBwYXMgw6p0cmUgdm91cy1tw6ptZSB2aWN0aW1lIGQndW5lIGFncmVzc2lvbiBzaW1pbGFpcmU="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 22, 0),
    explication: "TGEgbm9uLWFzc2lzdGFuY2Ugw6AgcGVyc29ubmUgZW4gZGFuZ2VyIGVzdCB1biBkw6lsaXQuIFZvdXMgZGV2ZXogYWxlcnRlciBsZXMgc2Vjb3VycyAoMTUsIDE3LCAxOCwgMTEyKSBldCwgc2kgcG9zc2libGUsIHBvcnRlciBhc3Npc3RhbmNlIHNhbnMgdm91cyBtZXR0cmUgZW4gZGFuZ2VyLg=="},
  {
    id: 23,
    categorie: "Droits et devoirs",
    sousCategorie: "Déclaration revenus",
    question: "w4p0ZXMtdm91cyBvYmxpZ8OpIGRlIGTDqWNsYXJlciB2b3MgcmV2ZW51cyBtw6ptZSBzaSB2b3VzIGVzdGltZXogbmUgcGFzIMOqdHJlIGltcG9zYWJsZSA/",
    options: [
      "T3VpLCBsYSBkw6ljbGFyYXRpb24gZXN0IG9ibGlnYXRvaXJlIHBvdXIgdG91cyBsZXMgcsOpc2lkZW50cyBmaXNjYXV4LCBtw6ptZSBub24gaW1wb3NhYmxlcw==",
      "Tm9uLCBzZXVsZXMgbGVzIHBlcnNvbm5lcyBkb250IGxlcyByZXZlbnVzIGTDqXBhc3NlbnQgbGUgU01JQyBkb2l2ZW50IGTDqWNsYXJlcg==",
      "Tm9uLCBsZXMgcGVyc29ubmVzIGRlIG1vaW5zIGRlIDI1IGFucyBzb250IGF1dG9tYXRpcXVlbWVudCBkaXNwZW5zw6llcyBkZSBkw6ljbGFyYXRpb24=",
      "T3VpLCBtYWlzIHVuaXF1ZW1lbnQgc2kgdm91cyDDqnRlcyBwcm9wcmnDqXRhaXJlIGQndW4gYmllbiBpbW1vYmlsaWVyIGVuIEZyYW5jZQ=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 23, 0),
    explication: "VG91dGUgcGVyc29ubmUgcsOpc2lkYW50IGVuIEZyYW5jZSBkb2l0IGTDqWNsYXJlciBzZXMgcmV2ZW51cywgbcOqbWUgc2kgZWxsZSBuJ2VzdCBwYXMgaW1wb3NhYmxlLiBMYSBkw6ljbGFyYXRpb24gcGVybWV0IGRlIGTDqXRlcm1pbmVyIGxlIG1vbnRhbnQgZGUgbCdpbXDDtHQgb3UgbCdhY2PDqHMgw6AgY2VydGFpbnMgZHJvaXRzLg=="},
  {
    id: 24,
    categorie: "Droits et devoirs",
    sousCategorie: "Respect voisinage",
    question: "UXVlbHMgY29tcG9ydGVtZW50cyBjb25zdGl0dWVudCBkZXMgdHJvdWJsZXMgZGUgdm9pc2luYWdlIHNhbmN0aW9ubmFibGVzIHBhciBsYSBsb2kgPw==",
    options: [
      "TGUgdGFwYWdlIG5vY3R1cm5lLCBsZXMgb2RldXJzIGV4Y2Vzc2l2ZXMsIGxlcyBudWlzYW5jZXMgc29ub3JlcyByw6lww6l0w6llcyBldCBsZXMgZMOpZ3JhZGF0aW9ucyBkZXMgcGFydGllcyBjb21tdW5lcw==",
      "QXVjdW4gY29tcG9ydGVtZW50IG4nZXN0IHNhbmN0aW9ubmFibGUgY2FyIGNoYWN1biBlc3QgbGlicmUgY2hleiBzb2kgc2FucyBsaW1pdGU=",
      "VW5pcXVlbWVudCBsZSBicnVpdCBhcHLDqHMgMjJoLCB0b3VzIGxlcyBhdXRyZXMgY29tcG9ydGVtZW50cyDDqXRhbnQgdG9sw6lyw6lzIGzDqWdhbGVtZW50",
      "U2V1bGVzIGxlcyB2aW9sZW5jZXMgcGh5c2lxdWVzIGVudHJlIHZvaXNpbnMgcGV1dmVudCBmYWlyZSBsJ29iamV0IGRlIHBvdXJzdWl0ZXMganVkaWNpYWlyZXM="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 24, 0),
    explication: "TGVzIHRyb3VibGVzIGRlIHZvaXNpbmFnZSAodGFwYWdlLCBvZGV1cnMsIG51aXNhbmNlcyByw6lww6l0w6llcykgc29udCBzYW5jdGlvbm5hYmxlcy4gTGUgdGFwYWdlIG5vY3R1cm5lIGVzdCB1bmUgY29udHJhdmVudGlvbiBwdW5pZSBwYXIgbGUgQ29kZSBww6luYWwu"},
  {
    id: 25,
    categorie: "Droits et devoirs",
    sousCategorie: "Droit à la santé",
    question: "UXVlbHMgZHJvaXRzIGZvbmRhbWVudGF1eCBlbiBtYXRpw6hyZSBkZSBzYW50w6kgbGEgQ29uc3RpdHV0aW9uIGZyYW7Dp2Fpc2UgZ2FyYW50aXQtZWxsZSA/",
    options: [
      "TGUgZHJvaXQgw6AgbGEgcHJvdGVjdGlvbiBkZSBsYSBzYW50w6kgcG91ciB0b3VzIGV0IGwnYWNjw6hzIGF1eCBzb2lucywgaW5zY3JpdHMgZGFucyBsZSBwcsOpYW1idWxlIGRlIDE5NDY=",
      "QXVjdW4gZHJvaXQgw6AgbGEgc2FudMOpIG4nZXN0IGdhcmFudGksIGxlcyBzb2lucyDDqXRhbnQgZW50acOocmVtZW50IMOgIGxhIGNoYXJnZSBkZXMgaW5kaXZpZHVz",
      "TGUgZHJvaXQgw6AgbGEgc2FudMOpIHVuaXF1ZW1lbnQgcG91ciBsZXMgY2l0b3llbnMgZnJhbsOnYWlzIGRlIG5haXNzYW5jZSBldCBsZXVycyBkZXNjZW5kYW50cw==",
      "VW4gYWNjw6hzIGF1eCBzb2lucyByw6lzZXJ2w6kgYXV4IHBlcnNvbm5lcyBjb3Rpc2FudCDDoCB1bmUgbXV0dWVsbGUgcHJpdsOpZSBhZ3LDqcOpZSBwYXIgbCfDiXRhdA=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 25, 0),
    explication: "TGUgcHLDqWFtYnVsZSBkZSAxOTQ2LCBpbnTDqWdyw6kgYXUgYmxvYyBkZSBjb25zdGl0dXRpb25uYWxpdMOpLCBnYXJhbnRpdCDDoCB0b3VzIGxlIGRyb2l0IMOgIGxhIHByb3RlY3Rpb24gZGUgbGEgc2FudMOpIGV0IGwnYWNjw6hzIGF1eCBzb2lucy4="},
  {
    id: 26,
    categorie: "Droits et devoirs",
    sousCategorie: "Mise en situation location",
    question: "VW4gcHJvcHJpw6l0YWlyZSByZWZ1c2UgZGUgdm91cyBsb3VlciB1biBhcHBhcnRlbWVudCBlbiByYWlzb24gZGUgdm90cmUgcmVsaWdpb24uIFF1ZSBwb3V2ZXotdm91cyBmYWlyZSA/",
    options: [
      "UG9ydGVyIHBsYWludGUgcG91ciBkaXNjcmltaW5hdGlvbiBhdSBsb2dlbWVudCwgZMOpbGl0IHB1bmkganVzcXUnw6AgMyBhbnMgZGUgcHJpc29uIGV0IDQ1IDAwMCBldXJvcyBkJ2FtZW5kZQ==",
      "QWNjZXB0ZXIgbGUgcmVmdXMgY2FyIGxlIHByb3ByacOpdGFpcmUgZXN0IGxpYnJlIGRlIGNob2lzaXIgc29uIGxvY2F0YWlyZSBzZWxvbiBzZXMgY3JpdMOocmVz",
      "RGVtYW5kZXIgbCdpbnRlcnZlbnRpb24gZGUgbGEgbWFpcmllIHF1aSBwZXV0IGNvbnRyYWluZHJlIGxlIHByb3ByacOpdGFpcmUgw6AgbG91ZXI=",
      "UmllbiwgY2FyIGxhIGRpc2NyaW1pbmF0aW9uIGRhbnMgbGUgbG9nZW1lbnQgcHJpdsOpIG4nZXN0IHBhcyByw6lwcmltw6llIHBhciBsYSBsb2kgZnJhbsOnYWlzZQ=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 26, 0),
    explication: "TGEgZGlzY3JpbWluYXRpb24gZGFucyBsZSBsb2dlbWVudCBmb25kw6llIHN1ciBsYSByZWxpZ2lvbiBlc3QgaW50ZXJkaXRlLiBMZSBiYWlsbGV1ciBlbmNvdXJ0IGRlcyBzYW5jdGlvbnMgcMOpbmFsZXMgcG91dmFudCBhbGxlciBqdXNxdSfDoCAzIGFucyBkZSBwcmlzb24gZXQgNDUgMDAwIOKCrCBkJ2FtZW5kZS4="},
  {
    id: 27,
    categorie: "Droits et devoirs",
    sousCategorie: "Devoir de mémoire",
    question: "UXVlbGxlIG9ibGlnYXRpb24gY2l2aXF1ZSBpbmNvbWJlIGF1eCBjaXRveWVucyBmcmFuw6dhaXMgY29uY2VybmFudCBsYSBkw6lmZW5zZSBuYXRpb25hbGUgZGVwdWlzIGxhIHN1c3BlbnNpb24gZHUgc2VydmljZSBtaWxpdGFpcmUgPw==",
    options: [
      "UGFydGljaXBlciDDoCBsYSBKb3VybsOpZSBEw6lmZW5zZSBldCBDaXRveWVubmV0w6kgKEpEQyksIG9ibGlnYXRvaXJlIHBvdXIgdG91cyBsZXMgamV1bmVzIGRlIDE2IMOgIDI1IGFucw==",
      "QXVjdW5lIG9ibGlnYXRpb24sIGxlIHNlcnZpY2UgbWlsaXRhaXJlIGF5YW50IMOpdMOpIGTDqWZpbml0aXZlbWVudCBzdXBwcmltw6kgc2FucyByZW1wbGFjZW1lbnQ=",
      "UydlbmdhZ2VyIHZvbG9udGFpcmVtZW50IGRhbnMgbCdhcm3DqWUgcG91ciB1bmUgZHVyw6llIG1pbmltYWxlIGRlIGRldXggYW5zIGRlIHNlcnZpY2UgYWN0aWY=",
      "UGF5ZXIgdW5lIHRheGUgZGUgcmVtcGxhY2VtZW50IG1pbGl0YWlyZSBjYWxjdWzDqWUgc3VyIGxlcyByZXZlbnVzIGR1IGZveWVyIGZpc2NhbA=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 27, 0),
    explication: "TGEgSm91cm7DqWUgRMOpZmVuc2UgZXQgQ2l0b3llbm5ldMOpIChKREMpIGVzdCBvYmxpZ2F0b2lyZSBwb3VyIHRvdXMgbGVzIGpldW5lcyBGcmFuw6dhaXMuIEVsbGUgcmVtcGxhY2UgbGUgc2VydmljZSBtaWxpdGFpcmUgc3VzcGVuZHUgZGVwdWlzIDE5OTcu"},
  {
    id: 28,
    categorie: "Droits et devoirs",
    sousCategorie: "Droit syndical",
    question: "TGUgZHJvaXQgc3luZGljYWwgZXN0LWlsIGdhcmFudGkgZW4gRnJhbmNlIGV0IHF1ZWxsZXMgbGliZXJ0w6lzIGltcGxpcXVlLXQtaWwgY29uY3LDqHRlbWVudCA/",
    options: [
      "T3VpLCBsaWJlcnTDqSBkZSBjcsOpZXIgdW4gc3luZGljYXQsIGQneSBhZGjDqXJlciBvdSBub24sIGV0IGRlIHBhcnRpY2lwZXIgw6AgbCdhY3Rpb24gc3luZGljYWxlIHNhbnMgcmVwcsOpc2FpbGxlcw==",
      "Tm9uLCBsZXMgc3luZGljYXRzIHNvbnQgaW50ZXJkaXRzIGRlcHVpcyBsZXMgb3Jkb25uYW5jZXMgZGUgbW9kZXJuaXNhdGlvbiBkdSB0cmF2YWlsIGRlIDIwMTc=",
      "T3VpLCBtYWlzIHVuaXF1ZW1lbnQgZGFucyBsZXMgZW50cmVwcmlzZXMgZGUgcGx1cyBkZSA1MDAgc2FsYXJpw6lzIGV0IGRhbnMgbGEgZm9uY3Rpb24gcHVibGlxdWU=",
      "Tm9uLCBsJ2FkaMOpc2lvbiBzeW5kaWNhbGUgZXN0IG9ibGlnYXRvaXJlIHBvdXIgdG91cyBsZXMgc2FsYXJpw6lzIHNlbG9uIGxldXIgYnJhbmNoZSBwcm9mZXNzaW9ubmVsbGU="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 28, 0),
    explication: "TGUgZHJvaXQgc3luZGljYWwgZXN0IGdhcmFudGkgcGFyIGxlIHByw6lhbWJ1bGUgZGUgMTk0Ni4gQ2hhY3VuIGVzdCBsaWJyZSBkZSBjcsOpZXIgdW4gc3luZGljYXQsIGQneSBhZGjDqXJlciBvdSBub24sIGV0IGRlIHBhcnRpY2lwZXIgw6AgbCdhY3Rpb24gc3luZGljYWxlLg=="},

  // ==================== 4. HISTOIRE, GÉOGRAPHIE ET CULTURE (8 questions) ====================
  
  {
    id: 29,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Première Guerre mondiale",
    question: "UXVlbGxlIGRhdGUgY29tbcOpbW9yZSBsJ2FybWlzdGljZSBkZSBsYSBQcmVtacOocmUgR3VlcnJlIG1vbmRpYWxlLCBqb3VyIGbDqXJpw6kgZW4gRnJhbmNlID8=",
    options: [
      "TGUgMTEgbm92ZW1icmUgMTkxOCwgZGF0ZSBkZSBsYSBzaWduYXR1cmUgZGUgbCdhcm1pc3RpY2UgbWV0dGFudCBmaW4gYXV4IGNvbWJhdHMgc3VyIGxlIGZyb250IG9jY2lkZW50YWw=",
      "TGUgOCBtYWkgMTk0NSwgZGF0ZSBkZSBsYSBjYXBpdHVsYXRpb24gZGUgbCdBbGxlbWFnbmUgbmF6aWUgbWFycXVhbnQgbGEgZmluIGRlIGxhIFNlY29uZGUgR3VlcnJlIG1vbmRpYWxl",
      "TGUgMTQganVpbGxldCAxNzg5LCBkYXRlIGRlIGxhIHByaXNlIGRlIGxhIEJhc3RpbGxlIHN5bWJvbGUgZGUgbGEgUsOpdm9sdXRpb24gZnJhbsOnYWlzZQ==",
      "TGUgNiBqdWluIDE5NDQsIGRhdGUgZHUgZMOpYmFycXVlbWVudCBhbGxpw6kgZW4gTm9ybWFuZGllIGxvcnMgZGUgbCdvcMOpcmF0aW9uIE92ZXJsb3Jk"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 29, 0),
    explication: "TGUgMTEgbm92ZW1icmUgMTkxOCBtYXJxdWUgbCdhcm1pc3RpY2UgZGUgbGEgUHJlbWnDqHJlIEd1ZXJyZSBtb25kaWFsZS4gQ2V0dGUgZGF0ZSBlc3QgdW4gam91ciBmw6lyacOpIGVuIEZyYW5jZSwgY29tbcOpbW9yYW50IGxhIGZpbiBkZXMgY29tYmF0cy4="},
  {
    id: 30,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Résistance",
    question: "UXVpIMOpdGFpdCBKZWFuIE1vdWxpbiBldCBxdWVsIHLDtGxlIGEtdC1pbCBqb3XDqSBkYW5zIGwnaGlzdG9pcmUgZGUgRnJhbmNlIHBlbmRhbnQgbCdPY2N1cGF0aW9uID8=",
    options: [
      "TGUgY2hlZiBkdSBDb25zZWlsIG5hdGlvbmFsIGRlIGxhIFLDqXNpc3RhbmNlLCB1bmlmaWFudCBsZXMgbW91dmVtZW50cyByw6lzaXN0YW50cyBzb3VzIGwnYXV0b3JpdMOpIGR1IGfDqW7DqXJhbCBkZSBHYXVsbGU=",
      "TGUgY2hlZiBkdSBnb3V2ZXJuZW1lbnQgZGUgVmljaHksIGNvbGxhYm9yYW50IGF2ZWMgbCdBbGxlbWFnbmUgbmF6aWUgcGVuZGFudCBsJ09jY3VwYXRpb24=",
      "TGUgZ8OpbsOpcmFsIGNvbW1hbmRhbnQgbGVzIGZvcmNlcyBmcmFuw6dhaXNlcyBsaWJyZXMgZGVwdWlzIExvbmRyZXMgcGVuZGFudCB0b3V0ZSBsYSBndWVycmU=",
      "TGUgcHJlbWllciBwcsOpc2lkZW50IGRlIGxhIElWZSBSw6lwdWJsaXF1ZSDDqWx1IGFwcsOocyBsYSBMaWLDqXJhdGlvbiBkdSB0ZXJyaXRvaXJlIG5hdGlvbmFs"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 30, 0),
    explication: "SmVhbiBNb3VsaW4gYSB1bmlmacOpIGxlcyBtb3V2ZW1lbnRzIGRlIFLDqXNpc3RhbmNlIGF1IHNlaW4gZHUgQ29uc2VpbCBuYXRpb25hbCBkZSBsYSBSw6lzaXN0YW5jZSAoQ05SKSBlbiAxOTQzLiBJbCBhIMOpdMOpIGFycsOqdMOpIGV0IGVzdCBtb3J0IHNvdXMgbGEgdG9ydHVyZS4="},
  {
    id: 31,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Droit de vote femmes",
    question: "RW4gcXVlbGxlIGFubsOpZSBsZXMgZmVtbWVzIGZyYW7Dp2Fpc2VzIG9udC1lbGxlcyBvYnRlbnUgbGUgZHJvaXQgZGUgdm90ZSBldCBkJ8OpbGlnaWJpbGl0w6kgPw==",
    options: [
      "RW4gMTk0NCwgcGFyIG9yZG9ubmFuY2UgZHUgQ29taXTDqSBmcmFuw6dhaXMgZGUgbGliw6lyYXRpb24gbmF0aW9uYWxlIHByw6lzaWTDqSBwYXIgbGUgZ8OpbsOpcmFsIGRlIEdhdWxsZQ==",
      "RW4gMTc4OSwgbG9ycyBkZSBsYSBSw6l2b2x1dGlvbiBmcmFuw6dhaXNlIHByb2NsYW1hbnQgbCfDqWdhbGl0w6kgZGUgdG91cyBsZXMgY2l0b3llbnM=",
      "RW4gMTkwNSwgZW4gbcOqbWUgdGVtcHMgcXVlIGxhIGxvaSBkZSBzw6lwYXJhdGlvbiBkZXMgw4lnbGlzZXMgZXQgZGUgbCfDiXRhdA==",
      "RW4gMTk1OCwgbG9ycyBkZSBsJ2Fkb3B0aW9uIGRlIGxhIENvbnN0aXR1dGlvbiBkZSBsYSBWZSBSw6lwdWJsaXF1ZSBwYXIgcsOpZsOpcmVuZHVt"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 31, 0),
    explication: "TGVzIGZlbW1lcyBvbnQgb2J0ZW51IGxlIGRyb2l0IGRlIHZvdGUgZW4gMTk0NCBwYXIgb3Jkb25uYW5jZSBkdSBDb21pdMOpIGZyYW7Dp2FpcyBkZSBsaWLDqXJhdGlvbiBuYXRpb25hbGUuIEVsbGVzIG9udCB2b3TDqSBwb3VyIGxhIHByZW1pw6hyZSBmb2lzIGVuIDE5NDUu"},
  {
    id: 32,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Capitale Paris",
    question: "UXVlbGxlIGVzdCBsYSBjYXBpdGFsZSBkZSBsYSBGcmFuY2UgZXQgcXVlbCBlc3Qgc29uIHN0YXR1dCBhZG1pbmlzdHJhdGlmIHBhcnRpY3VsaWVyID8=",
    options: [
      "UGFyaXMsIMOgIGxhIGZvaXMgY29tbXVuZSBldCBkw6lwYXJ0ZW1lbnQgKDc1KSwgc2nDqGdlIGRlcyBpbnN0aXR1dGlvbnMgbmF0aW9uYWxlcyBldCBpbnRlcm5hdGlvbmFsZXM=",
      "TWFyc2VpbGxlLCBkZXV4acOobWUgdmlsbGUgZGUgRnJhbmNlIGV0IGNhcGl0YWxlIMOpY29ub21pcXVlIGRlIGxhIHLDqWdpb24gbcOpZGl0ZXJyYW7DqWVubmU=",
      "THlvbiwgYW5jaWVubmUgY2FwaXRhbGUgZGVzIEdhdWxlcyBldCBhY3R1ZWwgY2VudHJlIMOpY29ub21pcXVlIGRlIGxhIHLDqWdpb24gQXV2ZXJnbmUtUmjDtG5lLUFscGVz",
      "U3RyYXNib3VyZywgc2nDqGdlIGR1IFBhcmxlbWVudCBldXJvcMOpZW4gZXQgY2FwaXRhbGUgZGUgbGEgY29vcMOpcmF0aW9uIGZyYW5jby1hbGxlbWFuZGU="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 32, 0),
    explication: "UGFyaXMgZXN0IGxhIGNhcGl0YWxlIGRlIGxhIEZyYW5jZS4gRWxsZSBlc3Qgw6AgbGEgZm9pcyB1bmUgY29tbXVuZSBldCB1biBkw6lwYXJ0ZW1lbnQgKDc1KS4gRWxsZSBhYnJpdGUgbGVzIHByaW5jaXBhbGVzIGluc3RpdHV0aW9ucyBkZSBsYSBSw6lwdWJsaXF1ZS4="},
  {
    id: 33,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Montagne",
    question: "UXVlbCBlc3QgbGUgcGx1cyBoYXV0IHNvbW1ldCBkZSBGcmFuY2UgZXQgZGVzIEFscGVzLCBjdWxtaW5hbnQgw6AgNCA4MDkgbcOodHJlcyBkJ2FsdGl0dWRlID8=",
    options: [
      "TGUgTW9udCBCbGFuYywgc2l0dcOpIMOgIGxhIGZyb250acOocmUgZnJhbmNvLWl0YWxpZW5uZSBkYW5zIGxlIG1hc3NpZiBkdSBNb250LUJsYW5jIGVuIEhhdXRlLVNhdm9pZQ==",
      "TGUgUGljIGR1IE1pZGkgZGUgQmlnb3JyZSwgb2JzZXJ2YXRvaXJlIGFzdHJvbm9taXF1ZSBkZXMgUHlyw6luw6llcyBjZW50cmFsZXMgZnJhbsOnYWlzZXM=",
      "TGUgUHV5IGRlIFNhbmN5LCBwbHVzIGhhdXQgc29tbWV0IGR1IE1hc3NpZiBjZW50cmFsIGRhbnMgbGUgZMOpcGFydGVtZW50IGR1IFB1eS1kZS1Ew7RtZQ==",
      "TGUgR3JhbmQgQmFsbG9uLCBwb2ludCBjdWxtaW5hbnQgZGVzIFZvc2dlcyBkYW5zIGxhIHLDqWdpb24gR3JhbmQgRXN0"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 33, 0),
    explication: "TGUgTW9udCBCbGFuYyAoNCA4MDkgbSkgZXN0IGxlIHBsdXMgaGF1dCBzb21tZXQgZGUgRnJhbmNlIGV0IGRlcyBBbHBlcy4gSWwgZXN0IHNpdHXDqSDDoCBsYSBmcm9udGnDqHJlIGZyYW5jby1pdGFsaWVubmUgZW4gSGF1dGUtU2F2b2llLg=="},
  {
    id: 34,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "DOM-TOM",
    question: "UXVlbCB0ZXJyaXRvaXJlIGZyYW7Dp2FpcyBkJ291dHJlLW1lciBlc3Qgc2l0dcOpIGRhbnMgbCdvY8OpYW4gSW5kaWVuIGV0IHBvcnRlIGxlIG5vbSBkJ3VuZSDDrmxlIHZvbGNhbmlxdWUgPw==",
    options: [
      "TGEgUsOpdW5pb24sIGTDqXBhcnRlbWVudCBldCByw6lnaW9uIGQnb3V0cmUtbWVyIGZyYW7Dp2FpcyBzaXR1w6kgw6AgbCdlc3QgZGUgTWFkYWdhc2Nhcg==",
      "TGEgR3VhZGVsb3VwZSwgYXJjaGlwZWwgZGVzIEFudGlsbGVzIGZyYW7Dp2Fpc2VzIGRhbnMgbGEgbWVyIGRlcyBDYXJhw69iZXM=",
      "TGEgTWFydGluaXF1ZSwgw65sZSBkZXMgUGV0aXRlcyBBbnRpbGxlcyBkw6ljb3V2ZXJ0ZSBwYXIgQ2hyaXN0b3BoZSBDb2xvbWIgZW4gMTUwMg==",
      "TGEgTm91dmVsbGUtQ2Fsw6lkb25pZSwgdGVycml0b2lyZSBkdSBQYWNpZmlxdWUgU3VkIGF2ZWMgdW4gc3RhdHV0IGRlIGNvbGxlY3Rpdml0w6kgc3VpIGdlbmVyaXM="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 34, 0),
    explication: "TGEgUsOpdW5pb24gZXN0IHVuIGTDqXBhcnRlbWVudCBldCByw6lnaW9uIGQnb3V0cmUtbWVyIChEUk9NKSBzaXR1w6kgZGFucyBsJ29jw6lhbiBJbmRpZW4sIMOgIGwnZXN0IGRlIE1hZGFnYXNjYXIuIEMnZXN0IHVuZSDDrmxlIHZvbGNhbmlxdWUu"},
  {
    id: 35,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Musée Louvre",
    question: "UXVlbCBjw6lsw6hicmUgbXVzw6llIHBhcmlzaWVuLCBhbmNpZW5uZSByw6lzaWRlbmNlIHJveWFsZSwgYWJyaXRlIGxhIEpvY29uZGUgZGUgTMOpb25hcmQgZGUgVmluY2kgPw==",
    options: [
      "TGUgbXVzw6llIGR1IExvdXZyZSwgcGx1cyBncmFuZCBtdXPDqWUgZCdhcnQgZHUgbW9uZGUgYXZlYyBwbHVzIGRlIDM1IDAwMCDFk3V2cmVzIGV4cG9zw6llcw==",
      "TGUgbXVzw6llIGQnT3JzYXksIGluc3RhbGzDqSBkYW5zIHVuZSBhbmNpZW5uZSBnYXJlIGV0IGTDqWRpw6kgw6AgbCdhcnQgaW1wcmVzc2lvbm5pc3Rl",
      "TGUgQ2VudHJlIFBvbXBpZG91LCBtdXPDqWUgZCdhcnQgbW9kZXJuZSBldCBjb250ZW1wb3JhaW4gZHUgcXVhcnRpZXIgQmVhdWJvdXJn",
      "TGUgbXVzw6llIFJvZGluLCBow7R0ZWwgcGFydGljdWxpZXIgYWJyaXRhbnQgbGVzIMWTdXZyZXMgZHUgc2N1bHB0ZXVyIEF1Z3VzdGUgUm9kaW4="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 35, 0),
    explication: "TGUgbXVzw6llIGR1IExvdXZyZSwgYW5jaWVubmUgcsOpc2lkZW5jZSByb3lhbGUsIGVzdCBsZSBwbHVzIGdyYW5kIG11c8OpZSBkJ2FydCBkdSBtb25kZS4gSWwgYWJyaXRlIG5vdGFtbWVudCBsYSBKb2NvbmRlIGRlIEzDqW9uYXJkIGRlIFZpbmNpLg=="},
  {
    id: 36,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Victor Hugo",
    question: "UXVlbCBjw6lsw6hicmUgw6ljcml2YWluIGZyYW7Dp2FpcyBkdSBYSVhlIHNpw6hjbGUgZXN0IGwnYXV0ZXVyIGRlcyBNaXPDqXJhYmxlcyBldCBkZSBOb3RyZS1EYW1lIGRlIFBhcmlzID8=",
    options: [
      "VmljdG9yIEh1Z28sIMOpY3JpdmFpbiByb21hbnRpcXVlIGVuZ2Fnw6kgcG9saXRpcXVlbWVudCwgZG9udCBsZXMgY2VuZHJlcyByZXBvc2VudCBhdSBQYW50aMOpb24=",
      "w4ltaWxlIFpvbGEsIGNoZWYgZGUgZmlsZSBkdSBuYXR1cmFsaXNtZSBldCBhdXRldXIgZGUgbCdhcnRpY2xlIEonYWNjdXNlIGRhbnMgbCdhZmZhaXJlIERyZXlmdXM=",
      "QWxleGFuZHJlIER1bWFzLCBhdXRldXIgZGVzIFRyb2lzIE1vdXNxdWV0YWlyZXMgZXQgZHUgQ29tdGUgZGUgTW9udGUtQ3Jpc3Rv",
      "R3VzdGF2ZSBGbGF1YmVydCwgYXV0ZXVyIGRlIE1hZGFtZSBCb3ZhcnkgZXQgTCfDiWR1Y2F0aW9uIHNlbnRpbWVudGFsZQ=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 36, 0),
    explication: "VmljdG9yIEh1Z28gKDE4MDItMTg4NSkgZXN0IGwnYXV0ZXVyIGRlcyBNaXPDqXJhYmxlcyBldCBkZSBOb3RyZS1EYW1lIGRlIFBhcmlzLiDDiWNyaXZhaW4gZW5nYWfDqSwgaWwgcmVwb3NlIGF1IFBhbnRow6lvbiBkZXB1aXMgMTg4NS4="},

  // ==================== 5. VIVRE DANS LA SOCIÉTÉ FRANÇAISE (4 questions) ====================
  
  {
    id: 37,
    categorie: "Vivre dans la société française",
    sousCategorie: "Carte Vitale",
    question: "UXUnZXN0LWNlIHF1ZSBsYSBjYXJ0ZSBWaXRhbGUgZXQgw6AgcXVvaSBzZXJ0LWVsbGUgZGFucyBsZSBzeXN0w6htZSBkZSBzYW50w6kgZnJhbsOnYWlzID8=",
    options: [
      "TGEgY2FydGUgZCdhc3N1cmFuY2UgbWFsYWRpZSBwZXJtZXR0YW50IGxlIHJlbWJvdXJzZW1lbnQgZGVzIHNvaW5zIHBhciBsYSBTw6ljdXJpdMOpIHNvY2lhbGU=",
      "VW4gZG9jdW1lbnQgZCdpZGVudGl0w6kgb2JsaWdhdG9pcmUgcG91ciBjaXJjdWxlciBzdXIgbGUgdGVycml0b2lyZSBuYXRpb25hbCBmcmFuw6dhaXM=",
      "VW5lIGNhcnRlIGRlIHRyYW5zcG9ydCBlbiBjb21tdW4gdmFsYWJsZSBkYW5zIHRvdXRlcyBsZXMgdmlsbGVzIGRlIEZyYW5jZSBtw6l0cm9wb2xpdGFpbmU=",
      "VW4gdGl0cmUgZGUgc8Opam91ciBkw6lsaXZyw6kgYXV4IMOpdHJhbmdlcnMgcsOpc2lkYW50IGzDqWdhbGVtZW50IHN1ciBsZSB0ZXJyaXRvaXJlIGZyYW7Dp2Fpcw=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 37, 0),
    explication: "TGEgY2FydGUgVml0YWxlIGVzdCBsYSBjYXJ0ZSBkJ2Fzc3VyYW5jZSBtYWxhZGllLiBFbGxlIHBlcm1ldCBsJ2lkZW50aWZpY2F0aW9uIGRlIGwnYXNzdXLDqSBldCBmYWNpbGl0ZSBsZSByZW1ib3Vyc2VtZW50IGRlcyBzb2lucyBwYXIgbGEgU8OpY3VyaXTDqSBzb2NpYWxlLg=="},
  {
    id: 38,
    categorie: "Vivre dans la société française",
    sousCategorie: "Numéros urgence",
    question: "UXVlbCBudW3DqXJvIGV1cm9ww6llbiB1bmlxdWUgcGVybWV0IGRlIGpvaW5kcmUgdG91cyBsZXMgc2VydmljZXMgZCd1cmdlbmNlIGRhbnMgbCdVbmlvbiBldXJvcMOpZW5uZSA/",
    options: [
      "TGUgMTEyLCBudW3DqXJvIGV1cm9ww6llbiBkJ3VyZ2VuY2UgYWNjZXNzaWJsZSBncmF0dWl0ZW1lbnQgZGFucyB0b3VzIGxlcyBwYXlzIGRlIGwnVUU=",
      "TGUgMTUsIG51bcOpcm8gZHUgU0FNVSBleGNsdXNpdmVtZW50IHLDqXNlcnbDqSBhdXggdXJnZW5jZXMgbcOpZGljYWxlcyBlbiBGcmFuY2U=",
      "TGUgMTcsIG51bcOpcm8gZGUgbGEgcG9saWNlIHNlY291cnMgcG91ciBzaWduYWxlciBsZXMgaW5mcmFjdGlvbnMgZXQgZMOpbGl0cw==",
      "TGUgMTgsIG51bcOpcm8gZGVzIHNhcGV1cnMtcG9tcGllcnMgcG91ciBsZXMgaW5jZW5kaWVzIGV0IGFjY2lkZW50cyBkZSBsYSByb3V0ZQ=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 38, 0),
    explication: "TGUgMTEyIGVzdCBsZSBudW3DqXJvIGV1cm9ww6llbiBkJ3VyZ2VuY2UuIElsIHBlcm1ldCBkZSBqb2luZHJlIGxlcyBzZXJ2aWNlcyBkJ3VyZ2VuY2UgKHBvbXBpZXJzLCBwb2xpY2UsIFNBTVUpIGRhbnMgdG91cyBsZXMgcGF5cyBkZSBsJ1VuaW9uIGV1cm9ww6llbm5lLg=="},
  {
    id: 39,
    categorie: "Vivre dans la société française",
    sousCategorie: "Congés payés",
    question: "UXVlbCBlc3QgbGUgbm9tYnJlIG1pbmltdW0gZGUgam91cnMgZGUgY29uZ8OpcyBwYXnDqXMgbMOpZ2F1eCBwb3VyIHVuIHNhbGFyacOpIMOgIHRlbXBzIHBsZWluIGVuIEZyYW5jZSA/",
    options: [
      "NSBzZW1haW5lcyAoMjUgam91cnMgb3V2csOpcykgcGFyIGFuLCBzb2l0IDIsNSBqb3VycyBwYXIgbW9pcyBkZSB0cmF2YWlsIGVmZmVjdGlm",
      "MiBzZW1haW5lcyAoMTAgam91cnMgb3V2csOpcykgcGFyIGFuIGNvbW1lIGRhbnMgbGEgcGx1cGFydCBkZXMgcGF5cyBldXJvcMOpZW5z",
      "QXVjdW4gY29uZ8OpIGdhcmFudGksIGxlIG5vbWJyZSBkw6lwZW5kYW50IHVuaXF1ZW1lbnQgZGUgbGEgY29udmVudGlvbiBjb2xsZWN0aXZlIGFwcGxpY2FibGU=",
      "MyBzZW1haW5lcyAoMTUgam91cnMgb3V2csOpcykgcsOpc2VydsOpZXMgYXV4IHNhbGFyacOpcyBheWFudCBwbHVzIGRlIDUgYW5zIGQnYW5jaWVubmV0w6k="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 39, 0),
    explication: "VG91dCBzYWxhcmnDqSBhIGRyb2l0IMOgIDUgc2VtYWluZXMgZGUgY29uZ8OpcyBwYXnDqXMgcGFyIGFuICgyNSBqb3VycyBvdXZyw6lzKS4gQydlc3QgdW4gZHJvaXQgYWNxdWlzIGRlcHVpcyAxOTgyIGVuIEZyYW5jZS4="},
  {
    id: 40,
    categorie: "Vivre dans la société française",
    sousCategorie: "SMIC",
    question: "UXUnZXN0LWNlIHF1ZSBsZSBTTUlDIGV0IHF1ZWxsZSBlc3Qgc2EgZm9uY3Rpb24gZGFucyBsZSBkcm9pdCBkdSB0cmF2YWlsIGZyYW7Dp2FpcyA/",
    options: [
      "TGUgU2FsYWlyZSBNaW5pbXVtIEludGVycHJvZmVzc2lvbm5lbCBkZSBDcm9pc3NhbmNlLCByw6ltdW7DqXJhdGlvbiBob3JhaXJlIG1pbmltYWxlIGzDqWdhbGUgb2JsaWdhdG9pcmU=",
      "VW4gaW1ww7R0IHN1ciBsZXMgc29jacOpdMOpcyBjYWxjdWzDqSBzdXIgbGUgY2hpZmZyZSBkJ2FmZmFpcmVzIGRlcyBncmFuZGVzIGVudHJlcHJpc2VzIGZyYW7Dp2Fpc2Vz",
      "VW5lIGFsbG9jYXRpb24gdmVyc8OpZSBhdXggZGVtYW5kZXVycyBkJ2VtcGxvaSBwZW5kYW50IGxldXIgcMOpcmlvZGUgZGUgcmVjaGVyY2hlIGFjdGl2ZQ==",
      "VW4gZGlwbMO0bWUgcHJvZmVzc2lvbm5lbCBkw6lsaXZyw6kgcGFyIGwnw4l0YXQgdmFsaWRhbnQgbGVzIGNvbXDDqXRlbmNlcyBhY3F1aXNlcyBlbiBlbnRyZXByaXNl"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 40, 0),
    explication: "TGUgU01JQyAoU2FsYWlyZSBNaW5pbXVtIEludGVycHJvZmVzc2lvbm5lbCBkZSBDcm9pc3NhbmNlKSBlc3QgbGUgc2FsYWlyZSBob3JhaXJlIG1pbmltdW0gbMOpZ2FsIGVuIEZyYW5jZS4gQXVjdW4gc2FsYXJpw6kgbmUgcGV1dCDDqnRyZSByw6ltdW7DqXLDqSBlbiBkZXNzb3VzIGRlIGNlIHNldWlsLg=="}
];

// Fonction pour vérifier une réponse
export function verifyAnswerExam2(questionId: number, userAnswerIndex: number, correctHash: string): boolean {
  return hashAnswer(EXAM_NUMBER, questionId, userAnswerIndex) === correctHash;
}

// Fonction pour trouver l'index correct à partir du hash
export function findCorrectIndexExam2(questionId: number, correctHash: string): number {
  for (let i = 0; i < 4; i++) {
    if (hashAnswer(EXAM_NUMBER, questionId, i) === correctHash) {
      return i;
    }
  }
  return 0;
}

export const EXAMEN_2: ExamenBlanc = {
  numero: 2,
  titre: "Examen blanc #2",
  description: "40 questions en conditions réelles d'examen",
  questions: questions,
  dureeMinutes: 45,
  totalQuestions: 40
};
