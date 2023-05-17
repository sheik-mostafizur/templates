# Templates for React (vite)

## Install simple vite + react

```
npm create vite@latest simple -- --template react
cd simple
npm install
npm run dev
```

## Install react-router vite + react + router

```
npm create vite@latest react-router -- --template react
cd react-router
npm install
npm install react-router-dom localforage match-sorter sort-by
npm run dev
```

## Install router-tailwind vite + react + router + tailwind

```
npm create vite@latest router-tailwind -- --template react
cd router-tailwind
npm install
npm install react-router-dom localforage match-sorter sort-by
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm run dev
```
