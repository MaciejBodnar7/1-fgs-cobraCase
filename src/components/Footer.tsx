import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"

const Footer = () => {
  return (
    <footer className="relative h-28 bg-white">
      <MaxWidthWrapper>
        <div className="border-t border-gray-200" />

        <div className="h-full flex flex-col md:flex-row md:justify-between justify-center items-center">
          <div className="text-center md:text-left pb-4 md:pb-0">
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex space-x-6">
              <Link className="text-sm text-muted-foreground hover:text-gray-600" href="#">
                Terms
              </Link>
              <Link className="text-sm text-muted-foreground hover:text-gray-600" href="#">
                Privacy Policy
              </Link>
              <Link className="text-sm text-muted-foreground hover:text-gray-600" href="#">
                Cookie Policy
              </Link>
              <div className="-mt-1">
                <a target="_blank" href="https://github.com/MaciejBodnar7/1-fgs-cobraCase">
                  <div className="flex gap-2 border border-gray-800 rounded-lg px-2 py-1">
                    <img src="/github-mark.svg" className="w-5 h-5" alt="" />
                    <p className="text-sm tracking-wide">github</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer
