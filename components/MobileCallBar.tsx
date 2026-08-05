import { company } from "@/lib/company";

export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border/80 bg-white/95 p-3 shadow-[0_-10px_30px_rgba(1,82,145,0.12)] backdrop-blur md:hidden">
      <a
        href={company.driverPhoneHref}
        className="btn-primary w-full text-base"
        aria-label={`Appeler pour réserver au ${company.driverPhoneDisplay}`}
      >
        Appeler pour réserver · {company.driverPhoneDisplay}
      </a>
    </div>
  );
}
