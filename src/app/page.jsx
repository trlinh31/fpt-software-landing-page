import BannerSlideComponent from "@/components/banner-slide";
import ProposalPackageComponent from "@/components/proposal-package";

export default function Home() {
  return (
    <>
      <div className='space-y-16'>
        <BannerSlideComponent />
        <ProposalPackageComponent />
      </div>
    </>
  );
}
