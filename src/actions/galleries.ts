const API_URL = "https://api.imgur.com/3/gallery/";

type Filter = {
  section: string
  sort: string
  window: string
  page: number
  viral: boolean
}

type FilterAction = {
  type: string
  payload: Filter
}

type DispatchType = (args: FilterAction) => FilterAction

export const asyncGetGalleries = ({
  section,
  sort,
  window,
  page,
  viral
}: Filter) => (dispatch: DispatchType) => {
  console.log('shinshinshin', viral)
  const url = `${API_URL}/${section}/${sort}/${window}/${page}?album_previews=true&showViral=${viral}`;
  fetch(url, {
    method: "GET",
    headers: {
      authorization: "Client-ID c1b77209c556d72"
    }
  })
    .then(response => {
      response.json().then(
        data =>
          page > 0
            ? dispatch({ type: "GALLERIES_NEXT_PAGE", payload: data.data })
            : dispatch({
                type: "FETCH_GALLERIES_SUCCESS",
                payload: data.data
              })
      );
    })
    .catch(function(error) {
      console.log("Request failed", error);
    });
};
