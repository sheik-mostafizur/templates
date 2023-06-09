# Templates for React (vite)

## If you use this command please replace the template with (src/, .eslintrc.cjs, tailwind.config.js)

### Or goto any template and just command it ```npm install```


## Install frontend

```
npm create vite@latest frontend -- --template react
cd frontend
npm install
npm install react-router-dom localforage match-sorter sort-by
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install firebase
npm install react-hook-form
npm run dev
```

#### Create **.env.local** using vite env variables for firebase

```
VITE_APIKEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
VITE_AUTHDOMAIN=xxxxxxxxxxxxxxxxxxxxxxx
VITE_PROJECTID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
VITE_STORAGEBUCKET=xxxxxxxxxxxxxxxxxxxxx
VITE_MESSAGINGSENDERID=xxxxxxxxxxxxxxxxxxxxx
VITE_APPID=1:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
VITE_MEASUREMENTID=xxxxxxxxxxxxxx
```


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

## Install vrrt-firebase vite + react + router + tailwind + firebase

```
npm create vite@latest vrrt-firebase -- --template react
cd vrrt-firebase
npm install
npm install react-router-dom localforage match-sorter sort-by
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install firebase
npm run dev
```

#### Create **.env.local** using vite env variables for firebase

```
VITE_APIKEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
VITE_AUTHDOMAIN=xxxxxxxxxxxxxxxxxxxxxxx
VITE_PROJECTID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
VITE_STORAGEBUCKET=xxxxxxxxxxxxxxxxxxxxx
VITE_MESSAGINGSENDERID=xxxxxxxxxxxxxxxxxxxxx
VITE_APPID=1:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
VITE_MEASUREMENTID=xxxxxxxxxxxxxx
```
