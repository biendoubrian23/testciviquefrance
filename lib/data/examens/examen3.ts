// ==================== EXAMEN BLANC #3 ====================
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

const EXAM_NUMBER = 3;

const questions: Question[] = [
  // ==================== 1. PRINCIPES ET VALEURS (11 questions) ====================
  
  {
    id: 1,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Devise républicaine",
    question: "UXVlbCBhcnRpY2xlIGRlIGxhIENvbnN0aXR1dGlvbiBkZSAxOTU4IGluc2NyaXQgbGEgZGV2aXNlIMKrIExpYmVydMOpLCDDiWdhbGl0w6ksIEZyYXRlcm5pdMOpIMK7IGNvbW1lIHN5bWJvbGUgZGUgbGEgUsOpcHVibGlxdWUgPw==",
    options: [
      "TCdhcnRpY2xlIDIgZGUgbGEgQ29uc3RpdHV0aW9uLCBxdWkgZMOpZmluaXQgbGVzIHN5bWJvbGVzIG9mZmljaWVscyBkZSBsYSBSw6lwdWJsaXF1ZSBmcmFuw6dhaXNl",
      "TCdhcnRpY2xlIDFlciBkZSBsYSBDb25zdGl0dXRpb24sIHF1aSBkw6lmaW5pdCBsZXMgY2FyYWN0w6lyaXN0aXF1ZXMgZGUgbGEgUsOpcHVibGlxdWUgZnJhbsOnYWlzZQ==",
      "TCdhcnRpY2xlIDg5IGRlIGxhIENvbnN0aXR1dGlvbiwgcXVpIGTDqWZpbml0IGxlcyBtb2RhbGl0w6lzIGRlIHLDqXZpc2lvbiBjb25zdGl0dXRpb25uZWxsZQ==",
      "TGUgUHLDqWFtYnVsZSBkZSBsYSBDb25zdGl0dXRpb24sIHF1aSByZW52b2llIMOgIGxhIETDqWNsYXJhdGlvbiBkZXMgZHJvaXRzIGRlIGwnaG9tbWUgZGUgMTc4OQ=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 1, 0),
    explication: "TCdhcnRpY2xlIDIgZGUgbGEgQ29uc3RpdHV0aW9uIGRlIDE5NTggZMOpZmluaXQgbGVzIHN5bWJvbGVzIGRlIGxhIFLDqXB1YmxpcXVlIDogbGEgbGFuZ3VlIGZyYW7Dp2Fpc2UsIGxlIGRyYXBlYXUgdHJpY29sb3JlLCBsJ2h5bW5lIG5hdGlvbmFsLCBsYSBkZXZpc2UgZXQgbGUgcHJpbmNpcGUgZGUgZ291dmVybmVtZW50Lg=="},
  {
    id: 2,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Drapeau français",
    question: "UXVlbGxlIGVzdCBsYSBzaWduaWZpY2F0aW9uIGhpc3RvcmlxdWUgZGVzIHRyb2lzIGNvdWxldXJzIGR1IGRyYXBlYXUgZnJhbsOnYWlzIGV0IGxldXIgZGlzcG9zaXRpb24gPw==",
    options: [
      "QmxldSBldCByb3VnZSAoY291bGV1cnMgZGUgUGFyaXMpIGVuY2FkcmFudCBsZSBibGFuYyAoY291bGV1ciByb3lhbGUpLCBzeW1ib2xpc2FudCBsJ3VuaW9uIHBldXBsZS1tb25hcmNoaWUgZW4gMTc4OQ==",
      "VHJvaXMgY291bGV1cnMgY2hvaXNpZXMgYXUgaGFzYXJkIHBhciBOYXBvbMOpb24gQm9uYXBhcnRlIGxvcnMgZGUgc29uIHNhY3JlIGltcMOpcmlhbCBlbiAxODA0",
      "Um91Z2UsIGJsYW5jLCBibGV1IHJlcHLDqXNlbnRhbnQgbGUgc2FuZyB2ZXJzw6ksIGxhIHB1cmV0w6kgZXQgbGUgY2llbCBkZSBGcmFuY2UgZGVwdWlzIGxlIE1veWVuIMOCZ2U=",
      "Q291bGV1cnMgaMOpcml0w6llcyBkdSBkcmFwZWF1IGFtw6lyaWNhaW4gZW4gaG9tbWFnZSBhdSBzb3V0aWVuIGZyYW7Dp2FpcyBsb3JzIGRlIGxhIGd1ZXJyZSBkJ2luZMOpcGVuZGFuY2U="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 2, 0),
    explication: "TGUgZHJhcGVhdSBmcmFuw6dhaXMgZXN0IGNvbXBvc8OpIGRlIHRyb2lzIGJhbmRlcyB2ZXJ0aWNhbGVzIDogYmxldSAoY8O0dMOpIG3DonQpLCBibGFuYyAoY2VudHJlKSBldCByb3VnZSAoY8O0dMOpIGZsb3R0YW50KS4gTGUgYmxldSBldCBsZSByb3VnZSBzb250IGxlcyBjb3VsZXVycyBkZSBQYXJpcywgbGUgYmxhbmMgw6l0YWl0IGxhIGNvdWxldXIgcm95YWxlLg=="},
  {
    id: 3,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Hymne national",
    question: "UXVpIGEgY29tcG9zw6kgTGEgTWFyc2VpbGxhaXNlIGV0IGRhbnMgcXVlbCBjb250ZXh0ZSBoaXN0b3JpcXVlIHBhcnRpY3VsaWVyID8=",
    options: [
      "Um91Z2V0IGRlIExpc2xlIGVuIDE3OTIgw6AgU3RyYXNib3VyZywgY29tbWUgY2hhbnQgZGUgZ3VlcnJlIHBvdXIgbCdhcm3DqWUgZHUgUmhpbiBmYWNlIGF1eCBtb25hcmNoaWVzIGV1cm9ww6llbm5lcw==",
      "VmljdG9yIEh1Z28gZW4gMTgzMCBwb3VyIGPDqWzDqWJyZXIgbGEgcsOpdm9sdXRpb24gZGUgSnVpbGxldCBldCBsJ2F2w6huZW1lbnQgZGUgTG91aXMtUGhpbGlwcGU=",
      "SGVjdG9yIEJlcmxpb3ogZW4gMTg0OCBwb3VyIGFjY29tcGFnbmVyIGxhIHByb2NsYW1hdGlvbiBkZSBsYSBEZXV4acOobWUgUsOpcHVibGlxdWUgZnJhbsOnYWlzZQ==",
      "Q2xhdWRlIERlYnVzc3kgZW4gMTkxNCBwb3VyIGdhbHZhbmlzZXIgbGVzIHRyb3VwZXMgZnJhbsOnYWlzZXMgYXUgZMOpYnV0IGRlIGxhIFByZW1pw6hyZSBHdWVycmUgbW9uZGlhbGU="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 3, 0),
    explication: "TGEgTWFyc2VpbGxhaXNlIGEgw6l0w6kgY29tcG9zw6llIHBhciBSb3VnZXQgZGUgTGlzbGUgZW4gMTc5MiDDoCBTdHJhc2JvdXJnIHBvdXIgbCdhcm3DqWUgZHUgUmhpbi4gRWxsZSBlc3QgZGV2ZW51ZSBoeW1uZSBuYXRpb25hbCBlbiAxNzk1Lg=="},
  {
    id: 4,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Démocratie",
    question: "UXUnZXN0LWNlIHF1ZSBsZSBzdWZmcmFnZSB1bml2ZXJzZWwgZGlyZWN0IGV0IGRlcHVpcyBxdWFuZCBzJ2FwcGxpcXVlLXQtaWwgcGxlaW5lbWVudCBlbiBGcmFuY2UgPw==",
    options: [
      "TGUgZHJvaXQgZGUgdm90ZSBwb3VyIHRvdXMgbGVzIGNpdG95ZW5zIG1hamV1cnMsIHBsZWluZW1lbnQgZWZmZWN0aWYgZGVwdWlzIDE5NDQgYXZlYyBsZSB2b3RlIGRlcyBmZW1tZXM=",
      "TGUgZHJvaXQgZGUgdm90ZSByw6lzZXJ2w6kgYXV4IHByb3ByacOpdGFpcmVzIGZvbmNpZXJzLCBlbiB2aWd1ZXVyIGRlcHVpcyBsYSBSw6l2b2x1dGlvbiBkZSAxNzg5",
      "TGUgZHJvaXQgZGUgdm90ZSBwYXIgbCdpbnRlcm3DqWRpYWlyZSBkZSBncmFuZHMgw6lsZWN0ZXVycywgY29tbWUgcG91ciBsJ8OpbGVjdGlvbiBkZXMgc8OpbmF0ZXVycw==",
      "TGUgZHJvaXQgZGUgdm90ZSBhY2NvcmTDqSB1bmlxdWVtZW50IGF1eCBob21tZXMgZGUgcGx1cyBkZSAyNSBhbnMgc2FjaGFudCBsaXJlIGV0IMOpY3JpcmU="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 4, 0),
    explication: "TGUgc3VmZnJhZ2UgdW5pdmVyc2VsIGRpcmVjdCBwZXJtZXQgw6AgdG91cyBsZXMgY2l0b3llbnMgbWFqZXVycyBkZSB2b3Rlci4gSWwgZXN0IHBsZWluZW1lbnQgZWZmZWN0aWYgZW4gRnJhbmNlIGRlcHVpcyAxOTQ0LCBkYXRlIGR1IGRyb2l0IGRlIHZvdGUgZGVzIGZlbW1lcy4="},
  {
    id: 5,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Signes religieux école",
    question: "UXVlIHByw6l2b2l0IGxhIGxvaSBkdSAxNSBtYXJzIDIwMDQgY29uY2VybmFudCBsZXMgc2lnbmVzIHJlbGlnaWV1eCBkYW5zIGxlcyDDqXRhYmxpc3NlbWVudHMgc2NvbGFpcmVzIHB1YmxpY3MgPw==",
    options: [
      "TCdpbnRlcmRpY3Rpb24gZHUgcG9ydCBkZSBzaWduZXMgcmVsaWdpZXV4IG9zdGVuc2libGVzIHBhciBsZXMgw6lsw6h2ZXMgZGVzIMOpY29sZXMsIGNvbGzDqGdlcyBldCBseWPDqWVzIHB1YmxpY3M=",
      "TCdhdXRvcmlzYXRpb24gZGUgdG91cyBsZXMgc2lnbmVzIHJlbGlnaWV1eCBkYW5zIGxlcyDDqXRhYmxpc3NlbWVudHMgc2NvbGFpcmVzIHNhbnMgYXVjdW5lIHJlc3RyaWN0aW9u",
      "TCdpbnRlcmRpY3Rpb24gZGUgdG91dGUgcsOpZsOpcmVuY2UgcmVsaWdpZXVzZSB5IGNvbXByaXMgZGFucyBsZXMgY291cnMgZCdoaXN0b2lyZSBldCBkZSBwaGlsb3NvcGhpZQ==",
      "TCdvYmxpZ2F0aW9uIHBvdXIgdG91cyBsZXMgw6lsw6h2ZXMgZGUgcG9ydGVyIHVuIHVuaWZvcm1lIGxhw69xdWUgc3RhbmRhcmRpc8OpIGRhbnMgbGVzIMOpY29sZXMgcHVibGlxdWVz"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 5, 0),
    explication: "TGEgbG9pIGR1IDE1IG1hcnMgMjAwNCBpbnRlcmRpdCBsZSBwb3J0IGRlIHNpZ25lcyByZWxpZ2lldXggb3N0ZW5zaWJsZXMgcGFyIGxlcyDDqWzDqHZlcyBkYW5zIGxlcyDDqWNvbGVzLCBjb2xsw6hnZXMgZXQgbHljw6llcyBwdWJsaWNzLiBMZXMgc2lnbmVzIGRpc2NyZXRzIHNvbnQgYXV0b3Jpc8Opcy4="},
  {
    id: 6,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Alsace-Moselle",
    question: "UG91cnF1b2kgbGUgcsOpZ2ltZSBkZSBsYSBsYcOvY2l0w6kgZXN0LWlsIGRpZmbDqXJlbnQgZW4gQWxzYWNlLU1vc2VsbGUgcGFyIHJhcHBvcnQgYXUgcmVzdGUgZGUgbGEgRnJhbmNlID8=",
    options: [
      "Q2VzIGTDqXBhcnRlbWVudHMgw6l0YWllbnQgYWxsZW1hbmRzIGVuIDE5MDUgZXQgbidvbnQgcGFzIMOpdMOpIGNvbmNlcm7DqXMgcGFyIGxhIGxvaSBkZSBzw6lwYXJhdGlvbiBkZXMgw4lnbGlzZXMgZXQgZGUgbCfDiXRhdA==",
      "Q2VzIHLDqWdpb25zIG9udCBvYnRlbnUgdW5lIGTDqXJvZ2F0aW9uIHNww6ljaWFsZSBkdSBDb25zZWlsIGNvbnN0aXR1dGlvbm5lbCBlbiAxOTU4IGxvcnMgZGUgbGEgVmUgUsOpcHVibGlxdWU=",
      "TGUgUGFwZSBhIG7DqWdvY2nDqSB1bmUgZXhjZXB0aW9uIHBvdXIgY2VzIHRlcnJpdG9pcmVzIGhpc3RvcmlxdWVtZW50IGNhdGhvbGlxdWVzIGF1IFhJWGUgc2nDqGNsZQ==",
      "Q2VzIGTDqXBhcnRlbWVudHMgb250IHZvdMOpIHBhciByw6lmw6lyZW5kdW0gbG9jYWwgcG91ciBjb25zZXJ2ZXIgbGUgcsOpZ2ltZSBjb25jb3JkYXRhaXJlIGVuIDE5NDU="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 6, 0),
    explication: "TCdBbHNhY2UtTW9zZWxsZSDDqXRhaXQgYWxsZW1hbmRlIGVuIDE5MDUgZXQgbidhIHBhcyDDqXTDqSBjb25jZXJuw6llIHBhciBsYSBsb2kgZGUgc8OpcGFyYXRpb24uIExlIHLDqWdpbWUgY29uY29yZGF0YWlyZSB5IGVzdCBtYWludGVudSwgYXZlYyByZWNvbm5haXNzYW5jZSBkZSBjZXJ0YWlucyBjdWx0ZXMu"},
  {
    id: 7,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Égalité devant la loi",
    question: "UXUnaW1wbGlxdWUgbGUgcHJpbmNpcGUgZCfDqWdhbGl0w6kgZGV2YW50IGxhIGxvaSBpbnNjcml0IGRhbnMgbGEgQ29uc3RpdHV0aW9uIGZyYW7Dp2Fpc2UgPw==",
    options: [
      "TGEgbcOqbWUgbG9pIHMnYXBwbGlxdWUgw6AgdG91cyBzYW5zIGRpc3RpbmN0aW9uIGQnb3JpZ2luZSwgZGUgcmFjZSwgZGUgcmVsaWdpb24gb3UgZGUgY29uZGl0aW9uIHNvY2lhbGU=",
      "VG91cyBsZXMgY2l0b3llbnMgZG9pdmVudCBhdm9pciBleGFjdGVtZW50IGxlcyBtw6ptZXMgcmV2ZW51cyBldCBsZSBtw6ptZSBwYXRyaW1vaW5l",
      "TCfDiXRhdCBkb2l0IHRyYWl0ZXIgZGlmZsOpcmVtbWVudCBjaGFxdWUgY2l0b3llbiBzZWxvbiBzYSBzaXR1YXRpb24gcGVyc29ubmVsbGUgcGFydGljdWxpw6hyZQ==",
      "U2V1bHMgbGVzIGNpdG95ZW5zIGZyYW7Dp2FpcyBkZSBuYWlzc2FuY2UgYsOpbsOpZmljaWVudCBkZSBsJ8OpZ2FsaXTDqSBkZXZhbnQgbGEgbG9pIGZyYW7Dp2Fpc2U="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 7, 0),
    explication: "TCfDqWdhbGl0w6kgZGV2YW50IGxhIGxvaSBzaWduaWZpZSBxdWUgbGEgbcOqbWUgbG9pIHMnYXBwbGlxdWUgw6AgdG91cywgc2FucyBkaXN0aW5jdGlvbi4gQydlc3QgdW4gcHJpbmNpcGUgZm9uZGFtZW50YWwgZGUgbGEgUsOpcHVibGlxdWUgZGVwdWlzIDE3ODku"},
  {
    id: 8,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation embauche",
    question: "VW4gZW1wbG95ZXVyIHZvdXMgZGVtYW5kZSBsb3JzIGQndW4gZW50cmV0aWVuIGQnZW1iYXVjaGUgc2kgdm91cyBjb21wdGV6IGF2b2lyIGRlcyBlbmZhbnRzLiBFc3QtY2UgbMOpZ2FsID8=",
    options: [
      "Tm9uLCBjJ2VzdCB1bmUgcXVlc3Rpb24gZGlzY3JpbWluYXRvaXJlIGludGVyZGl0ZSBwYXIgbGUgQ29kZSBkdSB0cmF2YWlsLCB2b3VzIG4nw6p0ZXMgcGFzIG9ibGlnw6kgZGUgcsOpcG9uZHJl",
      "T3VpLCBsJ2VtcGxveWV1ciBhIGxlIGRyb2l0IGRlIGNvbm5hw650cmUgdm9zIHByb2pldHMgZmFtaWxpYXV4IHBvdXIgb3JnYW5pc2VyIHNvbiBlbnRyZXByaXNl",
      "T3VpLCBzaSBsZSBwb3N0ZSBpbXBsaXF1ZSBkZXMgcmVzcG9uc2FiaWxpdMOpcyBpbXBvcnRhbnRlcyBuw6ljZXNzaXRhbnQgdW5lIGRpc3BvbmliaWxpdMOpIHRvdGFsZQ==",
      "Tm9uLCBzYXVmIHNpIHZvdXMgw6p0ZXMgdW5lIGZlbW1lLCBhdXF1ZWwgY2FzIGNldHRlIHF1ZXN0aW9uIGVzdCBhdXRvcmlzw6llIHBhciBsYSBsb2k="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 8, 0),
    explication: "TGVzIHF1ZXN0aW9ucyBzdXIgbGEgdmllIHByaXbDqWUgKHByb2pldHMgZmFtaWxpYXV4LCByZWxpZ2lvbiwgb3BpbmlvbnMgcG9saXRpcXVlcy4uLikgc29udCBpbnRlcmRpdGVzIGxvcnMgZCd1biBlbnRyZXRpZW4gZCdlbWJhdWNoZS4gQydlc3QgdW5lIGZvcm1lIGRlIGRpc2NyaW1pbmF0aW9uLg=="},
  {
    id: 9,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Accès aux services publics",
    question: "UXVlbCBwcmluY2lwZSBnYXJhbnRpdCBxdWUgdG91cyBsZXMgdXNhZ2VycyBwdWlzc2VudCBhY2PDqWRlciBhdXggc2VydmljZXMgcHVibGljcyBkYW5zIGxlcyBtw6ptZXMgY29uZGl0aW9ucyA/",
    options: [
      "TGUgcHJpbmNpcGUgZCfDqWdhbGl0w6kgZCdhY2PDqHMgYXV4IHNlcnZpY2VzIHB1YmxpY3MsIGNvcm9sbGFpcmUgZHUgcHJpbmNpcGUgZCfDqWdhbGl0w6kgZGV2YW50IGxhIGxvaQ==",
      "TGUgcHJpbmNpcGUgZGUgcmVudGFiaWxpdMOpIGRlcyBzZXJ2aWNlcyBwdWJsaWNzIGltcG9zYW50IHVuZSB0YXJpZmljYXRpb24gdW5pZm9ybWU=",
      "TGUgcHJpbmNpcGUgZGUgcHJveGltaXTDqSBvYmxpZ2VhbnQgbCfDiXRhdCDDoCBpbXBsYW50ZXIgdW4gc2VydmljZSBwdWJsaWMgZGFucyBjaGFxdWUgY29tbXVuZQ==",
      "TGUgcHJpbmNpcGUgZGUgZ3JhdHVpdMOpIHRvdGFsZSBkZSB0b3VzIGxlcyBzZXJ2aWNlcyBwdWJsaWNzIHBvdXIgbCdlbnNlbWJsZSBkZXMgY2l0b3llbnM="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 9, 0),
    explication: "TGUgcHJpbmNpcGUgZCfDqWdhbGl0w6kgZCdhY2PDqHMgYXV4IHNlcnZpY2VzIHB1YmxpY3MgZ2FyYW50aXQgcXVlIHRvdXMgbGVzIHVzYWdlcnMgcGV1dmVudCB5IGFjY8OpZGVyIGRhbnMgbGVzIG3Dqm1lcyBjb25kaXRpb25zLCBzYW5zIGRpc2NyaW1pbmF0aW9uLg=="},
  {
    id: 10,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Solidarité nationale",
    question: "Q29tbWVudCBzZSBtYW5pZmVzdGUgY29uY3LDqHRlbWVudCBsZSBwcmluY2lwZSBkZSBzb2xpZGFyaXTDqSBuYXRpb25hbGUgZW4gRnJhbmNlID8=",
    options: [
      "UGFyIGxlIHN5c3TDqG1lIGRlIHByb3RlY3Rpb24gc29jaWFsZSAoU8OpY3VyaXTDqSBzb2NpYWxlLCBhaWRlcyBzb2NpYWxlcykgZmluYW5jw6kgcGFyIGxlcyBjb3Rpc2F0aW9ucyBldCBpbXDDtHRz",
      "UGFyIGwnb2JsaWdhdGlvbiBwb3VyIGNoYXF1ZSBjaXRveWVuIGQnYWlkZXIgcGVyc29ubmVsbGVtZW50IHNlcyB2b2lzaW5zIGVuIGRpZmZpY3VsdMOp",
      "UGFyIGxlIGLDqW7DqXZvbGF0IG9ibGlnYXRvaXJlIGRlIDEwIGhldXJlcyBwYXIgbW9pcyBpbXBvc8OpIMOgIHRvdXMgbGVzIGNpdG95ZW5zIGZyYW7Dp2Fpcw==",
      "UGFyIGxlIHZlcnNlbWVudCBkJ3VuIHJldmVudSB1bml2ZXJzZWwgaWRlbnRpcXVlIMOgIHRvdXMgbGVzIHLDqXNpZGVudHMgZHUgdGVycml0b2lyZSBmcmFuw6dhaXM="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 10, 0),
    explication: "TGEgc29saWRhcml0w6kgbmF0aW9uYWxlIHNlIG1hbmlmZXN0ZSBwYXIgbGUgc3lzdMOobWUgZGUgcHJvdGVjdGlvbiBzb2NpYWxlIDogU8OpY3VyaXTDqSBzb2NpYWxlLCBhbGxvY2F0aW9ucyBmYW1pbGlhbGVzLCBSU0EsIGFpZGVzIGF1IGxvZ2VtZW50Li4uIGZpbmFuY8OpcyBjb2xsZWN0aXZlbWVudC4="},
  {
    id: 11,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Défenseur des droits",
    question: "UXVlbCBlc3QgbGUgcsO0bGUgZHUgRMOpZmVuc2V1ciBkZXMgZHJvaXRzLCBhdXRvcml0w6kgY29uc3RpdHV0aW9ubmVsbGUgaW5kw6lwZW5kYW50ZSBjcsOpw6llIGVuIDIwMTEgPw==",
    options: [
      "RMOpZmVuZHJlIGxlcyBkcm9pdHMgZGVzIGNpdG95ZW5zIGZhY2UgYXV4IGFkbWluaXN0cmF0aW9ucywgbHV0dGVyIGNvbnRyZSBsZXMgZGlzY3JpbWluYXRpb25zIGV0IHByb3TDqWdlciBsZXMgZW5mYW50cw==",
      "UmVwcsOpc2VudGVyIGxhIEZyYW5jZSBhdXByw6hzIGRlIGxhIENvdXIgZXVyb3DDqWVubmUgZGVzIGRyb2l0cyBkZSBsJ2hvbW1lIMOgIFN0cmFzYm91cmc=",
      "UHLDqXNpZGVyIGxlIENvbnNlaWwgY29uc3RpdHV0aW9ubmVsIGV0IHN0YXR1ZXIgc3VyIGxhIGNvbmZvcm1pdMOpIGRlcyBsb2lzIMOgIGxhIENvbnN0aXR1dGlvbg==",
      "RGlyaWdlciBsZXMgc2VydmljZXMgZGUgcG9saWNlIGV0IGRlIGdlbmRhcm1lcmllIHBvdXIgZ2FyYW50aXIgbCdvcmRyZSBwdWJsaWMgcsOpcHVibGljYWlu"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 11, 0),
    explication: "TGUgRMOpZmVuc2V1ciBkZXMgZHJvaXRzIGTDqWZlbmQgbGVzIGRyb2l0cyBkZXMgY2l0b3llbnMgZmFjZSBhdXggYWRtaW5pc3RyYXRpb25zLCBsdXR0ZSBjb250cmUgbGVzIGRpc2NyaW1pbmF0aW9ucywgZMOpZmVuZCBsZXMgZHJvaXRzIGRlcyBlbmZhbnRzIGV0IHZlaWxsZSDDoCBsYSBkw6lvbnRvbG9naWUgZGVzIGZvcmNlcyBkZSBzw6ljdXJpdMOpLg=="},

  // ==================== 2. SYSTÈME INSTITUTIONNEL (6 questions) ====================
  
  {
    id: 12,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Séparation des pouvoirs",
    question: "UXVlbHMgc29udCBsZXMgdHJvaXMgcG91dm9pcnMgc8OpcGFyw6lzIGRhbnMgdW5lIGTDqW1vY3JhdGllIHNlbG9uIGxhIHRow6lvcmllIGRlIE1vbnRlc3F1aWV1ID8=",
    options: [
      "TGUgcG91dm9pciBsw6lnaXNsYXRpZiAoZmFpcmUgbGVzIGxvaXMpLCBleMOpY3V0aWYgKGFwcGxpcXVlciBsZXMgbG9pcykgZXQganVkaWNpYWlyZSAoanVnZXIgc2Vsb24gbGVzIGxvaXMp",
      "TGUgcG91dm9pciBwcsOpc2lkZW50aWVsLCBnb3V2ZXJuZW1lbnRhbCBldCBwYXJsZW1lbnRhaXJlIHRlbHMgcXVlIGTDqWZpbmlzIGRhbnMgbGEgQ29uc3RpdHV0aW9uIGRlIDE5NTg=",
      "TGUgcG91dm9pciBtdW5pY2lwYWwsIGTDqXBhcnRlbWVudGFsIGV0IHLDqWdpb25hbCBjb25zdGl0dWFudCBsZXMgY29sbGVjdGl2aXTDqXMgdGVycml0b3JpYWxlcyBmcmFuw6dhaXNlcw==",
      "TGUgcG91dm9pciBtaWxpdGFpcmUsIHJlbGlnaWV1eCBldCBjaXZpbCBow6lyaXTDqXMgZGUgbCdvcmdhbmlzYXRpb24gZGUgbCdBbmNpZW4gUsOpZ2ltZSBtb25hcmNoaXF1ZQ=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 12, 0),
    explication: "TW9udGVzcXVpZXUgYSB0aMOpb3Jpc8OpIGxhIHPDqXBhcmF0aW9uIGRlcyBwb3V2b2lycyA6IGzDqWdpc2xhdGlmIChQYXJsZW1lbnQpLCBleMOpY3V0aWYgKEdvdXZlcm5lbWVudCkgZXQganVkaWNpYWlyZSAodHJpYnVuYXV4KS4gQ2UgcHJpbmNpcGUgZ2FyYW50aXQgbGVzIGxpYmVydMOpcy4="},
  {
    id: 13,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Mandat présidentiel",
    question: "UXVlbGxlIGVzdCBsYSBkdXLDqWUgZHUgbWFuZGF0IHByw6lzaWRlbnRpZWwgZXQgY29tYmllbiBkZSBtYW5kYXRzIGNvbnPDqWN1dGlmcyBzb250IGF1dG9yaXPDqXMgZGVwdWlzIDIwMDggPw==",
    options: [
      "NSBhbnMgKHF1aW5xdWVubmF0IGRlcHVpcyAyMDAwKSwgcmVub3V2ZWxhYmxlIHVuZSBzZXVsZSBmb2lzIGNvbnPDqWN1dGl2ZW1lbnQgZGVwdWlzIGxhIHLDqXZpc2lvbiBkZSAyMDA4",
      "NyBhbnMgKHNlcHRlbm5hdCkgcmVub3V2ZWxhYmxlIGluZMOpZmluaW1lbnQgY29tbWUgYyfDqXRhaXQgbGUgY2FzIGF2YW50IGxhIHLDqWZvcm1lIGRlIDIwMDA=",
      "NCBhbnMgcmVub3V2ZWxhYmxlIGRldXggZm9pcyBtYXhpbXVtIHN1ciBsZSBtb2TDqGxlIGRlIGxhIHByw6lzaWRlbmNlIGFtw6lyaWNhaW5l",
      "NiBhbnMgbm9uIHJlbm91dmVsYWJsZSBwb3VyIGdhcmFudGlyIGwnYWx0ZXJuYW5jZSBkw6ltb2NyYXRpcXVlIGF1IHNvbW1ldCBkZSBsJ8OJdGF0"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 13, 0),
    explication: "TGUgUHLDqXNpZGVudCBlc3Qgw6lsdSBwb3VyIDUgYW5zIChxdWlucXVlbm5hdCBkZXB1aXMgMjAwMCkuIERlcHVpcyAyMDA4LCBpbCBuZSBwZXV0IGV4ZXJjZXIgcGx1cyBkZSBkZXV4IG1hbmRhdHMgY29uc8OpY3V0aWZzLg=="},
  {
    id: 14,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Rôle du Gouvernement",
    question: "UXVlbCBlc3QgbGUgcsO0bGUgY29uc3RpdHV0aW9ubmVsIGR1IEdvdXZlcm5lbWVudCBzZWxvbiBsJ2FydGljbGUgMjAgZGUgbGEgQ29uc3RpdHV0aW9uIGRlIDE5NTggPw==",
    options: [
      "RMOpdGVybWluZXIgZXQgY29uZHVpcmUgbGEgcG9saXRpcXVlIGRlIGxhIE5hdGlvbiwgZGlzcG9zZXIgZGUgbCdhZG1pbmlzdHJhdGlvbiBldCBkZSBsYSBmb3JjZSBhcm3DqWU=",
      "Vm90ZXIgbGVzIGxvaXMsIGF1dG9yaXNlciBsZSBidWRnZXQgZGUgbCfDiXRhdCBldCBjb250csO0bGVyIGwnYWN0aW9uIGR1IHBvdXZvaXIgZXjDqWN1dGlm",
      "UmVuZHJlIGxhIGp1c3RpY2UgYXUgbm9tIGR1IHBldXBsZSBmcmFuw6dhaXMgZXQgaW50ZXJwcsOpdGVyIGxlcyBsb2lzIHZvdMOpZXMgcGFyIGxlIFBhcmxlbWVudA==",
      "w4lsaXJlIGxlIFByw6lzaWRlbnQgZGUgbGEgUsOpcHVibGlxdWUgZXQgbm9tbWVyIGxlcyBtZW1icmVzIGR1IENvbnNlaWwgY29uc3RpdHV0aW9ubmVs"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 14, 0),
    explication: "U2Vsb24gbCdhcnRpY2xlIDIwLCBsZSBHb3V2ZXJuZW1lbnQgZMOpdGVybWluZSBldCBjb25kdWl0IGxhIHBvbGl0aXF1ZSBkZSBsYSBOYXRpb24uIElsIGRpc3Bvc2UgZGUgbCdhZG1pbmlzdHJhdGlvbiBldCBkZSBsYSBmb3JjZSBhcm3DqWUu"},
  {
    id: 15,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Motion de censure",
    question: "UXUnZXN0LWNlIHF1J3VuZSBtb3Rpb24gZGUgY2Vuc3VyZSBldCBxdWVsbGVzIHNvbnQgc2VzIGNvbnPDqXF1ZW5jZXMgc2kgZWxsZSBlc3QgYWRvcHTDqWUgPw==",
    options: [
      "VW4gdm90ZSBkZSBsJ0Fzc2VtYmzDqWUgbmF0aW9uYWxlIHF1aSwgcydpbCBlc3QgYWRvcHTDqSDDoCBsYSBtYWpvcml0w6kgYWJzb2x1ZSwgZW50cmHDrm5lIGxhIGTDqW1pc3Npb24gZHUgR291dmVybmVtZW50",
      "VW5lIGTDqWNpc2lvbiBkdSBQcsOpc2lkZW50IGRlIGxhIFLDqXB1YmxpcXVlIG1ldHRhbnQgZmluIGF1eCBmb25jdGlvbnMgZHUgUHJlbWllciBtaW5pc3RyZQ==",
      "VW4gYXZpcyBkdSBDb25zZWlsIGNvbnN0aXR1dGlvbm5lbCBkw6ljbGFyYW50IHVuZSBsb2kgY29udHJhaXJlIMOgIGxhIENvbnN0aXR1dGlvbg==",
      "VW5lIHByb2PDqWR1cmUgZHUgU8OpbmF0IHBlcm1ldHRhbnQgZGUgZGVzdGl0dWVyIGxlIFByw6lzaWRlbnQgZGUgbGEgUsOpcHVibGlxdWUgcG91ciBoYXV0ZSB0cmFoaXNvbg=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 15, 0),
    explication: "TGEgbW90aW9uIGRlIGNlbnN1cmUgZXN0IHVuIHZvdGUgZGUgbCdBc3NlbWJsw6llIG5hdGlvbmFsZS4gU2kgZWxsZSBlc3QgYWRvcHTDqWUgw6AgbGEgbWFqb3JpdMOpIGFic29sdWUsIGxlIEdvdXZlcm5lbWVudCBkb2l0IGTDqW1pc3Npb25uZXIu"},
  {
    id: 16,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Conseil d'État",
    question: "UXVlbGxlcyBzb250IGxlcyBkZXV4IGZvbmN0aW9ucyBwcmluY2lwYWxlcyBkdSBDb25zZWlsIGQnw4l0YXQgZGFucyBsZSBzeXN0w6htZSBpbnN0aXR1dGlvbm5lbCBmcmFuw6dhaXMgPw==",
    options: [
      "Q29uc2VpbGxlciBqdXJpZGlxdWUgZHUgR291dmVybmVtZW50IHBvdXIgbGVzIHByb2pldHMgZGUgbG9pIGV0IHBsdXMgaGF1dGUganVyaWRpY3Rpb24gYWRtaW5pc3RyYXRpdmU=",
      "Q2hhbWJyZSBoYXV0ZSBkdSBQYXJsZW1lbnQgZXQgY291ciBkJ2FwcGVsIHBvdXIgbGVzIGTDqWNpc2lvbnMgZGUgbCdBc3NlbWJsw6llIG5hdGlvbmFsZQ==",
      "VHJpYnVuYWwgcMOpbmFsIHBvdXIgbGVzIGNyaW1lcyBwb2xpdGlxdWVzIGV0IGNvdXIgZGUgY2Fzc2F0aW9uIHBvdXIgbGVzIGFmZmFpcmVzIGNpdmlsZXM=",
      "T3JnYW5lIGRlIGNvbnRyw7RsZSBkdSBidWRnZXQgZGUgbCfDiXRhdCBldCBqdXJpZGljdGlvbiBmaW5hbmNpw6hyZSBzdXByw6ptZSBkZSBsYSBSw6lwdWJsaXF1ZQ=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 16, 0),
    explication: "TGUgQ29uc2VpbCBkJ8OJdGF0IGEgZGV1eCBmb25jdGlvbnMgOiBjb25zZWlsbGVyIGxlIEdvdXZlcm5lbWVudCBzdXIgbGVzIHByb2pldHMgZGUgdGV4dGVzIGp1cmlkaXF1ZXMgZXQganVnZXIgZW4gZGVybmllciByZXNzb3J0IGxlcyBsaXRpZ2VzIGFkbWluaXN0cmF0aWZzLg=="},
  {
    id: 17,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Cour des comptes",
    question: "UXVlbGxlIGVzdCBsYSBtaXNzaW9uIHByaW5jaXBhbGUgZGUgbGEgQ291ciBkZXMgY29tcHRlcyBkYW5zIGxlIGNvbnRyw7RsZSBkZSBsJ2FjdGlvbiBwdWJsaXF1ZSA/",
    options: [
      "Q29udHLDtGxlciBsYSByw6lndWxhcml0w6kgZXQgbCdlZmZpY2FjaXTDqSBkZSBsJ3V0aWxpc2F0aW9uIGRlcyBmb25kcyBwdWJsaWNzIHBhciBsZXMgYWRtaW5pc3RyYXRpb25z",
      "SnVnZXIgbGVzIGluZnJhY3Rpb25zIHDDqW5hbGVzIGNvbW1pc2VzIHBhciBsZXMgZm9uY3Rpb25uYWlyZXMgZGFucyBsJ2V4ZXJjaWNlIGRlIGxldXJzIGZvbmN0aW9ucw==",
      "VsOpcmlmaWVyIGxhIGNvbnN0aXR1dGlvbm5hbGl0w6kgZGVzIGxvaXMgdm90w6llcyBwYXIgbGUgUGFybGVtZW50IGF2YW50IGxldXIgcHJvbXVsZ2F0aW9u",
      "R8OpcmVyIGxlIGJ1ZGdldCBkZSBsJ8OJdGF0IGV0IHLDqXBhcnRpciBsZXMgY3LDqWRpdHMgZW50cmUgbGVzIGRpZmbDqXJlbnRzIG1pbmlzdMOocmVz"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 17, 0),
    explication: "TGEgQ291ciBkZXMgY29tcHRlcyBjb250csO0bGUgbGEgcsOpZ3VsYXJpdMOpIGV0IGwnZWZmaWNhY2l0w6kgZGUgbCd1dGlsaXNhdGlvbiBkZSBsJ2FyZ2VudCBwdWJsaWMuIEVsbGUgcHJvZHVpdCB1biByYXBwb3J0IGFubnVlbCByZW5kdSBwdWJsaWMu"},

  // ==================== 3. DROITS ET DEVOIRS (11 questions) ====================
  
  {
    id: 18,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits naturels DDHC",
    question: "UXVlbHMgc29udCBsZXMgcXVhdHJlIGRyb2l0cyBuYXR1cmVscyBldCBpbXByZXNjcmlwdGlibGVzIGRlIGwnaG9tbWUgc2Vsb24gbCdhcnRpY2xlIDIgZGUgbGEgRERIQyBkZSAxNzg5ID8=",
    options: [
      "TGEgbGliZXJ0w6ksIGxhIHByb3ByacOpdMOpLCBsYSBzw7tyZXTDqSBldCBsYSByw6lzaXN0YW5jZSDDoCBsJ29wcHJlc3Npb24sIGRyb2l0cyBpbmFsacOpbmFibGVzIGRlIHRvdXQgw6p0cmUgaHVtYWlu",
      "TGUgdHJhdmFpbCwgbGUgbG9nZW1lbnQsIGwnw6lkdWNhdGlvbiBldCBsYSBzYW50w6ksIGRyb2l0cyBzb2NpYXV4IGdhcmFudGlzIHBhciBsJ8OJdGF0IHByb3ZpZGVuY2U=",
      "TGUgdm90ZSwgbCfDqWxpZ2liaWxpdMOpLCBsYSBuYXRpb25hbGl0w6kgZXQgbGEgY2l0b3llbm5ldMOpLCBkcm9pdHMgcG9saXRpcXVlcyBkZXMgc2V1bHMgbmF0aW9uYXV4",
      "TGEgdmllLCBsYSBkaWduaXTDqSwgbCdpbnTDqWdyaXTDqSBwaHlzaXF1ZSBldCBsYSBsaWJlcnTDqSBkZSBtb3V2ZW1lbnQsIGRyb2l0cyBmb25kYW1lbnRhdXggY29udGVtcG9yYWlucw=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 18, 0),
    explication: "TCdhcnRpY2xlIDIgZGUgbGEgRERIQyBkw6lmaW5pdCBxdWF0cmUgZHJvaXRzIG5hdHVyZWxzIGV0IGltcHJlc2NyaXB0aWJsZXMgOiBsYSBsaWJlcnTDqSwgbGEgcHJvcHJpw6l0w6ksIGxhIHPDu3JldMOpIGV0IGxhIHLDqXNpc3RhbmNlIMOgIGwnb3BwcmVzc2lvbi4="},
  {
    id: 19,
    categorie: "Droits et devoirs",
    sousCategorie: "Présomption d'innocence",
    question: "UXUnaW1wbGlxdWUgbGUgcHJpbmNpcGUgZGUgcHLDqXNvbXB0aW9uIGQnaW5ub2NlbmNlIGdhcmFudGkgcGFyIGwnYXJ0aWNsZSA5IGRlIGxhIERESEMgPw==",
    options: [
      "VG91dGUgcGVyc29ubmUgYWNjdXPDqWUgZXN0IGNvbnNpZMOpcsOpZSBpbm5vY2VudGUganVzcXUnw6AgY2UgcXVlIHNhIGN1bHBhYmlsaXTDqSBzb2l0IGzDqWdhbGVtZW50IMOpdGFibGll",
      "VG91dGUgcGVyc29ubmUgYXJyw6p0w6llIGRvaXQgw6p0cmUgaW1tw6lkaWF0ZW1lbnQgbGliw6lyw6llIHNhbnMgcG9zc2liaWxpdMOpIGRlIGTDqXRlbnRpb24gcHJvdmlzb2lyZQ==",
      "TGVzIGp1Z2VzIGRvaXZlbnQgYWNxdWl0dGVyIHN5c3TDqW1hdGlxdWVtZW50IGxlcyBhY2N1c8OpcyBlbiBjYXMgZGUgZG91dGUgc3VyIGxldXIgY3VscGFiaWxpdMOp",
      "TGEgcG9saWNlIG5lIHBldXQgcHJvY8OpZGVyIMOgIGF1Y3VuZSBhcnJlc3RhdGlvbiBzYW5zIHVuZSBjb25kYW1uYXRpb24gcHLDqWFsYWJsZSBwYXIgdW4gdHJpYnVuYWw="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 19, 0),
    explication: "TGEgcHLDqXNvbXB0aW9uIGQnaW5ub2NlbmNlIHNpZ25pZmllIHF1ZSB0b3V0ZSBwZXJzb25uZSBlc3QgY29uc2lkw6lyw6llIGlubm9jZW50ZSBqdXNxdSfDoCBjZSBxdSd1biB0cmlidW5hbCDDqXRhYmxpc3NlIHNhIGN1bHBhYmlsaXTDqS4gQydlc3QgdW4gZHJvaXQgZm9uZGFtZW50YWwu"},
  {
    id: 20,
    categorie: "Droits et devoirs",
    sousCategorie: "Secret du vote",
    question: "UG91cnF1b2kgbGUgc2VjcmV0IGR1IHZvdGUgZXN0LWlsIGdhcmFudGkgZXQgY29tbWVudCBlc3QtaWwgYXNzdXLDqSBsb3JzIGRlcyBzY3J1dGlucyA/",
    options: [
      "UG91ciBnYXJhbnRpciBsYSBsaWJlcnTDqSBkZSBjaG9peCBkZSBsJ8OpbGVjdGV1ciwgYXNzdXLDqSBwYXIgbCdpc29sb2lyIGV0IGwnZW52ZWxvcHBlIGZlcm3DqWUgb2JsaWdhdG9pcmVz",
      "UG91ciBwZXJtZXR0cmUgYXV4IGNhbmRpZGF0cyBkZSB2w6lyaWZpZXIgcXVpIGEgdm90w6kgcG91ciBldXggYXByw6hzIGxlIGTDqXBvdWlsbGVtZW50",
      "UG91ciBmYWNpbGl0ZXIgbGUgY29tcHRhZ2UgZGVzIHZvaXggcGFyIGxlcyBhc3Nlc3NldXJzIGR1IGJ1cmVhdSBkZSB2b3Rl",
      "UG91ciBwZXJtZXR0cmUgYXV4IMOpbGVjdGV1cnMgZGUgdm90ZXIgcGFyIGNvcnJlc3BvbmRhbmNlIHNhbnMgc2UgZMOpcGxhY2VyIGF1IGJ1cmVhdSBkZSB2b3Rl"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 20, 0),
    explication: "TGUgc2VjcmV0IGR1IHZvdGUgZ2FyYW50aXQgbGEgbGliZXJ0w6kgZGUgY2hvaXggZGUgbCfDqWxlY3RldXIuIElsIGVzdCBhc3N1csOpIHBhciBsZSBwYXNzYWdlIG9ibGlnYXRvaXJlIHBhciBsJ2lzb2xvaXIgZXQgbCd1dGlsaXNhdGlvbiBkJ2VudmVsb3BwZXMgZmVybcOpZXMu"},
  {
    id: 21,
    categorie: "Droits et devoirs",
    sousCategorie: "Devoir de contribution",
    question: "UXUnaW1wbGlxdWUgbCdhcnRpY2xlIDEzIGRlIGxhIERESEMgY29uY2VybmFudCBsYSBjb250cmlidXRpb24gY29tbXVuZSBhdXggY2hhcmdlcyBwdWJsaXF1ZXMgPw==",
    options: [
      "Q2hhY3VuIGRvaXQgY29udHJpYnVlciBhdXggZMOpcGVuc2VzIHB1YmxpcXVlcyBzZWxvbiBzZXMgY2FwYWNpdMOpcywgZm9uZGVtZW50IGR1IHN5c3TDqG1lIGZpc2NhbCBmcmFuw6dhaXM=",
      "U2V1bHMgbGVzIHByb3ByacOpdGFpcmVzIGZvbmNpZXJzIGRvaXZlbnQgcGF5ZXIgZGVzIGltcMO0dHMgcG91ciBmaW5hbmNlciBsZXMgc2VydmljZXMgcHVibGljcw==",
      "TGVzIGltcMO0dHMgc29udCBmYWN1bHRhdGlmcyBldCBjaGFxdWUgY2l0b3llbiBjaG9pc2l0IGxpYnJlbWVudCBkZSBjb250cmlidWVyIG91IG5vbg==",
      "TCfDiXRhdCBkb2l0IGFzc3VyZXIgbGEgZ3JhdHVpdMOpIHRvdGFsZSBkZSB0b3VzIGxlcyBzZXJ2aWNlcyBzYW5zIGF1Y3VuIHByw6lsw6h2ZW1lbnQgZmlzY2Fs"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 21, 0),
    explication: "TCdhcnRpY2xlIDEzIGRlIGxhIERESEMgZm9uZGUgbCdvYmxpZ2F0aW9uIGZpc2NhbGUgOiBsYSBjb250cmlidXRpb24gY29tbXVuZSBkb2l0IMOqdHJlIHLDqXBhcnRpZSBlbnRyZSB0b3VzIHNlbG9uIGxldXJzIGZhY3VsdMOpcy4gQydlc3QgbGUgZm9uZGVtZW50IGRlIGwnaW1ww7R0Lg=="},
  {
    id: 22,
    categorie: "Droits et devoirs",
    sousCategorie: "Droit à l'éducation",
    question: "UXVpIHBldXQgYsOpbsOpZmljaWVyIGR1IGRyb2l0IMOgIGwnaW5zdHJ1Y3Rpb24gZ3JhdHVpdGUgZGFucyBsJ8OpY29sZSBwdWJsaXF1ZSBmcmFuw6dhaXNlID8=",
    options: [
      "VG91cyBsZXMgZW5mYW50cyByw6lzaWRhbnQgZW4gRnJhbmNlLCBxdWVsbGUgcXVlIHNvaXQgbGV1ciBuYXRpb25hbGl0w6kgb3UgbGV1ciBzaXR1YXRpb24gYWRtaW5pc3RyYXRpdmU=",
      "VW5pcXVlbWVudCBsZXMgZW5mYW50cyBkZSBuYXRpb25hbGl0w6kgZnJhbsOnYWlzZSBuw6lzIHN1ciBsZSB0ZXJyaXRvaXJlIG5hdGlvbmFs",
      "TGVzIGVuZmFudHMgZGUgZmFtaWxsZXMgcGF5YW50IGRlcyBpbXDDtHRzIGVuIEZyYW5jZSBkZXB1aXMgYXUgbW9pbnMgNSBhbnM=",
      "VW5pcXVlbWVudCBsZXMgZW5mYW50cyBkb250IGxlcyBwYXJlbnRzIHNvbnQgaW5zY3JpdHMgc3VyIGxlcyBsaXN0ZXMgw6lsZWN0b3JhbGVz"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 22, 0),
    explication: "VG91cyBsZXMgZW5mYW50cyByw6lzaWRhbnQgZW4gRnJhbmNlIG9udCBkcm9pdCDDoCBsJ2luc3RydWN0aW9uIGdyYXR1aXRlLCBxdWVsbGUgcXVlIHNvaXQgbGV1ciBuYXRpb25hbGl0w6kgb3UgbGEgc2l0dWF0aW9uIGFkbWluaXN0cmF0aXZlIGRlIGxldXJzIHBhcmVudHMu"},
  {
    id: 23,
    categorie: "Droits et devoirs",
    sousCategorie: "Mise en situation recensement",
    question: "w4AgcXVlbCDDomdlIGRldmV6LXZvdXMgdm91cyBmYWlyZSByZWNlbnNlciBhdXByw6hzIGRlIHZvdHJlIG1haXJpZSBldCBwb3VycXVvaSBlc3QtY2Ugb2JsaWdhdG9pcmUgPw==",
    options: [
      "w4AgMTYgYW5zLCBwb3VyIMOqdHJlIGNvbnZvcXXDqSDDoCBsYSBKb3VybsOpZSBEw6lmZW5zZSBldCBDaXRveWVubmV0w6kgZXQgcG91dm9pciBwYXNzZXIgZGVzIGV4YW1lbnM=",
      "w4AgMTggYW5zLCBwb3VyIG9idGVuaXIgYXV0b21hdGlxdWVtZW50IGxlIGRyb2l0IGRlIHZvdGUgYXV4IMOpbGVjdGlvbnMgbmF0aW9uYWxlcw==",
      "w4AgMjEgYW5zLCBwb3VyIMOqdHJlIMOpbGlnaWJsZSBhdXggZm9uY3Rpb25zIMOpbGVjdGl2ZXMgbXVuaWNpcGFsZXMgZXQgZMOpcGFydGVtZW50YWxlcw==",
      "w4AgMjUgYW5zLCBwb3VyIHBvdXZvaXIgZGVtYW5kZXIgbGEgbmF0aW9uYWxpdMOpIGZyYW7Dp2Fpc2UgcGFyIG5hdHVyYWxpc2F0aW9u"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 23, 0),
    explication: "TGUgcmVjZW5zZW1lbnQgZXN0IG9ibGlnYXRvaXJlIMOgIDE2IGFucy4gSWwgcGVybWV0IGQnw6p0cmUgY29udm9xdcOpIMOgIGxhIEpEQyBldCBlc3QgbsOpY2Vzc2FpcmUgcG91ciBzJ2luc2NyaXJlIGF1eCBleGFtZW5zIChiYWMsIHBlcm1pcyBkZSBjb25kdWlyZS4uLiku"},
  {
    id: 24,
    categorie: "Droits et devoirs",
    sousCategorie: "Droit au logement",
    question: "TGUgZHJvaXQgYXUgbG9nZW1lbnQgZXN0LWlsIHJlY29ubnUgZW4gRnJhbmNlIGV0IGNvbW1lbnQgcGV1dC1vbiBsZSBmYWlyZSB2YWxvaXIgPw==",
    options: [
      "T3VpLCBjJ2VzdCB1biBvYmplY3RpZiDDoCB2YWxldXIgY29uc3RpdHV0aW9ubmVsbGUgOyBsZSBEQUxPIHBlcm1ldCBkZSBzYWlzaXIgdW5lIGNvbW1pc3Npb24gZW4gY2FzIGRlIG1hbC1sb2dlbWVudA==",
      "Tm9uLCBsZSBsb2dlbWVudCByZWzDqHZlIGV4Y2x1c2l2ZW1lbnQgZGUgbGEgcmVzcG9uc2FiaWxpdMOpIGluZGl2aWR1ZWxsZSBkZSBjaGFxdWUgY2l0b3llbg==",
      "T3VpLCBsJ8OJdGF0IGRvaXQgZm91cm5pciBncmF0dWl0ZW1lbnQgdW4gbG9nZW1lbnQgw6AgdG91dGUgcGVyc29ubmUgcXVpIGVuIGZhaXQgbGEgZGVtYW5kZQ==",
      "Tm9uLCBzZXVscyBsZXMgcHJvcHJpw6l0YWlyZXMgb250IGRlcyBkcm9pdHMgZW4gbWF0acOocmUgZGUgbG9nZW1lbnQgZW4gRnJhbmNl"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 24, 0),
    explication: "TGUgZHJvaXQgYXUgbG9nZW1lbnQgZXN0IHVuIG9iamVjdGlmIMOgIHZhbGV1ciBjb25zdGl0dXRpb25uZWxsZS4gTGUgRHJvaXQgYXUgTG9nZW1lbnQgT3Bwb3NhYmxlIChEQUxPKSBwZXJtZXQgYXV4IG1hbC1sb2fDqXMgZGUgc2Fpc2lyIHVuZSBjb21taXNzaW9uIHBvdXIgZmFpcmUgdmFsb2lyIGNlIGRyb2l0Lg=="},
  {
    id: 25,
    categorie: "Droits et devoirs",
    sousCategorie: "Obligation de témoigner",
    question: "w4p0ZXMtdm91cyBvYmxpZ8OpIGRlIHTDqW1vaWduZXIgc2kgdm91cyDDqnRlcyBjaXTDqSBjb21tZSB0w6ltb2luIGRhbnMgdW5lIGFmZmFpcmUganVkaWNpYWlyZSA/",
    options: [
      "T3VpLCBsZSByZWZ1cyBkZSB0w6ltb2lnbmVyIHNhbnMgbW90aWYgbMOpZ2l0aW1lIGVzdCB1bmUgaW5mcmFjdGlvbiBwdW5pZSBwYXIgbGEgbG9pIGZyYW7Dp2Fpc2U=",
      "Tm9uLCBsZSB0w6ltb2lnbmFnZSBlc3QgdG91am91cnMgZmFjdWx0YXRpZiBwb3VyIHByb3TDqWdlciBsYSB2aWUgcHJpdsOpZSBkZXMgY2l0b3llbnM=",
      "T3VpLCBzYXVmIHNpIHZvdXMgw6p0ZXMgdW4gcHJvY2hlIGRlIGwnYWNjdXPDqSwgYXVxdWVsIGNhcyB2b3VzIMOqdGVzIGF1dG9tYXRpcXVlbWVudCBkaXNwZW5zw6k=",
      "Tm9uLCBzZXVscyBsZXMgZm9uY3Rpb25uYWlyZXMgZXQgYWdlbnRzIHB1YmxpY3Mgb250IGwnb2JsaWdhdGlvbiBsw6lnYWxlIGRlIHTDqW1vaWduZXI="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 25, 0),
    explication: "TGUgdMOpbW9pZ25hZ2UgZW4ganVzdGljZSBlc3QgdW5lIG9ibGlnYXRpb24gY2l2aXF1ZS4gTGUgcmVmdXMgZGUgdMOpbW9pZ25lciBvdSBsZSBmYXV4IHTDqW1vaWduYWdlIHNvbnQgZGVzIGluZnJhY3Rpb25zIHB1bmllcyBwYXIgbGEgbG9pLg=="},
  {
    id: 26,
    categorie: "Droits et devoirs",
    sousCategorie: "Mise en situation accident",
    question: "Vm91cyBhc3Npc3RleiDDoCB1biBhY2NpZGVudCBkZSBsYSByb3V0ZSBhdmVjIGRlcyBibGVzc8Opcy4gUXVlbGxlIGVzdCB2b3RyZSBvYmxpZ2F0aW9uIGzDqWdhbGUgPw==",
    options: [
      "UHJvdMOpZ2VyLCBhbGVydGVyIGxlcyBzZWNvdXJzICgxNSwgMTgsIDExMiksIHNlY291cmlyIHNpIHBvc3NpYmxlIDsgbGEgbm9uLWFzc2lzdGFuY2UgZXN0IHVuIGTDqWxpdCBww6luYWw=",
      "TmUgcmllbiBmYWlyZSBwb3VyIG5lIHBhcyBhZ2dyYXZlciBsYSBzaXR1YXRpb24gY2FyIHNldWxzIGxlcyBwcm9mZXNzaW9ubmVscyBwZXV2ZW50IGludGVydmVuaXI=",
      "UHJlbmRyZSBkZXMgcGhvdG9zIGRlIGwnYWNjaWRlbnQgcG91ciBsZXMgYXNzdXJhbmNlcyBwdWlzIGNvbnRpbnVlciB2b3RyZSByb3V0ZSBub3JtYWxlbWVudA==",
      "QXR0ZW5kcmUgbCdhcnJpdsOpZSBkZSBsYSBwb2xpY2Ugc2FucyBib3VnZXIgbmkgcGFybGVyIGF1eCB2aWN0aW1lcyBwb3VyIHByw6lzZXJ2ZXIgbGVzIHByZXV2ZXM="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 26, 0),
    explication: "RmFjZSDDoCB1biBhY2NpZGVudCwgdm91cyBkZXZleiBwcm90w6lnZXIgbGVzIGxpZXV4LCBhbGVydGVyIGxlcyBzZWNvdXJzICgxNSwgMTgsIDExMikgZXQgc2Vjb3VyaXIgc2kgcG9zc2libGUuIExhIG5vbi1hc3Npc3RhbmNlIMOgIHBlcnNvbm5lIGVuIGRhbmdlciBlc3QgdW4gZMOpbGl0Lg=="},
  {
    id: 27,
    categorie: "Droits et devoirs",
    sousCategorie: "Respect environnement",
    question: "UXVlbGxlcyBvYmxpZ2F0aW9ucyBlbnZpcm9ubmVtZW50YWxlcyBkw6ljb3VsZW50IGRlIGxhIENoYXJ0ZSBkZSBsJ2Vudmlyb25uZW1lbnQgaW50w6lncsOpZSDDoCBsYSBDb25zdGl0dXRpb24gPw==",
    options: [
      "TGUgZGV2b2lyIGRlIHByZW5kcmUgcGFydCDDoCBsYSBwcsOpc2VydmF0aW9uIGRlIGwnZW52aXJvbm5lbWVudCBldCBkZSByw6lwYXJlciBsZXMgZG9tbWFnZXMgY2F1c8Opcw==",
      "TCdpbnRlcmRpY3Rpb24gdG90YWxlIGQndXRpbGlzZXIgdG91dCB2w6loaWN1bGUgw6AgbW90ZXVyIHRoZXJtaXF1ZSBkZXB1aXMgMjAyMA==",
      "TCdvYmxpZ2F0aW9uIGRlIHJlY3ljbGVyIDEwMCUgZGUgc2VzIGTDqWNoZXRzIG3DqW5hZ2VycyBzb3VzIHBlaW5lIGQnYW1lbmRlIGZvcmZhaXRhaXJl",
      "TGUgcGFpZW1lbnQgZCd1bmUgdGF4ZSBjYXJib25lIHBlcnNvbm5lbGxlIGNhbGN1bMOpZSBzdXIgbGUgbm9tYnJlIGRlIGtpbG9tw6h0cmVzIHBhcmNvdXJ1cw=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 27, 0),
    explication: "TGEgQ2hhcnRlIGRlIGwnZW52aXJvbm5lbWVudCBkZSAyMDA0LCBpbnTDqWdyw6llIMOgIGxhIENvbnN0aXR1dGlvbiwgaW1wb3NlIMOgIGNoYWN1biBkZSBwcmVuZHJlIHBhcnQgw6AgbGEgcHLDqXNlcnZhdGlvbiBkZSBsJ2Vudmlyb25uZW1lbnQgZXQgZGUgcsOpcGFyZXIgbGVzIGRvbW1hZ2VzIGNhdXPDqXMu"},
  {
    id: 28,
    categorie: "Droits et devoirs",
    sousCategorie: "Liberté de manifestation",
    question: "TGUgZHJvaXQgZGUgbWFuaWZlc3RlciBlc3QtaWwgZ2FyYW50aSBlbiBGcmFuY2UgZXQgcXVlbGxlcyBzb250IGxlcyBvYmxpZ2F0aW9ucyDDoCByZXNwZWN0ZXIgPw==",
    options: [
      "T3VpLCBjJ2VzdCB1bmUgbGliZXJ0w6kgZm9uZGFtZW50YWxlIG1haXMgbGVzIG1hbmlmZXN0YXRpb25zIHN1ciBsYSB2b2llIHB1YmxpcXVlIGRvaXZlbnQgw6p0cmUgZMOpY2xhcsOpZXMgZW4gcHLDqWZlY3R1cmU=",
      "Tm9uLCB0b3V0ZSBtYW5pZmVzdGF0aW9uIGVzdCBpbnRlcmRpdGUgY2FyIGVsbGUgdHJvdWJsZSBsJ29yZHJlIHB1YmxpYyBldCBsYSBjaXJjdWxhdGlvbg==",
      "T3VpLCBhdWN1bmUgZm9ybWFsaXTDqSBuJ2VzdCByZXF1aXNlIGNhciBsYSBsaWJlcnTDqSBkZSBtYW5pZmVzdGVyIGVzdCBhYnNvbHVlIGV0IHNhbnMgcmVzdHJpY3Rpb24=",
      "T3VpLCBtYWlzIHVuaXF1ZW1lbnQgcG91ciBsZXMgc3luZGljYXRzIGV0IHBhcnRpcyBwb2xpdGlxdWVzIG9mZmljaWVsbGVtZW50IHJlY29ubnVzIHBhciBsJ8OJdGF0"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 28, 0),
    explication: "TGUgZHJvaXQgZGUgbWFuaWZlc3RlciBlc3QgdW5lIGxpYmVydMOpIGZvbmRhbWVudGFsZS4gTGVzIG1hbmlmZXN0YXRpb25zIHN1ciBsYSB2b2llIHB1YmxpcXVlIGRvaXZlbnQgw6p0cmUgZMOpY2xhcsOpZXMgZW4gcHLDqWZlY3R1cmUgYXUgbW9pbnMgMyBqb3VycyBhdmFudC4="},

  // ==================== 4. HISTOIRE, GÉOGRAPHIE ET CULTURE (8 questions) ====================
  
  {
    id: 29,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "République et ses formes",
    question: "Q29tYmllbiBkZSBSw6lwdWJsaXF1ZXMgbGEgRnJhbmNlIGEtdC1lbGxlIGNvbm51ZXMgZGVwdWlzIDE3OTIgZXQgbGFxdWVsbGUgZXN0IGFjdHVlbGxlbWVudCBlbiB2aWd1ZXVyID8=",
    options: [
      "Q2lucSBSw6lwdWJsaXF1ZXMgOiBsYSBWZSBSw6lwdWJsaXF1ZSwgaW5zdGF1csOpZSBlbiAxOTU4LCBlc3QgYWN0dWVsbGVtZW50IGVuIHZpZ3VldXIgc291cyBmb3JtZSBwcsOpc2lkZW50aWVsbGU=",
      "VHJvaXMgUsOpcHVibGlxdWVzIDogbGEgSUlJZSBSw6lwdWJsaXF1ZSwgbGEgcGx1cyBsb25ndWUsIGVzdCB0b3Vqb3VycyBlbiBhcHBsaWNhdGlvbiBkZXB1aXMgMTg3MA==",
      "VW5lIHNldWxlIFLDqXB1YmxpcXVlIGNvbnRpbnVlIGRlcHVpcyAxNzg5IGF2ZWMgZGlmZsOpcmVudGVzIGNvbnN0aXR1dGlvbnMgc3VjY2Vzc2l2ZXM=",
      "U2VwdCBSw6lwdWJsaXF1ZXMsIGxhIFZJSWUgYXlhbnQgw6l0w6kgaW5zdGF1csOpZSBsb3JzIGRlIGxhIHLDqWZvcm1lIGNvbnN0aXR1dGlvbm5lbGxlIGRlIDIwMDg="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 29, 0),
    explication: "TGEgRnJhbmNlIGEgY29ubnUgY2lucSBSw6lwdWJsaXF1ZXMuIExhIFZlIFLDqXB1YmxpcXVlIGEgw6l0w6kgaW5zdGF1csOpZSBlbiAxOTU4IHBhciBsZSBnw6luw6lyYWwgZGUgR2F1bGxlLiBFbGxlIHNlIGNhcmFjdMOpcmlzZSBwYXIgdW4gcsOpZ2ltZSBzZW1pLXByw6lzaWRlbnRpZWwu"},
  {
    id: 30,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Seconde Guerre mondiale",
    question: "UXVlbHMgw6l2w6luZW1lbnRzIG1hamV1cnMgb250IG1hcnF1w6kgbGEgcGFydGljaXBhdGlvbiBkZSBsYSBGcmFuY2Ugw6AgbGEgU2Vjb25kZSBHdWVycmUgbW9uZGlhbGUgPw==",
    options: [
      "TGEgZMOpZmFpdGUgZGUgMTk0MCwgbCdPY2N1cGF0aW9uLCBsYSBSw6lzaXN0YW5jZSwgbGEgRnJhbmNlIGxpYnJlIGRlIERlIEdhdWxsZSBldCBsYSBMaWLDqXJhdGlvbiBlbiAxOTQ0",
      "TGEgdmljdG9pcmUgcmFwaWRlIHN1ciBsJ0FsbGVtYWduZSBlbiAxOTM5LCBsJ29jY3VwYXRpb24gZGUgQmVybGluIGV0IGxhIGNhcGl0dWxhdGlvbiBhbGxlbWFuZGUgZW4gMTk0MA==",
      "TGEgbmV1dHJhbGl0w6kgdG90YWxlIGRlIGxhIEZyYW5jZSBwZW5kYW50IGxlIGNvbmZsaXQgZXQgc29uIHLDtGxlIGRlIG3DqWRpYXRldXIgZW50cmUgbGVzIGJlbGxpZ8OpcmFudHM=",
      "TCdhbGxpYW5jZSBhdmVjIGwnQWxsZW1hZ25lIG5hemllIGRlIDE5Mzkgw6AgMTk0MyBwdWlzIGxlIHJldG91cm5lbWVudCBkJ2FsbGlhbmNlIGFwcsOocyBTdGFsaW5ncmFk"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 30, 0),
    explication: "TGEgRnJhbmNlIGEgw6l0w6kgdmFpbmN1ZSBlbiAxOTQwIGV0IG9jY3Vww6llLiBMYSBSw6lzaXN0YW5jZSBpbnTDqXJpZXVyZSBldCBsYSBGcmFuY2UgbGlicmUgZGUgRGUgR2F1bGxlIG9udCBjb250cmlidcOpIMOgIGxhIExpYsOpcmF0aW9uIGVuIDE5NDQu"},
  {
    id: 31,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Décolonisation",
    question: "Q29tbWVudCBsYSBGcmFuY2UgYS10LWVsbGUgcHJvY8OpZMOpIMOgIGxhIGTDqWNvbG9uaXNhdGlvbiBkZSBzb24gZW1waXJlIGNvbG9uaWFsIGFwcsOocyAxOTQ1ID8=",
    options: [
      "UGFyIGRlcyBpbmTDqXBlbmRhbmNlcyBuw6lnb2Npw6llcyBvdSBkZXMgZ3VlcnJlcyAoSW5kb2NoaW5lIDE5NTQsIEFsZ8OpcmllIDE5NjIpLCBhdmVjIG1haW50aWVuIGRlIGxpZW5zIGF2ZWMgbGVzIGFuY2llbm5lcyBjb2xvbmllcw==",
      "UGFyIHVuIHRyYW5zZmVydCBwYWNpZmlxdWUgZXQgaW1tw6lkaWF0IGRlIHNvdXZlcmFpbmV0w6kgw6AgdG91dGVzIGxlcyBjb2xvbmllcyBkw6hzIDE5NDU=",
      "UGFyIGxlIG1haW50aWVuIGRlIHRvdXMgbGVzIHRlcnJpdG9pcmVzIGNvbG9uaWF1eCBjb21tZSBkw6lwYXJ0ZW1lbnRzIGQnb3V0cmUtbWVyIGZyYW7Dp2Fpcw==",
      "UGFyIGxhIHZlbnRlIGRlcyBjb2xvbmllcyBhdXggw4l0YXRzLVVuaXMgZXQgw6AgbGEgR3JhbmRlLUJyZXRhZ25lIGNvbnRyZSBkZXMgY29tcGVuc2F0aW9ucyBmaW5hbmNpw6hyZXM="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 31, 0),
    explication: "TGEgZMOpY29sb25pc2F0aW9uIHMnZXN0IGZhaXRlIHBhciBkZXMgaW5kw6lwZW5kYW5jZXMgbsOpZ29jacOpZXMgb3UgZGVzIGd1ZXJyZXMgKEluZG9jaGluZSwgQWxnw6lyaWUpLiBMYSBGcmFuY2UgY29uc2VydmUgZGVzIGxpZW5zIMOpdHJvaXRzIGF2ZWMgc2VzIGFuY2llbm5lcyBjb2xvbmllcy4="},
  {
    id: 32,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Hexagone",
    question: "UG91cnF1b2kgbGEgRnJhbmNlIG3DqXRyb3BvbGl0YWluZSBlc3QtZWxsZSBzdXJub21tw6llIGwnSGV4YWdvbmUgZXQgcXVlbGxlIGVzdCBzYSBzdXBlcmZpY2llID8=",
    options: [
      "RW4gcmFpc29uIGRlIHNhIGZvcm1lIGfDqW9tw6l0cmlxdWUgw6Agc2l4IGPDtHTDqXMgOyBlbGxlIGNvdXZyZSBlbnZpcm9uIDU1MSAwMDAga23CsiBwb3VyIDY4IG1pbGxpb25zIGQnaGFiaXRhbnRz",
      "RW4gcmFpc29uIGR1IG5vbWJyZSBkZSBzZXMgcsOpZ2lvbnMgbcOpdHJvcG9saXRhaW5lcyBmaXjDqSDDoCBzaXggcGFyIGxhIENvbnN0aXR1dGlvbiBkZSAxOTU4",
      "RW4gcsOpZsOpcmVuY2UgYXV4IHNpeCBwYXlzIGZyb250YWxpZXJzIGF2ZWMgbGVzcXVlbHMgZWxsZSBwYXJ0YWdlIGRlcyBmcm9udGnDqHJlcyB0ZXJyZXN0cmVz",
      "RW4gaG9tbWFnZSBhdXggc2l4IHJvaXMgcXVpIG9udCB1bmlmacOpIGxlIHRlcnJpdG9pcmUgZnJhbsOnYWlzIGF1IGNvdXJzIGR1IE1veWVuIMOCZ2U="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 32, 0),
    explication: "TGEgRnJhbmNlIG3DqXRyb3BvbGl0YWluZSBlc3QgYXBwZWzDqWUgbCdIZXhhZ29uZSBlbiByYWlzb24gZGUgc2EgZm9ybWUgZ8Opb23DqXRyaXF1ZS4gRWxsZSBjb3V2cmUgZW52aXJvbiA1NTEgMDAwIGttwrIgZXQgY29tcHRlIGVudmlyb24gNjggbWlsbGlvbnMgZCdoYWJpdGFudHMu"},
  {
    id: 33,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Pays frontaliers",
    question: "QXZlYyBxdWVscyBwYXlzIGxhIEZyYW5jZSBtw6l0cm9wb2xpdGFpbmUgcGFydGFnZS10LWVsbGUgdW5lIGZyb250acOocmUgdGVycmVzdHJlID8=",
    options: [
      "QmVsZ2lxdWUsIEx1eGVtYm91cmcsIEFsbGVtYWduZSwgU3Vpc3NlLCBJdGFsaWUsIE1vbmFjbywgRXNwYWduZSBldCBBbmRvcnJlICg4IHBheXMp",
      "VW5pcXVlbWVudCBsJ0FsbGVtYWduZSwgbCdFc3BhZ25lIGV0IGwnSXRhbGllLCBsZXMgdHJvaXMgZ3JhbmRzIHZvaXNpbnMgZXVyb3DDqWVucw==",
      "QmVsZ2lxdWUsIFBheXMtQmFzLCBBbGxlbWFnbmUsIEF1dHJpY2hlIGV0IFN1aXNzZSBhdSBub3JkIGV0IMOgIGwnZXN0IGR1IHRlcnJpdG9pcmU=",
      "RXNwYWduZSwgUG9ydHVnYWwsIEl0YWxpZSBldCBHcsOoY2UgYXUgc3VkLCBwYXlzIG3DqWRpdGVycmFuw6llbnMgZGUgbCdVbmlvbiBldXJvcMOpZW5uZQ=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 33, 0),
    explication: "TGEgRnJhbmNlIG3DqXRyb3BvbGl0YWluZSBhIGRlcyBmcm9udGnDqHJlcyB0ZXJyZXN0cmVzIGF2ZWMgOCBwYXlzIDogQmVsZ2lxdWUsIEx1eGVtYm91cmcsIEFsbGVtYWduZSwgU3Vpc3NlLCBJdGFsaWUsIE1vbmFjbywgRXNwYWduZSBldCBBbmRvcnJlLg=="},
  {
    id: 34,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Francophonie",
    question: "UXUnZXN0LWNlIHF1ZSBsYSBGcmFuY29waG9uaWUgZXQgcXVlbCBlc3Qgc29uIHLDtGxlIGRhbnMgbGUgbW9uZGUgPw==",
    options: [
      "TCdlbnNlbWJsZSBkZXMgcGF5cyBldCByw6lnaW9ucyBvw7kgbGUgZnJhbsOnYWlzIGVzdCBwYXJsw6ksIHJlcHLDqXNlbnRhbnQgMzIxIG1pbGxpb25zIGRlIGxvY3V0ZXVycyBkYW5zIGxlIG1vbmRl",
      "VW4gbW91dmVtZW50IHBvbGl0aXF1ZSB2aXNhbnQgw6AgaW1wb3NlciBsYSBsYW5ndWUgZnJhbsOnYWlzZSBjb21tZSBsYW5ndWUgb2ZmaWNpZWxsZSBkZSBsJ09OVQ==",
      "VW5lIG9yZ2FuaXNhdGlvbiBtaWxpdGFpcmUgcmVncm91cGFudCBsZXMgYW5jaWVubmVzIGNvbG9uaWVzIGZyYW7Dp2Fpc2VzIHBvdXIgbGV1ciBkw6lmZW5zZSBjb21tdW5l",
      "VW4gcHJvZ3JhbW1lIMOpY29ub21pcXVlIGQnYWlkZSBhdSBkw6l2ZWxvcHBlbWVudCBmaW5hbmPDqSBleGNsdXNpdmVtZW50IHBhciBsYSBGcmFuY2U="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 34, 0),
    explication: "TGEgRnJhbmNvcGhvbmllIHJlZ3JvdXBlIGxlcyBwYXlzIGV0IHLDqWdpb25zIG/DuSBsZSBmcmFuw6dhaXMgZXN0IHBhcmzDqS4gTCdPcmdhbmlzYXRpb24gaW50ZXJuYXRpb25hbGUgZGUgbGEgRnJhbmNvcGhvbmllIChPSUYpIHByb21ldXQgbGEgbGFuZ3VlIGZyYW7Dp2Fpc2UgZXQgbGVzIHZhbGV1cnMgcXUnZWxsZSB2w6loaWN1bGUu"},
  {
    id: 35,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Gastronomie UNESCO",
    question: "UXVlbCBhc3BlY3QgZGUgbGEgY3VsdHVyZSBmcmFuw6dhaXNlIGEgw6l0w6kgaW5zY3JpdCBhdSBwYXRyaW1vaW5lIGN1bHR1cmVsIGltbWF0w6lyaWVsIGRlIGwnVU5FU0NPIGVuIDIwMTAgPw==",
    options: [
      "TGUgcmVwYXMgZ2FzdHJvbm9taXF1ZSBkZXMgRnJhbsOnYWlzLCBhdmVjIHNlcyByaXR1ZWxzIGV0IHNhIGNvbnZpdmlhbGl0w6kgYXV0b3VyIGRlIGxhIHRhYmxl",
      "TGEgVG91ciBFaWZmZWwgY29tbWUgc3ltYm9sZSBkZSBsJ2luZ8OpbmllcmllIGZyYW7Dp2Fpc2UgZXQgZHUgZ8OpbmllIGFyY2hpdGVjdHVyYWw=",
      "TGEgbGFuZ3VlIGZyYW7Dp2Fpc2UgY29tbWUgcGF0cmltb2luZSBsaW5ndWlzdGlxdWUgdW5pdmVyc2VsIGRlIGwnaHVtYW5pdMOp",
      "TGUgc3lzdMOobWUgw6lkdWNhdGlmIGZyYW7Dp2FpcyBjb21tZSBtb2TDqGxlIGQnZW5zZWlnbmVtZW50IHLDqXB1YmxpY2FpbiBsYcOvcXVl"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 35, 0),
    explication: "TGUgcmVwYXMgZ2FzdHJvbm9taXF1ZSBkZXMgRnJhbsOnYWlzIGEgw6l0w6kgaW5zY3JpdCBhdSBwYXRyaW1vaW5lIGN1bHR1cmVsIGltbWF0w6lyaWVsIGRlIGwnVU5FU0NPIGVuIDIwMTAuIElsIGPDqWzDqGJyZSBsJ2FydCBkZSBiaWVuIG1hbmdlciBldCBsYSBjb252aXZpYWxpdMOpLg=="},
  {
    id: 36,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Grandes figures lettres",
    question: "UXVlbCBwaGlsb3NvcGhlIGRlcyBMdW1pw6hyZXMsIGF1dGV1ciBkdSBDb250cmF0IHNvY2lhbCwgYSBpbmZsdWVuY8OpIGxlcyBwcmluY2lwZXMgZGUgbGEgUsOpdm9sdXRpb24gZnJhbsOnYWlzZSA/",
    options: [
      "SmVhbi1KYWNxdWVzIFJvdXNzZWF1LCBkb250IGxlcyBpZMOpZXMgc3VyIGxhIHNvdXZlcmFpbmV0w6kgcG9wdWxhaXJlIG9udCBpbnNwaXLDqSBsYSBEw6ljbGFyYXRpb24gZGUgMTc4OQ==",
      "UmVuw6kgRGVzY2FydGVzLCBmb25kYXRldXIgZHUgcmF0aW9uYWxpc21lIG1vZGVybmUgZXQgYXV0ZXVyIGR1IERpc2NvdXJzIGRlIGxhIG3DqXRob2Rl",
      "QmxhaXNlIFBhc2NhbCwgbWF0aMOpbWF0aWNpZW4gZXQgcGhpbG9zb3BoZSBhdXRldXIgZGVzIFBlbnPDqWVzIHN1ciBsYSBjb25kaXRpb24gaHVtYWluZQ==",
      "TWljaGVsIGRlIE1vbnRhaWduZSwgaHVtYW5pc3RlIGRlIGxhIFJlbmFpc3NhbmNlIGF1dGV1ciBkZXMgRXNzYWlzIHN1ciBsYSBuYXR1cmUgaHVtYWluZQ=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 36, 0),
    explication: "SmVhbi1KYWNxdWVzIFJvdXNzZWF1ICgxNzEyLTE3NzgpLCBwaGlsb3NvcGhlIGRlcyBMdW1pw6hyZXMsIGEgaW5mbHVlbmPDqSBsYSBSw6l2b2x1dGlvbiBmcmFuw6dhaXNlIGF2ZWMgc2VzIGlkw6llcyBzdXIgbGEgc291dmVyYWluZXTDqSBwb3B1bGFpcmUgZXQgbGUgY29udHJhdCBzb2NpYWwu"},

  // ==================== 5. VIVRE DANS LA SOCIÉTÉ FRANÇAISE (4 questions) ====================
  
  {
    id: 37,
    categorie: "Vivre dans la société française",
    sousCategorie: "Pôle emploi",
    question: "UXVlbCBvcmdhbmlzbWUgYWNjb21wYWduZSBsZXMgZGVtYW5kZXVycyBkJ2VtcGxvaSBkYW5zIGxldXIgcmVjaGVyY2hlIGRlIHRyYXZhaWwgZXQgZ8OocmUgbCdhc3N1cmFuY2UgY2jDtG1hZ2UgPw==",
    options: [
      "RnJhbmNlIFRyYXZhaWwgKGFuY2llbm5lbWVudCBQw7RsZSBlbXBsb2kpLCBzZXJ2aWNlIHB1YmxpYyBkZSBsJ2VtcGxvaSBpc3N1IGRlIGxhIGZ1c2lvbiBBTlBFLUFzc2VkaWMgZW4gMjAwOA==",
      "TGEgQ2Fpc3NlIGQnQWxsb2NhdGlvbnMgRmFtaWxpYWxlcyAoQ0FGKSwgcXVpIGfDqHJlIHRvdXRlcyBsZXMgcHJlc3RhdGlvbnMgc29jaWFsZXMgZnJhbsOnYWlzZXM=",
      "TCdJbnNwZWN0aW9uIGR1IHRyYXZhaWwsIHNlcnZpY2UgZGUgY29udHLDtGxlIGR1IHJlc3BlY3QgZHUgZHJvaXQgZHUgdHJhdmFpbCBkYW5zIGxlcyBlbnRyZXByaXNlcw==",
      "TGEgQ2Fpc3NlIFByaW1haXJlIGQnQXNzdXJhbmNlIE1hbGFkaWUgKENQQU0pLCBicmFuY2hlIG1hbGFkaWUgZGUgbGEgU8OpY3VyaXTDqSBzb2NpYWxl"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 37, 0),
    explication: "RnJhbmNlIFRyYXZhaWwgKGV4LVDDtGxlIGVtcGxvaSkgYWNjb21wYWduZSBsZXMgZGVtYW5kZXVycyBkJ2VtcGxvaSwgZ8OocmUgbCdpbnNjcmlwdGlvbiBldCBsJ2luZGVtbmlzYXRpb24gY2jDtG1hZ2UsIGV0IGFpZGUgw6AgbGEgcmVjaGVyY2hlIGQnZW1wbG9pLg=="},
  {
    id: 38,
    categorie: "Vivre dans la société française",
    sousCategorie: "Aide juridictionnelle",
    question: "UXUnZXN0LWNlIHF1ZSBsJ2FpZGUganVyaWRpY3Rpb25uZWxsZSBldCBxdWkgcGV1dCBlbiBiw6luw6lmaWNpZXIgPw==",
    options: [
      "VW5lIHByaXNlIGVuIGNoYXJnZSB0b3RhbGUgb3UgcGFydGllbGxlIGRlcyBmcmFpcyBkZSBqdXN0aWNlIHBvdXIgbGVzIHBlcnNvbm5lcyBhdXggcmV2ZW51cyBtb2Rlc3Rlcw==",
      "VW4gc2VydmljZSBkZSBjb25zZWlsIGp1cmlkaXF1ZSBncmF0dWl0IHLDqXNlcnbDqSBleGNsdXNpdmVtZW50IGF1eCBjaXRveWVucyBmcmFuw6dhaXM=",
      "VW5lIGFzc3VyYW5jZSBvYmxpZ2F0b2lyZSBjb3V2cmFudCB0b3VzIGxlcyBmcmFpcyBkZSBqdXN0aWNlIHBvdXIgbCdlbnNlbWJsZSBkZSBsYSBwb3B1bGF0aW9u",
      "VW4gZm9uZHMgZCdpbmRlbW5pc2F0aW9uIGRlcyB2aWN0aW1lcyBkJ2VycmV1cnMganVkaWNpYWlyZXMgZ8OpcsOpIHBhciBsZSBtaW5pc3TDqHJlIGRlIGxhIEp1c3RpY2U="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 38, 0),
    explication: "TCdhaWRlIGp1cmlkaWN0aW9ubmVsbGUgcGVybWV0IGF1eCBwZXJzb25uZXMgYXV4IHJldmVudXMgbW9kZXN0ZXMgZGUgYsOpbsOpZmljaWVyIGQndW5lIHByaXNlIGVuIGNoYXJnZSB0b3RhbGUgb3UgcGFydGllbGxlIGRlcyBmcmFpcyBkZSBqdXN0aWNlIChhdm9jYXQsIGh1aXNzaWVyLi4uKS4="},
  {
    id: 39,
    categorie: "Vivre dans la société française",
    sousCategorie: "Transport public",
    question: "UXVlbCB0aXRyZSBkZSB0cmFuc3BvcnQgcGVybWV0IGRlIGNpcmN1bGVyIGxpYnJlbWVudCBkYW5zIGxlcyB0cmFuc3BvcnRzIGVuIGNvbW11biBkJ8OObGUtZGUtRnJhbmNlID8=",
    options: [
      "TGUgcGFzcyBOYXZpZ28sIGNhcnRlIG5vbWluYXRpdmUgcGVybWV0dGFudCBsJ2FjY8OocyDDoCB0b3VzIGxlcyB0cmFuc3BvcnRzIGZyYW5jaWxpZW5zIChtw6l0cm8sIGJ1cywgUkVSLCB0cmFtd2F5KQ==",
      "TGUgdGlja2V0IGRlIG3DqXRybyB1bml0YWlyZSB2YWxhYmxlIHVuaXF1ZW1lbnQgcG91ciB1biB0cmFqZXQgZGFucyBsZSBtw6l0cm8gcGFyaXNpZW4gaW50cmEtbXVyb3M=",
      "TGEgY2FydGUgVml0YWxlLCBjYXJ0ZSBkJ2Fzc3VyYW5jZSBtYWxhZGllIHV0aWxpc8OpZSDDqWdhbGVtZW50IHBvdXIgbGVzIHRyYW5zcG9ydHMgcHVibGljcw==",
      "TGUgcGVybWlzIGRlIGNvbmR1aXJlLCBzZXVsIGRvY3VtZW50IHBlcm1ldHRhbnQgZCdhY2PDqWRlciBhdXggdHJhbnNwb3J0cyBlbiBjb21tdW4gZW4gRnJhbmNl"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 39, 0),
    explication: "TGUgcGFzcyBOYXZpZ28gZXN0IHVuZSBjYXJ0ZSBub21pbmF0aXZlIHBlcm1ldHRhbnQgZGUgY2lyY3VsZXIgZGFucyB0b3VzIGxlcyB0cmFuc3BvcnRzIGVuIGNvbW11biBkJ8OObGUtZGUtRnJhbmNlIDogbcOpdHJvLCBidXMsIFJFUiwgdHJhbXdheS4="},
  {
    id: 40,
    categorie: "Vivre dans la société française",
    sousCategorie: "Compte bancaire",
    question: "TGUgZHJvaXQgYXUgY29tcHRlIGJhbmNhaXJlIGVzdC1pbCBnYXJhbnRpIGVuIEZyYW5jZSBldCBjb21tZW50IHBldXQtb24gbGUgZmFpcmUgdmFsb2lyID8=",
    options: [
      "T3VpLCB0b3V0ZSBwZXJzb25uZSBwZXV0IGRlbWFuZGVyIMOgIGxhIEJhbnF1ZSBkZSBGcmFuY2UgZGUgZMOpc2lnbmVyIHVuZSBiYW5xdWUgb2JsaWfDqWUgZGUgbHVpIG91dnJpciB1biBjb21wdGU=",
      "Tm9uLCBsZXMgYmFucXVlcyBzb250IGxpYnJlcyBkZSByZWZ1c2VyIGQnb3V2cmlyIHVuIGNvbXB0ZSBzYW5zIGF2b2lyIMOgIGp1c3RpZmllciBsZXVyIGTDqWNpc2lvbg==",
      "T3VpLCBtYWlzIHVuaXF1ZW1lbnQgcG91ciBsZXMgY2l0b3llbnMgZnJhbsOnYWlzIGRpc3Bvc2FudCBkJ3VuIGVtcGxvaSBzdGFibGUgZXQgZMOpY2xhcsOp",
      "Tm9uLCBsJ291dmVydHVyZSBkJ3VuIGNvbXB0ZSBiYW5jYWlyZSBkw6lwZW5kIGV4Y2x1c2l2ZW1lbnQgZHUgYm9uIHZvdWxvaXIgZGVzIMOpdGFibGlzc2VtZW50cyBiYW5jYWlyZXM="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 40, 0),
    explication: "TGUgZHJvaXQgYXUgY29tcHRlIGVzdCBnYXJhbnRpLiBFbiBjYXMgZGUgcmVmdXMgZCdvdXZlcnR1cmUgcGFyIHVuZSBiYW5xdWUsIHZvdXMgcG91dmV6IHNhaXNpciBsYSBCYW5xdWUgZGUgRnJhbmNlIHF1aSBkw6lzaWduZXJhIHVuIMOpdGFibGlzc2VtZW50IG9ibGlnw6kgZGUgdm91cyBvdXZyaXIgdW4gY29tcHRlLg=="}
];

// Fonction pour vérifier une réponse
export function verifyAnswerExam3(questionId: number, userAnswerIndex: number, correctHash: string): boolean {
  return hashAnswer(EXAM_NUMBER, questionId, userAnswerIndex) === correctHash;
}

// Fonction pour trouver l'index correct à partir du hash
export function findCorrectIndexExam3(questionId: number, correctHash: string): number {
  for (let i = 0; i < 4; i++) {
    if (hashAnswer(EXAM_NUMBER, questionId, i) === correctHash) {
      return i;
    }
  }
  return 0;
}

export const EXAMEN_3: ExamenBlanc = {
  numero: 3,
  titre: "Examen blanc #3",
  description: "40 questions en conditions réelles d'examen",
  questions: questions,
  dureeMinutes: 45,
  totalQuestions: 40
};
