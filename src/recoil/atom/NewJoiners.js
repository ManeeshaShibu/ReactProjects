import { atom } from 'recoil';

const newJoiners = atom({
    key: 'newJoiners',
    default: []
});

export default newJoiners;