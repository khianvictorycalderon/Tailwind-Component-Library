import { useState } from "react"
import { BaseText, HeadingText, SmallText } from "./components/fonts";

export default function App() {
  
  const [page, setPage] = useState<string>("home");
  const components: string[] = [
    "Fonts",
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
      
      {page == "Fonts" && (
        <div className="p-4">
          
          <h1>Below font size changes depending on the screen size, you can also customize classNames.</h1><br/>

          <BaseText>Base Text: average text size</BaseText>
          <SmallText>Small Text: smaller than base text</SmallText>

          <br/><br/>

          <HeadingText>Heading Text: an eye-catching leading text</HeadingText>

        </div>
      )}

    </>
  )
}