import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Header({
  handleDownload,
  exporting,
}: Readonly<{ handleDownload: () => Promise<void>; exporting: boolean }>) {
  return (
    <div className='flex items-center justify-between mb-8 max-sm:flex-col gap-8'>
      <div className='flex items-center'>
        <div>
          <h1 className='text-3xl font-bold text-foreground'>
            Resume Analysis
          </h1>
          <p className='text-muted-foreground'>
            Detailed AI-powered review results
          </p>
        </div>
      </div>
      <Button
        onClick={() => handleDownload()}
        size={"lg"}
        className='max-sm:w-full'
        disabled={exporting}
      >
        <Download className='w-4 h-4 mr-2 ' />
        {exporting ? "Exporting..." : "Export to PDF"}
      </Button>
    </div>
  );
}
