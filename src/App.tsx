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
import { CenteredHero, Hero } from "./component/hero";
import Footer from "./component/footer";
import SectionContainer from "./component/section-container";

export default function App() {
  
  const [page, setPage] = useState<string>("home");
  const components: string[] = [
    "Typography",
    "Navigation Bar",
    "Centered Navigation Bar",
    "Side Bar",
    "Hero Section",
    "Centered Hero Section",
    "Section Container",
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
        <div className="fixed bottom-5 left-5 border-1 border-black rounded-lg p-2 cursor-pointer hover:bg-black hover:text-white transition duration-300 z-[999]" onClick={() => setPage("home")}>
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

      {page == "Side Bar" && (
        <>
        </>
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

      {page === "Centered Hero Section" && (
        <CenteredHero
          background="linear-gradient(135deg, #1e3a8a, #3b82f6)"
          heading="Welcome to the Future 🚀"
          subheading="Craft amazing web experiences with modern tools."
          cta_buttons={[
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full">
              Get Started
            </button>,
            <button className="border border-white text-white px-6 py-3 rounded-full">
              Learn More
            </button>,
          ]}
        />
      )}

      {page === "Section Container" && (
        <>
          <SectionContainer className="py-4">
              <BaseText>This is a section container with pre-made X paddings based on Figma Web Design standard. Y padding is custom defined via className.</BaseText>
          </SectionContainer>
          <SectionContainer debugMode>
              <BaseText>This one with debug border.</BaseText>
          </SectionContainer>
        </>
      )}

      {page === "Footer" && (
        <Footer
          className="!bg-gray-900"
          logo="picture.png"
          sub_logos={[
            {
              image: "https://cdn-icons-png.flaticon.com/512/25/25231.png", // GitHub
              onClick: () => window.open("https://github.com/yourprofile", "_blank"),
            },
            {
              image: "https://cdn-icons-png.flaticon.com/512/733/733579.png", // Twitter
              onClick: () => window.open("https://twitter.com/yourhandle", "_blank"),
            },
            {
              image: "https://cdn-icons-png.flaticon.com/512/174/174857.png", // LinkedIn
              onClick: () => window.open("https://linkedin.com/in/yourprofile", "_blank"),
            },
          ]}
          texts={[
            {
              title: "Company",
              content: (
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="hover:text-white">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Contact
                    </a>
                  </li>
                </ul>
              ),
            },
            {
              title: "Resources",
              content: (
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="hover:text-white">
                      Docs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      API
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Blog
                    </a>
                  </li>
                </ul>
              ),
            },
            {
              title: "Legal",
              content: (
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="hover:text-white">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              ),
            },
          ]}
        />
      )}

    </>
  )
}