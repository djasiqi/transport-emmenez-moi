import { company } from "@/lib/company";

export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] md:hidden">
      <a
        href={company.driverPhoneHref}
        className="btn-primary w-full text-base"
        aria-label={`Appeler pour réserver au ${company.driverPhoneDisplay}`}
      >
        Appeler pour réserver
      </a>
    </div>
  );
}
