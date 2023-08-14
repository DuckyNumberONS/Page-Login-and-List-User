import React from 'react';

import ListUser from '@/lib/view/components/list-user';
import Popup from '@/lib/hook/Context/popup';

const PageUser = () => {
    return (
        <Popup>
            <ListUser />
        </Popup>
    );
};
export default PageUser;
