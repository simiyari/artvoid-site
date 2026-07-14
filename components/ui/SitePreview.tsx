import { cn } from "@/lib/cn";

/**
 * پیش‌نمایش انتزاعی مونوکروم سایت‌ها در قاب مرورگر — تماماً CSS، هماهنگ با هر دو تم.
 * تا رسیدن اسکرین‌شات واقعی پروژه‌ها (تصمیم باز در PROGRESS.md) جایگزین موقت و برند-سازگار است.
 */
export type SitePreviewVariant = "ganjriz" | "idi";

function BrowserChrome({ children }: { children: React.ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden rounded-t-md border border-b-0 border-gray-soft bg-white"
    >
      {/* نوار مرورگر */}
      <div className="flex items-center gap-3 border-b border-gray-soft bg-mist px-4 py-2.5">
        <span className="flex gap-1.5">
          <span className="size-2 rounded-full bg-gray-soft" />
          <span className="size-2 rounded-full bg-gray-soft" />
          <span className="size-2 rounded-full bg-gray-soft" />
        </span>
        <span className="h-4 w-32 rounded-sm border border-gray-soft bg-white" />
      </div>
      {children}
    </div>
  );
}

function GanjrizBody() {
  return (
    <div className="flex flex-col gap-3 p-4">
      {/* ناوبری */}
      <div className="flex items-center justify-between">
        <span className="size-3 rounded-full bg-ink" />
        <span className="flex gap-2">
          <span className="h-2 w-8 rounded-sm bg-gray-soft" />
          <span className="h-2 w-8 rounded-sm bg-gray-soft" />
          <span className="h-2 w-8 rounded-sm bg-gray-soft" />
        </span>
      </div>
      {/* نوار قیمت لحظه‌ای طلا */}
      <div className="flex items-center gap-2 rounded-sm bg-ink px-3 py-2">
        <span className="h-2 w-12 rounded-sm bg-paper/70" />
        <span className="h-2 w-8 rounded-sm bg-paper/40" />
        <span className="ms-auto h-2 w-10 rounded-sm bg-paper/40" />
      </div>
      {/* هیرو */}
      <div className="flex items-center gap-3">
        <div className="flex flex-1 flex-col gap-2">
          <span className="h-3 w-3/4 rounded-sm bg-gray-strong" />
          <span className="h-2 w-1/2 rounded-sm bg-gray-soft" />
          <span className="mt-1 h-4 w-16 rounded-sm bg-ink" />
        </div>
        <div className="aspect-square w-1/3 rounded-sm border border-gray-soft bg-mist" />
      </div>
      {/* گرید محصولات */}
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex flex-col gap-1.5">
            <div className="aspect-square rounded-sm border border-gray-soft bg-mist" />
            <span className="h-1.5 w-2/3 rounded-sm bg-gray-soft" />
          </div>
        ))}
      </div>
    </div>
  );
}

function IdiBody() {
  return (
    <div className="flex flex-col gap-3 p-4">
      {/* ناوبری */}
      <div className="flex items-center justify-between">
        <span className="size-3 rounded-full bg-ink" />
        <span className="flex gap-2">
          <span className="h-2 w-8 rounded-sm bg-gray-soft" />
          <span className="h-2 w-8 rounded-sm bg-gray-soft" />
          <span className="h-2 w-8 rounded-sm bg-gray-soft" />
          <span className="h-2 w-8 rounded-sm bg-gray-soft" />
        </span>
      </div>
      {/* هیروی وسط‌چین سازمانی */}
      <div className="flex flex-col items-center gap-2 py-3">
        <span className="h-3 w-2/3 rounded-sm bg-gray-strong" />
        <span className="h-2 w-1/2 rounded-sm bg-gray-soft" />
        <span className="mt-1 h-4 w-16 rounded-sm bg-ink" />
      </div>
      {/* دو ستون محتوا */}
      <div className="grid grid-cols-2 gap-2">
        {[0, 1].map((i) => (
          <div key={i} className="flex flex-col gap-1.5 rounded-sm border border-gray-soft bg-mist p-2.5">
            <span className="h-2 w-1/2 rounded-sm bg-gray-strong" />
            <span className="h-1.5 w-full rounded-sm bg-gray-soft" />
            <span className="h-1.5 w-3/4 rounded-sm bg-gray-soft" />
          </div>
        ))}
      </div>
      {/* خط فوتر */}
      <span className="h-2 w-1/3 rounded-sm bg-gray-soft" />
    </div>
  );
}

export default function SitePreview({
  variant,
  className,
}: {
  variant: SitePreviewVariant;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-96", className)}>
      <BrowserChrome>{variant === "ganjriz" ? <GanjrizBody /> : <IdiBody />}</BrowserChrome>
    </div>
  );
}
