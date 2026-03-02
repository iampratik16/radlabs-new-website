import { PageHeader } from "@/components/ui/PageHeader";
import { Industries } from "@/components/home/Industries";
import { CTASection } from "@/components/home/CTASection";

export default function IndustriesPage() {
    return (
        <>
            <PageHeader
                title="Industries We Serve"
                subtitle="Transforming sectors through intelligent automation, rigorous technical execution, and outcome-oriented systemic thinking."
            />
            <div className="pt-8">
                <Industries />
            </div>
            <CTASection />
        </>
    );
}
