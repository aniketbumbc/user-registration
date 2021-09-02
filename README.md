# User Registration Form Application

In this application user can able to fill personal information,address and payment information in step form format and on submit user can see payment id.

- First Name, Last name, Phone number
- Street Name, House number, zip code, City,
- Account owner name, Iban number
- Payment Id at successful submit payment.

## Features

- On an application load successfully user will able fill personal information form. Once three all fields of first form then user can able to move next step.
- If any field missing and click on next button user will see alert message and can't move next step.
- Onces sucessful step 1 ( personal information ) user can fill address information. At this stage user can can see pervious inforamtion.
- After successful step 1 and step 2 fill user need to submit payment information for successful payment id will receive.
- On next button click state and local stoarage save and then only persist.
- In the case of error user can see error code and message on screen.
- Loader added while submitting payment data.
- At any step user can leave step data still present on form. I handled by using local stoarage.

## Technology

### Frontend

- Frontend stack is **React-typescript,hooks,redux-typescript for state management and scss.**
- Implementation of application using five componets,**Payment,Address,PersonaInfo,Error,Success** components.
- I also added **loader** while submiting payment request.
- Runs the app in the development mode.
- Open **http://localhost:3000** to view it in the browser.

### Describe possible optimizations for your code.

- I will add React.fragments to avoid additional html element wrappers.
- I will try to use Reselect is a simple selector library for Redux, which can be used for building memorized selectors.
- I can define selectors as a function, retrieving snippets of the Redux state for React components.
- Memoize React Components If possible that help faster funcation call because if the function is called with the same values as the previous one then instead of executing function logic it would fetch the result from cache.
- I will also consider server-side rendering it is a better experience for user, as they will receive viewable content faster than they would with a client-side rendered application.
- I will consider having two separate files by separating your vendor, or third-party library code from your application code by taking advantage of CommonsChunkPlugin for webpack. that help me with vendor.bundle.js and app.bundle.js.
- By splitting your files, my browser caches less frequently and parallel downloads resources to reduce load time wait.

### Which things could be done better, than you’ve done it?

- I will try to implement more styling add on scss style for better visual effects.
- I would prefered to handle CORS on server side rather than front end side.
- Nice way to validated input fields. Currently alert message in pop-up.
- Disabel effects on buttons.

## Installation

**Need apisever run simultaneously**

```sh
clone repo
cd user-registration
npm install
npm start
```

## Preview

![User Registration](https://media.giphy.com/media/AnI7N6c1ckyyvnSko3/giphy.gif?cid=790b7611635db50a53786ea1176d4f7f1b98234681136eb2&rid=giphy.gif&ct=g)
