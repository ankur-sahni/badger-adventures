import { omPrakash, rahulNegi } from "@/data/founders";

export function EnquiryTrustLine() {
  return (
    <p className="mt-5 max-w-md border-l border-slate pl-4 text-[15px] leading-relaxed text-ice">
      Every trip is planned by our founders, {omPrakash.name}, a mountaineering instructor trained at ABVIMAS
      Manali and NIM Uttarkashi, and {rahulNegi.name}, who holds a master&apos;s in tourism. Our certified guides lead the groups on the trail.
    </p>
  );
}
