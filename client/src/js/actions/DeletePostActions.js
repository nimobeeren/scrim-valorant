import { fetchPosts } from "./PostActions";

export const POST_DELETE_REQUEST = "POST_DELETE_REQUEST";
function requestDeletePost(post, user) {
  return {
    type: POST_DELETE_REQUEST,
    post,
    user,
  };
}

export const POST_DELETE_SUCCESS = "POST_DELETE_SUCCESS";
function successDeletePost(post, filters, user, response) {
  return {
    type: POST_DELETE_SUCCESS,
    post,
    filters,
    user,
    response,
  };
}

export const POST_DELETE_FAIL = "POST_DELETE_FAIL";
function failDeletePost(post, user, response) {
  return {
    type: POST_DELETE_FAIL,
    post,
    user,
    response,
  };
}

export function deletePost(post, filters, user) {
  return async function (dispatch) {
    dispatch(requestDeletePost(post, user));
    const response = await fetch(`/api/posts/${post._id}`, {
      method: "DELETE",
      headers: {
        Authorization: user.token,
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      dispatch(successDeletePost(post, filters, user, response));
      dispatch(fetchPosts(filters)); // update post list after deleting post
    } else {
      // TODO: Handle failure
      dispatch(failDeletePost(post, user, response));
    }
  };
}
