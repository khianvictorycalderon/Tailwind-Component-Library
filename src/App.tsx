import { useState } from "react"
import {
  HeroHeadingText,
  HeroSubHeadingText,
  SubHeadingText,
  BaseText,
  CaptionText,
  OverlineText,
} from "./component/typography";
import { NavBar } from "./component/navbar";
import { Hero } from "./component/hero";

export default function App() {
  
  const [page, setPage] = useState<string>("home");
  const components: string[] = [
    "Typography",
    "Navigation Bar",
    "Centered Navigation Bar",
    "Hero Section",
    "Centered Hero Section",
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

      {page === "Navigation Bar" && (
        <NavBar 
          className="bg-gray-900 text-white shadow-lg"
          image="picture.png"
          title="Business Store"
          buttonsAlignment="right"
          buttons={[
            {
              label: "Home",
              action: () => alert("Clicked Home"),
              className: "hover:bg-gray-700 px-5 py-2 font-medium rounded-lg"
            },
            {
              label: "Shop",
              action: () => alert("Clicked Shop"),
              className: "hover:bg-gray-700 px-5 py-2 font-medium rounded-lg"
            },
            {
              label: "Contact",
              action: () => alert("Clicked Contact"),
              className: "hover:bg-gray-700 px-5 py-2 font-medium rounded-lg"
            }
          ]}
        />
      )}

      {page === "Centered Navigation Bar" && (
        <NavBar 
          className="bg-white text-gray-900 border-b border-gray-200"
          image="picture.png"
          title="Creative Blog"
          buttonsAlignment="center"
          buttons={[
            {
              label: "Articles",
              action: () => alert("Clicked Articles"),
              className: "hover:bg-blue-100 hover:text-blue-600 px-5 py-2 font-medium rounded-lg"
            },
            {
              label: "Tutorials",
              action: () => alert("Clicked Tutorials"),
              className: "hover:bg-blue-100 hover:text-blue-600 px-5 py-2 font-medium rounded-lg"
            },
            {
              label: "About Me",
              action: () => alert("Clicked About Me"),
              className: "hover:bg-blue-100 hover:text-blue-600 px-5 py-2 font-medium rounded-lg"
            }
          ]}
        />
      )}

      {page === "Hero Section" && (
        <Hero
          background="linear-gradient(135deg, #667eea, #764ba2)"
          heading="Empower Your Ideas 🚀"
          subheading="Build, deploy, and scale faster than ever with modern React tools."
          cta_buttons={[
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full">
              <BaseText className="text-white font-semibold">Get Started</BaseText>
            </button>,
            <button className="border border-white px-6 py-3 rounded-full">
              <BaseText className="text-white font-semibold">Learn More</BaseText>
            </button>,
          ]}
          logo="picture.png"
        />

      )}

    </>
  )
}