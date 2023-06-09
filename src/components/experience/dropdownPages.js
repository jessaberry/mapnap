import PageAccommodation from './PageAccommodation';
import PageAttraction from './PageAttraction';
import PageDining from './PageDining';
import PageOther from './PageOther';

const dropdownPages = [
    { path: '/accommodation', component: PageAccommodation },
    { path: '/attraction', component: PageAttraction },
    { path: '/dining', component: PageDining },
    { path: '/other', component: PageOther },
];
export default dropdownPages;