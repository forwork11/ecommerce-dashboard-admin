import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { storeAuth } from '../actions/User';
import STORAGE from '../constants/storage';
import { getStorage } from '../utils/utils';

const AppProvider = ({ children }) => {
    const [ready, setReady] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const auth = getStorage(STORAGE.AUTH);
        if (auth) {
            dispatch(storeAuth(auth));
        }
        setReady(true);
    }, [dispatch]);

    return ready && <>{children}</>;
};

export default AppProvider;