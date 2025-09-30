import { useState } from "react"
import RegularText from "./components/fonts";

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
          Sample Fonts

          <RegularText>Hello there Friend</RegularText>

        </div>
      )}

    </>
  )
}