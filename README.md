<!--
 Copyright 2022 Indoc Research
 
 Licensed under the EUPL, Version 1.2 or – as soon they
 will be approved by the European Commission - subsequent
 versions of the EUPL (the "Licence");
 You may not use this work except in compliance with the
 Licence.
 You may obtain a copy of the Licence at:
 
 https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 
 Unless required by applicable law or agreed to in
 writing, software distributed under the Licence is
 distributed on an "AS IS" basis,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 express or implied.
 See the Licence for the specific language governing
 permissions and limitations under the Licence.
 
-->

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


# coding standards

## Folder

```jsx
- components
	- Common // for shared component
	- About
		- AboutHeader
			- AboutHeader.tsx
			- AboutHeader.module.scss
		- AboutFooter
			- AboutFooter.tsx
			- AboutFooter.module.scss
- pages
	- index.tsx
	- about
		- index.tsx
		- index.module.scss
		- about-sub
			- index.tsx
			- index.module.scss
```

- for pages, all folder and `.tsx` files are `kebab-case`. For each route, defined a folder for that route, and create `index.tsx` for the page. directly use `about/about-sub.tsx` is not recommended, since we may introduce style file or test file for that `.tsx` in the  future.
- Components are grouped by page in the `compoents` folder. For example, `component/About` contains all the components for `about` page. All the folders in `component/About` are flatten. That means each component has its own folder, and each folder only contains one component without nested folders. All folder and `.tsx` file in `components` are `PascalCase` .

## React Component

```jsx
import React, { useState } from "react";
// other imports

// require or decomposing object
const _ = require('lodash');
const { Content } = Layout;

// local constant
const MAX_ITEMS = 20;

function About(props) {
  // 1. decompose props
  const {name,path,description} = props;
  // 2. hook for states
  const [loading, setLoading] = useState(false);
  const {username} = useSelector(state=>state);
  const func = useMemo(()=>{},[]);

  //3. useEffect
  useEffect(()=>{
    func();
  },[]);

  // 4. helper functions
  const submitForm = (form)=>{
    // 
  }

  // 5. event methods
  const onFinish = ()=>{
    submitForm(form)
  }

  const onClick = ()=>{

  };

  // 6. data transformation for complicated data structure
  const birthplaces = users.map(user=>user.info?.birthplaces);

  // 7. if a component has too many props, extract them into a object and define it here
  const aboutSubProps = {
    name,
    path,
    loading,
    setLoading,
    //...
  };

  // 8. if the returned jsx is too long, extract some of them into constant here
  const LeftSideBar = (<div>{/* around 10-50 lines of code */}</div>);

  // 9. return 
  return <div>
    {LeftSideBar}
    <AboutSub {...aboutSubProps} />
  </div>
}
```

The react component can be written as above.

If the `.tsx` file is more than 250 lines, consider a refactoring.

## Scss file

defined class as `kebab-case`, like `about-header`. Then use the class in jsx like:

```jsx
import styles from './index.module.scss'

//...
<div className={styles["about-header"]} ></div>
```