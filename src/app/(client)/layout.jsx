import HeaderComponent from "@/components/layouts/header";
import FooterComponent from "@/components/layouts/footer";
import SocialLink from "@/components/social-link";
import Loading from "@/components/common/loading";
import ContactModal from "@/components/contact-modal";

export default function ClientLayout({ children }) {
  return (
    <>
      <HeaderComponent />
      {children}
      <FooterComponent />
      <SocialLink />
      <ContactModal />
      <Loading />
    </>
  );
}
