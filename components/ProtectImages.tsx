"use client";

import { useEffect } from "react";

function isImageTarget(target: EventTarget | null): boolean {
  if (!(target instanceof Element)) return false;
  return Boolean(target.closest("img, picture, [data-protect-image]"));
}

/** Dissuade le clic droit, le glisser-déposer et l’enregistrement rapide des images. */
export default function ProtectImages() {
  useEffect(() => {
    const onContextMenu = (event: MouseEvent) => {
      if (isImageTarget(event.target)) event.preventDefault();
    };

    const onDragStart = (event: DragEvent) => {
      if (isImageTarget(event.target)) event.preventDefault();
    };

    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("dragstart", onDragStart);

    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("dragstart", onDragStart);
    };
  }, []);

  return null;
}
