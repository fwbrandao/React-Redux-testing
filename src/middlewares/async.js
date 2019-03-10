export default ({ dispatch }) => next => action => {
    // CHECK TO SEE IF ACTION HAS PROMISE
    debugger;
    if (!action.payload || !action.payload.then) {
        return next(action);
    }

    // CREATE NEW ACTION AND DISPATCH IT
    action.payload.then(function(response) {
        const newAction = { ...action, payload: response };
        dispatch(newAction);
    });
}

