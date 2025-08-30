import Header from "@/components/layouts/admin/header";

export default function AdminLayout({ children }) {
  return (
    <div className='max-w-[800px] mx-auto'>
      <div className='container'>
        <Header />
        {children}
      </div>
    </div>
  );
}
