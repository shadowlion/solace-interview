# Discussion Topics

I broke it down into three sections; hopefully it is easy to follow!

## What I noticed (initially)

- Especially if we're using Typescript, it would be nice to have a type that describe the shape of an advocate data item.
- I noticed, just from the initial code, the table would "flash" an empty state before rendering the elements
- In the `onChange()` function, we were trying to programmatically set "innerHTML".
- In the `onClick()` function, code-wise it looked like it didn't clear the search input value.

## What I did

- Created a type based on the seeded data shape
- Created a Context Provider and hook for state management
- Increased the complexity of state we didn't account for (i.e. loading, error, etc).
- Separated components out of the Page component to minimize state changes to other sections of the app and improve render performance
- Improved the filter function (had no types, and only typing words of a certain condition made it work initially, if at all)
- Stylistically, added a barrel file for components
- Styled the search bar and table
- Refactored the API call to limit data (WIP)

## What could have been done/improved

- It have been nicer if I could use something like `InferSelectModel` from Drizzle on the table schema, but I was running into issues initially, so I deferred this
- I could have created tests to battle-harden the filter function (manually tested to fix it).
- Eventually, it looks like one could improve context provider it by extending it with other actions based on the current iteration (i.e. `RESET_SEARCH`), but could include other thigns such as sorting, ordering, etc., so it's good that the initial start to the context prvoider allow future scalability.
- I could have also incorporated both the `loading` and `error` states of the context provider into the hook. This probably would have been done if I started testing the hook itself.
- I could have made the Search and Table components a little dumber; it might be useful at times to instead send data as props, but with the way the data flows with context providers, I just felt at the time that it easier to import a hook.
- Error handling at various places (i.e. api call, display, etc).
- I was unable to finish, but pagination would be nice, considering there maybe hundreds and thousands of advocates in the database; I've set it up so it limits the options and included a total count, and this should be enough to increase the complexity of the state (i.e. table)
- I could have styled it better :(
