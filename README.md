### File-based Routing

- We can use restful style routing for a uniformed routing style (with GET method only)
- Example: `pages/posts/create-post.jsx

**Advantages**

- **code-splitting** Each routes are automatically splitted
- **pre-loading** Linked page is pre-loaded whenever its link element is present in the current page

### Template

Use Link in next.js to direct router

{' '} adds an empty space, which is used to divide text over multiple lines.

example code at `/pages/index.js`

```html
        <h1 className="title">
          Read{" "}
          <Link href="/posts/first-post">
            <a>this page!</a>
          </Link>
        </h1>
```

### Handle Assets

- Use `next/image` element to handle image optimization

**Image Component and Image Optimization**

- Lazy loaded by default
- Allow resizing, optimizing, and serving images in modern formats like WebP when the browser supports it.
- Optimization works with any image source. Even if the image is hosted by an external data source, like a CMS, it can still be optimized.

### customize head and add metatag

- API reference for next/head.
- To customize the <html> tag, creat a pages/\_document.js file documentation.

**Head**

- To avoid duplicate tags in your head you can use the key property, which will make sure the tag is only rendered once

```jsx
import Head from "next/head";

function IndexPage() {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Head>
        <meta property="og:title" content="My new title" key="title" />
      </Head>
      <p>Hello world!</p>
    </div>
  );
}

export default IndexPage;
```

### Next Script element

- **strategy** controls when the third-party script should load. A value of lazyOnload tells Next.js to load this particular script lazily during browser idle time
- **onLoad** is used to run any JavaScript code immediately after the script has finished loading. In this example, we log a message to the console that mentions that the script has loaded correctly

For example,

```JSX
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload" // load after the page content has been loaded
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
```

Renders this:

```html
<script src="https://connect.facebook.net/en_US/sdk.js?hash=48c2dd657da88eef6b8788e60373e23c" async="" crossorigin="anonymous"></script>
```

### CSS styling

- To use CSS Modules, the CSS file name must end with .module.css.
- Next.js’s code splitting feature works on CSS Modules as well. It ensures the minimal amount of CSS is loaded for each page
- Next.js also supports built-in sass

To use the class inside JSX file, you need to:

Import the CSS file and assign a name to it, like styles
Use styles.<class name> as the className

## Rendering Methodologies

### Static Generation vs. Server-side

- Next.js lets you choose which pre-rendering form to use for each page
- **Static Generation** is the pre-rendering method that generates the HTML at build time. The pre-rendered HTML is then reused on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on each request.
  > In development mode (when you run npm run dev or yarn dev), every page is pre-rendered on each request — even for pages that use Static Generation.

Overall, use Static Generation whenever possible. But there's an exception: Static Generation is not a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

Next.js uses Static Generation by default in production mode, but is Server-rendered when run dev.

If specific data needs to be fetched befor Static Generation, we can use **Static Generation with Data** using getStaticProps

More Comparison in official doc: [LINK](https://nextjs.org/learn/basics/data-fetching/two-forms#:~:text=When%20to%20Use%20Static%20Generation%20v.s.%20Server%2Dside%20Rendering)
