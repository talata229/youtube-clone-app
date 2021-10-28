import {
  CHANNEL_VIDEOS_FAIL,
  CHANNEL_VIDEOS_REQUEST,
  CHANNEL_VIDEOS_SUCCESS,
  GET_LIST_VIDEO_CATEGORY_FAIL,
  GET_LIST_VIDEO_CATEGORY_REQUEST,
  GET_LIST_VIDEO_CATEGORY_SUCCESS,
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
  RELATED_VIDEO_FAIL,
  RELATED_VIDEO_REQUEST,
  RELATED_VIDEO_SUCCESS,
  SEARCH_VIDEO_FAIL,
  SEARCH_VIDEO_REQUEST,
  SEARCH_VIDEO_SUCCESS,
  SELECTED_VIDEO_FAIL,
  SELECTED_VIDEO_REQUEST,
  SELECTED_VIDEO_SUCCESS,
  SUBSCRIPTIONS_CHANNEL_FAIL,
  SUBSCRIPTIONS_CHANNEL_REQUEST,
  SUBSCRIPTIONS_CHANNEL_SUCCESS,
} from '../actionType';

const initialState = {
  loading: false,
  videos: [],
  nextPageToken: null,
  activeCategory: 'All',
};

export const homeVideosReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case HOME_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case HOME_VIDEOS_SUCCESS:
      return {
        ...state,
        loading: false,
        videos:
          state.activeCategory === payload.category
            ? [...state.videos, ...payload.videos]
            : payload.videos,
        nextPageToken: payload.nextPageToken,
        activeCategory: payload.category,
      };
    case HOME_VIDEOS_FAIL:
      return {
        ...state,
        loading: false,
        videos: [],
        error: payload,
      };

    default:
      return state;
  }
};

export const selectedVideoReducer = (
  state = {
    loading: true,
    video: null,
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case SELECTED_VIDEO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SELECTED_VIDEO_SUCCESS:
      return {
        ...state,
        loading: false,
        video: payload,
      };
    case SELECTED_VIDEO_FAIL:
      return {
        ...state,
        loading: false,
        video: null,
        error: payload,
      };

    default:
      return state;
  }
};

export const relatedVideosReducer = (
  state = {
    loading: true,
    videos: [],
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case RELATED_VIDEO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case RELATED_VIDEO_SUCCESS:
      return {
        ...state,
        loading: false,
        videos: payload,
      };
    case RELATED_VIDEO_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const searchedVideosReducer = (
  state = {
    loading: true,
    videos: [],
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_VIDEO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_VIDEO_SUCCESS:
      return {
        ...state,
        loading: false,
        videos: payload,
      };
    case SEARCH_VIDEO_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const subscriptionsChannelReducer = (
  state = {
    loading: true,
    videos: [],
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case SUBSCRIPTIONS_CHANNEL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SUBSCRIPTIONS_CHANNEL_SUCCESS:
      return {
        ...state,
        loading: false,
        videos: payload,
      };
    case SUBSCRIPTIONS_CHANNEL_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const channelVideosReducer = (
  state = {
    loading: true,
    videos: [],
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case CHANNEL_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CHANNEL_VIDEOS_SUCCESS:
      return {
        ...state,
        loading: false,
        videos: payload,
      };
    case CHANNEL_VIDEOS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const videoCategoriesReducer = (
  state = {
    loading: true,
    categories: [],
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case GET_LIST_VIDEO_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_LIST_VIDEO_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: payload,
      };
    case GET_LIST_VIDEO_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        categories: [],
        error:payload
      };
    default:
      return state;
  }
};
