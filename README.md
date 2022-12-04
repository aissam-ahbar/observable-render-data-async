# Observables to render data asynchronously

Observables allow to render data asynchronously.

You can cancel an observable, follow progress and subscribe to it.

```
# app.component.ts
  public observable$: Observable<number> = interval(1000);
```

```
# app.component.html (unsubscribed automatically)
{{ observable$ | async }}
```
