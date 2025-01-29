# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Actions and useActions 

work with Redux or React-Query but not part of react itself 

- add useTransition() hook 
    to handle pending state 
- add useActionState() hook 
    accept function and return a wrapped action to call (return the last result of action as data and pendignstate as pending )
- Actions handle:
    a- Pending state
    b- Optimistic updates (useOptimistic hook)
    c- Error handling
    d- Forms (support passing action and formActions props )