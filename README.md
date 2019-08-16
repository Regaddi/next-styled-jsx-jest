# next-styled-jsx-jest
Reproduction repo for Warning: Received `true` for a non-boolean attribute `jsx`.

## How to reproduce

Run `yarn && yarn test`. It will produce this Warning:

```
  console.error node_modules/react-dom/cjs/react-dom.development.js:545
    Warning: Received `true` for a non-boolean attribute `jsx`.
    
    If you want to write it to the DOM, pass a string instead: jsx="true" or jsx={value.toString()}.
        in style
        in Unknown
```
