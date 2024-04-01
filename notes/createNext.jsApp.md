# CREATE AN APP WITH NEXT.JS

## CREATE A REACT APP USING NEXT.JS

1. Open the CLI & create the project directory _mkdir project-name_
2. Navigate to the directory _cd project-name_
3. Create a package.json file by typing _npm init_
4. Create a sample project by typing _npm install --save next react react-dom_
5. Create a directory called (“pages”). It is important that this directory is called pages.
   Next.js does file-system routing. It will serve each file in a directory called ‘pages’ under a pathname matching the filename.
6. Add a JS file called index.js to the pages directory. In this file create a React component:
   ```
   function Welcome() {
   return <h1>Hello, I can use Next!!!</h1>;
   }
   export default Welcome;
   ```
7. Add another JS file called about.js in the pages directory. Add the following code:
    ```
    export default () => (
      <div>
        <p>This is the about page</p>
      </div>
    )
    ```
8. Open the package.json file and add the following:
   ```
   {
     "scripts": {
       "dev": "next",
       "build": "next build",
       "start": "next start"
     }
   }
   ```
9. Run the development server by typing:
    ```
    npm run dev
    ```

10. Then open http://localhost:3000. (alt + click)
