// @flow

interface ErrorResponse<S> {
  status: S,
}

interface JSONResponse<S,J> {
  status: S,
  json(): Promise<J>,
}

type DecrementJSON = { count: number }
type DecrementResponse = ErrorResponse<400,string>
                       | JSONResponse<200,DecrementJSON>

// If Response.status was `$Subtype<number>` then this work work :'(
// http://stackoverflow.com/questions/39175842/validating-api-responses-with-flowtype
// export const decrement = async (count : number) : Promise<DecrementResponse> =>
export const decrement = async (count : number) : Promise<Response> =>
  fetch('/dec', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ count }),
  })
