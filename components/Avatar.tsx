"use client";
import { createAvatar } from "@dicebear/core";
import { initials } from "@dicebear/collection";
import Image from "next/image";

function Avatar({ seed }: { seed: string }) {
  const avatar = createAvatar(initials, {
    seed,
    radius: 50,
  });
  const svg = avatar.toString();

  const dataUrl = `data:image/svg+xml,${encodeURIComponent(svg)}`;
  return <Image src={dataUrl} alt={`${seed} avatar`} width={40} height={40} />;
}

export default Avatar;
