import HeaderComponent from "@/components/layouts/header";
import FooterComponent from "@/components/layouts/footer";
import SocialLink from "@/components/social-link";
import Loading from "@/components/common/loading";

export default function ClientLayout({ children }) {
  return (
    <>
      <HeaderComponent />
      {children}
      <FooterComponent />
      <SocialLink />
      <Loading />
    </>
  );
}
