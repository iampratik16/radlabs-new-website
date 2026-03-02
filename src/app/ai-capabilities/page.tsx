import { PageHeader } from "@/components/ui/PageHeader";
import { AICapabilities } from "@/components/home/AICapabilities";
import { CTASection } from "@/components/home/CTASection";

export default function AICapabilitiesPage() {
    return (
        <>
            <PageHeader
                title="Our AI Capabilities"
                subtitle="Engineering robust systems for the age of automation. We architect custom layers of logic that ground intelligence in your enterprise reality."
            />
            <div className="pt-8">
                <AICapabilities />
            </div>
            <CTASection />
        </>
    );
}
