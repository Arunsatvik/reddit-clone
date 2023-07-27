import React from 'react';
import { useRecoilState } from 'recoil';
import { postState } from '../atoms/postsAtom';


const usePosts = () => {

    const [postStateValue, setPostStateValue] = useRecoilState(postState);

    const onVote = async () => {};

    const onSelectPost = () => {};

    const onDeletePost = async () => {};

    return {
        postStateValue,
        setPostStateValue,
        onVote,
        onSelectPost,
        onDeletePost,
    }
}
export default usePosts;