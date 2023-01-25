type Filter = {
  section?: string
  sort?: string
  window?: string
  page?: number
}

type FilterAction = {
  type: string
  payload: Filter
}

type DispatchType = (args: FilterAction) => FilterAction

export const changeFilter = (params: Filter) => (dispatch: DispatchType) => {
  dispatch({
    type: "CHANGE_FILTER",
    payload: params
  });
};
