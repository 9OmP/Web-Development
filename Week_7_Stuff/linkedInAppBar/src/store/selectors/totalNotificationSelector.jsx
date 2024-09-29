import { selector } from 'recoil';
import { networkAtom } from '../atoms/atoms';

export const totalNotificationSelector = selector({
        key: "totalNotificationSelector",
        get: ({get}) =>{
            const allNotifications = get(networkAtom);
            return allNotifications.network +
            allNotifications.jobs +
            allNotifications.notifications +
            allNotifications. messaging
        }
})


