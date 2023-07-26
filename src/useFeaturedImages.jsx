import { useReducer, useEffect } from "react";

const INITIAL_INDEX = 0;

function reducer(state, action) {
  const numImages = state.featuredImages.length;
  switch (action.type) {
    case "begin":
      return {
        ...state,
        index: INITIAL_INDEX,
        image: state.featuredImages.at(INITIAL_INDEX),
      };

    case "next": {
      const index =
        state.index < numImages - 1 ? state.index + 1 : INITIAL_INDEX;
      return {
        ...state,
        index,
        image: state.featuredImages.at(index),
      };
    }
    default:
      throw new Error("Action not defined");
  }
}

export function useFeaturedImages(initialState) {
  const [{ index, image }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Set the image the first time
    dispatch({ type: "begin" });
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      dispatch({ type: "next" });
    }, 10000);
    return () => clearTimeout(timerId);
  }, [index, dispatch]);

  return { image };
}
