import { useCallback } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const useThunk = (thunk) => {
   const [isLoading, setIsLoading] = useState(false);
   const [isError, setIsError] = useState(null);

   useCallback(
      () => {

      },
      [],
   )

   const dispatch = useDispatch();
   const runThunk = useCallback((arg) => {
      setIsLoading(true);
      dispatch(thunk(arg))
         .unwrap()
         .catch((err) => setIsError(err))
         .finally(() => setIsLoading(false))
   }, [dispatch, thunk]);

   return [
      runThunk,
      isLoading,
      isError,
   ]
}