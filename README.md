# Tailwind Component Library
List of pre-made tailwind components for better UI and accelerated project development. These are optimized for small, medium, and large screens.

## Usage
Copy the `.tsx` file you chose for your project inside the `src/component` folder, then import it to your project, then done!

## To run this project (General Steps):
1. Clone this repository `git clone https://github.com/khianvictorycalderon/Tailwind-Component-Library.git`
2. Run `npm install`
3. Run `npm run dev`

## Dependencies & Configuration
The following is a list of installed dependencies and configuration settings used in this project.
You don’t need to install anything manually, as all dependencies are already managed through `package.json`.
This section is provided for reference only, to give you insight into how the project was set up.

## Dependencies
- `npm install tailwindcss @tailwindcss/vite`
- `npm install gh-pages --save-dev`

## Configuration Dependencies
- Update `vite.config.ts`:
  ```ts
  import tailwindcss from '@tailwindcss/vite'

  export default defineConfig({
    plugins: [
      tailwindcss(),
    ],
  })
  ```