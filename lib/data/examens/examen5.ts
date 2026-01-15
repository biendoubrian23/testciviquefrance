// ==================== EXAMEN BLANC #5 ====================
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

const EXAM_NUMBER = 5;

const questions: Question[] = [
  // ==================== 1. PRINCIPES ET VALEURS (11 questions) ====================
  
  {
    id: 1,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Indivisibilité République",
    question: "UXVlIHNpZ25pZmllIGxlIHByaW5jaXBlIGQnaW5kaXZpc2liaWxpdMOpIGRlIGxhIFLDqXB1YmxpcXVlIGluc2NyaXQgw6AgbCdhcnRpY2xlIDFlciBkZSBsYSBDb25zdGl0dXRpb24gPw==",
    options: [
      "TGEgc291dmVyYWluZXTDqSBhcHBhcnRpZW50IGF1IHBldXBsZSBkYW5zIHNvbiBlbnNlbWJsZSA7IGF1Y3VuZSByw6lnaW9uIG5lIHBldXQgcmV2ZW5kaXF1ZXIgdW5lIHNvdXZlcmFpbmV0w6kgZGlzdGluY3Rl",
      "TGUgdGVycml0b2lyZSBmcmFuw6dhaXMgbmUgcGV1dCBqYW1haXMgw6p0cmUgbW9kaWZpw6ksIG3Dqm1lIGVuIGNhcyBkZSByw6lmw6lyZW5kdW0gbG9jYWwgYXBwcm91dsOp",
      "TGVzIGNpdG95ZW5zIG5lIHBldXZlbnQgcGFzIMOqdHJlIGRpdmlzw6lzIGVuIGNhdMOpZ29yaWVzIHNvY2lhbGVzIG91IHByb2Zlc3Npb25uZWxsZXMgZGlzdGluY3Rlcw==",
      "TGUgUHLDqXNpZGVudCBkZSBsYSBSw6lwdWJsaXF1ZSBuZSBwZXV0IHBhcyDDqnRyZSBkZXN0aXR1w6kgcGVuZGFudCBsYSBkdXLDqWUgZGUgc29uIG1hbmRhdA=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 1, 0),
    explication: "TCdpbmRpdmlzaWJpbGl0w6kgc2lnbmlmaWUgcXVlIGxhIHNvdXZlcmFpbmV0w6kgZXN0IHVuZSBldCBhcHBhcnRpZW50IGF1IHBldXBsZSBkYW5zIHNvbiBlbnNlbWJsZS4gQXVjdW5lIHBhcnRpZSBkdSB0ZXJyaXRvaXJlIG5lIHBldXQgcmV2ZW5kaXF1ZXIgdW5lIHNvdXZlcmFpbmV0w6kgcHJvcHJlLg=="},
  {
    id: 2,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Sceau République",
    question: "UXVlIHJlcHLDqXNlbnRlIGxlIHNjZWF1IGRlIGxhIFLDqXB1YmxpcXVlIGZyYW7Dp2Fpc2UgZXQgcXVhbmQgZXN0LWlsIHV0aWxpc8OpID8=",
    options: [
      "TGEgTGliZXJ0w6kgYXNzaXNlIGF2ZWMgdW4gZmFpc2NlYXUgZGUgbGljdGV1ciA7IGlsIGF1dGhlbnRpZmllIGxlcyBhY3RlcyBsZXMgcGx1cyBzb2xlbm5lbHMgZGUgbGEgUsOpcHVibGlxdWU=",
      "TWFyaWFubmUgZGVib3V0IHBvcnRhbnQgbGUgZHJhcGVhdSB0cmljb2xvcmUgOyBpbCBlc3QgYXBwb3PDqSBzdXIgdG91cyBsZXMgZG9jdW1lbnRzIGFkbWluaXN0cmF0aWZz",
      "VW4gY29xIGdhdWxvaXMgc3VyIHVuIGJvdWNsaWVyIDsgaWwgZXN0IHV0aWxpc8OpIHVuaXF1ZW1lbnQgcG91ciBsZXMgYWN0ZXMgZGlwbG9tYXRpcXVlcw==",
      "TGVzIHRyb2lzIGNvdWxldXJzIG5hdGlvbmFsZXMgZW4gcm9zYWNlIDsgaWwgY2VydGlmaWUgbGVzIGRvY3VtZW50cyBqdWRpY2lhaXJlcyBleGNsdXNpdmVtZW50"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 2, 0),
    explication: "TGUgc2NlYXUgZGUgbGEgUsOpcHVibGlxdWUgcmVwcsOpc2VudGUgbGEgTGliZXJ0w6kgYXNzaXNlIHRlbmFudCB1biBmYWlzY2VhdSBkZSBsaWN0ZXVyLiBJbCBlc3QgdXRpbGlzw6kgcG91ciBzY2VsbGVyIGxlcyBhY3RlcyBsZXMgcGx1cyBzb2xlbm5lbHMgKENvbnN0aXR1dGlvbiwgdHJhaXTDqXMuLi4pLg=="},
  {
    id: 3,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Fête de la Fédération",
    question: "UXVlbCDDqXbDqW5lbWVudCBsZSAxNCBqdWlsbGV0IGNvbW3DqW1vcmUtdC1pbCBvZmZpY2llbGxlbWVudCBkZXB1aXMgbGEgbG9pIGRlIDE4ODAgPw==",
    options: [
      "TGEgRsOqdGUgZGUgbGEgRsOpZMOpcmF0aW9uIGR1IDE0IGp1aWxsZXQgMTc5MCwgc3ltYm9sZSBkZSBsJ3VuaXTDqSBuYXRpb25hbGUgYXV0b3VyIGRlcyB2YWxldXJzIHLDqXZvbHV0aW9ubmFpcmVz",
      "TGEgcHJpc2UgZGUgbGEgQmFzdGlsbGUgZHUgMTQganVpbGxldCAxNzg5LCBzeW1ib2xlIGRlIGxhIHLDqXZvbHRlIGNvbnRyZSBsJ2Fic29sdXRpc21lIHJveWFs",
      "TGVzIGRldXggw6l2w6luZW1lbnRzIMOgIGxhIGZvaXMsIGFzc29jaWFudCBsYSByw6l2b2x0ZSBwb3B1bGFpcmUgZXQgbGEgcsOpY29uY2lsaWF0aW9uIG5hdGlvbmFsZQ==",
      "TCdhYm9saXRpb24gZGUgbGEgcm95YXV0w6kgbGUgMTQganVpbGxldCAxNzkyIGV0IGxhIHByb2NsYW1hdGlvbiBkZSBsYSBQcmVtacOocmUgUsOpcHVibGlxdWU="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 3, 0),
    explication: "T2ZmaWNpZWxsZW1lbnQsIGMnZXN0IGxhIEbDqnRlIGRlIGxhIEbDqWTDqXJhdGlvbiBkdSAxNCBqdWlsbGV0IDE3OTAgcXVpIGVzdCBjb21tw6ltb3LDqWUsIHN5bWJvbGUgZGUgcsOpY29uY2lsaWF0aW9uIG5hdGlvbmFsZSwgbcOqbWUgc2kgbGEgcHJpc2UgZGUgbGEgQmFzdGlsbGUgcmVzdGUgZGFucyBsZXMgbcOpbW9pcmVzLg=="},
  {
    id: 4,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Loi de 1905",
    question: "UXVlbCBhcnRpY2xlIGRlIGxhIGxvaSBkZSAxOTA1IGdhcmFudGl0IGxhIGxpYmVydMOpIGRlIGNvbnNjaWVuY2UgZXQgbGUgbGlicmUgZXhlcmNpY2UgZGVzIGN1bHRlcyA/",
    options: [
      "TCdhcnRpY2xlIDFlciwgcXVpIGFmZmlybWUgcXVlIGxhIFLDqXB1YmxpcXVlIGFzc3VyZSBsYSBsaWJlcnTDqSBkZSBjb25zY2llbmNlIGV0IGdhcmFudGl0IGxlIGxpYnJlIGV4ZXJjaWNlIGRlcyBjdWx0ZXM=",
      "TCdhcnRpY2xlIDksIHF1aSBpbnRlcmRpdCB0b3V0ZSBkaXNjcmltaW5hdGlvbiBmb25kw6llIHN1ciBsZXMgY3JveWFuY2VzIHJlbGlnaWV1c2VzIGRlcyBjaXRveWVucw==",
      "TCdhcnRpY2xlIDUsIHF1aSBwcsOpdm9pdCBsYSBuZXV0cmFsaXTDqSBhYnNvbHVlIGRlIGwnw4l0YXQgZW52ZXJzIHRvdXRlcyBsZXMgcmVsaWdpb25zIHJlY29ubnVlcw==",
      "TCdhcnRpY2xlIDEyLCBxdWkgYXV0b3Jpc2UgbCdlbnNlaWduZW1lbnQgcmVsaWdpZXV4IGRhbnMgbGVzIMOpdGFibGlzc2VtZW50cyBzY29sYWlyZXMgcHVibGljcw=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 4, 0),
    explication: "TCdhcnRpY2xlIDFlciBkZSBsYSBsb2kgZGUgMTkwNSBhZmZpcm1lIDogJ0xhIFLDqXB1YmxpcXVlIGFzc3VyZSBsYSBsaWJlcnTDqSBkZSBjb25zY2llbmNlLiBFbGxlIGdhcmFudGl0IGxlIGxpYnJlIGV4ZXJjaWNlIGRlcyBjdWx0ZXMuJw=="},
  {
    id: 5,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Aumôneries",
    question: "RGVzIGF1bcO0bmVyaWVzIHBldXZlbnQtZWxsZXMgZXhpc3RlciBkYW5zIGNlcnRhaW5zIMOpdGFibGlzc2VtZW50cyBwdWJsaWNzIG1hbGdyw6kgbGEgbGHDr2NpdMOpID8=",
    options: [
      "T3VpLCBkYW5zIGxlcyBwcmlzb25zLCBow7RwaXRhdXgsIGNhc2VybmVzIGV0IGludGVybmF0cywgcG91ciBnYXJhbnRpciBsZSBsaWJyZSBleGVyY2ljZSBkdSBjdWx0ZSBkZXMgcGVyc29ubmVzIHJldGVudWVz",
      "Tm9uLCBsYSBwcsOpc2VuY2UgZGUgcmVsaWdpZXV4IGVzdCB0b3RhbGVtZW50IGludGVyZGl0ZSBkYW5zIHRvdXMgbGVzIMOpdGFibGlzc2VtZW50cyBwdWJsaWNzIGZyYW7Dp2Fpcw==",
      "T3VpLCBtYWlzIHVuaXF1ZW1lbnQgcG91ciBsZXMgcmVsaWdpb25zIGhpc3RvcmlxdWVtZW50IHByw6lzZW50ZXMgZW4gRnJhbmNlIGRlcHVpcyBsZSBDb25jb3JkYXQ=",
      "Tm9uLCBsZXMgcGVyc29ubmVzIHNvdWhhaXRhbnQgcHJhdGlxdWVyIGRvaXZlbnQgb2JsaWdhdG9pcmVtZW50IHNvcnRpciBkZXMgw6l0YWJsaXNzZW1lbnRzIHB1YmxpY3M="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 5, 0),
    explication: "RGVzIGF1bcO0bmVyaWVzIGV4aXN0ZW50IGRhbnMgbGVzIHByaXNvbnMsIGjDtHBpdGF1eCwgY2FzZXJuZXMgZXQgaW50ZXJuYXRzIHBvdXIgcGVybWV0dHJlIGF1eCBwZXJzb25uZXMgcXVpIG5lIHBldXZlbnQgcGFzIHNvcnRpciBsaWJyZW1lbnQgZGUgcHJhdGlxdWVyIGxldXIgY3VsdGUu"},
  {
    id: 6,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Égalité devant l'impôt",
    question: "UXVlIHNpZ25pZmllIGxlIHByaW5jaXBlIGQnw6lnYWxpdMOpIGRldmFudCBsZXMgY2hhcmdlcyBwdWJsaXF1ZXMgYWZmaXJtw6kgcGFyIGxhIENvbnN0aXR1dGlvbiA/",
    options: [
      "TGVzIGltcMO0dHMgc29udCByw6lwYXJ0aXMgc2Vsb24gbGVzIGNhcGFjaXTDqXMgY29udHJpYnV0aXZlcyBkZSBjaGFjdW4sIHByb3BvcnRpb25uZWxsZW1lbnQgYXV4IHJldmVudXMgZXQgYXUgcGF0cmltb2luZQ==",
      "VG91cyBsZXMgY2l0b3llbnMgZG9pdmVudCBwYXllciBleGFjdGVtZW50IGxlIG3Dqm1lIG1vbnRhbnQgZCdpbXDDtHRzLCBxdWVsIHF1ZSBzb2l0IGxldXIgcmV2ZW51",
      "U2V1bHMgbGVzIGNpdG95ZW5zIGxlcyBwbHVzIHJpY2hlcyBjb250cmlidWVudCBhdXggY2hhcmdlcyBwdWJsaXF1ZXMgcG91ciBmaW5hbmNlciBsZXMgc2VydmljZXM=",
      "TGVzIGNoYXJnZXMgcHVibGlxdWVzIG5lIGNvbmNlcm5lbnQgcXVlIGxlcyBlbnRyZXByaXNlcywgbGVzIHBhcnRpY3VsaWVycyDDqXRhbnQgZXhvbsOpcsOpcyBkJ2ltcMO0dHM="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 6, 0),
    explication: "TCfDqWdhbGl0w6kgZGV2YW50IGxlcyBjaGFyZ2VzIHB1YmxpcXVlcyBzaWduaWZpZSBxdWUgbGVzIGltcMO0dHMgc29udCByw6lwYXJ0aXMgc2Vsb24gbGVzIGNhcGFjaXTDqXMgY29udHJpYnV0aXZlcy4gQydlc3QgbGUgcHJpbmNpcGUgZGUgcHJvZ3Jlc3Npdml0w6kgZGUgbCdpbXDDtHQu"},
  {
    id: 7,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation embauche",
    question: "VW4gZW1wbG95ZXVyIHBldXQtaWwgdm91cyBkZW1hbmRlciB2b3RyZSDDomdlIGxvcnMgZCd1biBlbnRyZXRpZW4gZCdlbWJhdWNoZSA/",
    options: [
      "SWwgcGV1dCBsZSBkZW1hbmRlciwgbWFpcyBuZSBwZXV0IHBhcyByZWZ1c2VyIGRlIHZvdXMgZW1iYXVjaGVyIGVuIHJhaXNvbiBkZSB2b3RyZSDDomdlLCBjZSBzZXJhaXQgdW5lIGRpc2NyaW1pbmF0aW9u",
      "Tm9uLCBsYSBkYXRlIGRlIG5haXNzYW5jZSBlc3QgdW5lIGRvbm7DqWUgcGVyc29ubmVsbGUgcXVpIG5lIHBldXQgamFtYWlzIMOqdHJlIGNvbW11bmlxdcOpZSDDoCB1biBlbXBsb3lldXI=",
      "T3VpLCBsJ2VtcGxveWV1ciBwZXV0IGV4aWdlciBkZSBjb25uYcOudHJlIHZvdHJlIMOiZ2UgZXQgcmVmdXNlciBsZXMgY2FuZGlkYXRzIHRyb3AgamV1bmVzIG91IHRyb3Agw6Jnw6lz",
      "Tm9uLCBzYXVmIHBvdXIgbGVzIGVtcGxvaXMgZGUgbGEgZm9uY3Rpb24gcHVibGlxdWUgc291bWlzIMOgIGRlcyBsaW1pdGVzIGQnw6JnZSByw6lnbGVtZW50YWlyZXM="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 7, 0),
    explication: "TCdlbXBsb3lldXIgcGV1dCBkZW1hbmRlciBsJ8OiZ2UsIG1haXMgcmVmdXNlciB1biBjYW5kaWRhdCBlbiByYWlzb24gZGUgc29uIMOiZ2UgY29uc3RpdHVlIHVuZSBkaXNjcmltaW5hdGlvbiBpbnRlcmRpdGUsIHNhdWYgZXhjZXB0aW9ucyBsw6lnYWxlcyAobWFqb3JpdMOpIHJlcXVpc2UsIGV0Yy4pLg=="},
  {
    id: 8,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Parité politique",
    question: "TGEgbG9pIGltcG9zZS10LWVsbGUgbGEgcGFyaXTDqSBob21tZXMtZmVtbWVzIGRhbnMgbGVzIGNhbmRpZGF0dXJlcyBhdXggw6lsZWN0aW9ucyA/",
    options: [
      "T3VpLCBsYSBsb2kgb2JsaWdlIMOgIHByw6lzZW50ZXIgYXV0YW50IGRlIGZlbW1lcyBxdWUgZCdob21tZXMgcG91ciBjZXJ0YWlucyBzY3J1dGlucyBkZSBsaXN0ZSwgc291cyBwZWluZSBkZSBww6luYWxpdMOpcyBmaW5hbmNpw6hyZXM=",
      "Tm9uLCBsYSBwYXJpdMOpIGVzdCBlbmNvdXJhZ8OpZSBtYWlzIHJlc3RlIHVuIG9iamVjdGlmIHNhbnMgY29udHJhaW50ZSBqdXJpZGlxdWUgbmkgc2FuY3Rpb24=",
      "T3VpLCB0b3VzIGxlcyDDqWx1cyBkb2l2ZW50IG9ibGlnYXRvaXJlbWVudCDDqnRyZSBkZXMgZmVtbWVzIHBvdXIgcmF0dHJhcGVyIGxlIHJldGFyZCBoaXN0b3JpcXVl",
      "Tm9uLCBsYSBDb25zdGl0dXRpb24gaW50ZXJkaXQgdG91dGUgbWVzdXJlIGZhdm9yaXNhbnQgdW4gc2V4ZSBhdSBub20gZGUgbCfDqWdhbGl0w6kgc3RyaWN0ZQ=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 8, 0),
    explication: "TGEgbG9pIGltcG9zZSBsYSBwYXJpdMOpIGRhbnMgbGVzIGxpc3RlcyBkZSBjYW5kaWRhdHMgcG91ciBsZXMgc2NydXRpbnMgZGUgbGlzdGUgKG11bmljaXBhbGVzLCByw6lnaW9uYWxlcywgZXVyb3DDqWVubmVzLi4uKS4gRGVzIHDDqW5hbGl0w6lzIGZpbmFuY2nDqHJlcyBzYW5jdGlvbm5lbnQgbGUgbm9uLXJlc3BlY3Qu"},
  {
    id: 9,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Défenseur droits saisine",
    question: "UXVpIHBldXQgc2Fpc2lyIGxlIETDqWZlbnNldXIgZGVzIGRyb2l0cyBldCBjZXR0ZSBkw6ltYXJjaGUgZXN0LWVsbGUgZ3JhdHVpdGUgPw==",
    options: [
      "VG91dGUgcGVyc29ubmUgcydlc3RpbWFudCBsw6lzw6llIHBhciB1biBzZXJ2aWNlIHB1YmxpYyBvdSB1bmUgZGlzY3JpbWluYXRpb24gcGV1dCBsZSBzYWlzaXIgZ3JhdHVpdGVtZW50IGV0IGRpcmVjdGVtZW50",
      "U2V1bHMgbGVzIGF2b2NhdHMgcGV1dmVudCBzYWlzaXIgbGUgRMOpZmVuc2V1ciBkZXMgZHJvaXRzIHBvdXIgbGV1cnMgY2xpZW50cyBtb3llbm5hbnQgZGVzIGZyYWlzIGRlIGRvc3NpZXI=",
      "VW5pcXVlbWVudCBsZXMgY2l0b3llbnMgZnJhbsOnYWlzIG1hamV1cnMgcGV1dmVudCBkw6lwb3NlciB1bmUgcsOpY2xhbWF0aW9uIGF1cHLDqHMgZGUgY2V0dGUgaW5zdGl0dXRpb24=",
      "TGUgRMOpZmVuc2V1ciBkZXMgZHJvaXRzIG5lIHBldXQgw6p0cmUgc2Fpc2kgcXVlIHBhciBsZSBQcmVtaWVyIG1pbmlzdHJlIG91IGxlIHByw6lzaWRlbnQgZHUgUGFybGVtZW50"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 9, 0),
    explication: "VG91dGUgcGVyc29ubmUsIGZyYW7Dp2Fpc2Ugb3Ugw6l0cmFuZ8OocmUsIHBldXQgc2Fpc2lyIGdyYXR1aXRlbWVudCBldCBkaXJlY3RlbWVudCBsZSBEw6lmZW5zZXVyIGRlcyBkcm9pdHMgc2kgZWxsZSBzJ2VzdGltZSBsw6lzw6llIHBhciB1biBzZXJ2aWNlIHB1YmxpYyBvdSB2aWN0aW1lIGRlIGRpc2NyaW1pbmF0aW9uLg=="},
  {
    id: 10,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Consentement mariage",
    question: "UXVlbGxlIGNvbmRpdGlvbiBlc3QgaW5kaXNwZW5zYWJsZSBwb3VyIHF1ZSBsZSBtYXJpYWdlIGNpdmlsIHNvaXQgdmFsYWJsZSBlbiBGcmFuY2UgPw==",
    options: [
      "TGUgY29uc2VudGVtZW50IGxpYnJlIGV0IMOpY2xhaXLDqSBkZXMgZGV1eCDDqXBvdXgsIGV4cHJpbcOpIHBlcnNvbm5lbGxlbWVudCBkZXZhbnQgbCdvZmZpY2llciBkJ8OpdGF0IGNpdmls",
      "TCdhY2NvcmQgcHLDqWFsYWJsZSBkZXMgcGFyZW50cyBkZXMgZGV1eCDDqXBvdXgsIHF1ZWxsZSBxdWUgc29pdCBsYSBtYWpvcml0w6kgZGVzIGZ1dHVycyBtYXJpw6lz",
      "TGEgcG9zc2Vzc2lvbiBkJ3VuIHBhdHJpbW9pbmUgbWluaW11bSBwZXJtZXR0YW50IGRlIHN1YnZlbmlyIGF1eCBiZXNvaW5zIGR1IGZ1dHVyIG3DqW5hZ2U=",
      "TGEgY8OpbMOpYnJhdGlvbiBkJ3VuZSBjw6lyw6ltb25pZSByZWxpZ2lldXNlIHByw6lhbGFibGUgcmVjb25udWUgcGFyIGwnw4l0YXQgZnJhbsOnYWlz"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 10, 0),
    explication: "TGUgbWFyaWFnZSBjaXZpbCBuw6ljZXNzaXRlIGxlIGNvbnNlbnRlbWVudCBsaWJyZSBldCDDqWNsYWlyw6kgZGVzIGRldXggw6lwb3V4LiBTYW5zIGNlIGNvbnNlbnRlbWVudCBwZXJzb25uZWwgZXQgbm9uIGNvbnRyYWludCwgbGUgbWFyaWFnZSBwZXV0IMOqdHJlIGFubnVsw6ku"},
  {
    id: 11,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Violence morale",
    question: "TGVzIHZpb2xlbmNlcyBwc3ljaG9sb2dpcXVlcyBhdSBzZWluIGR1IGNvdXBsZSBzb250LWVsbGVzIHB1bmllcyBwYXIgbGEgbG9pIGZyYW7Dp2Fpc2UgPw==",
    options: [
      "T3VpLCBsZXMgdmlvbGVuY2VzIHBzeWNob2xvZ2lxdWVzIHLDqXDDqXTDqWVzIHNvbnQgdW4gZMOpbGl0IHB1bmkgZGUgMyBhbnMgZCdlbXByaXNvbm5lbWVudCBldCA0NSAwMDAgZXVyb3MgZCdhbWVuZGU=",
      "Tm9uLCBzZXVsZXMgbGVzIHZpb2xlbmNlcyBwaHlzaXF1ZXMgbGFpc3NhbnQgZGVzIHRyYWNlcyB2aXNpYmxlcyBzb250IHNhbmN0aW9ubsOpZXMgcMOpbmFsZW1lbnQ=",
      "T3VpLCBtYWlzIHVuaXF1ZW1lbnQgc2kgZWxsZXMgc29udCBjb21taXNlcyBkZXZhbnQgZGVzIHTDqW1vaW5zIHBvdXZhbnQgYXR0ZXN0ZXIgZGVzIGZhaXRz",
      "Tm9uLCBsZXMgdmlvbGVuY2VzIG1vcmFsZXMgcmVsw6h2ZW50IGR1IGNpdmlsIGV0IG5lIHBldXZlbnQgZG9ubmVyIGxpZXUgcXUnw6AgZGVzIGRvbW1hZ2VzIGV0IGludMOpcsOqdHM="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 11, 0),
    explication: "TGVzIHZpb2xlbmNlcyBwc3ljaG9sb2dpcXVlcyByw6lww6l0w6llcyBhdSBzZWluIGR1IGNvdXBsZSBzb250IHVuIGTDqWxpdCBkZXB1aXMgMjAxMC4gRWxsZXMgc29udCBwdW5pZXMgZGUgMyBhbnMgZCdlbXByaXNvbm5lbWVudCBldCA0NSAwMDAgZXVyb3MgZCdhbWVuZGUu"},

  // ==================== 2. SYSTÈME INSTITUTIONNEL (6 questions) ====================
  
  {
    id: 12,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Dissolution Assemblée",
    question: "RGFucyBxdWVsbGVzIGNvbmRpdGlvbnMgbGUgUHLDqXNpZGVudCBkZSBsYSBSw6lwdWJsaXF1ZSBwZXV0LWlsIGRpc3NvdWRyZSBsJ0Fzc2VtYmzDqWUgbmF0aW9uYWxlID8=",
    options: [
      "w4AgdG91dCBtb21lbnQgYXByw6hzIGNvbnN1bHRhdGlvbiBkdSBQcmVtaWVyIG1pbmlzdHJlIGV0IGRlcyBwcsOpc2lkZW50cyBkZXMgYXNzZW1ibMOpZXMsIG1haXMgcGFzIGRldXggZm9pcyBlbiB1biBhbg==",
      "VW5pcXVlbWVudCBhcHLDqHMgdW4gdm90ZSBkZSBkw6lmaWFuY2UgZHUgUGFybGVtZW50IGNvbnRyZSBsZSBHb3V2ZXJuZW1lbnQgZW4gcGxhY2U=",
      "SmFtYWlzLCBsYSBkaXNzb2x1dGlvbiBkZSBsJ0Fzc2VtYmzDqWUgbmF0aW9uYWxlIGVzdCBpbnRlcmRpdGUgcGFyIGxhIENvbnN0aXR1dGlvbiBkZSAxOTU4",
      "U2V1bGVtZW50IGVuIGNhcyBkZSBndWVycmUgb3UgZGUgY3Jpc2UgZ3JhdmUgbWVuYcOnYW50IGxlcyBpbnN0aXR1dGlvbnMgZGUgbGEgUsOpcHVibGlxdWU="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 12, 0),
    explication: "TGUgUHLDqXNpZGVudCBwZXV0IGRpc3NvdWRyZSBsJ0Fzc2VtYmzDqWUgbmF0aW9uYWxlIGFwcsOocyBjb25zdWx0YXRpb24gKG5vbiBhdmlzIGNvbmZvcm1lKSBkdSBQcmVtaWVyIG1pbmlzdHJlIGV0IGRlcyBwcsOpc2lkZW50cyBkZXMgYXNzZW1ibMOpZXMuIFVuZSBub3V2ZWxsZSBkaXNzb2x1dGlvbiBlc3QgaW50ZXJkaXRlIGRhbnMgbCdhbm7DqWUgc3VpdmFudGUu"},
  {
    id: 13,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Motion de censure",
    question: "UXUnZXN0LWNlIHF1J3VuZSBtb3Rpb24gZGUgY2Vuc3VyZSBldCBxdWVsbGVzIHNvbnQgbGVzIGNvbmRpdGlvbnMgZGUgc29uIGFkb3B0aW9uID8=",
    options: [
      "VW5lIHByb2PDqWR1cmUgcGVybWV0dGFudCDDoCBsJ0Fzc2VtYmzDqWUgbmF0aW9uYWxlIGRlIHJlbnZlcnNlciBsZSBHb3V2ZXJuZW1lbnQsIG7DqWNlc3NpdGFudCBsYSBtYWpvcml0w6kgYWJzb2x1ZSBkZXMgZMOpcHV0w6lz",
      "VW4gdGV4dGUgZHUgU8OpbmF0IGNyaXRpcXVhbnQgbGEgcG9saXRpcXVlIGdvdXZlcm5lbWVudGFsZSBzYW5zIGNvbnPDqXF1ZW5jZSBqdXJpZGlxdWUgZGlyZWN0ZQ==",
      "VW5lIHNhbmN0aW9uIGR1IENvbnNlaWwgY29uc3RpdHV0aW9ubmVsIGNvbnRyZSB1bmUgbG9pIGp1Z8OpZSBjb250cmFpcmUgYXV4IGRyb2l0cyBmb25kYW1lbnRhdXg=",
      "VW4gYXZlcnRpc3NlbWVudCBkdSBQcsOpc2lkZW50IGRlIGxhIFLDqXB1YmxpcXVlIGF1IFByZW1pZXIgbWluaXN0cmUgc2FucyBlZmZldCBzdXIgbGUgR291dmVybmVtZW50"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 13, 0),
    explication: "TGEgbW90aW9uIGRlIGNlbnN1cmUgcGVybWV0IMOgIGwnQXNzZW1ibMOpZSBuYXRpb25hbGUgZGUgcmVudmVyc2VyIGxlIEdvdXZlcm5lbWVudC4gRWxsZSBkb2l0IMOqdHJlIHZvdMOpZSBwYXIgbGEgbWFqb3JpdMOpIGFic29sdWUgZGVzIGTDqXB1dMOpcy4="},
  {
    id: 14,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Conseil constitutionnel composition",
    question: "Q29tbWVudCBzb250IG5vbW3DqXMgbGVzIG1lbWJyZXMgZHUgQ29uc2VpbCBjb25zdGl0dXRpb25uZWwgPw==",
    options: [
      "VHJvaXMgcGFyIGxlIFByw6lzaWRlbnQsIHRyb2lzIHBhciBsZSBwcsOpc2lkZW50IGRlIGwnQXNzZW1ibMOpZSwgdHJvaXMgcGFyIGxlIHByw6lzaWRlbnQgZHUgU8OpbmF0LCBwb3VyIHVuIG1hbmRhdCBkZSA5IGFucw==",
      "VG91cyDDqWx1cyBwYXIgbGUgUGFybGVtZW50IHLDqXVuaSBlbiBDb25ncsOocyDDoCBsYSBtYWpvcml0w6kgZGVzIGRldXggdGllcnMgcG91ciB1biBtYW5kYXQgZGUgNyBhbnM=",
      "Tm9tbcOpcyBwYXIgbGUgUHJlbWllciBtaW5pc3RyZSBzdXIgcHJvcG9zaXRpb24gZHUgbWluaXN0cmUgZGUgbGEgSnVzdGljZSBwb3VyIHVuIG1hbmRhdCDDoCB2aWU=",
      "RMOpc2lnbsOpcyBwYXIgdGlyYWdlIGF1IHNvcnQgcGFybWkgbGVzIG1hZ2lzdHJhdHMgZGUgbGEgQ291ciBkZSBjYXNzYXRpb24gcG91ciB1biBtYW5kYXQgZGUgNSBhbnM="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 14, 0),
    explication: "TGUgQ29uc2VpbCBjb25zdGl0dXRpb25uZWwgY29tcHJlbmQgOSBtZW1icmVzIDogMyBub21tw6lzIHBhciBsZSBQcsOpc2lkZW50LCAzIHBhciBsZSBwcsOpc2lkZW50IGRlIGwnQXNzZW1ibMOpZSwgMyBwYXIgbGUgcHLDqXNpZGVudCBkdSBTw6luYXQsIHBvdXIgOSBhbnMgbm9uIHJlbm91dmVsYWJsZXMu"},
  {
    id: 15,
    categorie: "Système institutionnel et politique",
    sousCategorie: "QPC",
    question: "UXUnZXN0LWNlIHF1J3VuZSBRdWVzdGlvbiBQcmlvcml0YWlyZSBkZSBDb25zdGl0dXRpb25uYWxpdMOpIChRUEMpID8=",
    options: [
      "TGUgZHJvaXQgcG91ciB0b3V0IGp1c3RpY2lhYmxlIGRlIGNvbnRlc3RlciBsYSBjb25mb3JtaXTDqSBkJ3VuZSBsb2kgYXV4IGRyb2l0cyBldCBsaWJlcnTDqXMgZ2FyYW50aXMgcGFyIGxhIENvbnN0aXR1dGlvbg==",
      "VW5lIHByb2PDqWR1cmUgcGVybWV0dGFudCBhdSBQYXJsZW1lbnQgZGUgc2Fpc2lyIGxlIENvbnNlaWwgY29uc3RpdHV0aW9ubmVsIGF2YW50IGxlIHZvdGUgZCd1bmUgbG9p",
      "VW4gcmVjb3VycyBkdSBQcsOpc2lkZW50IGRlIGxhIFLDqXB1YmxpcXVlIGNvbnRyZSB1bmUgZMOpY2lzaW9uIGRlIGp1c3RpY2UganVnw6llIGNvbnRyYWlyZSDDoCBsYSBDb25zdGl0dXRpb24=",
      "VW5lIHF1ZXN0aW9uIHBvc8OpZSBwYXIgbGVzIGNpdG95ZW5zIGxvcnMgZGVzIHLDqWbDqXJlbmR1bXMgc3VyIGxhIG1vZGlmaWNhdGlvbiBkZSBsYSBDb25zdGl0dXRpb24="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 15, 0),
    explication: "TGEgUVBDIChkZXB1aXMgMjAxMCkgcGVybWV0IMOgIHRvdXQganVzdGljaWFibGUsIGRhbnMgdW4gcHJvY8OocywgZGUgY29udGVzdGVyIGxhIGNvbmZvcm1pdMOpIGQndW5lIGxvaSBhcHBsaWNhYmxlIGF1eCBkcm9pdHMgZXQgbGliZXJ0w6lzIGdhcmFudGlzIHBhciBsYSBDb25zdGl0dXRpb24u"},
  {
    id: 16,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Commune maire",
    question: "Q29tbWVudCBsZSBtYWlyZSBkJ3VuZSBjb21tdW5lIGVzdC1pbCDDqWx1IGV0IHF1aSBsZSBub21tZSBvZmZpY2llbGxlbWVudCA/",
    options: [
      "w4lsdSBwYXIgbGUgY29uc2VpbCBtdW5pY2lwYWwgcGFybWkgc2VzIG1lbWJyZXMgbG9ycyBkZSBsYSBwcmVtacOocmUgcsOpdW5pb24gc3VpdmFudCBsZXMgw6lsZWN0aW9ucyBtdW5pY2lwYWxlcw==",
      "w4lsdSBkaXJlY3RlbWVudCBwYXIgbGVzIGhhYml0YW50cyBkZSBsYSBjb21tdW5lIGF1IHN1ZmZyYWdlIHVuaXZlcnNlbCBsb3JzIGQndW4gc2NydXRpbiBzw6lwYXLDqQ==",
      "Tm9tbcOpIHBhciBsZSBwcsOpZmV0IGRlIGTDqXBhcnRlbWVudCBzdXIgcHJvcG9zaXRpb24gZHUgY29uc2VpbCBtdW5pY2lwYWwgYXByw6hzIGxlcyDDqWxlY3Rpb25z",
      "RMOpc2lnbsOpIGF1dG9tYXRpcXVlbWVudCBjb21tZSBsZSBjYW5kaWRhdCBheWFudCBvYnRlbnUgbGUgcGx1cyBkZSB2b2l4IGF1eCDDqWxlY3Rpb25zIG11bmljaXBhbGVz"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 16, 0),
    explication: "TGUgbWFpcmUgZXN0IMOpbHUgcGFyIGxlIGNvbnNlaWwgbXVuaWNpcGFsIHBhcm1pIHNlcyBtZW1icmVzIGxvcnMgZGUgbGEgcHJlbWnDqHJlIHLDqXVuaW9uIHN1aXZhbnQgbGVzIMOpbGVjdGlvbnMgbXVuaWNpcGFsZXMuIElsIG4nZXN0IHBhcyDDqWx1IGRpcmVjdGVtZW50IHBhciBsZXMgaGFiaXRhbnRzLg=="},
  {
    id: 17,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Intercommunalité",
    question: "UXUnZXN0LWNlIHF1J3VuZSBpbnRlcmNvbW11bmFsaXTDqSAoRVBDSSkgZXQgcXVlbCBlc3Qgc29uIHLDtGxlID8=",
    options: [
      "VW4gcmVncm91cGVtZW50IGRlIGNvbW11bmVzIGV4ZXLDp2FudCBkZXMgY29tcMOpdGVuY2VzIGVuIGNvbW11biBjb21tZSBsZXMgdHJhbnNwb3J0cywgbGVzIGTDqWNoZXRzIG91IGxlIGTDqXZlbG9wcGVtZW50IMOpY29ub21pcXVl",
      "VW4gc2VydmljZSBkZSBsJ8OJdGF0IGNvb3Jkb25uYW50IGxlcyBhY3Rpb25zIGRlcyBkaWZmw6lyZW50ZXMgY29tbXVuZXMgZCd1biBtw6ptZSBkw6lwYXJ0ZW1lbnQ=",
      "VW5lIGFzc29jaWF0aW9uIGRlIG1haXJlcyBzZSByw6l1bmlzc2FudCBwb3VyIGTDqWZlbmRyZSBsZXMgaW50w6lyw6p0cyBkZXMgcGV0aXRlcyBjb21tdW5lcyBydXJhbGVz",
      "VW4gdHJpYnVuYWwgYWRtaW5pc3RyYXRpZiBzcMOpY2lhbGlzw6kgZGFucyBsZXMgbGl0aWdlcyBlbnRyZSBjb21tdW5lcyB2b2lzaW5lcyBzdXIgbGUgdGVycml0b2lyZQ=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 17, 0),
    explication: "TGVzIEVQQ0kgKMOJdGFibGlzc2VtZW50cyBQdWJsaWNzIGRlIENvb3DDqXJhdGlvbiBJbnRlcmNvbW11bmFsZSkgcmVncm91cGVudCBkZXMgY29tbXVuZXMgcG91ciBleGVyY2VyIGRlcyBjb21ww6l0ZW5jZXMgZW4gY29tbXVuICh0cmFuc3BvcnRzLCBkw6ljaGV0cywgZWF1LCBkw6l2ZWxvcHBlbWVudCDDqWNvbm9taXF1ZS4uLiku"},

  // ==================== 3. DROITS ET DEVOIRS (11 questions) ====================
  
  {
    id: 18,
    categorie: "Droits et devoirs",
    sousCategorie: "Liberté d'expression limites",
    question: "UXVlbGxlcyBzb250IGxlcyBsaW1pdGVzIMOgIGxhIGxpYmVydMOpIGQnZXhwcmVzc2lvbiBlbiBGcmFuY2UgPw==",
    options: [
      "TGEgZGlmZmFtYXRpb24sIGwnaW5qdXJlLCBsYSBwcm92b2NhdGlvbiDDoCBsYSBoYWluZSwgbCdhcG9sb2dpZSBkdSB0ZXJyb3Jpc21lIGV0IGxlIG7DqWdhdGlvbm5pc21lIHNvbnQgaW50ZXJkaXRz",
      "QXVjdW5lIGxpbWl0ZSBuJ2V4aXN0ZSwgbGEgbGliZXJ0w6kgZCdleHByZXNzaW9uIGVzdCBhYnNvbHVlIGV0IG5lIHBldXQgamFtYWlzIMOqdHJlIHJlc3RyZWludGU=",
      "U2V1bGVzIGxlcyBjcml0aXF1ZXMgZW52ZXJzIGxlIFByw6lzaWRlbnQgZGUgbGEgUsOpcHVibGlxdWUgZXQgbGVzIGluc3RpdHV0aW9ucyBzb250IGludGVyZGl0ZXM=",
      "TGVzIG9waW5pb25zIHBvbGl0aXF1ZXMgcGV1dmVudCDDqnRyZSBleHByaW3DqWVzLCBtYWlzIHBhcyBsZXMgb3BpbmlvbnMgcmVsaWdpZXVzZXMgb3UgcGhpbG9zb3BoaXF1ZXM="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 18, 0),
    explication: "TGEgbGliZXJ0w6kgZCdleHByZXNzaW9uIGEgZGVzIGxpbWl0ZXMgOiBkaWZmYW1hdGlvbiwgaW5qdXJlLCBwcm92b2NhdGlvbiDDoCBsYSBoYWluZSByYWNpYWxlIG91IHJlbGlnaWV1c2UsIGFwb2xvZ2llIGR1IHRlcnJvcmlzbWUsIG7DqWdhdGlvbm5pc21lIHNvbnQgcHVuaXMgcGFyIGxhIGxvaS4="},
  {
    id: 19,
    categorie: "Droits et devoirs",
    sousCategorie: "RGPD droits",
    question: "UXVlbHMgZHJvaXRzIGxlIFJHUEQgYWNjb3JkZS10LWlsIGF1eCBjaXRveWVucyBjb25jZXJuYW50IGxldXJzIGRvbm7DqWVzIHBlcnNvbm5lbGxlcyA/",
    options: [
      "RHJvaXQgZCdhY2PDqHMsIGRlIHJlY3RpZmljYXRpb24sIGQnZWZmYWNlbWVudCwgZGUgcG9ydGFiaWxpdMOpIGV0IGQnb3Bwb3NpdGlvbiBhdSB0cmFpdGVtZW50IGRlIGxldXJzIGRvbm7DqWVz",
      "VW5pcXVlbWVudCBsZSBkcm9pdCBkZSBzYXZvaXIgc2kgdW5lIGVudHJlcHJpc2UgZMOpdGllbnQgZGVzIGRvbm7DqWVzLCBzYW5zIHBvdXZvaXIgbGVzIG1vZGlmaWVy",
      "TGUgZHJvaXQgZGUgdmVuZHJlIHNlcyBkb25uw6llcyBwZXJzb25uZWxsZXMgYXV4IGVudHJlcHJpc2VzIGludMOpcmVzc8OpZXMgcGFyIGNlcyBpbmZvcm1hdGlvbnM=",
      "QXVjdW4gZHJvaXQgcGFydGljdWxpZXIsIGxlcyBlbnRyZXByaXNlcyBwZXV2ZW50IHV0aWxpc2VyIGxpYnJlbWVudCB0b3V0ZXMgbGVzIGRvbm7DqWVzIGNvbGxlY3TDqWVz"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 19, 0),
    explication: "TGUgUkdQRCBhY2NvcmRlIGRlcyBkcm9pdHMgYXV4IGNpdG95ZW5zIDogYWNjw6hzIMOgIGxldXJzIGRvbm7DqWVzLCByZWN0aWZpY2F0aW9uIGRlcyBlcnJldXJzLCBlZmZhY2VtZW50IChkcm9pdCDDoCBsJ291YmxpKSwgcG9ydGFiaWxpdMOpIGV0IG9wcG9zaXRpb24gYXUgdHJhaXRlbWVudC4="},
  {
    id: 20,
    categorie: "Droits et devoirs",
    sousCategorie: "Allocation chômage",
    question: "UXVlbGxlcyBzb250IGxlcyBjb25kaXRpb25zIHBvdXIgYsOpbsOpZmljaWVyIGRlIGwnYWxsb2NhdGlvbiBjaMO0bWFnZSAoQVJFKSBlbiBGcmFuY2UgPw==",
    options: [
      "QXZvaXIgdHJhdmFpbGzDqSBhdSBtb2lucyA2IG1vaXMgc3VyIGxlcyAyNCBkZXJuaWVycyBtb2lzLCDDqnRyZSBpbnNjcml0IMOgIEZyYW5jZSBUcmF2YWlsIGV0IGNoZXJjaGVyIGFjdGl2ZW1lbnQgdW4gZW1wbG9p",
      "QXZvaXIgdHJhdmFpbGzDqSBhdSBtb2lucyA1IGFucyBzYW5zIGludGVycnVwdGlvbiBjaGV6IGxlIG3Dqm1lIGVtcGxveWV1ciBhdmFudCBsZSBsaWNlbmNpZW1lbnQ=",
      "w4p0cmUgZnJhbsOnYWlzIGV0IGF2b2lyIHBsdXMgZGUgMjUgYW5zLCBzYW5zIGNvbmRpdGlvbiBkZSBkdXLDqWUgZGUgdHJhdmFpbCBwcsOpYWxhYmxl",
      "QXZvaXIgZMOpbWlzc2lvbm7DqSBkZSBzb24gZW1wbG9pIGV0IGTDqXBvc2VyIHVuZSBkZW1hbmRlIGF1cHLDqHMgZGUgbGEgU8OpY3VyaXTDqSBzb2NpYWxl"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 20, 0),
    explication: "UG91ciBsJ0FSRSwgaWwgZmF1dCBhdm9pciB0cmF2YWlsbMOpIGF1IG1vaW5zIDYgbW9pcyBzdXIgbGVzIDI0IGRlcm5pZXJzIG1vaXMgKG91IDM2IHBvdXIgbGVzIHBsdXMgZGUgNTMgYW5zKSwgw6p0cmUgaW5zY3JpdCDDoCBGcmFuY2UgVHJhdmFpbCBldCBjaGVyY2hlciBhY3RpdmVtZW50IHVuIGVtcGxvaS4="},
  {
    id: 21,
    categorie: "Droits et devoirs",
    sousCategorie: "Droit de grève",
    question: "TGUgZHJvaXQgZGUgZ3LDqHZlIGVzdC1pbCBnYXJhbnRpIGVuIEZyYW5jZSBldCBxdWVsbGVzIHNvbnQgc2VzIGxpbWl0ZXMgPw==",
    options: [
      "T3VpLCBjJ2VzdCB1biBkcm9pdCBjb25zdGl0dXRpb25uZWwsIG1haXMgaWwgcGV1dCDDqnRyZSBsaW1pdMOpIHBvdXIgYXNzdXJlciBsYSBjb250aW51aXTDqSBkZXMgc2VydmljZXMgcHVibGljcyBlc3NlbnRpZWxz",
      "Tm9uLCBsZSBkcm9pdCBkZSBncsOodmUgYSDDqXTDqSBzdXBwcmltw6kgcGFyIHVuZSByw6lmb3JtZSByw6ljZW50ZSBkdSBDb2RlIGR1IHRyYXZhaWwgZnJhbsOnYWlz",
      "T3VpLCBtYWlzIHVuaXF1ZW1lbnQgcG91ciBsZXMgc2FsYXJpw6lzIGR1IHNlY3RldXIgcHJpdsOpLCBsZXMgZm9uY3Rpb25uYWlyZXMgbid5IG9udCBwYXMgZHJvaXQ=",
      "Tm9uLCBsZXMgZ3LDqHZlcyBzb250IGlsbMOpZ2FsZXMgZXQgbGVzIGdyw6l2aXN0ZXMgcGV1dmVudCDDqnRyZSBpbW3DqWRpYXRlbWVudCBsaWNlbmNpw6lzIHNhbnMgcHLDqWF2aXM="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 21, 0),
    explication: "TGUgZHJvaXQgZGUgZ3LDqHZlIGVzdCB1biBkcm9pdCBjb25zdGl0dXRpb25uZWwuIElsIHBldXQgw6p0cmUgcsOpZ2xlbWVudMOpIHBvdXIgYXNzdXJlciBsYSBjb250aW51aXTDqSBkZXMgc2VydmljZXMgcHVibGljcyBlc3NlbnRpZWxzIChow7RwaXRhdXgsIHRyYW5zcG9ydHMsIGV0Yy4pLg=="},
  {
    id: 22,
    categorie: "Droits et devoirs",
    sousCategorie: "Mise en situation santé",
    question: "VW4gbcOpZGVjaW4gcGV1dC1pbCByZWZ1c2VyIGRlIHZvdXMgc29pZ25lciBlbiByYWlzb24gZGUgdm9zIG9yaWdpbmVzIG91IGRlIHZvdHJlIHJlbGlnaW9uID8=",
    options: [
      "Tm9uLCBjJ2VzdCBpbnRlcmRpdCA7IHRvdXQgcmVmdXMgZGUgc29pbnMgZGlzY3JpbWluYXRvaXJlIGVzdCBwdW5pIHBhciBsYSBsb2kgZXQgcGFyIGxlIGNvZGUgZGUgZMOpb250b2xvZ2llIG3DqWRpY2FsZQ==",
      "T3VpLCBsZSBtw6lkZWNpbiBsaWLDqXJhbCBwZXV0IGNob2lzaXIgc2VzIHBhdGllbnRzIHNlbG9uIHNlcyBwcsOpZsOpcmVuY2VzIHBlcnNvbm5lbGxlcyBzYW5zIHJlc3RyaWN0aW9u",
      "Tm9uLCBzYXVmIHMnaWwgcydhZ2l0IGQndW4gbcOpZGVjaW4gZXhlcsOnYW50IGRhbnMgdW4gw6l0YWJsaXNzZW1lbnQgcHJpdsOpIMOgIGNhcmFjdMOocmUgY29uZmVzc2lvbm5lbA==",
      "T3VpLCBtYWlzIHVuaXF1ZW1lbnQgc2kgbGUgcGF0aWVudCBuJ2VzdCBwYXMgY291dmVydCBwYXIgbCdhc3N1cmFuY2UgbWFsYWRpZSBvYmxpZ2F0b2lyZQ=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 22, 0),
    explication: "VW4gbcOpZGVjaW4gbmUgcGV1dCBwYXMgcmVmdXNlciBkZSBzb2lnbmVyIHVuIHBhdGllbnQgcG91ciBkZXMgbW90aWZzIGRpc2NyaW1pbmF0b2lyZXMuIEMnZXN0IHB1bmkgcGFyIGxhIGxvaSBldCBjb250cmFpcmUgYXUgY29kZSBkZSBkw6lvbnRvbG9naWUgbcOpZGljYWxlLg=="},
  {
    id: 23,
    categorie: "Droits et devoirs",
    sousCategorie: "Délai de rétractation",
    question: "RGUgY29tYmllbiBkZSBqb3VycyBkaXNwb3Nlei12b3VzIHBvdXIgdm91cyByw6l0cmFjdGVyIGFwcsOocyB1biBhY2hhdCDDoCBkaXN0YW5jZSA/",
    options: [
      "MTQgam91cnMgw6AgY29tcHRlciBkZSBsYSByw6ljZXB0aW9uIGR1IGJpZW4gb3UgZGUgbGEgY29uY2x1c2lvbiBkdSBjb250cmF0IHBvdXIgbGVzIHNlcnZpY2VzLCBzYW5zIGp1c3RpZmljYXRpb24=",
      "NyBqb3VycyBvdXZyYWJsZXMgdW5pcXVlbWVudCBwb3VyIGxlcyBwcm9kdWl0cyBkw6lmZWN0dWV1eCBuw6ljZXNzaXRhbnQgdW4gw6ljaGFuZ2Ugb3UgcmVtYm91cnNlbWVudA==",
      "MzAgam91cnMgbWFpcyB1bmlxdWVtZW50IHNpIGxlIHZlbmRldXIgcHJvcG9zZSB1bmUgZ2FyYW50aWUgwqsgc2F0aXNmYWl0IG91IHJlbWJvdXJzw6kgwrsgZXhwbGljaXRl",
      "QXVjdW4gZMOpbGFpLCB1bmUgZm9pcyBsYSBjb21tYW5kZSBwYXNzw6llLCBsJ2FjaGV0ZXVyIGVzdCBkw6lmaW5pdGl2ZW1lbnQgZW5nYWfDqSBjb250cmFjdHVlbGxlbWVudA=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 23, 0),
    explication: "UG91ciB0b3V0IGFjaGF0IMOgIGRpc3RhbmNlIChpbnRlcm5ldCwgdMOpbMOpcGhvbmUpLCB2b3VzIGRpc3Bvc2V6IGRlIDE0IGpvdXJzIHBvdXIgdm91cyByw6l0cmFjdGVyIHNhbnMgYXZvaXIgw6AganVzdGlmaWVyIHZvdHJlIGTDqWNpc2lvbiBuaSBwYXllciBkZSBww6luYWxpdMOpcy4="},
  {
    id: 24,
    categorie: "Droits et devoirs",
    sousCategorie: "Secret professionnel",
    question: "UXVlbGxlcyBwcm9mZXNzaW9ucyBzb250IHNvdW1pc2VzIGF1IHNlY3JldCBwcm9mZXNzaW9ubmVsIHBhciBsYSBsb2kgPw==",
    options: [
      "TcOpZGVjaW5zLCBhdm9jYXRzLCBub3RhaXJlcywgYXNzaXN0YW50cyBzb2NpYXV4IGV0IGF1dHJlcyBwcm9mZXNzaW9ucyBkw6lmaW5pZXMgcGFyIGxhIGxvaSwgc291cyBwZWluZSBkZSBzYW5jdGlvbnMgcMOpbmFsZXM=",
      "VW5pcXVlbWVudCBsZXMgYWdlbnRzIGRlIGwnw4l0YXQgZGFucyBsJ2V4ZXJjaWNlIGRlIGxldXJzIGZvbmN0aW9ucyBwdWJsaXF1ZXMgYWRtaW5pc3RyYXRpdmVz",
      "VG91cyBsZXMgc2FsYXJpw6lzIGR1IHNlY3RldXIgcHJpdsOpIHZpcy3DoC12aXMgZGUgbGV1ciBlbXBsb3lldXIgZXQgZGUgbGV1cnMgY29sbMOoZ3Vlcw==",
      "QXVjdW5lIHByb2Zlc3Npb24gbidlc3QgbMOpZ2FsZW1lbnQgdGVudWUgYXUgc2VjcmV0LCBjJ2VzdCB1bmUgb2JsaWdhdGlvbiBtb3JhbGUgc2FucyBzYW5jdGlvbg=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 24, 0),
    explication: "TGUgc2VjcmV0IHByb2Zlc3Npb25uZWwgZXN0IGltcG9zw6kgcGFyIGxhIGxvaSDDoCBjZXJ0YWluZXMgcHJvZmVzc2lvbnMgKG3DqWRlY2lucywgYXZvY2F0cywgbm90YWlyZXMsIGFzc2lzdGFudHMgc29jaWF1eC4uLikuIFNhIHZpb2xhdGlvbiBlc3QgcHVuaWUgcMOpbmFsZW1lbnQu"},
  {
    id: 25,
    categorie: "Droits et devoirs",
    sousCategorie: "Pension alimentaire",
    question: "UXUnZXN0LWNlIHF1J3VuZSBwZW5zaW9uIGFsaW1lbnRhaXJlIGV0IHF1aSBkb2l0IGxhIHZlcnNlciA/",
    options: [
      "VW5lIGNvbnRyaWJ1dGlvbiBmaW5hbmNpw6hyZSB2ZXJzw6llIHBvdXIgbCdlbnRyZXRpZW4gZXQgbCfDqWR1Y2F0aW9uIGQndW4gZW5mYW50IHBhciBsZSBwYXJlbnQgcXVpIG4nZW4gYSBwYXMgbGEgZ2FyZGUgcHJpbmNpcGFsZQ==",
      "VW5lIGFpZGUgZGUgbCfDiXRhdCB2ZXJzw6llIGF1eCBmYW1pbGxlcyBtb25vcGFyZW50YWxlcyBzYW5zIGNvbmRpdGlvbiBkZSByZXNzb3VyY2VzIG5pIGRlIHJldmVudXM=",
      "VW4gaW1ww7R0IHByw6lsZXbDqSBzdXIgbGVzIHJldmVudXMgZGVzIHBhcmVudHMgcG91ciBmaW5hbmNlciBsZXMgY2FudGluZXMgc2NvbGFpcmVzIGRlcyDDqWNvbGVzIHB1YmxpcXVlcw==",
      "VW5lIGFsbG9jYXRpb24gZmFtaWxpYWxlIHZlcnPDqWUgYXV0b21hdGlxdWVtZW50IMOgIHRvdXMgbGVzIHBhcmVudHMgZCdlbmZhbnRzIG1pbmV1cnMgc2NvbGFyaXPDqXM="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 25, 0),
    explication: "TGEgcGVuc2lvbiBhbGltZW50YWlyZSBlc3QgdmVyc8OpZSBwYXIgbGUgcGFyZW50IHF1aSBuJ2EgcGFzIGxhIGdhcmRlIHByaW5jaXBhbGUgcG91ciBjb250cmlidWVyIMOgIGwnZW50cmV0aWVuIGV0IGwnw6lkdWNhdGlvbiBkZSBsJ2VuZmFudC4gU29uIG1vbnRhbnQgZXN0IGZpeMOpIHBhciBsZSBqdWdlLg=="},
  {
    id: 26,
    categorie: "Droits et devoirs",
    sousCategorie: "Garde alternée",
    question: "UXUnZXN0LWNlIHF1ZSBsYSByw6lzaWRlbmNlIGFsdGVybsOpZSBldCBjb21tZW50IGVzdC1lbGxlIG9yZ2FuaXPDqWUgPw==",
    options: [
      "TCdlbmZhbnQgdml0IGFsdGVybmF0aXZlbWVudCBjaGV6IGNoYWN1biBkZSBzZXMgcGFyZW50cywgc2Vsb24gdW4gcnl0aG1lIGTDqWNpZMOpIHBhciBhY2NvcmQgb3UgcGFyIGxlIGp1Z2UgYXV4IGFmZmFpcmVzIGZhbWlsaWFsZXM=",
      "TCdlbmZhbnQgY2hvaXNpdCBsaWJyZW1lbnQgY2hleiBsZXF1ZWwgZGUgc2VzIHBhcmVudHMgaWwgc291aGFpdGUgdml2cmUgc2FucyBpbnRlcnZlbnRpb24gZHUganVnZQ==",
      "TGVzIHBhcmVudHMgdml2ZW50IGVuc2VtYmxlIGRhbnMgbGUgbcOqbWUgbG9nZW1lbnQgbWFpcyBhbHRlcm5lbnQgbGVzIHJlc3BvbnNhYmlsaXTDqXMgcGFyZW50YWxlcyBjaGFxdWUgc2VtYWluZQ==",
      "TCdlbmZhbnQgZXN0IHBsYWPDqSBkYW5zIHVuZSBmYW1pbGxlIGQnYWNjdWVpbCBuZXV0cmUgcG91ciDDqXZpdGVyIGxlcyBjb25mbGl0cyBlbnRyZSBzZXMgZGV1eCBwYXJlbnRz"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 26, 0),
    explication: "TGEgcsOpc2lkZW5jZSBhbHRlcm7DqWUgcGVybWV0IMOgIGwnZW5mYW50IGRlIHZpdnJlIGFsdGVybmF0aXZlbWVudCBjaGV6IGNoYWN1biBkZSBzZXMgcGFyZW50cy4gTGUgcnl0aG1lIGVzdCBkw6ljaWTDqSBwYXIgYWNjb3JkIGRlcyBwYXJlbnRzIG91IHBhciBsZSBqdWdlLg=="},
  {
    id: 27,
    categorie: "Droits et devoirs",
    sousCategorie: "Adoption conditions",
    question: "UXVlbGxlcyBzb250IGxlcyBjb25kaXRpb25zIGQnw6JnZSBwb3VyIGFkb3B0ZXIgdW4gZW5mYW50IGVuIEZyYW5jZSA/",
    options: [
      "QXZvaXIgYXUgbW9pbnMgMjYgYW5zIHBvdXIgdW5lIGFkb3B0aW9uIHBsw6luacOocmUsIG91IDI4IGFucyBwb3VyIHVuZSBhZG9wdGlvbiBzaW1wbGUgc2kgbCdvbiBlc3QgY8OpbGliYXRhaXJl",
      "QXZvaXIgZXhhY3RlbWVudCBsZSBtw6ptZSDDomdlIHF1ZSBsJ2VuZmFudCDDoCBhZG9wdGVyLCBwbHVzIG91IG1vaW5zIDUgYW5zIGRlIGRpZmbDqXJlbmNl",
      "QXVjdW5lIGNvbmRpdGlvbiBkJ8OiZ2UsIHRvdXRlIHBlcnNvbm5lIG1hamV1cmUgcGV1dCBhZG9wdGVyIHVuIGVuZmFudCBzYW5zIHJlc3RyaWN0aW9u",
      "QXZvaXIgbW9pbnMgZGUgNTAgYW5zIGNhciBsZXMgYWRvcHRpb25zIHNvbnQgaW50ZXJkaXRlcyBhdXggcGVyc29ubmVzIGRlIHBsdXMgZGUgNTAgYW5z"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 27, 0),
    explication: "UG91ciBhZG9wdGVyLCBpbCBmYXV0IGF2b2lyIGF1IG1vaW5zIDI2IGFucyAob3UgMjggYW5zIHNpIGPDqWxpYmF0YWlyZSBwb3VyIGwnYWRvcHRpb24gc2ltcGxlKSBldCBhdm9pciBhdSBtb2lucyAxNSBhbnMgZGUgcGx1cyBxdWUgbCdlbmZhbnQgYWRvcHTDqS4="},
  {
    id: 28,
    categorie: "Droits et devoirs",
    sousCategorie: "Tutelle majeur",
    question: "UXUnZXN0LWNlIHF1ZSBsYSB0dXRlbGxlIGQndW4gbWFqZXVyIHByb3TDqWfDqSBldCBxdWFuZCBlc3QtZWxsZSBtaXNlIGVuIHBsYWNlID8=",
    options: [
      "VW5lIG1lc3VyZSBkZSBwcm90ZWN0aW9uIGNvbXBsw6h0ZSBwb3VyIHVuZSBwZXJzb25uZSBpbmNhcGFibGUgZGUgZ8OpcmVyIHNldWxlIHNlcyBhZmZhaXJlcywgZMOpY2lkw6llIHBhciBsZSBqdWdlIGRlcyBjb250ZW50aWV1eCBkZSBsYSBwcm90ZWN0aW9u",
      "VW4gc2ltcGxlIGNvbnNlaWwgZG9ubsOpIMOgIHVuZSBwZXJzb25uZSDDomfDqWUgcG91ciBsJ2FpZGVyIGRhbnMgc2VzIGTDqW1hcmNoZXMgYWRtaW5pc3RyYXRpdmVzIHF1b3RpZGllbm5lcw==",
      "VW5lIHByb2PDqWR1cmUgcGVybWV0dGFudCBhdXggZW5mYW50cyBtYWpldXJzIGRlIGfDqXJlciBsZXMgYmllbnMgZGUgbGV1cnMgcGFyZW50cyBzYW5zIGxldXIgYWNjb3Jk",
      "VW4gY29udHJhdCB2b2xvbnRhaXJlIHNpZ27DqSBkZXZhbnQgbm90YWlyZSBwYXIgdW5lIHBlcnNvbm5lIHNvdWhhaXRhbnQgZMOpbMOpZ3VlciBzYSBnZXN0aW9uIHBhdHJpbW9uaWFsZQ=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 28, 0),
    explication: "TGEgdHV0ZWxsZSBlc3QgdW5lIG1lc3VyZSBkZSBwcm90ZWN0aW9uIHBvdXIgdW5lIHBlcnNvbm5lIHF1aSBuZSBwZXV0IHBhcyBnw6lyZXIgc2V1bGUgc2VzIGFmZmFpcmVzLiBFbGxlIGVzdCBkw6ljaWTDqWUgcGFyIGxlIGp1Z2UgZXQgaW1wbGlxdWUgdW5lIHJlcHLDqXNlbnRhdGlvbiBjb21wbMOodGUu"},

  // ==================== 4. HISTOIRE, GÉOGRAPHIE ET CULTURE (8 questions) ====================
  
  {
    id: 29,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Serment du Jeu de Paume",
    question: "UXVlIHMnZXN0LWlsIHBhc3PDqSBsZSAyMCBqdWluIDE3ODkgbG9ycyBkdSBTZXJtZW50IGR1IEpldSBkZSBQYXVtZSA/",
    options: [
      "TGVzIGTDqXB1dMOpcyBkdSBUaWVycyDDiXRhdCBvbnQganVyw6kgZGUgbmUgcGFzIHNlIHPDqXBhcmVyIGF2YW50IGQnYXZvaXIgZG9ubsOpIHVuZSBDb25zdGl0dXRpb24gw6AgbGEgRnJhbmNl",
      "TGUgcm9pIExvdWlzIFhWSSBhIGFiZGlxdcOpIHZvbG9udGFpcmVtZW50IGVuIGZhdmV1ciBkZSBzb24gZmlscyBsZSBEYXVwaGluIGjDqXJpdGllciBkdSB0csO0bmU=",
      "TGVzIHLDqXZvbHV0aW9ubmFpcmVzIG9udCBwcm9jbGFtw6kgbGEgUsOpcHVibGlxdWUgZnJhbsOnYWlzZSBldCBhYm9saSBkw6lmaW5pdGl2ZW1lbnQgbGEgbW9uYXJjaGll",
      "TGEgRMOpY2xhcmF0aW9uIGRlcyBkcm9pdHMgZGUgbCdob21tZSBldCBkdSBjaXRveWVuIGEgw6l0w6kgb2ZmaWNpZWxsZW1lbnQgYWRvcHTDqWUgcGFyIGwnQXNzZW1ibMOpZQ=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 29, 0),
    explication: "TGUgMjAganVpbiAxNzg5LCBsZXMgZMOpcHV0w6lzIGR1IFRpZXJzIMOJdGF0LCByw6l1bmlzIGRhbnMgbGEgc2FsbGUgZHUgSmV1IGRlIFBhdW1lLCBvbnQganVyw6kgZGUgbmUgcGFzIHNlIHPDqXBhcmVyIGF2YW50IGQnYXZvaXIgZG9ubsOpIHVuZSBDb25zdGl0dXRpb24gw6AgbGEgRnJhbmNlLg=="},
  {
    id: 30,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Abolition esclavage",
    question: "RW4gcXVlbGxlIGFubsOpZSBsJ2VzY2xhdmFnZSBhLXQtaWwgw6l0w6kgZMOpZmluaXRpdmVtZW50IGFib2xpIGRhbnMgbGVzIGNvbG9uaWVzIGZyYW7Dp2Fpc2VzID8=",
    options: [
      "RW4gMTg0OCwgcGFyIGTDqWNyZXQgZGUgVmljdG9yIFNjaMWTbGNoZXIgc291cyBsYSBEZXV4acOobWUgUsOpcHVibGlxdWUsIGFwcsOocyB1bmUgcHJlbWnDqHJlIGFib2xpdGlvbiBlbiAxNzk0",
      "RW4gMTc4OSwgZMOocyBsZSBkw6lidXQgZGUgbGEgUsOpdm9sdXRpb24gZnJhbsOnYWlzZSBwcm9jbGFtYW50IGxhIGxpYmVydMOpIGV0IGwnw6lnYWxpdMOpIGRlIHRvdXM=",
      "RW4gMTgxNSwgbG9ycyBkdSByZXRvdXIgZGUgbGEgbW9uYXJjaGllIGFwcsOocyBsYSBjaHV0ZSBkZSBOYXBvbMOpb24gQm9uYXBhcnRl",
      "RW4gMTg3MCwgYXZlYyBsYSBwcm9jbGFtYXRpb24gZGUgbGEgVHJvaXNpw6htZSBSw6lwdWJsaXF1ZSBldCBsYSBmaW4gZHUgU2Vjb25kIEVtcGlyZQ=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 30, 0),
    explication: "TCdlc2NsYXZhZ2UgYSDDqXTDqSBkw6lmaW5pdGl2ZW1lbnQgYWJvbGkgZW4gMTg0OCBwYXIgVmljdG9yIFNjaMWTbGNoZXIuIFVuZSBwcmVtacOocmUgYWJvbGl0aW9uIGVuIDE3OTQgYXZhaXQgw6l0w6kgYW5udWzDqWUgcGFyIE5hcG9sw6lvbiBlbiAxODAyLg=="},
  {
    id: 31,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Front populaire",
    question: "UXVlbGxlcyBhdmFuY8OpZXMgc29jaWFsZXMgbWFqZXVyZXMgc29udCBhc3NvY2nDqWVzIGF1IEZyb250IHBvcHVsYWlyZSBkZSAxOTM2ID8=",
    options: [
      "TGVzIGNvbmfDqXMgcGF5w6lzICgyIHNlbWFpbmVzKSwgbGEgc2VtYWluZSBkZSA0MCBoZXVyZXMgZXQgbGVzIGNvbnZlbnRpb25zIGNvbGxlY3RpdmVzIGVudHJlIHBhdHJvbmF0IGV0IHN5bmRpY2F0cw==",
      "TGEgY3LDqWF0aW9uIGRlIGxhIFPDqWN1cml0w6kgc29jaWFsZSwgbGUgc2FsYWlyZSBtaW5pbXVtIGludGVycHJvZmVzc2lvbm5lbCBldCBsJ2Fzc3VyYW5jZSBjaMO0bWFnZQ==",
      "TGUgZHJvaXQgZGUgdm90ZSBkZXMgZmVtbWVzLCBsJ2Fib2xpdGlvbiBkZSBsYSBwZWluZSBkZSBtb3J0IGV0IGxhIGzDqWdhbGlzYXRpb24gZHUgZGl2b3JjZQ==",
      "TGEgbmF0aW9uYWxpc2F0aW9uIGRlcyBncmFuZGVzIGVudHJlcHJpc2VzLCBsYSBjcsOpYXRpb24gZGUgbCdpbXDDtHQgc3VyIGxlIHJldmVudSBldCBsJ8OpY29sZSBsYcOvcXVl"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 31, 0),
    explication: "TGUgRnJvbnQgcG9wdWxhaXJlICgxOTM2KSBhIGluc3RhdXLDqSBsZXMgY29uZ8OpcyBwYXnDqXMgKDIgc2VtYWluZXMpLCBsYSBzZW1haW5lIGRlIDQwIGhldXJlcyBldCBsZXMgY29udmVudGlvbnMgY29sbGVjdGl2ZXMuIERlcyBhdmFuY8OpZXMgc29jaWFsZXMgbWFqZXVyZXMu"},
  {
    id: 32,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Mont-Blanc",
    question: "UXVlbCBlc3QgbGUgcGx1cyBoYXV0IHNvbW1ldCBkZSBGcmFuY2UgZXQgZGVzIEFscGVzIGV0IHF1ZWxsZSBlc3Qgc29uIGFsdGl0dWRlID8=",
    options: [
      "TGUgTW9udC1CbGFuYyBjdWxtaW5hbnQgw6AgNCA4MDcgbcOodHJlcywgcGx1cyBoYXV0IHNvbW1ldCBkJ0V1cm9wZSBvY2NpZGVudGFsZSDDoCBsYSBmcm9udGnDqHJlIGZyYW5jby1pdGFsaWVubmU=",
      "TGUgTW9udCBWZW50b3V4IGN1bG1pbmFudCDDoCAxIDkxMiBtw6h0cmVzLCBjw6lsw6hicmUgc29tbWV0IGR1IFRvdXIgZGUgRnJhbmNlIGN5Y2xpc3Rl",
      "TGUgUHV5IGRlIETDtG1lIGN1bG1pbmFudCDDoCAxIDQ2NSBtw6h0cmVzLCB2b2xjYW4gZW1ibMOpbWF0aXF1ZSBkdSBNYXNzaWYgY2VudHJhbCBmcmFuw6dhaXM=",
      "TGUgUGljIGR1IE1pZGkgZGUgQmlnb3JyZSBjdWxtaW5hbnQgw6AgMiA4NzcgbcOodHJlcywgb2JzZXJ2YXRvaXJlIGFzdHJvbm9taXF1ZSBkYW5zIGxlcyBQeXLDqW7DqWVz"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 32, 0),
    explication: "TGUgTW9udC1CbGFuYyBjdWxtaW5lIMOgIDQgODA3IG3DqHRyZXMuIEMnZXN0IGxlIHBsdXMgaGF1dCBzb21tZXQgZGUgRnJhbmNlLCBkZXMgQWxwZXMgZXQgZCdFdXJvcGUgb2NjaWRlbnRhbGUsIHNpdHXDqSDDoCBsYSBmcm9udGnDqHJlIGZyYW5jby1pdGFsaWVubmUu"},
  {
    id: 33,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Guyane",
    question: "UXVlbGxlIHBhcnRpY3VsYXJpdMOpIGfDqW9ncmFwaGlxdWUgZGlzdGluZ3VlIGxhIEd1eWFuZSBkZXMgYXV0cmVzIGTDqXBhcnRlbWVudHMgZnJhbsOnYWlzID8=",
    options: [
      "Qydlc3QgbGUgcGx1cyBncmFuZCBkw6lwYXJ0ZW1lbnQgZnJhbsOnYWlzIHBhciBzYSBzdXBlcmZpY2llIGV0IGxlIHNldWwgc2l0dcOpIHN1ciBsZSBjb250aW5lbnQgc3VkLWFtw6lyaWNhaW4=",
      "Qydlc3QgbGUgZMOpcGFydGVtZW50IGxlIHBsdXMgcGV1cGzDqSBkZSBGcmFuY2UgZCdvdXRyZS1tZXIgYXZlYyBwbHVzIGQndW4gbWlsbGlvbiBkJ2hhYml0YW50cw==",
      "Qydlc3QgbGUgc2V1bCB0ZXJyaXRvaXJlIGZyYW7Dp2FpcyBzaXR1w6kgZGFucyBsJ2jDqW1pc3Bow6hyZSBzdWQgYXUtZGVsw6AgZGUgbCfDqXF1YXRldXIgdGVycmVzdHJl",
      "Qydlc3QgdW5lIMOubGUgdm9sY2FuaXF1ZSBhY3RpdmUgYXZlYyBsZSBzZXVsIHZvbGNhbiBlbiDDqXJ1cHRpb24gZHUgdGVycml0b2lyZSBmcmFuw6dhaXM="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 33, 0),
    explication: "TGEgR3V5YW5lIGVzdCBsZSBwbHVzIGdyYW5kIGTDqXBhcnRlbWVudCBmcmFuw6dhaXMgKGVudmlyb24gODQgMDAwIGttwrIpIGV0IGxlIHNldWwgc2l0dcOpIHN1ciBsZSBjb250aW5lbnQgYW3DqXJpY2Fpbi4gRWxsZSBhYnJpdGUgbGUgQ2VudHJlIHNwYXRpYWwgZ3V5YW5haXMu"},
  {
    id: 34,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Victor Hugo",
    question: "VmljdG9yIEh1Z28gZXN0IGwnYXV0ZXVyIGRlIGRldXggcm9tYW5zIG1hamV1cnMgZGUgbGEgbGl0dMOpcmF0dXJlIGZyYW7Dp2Fpc2UuIExlc3F1ZWxzID8=",
    options: [
      "TGVzIE1pc8OpcmFibGVzIGV0IE5vdHJlLURhbWUgZGUgUGFyaXMsIGNoZWZzLWQnxZN1dnJlIGR1IHJvbWFudGlzbWUgZnJhbsOnYWlzIGR1IFhJWGUgc2nDqGNsZQ==",
      "TWFkYW1lIEJvdmFyeSBldCBMJ8OJZHVjYXRpb24gc2VudGltZW50YWxlLCByb21hbnMgcsOpYWxpc3RlcyBkw6ljcml2YW50IGxhIHNvY2nDqXTDqSBwcm92aW5jaWFsZQ==",
      "R2VybWluYWwgZXQgTCdBc3NvbW1vaXIsIMWTdXZyZXMgbmF0dXJhbGlzdGVzIGTDqXBlaWduYW50IGxhIGNvbmRpdGlvbiBvdXZyacOocmUgc291cyBsZSBTZWNvbmQgRW1waXJl",
      "TGUgUm91Z2UgZXQgbGUgTm9pciBldCBMYSBDaGFydHJldXNlIGRlIFBhcm1lLCByb21hbnMgZCdhbmFseXNlIHBzeWNob2xvZ2lxdWUgZXQgc29jaWFsZQ=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 34, 0),
    explication: "VmljdG9yIEh1Z28gKDE4MDItMTg4NSkgYSDDqWNyaXQgTGVzIE1pc8OpcmFibGVzIGV0IE5vdHJlLURhbWUgZGUgUGFyaXMuIFBvw6h0ZSwgcm9tYW5jaWVyIGV0IGhvbW1lIHBvbGl0aXF1ZSBlbmdhZ8OpLCBpbCByZXBvc2UgYXUgUGFudGjDqW9uLg=="},
  {
    id: 35,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Impressionnisme",
    question: "UXVlbCBtb3V2ZW1lbnQgcGljdHVyYWwgbsOpIGVuIEZyYW5jZSBhdSBYSVhlIHNpw6hjbGUgYSByw6l2b2x1dGlvbm7DqSBsJ2FydCBvY2NpZGVudGFsID8=",
    options: [
      "TCdpbXByZXNzaW9ubmlzbWUsIGF2ZWMgZGVzIHBlaW50cmVzIGNvbW1lIE1vbmV0LCBSZW5vaXIgZXQgRGVnYXMgcHJpdmlsw6lnaWFudCBsYSBsdW1pw6hyZSBldCBsJ2luc3RhbnQ=",
      "TGUgY3ViaXNtZSwgYXZlYyBQaWNhc3NvIGV0IEJyYXF1ZSBkw6ljb21wb3NhbnQgbGVzIGZvcm1lcyBlbiBmaWd1cmVzIGfDqW9tw6l0cmlxdWVzIGFic3RyYWl0ZXM=",
      "TGUgc3VycsOpYWxpc21lLCBleHBsb3JhbnQgbCdpbmNvbnNjaWVudCBldCBsZSByw6p2ZSBhdmVjIERhbMOtIGV0IE1hZ3JpdHRlIGF1IFhYZSBzacOoY2xl",
      "TGUgZmF1dmlzbWUsIGNhcmFjdMOpcmlzw6kgcGFyIGwndXRpbGlzYXRpb24gZGUgY291bGV1cnMgdml2ZXMgZXQgcHVyZXMgYXZlYyBNYXRpc3NlIGV0IERlcmFpbg=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 35, 0),
    explication: "TCdpbXByZXNzaW9ubmlzbWUgZXN0IG7DqSBlbiBGcmFuY2UgdmVycyAxODYwLTE4NzAuIE1vbmV0LCBSZW5vaXIsIERlZ2FzLCBQaXNzYXJybywgU2lzbGV5IG9udCByw6l2b2x1dGlvbm7DqSBsYSBwZWludHVyZSBlbiBwcml2aWzDqWdpYW50IGxhIGx1bWnDqHJlIGV0IGwnaW5zdGFudC4="},
  {
    id: 36,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Gastronomie UNESCO",
    question: "RGVwdWlzIHF1YW5kIGV0IHBvdXJxdW9pIGxlIHJlcGFzIGdhc3Ryb25vbWlxdWUgZGVzIEZyYW7Dp2FpcyBlc3QtaWwgaW5zY3JpdCDDoCBsJ1VORVNDTyA/",
    options: [
      "RGVwdWlzIDIwMTAsIHJlY29ubnUgY29tbWUgcGF0cmltb2luZSBjdWx0dXJlbCBpbW1hdMOpcmllbCBkZSBsJ2h1bWFuaXTDqSBwb3VyIHNlcyByaXR1ZWxzIGV0IHNhIGNvbnZpdmlhbGl0w6k=",
      "RGVwdWlzIDE5ODAsIGluc2NyaXQgYXUgcGF0cmltb2luZSBtb25kaWFsIHBvdXIgbGEgcXVhbGl0w6kgZXhjZXB0aW9ubmVsbGUgZGVzIHByb2R1aXRzIGR1IHRlcnJvaXI=",
      "RGVwdWlzIDIwMDAsIGPDqWzDqWJyw6kgcG91ciBsJ2V4Y2VsbGVuY2UgZGVzIGNoZWZzIMOpdG9pbMOpcyBmcmFuw6dhaXMgZXQgbGV1ciByYXlvbm5lbWVudCBpbnRlcm5hdGlvbmFs",
      "RGVwdWlzIDE5NTAsIHByb3TDqWfDqSBjb21tZSBwYXRyaW1vaW5lIG5hdGlvbmFsIGZyYW7Dp2FpcyBzYW5zIHJlY29ubmFpc3NhbmNlIGludGVybmF0aW9uYWxlIG9mZmljaWVsbGU="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 36, 0),
    explication: "TGUgcmVwYXMgZ2FzdHJvbm9taXF1ZSBkZXMgRnJhbsOnYWlzIGVzdCBpbnNjcml0IGF1IHBhdHJpbW9pbmUgY3VsdHVyZWwgaW1tYXTDqXJpZWwgZGUgbCdVTkVTQ08gZGVwdWlzIDIwMTAuIEMnZXN0IHVuIGFydCBkZSB2aXZyZSBsacOpIGF1eCBjw6lsw6licmF0aW9ucy4="},

  // ==================== 5. VIVRE DANS LA SOCIÉTÉ FRANÇAISE (4 questions) ====================
  
  {
    id: 37,
    categorie: "Vivre dans la société française",
    sousCategorie: "CMU-C ACS",
    question: "UXUnZXN0LWNlIHF1ZSBsYSBDb21wbMOpbWVudGFpcmUgU2FudMOpIFNvbGlkYWlyZSAoZXgtQ01VLUMpIGV0IMOgIHF1aSBzJ2FkcmVzc2UtdC1lbGxlID8=",
    options: [
      "VW5lIGFpZGUgcGVybWV0dGFudCBhdXggcGVyc29ubmVzIMOgIGZhaWJsZXMgcmV2ZW51cyBkZSBiw6luw6lmaWNpZXIgZCd1bmUgY29tcGzDqW1lbnRhaXJlIHNhbnTDqSBncmF0dWl0ZSBvdSDDoCBtb2luZHJlIGNvw7t0",
      "VW5lIGFzc3VyYW5jZSBvYmxpZ2F0b2lyZSBwb3VyIHRvdXMgbGVzIHNhbGFyacOpcyBzb3VzY3JpdGUgcGFyIGxldXIgZW1wbG95ZXVyIGF1cHLDqHMgZCd1bmUgbXV0dWVsbGU=",
      "VW4gcmVtYm91cnNlbWVudCBzdXBwbMOpbWVudGFpcmUgZGUgbGEgU8OpY3VyaXTDqSBzb2NpYWxlIHBvdXIgbGVzIG1hbGFkaWVzIGdyYXZlcyBldCBjaHJvbmlxdWVz",
      "VW5lIGNhcnRlIGRvbm5hbnQgYWNjw6hzIGdyYXR1aXQgYXV4IGjDtHBpdGF1eCBwdWJsaWNzIHNhbnMgY29uZGl0aW9uIGRlIHJlc3NvdXJjZXMgbmkgZGUgcmV2ZW51cw=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 37, 0),
    explication: "TGEgQ29tcGzDqW1lbnRhaXJlIFNhbnTDqSBTb2xpZGFpcmUgcGVybWV0IGF1eCBwZXJzb25uZXMgw6AgZmFpYmxlcyByZXZlbnVzIGRlIGLDqW7DqWZpY2llciBkJ3VuZSBjb21wbMOpbWVudGFpcmUgc2FudMOpIGdyYXR1aXRlIG91IMOgIG1vaW5zIGQndW4gZXVybyBwYXIgam91ci4="},
  {
    id: 38,
    categorie: "Vivre dans la société française",
    sousCategorie: "Carte grise",
    question: "UXVlbCBkb2N1bWVudCBlc3Qgb2JsaWdhdG9pcmUgcG91ciBwb3V2b2lyIGNpcmN1bGVyIGF2ZWMgdW4gdsOpaGljdWxlIGVuIEZyYW5jZSA/",
    options: [
      "TGUgY2VydGlmaWNhdCBkJ2ltbWF0cmljdWxhdGlvbiAoY2FydGUgZ3Jpc2UpLCBxdWkgZG9pdCBjb3JyZXNwb25kcmUgYXUgdsOpaGljdWxlIGV0IMOqdHJlIMOgIGpvdXIgZGUgbCdhZHJlc3Nl",
      "VW4gc2ltcGxlIGp1c3RpZmljYXRpZiBkJ2Fzc3VyYW5jZSBzdWZmaXQsIGxlIGNlcnRpZmljYXQgZCdpbW1hdHJpY3VsYXRpb24gw6l0YW50IGZhY3VsdGF0aWY=",
      "TGUgcGVybWlzIGRlIGNvbmR1aXJlIGR1IHByb3ByacOpdGFpcmUgZHUgdsOpaGljdWxlIGVzdCBsZSBzZXVsIGRvY3VtZW50IG9ibGlnYXRvaXJlIMOgIHByw6lzZW50ZXI=",
      "QXVjdW4gZG9jdW1lbnQgbidlc3QgcmVxdWlzIHNpIGxlIHbDqWhpY3VsZSBhIMOpdMOpIGFjaGV0w6kgZCdvY2Nhc2lvbiBkZXB1aXMgbW9pbnMgZCd1biBhbg=="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 38, 0),
    explication: "TGUgY2VydGlmaWNhdCBkJ2ltbWF0cmljdWxhdGlvbiAoY2FydGUgZ3Jpc2UpIGVzdCBvYmxpZ2F0b2lyZSBwb3VyIGNpcmN1bGVyLiBJbCBkb2l0IMOqdHJlIMOgIGpvdXIgKGFkcmVzc2UsIHByb3ByacOpdGFpcmUpIGV0IHByw6lzZW50w6kgZW4gY2FzIGRlIGNvbnRyw7RsZS4="},
  {
    id: 39,
    categorie: "Vivre dans la société française",
    sousCategorie: "SMIC",
    question: "UXUnZXN0LWNlIHF1ZSBsZSBTTUlDIGV0IGNvbW1lbnQgc29uIG1vbnRhbnQgZXN0LWlsIGTDqXRlcm1pbsOpID8=",
    options: [
      "TGUgU2FsYWlyZSBNaW5pbXVtIEludGVycHJvZmVzc2lvbm5lbCBkZSBDcm9pc3NhbmNlLCByw6nDqXZhbHXDqSBhdSBtb2lucyB1bmUgZm9pcyBwYXIgYW4gcGFyIGxlIGdvdXZlcm5lbWVudA==",
      "VW4gc2FsYWlyZSBkZSByw6lmw6lyZW5jZSBpbmRpY2F0aWYgc2FucyB2YWxldXIgb2JsaWdhdG9pcmUgcG91ciBsZXMgZW1wbG95ZXVycyBkdSBzZWN0ZXVyIHByaXbDqQ==",
      "TGUgc2FsYWlyZSBtb3llbiBkZXMgRnJhbsOnYWlzLCBjYWxjdWzDqSBwYXIgbCdJTlNFRSBjaGFxdWUgYW5uw6llIHBvdXIgbGVzIHN0YXRpc3RpcXVlcyBuYXRpb25hbGVz",
      "VW5lIHByaW1lIGV4Y2VwdGlvbm5lbGxlIHZlcnPDqWUgcGFyIGwnw4l0YXQgYXV4IHRyYXZhaWxsZXVycyBsZXMgbW9pbnMgYmllbiByw6ltdW7DqXLDqXM="
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 39, 0),
    explication: "TGUgU01JQyAoU2FsYWlyZSBNaW5pbXVtIEludGVycHJvZmVzc2lvbm5lbCBkZSBDcm9pc3NhbmNlKSBlc3QgbGUgc2FsYWlyZSBob3JhaXJlIG1pbmltdW0gbMOpZ2FsLiBJbCBlc3QgcsOpw6l2YWx1w6kgYXUgbW9pbnMgdW5lIGZvaXMgcGFyIGFuIHBhciBsZSBnb3V2ZXJuZW1lbnQu"},
  {
    id: 40,
    categorie: "Vivre dans la société française",
    sousCategorie: "Taxe d'habitation",
    question: "TGEgdGF4ZSBkJ2hhYml0YXRpb24gc3VyIGxlcyByw6lzaWRlbmNlcyBwcmluY2lwYWxlcyBleGlzdGUtdC1lbGxlIGVuY29yZSBlbiBGcmFuY2UgPw==",
    options: [
      "Tm9uLCBlbGxlIGEgw6l0w6kgcHJvZ3Jlc3NpdmVtZW50IHN1cHByaW3DqWUgZXQgZXN0IHRvdGFsZW1lbnQgYWJvbGllIHBvdXIgbGVzIHLDqXNpZGVuY2VzIHByaW5jaXBhbGVzIGRlcHVpcyAyMDIz",
      "T3VpLCBlbGxlIHJlc3RlIGR1ZSBwYXIgdG91cyBsZXMgb2NjdXBhbnRzIGQndW4gbG9nZW1lbnQgYXUgMWVyIGphbnZpZXIgZGUgY2hhcXVlIGFubsOpZQ==",
      "Tm9uLCBlbGxlIGEgw6l0w6kgcmVtcGxhY8OpZSBwYXIgdW5lIHRheGUgc3VyIGxlcyBsb3llcnMgcGF5w6llIHVuaXF1ZW1lbnQgcGFyIGxlcyBwcm9wcmnDqXRhaXJlcyBiYWlsbGV1cnM=",
      "T3VpLCBtYWlzIHVuaXF1ZW1lbnQgcG91ciBsZXMgbcOpbmFnZXMgZG9udCBsZXMgcmV2ZW51cyBkw6lwYXNzZW50IHVuIGNlcnRhaW4gc2V1aWwgZmlzY2Fs"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 40, 0),
    explication: "TGEgdGF4ZSBkJ2hhYml0YXRpb24gc3VyIGxlcyByw6lzaWRlbmNlcyBwcmluY2lwYWxlcyBhIMOpdMOpIHN1cHByaW3DqWUgcHJvZ3Jlc3NpdmVtZW50IGV0IGVzdCB0b3RhbGVtZW50IGFib2xpZSBkZXB1aXMgMjAyMy4gRWxsZSByZXN0ZSBkdWUgcG91ciBsZXMgcsOpc2lkZW5jZXMgc2Vjb25kYWlyZXMu"}
];

// Fonction pour vérifier une réponse
export function verifyAnswerExam5(questionId: number, userAnswerIndex: number, correctHash: string): boolean {
  return hashAnswer(EXAM_NUMBER, questionId, userAnswerIndex) === correctHash;
}

// Fonction pour trouver l'index correct à partir du hash
export function findCorrectIndexExam5(questionId: number, correctHash: string): number {
  for (let i = 0; i < 4; i++) {
    if (hashAnswer(EXAM_NUMBER, questionId, i) === correctHash) {
      return i;
    }
  }
  return 0;
}

// Examen avec questions décodées pour l'affichage
const _EXAMEN_5: ExamenBlanc = {
  numero: 5,
  titre: "Examen blanc #5",
  description: "40 questions en conditions réelles d'examen",
  questions: questions,
  dureeMinutes: 45,
  totalQuestions: 40
};

export const EXAMEN_5 = decodeExamen(_EXAMEN_5);
