Design-wise, the form is a mix between the two given examples. It's styled with basic CSS since it was really simple, though in a real-life application it would probably use a more ready-made solution with MUI/styled-components or similar. I was afraid of using too much pre-made form code, since it somewhat defeats the point of the exercise. 

The SPA is responsive and is made with mobile-first in mind.

This form uses react-hook-form, which is a widely-used library for controlling forms in React. I was unsure if this is permitted, but, generally, using useState({formObject}) solution causes a lot of rerenders when changing state on every input from the user. Implementing one over the other doesn't seem different in difficulty, so I went with what I feel is a more standard solution.

To preserve Airbnb styling, I used eslint and ran it to check and fix issues with the code. React-hook-form isn't compliant with Airbnb so there are still some styling errors logging because of it. 

The form is checked for whether or not all necessary fields are properly filled when the submit button is clicked. If there are errors, it alerts the user of which fields need to be filled. If everything is done properly, the data is sent to Hookbin and the user is alerted that the form was successfully sent. 

To use the app:

Once all the files are unzipped to a directory run the following npm command to install all the dependencies:

npm install package.json

Once everything finishes successfully, a dev version of the site can be started using 

npm run dev

The site is built using Vite. To access the sent form data (which is sent as an object) you can use the API key and replace the domain from hookb.in to https://hookbin.com/ and go to it in a browser window. Currently, the request can be viewed at: https://hookbin.com/Z2V63laXKyTKWedKLwXq This solution should work with most APIs. 

Use 

npm run build

to compile a production-ready version of this SPA. For convenience, one such build is deployed to: https://62f0d3888fac9d4a15d7720c--ornate-bubblegum-bbe4f1.netlify.app/