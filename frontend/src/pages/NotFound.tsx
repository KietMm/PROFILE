import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Panel } from "@/components/site/Panel";
import { useLang } from "@/i18n";

export default function NotFound() {
  const { c } = useLang();
  const { pathname } = useLocation();

  return (
    <div className="mx-auto max-w-xl py-16">
      <Panel id="404" meta="no match">
        <div className="space-y-5">
          <p className="font-mono text-sm text-attention">{pathname}</p>
          <h1 className="text-2xl font-extrabold uppercase tracking-[-0.02em]">
            {c("notFoundCode")}
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
            {c("notFoundBody")}
          </p>
          <Button asChild variant="outline" className="font-mono text-xs">
            <Link to="/">
              <ArrowLeft className="size-4" />
              {c("backHome")}
            </Link>
          </Button>
        </div>
      </Panel>
    </div>
  );
}
