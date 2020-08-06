const INITIAL_STATE = {
  visiblity: false,
};

const progressBarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_PROGRESS_BAR": {
      return {
        ...state,
        visiblity: false,
      };
    }

    default: {
      return INITIAL_STATE;
    }
  }
};

export default progressBarReducer;
