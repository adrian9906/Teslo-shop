import LandigNavbar from "@/components/navbar/landing-nav"
import MainNavbar from "@/components/navbar/main-navbar"

interface FrontPageLayoutProps {
  children: React.ReactNode
}

export default async function FrontPageLayout({
  children
}: FrontPageLayoutProps) {
  return (
    <>
    <div >
          <LandigNavbar/>
          {/* <nav> */}
            {/* <ThemeToggle /> */}
          {/* </nav> */}
        </div>
      <main className='flex-1'>{children}</main>
    </>
  )
}
