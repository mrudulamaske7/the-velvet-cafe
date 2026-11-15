import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  tilt?: number;
  tape?: boolean;
  className?: string;
  imgClassName?: string;
};

/** Real cafe photos shown as taped-up prints. */
export function Polaroid({ src, alt, caption, tilt = 0, tape = true, className, imgClassName }: Props) {
  return (
    <figure className={cn("polaroid hover:z-10 hover:scale-[1.03]", className)} style={{ rotate: `${tilt}deg` }}>
      {tape && <span className="tape" />}
      <img src={src} alt={alt} loading="lazy" className={cn("block w-full object-cover", imgClassName)} />
      {caption && (
        <figcaption className="pt-1.5 text-center font-hand text-xl leading-tight text-ink">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
