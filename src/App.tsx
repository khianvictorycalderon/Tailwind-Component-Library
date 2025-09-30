import { useState } from "react"
import {
  HeroHeadingText,
  HeroSubHeadingText,
  SubHeadingText,
  BaseText,
  CaptionText,
  OverlineText,
} from "./components/typography";

export default function App() {
  
  const [page, setPage] = useState<string>("home");
  const components: string[] = [
    "Typography",
    "Navigation Bar",
    "Centered Navigation Bar",
    "Hero Section",
    "Cards",
    "Footer"
  ];

  return (
    <>

      {page == "home" ? (
        <div className="p-4">
          Choose component template to browse
          <ul className="[&_li]:list-disc pl-6 [&_li]:underline [&_li]:text-cyan-600 [&_li]:cursor-pointer">
            {components.map((item, index) => (
              <li key={`${item}-${index}`} onClick={() => setPage(item)}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="fixed bottom-5 left-5 border-1 border-black rounded-lg p-2 cursor-pointer hover:bg-black hover:text-white transition duration-300" onClick={() => setPage("home")}>
          Back to Home
        </div>
      )}

      {/* All components are here... */}
      
      {page == "Typography" && (
        <div className="space-y-4 p-6">
          <OverlineText>New Release</OverlineText>
          <HeroHeadingText>Build Better Apps</HeroHeadingText>
          <HeroSubHeadingText>
            With a simple and powerful design system
          </HeroSubHeadingText>

          <SubHeadingText>Features</SubHeadingText>
          <BaseText>Our tools make your workflow easier.</BaseText>
          <CaptionText>* Early access available</CaptionText>
        </div>
      )}

    </>
  )
}