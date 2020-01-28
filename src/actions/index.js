import jsonPlaceholder from '../apis/jsonPlaceHolder';

export const fetchPosts = async () => {
    const response = await jsonPlaceholder.get('/posts');

    return {
        type: 'FETCH_POST',
        payload: response
    };
};
