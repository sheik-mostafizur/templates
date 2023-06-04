# Templates for React (vite)

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
