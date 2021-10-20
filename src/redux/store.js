import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/auth.reducer';
import { channelDetailsReducer } from './reducers/channel.reducer';
import { commentListReducer } from './reducers/commentList.reducer';
import { channelVideosReducer, homeVideosReducer, relatedVideosReducer, searchedVideosReducer, selectedVideoReducer, subscriptionsChannelReducer } from './reducers/video.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  homeVideos: homeVideosReducer,
  selectedVideo: selectedVideoReducer,
  channelDetails: channelDetailsReducer,
  commentList: commentListReducer,
  relatedVideos: relatedVideosReducer,
  searchedVideos: searchedVideosReducer,
  subscriptionsChannel: subscriptionsChannelReducer,
  channelVideos: channelVideosReducer,
});

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
