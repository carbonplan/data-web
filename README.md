<p align="left" >
<a href='https://carbonplan.org'>
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://carbonplan-assets.s3.amazonaws.com/monogram/light-small.png">
  <img alt="CarbonPlan monogram." height="48" src="https://carbonplan-assets.s3.amazonaws.com/monogram/dark-small.png">
</picture>
</a>
</p>

# carbonplan / data web

**index of datasets produced by carbonplan**

[![CI](https://github.com/carbonplan/data-web/actions/workflows/main.yml/badge.svg)](https://github.com/carbonplan/data-web/actions/workflows/main.yml)
![GitHub deployments](https://img.shields.io/github/deployments/carbonplan/data-web/production?label=vercel)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

This repository contains the directory of data products produced at CarbonPlan. Browse the live version at TK.

The site is a [Next.js](https://nextjs.org/) project, deployed on [Vercel](https://vercel.com/).

## to build the site locally

Assuming you already have `Node.js` installed, you can install the build dependencies as:

```shell
npm install .
```

To start a development version of the site, simply run:

```shell
npm run dev
```

and then visit `http://localhost:4002/data` in your browser.

## to build PDF version of the catalog

Confirm that the development server is running and then run:

```shell
npm run print
```

You can then view the date-annotated PDF of the catalog in the `pdfs/` folder.

## license

All the code in this repository is [MIT](https://choosealicense.com/licenses/mit/)-licensed. When possible, the data is licensed using the [CC-BY-4.0](https://choosealicense.com/licenses/cc-by-4.0/) license. We include attribution and additional license information for third party datasets, and we request that you also maintain that attribution if using this data.

## about us

CarbonPlan is a nonprofit organization that uses data and science for climate action. We aim to improve the transparency and scientific integrity of carbon removal and climate solutions through open data and tools. Find out more at [carbonplan.org](https://carbonplan.org/) or get in touch by [opening an issue](https://github.com/carbonplan/data-web/issues/new) or [sending us an email](mailto:hello@carbonplan.org).
