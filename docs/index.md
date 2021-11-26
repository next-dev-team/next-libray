---
title: Components Next - Collections of components and useful helper
order: 10
hero:
  title: Components Next
  desc: 📖 All in one React Ecosystem Product Ready - (UI - Utils - Docs - Best Practice)
  actions:
    - text: Getting Started
      link: /components/card/blog
features:
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
    title: Out of the box
    desc: Elegant default configrations and convention routing assist developers to get started as simple as possible, that focus all attentions on developing libraries & writting docs
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png
    title: For developing libraries
    desc: Rich Markdown extensions are not limited to rendering component demos, making component documents not only easy to write and manage, but also beautiful and easy to use
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/b8570f4d-c1b1-45eb-a1da-abff53159967/kj9t990h_w144_h144.png
    title: Theme system
    desc: Progressive custom theme capabilities, ranging from expanding your own Markdown tags to customizing complete theme packages, are up to you

footer: Open-source MIT Licensed | Copyright © 2021-present<br />Powered by Next Dev
---

## 📦 Install

```bash
yarn add components-next  or npm install components-next
```

## 🔨 Usage

import whole style: `root app: App.tsx or index.tsx`

```bash
import 'components-next/es/assets/styles.css';
```

import style on demand : in case we need only

```bash
import 'components-next/es/button/button.css';
```

## Demo

```bash
import { Button } from 'components-next';

const ButtonDemo = () => {
  return (
    <Button>
      Add
    </Button>
  );
};
```

```tsx
/**
 * motions:
 *  - click:[data-action="add"]
 *  - timeout:500
 *  - click:[data-action="minus"]
 *  - timeout:500
 */
import React, { useState } from 'react';
import { Button } from 'components-next';

export default () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex gap-4 items-center">
      <Button data-action="minus" onClick={() => setCount(count - 1)}>
        Minus
      </Button>
      <h4 className="mb-0">{count}</h4>
      <Button data-action="add" onClick={() => setCount(count + 1)} color="success">
        Add
      </Button>
    </div>
  );
};
```

## ⌨️ Development

Use Gitpod, a free online dev environment for GitHub.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/ant-design/ant-design)

Or clone locally:

```bash
$ git clone git@github.com:ant-design/ant-design.git
$ cd ant-design
$ npm install
$ npm start
```

Open your browser and visit http://127.0.0.1:8001 , see more at [Development](https://github.com/ant-design/ant-design/wiki/Development).

## 🤝 Contributing [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

Read our [contributing guide](https://ant.design/docs/react/contributing) and let's build a better components-next together.

We welcome all contributions. Please read our [CONTRIBUTING.md](https://github.com/ant-design/ant-design/blob/master/.github/CONTRIBUTING.md) first. You can submit any ideas as [pull requests](https://github.com/ant-design/ant-design/pulls) or as [GitHub issues](https://github.com/ant-design/ant-design/issues). If you'd like to improve code, check out the [Development Instructions](https://github.com/ant-design/ant-design/wiki/Development) and have a good time! :)
