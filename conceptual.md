### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  - React Router allows us to build a single-page web application with navigation without the page refreshing as the user navigates.

- What is a single page application?
  - A single-page application (SPA) is a web application or website that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of the browser loading entire new pages.

- What are some differences between client side and server side routing?
  - Server sides needs to keep making requests to the server in order for the application to rerender, but client side does not need to keep make request to the server, it just does it once when the application is being loaded into the browser.

- What are two ways of handling redirects with React Router? When would you use each?
  - redirect and .push method on the history object
  - Redirect is useful for 404 error
  - .push is useful for after form submission

- What are two different ways to handle page-not-found user experiences using React Router? 
  - Using redirect inside your Switch router
  - Having a route without a path at the end of your Switch router

- How do you grab URL parameters from within a component using React Router?
  - with the useParams hook

- What is context in React? When would you use it?
  - Universal data accessible across all components/applications
  - It's useful for global themes or shared data

- Describe some differences between class-based components and function components in React.
  - Class-based components define state as an instance property or in the constructor, default props are a class property, they use keywords this and the bing function

- What are some of the problems that hooks were designed to solve?
  - Sharing code across components without extensive code duplication