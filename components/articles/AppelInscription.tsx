"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import { suivre } from "@/lib/mesure";

/** Les cinq emplacements d'un article. Chacun se mesure à part. */
export type EmplacementAppel = "haut" | "milieu" | "colonne" | "fin" | "barre";

/** L'adresse d'un appel : l'inscription gratuite, avec la campagne de l'article. */
export function adresseAppel(slug: string, emplacement: EmplacementAppel): string {
  return `/signup?c=${slug}&m=blog&e=${emplacement}`;
}

/**
 * Un appel d'article : le seul bouton par lequel ils passent tous.
 *
 * C'est un vrai lien vers `/signup?c=<slug>&m=blog&e=<emplacement>` : avant
 * l'hydratation, et pour qui n'exécute pas de JavaScript, le clic suit
 * l'adresse. La page d'inscription relit la campagne et l'emplacement et les
 * joint à `signup_completed` (`lib/mesure.ts`, `campagneDeLAdresse`).
 *
 * Chaque clic envoie `cta_clic` `{ source: '<slug>-<emplacement>',
 * destination: 'inscription', slug, emplacement }`, les mêmes noms que Cosme
 * Check, MemoryPilot et RevealChat : le robot lit les quatre sites avec les
 * mêmes requêtes. L'événement part par balise (`sendBeacon`), seul transport
 * qui survit à la navigation.
 */
export function AppelInscription({
  slug,
  emplacement,
  className,
  children,
}: {
  slug: string;
  emplacement: EmplacementAppel;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={adresseAppel(slug, emplacement)}
      className={className}
      data-appel={emplacement}
      rel="nofollow"
      onClick={() =>
        suivre(
          "cta_clic",
          { source: `${slug}-${emplacement}`, destination: "inscription", slug, emplacement },
          true,
        )
      }
    >
      {children}
    </Link>
  );
}
