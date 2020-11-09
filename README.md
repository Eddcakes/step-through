## step-through

Created as a concept for an SPFx solution for quickly creating/editing step by step guides.

The implemented version breaks the data up into two api requests to SharePoint lists for header details (title, description and tags) and the steps (steps, images and captions)

## todo

- [x] download guides as pdf

React-pdf works really nicely, allows you to select the text in the pdf rather than just creating an image from your components then converting to pdf. Could create <Image /> of the radio buttons to make the pdf look a little more consistent with the web view

## codeSandbox

codeSandbox version available [here](https://codesandbox.io/s/stepthrough-k1fcp)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
