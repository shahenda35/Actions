# Actions and useActions 
    work with Redux or React-Query but not part of react itself 
1- add useTransition() hook 
    to handle pending state 
2- add useActionState() hook 
    accept function and return a wrapped action to call (return the last result of action as data and pendignstate as pending )
3- Actions handle:
    a- Pending state
    b- Optimistic updates (useOptimistic hook)
    c- Error handling
    d- Forms (support passing action and formActions props )