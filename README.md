# Hello World electronjs

## Based on

[Electron-Forge Getting Started](https://www.electronforge.io/#the-basics)
[electron in action](https://github.com/electron-in-action/firesale/blob/chapter-7/app/main.js)

## Execution

```
npm start
```

And, if you type `rs` (and hit enter) in the same terminal where you ran the start command, the running app will be terminated and restarted.

## Packaging

```
npm run make
```

After building the app, you can run it with:

```
./out/hello-electron-linux-x64/hello-electron
```

And you will find distribution package in:

```
out/
└── make/
    └── deb/
        └── x64/
            └── hello-electron_0.1.0_amd64.deb
```
