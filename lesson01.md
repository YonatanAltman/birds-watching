# Angular intro

## install pnpm
```bash
  npm i pnpm
```
## install angular 18
```bash
  pnpm i @angular/cli@18
```

## check angular cli
```bash
  ng --version
```

## create new app
```bash
  ng new [app name]
```

## generate component with --standalone
```bash
  ng generate component [component name] --standalone
```

## Data binding
### component.ts:

```typescript

@Component({
  ...
})
export class MyComponent {
  name: string = 'Yonatan'
}
```
### component.html:

```html
<h2>{{name}}</h2>
<input [value]="name" type="text">
```
